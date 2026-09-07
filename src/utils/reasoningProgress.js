const STORAGE_KEY = "aprioriReasoningProgress";

const emptyProgress = {
  quantitative: { completedModules: {}, scores: {} },
  verbal: { completedModules: {}, scores: {} },
};

function getUserKey(userId) {
  return userId ? String(userId) : "guest";
}

export function readReasoningProgress(userId) {
  if (typeof window === "undefined") return emptyProgress;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const allProgress = raw ? JSON.parse(raw) : {};
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
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const allProgress = raw ? JSON.parse(raw) : {};
    allProgress[getUserKey(userId)] = progress;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(allProgress));
  } catch (error) {
    // Ignore storage errors so learning remains usable in-session.
  }
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
