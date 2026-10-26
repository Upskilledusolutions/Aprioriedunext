const { getModulesForStage, getActivitiesForStage, ENGLISH_ACTIVITY_REGISTRY } = require("./englishActivityRegistry");

function getEnglishStageNavigation(levelId, stageId) {
  const modules = getModulesForStage(levelId, stageId);
  const activities = getActivitiesForStage(levelId, stageId);
  return modules.map(module => ({
    ...module,
    activities: activities.filter(activity => activity.moduleId === module.moduleId),
  }));
}

function getEnglishActivityRoute(activityId) {
  const activity = ENGLISH_ACTIVITY_REGISTRY.find(item => item.activityId === activityId);
  return activity ? `/English-Aptitude/Activity/${encodeURIComponent(activity.activityId)}` : null;
}

module.exports = { getEnglishStageNavigation, getEnglishActivityRoute };
