# Reasoning Development Status

**Project:** Apriori Edu Next / Upskilleduonline  
**Last updated:** 2026-09-08

## Current status

**Reasoning & Academic Skills is now in an early working-learning stage.** The shared account/authentication flow, Reasoning dashboard, independent Quantitative and Verbal tracks, Level 1 Stage 1 module lessons, reusable activity player, Question Bank, per-question timing, frontend progress, and lesson-to-activity connections are working.

The broader nine-level curriculum, all six stages, backend persistence, and gamification remain incomplete.

## Working now

- One account/login shared across both products.
- Foreign Languages remains separate and protected.
- Quantitative and Verbal remain independently usable.
- Level 1 Stage 1 has five Quantitative and five Verbal modules.
- Each module has **Learn**, **Worked example**, **Try it yourself**, and **Learning goal** sections.
- Modules can launch relevant shared practice activities through `activityIds`.
- Reasoning activities support multiple questions, scoring, feedback, explanations, navigation and per-question timing.
- Reasoning progress is stored separately by track in the frontend.
- Module/activity completion is reflected in the Stage 1 experience.
- Actual Reasoning learning entry and activities are protected by the existing authentication system.
- Duplicate Module 1 routes that were causing the old question-only screen have been removed.
- The project owner has verified the current live learning flow is working correctly.

## Current status by area

| Area | Status |
|---|---|
| Reasoning dashboard | Built |
| Quantitative Level 1 Stage 1 pilot | Built |
| Verbal Level 1 Stage 1 pilot | Built |
| Module lessons | Built for Stage 1 |
| Lesson → activity connection | Built for Stage 1 |
| Reasoning activity player | Built for pilot |
| Reasoning Question Bank | Built for frontend pilot |
| Per-question timing | Built for frontend pilot |
| Reasoning frontend progress | Built for pilot |
| Backend persistence | Not complete |
| Levels 2–9 content | Not complete |
| Stages 2–6 content | Not complete |
| Points/streaks/achievements | Not complete |
| Reasoning leaderboard | Not complete |
| Interactive/API learning resources | Not complete |
| Academic profile | Future |

## Decisions to preserve

- Do not create a second login system.
- Do not replace `/User` casually.
- Keep Foreign Languages data and functionality isolated.
- Keep Quantitative and Verbal progress separate.
- Keep Reasoning progress separate from Foreign Languages.
- Use stable activity/question IDs and metadata.
- Keep timing configurable rather than hard-coded.
- Reuse the lesson → activity → question → result pattern instead of creating one-off pages.
- Do not claim permanent backend persistence until the separate backend is inspected.
- Prefer small, isolated additions over rewrites.

## This session: completed

The latest build set strengthened the Level 1 Stage 1 learning connection:

1. Added explicit `activityIds` to Stage 1 module data.
2. Connected Quantitative modules to relevant Explore/Extend practice activities.
3. Connected Verbal modules to relevant Explore/Extend practice activities.
4. Added a **Practice activities** section inside the Quantitative and Verbal module lesson pages.
5. Added activity start/review controls and displayed completion/score when available.
6. Preserved the shared Reasoning activity player rather than creating duplicate activity pages.
7. Preserved Reasoning-only progress and existing authentication.
8. Kept Foreign Languages untouched.
9. Updated the Batch 2 implementation record with the verified lesson integration.

## Next build set

### Level 1 Stage 1 depth and navigation

- Expand Question Bank coverage so each Stage 1 learning area has enough practice for meaningful repetition.
- Increase question variety while preserving stable IDs and timing metadata.
- Improve activity completion/results navigation so learners return naturally to the relevant module/stage.
- Improve module-to-module navigation while preserving the existing hierarchy.
- Add clearer Explore vs Extend progression indicators.

### After Stage 1 is sufficiently deep

- Build Stage 2 for both tracks using the same reusable module/activity architecture.
- Maintain the approved six-stage curriculum names.
- Keep Explore and Extend balanced and progressively more challenging.
- Do not duplicate route/page architecture for every level.

### Backend phase

Before permanent Reasoning persistence or gamification, inspect the separate backend for authentication, progress/score APIs, authorization, database structure, product/track/level namespacing, Question Bank persistence and timer configuration.

## Important constraints

1. Backend source is outside this repository.
2. Reasoning frontend progress currently uses browser storage and is not permanent backend persistence.
3. Existing Foreign Languages progress must not be reset or migrated casually.
4. Shared authentication is high-risk and should not be changed unnecessarily.
5. New stages/levels should reuse the current curriculum/activity architecture.

## Important files

- `docs/PRODUCT_ARCHITECTURE.md`
- `docs/REASONING_DEVELOPMENT_STATUS.md`
- `docs/DEVELOPMENT_RULES.md`
- `docs/CHANGELOG.md`
- `src/Data/Reasoning/activities.js`
- `src/Data/Reasoning/questionBank.js`
- `src/Data/Reasoning/stage1Modules.js`
- `src/pages/Reasoning/Quantitative/Dashboard/Stage1/[moduleId].js`
- `src/pages/Reasoning/Verbal/Dashboard/Stage1/[moduleId].js`
- `src/pages/Reasoning/Activity/[activityId].js`
- `src/utils/reasoningProgress.js`

## End-of-session rule

Update this document after each meaningful development session with the date, completed work, remaining work, decisions, changed files/routes, next tasks, and any backend dependency or technical risk. Do not mark visual prototypes as complete.
