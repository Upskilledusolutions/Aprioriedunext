# Reasoning Development Status

Last updated: 2026-09-09

## Current status

Reasoning has progressed into a working-learning build for Level 1, with Level 2 Stage 1 development now underway. The existing single-account authentication model is shared with Foreign Languages, while Reasoning progress is separately namespaced by track.

**Learner-facing rule:** Reasoning displays Level and Stage labels only (for example, **Level 1 · Stage 1**). School-grade names are not displayed to learners.

## Completed

- Shared authentication and account model retained.
- Reasoning has independent Quantitative and Verbal tracks.
- Level 1 six-stage curriculum structures are implemented for both tracks.
- Stages 1–6 use the approved six-stage architecture and 50–50 Explore/Extend structure.
- Reusable activity players support multi-question activities, scoring, feedback, explanations, navigation and per-question timing.
- Reasoning progress is stored separately from Foreign Languages progress and persists across refresh/navigation in the current frontend implementation.
- Stage 1 module/activity navigation and Continue Learning flow are implemented.
- Stage 2 and Stage 3 curriculum, module pages and activity layers are implemented.
- Stage 4 Math Olympiad and Essay Competitions pathways are implemented with Explore and Extend content.
- Stage 5 Proof & Advanced Mathematics and Research Skills pathways are implemented with Explore and Extend content.
- Stage 6 Mathematical Research and Research Writing & Publication pathways are implemented with Explore and Extend content.
- Stages 4–6 have dedicated dashboards, module learning pages and interactive activity/question layers.
- Reasoning learning entry and activities are protected by the existing authentication flow; public discovery pages remain accessible.
- Foreign Languages and the existing authentication/account model have not been replaced by a second Reasoning login system.

## Level 1 current build state

### Stage 1 — Foundation Quantitative & Reasoning / Foundation Verbal & Reasoning
Implemented with Explore/Extend learning, activities, scoring and progress. Question content is being audited for answer-length, capitalization, answer-position and other assessment clues under the new Question Quality Standard.

### Stage 2 — Advanced Problem Solving / Critical Reading & Argument
Implemented with interactive questions and module/activity navigation. Question content is being audited under the same Question Quality Standard.

### Stage 3 — Mathematical Thinking / Analytical & Scholarly Writing
**Question bank is present and populated.** The current `src/Data/Reasoning/questionBankStage3.js` contains substantive Quantitative and Verbal questions; the earlier documentation stating that this file was empty is stale and has been corrected. Stage 3 still requires the same systematic assessment-quality audit as the other stages before final launch verification.

### Stage 4 — Math Olympiad / Essay Competitions
Stage 4 question remediation and navigation work have been implemented. However, the current module configuration still requires correction of duplicate Extend activity references, so Stage 4 is not treated as fully verified. The latest Vercel status also reports a build-rate-limit failure, which must not be confused with source-code verification.

### Stage 5 — Proof & Advanced Mathematics / Research Skills
**Build complete; owner verification pending.** Curriculum, dashboards, module pages, activities and question bank are implemented with Explore and Extend structure. Do not record Stage 5 as owner-verified until the project owner has personally verified the deployed behavior.

### Stage 6 — Mathematical Research / Research Writing & Publication
**Build complete; owner verification pending.** Curriculum, dashboards, module pages, activities and question bank are implemented with Explore and Extend structure. Do not record Stage 6 as owner-verified until the project owner has personally verified the deployed behavior.

## Level 2 current build state

Level 2 development has begun with Stage 1 and is being added without altering the Level 1 curriculum, shared account architecture or Foreign Languages product.

Completed Level 2 Stage 1 work includes:

- Level 2 Stage 1 files added to the required prebuild validation set.
- Level 2 Stage 1 question-bank syntax checking added to the validator.
- Existing project `@/` aliases recognized by validation when resolving imports.
- The faulty blanket deep-relative-import validation rule removed because it produced false failures for valid repository paths.
- Existing question-bank, duplicate-ID, malformed-question and answer-quality checks retained.
- Verbal Level 2 Stage 1 module imports corrected to use project aliases in commit `e8e4c1d9b9c2747f288487ca828425bb3457308b`.
- Associated prebuild/validator remediation committed in `f8dae4a1c4c0351669d8d419bf61950929db3a02`.
- Latest Stage 4 mapping commit currently at `a0c549b91523862291e7ce4b09d23cef4741f0b9`.

## Build-integrity safeguards — mandatory

Today’s development exposed repeated build-blocking failures caused by syntax errors, incorrect import/path assumptions and inadequate prebuild validation. These failures consumed a significant amount of the Vercel build-rate budget. This is now a permanent process requirement, not an optional best practice.

Before any future deployment-triggering commit:

1. Run the complete prebuild validator against the affected files.
2. Parse/check syntax before pushing.
3. Resolve every import against the actual repository structure; validate `@/` aliases where used.
4. Validate activity/module IDs against real source data and detect duplicate mappings.
5. Validate question-bank structure, unique IDs and answer structure.
6. Perform structural checks before content-quality checks.
7. Group only coherent, already-validated changes into a deployment-triggering commit.
8. Diagnose the actual Vercel failure before creating another build-triggering commit.
9. Verify the exact GitHub commit that Vercel is deploying.
10. Never treat a successful commit or deployment as owner verification.

The objective is to make each Vercel deployment a deliberate verification step and to stop using deployment attempts as the debugging loop.

## Deployment status / next-session resume point

GitHub `main` currently contains the latest Level 2 validation/import fixes and Stage 4 mapping commit. The Vercel build for the latest commit is currently affected by the reported build-rate-limit failure.

**Tomorrow’s resume point:** continue from **Level 2 Stage 1**, using the validation-first workflow above. Do not create speculative deployment-triggering commits while the build-rate limit is active. First establish that the exact intended `main` commit can be evaluated, then continue the Level 2 Stage 1 implementation from the existing work.

Stage 5 and Stage 6 are **build-complete but pending owner verification**. They must remain in that state until the project owner personally verifies them and explicitly asks for them to be recorded as verified.

## Remaining curriculum work

- Complete final structural correction and verification for Level 1 Stage 4.
- Owner-verify Level 1 Stage 5.
- Owner-verify Level 1 Stage 6.
- Continue Level 2 Stage 1 development and verification.
- Extend the six-stage curriculum to Levels 2–9 with the same architecture and question-quality standard.
- Inspect and integrate the external backend before describing Reasoning progress as permanently persisted.

## Later-phase platform work

The following remain separate from the current frontend curriculum build and should be implemented only after the relevant external backend is inspected:

- Backend/database persistence for Reasoning.
- Durable server-side authorization for Reasoning data and operations.
- Server-side timer configuration or authorized overrides.
- Reasoning points, streaks, achievements and leaderboards.
- Broader account-level learning analytics and reporting.
- Optional interactive/API learning resources.

## Source-of-Truth Principle

Question count, substantive variety, activity-specific alignment, difficulty progression and assessment integrity are separate acceptance criteria. A question bank is not considered complete merely because it contains the required number of records. Build success, deployment success and owner verification are also separate states.
