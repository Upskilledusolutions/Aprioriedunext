# Reasoning Remediation History

**Project:** Apriori Edu Next / Upskilleduonline  
**Scope recorded here:** Level 1 Reasoning remediation and Level 2 build progress through the current work session  
**Last updated:** 2026-09-10

This document is the chronological remediation record for completed and in-progress Reasoning work. It records the navigation/runtime fixes that preceded the question-quality work, the build-integrity lessons that govern future deployments, the complete Level 2 Stage 1 implementation sequence to date, and the current verification boundary.

## Architecture preserved throughout

- One shared account/authentication model continues to serve Reasoning and Foreign Languages.
- Quantitative and Verbal remain independent Reasoning tracks.
- The six-stage curriculum and 50% Explore / 50% Extend structure are preserved.
- Reasoning uses dedicated question banks and stable question IDs.
- The shared activity player remains the common execution layer for timing, scoring, feedback, completion, navigation and progress.
- Reasoning progress remains separate from Foreign Languages progress.
- No Foreign Languages architecture or content was changed as part of this remediation sequence.

## Stage 1 — Foundation remediation

### Historical navigation and activity flow

- Quantitative Stage 1 module navigation was added: commit `1cdaf88db4c8e650f7f61798e259f7e9a9313ea3`.
- Verbal Stage 1 module navigation was added: commit `20e75b7fa534f0c9cef979a0cced75c24cf9ff55`.
- Reasoning activity return navigation was improved: commit `230d0142c81d8219c443a1f63576d562622e5d02`.
- Reasoning activity navigation styling was corrected: commit `76a7114334523daee95a5478317fba3cd86b93c3`.
- Stage 1 navigation was subsequently verified/documented: commit `2e34ad0b5be4b2d3242410c02632dd1b6006800c`.

### Historical question-quality remediation

- The Stage 1 question bank was restored before quality remediation: commit `ee7b073cb6ab6676e5dfb5944ce75495728a5631`.
- Stage 1 choice-quality remediation was completed across the core and extension content: commits `282de52975a20ae7934574e09e16372b416009a6`, `7b6336f759f8340a75650caa790cbe3347a4a7fb`, `acdb54b66e906f4f23c2b232337a766654824987`, and `944341e4076fb63aec61e63d8ea2a7a35c36044f`.
- The permanent Question Quality Standard was applied as the governing assessment-quality rule rather than changing the underlying Reasoning architecture.

### 2026-09-10 current Stage 1 re-audit finding

The earlier remediation record is **not being deleted**, but it is no longer treated as sufficient for current launch verification.

Current source inspection found concrete Stage 1 activity/question mapping defects. Examples in `src/Data/Reasoning/activities.js` include Verbal Stage 1 activities referencing Question Bank IDs with the Quantitative `Q-L1-Q-...` prefix instead of the intended Verbal `Q-L1-V-...` records. The affected mappings include the final question in Main Idea & Details, all three Vocabulary in Context references shown in the current file, all three Basic Argument references shown in the current file, and the final questions in Inference and Comparing Perspectives. These unresolved references can cause missing-question/client-side runtime failures.

The Stage 1 re-audit therefore must begin with runtime/mapping correctness, then apply content-mode labels and grade/difficulty calibration.

### Mandatory Stage 1 recalibration

- Computational Quantitative content currently operates approximately two levels below the intended Level 1 / Grade 3 demand; retain it as foundational material and recalibrate the Level 1 computational standard upward.
- Quantitative Text-Based Reasoning content currently operates approximately two levels above Level 1; place the same question set two levels higher through Question Bank/activity metadata and mappings, without deleting the existing question records.
- Verbal content currently operates approximately two levels above Level 1; place the same question set two levels higher through Question Bank/activity metadata and mappings, without deleting the existing question records.
- Recalculate difficulty metadata to match the corrected placement and reasoning demand.
- Add content-mode metadata and learner-facing labels for every Stage 1 assessment question.

No architectural change is part of this correction.

## Shared activity/runtime remediation before Stage 4

- Reasoning activity question loading and runtime guards were corrected: commits `f6174a0c6380ac309df5d699925e1d2d57d8009a` and `a3d1072631c469401adbf31526be62652d253e84`.
- Reasoning module return links were corrected: commit `14fc89fe3c1f9dc92b95224a14b977eaec020df5`.
- Reasoning activity navigation syntax was corrected: commit `55007ff9d56fc613e453c84a7d56e9e9005fce22`.
- Stage 4–6 shared activity navigation and scoring were completed: commit `2aacd55fa4e1e8691c9d597978192e83cd376516`.
- Shared activity timeout/module-navigation behavior was finalized, including completion handling when the final question times out: commit `a4dcf59644ec76e869c0184dd46efdb72a472589`.

These historical fixes remain valid unless a current audit identifies a regression.

## Stage 2 — Advanced Problem Solving / Critical Reading & Argument

- Stage 2 question-quality remediation was completed: commit `229468c0257b6181dd949de8a62fcb017c2c118c`.
- The remediation followed the permanent quality rules for answer-position balance, answer-length/structural clues, distractor quality, activity alignment and difficulty progression.
- **Current status:** re-audit required under the 2026-09-10 runtime, content-mode and grade/difficulty calibration rules. No historical completion record is sufficient for current owner verification.

## Stage 3 — Mathematical Thinking / Analytical & Scholarly Writing

- The Stage 3 question bank was restored and substantively populated for both tracks: commit `1a90523ddcdcbc502729ce1b1d6132911f608d40`.
- Stage 3 remediation preserved stable IDs and the existing activity/player architecture while balancing answer positions and improving contextual distractors.
- **Current status:** re-audit required for runtime mappings, content-mode labels and grade/difficulty calibration.

## Stage 4 — Math Olympiad / Essay Competitions

### Navigation remediation

- Quantitative Stage 4 dashboard navigation was fixed: commit `b2b5bf380197c541db7f1e2a590399eedcdae437`.
- Verbal Stage 4 dashboard navigation was fixed: commit `dbacd34e8a73911612cf31d83d94159fc9d363c6`.

### Activity and question-bank remediation

- Stage 4 activity question mappings were corrected so activities connect to their complete question sets: commit `0bcefb9b364b1bfcf198358bec79ad2446e9bbb0`.
- Stage 4 question quality, difficulty progression and answer-position distribution were remediated: commit `34a71590b0b75fa2c22841ae3aa0c385f2b51540`.
- Stage 4 remediation completion was previously recorded: commit `6a654430918f84aa814c017a3f9bdc6e1c2c6584`.
- **Current boundary:** Stage 4 still requires final structural correction/verification. The current module configuration contains duplicate fifth Extend activity references: Quantitative repeats `Q-L1-S4-EXT-olympiad-reasoning`, while Verbal repeats `V-L1-S4-EXT-counterarguments`. The current Stage 4 activity file contains only four distinct Extend activities in each track, so the fifth module entries require proper resolution/removal/restoration rather than treating the count as complete.
- **Current status:** re-audit also required for content-mode labels and grade/difficulty calibration.

## Build-integrity incident and permanent prevention rules — 2026-09-09

Today’s remediation cycle exposed a process failure that must be treated as a project-level engineering rule rather than as isolated mistakes. More than half of today’s attempted changes/deployment attempts encountered build-blocking problems involving **syntax, import/path resolution, or insufficient prebuild validation** before a deployment could be successfully evaluated.

Repeated failed deployment attempts also consumed a substantial portion of the available Vercel build-rate budget. The latest GitHub commit status reports a Vercel failure with a `build-rate-limit` target. This is a platform/build-budget condition and must not be confused with source-code verification.

The following safeguards are mandatory for all future Reasoning work:

1. **Validate before every deployment-triggering commit.** Run the complete Reasoning prebuild validation against the exact files changed, including syntax parsing, required-file checks, import/path resolution, duplicate-ID checks, activity-to-question mapping checks and structural checks for the affected level/stage.
2. **Import paths must be resolved against the real repository structure.** Do not assume a relative path is valid from a page/module location. Existing project aliases such as `@/` must be used where appropriate and must themselves be validated.
3. **No placeholder or duplicated mappings may pass as complete remediation.** Every module activity ID must point to a real, distinct intended activity unless an explicit reuse is part of the approved design. Counts alone are insufficient.
4. **Syntax and structural validation must precede content-quality validation.** A question-quality change is not ready to deploy until the affected source files parse successfully and all referenced files/IDs resolve.
5. **Do not use Vercel as the first test environment for deterministic source-code errors.** Static/local validation must catch known syntax, import, path and mapping defects before pushing a deployment-triggering commit whenever the repository tooling can do so.
6. **Group related fixes, but do not bundle unvalidated changes.** A single deployment should contain a coherent, prevalidated change set rather than a chain of speculative fixes that each trigger another build.
7. **After validation, verify the exact deployed commit.** GitHub `main` must be checked against the Vercel deployment commit before treating the build as tested.
8. **A deployment failure must be diagnosed from its actual status before making another build-triggering commit.** Do not repeatedly push speculative fixes when the failure is a Vercel rate/build-system problem rather than a source-code problem.
9. **Stage completion is never inferred from a successful commit alone.** Structural correctness, deployment readiness, runtime behavior and owner verification remain separate acceptance criteria.
10. **These safeguards apply to every future Reasoning level and stage.** They are process controls intended specifically to prevent repetition of today’s syntax, path and validation failures.

## Stage 5 — Proof & Advanced Mathematics / Research Skills

- Stage 5 retained the existing 20 activity groups and four-question structure: 10 Quantitative and 10 Verbal, split evenly between Explore and Extend.
- The Stage 5 question bank was remediated while preserving the existing activity IDs and generated question IDs: commit `f85f844b103f83258a26eb997c84c8222bc26924`.
- A separate Stage 5 question-bank build error was corrected: commit `1c5d5877eeea9d61d31fc8b8f2700750c87543a4`.
- Each activity follows Core → Core → Stretch → Advanced progression.
- Correct-answer positions were rotated deterministically so the bank does not systematically place the correct answer in the same option position.
- Existing timing was retained: 55 seconds for Core questions and 65 seconds for Stretch/Advanced questions.
- The shared player, timing, scoring, timeout and completion architecture was preserved.
- **Build status:** Build work is complete.
- **Verification status:** Pending verification by the project owner, with current re-audit also required for runtime safety, content-mode labeling and grade/difficulty calibration.

## Stage 6 — Mathematical Research / Research Writing & Publication

- Stage 6 retains 20 activities: 10 Quantitative and 10 Verbal, with 50% Explore and 50% Extend.
- The Stage 6 question bank contains four questions per activity, giving 80 questions across the stage.
- Stage 6 content covers mathematical inquiry, conjecture, modelling, proof, independent investigation, research design, literature search and synthesis, scholarly analysis, research writing and publication readiness.
- Correct-answer positions were rotated deterministically across the four-question activities to prevent systematic answer-position bias.
- Each activity follows Core → Core → Stretch → Advanced progression.
- Timing is 60 seconds for Core questions and 75 seconds for Stretch/Advanced questions.
- Stage 6 was committed directly to `main`: commit `3e49c5c4904d7f2a4b4c52cb451fdfb2f05aa5ba`.
- The shared activity player was preserved and continues to provide the common execution, scoring, timeout, completion and navigation behavior.
- **Build status:** Build work is complete.
- **Verification status:** Pending verification by the project owner, with current re-audit also required for runtime safety, content-mode labeling and grade/difficulty calibration.

## Level 2 — current work completed to date

Level 2 development has begun with Stage 1 and is being added without altering the Level 1 curriculum, shared account architecture or Foreign Languages product.

### Level 2 Stage 1 implementation sequence

The Stage 1 build progressed through the following discrete implementation milestones:

- Question bank added: `6bf53518aea6ea8630ed10988a319f9cf64a99c8`.
- Activities added: `0eb546f70d98c06464d210294ac50de9f9d7e691`.
- Modules added: `6b31af5dd85c9e98abc63684e65d0a8bd2057056`.
- Activities connected to the shared Reasoning player: `127fee4dd36b6481cd75c180935fd4ff3de78a9a`.
- Quantitative Stage 1 dashboard added: `79eded9dec4dc76592012ea907e62edf423a22c8`.
- Quantitative Stage 1 module lessons added: `91afeedd8172dd9ac3dfe915d78781fdf2f46980`.
- Verbal Stage 1 dashboard added: `8e451af1494ad7e5895eb64ef571e74a600cacd2`.
- Verbal Stage 1 module lessons added: `82e98e073dc5c924c26f36b3099cddd9c7f47cb6`.
- Quantitative dashboard Stage 1 entry added: `c776f4cf53bef31e33f11d818dc77ecc1f4c7455`.
- Verbal dashboard Stage 1 entry added: `6ad8dd6a5566ff7d0cb8cc4f799a4c1e2110b733`.
- Level 2 Stage 1 activity-to-module mappings corrected: `629f59be8432556fc7c00abde73270ad5f3ca923`.

### Level 2 validation and import remediation

- Level 2 Stage 1 files were added to the required prebuild validation set.
- Level 2 Stage 1 question-bank syntax checking was added to the validator.
- Existing project `@/` aliases were added to validation import resolution.
- The faulty blanket deep-relative-import validation rule was removed because it produced false failures for valid repository paths.
- Existing question-bank, duplicate-ID, malformed-question and answer-quality checks were retained.
- Project alias import fixes were applied to the Level 2 dashboards and module pages: `8b5994aea50365269eb328d2521f3caebb3a5d34`, `716c9bb88700828c4bc732c4ac807a1094790d45`, `99616929ed124141d9355f6cae08d01178c945d8`, and `e8e4c1d9b9c2747f288487ca828425bb3457308b`.
- Associated prebuild/validator remediation was committed in `f8dae4a1c4c0351669d8d419bf61950929db3a02`.
- Latest Level 1 Stage 4 mapping attempt is `a0c549b91523862291e7ce4b09d23cef4741f0b9`; it did not yet resolve the duplicate fifth Extend references.

### Current resume boundary

Level 2 work is paused while Level 1 undergoes the new systematic runtime/content/difficulty audit. Existing Level 2 changes are preserved and will resume after the Level 1 foundation passes owner verification.

## Level 1 verification boundary

Level 1 implementation history remains intact, but current verification status is deliberately reset to a re-audit boundary. A build being committed, or even reaching a successful deployment, does not by itself establish owner verification.

## Acceptance standard

A stage is not treated as remediated merely because the number of question records is correct. The content must also satisfy:

- activity-specific alignment;
- Core → Core → Stretch → Advanced progression for four-question activities;
- balanced answer positions;
- reduced answer-length and formatting/capitalization clues;
- plausible, reasoning-based distractors;
- stable question IDs and correct activity mappings;
- correct content-mode classification and learner-facing label;
- grade-appropriate placement and recalibrated difficulty;
- preserved navigation, timing, scoring, completion and progress architecture;
- successful prebuild structural validation before deployment;
- successful deployment of the exact commit being verified;
- owner verification before a stage is recorded as verified complete.

## Next development scope

**Pending owner approval:** Level 1 Stage 1 full remediation and calibration as one coherent, fully prevalidated deployment-triggering change set. No implementation should be recorded as completed until the owner verifies it.
