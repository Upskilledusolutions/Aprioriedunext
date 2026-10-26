# Changelog

## 2026-10-20 — English Aptitude Phase B architecture proposal prepared

- Added `docs/ENGLISH_APTITUDE_ARCHITECTURE_PROPOSAL.md` with the Reasoning-matched learner experience, proposed English navigation, product/data boundaries, content/runtime approach, response-mode requirements, and verification gates.
- Recommended required listening audio playback for listening activities; learner audio recording and automated oral assessment remain explicit owner decisions, with a conservative initial-release recommendation.
- Updated the roadmap to remove the unnecessary file-by-file planning requirement and record the owner's instruction to implement in meaningful, logically ordered, verified increments. The owner's final instruction overrides prior plans.
- Phase B proposal is awaiting owner approval. No application code, backend configuration or production deployment changed; no live build or production behavior is claimed as verified.


## 2026-10-20 — English Aptitude Phase A codebase audit completed

- Inspected the frontend routes, shared layout/navigation, Reasoning dashboards/player/analytics conventions, global styling, app route protection and the current Reasoning backend attempt contract.
- Recorded findings, confirmed gaps, reuse boundaries and regression risks in `docs/ENGLISH_APTITUDE_PHASE_A_AUDIT.md`.
- Added the owner's explicit requirement that English Aptitude match Reasoning Skills in design, aesthetics and navigation, while keeping English content, response/scoring, progress and analytics separate.
- Confirmed that no English Aptitude learner-facing implementation or English-specific persistence/analytics contract was identified in the inspected source paths/results; the payment dropdown label is not a learner experience.
- Updated the roadmap to mark Phase A source inspection complete and Phase B architecture proposal as the next step.
- No application code, backend configuration or production deployment changed. No live browser or production behaviour is claimed as verified.

## 2026-10-20 — English Aptitude feature delivery register clarified

- Updated `docs/ENGLISH_APTITUDE_IMPLEMENTATION_ROADMAP.md` with a feature delivery register that distinguishes initial-release requirements, later stage-wave delivery, and features requiring an explicit owner decision.
- Confirmed that full cumulative analytics and persistent progress are required from the Level 1 foundation; all approved question types, suitable response/scoring modes, editable/canonical bank validation and quality controls remain required.
- Added a mandatory Phase B decision gate for audio playback, learner audio recording and automated oral assessment. The architecture proposal must assess feasibility, privacy/consent, data handling, accessibility and assessment validity, then specify approved scope, delivery phase/stage and acceptance tests before implementation approval.
- Required Phase B to account explicitly for every discussed feature so that an unspecified milestone cannot silently remove it from the plan.
- Preserved the approved curriculum, architecture direction, Level 1-first and Levels 2–9 stage-wave rollout, and existing quality standards.
- Documentation-only change: no application code, backend configuration or production deployment changed.

## 2026-10-20 — English Aptitude Step 3 roadmap approved

- Added `docs/ENGLISH_APTITUDE_IMPLEMENTATION_ROADMAP.md` with the implementation phases, dependencies, risks, per-stage acceptance checklist and approval gates.
- Recorded the required release order: complete and production-verify Level 1 Stages 1–6 first; then complete Stage 1 across Levels 2–9, followed by Stage 2 across Levels 2–9, continuing in stage waves through Stage 6.
- Preserved all approved curriculum, question-bank quantities, response-format requirements and full analytics quality. The rollout order does not change architecture or reduce stage quality.
- Required persistent English-specific progress and complete analytics from the Level 1 foundation, with records separate from Reasoning and Foreign Languages.
- Updated the documentation index and curriculum/specification references. Implementation remains pending the Phase A codebase audit and owner approval of the verified architecture.
- Documentation-only change: no application code, backend configuration or production deployment changed.


This file records important project and architecture changes in simple language.

## 2026-10-19 — Step 2 English Aptitude specification approved and documented

- Added `docs/ENGLISH_APTITUDE_QUESTION_TYPES_AND_LEVELS.md` with the approved nine-level grade mapping, six-stage sequence, level-specific outcomes, 12 question types and per-stage question-bank minimums.
- Recorded at least 20 comprehension questions per short story and nonfiction passage; 15 Explore stories per level; and three whole novels per level, each studied across two Extend stages.
- Recorded two Explore nonfiction passages and one Extend nonfiction passage per stage. All short-story comprehension remains in Explore; novel excerpts are not comprehension passages.
- Recorded 20 bank items per stage for each of the ten other question types, split 10 Explore / 10 Extend, and mapped the stage totals to the approved 2/3 story allocation: 300 items in two-story stages and 320 in three-story stages.
- Clarified that authored bank size is not limited to a single 10-question attempt; activity delivery must allow the larger bank to be used over time.
- Updated the curriculum document and documentation index to reference the approved Step 2 specification.
- The implementation roadmap remains deferred to Step 3. No application code or production behaviour changed.

## 2026-10-19 — Provisional English Reading & Aptitude curriculum

- Added `docs/ENGLISH_APTITUDE_CURRICULUM.md` following the owner's provisional approval to continue curriculum work.
- Recorded the reading-led curriculum, six connected English skill strands, five provisional reading-selection bands with at least 15 short-story candidates and three novel candidates per band, and the principle that Explore fiction comprehension uses short stories while Extend uses a separate whole-novel pathway.
- Recorded the required future inclusion of paragraph improvement, nonfiction comprehension, antonyms, error identification and sentence correction in both Explore and Extend.
- Explicitly deferred detailed question types, final product levels/stages, final reading-list validation and the implementation roadmap to subsequent owner-approval steps.
- Added public-domain source-discovery links and a requirement to verify the exact text, edition, translation and adaptation for lawful use in India.
- No application code or production behaviour changed.

## 2026-09-23 — Backend authorization and durable Reasoning attempt persistence

- Confirmed the external `Upskilledusolutions/Backend` repository is the backend companion to the Reasoning frontend.
- Implemented server-recognized authentication/session support using the existing shared Auth identity.
- Implemented server-side Reasoning Level authorization using `reasoningL1`–`reasoningL9`, separate from Foreign Languages `next`.
- Removed duplicate Auth model registration; the existing Auth model remains the shared user-model authority.
- Added durable Reasoning question-attempt persistence in the separate `Reasoning.question_attempts` collection.
- Added `POST /api/reasoning/attempts` and `GET /api/reasoning/attempts`.
- Updated the shared Activity Player to record answered and timed-out questions using stable Reasoning metadata and response timing.
- Backend commit `6c353c4529fe3b5c613deb3396f8a00b8d1ce500` is **LIVE** on Render.
- Frontend commit `e22ccb1bc800f41689fc62a07c52b664783c3cfb` is **READY** on Vercel.
- Added the backend integration contract at `Upskilledusolutions/Backend/docs/REASONING_INTEGRATION.md`.
- **Verification boundary:** implementation/deployment is complete; live owner verification of authorization, durable capture and Reasoning/Foreign Languages separation is still required before Level 1 · Stage 2.

## 2026-09-18

### Stage 1–3 re-audit and approved remediation roadmap

- Re-audited the current learner-facing Reasoning experience for Level 1 Stages 1–3.
- Confirmed that Verbal questions across Stages 1–3 can still expose the correct answer through conspicuous answer length, especially when the correct option is uniquely longest.
- Confirmed that Stage 2 has both Explore and Extend data but its dashboard does not present them in the same separated Explore-first / Extend-second structure used by Stage 1.
- Confirmed that Stage 3 has both Explore and Extend data, but its current learner-facing presentation treats modules as Explore and its individual module pages lack Previous/Next navigation.
- Recorded the already-completed Stage 2 Previous/Next navigation commit: `ff9a16234066517269c642b6f81fa5356e1c418f`.
- Approved the focused implementation order: Verbal answer-quality correction across Stages 1–3 → Stage 2 Explore/Extend presentation → Stage 2 owner verification → Stage 3 Explore/Extend presentation/navigation → Stage 3 owner verification → focused Stages 1–3 quick check.
- No application-code changes were made in this documentation update, and Stages 1–3 remain UNVERIFIED.

## 2026-09-21

### Reasoning question-bank M2/M3 infrastructure — implemented and source-validated

- Implemented deterministic human-editable Stage JSON → canonical synchronization.
- Added source fingerprint/provenance generation and fail-closed mapping/schema validation.
- Added canonical-output validation, drift detection and canonical → editable round-trip testing.
- Added the new synchronization/drift/round-trip scripts to Reasoning prebuild syntax validation and package scripts.
- Source-level tests passed against the current repository's existing Activity mappings and JavaScript question banks.
- No Reasoning question content was migrated; existing JavaScript banks, calibration/delivery and the shared Activity Player remain unchanged as the active runtime.
- M4 per-Stage migration remains pending and is subject to the existing Reasoning live-verification gates.


### Reasoning human-editable / canonical question-bank architecture foundation

- Audited the existing Reasoning question banks, remediation/expansion/calibration layers, Activity mappings, shared player and prebuild validation.
- Defined the permanent canonical question schema and human-editable Stage-document contract.
- Added synchronization/drift/validation/round-trip milestones without switching existing runtime delivery.
- Established explicit migration gates so existing JavaScript banks remain controlled source pools until a Stage is deliberately migrated and verified.
- Updated architecture and operational documentation so question-bank infrastructure is tracked separately from the existing Level 1 Stages 1–3 live-production verification gate.
- No existing Reasoning question content, Activity IDs, player behavior or progress architecture was changed.


### Level 1 Stages 1–3 Verbal answer-quality correction — implemented, production verification pending

- Reauthored conspicuous correct-answer length cues across the actual delivered Verbal question sets in Stages 1–3.
- Restored two incomplete Stage 2 Verbal question records to four-option sets.
- Corrected Stage 1 answer matching after case normalization.
- Added prebuild coverage for actual Level 1 Stage 1–2 Verbal delivery and retained the existing Stage 3 authoritative delivery validation, checking exact question counts, four-option integrity, valid answers/content modes and conspicuous length cues.
- Preserved the existing Reasoning architecture, stable IDs, shared activity player/progress model and Foreign Languages isolation.
- **Implementation status:** complete and source-level prevalidated.
- **Production/owner verification:** pending; Stages 1–3 remain UNVERIFIED.
- **Next step:** deploy and owner-verify the correction, then proceed to the approved Stage 2 Explore/Extend presentation correction.

## 2026-09-08

### Reasoning Stage 1 lesson integration — verified

- Verified the Reasoning learning flow after the duplicate Module 1 route fix.
- Removed the duplicate Quantitative and Verbal Module 1 routes that were serving older question-only pages.
- Kept the reusable `[moduleId].js` lesson routes as the canonical module experience.
- Added explicit `activityIds` to Stage 1 module data.
- Connected Quantitative and Verbal Stage 1 modules to relevant Reasoning practice activities.
- Updated Quantitative and Verbal Stage 1 module cards to use central lesson data and show linked activity completion counts.
- Added Practice activities sections to the module lesson pages.
- Added start/review activity controls and completion/score display where available.
- Preserved the existing shared authentication and Reasoning-only progress model.
- Preserved Foreign Languages unchanged.
- The project owner verified the implemented Stage 1 module lesson and practice-activity flow before this changelog update.

### Stage 1 navigation and Explore/Extend progression — verified

- Added activity → module and activity → Stage 1 return navigation.
- Added Previous/Next module navigation across the five Quantitative and five Verbal Stage 1 modules.
- Made Explore and Extend visibly distinct in the Stage 1 activity areas.
- Explained that Explore establishes the foundation and Extend increases reasoning challenge while staying within the same grade.
- Preserved scores, completion state, timing, authentication and Foreign Languages isolation.
- The project owner verified the navigation and Explore/Extend presentation before this entry.

### Stage 1 question depth and module coverage — implemented, pending verification

- Added a separate reusable extension question set so the original stable Question Bank IDs remain intact.
- Added additional questions for Number Sense, Patterns, Quantitative Relationships, Vocabulary in Context, Basic Argument, Main Idea, Logic, Multi-Step Reasoning, Inference and Comparing Perspectives.
- Added dedicated practice activities for previously under-covered Stage 1 modules.
- Corrected Stage 1 module-to-activity mappings so Vocabulary in Context and Basic Argument have directly relevant activities.
- Increased several existing activities from three to four questions without changing their original questions.
- Updated the activity player to combine the original Question Bank with the new Stage 1 extension questions.
- Updated activity parent-module routing to derive the correct Stage 1 module from the module's `activityIds`, avoiding hardcoded routing mismatches.
- No backend, authentication architecture or Foreign Languages changes were made.

### Next build direction

- Verify the deeper Stage 1 practice coverage and question flow.
- Fix any content or routing issue found during verification.
- Continue deepening Stage 1 only where practice coverage is still thin.
- Then build Stage 2 using the same reusable architecture.

## 2026-09-04

### Documentation and architecture audit

- Created the `docs` folder.
- Added the documentation index.
- Audited the current frontend architecture relevant to the two-product plan.
- Confirmed that the existing application is a Next.js/React application using Redux and browser cookies for authentication state.
- Confirmed that the frontend communicates with a separate backend using `NEXT_PUBLIC_BACKENDURL`.
- Confirmed that the current login flow calls the backend `/api/login` endpoint and then stores user information in Redux and a `user` cookie.
- Confirmed that the current authenticated `/User` page is the existing Foreign Languages learning dashboard.
- Confirmed that the current Profile system contains language-oriented progress, scores, streak calculations and leaderboard functionality.
- Confirmed that completed quiz and unlocked lesson/page data currently use language-oriented identifiers and browser storage.
- Established the target architecture of one account/login with two separate product experiences.
- Established that Foreign Languages and Reasoning & Academic Skills must have separate product-specific progress and gamification.
- Established that the final permanent backend/database schema remains to be verified after the backend is inspected.

### Files added

- `docs/README.md`
- `docs/PROJECT_OVERVIEW.md`
- `docs/PRODUCT_ARCHITECTURE.md`
- `docs/USER_FLOWS.md`
- `docs/DATA_AND_PROGRESS.md`
- `docs/DEVELOPMENT_RULES.md`
- `docs/CHANGELOG.md`

### No application code changed

The architecture audit did not intentionally modify the existing application code. The changes in this phase are documentation only.


## 2026-10-26 — English Aptitude secure-grading prototype (separate backend branch)

- Audited the existing shared authentication middleware and Reasoning attempt API. The Reasoning attempt endpoint accepts client-supplied correctness, so it is not reused as authoritative English Aptitude grading.
- Created Backend branch `english-aptitude-secure-grading` from `main`, adding a feature-flagged, authenticated single-select grading endpoint and server-only answer allowlist for the 16 single-select items in the first Explore story activity.
- Added isolated grading tests and the command `npm run test:english-aptitude-grading` in the Backend branch.
- Updated the English Aptitude roadmap and architecture proposal to record the cross-repository dependency and release limits.
- **No deployment:** Backend `main` and frontend `main` remain unchanged. The route is disabled by default; frontend still bundles draft answers. Persistence, analytics, approved content synchronization, and English access-entitlement policy are not implemented.
