const STORAGE_KEY = "reasoning:progress";
const LEGACY_STORAGE_KEY = "aprioriReasoningProgress";

const emptyProgress = {
  quantitative: { completedModules: {}, scores: {}, completedActivities: {} },
  verbal: { completedModules: {}, scores: {}, completedActivities: {} },
};

function getUserKey(userId) {
  return userId ? String(userId) : "guest";
}

function readStoredProgress() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);

    // Preserve prototype progress if it exists; do not silently discard it.
    const legacyRaw = window.localStorage.getItem(LEGACY_STORAGE_KEY);
    return legacyRaw ? JSON.parse(legacyRaw) : {};
  } catch (error) {
    return {};
  }
}

export function readReasoningProgress(userId) {
  if (typeof window === "undefined") return emptyProgress;

  try {
    const allProgress = readStoredProgress();
    const saved = allProgress[getUserKey(userId)];

    return {
      quantitative: {
        ...emptyProgress.quantitative,
        ...(saved?.quantitative || {}),
      },
      verbal: {
        ...emptyProgress.verbal,
        ...(saved?.verbal || {}),
      },
    };
  } catch (error) {
    return emptyProgress;
  }
}

export function saveReasoningProgress(userId, progress) {
  if (typeof window === "undefined") return;

  try {
    const allProgress = readStoredProgress();
    allProgress[getUserKey(userId)] = progress;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(allProgress));
  } catch (error) {
    // Ignore storage errors so learning remains usable in-session.
  }
}

export function completeReasoningActivity(userId, track, activityId, score) {
  const progress = readReasoningProgress(userId);
  const trackProgress = progress[track] || emptyProgress[track];
  const next = {
    ...progress,
    [track]: {
      ...trackProgress,
      completedActivities: {
        ...(trackProgress.completedActivities || {}),
        [activityId]: true,
      },
      scores: {
        ...(trackProgress.scores || {}),
        [activityId]: score,
      },
    },
  };

  saveReasoningProgress(userId, next);
  return next;
}

export function completeReasoningModule(userId, track, moduleId, score) {
  const progress = readReasoningProgress(userId);
  const next = {
    ...progress,
    [track]: {
      ...progress[track],
      completedModules: {
        ...progress[track].completedModules,
        [moduleId]: true,
      },
      scores: {
        ...progress[track].scores,
        [moduleId]: score,
      },
    },
  };

  saveReasoningProgress(userId, next);
  return next;
}

export function getTrackCompletedCount(progress, track, totalModules) {
  const completed = Object.keys(progress?.[track]?.completedModules || {}).filter(
    (moduleId) => progress[track].completedModules[moduleId]
  ).length;
  return Math.min(completed, totalModules);
}

export function getTrackPercent(progress, track, totalModules) {
  if (!totalModules) return 0;
  return Math.round((getTrackCompletedCount(progress, track, totalModules) / totalModules) * 100);
}

export function getTotalReasoningCompleted(progress, totalModulesPerTrack) {
  const quantitative = getTrackCompletedCount(progress, "quantitative", totalModulesPerTrack);
  const verbal = getTrackCompletedCount(progress, "verbal", totalModulesPerTrack);
  return quantitative + verbal;
}

export { STORAGE_KEY };
