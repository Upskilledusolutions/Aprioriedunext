/**
 * Shared multiple-choice presentation controls for Reasoning.
 *
 * The correct answer must never be exposed by answer position, case, or
 * formatting. Length is audited separately: content authors must re-author
 * material length imbalances rather than padding options with meaningless text.
 */
const punctuationPattern = /[.!?]+$/;

// Surgical corrections for the current Level 1 Stage 3 calibrated set.
// These are content-specific corrections for known source-set issues; they do
// not introduce a generic answer-selection or content-generation mechanism.
const STAGE2_VERBAL_LENGTH_REWRITES={
  "Q-L1-V-S2-EXP-AMX-006":[
    ["The evidence directly relates reading practice to vocabulary growth.","The evidence links reading with vocabulary growth."]
  ],
  "Q-L1-V-S2-EXT-CAX-006":[
    ["They focus on different possible benefits of outdoor lessons.","They focus on different benefits of outdoor lessons."]
  ],
  "Q-L1-V-S2-EXT-CAX-008":[
    ["They agree on the change but give different reasons.","They agree on the change for different reasons."]
  ],
  "Q-L1-V-S2-EXT-EE-003":[
    ["A measured comparison of regularly watered and less-watered plants","Measured results compare two watering groups."]
  ],
  "Q-L1-V-S2-EXT-EEX-004":[
    ["Library records show many students borrow books each week.","Many students borrow books each week."]
  ],
  "Q-L1-V-S2-EXT-EEX-006":[
    ["Daily practisers make fewer spelling errors over time.","Daily practice reduced spelling errors over time."]
  ],
  "Q-L1-V-S2-EXT-EEX-008":[
    ["Bird counts are higher in the garden than nearby areas.","Bird counts are higher in the garden."]
  ]
};

const STAGE3_OPTION_CORRECTIONS = {
  "Q-L1-Q-S3-CAL-Q-L1-S3-EXP-generalizing-patterns-09": [
    ["38", "40"],
  ],
};

const STAGE3_VERBAL_LENGTH_REWRITES = {
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-analytical-paragraphs-07": [
    [
      "The result suggests some students may value additional morning time, although the small sample limits the claim",
      "The result suggests later starts may help, but the small sample limits the claim",
    ],
  ],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-using-evidence-07": [
    [
      "It may provide useful evidence, but the claim should remain appropriately limited",
      "It may be useful evidence, but the small sample limits the claim",
    ],
  ],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-revising-clarity-04": [
    [
      "This result suggests the new schedule may improve punctuality because fewer students arrived late",
      "The result suggests the new schedule may improve punctuality",
    ],
  ],
};

const STAGE3_MISSING_LENGTH_REWRITES = {
  "Q-L1-Q-S3-CAL-Q-L1-S3-EXT-strategic-problem-solving-07": [
    [
      "Use the estimate as a reasonableness check and inspect the calculation if the values are inconsistent",
      "Check 96 against the estimate and inspect the calculation",
    ],
  ],
  "Q-L1-Q-S3-CAL-Q-L1-S3-EXT-strategic-problem-solving-10": [
    [
      "Confirm the answer satisfies the original conditions and that the strategy accounts for the relevant cases",
      "Check the answer against the conditions and relevant cases",
    ],
  ],
  "Q-L1-Q-S3-CAL-Q-L1-S3-EXT-mathematical-justification-02": [
    [
      "7 × 6 = 42, so 42 can be separated into six equal groups of 7",
      "7 × 6 = 42, so 42 has six groups of 7",
    ],
  ],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-advanced-structure-07": [
    [
      "Links that interpret each reason and connect it to the central claim",
      "Connect each reason to the central claim",
    ],
  ],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-counterarguments-06": [
    [
      "Uniform rules may create cost or comfort concerns for some families and students",
      "Uniforms may raise cost or comfort concerns",
    ],
  ],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-counterarguments-07": [
    [
      "Estimate the additional cost and compare it with the expected benefit and available resources",
      "Compare added cost with expected benefit and resources",
    ],
  ],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-counterarguments-09": [
    [
      "Qualified reasoning that incorporates an alternative concern without abandoning the evidence-supported conclusion",
      "Acknowledge the limitation and explain why the conclusion still holds",
    ],
  ],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-source-synthesis-01": [
    [
      "Outdoor learning may improve engagement overall, with particularly strong effects reported in science classes",
      "Outdoor learning may improve engagement, especially in science",
    ],
  ],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-source-synthesis-03": [
    [
      "Discussion may support participation, but class size may affect how consistently the benefit appears",
      "Discussion may help participation, but class size may matter",
    ],
  ],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-source-synthesis-04": [
    [
      "The repeated finding is encouraging, but age differences should be considered before generalizing to every learner",
      "The repeated finding is useful, but age differences limit broad generalization",
    ],
  ],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-source-synthesis-09": [
    [
      "It identifies a meaningful relationship among the sources and explains what that relationship adds",
      "It explains a meaningful relationship among the sources",
    ],
  ],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-source-synthesis-10": [
    [
      "Both studies support outdoor learning, but the first emphasizes attention while the second identifies stronger effects in science classes.",
      "Both studies support outdoor learning but emphasize different effects",
    ],
  ],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-scholarly-revision-04": [
    [
      "Qualify the claims, explain the study's limitations and keep conclusions proportional to the evidence",
      "Qualify the claims and match conclusions to the evidence",
    ],
  ],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-scholarly-revision-06": [
    [
      "The evidence supports the policy under the conditions examined, although other factors should also be considered",
      "Support the policy under the studied conditions, while noting other factors",
    ],
  ],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-scholarly-revision-07": [
    [
      "Replace unsupported absolutes with precise claims that reflect the evidence and its limits",
      "Replace unsupported absolutes with precise claims",
    ],
  ],
};

const STAGE3_ADDITIONAL_VERBAL_LENGTH_REWRITES={
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-planning-analysis-06":[
    ["Define the issue, compare benefits and costs, use evidence, and qualify the conclusion","Set criteria, compare evidence, then qualify the conclusion"]
  ],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-advanced-structure-03":[
    ["Move the definition earlier so the evidence has a clear question to address","Move the definition earlier so the evidence has a clear focus"]
  ],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-advanced-structure-06":[
    ["It answers the question using the reasoning developed rather than introducing a new argument","It answers the question using the developed reasoning"]
  ],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-advanced-structure-08":[
    ["Present evidence, examine a limitation, compare alternatives, then state the conclusion with appropriate qualification","Use evidence, examine limits, compare options, then conclude"]
  ],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-evaluating-evidence-03":[
    ["Use caution because recency does not by itself establish credibility","Use caution: recency alone does not establish credibility"]
  ],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-evaluating-evidence-04":[
    ["Its relevance and transferability to the current question may be limited","Its relevance to this question may be limited"]
  ],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-evaluating-evidence-07":[
    ["It identifies an association in the observed group, but it may not establish causation","It shows an association, but not necessarily causation"]
  ],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-evaluating-evidence-09":[
    ["A finding's meaning and applicability can depend on who, where, and how it was studied","Context can affect a finding's meaning and applicability"]
  ],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-counterarguments-07":[
    ["The concern is plausible, but the larger study found only a small effect, so it may not outweigh the reported benefit","The concern is plausible, but the evidence shows only a small effect"]
  ],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-counterarguments-02":[
    ["Some purposeful practice may reinforce learning when the workload is manageable","Some purposeful practice may reinforce learning"]
  ],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-counterarguments-04":[
    ["The schedule could be adjusted, although transport capacity would still need to be checked","The schedule could be adjusted, but capacity still needs checking"]
  ],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-counterarguments-06":[
    ["Assess the evidence and explain whether it changes the overall conclusion","Assess whether the evidence changes the conclusion"]
  ],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-counterarguments-08":[
    ["It shows the writer understands where the opposing view has force and where its limits lie","It shows where the opposing view has force and limits"]
  ],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-counterarguments-10":[
    ["Does it answer the actual opposing reasoning and use evidence proportionate to the claim?","Does it address the opposing reasoning with proportionate evidence?"]
  ],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-source-synthesis-02":[
    ["The effect may differ by age group or context, so the common finding needs qualification","The common finding may vary by age or context"]
  ],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-source-synthesis-05":[
    ["Both support healthier meals, but one emphasizes nutrition while the other emphasizes affordability","Both support healthier meals but emphasize different priorities"]
  ],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-source-synthesis-07":[
    ["The reader needs the writer's own interpretation of how the sources relate to the question","The writer must explain how the sources relate to the question"]
  ],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-source-synthesis-08":[
    ["The apparent disagreement may reflect different time horizons rather than incompatible findings","Different time horizons may explain the apparent disagreement"]
  ],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-source-synthesis-09":[
    ["It states an insight created by relating the sources rather than repeating either source alone","It states an insight created by relating the sources"]
  ],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-scholarly-revision-03":[
    ["Replace vague labels with precise descriptions of the relevant effect or evidence","Replace vague labels with precise descriptions"]
  ],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-scholarly-revision-08":[
    ["Precision, qualification, evidence use, logical structure, and clarity","Check precision, evidence, structure, and clarity"]
  ],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-scholarly-revision-09":[
    ["Therefore, the approach may be useful in similar settings, but broader evidence is needed before generalizing","Broader evidence is needed before generalizing"]
  ],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-scholarly-revision-10":[
    ["A precise argument is easier to evaluate than language that sounds complicated but hides the reasoning","Clear, precise reasoning is easier to evaluate"]
  ]
};

const applyKnownOptionCorrections = (question) => {
  const corrections = STAGE3_OPTION_CORRECTIONS[question?.id];
  const rewrites = STAGE3_VERBAL_LENGTH_REWRITES[question?.id];
  const missingRewrites = STAGE3_MISSING_LENGTH_REWRITES[question?.id];
  const stage2Rewrites = STAGE2_VERBAL_LENGTH_REWRITES[question?.id];
  const additionalStage3Rewrites = STAGE3_ADDITIONAL_VERBAL_LENGTH_REWRITES[question?.id];
  if ((!corrections && !rewrites && !missingRewrites && !stage2Rewrites && !additionalStage3Rewrites) || !Array.isArray(question?.options)) return question;

  let options = question.options.map((option) => String(option ?? ""));
  let answer = String(question.answer ?? "");

  for (const [from, to] of [...(corrections || []), ...(rewrites || []), ...(missingRewrites || []), ...(stage2Rewrites || []), ...(additionalStage3Rewrites || [])]) {
    let replaced = false;
    options = options.map((option) => {
      if (!replaced && option.trim() === from) {
        replaced = true;
        if (answer.trim() === from) answer = to;
        return to;
      }
      return option;
    });
  }

  return { ...question, options, answer };
};

const normalizeCase = (value) => {
  const text = String(value ?? "").trim();
  if (!text) return text;
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const normalizePunctuation = (value, hasTerminalPunctuation) => {
  const text = String(value ?? "").trim().replace(punctuationPattern, "");
  return hasTerminalPunctuation ? `${text}.` : text;
};

const rotate = (items, offset) => {
  if (!items.length) return items;
  const safeOffset = ((offset % items.length) + items.length) % items.length;
  return items.slice(safeOffset).concat(items.slice(0, safeOffset));
};

const stableSeed = (id = "") => [...String(id)].reduce((sum, char) => (sum * 31 + char.charCodeAt(0)) >>> 0, 7);

export function prepareReasoningOptions(question) {
  if (!question || !Array.isArray(question.options) || question.options.length < 2) return question;

  const correctedQuestion = applyKnownOptionCorrections(question);
  const options = correctedQuestion.options.map((option) => String(option ?? "").trim());
  const correctIndex = options.findIndex((option) => option === String(correctedQuestion.answer ?? "").trim());
  if (correctIndex < 0) return correctedQuestion;

  const hasTerminalPunctuation = options.some((option) => punctuationPattern.test(option));
  const normalized = options.map((option) => normalizePunctuation(normalizeCase(option), hasTerminalPunctuation));
  const correctedAnswer = normalized[correctIndex];

  const targetPosition = stableSeed(correctedQuestion.id) % normalized.length;
  const offset = (correctIndex - targetPosition + normalized.length) % normalized.length;
  const ordered = rotate(normalized, offset);

  // Only flag an extreme, isolated length signal. A genuinely conspicuous cue
  // requires both a large relative gap and a meaningful absolute gap. This keeps
  // natural sentence-length variation from blocking otherwise valid reasoning
  // questions while still rejecting options that make the answer obvious by size.
  const lengths = ordered.map((option) => option.length);
  const minLength = Math.min(...lengths);
  const maxLength = Math.max(...lengths);
  const shortestCount = lengths.filter((length) => length === minLength).length;
  const longestCount = lengths.filter((length) => length === maxLength).length;
  const sortedLengths = [...lengths].sort((a, b) => a - b);
  const answerIndex = ordered.findIndex((option) => option === correctedAnswer);
  const answerLength = correctedAnswer.length;
  const secondShortest = sortedLengths[1] ?? minLength;
  const secondLongest = sortedLengths[sortedLengths.length - 2] ?? maxLength;
  const shortestGap = secondShortest - answerLength;
  const longestGap = answerLength - secondLongest;
  const uniqueShortestCue = answerLength === minLength && shortestCount === 1 && shortestGap >= 25 && secondShortest >= answerLength * 2.5;
  const uniqueLongestCue = answerLength === maxLength && longestCount === 1 && longestGap >= 25 && answerLength >= secondLongest * 2.5;
  const lengthCue = uniqueShortestCue || uniqueLongestCue;

  return {
    ...correctedQuestion,
    options: ordered,
    answer: correctedAnswer,
    optionQuality: {
      positionBalanced: answerIndex === targetPosition,
      targetAnswerPosition: targetPosition,
      capitalizationNormalized: true,
      punctuationNormalized: true,
      lengthCueDetected: lengthCue,
      lengthCueAction: lengthCue ? "REAUTHOR_REQUIRED" : "PASS",
    },
  };
}

export function prepareReasoningQuestionSet(questions = []) {
  return questions.map(prepareReasoningOptions);
}
