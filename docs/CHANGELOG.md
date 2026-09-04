# Changelog

This file records important project and architecture changes in simple language.

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
