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

const STAGE3_OPTION_CORRECTIONS = {};

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


const STAGE3_FINAL_LENGTH_REWRITES = {
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-planning-analysis-01": [["The question, position, and criteria for judging the issue","Question, position, and criteria"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-planning-analysis-02": [["State a position, give reasons, use evidence, and consider a limitation","Position, reasons, evidence, and a limitation"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-planning-analysis-03": [["They keep the response focused on what must be answered","They keep the response focused"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-planning-analysis-04": [["Cost, practicality, and likely effect on students","Cost, practicality, and student impact"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-planning-analysis-05": [["Rank the reasons and select the one most relevant to the question","Rank reasons by relevance"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-planning-analysis-06": [["Set criteria, compare evidence, then qualify the conclusion","Compare evidence, then qualify the conclusion"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-planning-analysis-07": [["Define practical criteria such as time, cost, and reliability","Define criteria for practicality"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-planning-analysis-08": [["It gives each planned point a clear job in answering the question","It gives each point a clear purpose"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-planning-analysis-09": [["A way to compare the evidence and explain which side is better supported","Compare the evidence and weigh support"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-planning-analysis-10": [["Each planned point connects to the question and has a reason or evidence to support it","Each point links to the question and support"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-analytical-paragraphs-02": [["Explain what the result suggests about the claim","Explain what the result suggests"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-analytical-paragraphs-03": [["Point, evidence, explanation, link to the question","Point, evidence, explanation, link"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-analytical-paragraphs-04": [["A study comparing reading habits with home book access","Study reading habits and home book access"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-analytical-paragraphs-05": [["The reader may not see how the evidence supports the point","The link to the point may be unclear"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-analytical-paragraphs-06": [["Add a sentence explaining how the point answers the question","Explain how the point answers the question"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-analytical-paragraphs-07": [["The result suggests later starts may help, but the small sample limits the claim","Later starts may help, but evidence is limited"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-analytical-paragraphs-08": [["State the analytical point that the examples are meant to support","State the point the examples support"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-analytical-paragraphs-09": [["It explains the significance of information for a claim or question","It explains the significance for the claim"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-analytical-paragraphs-10": [["Explain both what the evidence supports and what it cannot establish","Explain both its support and its limits"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-using-evidence-01": [["A study measuring students' reading time","A study measuring reading time"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-using-evidence-02": [["Explain what the statistic suggests about the claim","Explain what the statistic suggests"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-using-evidence-03": [["Use it as evidence of the surveyed group's preference, not all students everywhere","Evidence of the surveyed group's view"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-using-evidence-04": [["Does it directly support the claim and is its source appropriate.","Does it support the claim and fit the source?"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-using-evidence-05": [["As an example of the author's viewpoint, with its relevance explained","Use it to show the author's viewpoint"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-using-evidence-06": [["Compare their methods, contexts, and findings before deciding what they show","Compare methods, contexts, and findings"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-using-evidence-07": [["It may be useful evidence, but the small sample limits the claim","Useful evidence, but with limited scope"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-using-evidence-08": [["The survey suggests that many participants preferred the new schedule, but its sample was limited","A limited survey suggests a preference"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-using-evidence-09": [["The connection shows why the evidence matters for the argument","It shows why the evidence matters"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-using-evidence-10": [["Do not use it as central evidence for that question because relevance is missing","Do not use it as central evidence"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-synthesis-comparison-01": [["Both support exercise, but they explain its benefit through different mechanisms","Both support exercise for different reasons"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-synthesis-comparison-02": [["Synthesis explains a relationship among ideas and why it matters","It explains relationships among ideas"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-synthesis-comparison-03": [["The sources identify a potential benefit and a practical trade-off","It shows a benefit and a trade-off"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-synthesis-comparison-04": [["It helps assess how broadly the shared finding may apply","It tests how broadly the finding applies"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-synthesis-comparison-05": [["Both value school choice, but one emphasizes autonomy while the other emphasizes equal access","Both value choice, but stress different priorities"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-synthesis-comparison-06": [["The purpose of synthesis is to use relationships among sources to develop an answer","It uses source relationships to answer"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-synthesis-comparison-07": [["The difference in sample size and study design before drawing a conclusion","Compare sample size and study design"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-synthesis-comparison-08": [["Both studies associate reading practice with stronger vocabulary, but one used a shorter intervention period","Both link reading to vocabulary, with different durations"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-synthesis-comparison-09": [["Compare how each source defines focus and how it gathered evidence","Compare definitions and evidence gathering"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-synthesis-comparison-10": [["It explains an important difference, relationship, or implication for the question","It explains a difference or implication"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-revising-clarity-01": [["Separate or reorder the ideas so each paragraph has a clear purpose","Give each paragraph a clear purpose"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-revising-clarity-02": [["Use more precise wording that matches the evidence","Match the wording to the evidence"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-revising-clarity-03": [["A sentence interpreting what the evidence means for the claim","Interpret the evidence for the claim"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-revising-clarity-04": [["The result suggests the new schedule may improve punctuality","The result suggests better punctuality"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-revising-clarity-05": [["Keep the clearest statement and use the space for evidence or analysis","Keep the clearest statement; add analysis"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-revising-clarity-06": [["Move the reason into the body if it is important, or remove it if it is not supported","Move or remove the unsupported reason"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-revising-clarity-07": [["Replace it with evidence that directly addresses the paragraph's claim","Use evidence that directly addresses the claim"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-revising-clarity-08": [["Use qualified wording and explain the conditions under which the evidence supports the claim","Qualify the claim to fit mixed evidence"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-revising-clarity-09": [["Whether the structure, claims, evidence, and explanations form a coherent argument","Check whether reasoning forms a coherent argument"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-revising-clarity-10": [["Add the missing comparison or revise the topic sentence to match the paragraph's actual purpose","Add the comparison or revise the topic sentence"]],

  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-advanced-structure-02": [["Each paragraph should add a necessary step rather than repeat earlier material","Each paragraph adds a needed step"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-advanced-structure-03": [["Move the definition earlier so the evidence has a clear focus","Define the issue before presenting evidence"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-advanced-structure-04": [["However, the second explanation emphasizes cost rather than convenience","However, the second explanation stresses cost"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-advanced-structure-05": [["Group related points and use transitions to show the comparison","Group related points and signal the comparison"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-advanced-structure-06": [["It answers the question using the developed reasoning","It answers the question from the reasoning"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-advanced-structure-07": [["Evaluate each option under both criteria, then compare the combined evidence","Test both criteria for each option, then compare"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-advanced-structure-08": [["Use evidence, examine limits, compare options, then conclude","Evidence, limits, comparison, conclusion"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-advanced-structure-09": [["Condense it or replace it with the next needed reasoning step","Condense it or add the next reasoning step"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-advanced-structure-10": [["Can a reader explain how each paragraph contributes to answering the central question.","Can each paragraph be linked to the central question?"]],

  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-evaluating-evidence-01": [["It is relevant to the claim and comes from an appropriate source","Relevant evidence from an appropriate source"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-evaluating-evidence-02": [["The small sample may limit how broadly the finding can be generalized","A small sample may limit generalization"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-evaluating-evidence-03": [["Use caution: recency alone does not establish credibility","Recency alone does not establish credibility"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-evaluating-evidence-04": [["Its relevance to this question may be limited","Relevance may be limited"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-evaluating-evidence-05": [["Compare their samples, measures, and methods before weighing the conclusions","Compare samples, measures, and methods"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-evaluating-evidence-06": [["The wording may influence responses and reduce the neutrality of the evidence","Leading wording may bias responses"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-evaluating-evidence-07": [["It shows an association, but not necessarily causation","It shows association, not necessarily causation"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-evaluating-evidence-08": [["As a claim needing further support rather than as established evidence","Treat it as a claim needing support"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-evaluating-evidence-09": [["Context can affect a finding's meaning and applicability","Context can affect meaning and applicability"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-evaluating-evidence-10": [["Ask what the evidence supports, how reliable it is, and what limits its use","Check support, reliability, and limits"]],

  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-counterarguments-01": [["It shows awareness of an alternative view and allows a reasoned response","It shows awareness of an alternative view"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-counterarguments-02": [["Some purposeful practice may reinforce learning","Purposeful practice may reinforce learning"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-counterarguments-03": [["It represents the opposing view accurately before explaining why it is limited or outweighed","Represent the opposing view accurately, then respond"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-counterarguments-04": [["The schedule could be adjusted, but capacity still needs checking","Adjust the schedule, but check capacity"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-counterarguments-05": [["Uniforms may reduce visible differences, but they can also limit students' choices","Uniforms can reduce differences but limit choice"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-counterarguments-06": [["Assess whether the evidence changes the conclusion","Assess whether evidence changes the conclusion"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-counterarguments-07": [["The concern is plausible, but the evidence shows only a small effect","The concern is plausible, but evidence shows a small effect"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-counterarguments-08": [["It shows where the opposing view has force and limits","It shows the opposing view's force and limits"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-counterarguments-09": [["Address that part specifically rather than treating it as a refutation of the whole thesis","Address that part without rejecting the whole thesis"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-counterarguments-10": [["Does it address the opposing reasoning with proportionate evidence.","Does it address the reasoning with proportionate evidence?"]],

  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-source-synthesis-01": [["It can identify the common finding while noting that context may affect how broadly it applies","Identify the common finding and context limits"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-source-synthesis-02": [["The common finding may vary by age or context","The finding may vary by age or context"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-source-synthesis-03": [["Identify the meaningful relationship among their claims, evidence, or contexts","Identify the meaningful relationship between sources"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-source-synthesis-04": [["Different evidence can show how the conclusion is supported and where its limits may differ","Different evidence can reveal different limits"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-source-synthesis-05": [["Both support healthier meals but emphasize different priorities","Both support healthier meals, with different priorities"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-source-synthesis-06": [["The different scope affects how broadly their findings can be compared or generalized","Scope affects how broadly findings generalize"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-source-synthesis-07": [["The writer must explain how the sources relate to the question","Explain how the sources relate to the question"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-source-synthesis-08": [["Different time horizons may explain the apparent disagreement","Different time horizons may explain the disagreement"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-source-synthesis-09": [["It states an insight created by relating the sources","It states an insight from relating the sources"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-source-synthesis-10": [["Could the reader see what the sources collectively add to the answer.","Can the reader see what the sources add?"]],

  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-scholarly-revision-01": [["Change 'always proves' to 'suggests' when the evidence is limited","Change 'always proves' to 'suggests'"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-scholarly-revision-02": [["The findings suggest a possible benefit, although the small sample limits generalization","The findings suggest a benefit, with limited generalization"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-scholarly-revision-03": [["Replace vague labels with precise descriptions","Replace vague labels with precise terms"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-scholarly-revision-04": [["Narrow the claim to match what the source actually supports","Narrow the claim to the source's support"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-scholarly-revision-05": [["The evidence indicates a modest association, but it does not establish causation","The evidence shows an association, not causation"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-scholarly-revision-06": [["Explain how the facts support the claim and why that support matters","Explain how the facts support the claim"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-scholarly-revision-07": [["The evidence is mixed: two studies report a benefit, while another finds little change in a different context","The evidence is mixed across contexts"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-scholarly-revision-08": [["Check precision, evidence, structure, and clarity","Check precision, evidence, structure, clarity"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-scholarly-revision-09": [["Broader evidence is needed before generalizing","Broader evidence is needed before generalizing"]]
};


const STAGE3_SECOND_PASS_LENGTH_REWRITES = {
  "Q-L1-Q-S3-CAL-Q-L1-S3-EXP-representing-ideas-09": [["Whether the multiplication matches the number in each row","Check the multiplication against each row"]],
  "Q-L1-Q-S3-CAL-Q-L1-S3-EXP-connecting-representations-07": [["The table and calculation describe the same relationship","They show the same relationship"]],
  "Q-L1-Q-S3-CAL-Q-L1-S3-EXP-explaining-thinking-03": [["The second gives the relationship producing the answer","The second shows how 36 is made"]],
  "Q-L1-Q-S3-CAL-Q-L1-S3-EXP-explaining-thinking-06": [["Each can be split into pairs, so combining them still forms pairs","Both numbers form pairs"]],
  "Q-L1-Q-S3-CAL-Q-L1-S3-EXP-explaining-thinking-08": [["5 × 8 counts the square units in the array, giving 40","5 × 8 gives the area"]],
  "Q-L1-Q-S3-CAL-Q-L1-S3-EXP-explaining-thinking-10": [["Evidence is information used to support a conclusion","Evidence supports a conclusion"]],
  "Q-L1-Q-S3-CAL-Q-L1-S3-EXT-non-routine-representations-04": [["Two labeled rectangles and subtraction of their areas","Show both areas and subtract"]],
  "Q-L1-Q-S3-CAL-Q-L1-S3-EXT-non-routine-representations-10": [["Choose the representation that exposes the relationship being tested","Choose the clearer relationship"]],
  "Q-L1-Q-S3-CAL-Q-L1-S3-EXT-justifying-generalizations-04": [["The fourth term should be 24, so the claim fails there","The fourth term should be 24"]],
  "Q-L1-Q-S3-CAL-Q-L1-S3-EXT-justifying-generalizations-10": [["A new case tests whether the relationship extends beyond the original evidence","A new case tests the rule"]],
  "Q-L1-Q-S3-CAL-Q-L1-S3-EXT-cases-counterexamples-05": [["Systematically inspect the cases and record whether each satisfies the claim","Check all cases systematically"]],
  "Q-L1-Q-S3-CAL-Q-L1-S3-EXT-cases-counterexamples-09": [["The claim must hold for every case, so one failing case makes it false as stated","One failing case disproves an all-claim"]],
  "Q-L1-Q-S3-CAL-Q-L1-S3-EXT-strategic-problem-solving-01": [["Multiply first, then subtract the amount given away","Multiply, then subtract"]],
  "Q-L1-Q-S3-CAL-Q-L1-S3-EXT-strategic-problem-solving-07": [["Translate each condition into a restriction before choosing an answer","Translate conditions into restrictions"]],
  "Q-L1-Q-S3-CAL-Q-L1-S3-EXT-strategic-problem-solving-08": [["Use the table if it exposes the pattern and reduces repeated work","Use the table to compare cases"]],
  "Q-L1-Q-S3-CAL-Q-L1-S3-EXT-strategic-problem-solving-09": [["Divide to find the groups, add 2 per group, then recombine","Find groups, add 2 per group"]],
  "Q-L1-Q-S3-CAL-Q-L1-S3-EXT-strategic-problem-solving-10": [["Compare their results and verify each method against the original conditions","Compare results with the original conditions"]],
  "Q-L1-Q-S3-CAL-Q-L1-S3-EXT-mathematical-justification-01": [["45 ends in 5, which is consistent with the divisibility rule for 5","45 ends in 5"]],
  "Q-L1-Q-S3-CAL-Q-L1-S3-EXT-mathematical-justification-04": [["It lets another learner check how the conclusion follows","It lets others check the reasoning"]],
  "Q-L1-Q-S3-CAL-Q-L1-S3-EXT-mathematical-justification-08": [["The original 5 groups of 18 contain 90, and removing 27 leaves 63","90 minus 27 leaves 63"]],
  "Q-L1-Q-S3-CAL-Q-L1-S3-EXT-mathematical-justification-10": [["It connects the given information, reasoning steps, and conclusion","It links facts, steps, and conclusion"]],

  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-planning-analysis-04": [["Cost, practicality, and student impact","Cost, practicality, and impact"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-planning-analysis-06": [["Compare evidence, then qualify the conclusion","Compare evidence and qualify the conclusion"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-analytical-paragraphs-02": [["Explain what the result suggests","What the result suggests"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-analytical-paragraphs-04": [["Study reading habits and home book access","Reading habits and home access"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-analytical-paragraphs-07": [["Later starts may help, but evidence is limited","Later starts may help"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-using-evidence-04": [["Does it support the claim and fit the source?","Does it support the claim?"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-using-evidence-07": [["Useful evidence, but with limited scope","Useful but limited evidence"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-synthesis-comparison-04": [["It tests how broadly the finding applies","It tests how broadly it applies"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-synthesis-comparison-07": [["Compare sample size and study design","Compare sample size and design"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-synthesis-comparison-08": [["Both link reading to vocabulary, with different durations","Reading links to vocabulary differ in duration"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-revising-clarity-03": [["Interpret the evidence for the claim","Interpret evidence for the claim"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-revising-clarity-04": [["The result suggests better punctuality","The result suggests better punctuality"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-revising-clarity-05": [["Keep the clearest statement; add analysis","Keep the clearest statement and add analysis"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-revising-clarity-07": [["Use evidence that directly addresses the claim","Use evidence that addresses the claim"]],

  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-advanced-structure-03": [["Define the issue before presenting evidence","Define the issue before evidence"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-advanced-structure-05": [["Group related points and signal the comparison","Group points and signal comparison"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-advanced-structure-06": [["It answers the question from the reasoning","It answers from the reasoning"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-advanced-structure-09": [["Condense it or add the next reasoning step","Condense it or add the next step"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-advanced-structure-10": [["Can each paragraph be linked to the central question?","Can each paragraph link to the central question?"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-evaluating-evidence-01": [["Relevant evidence from an appropriate source","Relevant evidence from a suitable source"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-evaluating-evidence-03": [["Recency alone does not establish credibility","Recency alone does not establish credibility"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-evaluating-evidence-07": [["It shows association, not necessarily causation","Association does not prove causation"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-evaluating-evidence-09": [["Context can affect meaning and applicability","Context affects meaning and use"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-counterarguments-01": [["It shows awareness of an alternative view","It shows awareness of alternatives"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-counterarguments-02": [["Purposeful practice may reinforce learning","Purposeful practice reinforces learning"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-counterarguments-03": [["Represent the opposing view accurately, then respond","Represent the opposing view, then respond"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-counterarguments-05": [["Uniforms can reduce differences but limit choice","Uniforms reduce differences but limit choice"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-counterarguments-06": [["Assess whether evidence changes the conclusion","Assess whether evidence changes the conclusion"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-counterarguments-07": [["The concern is plausible, but evidence shows a small effect","Evidence shows only a small effect"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-counterarguments-08": [["It shows the opposing view's force and limits","It shows the view's force and limits"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-counterarguments-09": [["Address that part without rejecting the whole thesis","Address that part without rejecting the thesis"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-counterarguments-10": [["Does it address the reasoning with proportionate evidence?","Does it address the reasoning fairly?"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-source-synthesis-03": [["Identify the meaningful relationship between sources","Identify the relationship between sources"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-source-synthesis-05": [["Both support healthier meals, with different priorities","Both support healthier meals, with different priorities"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-source-synthesis-07": [["Explain how the sources relate to the question","Explain how the sources relate"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-source-synthesis-08": [["Different time horizons may explain the disagreement","Different time horizons may explain disagreement"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-source-synthesis-09": [["It states an insight from relating the sources","It states an insight from the sources"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-source-synthesis-10": [["Can the reader see what the sources add?","Can the reader see what the sources add?"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-scholarly-revision-02": [["The findings suggest a benefit, with limited generalization","The findings suggest a benefit"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-scholarly-revision-03": [["Replace vague labels with precise terms","Replace vague labels with precise terms"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-scholarly-revision-06": [["Explain how the facts support the claim","Explain how the facts support the claim"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-scholarly-revision-08": [["Check precision, evidence, structure, clarity","Check precision, evidence, structure, clarity"]],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXT-scholarly-revision-09": [["Broader evidence is needed before generalizing","More evidence is needed before generalizing"]]
};

const applyKnownOptionCorrections = (question) => {
  const corrections = STAGE3_OPTION_CORRECTIONS[question?.id];
  const rewrites = STAGE3_VERBAL_LENGTH_REWRITES[question?.id];
  const missingRewrites = STAGE3_MISSING_LENGTH_REWRITES[question?.id];
  const stage2Rewrites = STAGE2_VERBAL_LENGTH_REWRITES[question?.id];
  const additionalStage3Rewrites = STAGE3_ADDITIONAL_VERBAL_LENGTH_REWRITES[question?.id];
  const finalStage3Rewrites = STAGE3_FINAL_LENGTH_REWRITES[question?.id];
  const secondPassStage3Rewrites = STAGE3_SECOND_PASS_LENGTH_REWRITES[question?.id];
  if ((!corrections && !rewrites && !missingRewrites && !stage2Rewrites && !additionalStage3Rewrites && !finalStage3Rewrites && !secondPassStage3Rewrites) || !Array.isArray(question?.options)) return question;

  let options = question.options.map((option) => String(option ?? ""));
  let answer = String(question.answer ?? "");

  for (const [from, to] of [...(corrections || []), ...(rewrites || []), ...(missingRewrites || []), ...(stage2Rewrites || []), ...(additionalStage3Rewrites || []), ...(finalStage3Rewrites || []), ...(secondPassStage3Rewrites || [])]) {
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
