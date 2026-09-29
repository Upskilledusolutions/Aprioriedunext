# Reasoning Question Quality Standard

**Status:** Required project standard for all current and future Reasoning levels and stages.

## 1. Content and architecture are separate

Changing question wording, answer choices, difficulty, explanations, content-mode labels or assessment quality must not change the Reasoning architecture.

A new stage or level changes curriculum content and difficulty. It does **not** create a new dashboard, activity-player model, progress model, authentication model or question-bank architecture unless an architectural change is separately proposed and explicitly approved.

## 2. Learner-facing level labels

Learner-facing Reasoning labels must use the level and stage only, for example:

- **Level 1**
- **Level 1 · Stage 1**
- **Level 3 · Stage 4**

Do not display school-grade names or grade mappings in learner-facing Reasoning navigation, dashboards, cards, module pages, activity pages or progress labels.

Internal difficulty/content metadata may still be used where technically necessary, but it must not be surfaced as a grade label to learners.

## 3. Content-mode classification and learner label

Every assessment question must have an internal content-mode classification and a corresponding learner-facing label.

Use:

- **Computation** when calculation/manipulation of quantities is the primary operation.
- **Text-Based Reasoning** when reading/interpreting text, claims, evidence, conditions or ideas is the primary operation and calculation is not required as the main task.
- **Computation + Reasoning** when both substantive calculation and substantive reasoning are required.

The label must be visible with the question so the learner can understand the nature of the task before responding. It is not a difficulty indicator and must not replace Level/Stage labels.

The content-mode value should be stored as Question Bank metadata so it can be validated and filtered without hard-coding individual activity pages.

## 4. Question quality

Every multiple-choice question must be solvable from the content and reasoning being assessed. Correct answers must not be identifiable from superficial formatting or answer construction.

The following must be avoided:

- the correct answer being consistently the longest option;
- the correct answer being consistently the shortest option;
- one answer having substantially more detail than the distractors without a content reason;
- one answer being the only grammatically complete option;
- one answer being the only option with punctuation or a distinctive formatting pattern;
- the correct answer occupying a predictable answer position;
- inconsistent capitalization revealing the correct answer;
- distractors that are obviously shorter, vaguer or structurally different merely because they are wrong.

## 5. Answer-length distribution

For eligible text-only multiple-choice questions, the content set should be balanced so that the longest option is correct in approximately **30%** of questions.

The 30% figure is a distribution target, not a requirement to manufacture awkward wording. Natural, high-quality wording takes priority. The validator should flag material deviation from the target for review.

Answer length should be balanced across the full question set and, where enough questions exist, across tracks and stages rather than forcing an artificial pattern within every four-question activity.

## 6. Capitalization and publishing consistency

Answer choices must follow normal professional test-preparation publishing conventions.

- Sentence-style answers should begin consistently with a capital letter when they are complete sentences.
- Short phrases should use consistent capitalization across the option set.
- Proper nouns, acronyms, symbols and units should follow their normal capitalization rules.
- A correct answer must never be distinguishable because it alone begins with a lowercase letter.
- Punctuation should be consistent when the options form complete sentences or when punctuation is intentionally omitted from all short phrases.

## 7. Answer-position balance

Correct answer positions should not follow a predictable pattern. Across sufficiently large question sets, A/B/C/D should be reasonably distributed rather than clustering in one position.

## 8. Question-specific quality

Every question must:

- directly assess its activity skill;
- have exactly one defensible correct answer unless the question type explicitly allows otherwise;
- have plausible distractors;
- avoid accidental clues in wording or formatting;
- match the intended difficulty;
- match its declared content mode;
- retain its stable question ID unless an explicit migration rule is approved;
- retain the intended activity/question-bank relationship;
- preserve timing, scoring, navigation, completion and progress metadata.

Quantitative questions should use genuine mathematical reasoning, calculation, patterns, relationships, conditions, models, conjectures, proofs or other relevant mathematical contexts as appropriate.

Verbal questions should use genuine reading, evidence, argument, research, analysis, synthesis, writing or communication contexts as appropriate.

## 9. Grade-level calibration

For internal curriculum calibration, Level 1 corresponds to Grade 3 and each subsequent Level increases by one grade layer through Level 9, according to the approved architecture.

Historical 2026-09-10 calibration findings are remediation history only. They are not a standing instruction to move future questions between Levels.

For future Stage/Level work:
- calibrate content against the intended Level;
- judge actual reasoning demand, not vocabulary length or historical metadata;
- where the approved two-additional-level elevation rule applies, raise substantive task demand rather than merely changing a difficulty value;
- preserve stable Question IDs when the underlying item remains the same;
- do not change a question's Level solely to compensate for an old bank's historical calibration error.

## 10. Difficulty progression

Each learner-facing Activity delivers exactly 10 questions by default.

Within an Activity, difficulty should rise incrementally through substantive reasoning demand. The progression may move from accessible/core items toward stretch and advanced items, but it is not required to follow a fixed four-question pattern.

Difficulty must increase appropriately within Explore and independently within Extend. Extend should generally be more demanding than Explore while remaining appropriate to the selected Level.

## 11. Stage and level consistency

Before a stage or level is considered complete, verify:

1. the question bank is present and non-empty;
2. question/activity IDs map to real activities;
3. module/activity mappings are distinct and intentional; duplicate references must be explicitly approved rather than accepted because the activity count is correct;
4. Quantitative and Verbal content remain independent;
5. Explore and Extend coverage is present where required;
6. question counts match the intended activity structure;
7. syntax and imports are valid;
8. question IDs are unique;
9. answer choices and correct answers are structurally valid;
10. answer-length, capitalization and answer-position patterns have been audited;
11. representative questions have been reviewed for substantive quality;
12. every question has the correct content-mode classification;
13. content is appropriate to its Level and its assigned difficulty.

## 12. Validation strategy

Automated prebuild validation is a **mandatory gate before every deployment-triggering commit**.

At minimum, the affected change set must be checked for:

- JavaScript/JSX syntax errors;
- required files and expected file locations;
- import/path resolution from the actual source file location;
- project alias resolution such as `@/`;
- route/module references and duplicate route hazards;
- question-bank syntax and structural validity;
- duplicate question IDs;
- activity-to-question and module-to-activity mappings, including duplicate references where distinct activities are required;
- required stage/level structural integrity;
- malformed questions and answer structure;
- content-mode completeness and validity;
- applicable answer-quality checks.

Validation is Stage-scoped. Do not let unrelated future Stages become deployment blockers. Independent source modules must be evaluated in isolated scopes with explicit dependencies, and JSX must not be passed to raw Node `--check`.

A validation failure must be fixed before pushing the deployment-triggering commit whenever the failure is deterministic and within repository control. Vercel must not be used as the first mechanism for discovering known syntax, path, import or mapping errors.

## 13. Deployment and build-rate protection

Deployment attempts are a finite resource and must not be used as a debugging loop. The 2026-09-09 build-integrity incident demonstrated that syntax, path and inadequate-validation failures can consume substantial Vercel build-rate capacity.

Therefore:

- do not create speculative commits merely to see whether Vercel will compile them;
- after a failed deployment, diagnose the failure category before making another deployment-triggering commit;
- distinguish source-code failures from Vercel/platform/rate-limit failures;
- verify that Vercel is evaluating the intended GitHub commit;
- prefer one coherent, fully prevalidated commit over multiple speculative commits;
- when multiple fixes concern the same stage, group them into one coherent stage-level deployment whenever they have passed validation together;
- if a platform/rate-limit failure is confirmed, pause unnecessary deployment attempts rather than repeatedly rebuilding.

## 14. Change discipline

Question-quality and calibration remediation is performed **one stage at a time**. A stage should be corrected and structurally validated before moving to the next stage unless the project owner explicitly approves a larger grouped deployment.

Do not combine a content-quality change with an architectural change.

Do not modify Foreign Languages, authentication/account architecture or the shared Reasoning player as part of question-quality/calibration remediation.

## 15. Verification boundary

Build completion, deployment success and owner verification are separate states.

A stage may be **build-complete** while remaining **pending owner verification**. Documentation must not mark such a stage as verified until the project owner has personally tested it and explicitly confirms verification.
