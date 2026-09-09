# Reasoning Question Quality Standard

**Status:** Required project standard for all current and future Reasoning levels and stages.

## 1. Content and architecture are separate

Changing question wording, answer choices, difficulty, explanations or assessment quality must not change the Reasoning architecture.

A new stage or level changes curriculum content and difficulty. It does **not** create a new dashboard, activity-player model, progress model, authentication model or question-bank architecture unless an architectural change is separately proposed and explicitly approved.

## 2. Learner-facing level labels

Learner-facing Reasoning labels must use the level and stage only, for example:

- **Level 1**
- **Level 1 · Stage 1**
- **Level 3 · Stage 4**

Do not display school-grade names or grade mappings in learner-facing Reasoning navigation, dashboards, cards, module pages, activity pages or progress labels.

Internal difficulty/content metadata may still be used where technically necessary, but it must not be surfaced as a grade label to learners.

## 3. Question quality

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

## 4. Answer-length distribution

For eligible text-only multiple-choice questions, the content set should be balanced so that the longest option is correct in approximately **30%** of questions.

The 30% figure is a distribution target, not a requirement to manufacture awkward wording. Natural, high-quality wording takes priority. The validator should flag material deviation from the target for review.

Answer length should be balanced across the full question set and, where enough questions exist, across tracks and stages rather than forcing an artificial pattern within every four-question activity.

## 5. Capitalization and publishing consistency

Answer choices must follow normal professional test-preparation publishing conventions.

- Sentence-style answers should begin consistently with a capital letter when they are complete sentences.
- Short phrases should use consistent capitalization across the option set.
- Proper nouns, acronyms, symbols and units should follow their normal capitalization rules.
- A correct answer must never be distinguishable because it alone begins with a lowercase letter.
- Punctuation should be consistent when the options form complete sentences or when punctuation is intentionally omitted from all short phrases.

## 6. Answer-position balance

Correct answer positions should not follow a predictable pattern. Across sufficiently large question sets, A/B/C/D should be reasonably distributed rather than clustering in one position.

## 7. Question-specific quality

Every question must:

- directly assess its activity skill;
- have exactly one defensible correct answer unless the question type explicitly allows otherwise;
- have plausible distractors;
- avoid accidental clues in wording or formatting;
- match the intended difficulty;
- retain its stable question ID;
- retain the existing activity/question-bank relationship;
- preserve timing, scoring, navigation, completion and progress metadata.

Quantitative questions should use genuine mathematical reasoning, calculation, patterns, relationships, conditions, models, conjectures, proofs or other relevant mathematical contexts as appropriate.

Verbal questions should use genuine reading, evidence, argument, research, analysis, synthesis, writing or communication contexts as appropriate.

## 8. Difficulty progression

Where an activity contains four assessment questions, the intended progression is:

**Core → Core → Stretch → Advanced**

Difficulty should increase through the reasoning demand, not through unnecessary vocabulary, longer wording or superficial complexity.

## 9. Stage and level consistency

Before a stage or level is considered complete, verify:

1. the question bank is present and non-empty;
2. question/activity IDs map to real activities;
3. Quantitative and Verbal content remain independent;
4. Explore and Extend coverage is present where required;
5. question counts match the intended activity structure;
6. syntax and imports are valid;
7. question IDs are unique;
8. answer choices and correct answers are structurally valid;
9. answer-length, capitalization and answer-position patterns have been audited;
10. representative questions have been reviewed for substantive quality.

## 10. Validation strategy

Automated prebuild validation is a **mandatory gate before every deployment-triggering commit**.

At minimum, the affected change set must be checked for:

- JavaScript/JSX syntax errors;
- required files and expected file locations;
- import/path resolution from the actual source file location;
- project alias resolution such as `@/`;
- route/module references and duplicate route hazards;
- question-bank syntax and structural validity;
- duplicate question IDs;
- activity-to-question and module-to-activity mappings;
- required stage/level structural integrity;
- malformed questions and answer structure;
- applicable answer-quality checks.

A validation failure must be fixed before pushing the deployment-triggering commit whenever the failure is deterministic and within repository control. Vercel must not be used as the first mechanism for discovering known syntax, path, import or mapping errors.

Assessment-quality auditing should inspect answer-length, capitalization, answer-position and related clue patterns. During remediation of existing content, these checks may operate as warnings so that content can be corrected stage by stage without unnecessarily blocking unrelated deployments. Once the current content has been normalized, the quality thresholds should be promoted to build-blocking checks for future content.

## 11. Deployment and build-rate protection

Deployment attempts are a finite resource and must not be used as a debugging loop. The 2026-09-09 build-integrity incident demonstrated that syntax, path and inadequate-validation failures can consume substantial Vercel build-rate capacity.

Therefore:

- do not create speculative commits merely to see whether Vercel will compile them;
- after a failed deployment, diagnose the failure category before making another deployment-triggering commit;
- distinguish source-code failures from Vercel/platform/rate-limit failures;
- verify that Vercel is evaluating the intended GitHub commit;
- prefer one coherent, fully prevalidated commit over multiple speculative commits;
- if a platform/rate-limit failure is confirmed, pause unnecessary deployment attempts rather than repeatedly rebuilding.

## 12. Change discipline

Question-quality remediation is performed **one stage at a time**. Each stage must be corrected and structurally validated before moving to the next stage.

Do not combine a content-quality change with an architectural change.

Do not modify Foreign Languages, authentication/account architecture or the shared Reasoning player as part of question-quality remediation.

## 13. Verification boundary

Build completion, deployment success and owner verification are separate states.

A stage may be **build-complete** while remaining **pending owner verification**. Documentation must not mark such a stage as verified until the project owner has personally tested it and explicitly confirms verification.
