# Changelog

This file records important project and architecture changes in simple language.

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
