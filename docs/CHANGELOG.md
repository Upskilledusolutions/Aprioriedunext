# Changelog

This file records important project and architecture changes in simple language.

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
- Updated the Reasoning development status and Batch 2 implementation documentation.

### Next build direction

- Improve activity completion/results navigation back to module/stage context.
- Improve module-to-module navigation and Explore/Extend progression visibility.
- Expand Question Bank depth and variety where it adds meaningful learning value.
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
