import { STAGE1_MODULES } from "../Data/Reasoning/stage1Modules";
import { getActivities } from "../Data/Reasoning/activities";
import { getStage1CalibratedQuestions } from "../Data/Reasoning/stage1QuestionCalibration";

const TRACKS = ["quantitative", "verbal"];
const HALVES = ["explore", "extend"];

function numericScore(value) {
  const score = Number(value);
  return Number.isFinite(score) ? Math.max(0, Math.min(100, score)) : null;
}

function average(values) {
  const valid = values.filter((value) => value !== null);
  return valid.length ? Math.round(valid.reduce((sum, value) => sum + value, 0) / valid.length) : null;
}

function summarizeActivities(activities, progress, track) {
  const completedActivities = progress?.[track]?.completedActivities || {};
  const scores = progress?.[track]?.scores || {};
  const items = activities.map((activity) => {
    const completed = completedActivities[activity.id] === true;
    const score = completed ? numericScore(scores[activity.id]) : null;
    const questionCount = getStage1CalibratedQuestions({ track, activityId: activity.id }).length;
    return {
      id: activity.id,
      title: activity.title,
      moduleId: activity.moduleId,
      topicId: activity.topicId,
      half: activity.half,
      completed,
      score,
      questionCount,
    };
  });

  return {
    total: items.length,
    completed: items.filter((item) => item.completed).length,
    averageScore: average(items.map((item) => item.score)),
    items,
  };
}

function summarizeHalf(items) {
  return HALVES.reduce((result, half) => {
    const halfItems = items.filter((item) => item.half === half);
    result[half] = {
      total: halfItems.length,
      completed: halfItems.filter((item) => item.completed).length,
      percent: halfItems.length ? Math.round((halfItems.filter((item) => item.completed).length / halfItems.length) * 100) : 0,
      averageScore: average(halfItems.map((item) => item.score)),
    };
    return result;
  }, {});
}

function summarizeTopics(items) {
  const grouped = items.reduce((groups, item) => {
    const key = item.topicId || "Unclassified";
    if (!groups[key]) groups[key] = [];
    if (item.score !== null) groups[key].push(item.score);
    return groups;
  }, {});

  return Object.entries(grouped)
    .map(([topicId, scores]) => ({
      topicId,
      averageScore: average(scores),
      activitiesCompleted: scores.length,
    }))
    .filter((item) => item.averageScore !== null)
    .sort((a, b) => a.topicId.localeCompare(b.topicId));
}

function summarizeModules(modules, progress, track) {
  const completedActivities = progress?.[track]?.completedActivities || {};

  return modules.map((module) => {
    const activityIds = Array.isArray(module?.activityIds) ? module.activityIds : [];
    const completed = activityIds.filter((activityId) => completedActivities[activityId] === true).length;
    return {
      id: module.id,
      title: module.title,
      activityCount: activityIds.length,
      completedActivities: completed,
      complete: activityIds.length > 0 && completed === activityIds.length,
    };
  });
}

export function getStage1ReasoningAnalytics(progress) {
  const tracks = {};
  for (const track of TRACKS) {
    const activities = getActivities({ track, levelId: "L1", stageId: "S1" });
    const activitySummary = summarizeActivities(activities, progress, track);
    const modules = STAGE1_MODULES[track] || [];
    const moduleSummary = summarizeModules(modules, progress, track);
    const completedModules = moduleSummary.filter((module) => module.complete).length;

    tracks[track] = {
      totalModules: modules.length,
      completedModules,
      percent: modules.length ? Math.round((completedModules / modules.length) * 100) : 0,
      moduleCompletion: moduleSummary,
      activityCompletion: activitySummary,
      halfPerformance: summarizeHalf(activitySummary.items),
      topicPerformance: summarizeTopics(activitySummary.items),
    };

  }

  const totalModules = TRACKS.reduce((sum, track) => sum + tracks[track].totalModules, 0);
  const completedModules = TRACKS.reduce((sum, track) => sum + tracks[track].completedModules, 0);
  const allActivities = TRACKS.flatMap((track) => tracks[track].activityCompletion.items);

  return {
    overall: {
      totalModules,
      completedModules,
      percent: totalModules ? Math.round((completedModules / totalModules) * 100) : 0,
      activitiesTotal: allActivities.length,
      activitiesCompleted: allActivities.filter((item) => item.completed).length,
      questionsCompleted: allActivities.filter((item) => item.completed).reduce((sum, item) => sum + item.questionCount, 0),
      averageActivityScore: average(allActivities.map((item) => item.score)),
    },
    tracks,
    dataAvailability: {
      attemptedQuestions: false,
      difficultyPerformance: false,
      timing: false,
      growthOverTime: false,
    },
  };
}
