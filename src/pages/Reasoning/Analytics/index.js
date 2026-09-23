import Head from "next/head";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { readReasoningProgress } from "../../../utils/reasoningProgress";
import { getStage1ReasoningAnalytics } from "../../../utils/reasoningAnalytics";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKENDURL;

const REASONING_COLORS = {
  navy: "#081B3A",
  navySoft: "#102C56",
  blue: "#2C6BFF",
  blueSoft: "#EAF1FF",
  orange: "#F47A1A",
  orangeSoft: "#FFF1E6",
  text: "#10213F",
  muted: "#637089",
  surface: "#F4F7FC",
  card: "#FFFFFF",
  border: "#DCE4F0",
  track: "#E8EDF5",
};

function percent(value) {
  return value === null || value === undefined ? "—" : String(value) + "%";
}

function safeAverage(values) {
  const valid = values.filter((value) => Number.isFinite(value));
  return valid.length ? Math.round(valid.reduce((sum, value) => sum + value, 0) / valid.length) : null;
}

function formatSeconds(value) {
  return value === null || value === undefined ? "—" : String(value) + "s";
}

function normalizeAttempt(value) {
  if (!value || typeof value !== "object") return null;
  const status = value.responseStatus === "answered" || value.responseStatus === "expired"
    ? value.responseStatus
    : null;
  const isCorrect = typeof value.isCorrect === "boolean" ? value.isCorrect : null;
  const responseTimeSeconds = Number(value.responseTimeSeconds);

  return {
    ...value,
    status,
    isCorrect,
    responseTimeSeconds: Number.isFinite(responseTimeSeconds) ? responseTimeSeconds : null,
  };
}

function groupPerformance(attempts, getKey) {
  const groups = new Map();

  attempts.forEach((attempt) => {
    if (attempt.status !== "answered" || typeof attempt.isCorrect !== "boolean") return;
    const key = getKey(attempt) || "Unclassified";
    const current = groups.get(key) || { key, answered: 0, correct: 0, times: [] };
    current.answered += 1;
    if (attempt.isCorrect) current.correct += 1;
    if (Number.isFinite(attempt.responseTimeSeconds)) current.times.push(attempt.responseTimeSeconds);
    groups.set(key, current);
  });

  return Array.from(groups.values())
    .map((item) => ({
      ...item,
      accuracy: item.answered ? Math.round((item.correct / item.answered) * 100) : null,
      averageResponseTime: safeAverage(item.times),
    }))
    .sort((a, b) => (b.accuracy ?? -1) - (a.accuracy ?? -1) || b.answered - a.answered);
}

function getAttemptAnalytics(attempts) {
  const totalAttempts = attempts.length;
  const answered = attempts.filter((attempt) => attempt.status === "answered");
  const expired = attempts.filter((attempt) => attempt.status === "expired");
  const correct = answered.filter((attempt) => attempt.isCorrect === true);
  const responseTimes = attempts.map((attempt) => attempt.responseTimeSeconds).filter(Number.isFinite);

  const quantitative = attempts.filter((attempt) => attempt.track === "quantitative");
  const verbal = attempts.filter((attempt) => attempt.track === "verbal");

  const trackSummary = (trackAttempts) => {
    const trackAnswered = trackAttempts.filter((attempt) => attempt.status === "answered");
    const trackCorrect = trackAnswered.filter((attempt) => attempt.isCorrect === true);
    return {
      attempts: trackAttempts.length,
      answered: trackAnswered.length,
      expired: trackAttempts.filter((attempt) => attempt.status === "expired").length,
      accuracy: trackAnswered.length ? Math.round((trackCorrect.length / trackAnswered.length) * 100) : null,
      averageResponseTime: safeAverage(trackAttempts.map((attempt) => attempt.responseTimeSeconds).filter(Number.isFinite)),
    };
  };

  const byDifficulty = groupPerformance(attempts, (attempt) => attempt.difficulty);
  const byConcept = groupPerformance(attempts, (attempt) => attempt.concept || attempt.topicId);
  const byActivity = groupPerformance(attempts, (attempt) => attempt.activityId);

  const byHalf = {};
  ["explore", "extend"].forEach((half) => {
    byHalf[half] = groupPerformance(attempts.filter((attempt) => attempt.half === half), () => "all")[0] || {
      answered: 0,
      correct: 0,
      accuracy: null,
      averageResponseTime: null,
    };
  });

  const dates = new Map();
  attempts.forEach((attempt) => {
    if (!attempt.recordedAt) return;
    const date = new Date(attempt.recordedAt);
    if (Number.isNaN(date.getTime())) return;
    const key = date.toISOString().slice(0, 10);
    const current = dates.get(key) || { date: key, answered: 0, correct: 0, times: [], attempts: 0 };
    current.attempts += 1;
    if (attempt.status === "answered") {
      current.answered += 1;
      if (attempt.isCorrect === true) current.correct += 1;
    }
    if (Number.isFinite(attempt.responseTimeSeconds)) current.times.push(attempt.responseTimeSeconds);
    dates.set(key, current);
  });

  const growth = Array.from(dates.values())
    .sort((a, b) => a.date.localeCompare(b.date))
    .map((item) => ({
      ...item,
      accuracy: item.answered ? Math.round((item.correct / item.answered) * 100) : null,
      averageResponseTime: safeAverage(item.times),
    }));

  const conceptRows = byConcept.filter((item) => item.answered >= 2);
  const strengths = [...conceptRows]
    .sort((a, b) => (b.accuracy ?? -1) - (a.accuracy ?? -1) || b.answered - a.answered)
    .slice(0, 3);
  const improvementAreas = [...conceptRows]
    .sort((a, b) => (a.accuracy ?? 101) - (b.accuracy ?? 101) || b.answered - a.answered)
    .slice(0, 3);

  return {
    totalAttempts,
    answered: answered.length,
    expired: expired.length,
    correct: correct.length,
    accuracy: answered.length ? Math.round((correct.length / answered.length) * 100) : null,
    averageResponseTime: safeAverage(responseTimes),
    quantitative: trackSummary(quantitative),
    verbal: trackSummary(verbal),
    byDifficulty,
    byConcept,
    byActivity,
    byHalf,
    growth,
    strengths,
    improvementAreas,
  };
}

function clampPercent(value) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return 0;
  return Math.max(0, Math.min(100, numeric));
}

function CircularProgress({ label, value, size = 220, accent, endAccent = accent, detail }) {
  const normalized = clampPercent(value);
  const center = size / 2;
  const stroke = size >= 200 ? 16 : 13;
  const radius = center - stroke * 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - normalized / 100);
  const id = "reasoning-gradient-" + label.toLowerCase().replace(/[^a-z0-9]+/g, "-") + "-" + size;

  return (
    <div
      className="circle-wrap"
      role="img"
      aria-label={label + ": " + normalized + " percent"}
      style={{ width: size, maxWidth: "100%" }}
    >
      <svg viewBox={"0 0 " + size + " " + size} className="circle-svg" aria-hidden="true">
        <defs>
          <linearGradient id={id} x1="15%" y1="15%" x2="90%" y2="90%">
            <stop offset="0%" stopColor={accent} />
            <stop offset="100%" stopColor={endAccent} />
          </linearGradient>
          <radialGradient id={id + "-core"} cx="42%" cy="32%" r="75%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.98" />
            <stop offset="64%" stopColor="#F7FAFF" stopOpacity="0.98" />
            <stop offset="100%" stopColor="#E8EEF8" stopOpacity="1" />
          </radialGradient>
        </defs>
        <circle
          cx={center}
          cy={center + 8}
          r={radius}
          fill="none"
          stroke={accent}
          strokeOpacity="0.18"
          strokeWidth={stroke + 5}
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={REASONING_COLORS.track}
          strokeWidth={stroke}
        />
        <circle
          className="progress-stroke"
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={"url(#" + id + ")"}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={"rotate(-90 " + center + " " + center + ")"}
        />
        <circle
          cx={center}
          cy={center}
          r={radius - stroke - 4}
          fill={"url(#" + id + "-core)"}
        />
        <circle
          cx={center - radius * 0.24}
          cy={center - radius * 0.28}
          r={Math.max(8, size * 0.028)}
          fill="#FFFFFF"
          fillOpacity="0.72"
        />
        <text x="50%" y="48%" textAnchor="middle" className="circle-percent">
          {normalized}%
        </text>
        <text x="50%" y="61%" textAnchor="middle" className="circle-label">
          {label}
        </text>
      </svg>
      {detail ? <div className="circle-detail">{detail}</div> : null}
    </div>
  );
}

function MetricCard({ label, value, hint, tone = "blue" }) {
  return (
    <article className={"metric-card metric-" + tone}>
      <div className="metric-mark" aria-hidden="true" />
      <div className="metric-label">{label}</div>
      <div className="metric-value">{value}</div>
      {hint ? <div className="metric-hint">{hint}</div> : null}
    </article>
  );
}

function TrackPanel({ title, track, accent, endAccent }) {
  return (
    <section className="track-card">
      <div className="track-card-head">
        <div>
          <div className="panel-kicker">Level 1 · Stage 1</div>
          <h2>{title}</h2>
        </div>
        <span className={"track-dot " + (title === "Quantitative" ? "track-blue" : "track-orange")} />
      </div>
      <div className="track-card-body">
        <CircularProgress
          label={title}
          value={track.percent}
          size={172}
          accent={accent}
          endAccent={endAccent}
          detail="module completion"
        />
        <div className="track-detail-grid">
          <div><span>Modules completed</span><strong>{track.completedModules} / {track.totalModules}</strong></div>
          <div><span>Activities completed</span><strong>{track.activityCompletion.completed} / {track.activityCompletion.total}</strong></div>
          <div><span>Questions completed</span><strong>{track.activityCompletion.items.filter((item) => item.completed).reduce((sum, item) => sum + item.questionCount, 0)}</strong></div>
          <div><span>Average completed-activity score</span><strong>{percent(track.activityCompletion.averageScore)}</strong></div>
        </div>
      </div>
    </section>
  );
}

function AttemptTrackPanel({ title, track }) {
  return (
    <section className="info-card">
      <div className="info-card-head">
        <div>
          <div className="panel-kicker">Recorded attempts</div>
          <h3>{title}</h3>
        </div>
        <div className="info-number">{percent(track.accuracy)}</div>
      </div>
      <div className="info-row"><span>Questions attempted</span><strong>{track.attempts}</strong></div>
      <div className="info-row"><span>Answered</span><strong>{track.answered}</strong></div>
      <div className="info-row"><span>Timed out</span><strong>{track.expired}</strong></div>
      <div className="info-row"><span>Accuracy</span><strong>{percent(track.accuracy)}</strong></div>
      <div className="info-row"><span>Average response time</span><strong>{formatSeconds(track.averageResponseTime)}</strong></div>
    </section>
  );
}

function MiniBarChart({ title, data, note }) {
  const valid = data.filter((item) => Number.isFinite(item.value));
  if (!valid.length) {
    return (
      <div className="chart-card">
        <div className="chart-card-head"><div><div className="panel-kicker">Comparison</div><h3>{title}</h3></div></div>
        <div className="chart-empty">{note || "Not enough recorded data yet."}</div>
      </div>
    );
  }

  return (
    <div className="chart-card">
      <div className="chart-card-head">
        <div>
          <div className="panel-kicker">Bar view</div>
          <h3>{title}</h3>
        </div>
        <span className="chart-unit">accuracy</span>
      </div>
      <div className="bar-chart" role="img" aria-label={title + " accuracy bar chart"}>
        {valid.map((item, index) => (
          <div className="bar-row" key={String(item.label) + "-" + index} title={String(item.label)}>
            <div className="bar-row-meta">
              <span className="bar-label">{item.label}</span>
              <span className="bar-value">{item.value}%</span>
            </div>
            <div className="bar-track">
              <div
                className="bar-fill"
                style={{ width: clampPercent(item.value) + "%", animationDelay: String(index * 70) + "ms" }}
              />
            </div>
            {item.meta ? <div className="bar-meta">{item.meta}</div> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function MiniLineChart({ title, data, valueKey, formatValue, unit, note }) {
  const points = data
    .map((item) => ({ ...item, value: Number(item[valueKey]) }))
    .filter((item) => Number.isFinite(item.value));

  if (!points.length) {
    return (
      <div className="chart-card">
        <div className="chart-card-head"><div><div className="panel-kicker">Trend view</div><h3>{title}</h3></div></div>
        <div className="chart-empty">{note || "Not enough recorded data yet."}</div>
      </div>
    );
  }

  const width = 680;
  const height = 270;
  const padLeft = 46;
  const padRight = 18;
  const padTop = 26;
  const padBottom = 48;
  const values = points.map((item) => item.value);
  const rawMin = Math.min(...values);
  const rawMax = Math.max(...values);
  const rawRange = Math.max(1, rawMax - rawMin);
  const isPercentage = valueKey === "accuracy";
  const minValue = isPercentage ? 0 : Math.max(0, rawMin - Math.max(2, rawRange * 0.18));
  const maxValue = isPercentage ? 100 : rawMax + Math.max(2, rawRange * 0.18);
  const innerWidth = width - padLeft - padRight;
  const innerHeight = height - padTop - padBottom;

  const getX = (index) => {
    if (points.length === 1) return padLeft + innerWidth / 2;
    return padLeft + (index / (points.length - 1)) * innerWidth;
  };

  const getY = (value) => {
    const ratio = (value - minValue) / Math.max(1, maxValue - minValue);
    return padTop + (1 - ratio) * innerHeight;
  };

  const plotted = points.map((item, index) => ({
    x: getX(index),
    y: getY(item.value),
    item,
  }));
  const polyline = plotted.map((point) => point.x + "," + point.y).join(" ");
  const midValue = (minValue + maxValue) / 2;
  const ticks = [maxValue, midValue, minValue];
  const tickIndexes = Array.from(new Set([0, Math.floor((points.length - 1) / 2), points.length - 1]));

  return (
    <div className="chart-card">
      <div className="chart-card-head">
        <div>
          <div className="panel-kicker">Line view</div>
          <h3>{title}</h3>
        </div>
        <span className="chart-unit">{unit}</span>
      </div>
      <div className="line-chart-wrap" role="img" aria-label={title + " line chart"}>
        <svg viewBox={"0 0 " + width + " " + height} className="line-chart">
          {ticks.map((tick, index) => (
            <g key={"tick-" + index}>
              <line
                x1={padLeft}
                x2={width - padRight}
                y1={getY(tick)}
                y2={getY(tick)}
                className="line-grid"
              />
              <text x="6" y={getY(tick) + 4} className="line-axis">
                {formatValue(Math.round(tick))}
              </text>
            </g>
          ))}
          <polyline points={polyline} className="line-stroke" />
          {plotted.map((point, index) => (
            <circle key={String(point.item.date) + "-" + index} cx={point.x} cy={point.y} r="4.5" className="line-point">
              <title>{point.item.date + ": " + formatValue(point.item.value)}</title>
            </circle>
          ))}
          {tickIndexes.map((index) => (
            <text
              key={"date-" + index}
              x={getX(index)}
              y={height - 16}
              textAnchor="middle"
              className="line-date"
            >
              {new Date(points[index].date).toLocaleDateString(undefined, { month: "short", day: "numeric" })}
            </text>
          ))}
        </svg>
      </div>
    </div>
  );
}

export default function ReasoningAnalytics() {
  const router = useRouter();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const [progress, setProgress] = useState(null);
  const [attemptState, setAttemptState] = useState({ status: "idle", attempts: [], error: "" });

  useEffect(() => {
    if (!isAuthenticated && user === null) return;
    if (!user?.userId) {
      router.replace("/Auth");
      return;
    }

    setProgress(readReasoningProgress(user.userId));

    if (!BACKEND_URL) {
      setAttemptState({
        status: "error",
        attempts: [],
        error: "Detailed question-attempt analytics are unavailable because the Reasoning backend URL is not configured.",
      });
      return;
    }

    let cancelled = false;
    setAttemptState({ status: "loading", attempts: [], error: "" });

    fetch(BACKEND_URL + "/api/reasoning/attempts?limit=200", { credentials: "include" })
      .then(async (response) => {
        const data = await response.json().catch(() => null);
        if (!response.ok || !data?.success) {
          throw new Error(data?.message || "Unable to load Reasoning question-attempt history");
        }
        return Array.isArray(data.attempts) ? data.attempts.map(normalizeAttempt).filter(Boolean) : [];
      })
      .then((attempts) => {
        if (!cancelled) setAttemptState({ status: "ready", attempts, error: "" });
      })
      .catch((error) => {
        if (!cancelled) {
          console.error("Error loading Reasoning attempt analytics:", error);
          setAttemptState({ status: "error", attempts: [], error: error.message });
        }
      });

    return () => {
      cancelled = true;
    };
  }, [isAuthenticated, user, router]);

  const analytics = useMemo(
    () => (progress ? getStage1ReasoningAnalytics(progress) : null),
    [progress]
  );

  const attemptAnalytics = useMemo(
    () => getAttemptAnalytics(attemptState.attempts),
    [attemptState.attempts]
  );

  if (!router.isReady || !isAuthenticated || !user?.userId || !analytics) return null;

  const topicRows = [
    ...analytics.tracks.quantitative.topicPerformance.map((item) => ({ ...item, track: "Quantitative" })),
    ...analytics.tracks.verbal.topicPerformance.map((item) => ({ ...item, track: "Verbal" })),
  ];

  const activityRows = [
    ...analytics.tracks.quantitative.activityCompletion.items.map((item) => ({ ...item, track: "Quantitative" })),
    ...analytics.tracks.verbal.activityCompletion.items.map((item) => ({ ...item, track: "Verbal" })),
  ];

  const halfBars = attemptState.status === "ready"
    ? [
        { label: "Explore", value: attemptAnalytics.byHalf.explore.accuracy, meta: attemptAnalytics.byHalf.explore.answered + " answered" },
        { label: "Extend", value: attemptAnalytics.byHalf.extend.accuracy, meta: attemptAnalytics.byHalf.extend.answered + " answered" },
      ]
    : [];

  const difficultyBars = attemptState.status === "ready"
    ? attemptAnalytics.byDifficulty.slice(0, 6).map((item) => ({
        label: String(item.key),
        value: item.accuracy,
        meta: item.answered + " answered",
      }))
    : [];

  const conceptBars = attemptState.status === "ready"
    ? attemptAnalytics.byConcept
        .filter((item) => Number.isFinite(item.accuracy))
        .slice(0, 7)
        .map((item) => ({
          label: String(item.key),
          value: item.accuracy,
          meta: item.answered + " answered",
        }))
    : [];

  const accuracyLineData = attemptState.status === "ready" ? attemptAnalytics.growth : [];
  const responseTimeLineData = attemptState.status === "ready" ? attemptAnalytics.growth : [];

  return (
    <>
      <Head>
        <title>Reasoning Analytics | Upskilleduonline</title>
        <meta name="description" content="Cumulative Reasoning learning analytics." />
      </Head>

      <main className="reasoning-analytics-page">
        <div className="reasoning-analytics-shell">
          <header className="analytics-hero">
            <div className="hero-orb hero-orb-one" aria-hidden="true" />
            <div className="hero-orb hero-orb-two" aria-hidden="true" />
            <div className="hero-content">
              <Link href="/Reasoning/Dashboard" className="hero-back">← Back to Reasoning Dashboard</Link>
              <div className="hero-kicker">Reasoning Analytics · Cumulative learner record</div>
              <h1>Your Reasoning learning record</h1>
              <p>
                A premium view of your verified Reasoning progress and persisted question-attempt history.
                Quantitative and Verbal results remain separate, and the visualizations use recorded data only.
              </p>
              <div className="hero-badges">
                <span>Level 1 · Stage 1</span>
                <span className="hero-badge-secondary">
                  {attemptState.status === "ready" ? "Live attempt history" : "Attempt history " + attemptState.status}
                </span>
              </div>
            </div>
          </header>

          <section className="overview-card">
            <div className="overview-overall">
              <div className="section-kicker">Overall Reasoning progress</div>
              <h2>Level 1 · Stage 1 snapshot</h2>
              <p className="section-copy">
                Completion reflects the existing module/activity progress record. Detailed question history below comes from the persisted Reasoning attempt store.
              </p>
              <div className="overall-stage-grid">
                <div className="overall-chart">
                  <CircularProgress
                    label="Overall Reasoning"
                    value={analytics.overall.percent}
                    size={254}
                    accent={REASONING_COLORS.orange}
                    endAccent={REASONING_COLORS.blue}
                    detail="current Stage 1 scope"
                  />
                </div>
                <div className="overall-callouts">
                  <div className="callout-card callout-blue">
                    <span>Modules</span>
                    <strong>{analytics.overall.completedModules} / {analytics.overall.totalModules}</strong>
                    <small>completed</small>
                  </div>
                  <div className="callout-card callout-orange">
                    <span>Activities</span>
                    <strong>{analytics.overall.activitiesCompleted} / {analytics.overall.activitiesTotal}</strong>
                    <small>completed</small>
                  </div>
                  <div className="callout-card callout-neutral">
                    <span>Questions</span>
                    <strong>{analytics.overall.questionsCompleted}</strong>
                    <small>completed</small>
                  </div>
                  <div className="callout-card callout-neutral">
                    <span>Avg. activity score</span>
                    <strong>{percent(analytics.overall.averageActivityScore)}</strong>
                    <small>completed activities</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="overview-tracks">
              <div className="section-kicker">Track mastery</div>
              <div className="track-circle-grid">
                <div className="track-circle-card">
                  <CircularProgress
                    label="Quantitative"
                    value={analytics.tracks.quantitative.percent}
                    size={170}
                    accent={REASONING_COLORS.blue}
                    endAccent={REASONING_COLORS.navySoft}
                    detail="Stage 1 progress"
                  />
                </div>
                <div className="track-circle-card">
                  <CircularProgress
                    label="Verbal"
                    value={analytics.tracks.verbal.percent}
                    size={170}
                    accent={REASONING_COLORS.orange}
                    endAccent="#FFAB68"
                    detail="Stage 1 progress"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="metric-grid">
            <MetricCard label="Persisted question attempts" value={attemptState.status === "ready" ? attemptAnalytics.totalAttempts : "…"} hint="server-recorded" tone="blue" />
            <MetricCard label="Question accuracy" value={attemptState.status === "ready" ? percent(attemptAnalytics.accuracy) : "…"} hint="answered attempts" tone="orange" />
            <MetricCard label="Average response time" value={attemptState.status === "ready" ? formatSeconds(attemptAnalytics.averageResponseTime) : "…"} hint="recorded attempts" tone="blue" />
            <MetricCard label="Timed-out questions" value={attemptState.status === "ready" ? attemptAnalytics.expired : "…"} hint="persisted records" tone="orange" />
          </section>

          <section className="section-block">
            <div className="section-heading">
              <div>
                <div className="section-kicker">Verified progress</div>
                <h2>Quantitative and Verbal progress</h2>
              </div>
              <p>These completion measures remain anchored to the existing Reasoning progress model.</p>
            </div>
            <div className="split-grid">
              <TrackPanel
                title="Quantitative"
                track={analytics.tracks.quantitative}
                accent={REASONING_COLORS.blue}
                endAccent={REASONING_COLORS.navySoft}
              />
              <TrackPanel
                title="Verbal"
                track={analytics.tracks.verbal}
                accent={REASONING_COLORS.orange}
                endAccent="#FFAA66"
              />
            </div>
          </section>

          <section className="section-block">
            <div className="section-heading">
              <div>
                <div className="section-kicker">Recorded question performance</div>
                <h2>How your attempts are performing</h2>
              </div>
              <p>Only persisted answered and timed-out question records are used in this layer.</p>
            </div>

            {attemptState.status === "ready" ? (
              <>
                <div className="split-grid">
                  <AttemptTrackPanel title="Quantitative" track={attemptAnalytics.quantitative} />
                  <AttemptTrackPanel title="Verbal" track={attemptAnalytics.verbal} />
                </div>
                <div className="chart-grid chart-grid-top">
                  <MiniBarChart
                    title="Explore vs Extend"
                    data={halfBars}
                    note="Explore/Extend comparison becomes available after persisted attempts are recorded."
                  />
                  <MiniBarChart
                    title="Performance by difficulty"
                    data={difficultyBars}
                    note="Difficulty comparison becomes available after persisted attempts are recorded."
                  />
                </div>
              </>
            ) : attemptState.status === "loading" ? (
              <div className="notice-card"><strong>Loading persisted question-attempt history…</strong><span>Detailed visualizations will appear when the learner-scoped records are available.</span></div>
            ) : (
              <div className="notice-card notice-error"><strong>Detailed question-attempt analytics are unavailable.</strong><span>{attemptState.error}</span></div>
            )}
          </section>

          <section className="section-block">
            <div className="section-heading">
              <div>
                <div className="section-kicker">Skill signals</div>
                <h2>Concept performance</h2>
              </div>
              <p>Bars summarize only concepts present in persisted answered attempts.</p>
            </div>
            <MiniBarChart
              title="Recorded concept accuracy"
              data={conceptBars}
              note="Concept performance requires persisted answered attempts with concept or topic metadata."
            />
          </section>

          <section className="section-block">
            <div className="section-heading">
              <div>
                <div className="section-kicker">Growth over time</div>
                <h2>Recorded trends</h2>
              </div>
              <p>Line views use the timestamps already stored with question attempts; no missing dates are reconstructed.</p>
            </div>
            {attemptState.status === "ready" ? (
              <div className="chart-grid">
                <MiniLineChart
                  title="Accuracy trend"
                  data={accuracyLineData}
                  valueKey="accuracy"
                  unit="accuracy"
                  formatValue={(value) => String(value) + "%"}
                  note="Accuracy trend will appear as persisted attempts accumulate across different dates."
                />
                <MiniLineChart
                  title="Average response-time trend"
                  data={responseTimeLineData}
                  valueKey="averageResponseTime"
                  unit="seconds"
                  formatValue={(value) => String(value) + "s"}
                  note="Response-time trend will appear as persisted timing records accumulate across different dates."
                />
              </div>
            ) : (
              <div className="notice-card"><strong>Growth visualizations are waiting for persisted attempt history.</strong><span>No unsupported historical values are estimated.</span></div>
            )}
          </section>

          <section className="section-block">
            <div className="section-heading">
              <div>
                <div className="section-kicker">Evidence-based summary</div>
                <h2>Strong areas and areas needing improvement</h2>
              </div>
              <p>These summaries remain limited to concept/topic groups with at least two answered attempts.</p>
            </div>

            {attemptState.status === "ready" && (attemptAnalytics.strengths.length || attemptAnalytics.improvementAreas.length) ? (
              <div className="split-grid">
                <section className="info-card highlight-blue">
                  <div className="info-card-head">
                    <div><div className="panel-kicker">Highest recorded accuracy</div><h3>Strongest recorded areas</h3></div>
                  </div>
                  {attemptAnalytics.strengths.length ? attemptAnalytics.strengths.map((item) => (
                    <div key={String(item.key)} className="summary-row">
                      <span>{item.key}</span>
                      <strong>{item.accuracy}%</strong>
                    </div>
                  )) : <div className="chart-empty">Not enough recorded data yet.</div>}
                </section>
                <section className="info-card highlight-orange">
                  <div className="info-card-head">
                    <div><div className="panel-kicker">Lowest recorded accuracy</div><h3>Areas needing more evidence</h3></div>
                  </div>
                  {attemptAnalytics.improvementAreas.length ? attemptAnalytics.improvementAreas.map((item) => (
                    <div key={String(item.key)} className="summary-row">
                      <span>{item.key}</span>
                      <strong>{item.accuracy}%</strong>
                    </div>
                  )) : <div className="chart-empty">Not enough recorded data yet.</div>}
                </section>
              </div>
            ) : (
              <div className="notice-card"><strong>Evidence threshold not reached.</strong><span>These summaries appear after enough persisted answers exist to support a meaningful comparison.</span></div>
            )}
          </section>

          <section className="section-block">
            <div className="section-heading">
              <div>
                <div className="section-kicker">Existing activity record</div>
                <h2>Activity performance</h2>
              </div>
              <p>Activity scores continue to use the completion scores stored in the existing Reasoning progress record.</p>
            </div>
            <div className="table-card">
              <div className="table-scroll">
                <table>
                  <thead>
                    <tr>
                      <th>Track</th>
                      <th>Activity</th>
                      <th>Half</th>
                      <th>Questions</th>
                      <th>Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activityRows.map((item) => (
                      <tr key={item.track + "-" + item.id}>
                        <td><span className={"table-track " + (item.track === "Quantitative" ? "table-blue" : "table-orange")}>{item.track}</span></td>
                        <td>{item.title}</td>
                        <td>{item.half}</td>
                        <td>{item.completed ? item.questionCount : "—"}</td>
                        <td>{item.score === null ? "Not completed" : String(item.score) + "%"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="section-block">
            <div className="section-heading">
              <div>
                <div className="section-kicker">Stage structure</div>
                <h2>Stage, module and activity completion</h2>
              </div>
              <p>A module is complete only when all mapped Stage 1 activities are completed.</p>
            </div>
            <div className="table-card">
              <div className="table-scroll">
                <table>
                  <thead>
                    <tr>
                      <th>Track</th>
                      <th>Module</th>
                      <th>Activities</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[["Quantitative", analytics.tracks.quantitative.moduleCompletion], ["Verbal", analytics.tracks.verbal.moduleCompletion]].flatMap(([track, modules]) =>
                      modules.map((module) => (
                        <tr key={track + "-" + module.id}>
                          <td><span className={"table-track " + (track === "Quantitative" ? "table-blue" : "table-orange")}>{track}</span></td>
                          <td>{module.title}</td>
                          <td>{module.completedActivities} / {module.activityCount}</td>
                          <td><span className={"status-badge " + (module.complete ? "status-complete" : "status-progress")}>{module.complete ? "Completed" : "In progress"}</span></td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {attemptState.status === "ready" ? (
            <section className="section-block">
              <div className="section-heading">
                <div>
                  <div className="section-kicker">Difficulty evidence</div>
                  <h2>Detailed difficulty record</h2>
                </div>
                <p>Difficulty groups are taken directly from recorded question metadata.</p>
              </div>
              <div className="table-card">
                <div className="table-scroll">
                  <table>
                    <thead>
                      <tr>
                        <th>Difficulty</th>
                        <th>Answered</th>
                        <th>Accuracy</th>
                        <th>Avg. response time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {attemptAnalytics.byDifficulty.length ? attemptAnalytics.byDifficulty.map((item) => (
                        <tr key={String(item.key)}>
                          <td>{item.key}</td>
                          <td>{item.answered}</td>
                          <td>{percent(item.accuracy)}</td>
                          <td>{formatSeconds(item.averageResponseTime)}</td>
                        </tr>
                      )) : (
                        <tr><td colSpan="4">Difficulty performance becomes available after persisted question attempts are recorded.</td></tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          ) : null}

          {attemptState.status === "ready" ? (
            <section className="section-block">
              <div className="section-heading">
                <div>
                  <div className="section-kicker">Skill detail</div>
                  <h2>Recorded concept and topic performance</h2>
                </div>
                <p>Results use recorded concept values, falling back to topic metadata when a concept is not present.</p>
              </div>
              <div className="table-card">
                <div className="table-scroll">
                  <table>
                    <thead>
                      <tr>
                        <th>Concept / topic</th>
                        <th>Answered</th>
                        <th>Accuracy</th>
                        <th>Avg. response time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {attemptAnalytics.byConcept.length ? attemptAnalytics.byConcept.map((item) => (
                        <tr key={String(item.key)}>
                          <td>{item.key}</td>
                          <td>{item.answered}</td>
                          <td>{percent(item.accuracy)}</td>
                          <td>{formatSeconds(item.averageResponseTime)}</td>
                        </tr>
                      )) : (
                        <tr><td colSpan="4">Concept performance requires persisted answered attempts with concept or topic metadata.</td></tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          ) : null}

          <section className="section-block">
            <div className="section-heading">
              <div>
                <div className="section-kicker">Data boundary</div>
                <h2>Recorded data only</h2>
              </div>
            </div>
            <div className="boundary-card">
              <div className="boundary-icon" aria-hidden="true">✓</div>
              <div>
                <strong>Unsupported history is not reconstructed.</strong>
                <p>
                  Detailed question history comes from the persisted Reasoning attempt record. No unsupported historical attempts, difficulty results, timing values or growth values are estimated for work completed before durable capture was enabled.
                </p>
              </div>
            </div>
          </section>

          <section className="section-block final-note">
            <div className="section-heading">
              <div>
                <div className="section-kicker">Question-attempt records</div>
                <h2>Server-backed attempt history</h2>
              </div>
              <p>The detailed analytics above use learner-scoped records returned by the Reasoning backend. Correct-answer values are intentionally not exposed by the read endpoint.</p>
            </div>
          </section>
        </div>
      </main>

      <style jsx>{`
        .reasoning-analytics-page {
          min-height: 100vh;
          background:
            radial-gradient(circle at 12% 0%, rgba(44, 107, 255, 0.08), transparent 32%),
            radial-gradient(circle at 88% 16%, rgba(244, 122, 26, 0.08), transparent 28%),
            #F4F7FC;
          color: #10213F;
          padding: 0 20px 80px;
        }

        .reasoning-analytics-shell {
          width: min(1180px, 100%);
          margin: 0 auto;
        }

        .analytics-hero {
          position: relative;
          overflow: hidden;
          min-height: 330px;
          margin: 0 -20px 28px;
          padding: 50px max(20px, calc((100% - 1140px) / 2)) 54px;
          display: flex;
          align-items: flex-end;
          background:
            linear-gradient(135deg, #071a37 0%, #0e2c58 64%, #153b72 100%);
          color: #fff;
          box-shadow: 0 24px 58px rgba(8, 27, 58, 0.22);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          width: min(850px, 100%);
        }

        .hero-back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: rgba(255,255,255,0.78);
          text-decoration: none;
          font-weight: 700;
          font-size: 14px;
          margin-bottom: 34px;
        }

        .hero-back:hover { color: #fff; transform: translateX(-2px); }

        .hero-kicker,
        .section-kicker,
        .panel-kicker {
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-size: 11px;
          font-weight: 800;
        }

        .hero-kicker {
          color: #FFB26F;
          margin-bottom: 12px;
        }

        .analytics-hero h1 {
          margin: 0;
          max-width: 780px;
          color: #fff;
          font-size: clamp(38px, 5vw, 64px);
          line-height: 1.03;
          letter-spacing: -0.04em;
        }

        .analytics-hero p {
          max-width: 760px;
          margin: 18px 0 0;
          color: rgba(255,255,255,0.78);
          font-size: 17px;
          line-height: 1.75;
        }

        .hero-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 24px;
        }

        .hero-badges span {
          display: inline-flex;
          align-items: center;
          min-height: 32px;
          padding: 0 12px;
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 999px;
          background: rgba(255,255,255,0.08);
          color: #fff;
          font-size: 11px;
          font-weight: 800;
        }

        .hero-badge-secondary {
          background: rgba(244,122,26,0.15) !important;
          color: #ffd5b6 !important;
        }

        .hero-orb {
          position: absolute;
          border-radius: 999px;
          pointer-events: none;
          filter: blur(1px);
        }

        .hero-orb-one {
          width: 240px;
          height: 240px;
          right: 8%;
          top: -80px;
          background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.18), rgba(44,107,255,0.05) 58%, transparent 70%);
          box-shadow: inset -20px -20px 55px rgba(0,0,0,0.16);
        }

        .hero-orb-two {
          width: 180px;
          height: 180px;
          right: 24%;
          bottom: -95px;
          background: radial-gradient(circle at 35% 35%, rgba(255,178,111,0.22), rgba(244,122,26,0.02) 64%, transparent 72%);
        }

        .overview-card {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 1.4fr) minmax(330px, 0.8fr);
          gap: 0;
          margin-top: -74px;
          border: 1px solid rgba(255,255,255,0.22);
          border-radius: 28px;
          overflow: hidden;
          background: rgba(255,255,255,0.98);
          box-shadow: 0 26px 70px rgba(11, 30, 61, 0.14);
          backdrop-filter: blur(12px);
        }

        .overview-overall,
        .overview-tracks {
          padding: 34px;
        }

        .overview-overall {
          border-right: 1px solid #E4EAF2;
        }

        .section-kicker {
          color: #2C6BFF;
        }

        .overview-card h2,
        .section-heading h2 {
          margin: 5px 0 0;
          color: #10213F;
          font-size: clamp(25px, 3vw, 36px);
          line-height: 1.12;
          letter-spacing: -0.03em;
        }

        .section-copy,
        .section-heading p {
          color: #637089;
          line-height: 1.7;
        }

        .section-copy {
          max-width: 690px;
          margin: 10px 0 0;
          font-size: 14px;
        }

        .overall-stage-grid {
          display: grid;
          grid-template-columns: minmax(250px, 0.86fr) minmax(250px, 1fr);
          gap: 18px;
          align-items: center;
          margin-top: 20px;
        }

        .overall-chart {
          display: flex;
          justify-content: center;
          padding: 8px;
        }

        .overall-callouts {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .callout-card {
          position: relative;
          min-height: 118px;
          padding: 17px;
          border-radius: 18px;
          border: 1px solid #E3E9F2;
          background: #fff;
          overflow: hidden;
        }

        .callout-card::after {
          content: "";
          position: absolute;
          right: -18px;
          bottom: -28px;
          width: 90px;
          height: 90px;
          border-radius: 50%;
          opacity: 0.16;
          background: currentColor;
        }

        .callout-card span,
        .metric-label {
          display: block;
          color: #637089;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .callout-card strong {
          display: block;
          margin-top: 7px;
          color: #10213F;
          font-size: 25px;
          letter-spacing: -0.03em;
        }

        .callout-card small {
          display: block;
          margin-top: 5px;
          color: #8A95A8;
          font-size: 11px;
        }

        .callout-blue { color: #2C6BFF; }
        .callout-orange { color: #F47A1A; }
        .callout-neutral { color: #8591A4; }

        .overview-tracks {
          background: linear-gradient(180deg, #FBFCFE 0%, #F7F9FC 100%);
        }

        .track-circle-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin-top: 18px;
        }

        .track-circle-card {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 250px;
          padding: 10px;
          border: 1px solid #E3E9F2;
          border-radius: 20px;
          background: #fff;
          box-shadow: 0 14px 32px rgba(8, 27, 58, 0.05);
        }

        .circle-wrap {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .circle-svg {
          display: block;
          width: 100%;
          height: auto;
          overflow: visible;
          filter: drop-shadow(0 14px 24px rgba(8, 27, 58, 0.11));
        }

        .progress-stroke {
          transition: stroke-dashoffset 900ms cubic-bezier(0.22, 0.72, 0.35, 1);
        }

        .circle-percent {
          fill: #10213F;
          font-family: Montserrat, sans-serif;
          font-size: 30px;
          font-weight: 800;
          letter-spacing: -0.05em;
        }

        .circle-label {
          fill: #637089;
          font-family: Montserrat, sans-serif;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.09em;
          text-transform: uppercase;
        }

        .circle-detail {
          margin-top: -3px;
          color: #8A95A8;
          font-size: 10px;
          font-weight: 700;
          text-align: center;
        }

        .metric-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
          margin-top: 18px;
        }

        .metric-card {
          position: relative;
          min-height: 140px;
          padding: 20px;
          border-radius: 20px;
          border: 1px solid #E0E7F0;
          background: #fff;
          box-shadow: 0 12px 32px rgba(8, 27, 58, 0.055);
          overflow: hidden;
        }

        .metric-mark {
          width: 42px;
          height: 4px;
          margin-bottom: 24px;
          border-radius: 999px;
          background: #2C6BFF;
        }

        .metric-orange .metric-mark { background: #F47A1A; }

        .metric-value {
          margin-top: 8px;
          color: #10213F;
          font-size: clamp(25px, 3vw, 34px);
          line-height: 1;
          font-weight: 800;
          letter-spacing: -0.04em;
        }

        .metric-hint {
          margin-top: 8px;
          color: #8A95A8;
          font-size: 11px;
          font-weight: 700;
        }

        .section-block {
          margin-top: 34px;
        }

        .section-heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 16px;
        }

        .section-heading p {
          max-width: 520px;
          margin: 0;
          font-size: 13px;
        }

        .split-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .track-card,
        .info-card,
        .chart-card,
        .table-card,
        .boundary-card,
        .notice-card {
          border: 1px solid #DDE5F0;
          border-radius: 22px;
          background: #fff;
          box-shadow: 0 15px 38px rgba(8, 27, 58, 0.055);
        }

        .track-card {
          padding: 22px;
        }

        .track-card-head,
        .info-card-head,
        .chart-card-head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 14px;
        }

        .track-card-head h2,
        .info-card-head h3,
        .chart-card-head h3 {
          margin: 4px 0 0;
          color: #10213F;
        }

        .track-card-head h2 {
          font-size: 23px;
        }

        .info-card-head h3,
        .chart-card-head h3 {
          font-size: 20px;
          letter-spacing: -0.02em;
        }

        .panel-kicker {
          color: #8A95A8;
        }

        .track-dot {
          width: 12px;
          height: 12px;
          margin-top: 4px;
          border-radius: 50%;
          box-shadow: 0 0 0 5px rgba(44, 107, 255, 0.08);
        }

        .track-blue { background: #2C6BFF; }
        .track-orange { background: #F47A1A; }
        .track-card .track-dot.track-orange { box-shadow: 0 0 0 5px rgba(244,122,26,0.1); }

        .track-card-body {
          display: grid;
          grid-template-columns: minmax(170px, 0.75fr) minmax(240px, 1fr);
          gap: 18px;
          align-items: center;
          margin-top: 16px;
        }

        .track-detail-grid {
          display: grid;
          gap: 0;
        }

        .track-detail-grid > div,
        .info-row,
        .summary-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 12px 0;
          border-bottom: 1px solid #EDF1F6;
        }

        .track-detail-grid > div:last-child,
        .info-row:last-child,
        .summary-row:last-child {
          border-bottom: 0;
        }

        .track-detail-grid span,
        .info-row span,
        .summary-row span {
          color: #637089;
          font-size: 12px;
          line-height: 1.45;
        }

        .track-detail-grid strong,
        .info-row strong,
        .summary-row strong {
          color: #10213F;
          font-size: 13px;
          font-weight: 800;
          text-align: right;
        }

        .info-card {
          padding: 20px;
        }

        .info-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 58px;
          height: 38px;
          border-radius: 12px;
          background: #EDF3FF;
          color: #205BE3;
          font-size: 14px;
          font-weight: 800;
        }

        .chart-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .chart-grid-top {
          margin-top: 18px;
        }

        .chart-card {
          padding: 22px;
        }

        .chart-unit {
          display: inline-flex;
          align-items: center;
          min-height: 28px;
          padding: 0 10px;
          border-radius: 999px;
          background: #F4F7FC;
          color: #7B8799;
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .bar-chart {
          display: grid;
          gap: 14px;
          margin-top: 20px;
        }

        .bar-row {
          min-width: 0;
        }

        .bar-row-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          margin-bottom: 6px;
        }

        .bar-label {
          min-width: 0;
          overflow: hidden;
          color: #30415F;
          font-size: 12px;
          font-weight: 700;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .bar-value {
          flex-shrink: 0;
          color: #10213F;
          font-size: 12px;
          font-weight: 800;
        }

        .bar-track {
          height: 12px;
          overflow: hidden;
          border-radius: 999px;
          background: #EDF1F6;
          box-shadow: inset 0 1px 3px rgba(8, 27, 58, 0.08);
        }

        .bar-fill {
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, #2C6BFF 0%, #5B8AFF 52%, #F47A1A 100%);
          box-shadow: inset 0 1px 1px rgba(255,255,255,0.45), 0 4px 9px rgba(44, 107, 255, 0.16);
          transform-origin: left center;
          animation: bar-rise 720ms cubic-bezier(0.2, 0.7, 0.25, 1) both;
        }

        .bar-meta {
          margin-top: 4px;
          color: #97A0AF;
          font-size: 10px;
          font-weight: 700;
        }

        .line-chart-wrap {
          margin-top: 12px;
          padding-top: 6px;
        }

        .line-chart {
          display: block;
          width: 100%;
          height: auto;
          overflow: visible;
        }

        .line-grid {
          stroke: #E8EDF4;
          stroke-width: 1;
        }

        .line-axis,
        .line-date {
          fill: #97A0AF;
          font-family: Montserrat, sans-serif;
          font-size: 10px;
          font-weight: 700;
        }

        .line-stroke {
          fill: none;
          stroke: #2C6BFF;
          stroke-width: 4;
          stroke-linecap: round;
          stroke-linejoin: round;
          filter: drop-shadow(0 5px 8px rgba(44, 107, 255, 0.18));
        }

        .line-point {
          fill: #fff;
          stroke: #F47A1A;
          stroke-width: 3;
        }

        .chart-empty {
          display: flex;
          min-height: 176px;
          align-items: center;
          justify-content: center;
          margin-top: 16px;
          padding: 24px;
          border-radius: 16px;
          border: 1px dashed #D8E1EC;
          background: #F8FAFD;
          color: #7D899B;
          font-size: 12px;
          line-height: 1.6;
          text-align: center;
        }

        .notice-card {
          display: grid;
          gap: 5px;
          padding: 18px 20px;
          background: #FBFCFE;
          color: #637089;
          line-height: 1.6;
        }

        .notice-card strong {
          color: #10213F;
          font-size: 13px;
        }

        .notice-card span {
          font-size: 12px;
        }

        .notice-error {
          border-color: #F0D7CA;
          background: #FFF9F6;
        }

        .highlight-blue {
          position: relative;
          overflow: hidden;
          border-top: 3px solid #2C6BFF;
        }

        .highlight-orange {
          position: relative;
          overflow: hidden;
          border-top: 3px solid #F47A1A;
        }

        .table-card {
          overflow: hidden;
        }

        .table-scroll {
          overflow-x: auto;
        }

        table {
          width: 100%;
          min-width: 700px;
          border-collapse: collapse;
        }

        th {
          padding: 14px 16px;
          background: #F7F9FC;
          color: #7B8799;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-align: left;
          text-transform: uppercase;
          border-bottom: 1px solid #E4EAF2;
        }

        td {
          padding: 15px 16px;
          color: #30415F;
          font-size: 12px;
          border-bottom: 1px solid #EDF1F6;
        }

        tbody tr:last-child td { border-bottom: 0; }
        tbody tr:hover td { background: #FBFCFE; }

        .table-track {
          display: inline-flex;
          align-items: center;
          min-height: 26px;
          padding: 0 9px;
          border-radius: 999px;
          font-size: 10px;
          font-weight: 800;
        }

        .table-blue {
          color: #205BE3;
          background: #EDF3FF;
        }

        .table-orange {
          color: #B95D18;
          background: #FFF1E6;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          min-height: 26px;
          padding: 0 9px;
          border-radius: 999px;
          font-size: 10px;
          font-weight: 800;
        }

        .status-complete {
          color: #216146;
          background: #EAF7F0;
        }

        .status-progress {
          color: #7A6471;
          background: #F7F2F5;
        }

        .boundary-card {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 20px;
          background: linear-gradient(180deg, #FFFFFF 0%, #F8FAFD 100%);
        }

        .boundary-icon {
          display: grid;
          place-items: center;
          width: 34px;
          height: 34px;
          flex: 0 0 34px;
          border-radius: 11px;
          color: #205BE3;
          background: #EDF3FF;
          font-weight: 900;
        }

        .boundary-card strong {
          color: #10213F;
          font-size: 13px;
        }

        .boundary-card p {
          margin: 5px 0 0;
          color: #637089;
          font-size: 12px;
          line-height: 1.7;
        }

        .final-note {
          padding-bottom: 10px;
        }

        @keyframes bar-rise {
          from { transform: scaleX(0.04); opacity: 0.3; }
          to { transform: scaleX(1); opacity: 1; }
        }

        @media (max-width: 980px) {
          .overview-card {
            grid-template-columns: 1fr;
          }

          .overview-overall {
            border-right: 0;
            border-bottom: 1px solid #E4EAF2;
          }

          .metric-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .chart-grid,
          .split-grid {
            grid-template-columns: 1fr;
          }

          .track-card-body {
            grid-template-columns: minmax(170px, 0.56fr) minmax(260px, 1fr);
          }
        }

        @media (max-width: 720px) {
          .reasoning-analytics-page {
            padding: 0 12px 60px;
          }

          .analytics-hero {
            margin: 0 -12px 20px;
            padding: 34px 18px 44px;
          }

          .analytics-hero h1 {
            font-size: 42px;
          }

          .analytics-hero p {
            font-size: 15px;
          }

          .overview-card {
            margin-top: -54px;
            border-radius: 22px;
          }

          .overview-overall,
          .overview-tracks {
            padding: 24px 18px;
          }

          .overall-stage-grid {
            grid-template-columns: 1fr;
          }

          .overall-callouts {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .track-circle-grid {
            grid-template-columns: 1fr 1fr;
          }

          .metric-grid {
            grid-template-columns: 1fr 1fr;
          }

          .section-heading {
            display: block;
          }

          .section-heading p {
            margin-top: 8px;
          }

          .track-card-body {
            grid-template-columns: 1fr;
          }

          .track-detail-grid {
            margin-top: -4px;
          }
        }

        @media (max-width: 520px) {
          .hero-badges,
          .hero-badges span {
            width: 100%;
          }

          .hero-badges span {
            justify-content: center;
          }

          .overall-callouts,
          .metric-grid,
          .track-circle-grid {
            grid-template-columns: 1fr;
          }

          .track-circle-card {
            min-height: 220px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .progress-stroke,
          .bar-fill {
            transition: none;
            animation: none;
          }

          .hero-back {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}
