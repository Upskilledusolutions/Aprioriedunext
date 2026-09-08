# Reasoning Development Status

**Project:** Apriori Edu Next / Upskilleduonline  
**Last updated:** 2026-09-08

## Current status

**Reasoning & Academic Skills is now in an early working-learning stage.** The shared account/authentication flow, Reasoning dashboard, independent Quantitative and Verbal tracks, Level 1 Stage 1 module lessons, reusable activity player, Question Bank, per-question timing, frontend progress, lesson-to-activity connections, and Stage 1 navigation are working.

The broader nine-level curriculum, all six stages, backend persistence, and gamification remain incomplete.

## Working now

- One account/login shared across both products.
- Foreign Languages remains separate and protected.
- Quantitative and Verbal remain independently usable.
- Level 1 Stage 1 has five Quantitative and five Verbal modules.
- Each module has **Learn**, **Worked example**, **Try it yourself**, and **Learning goal** sections.
- Modules can launch relevant shared practice activities through `activityIds`.
- Quantitative and Verbal Stage 1 module cards use the central lesson data and show linked activity completion counts.
- Reasoning activities support multiple questions, scoring, feedback, explanations, navigation and per-question timing.
- Reasoning progress is stored separately by track in the frontend.
- Module/activity completion is reflected in the Stage 1 experience.
- Actual Reasoning learning entry and activities are protected by the existing authentication system.
- Duplicate Module 1 routes that were causing the old question-only screen have been removed.
- The project owner has verified the current Stage 1 Quantitative and Verbal learning flow, including module lessons, practice connections, activity navigation and module navigation.

## Current status by area

| Area | Status |
|---|---|
| Reasoning dashboard | Built |
| Quantitative Level 1 Stage 1 pilot | Built |
| Verbal Level 1 Stage 1 pilot | Built |
| Module lessons | Built for Stage 1 |
| Lesson → activity connection | Built for Stage 1 |
| Stage 1 module activity completion indicators | Built and verified |
| Activity → module/stage navigation | Built and verified |
| Module-to-module navigation | Built and verified |
| Explore/Extend presentation | Built and verified |
| Stage 1 practice depth extension | Implemented, pending verification |
| Reasoning activity player | Built for pilot |
| Reasoning Question Bank | Built for frontend pilot + Stage 1 extension set |
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

## This session: verified prior work and implemented next build

The project owner verified the previous Explore/Extend presentation before this update. The next development set has now been implemented:

1. Added a reusable Stage 1 extension question set without changing the original stable Question Bank IDs.
2. Added additional practice for Number Sense.
3. Added additional practice for Quantitative Relationships.
4. Added additional practice for Vocabulary in Context.
5. Added additional practice for Basic Argument.
6. Added additional questions to Patterns, Main Idea, Logic, Multi-Step Reasoning, Inference and Comparing Perspectives.
7. Increased selected existing activities from three to four questions.
8. Added dedicated activity entries for previously under-covered Stage 1 modules.
9. Corrected Stage 1 module-to-activity mappings so practice matches the lesson focus more directly.
10. Updated the activity player to load both the original Question Bank questions and the new Stage 1 extension questions.
11. Changed activity parent-module routing to derive the correct Stage 1 module from `activityIds` instead of relying on a hardcoded activity-name map.
12. Preserved authentication, progress storage, timing, scoring and Foreign Languages isolation.

This latest build is **implemented but pending owner verification**.

## Next build set

### Immediate verification

- Verify the new Stage 1 activities open and contain the expected additional questions.
- Verify Number Sense and Quantitative Relationships now have direct practice.
- Verify Vocabulary in Context and Basic Argument now have directly relevant practice.
- Verify the activity player still scores, times, explains and completes activities correctly.
- Verify activity → module return navigation is still correct after the routing change.

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
- `src/Data/Reasoning/questionBankStage1Extensions.js`
- `src/Data/Reasoning/stage1Modules.js`
- `src/pages/Reasoning/Quantitative/Dashboard/Stage1/index.js`
- `src/pages/Reasoning/Quantitative/Dashboard/Stage1/[moduleId].js`
- `src/pages/Reasoning/Verbal/Dashboard/Stage1/index.js`
- `src/pages/Reasoning/Verbal/Dashboard/Stage1/[moduleId].js`
- `src/pages/Reasoning/Activity/[activityId].js`
- `src/utils/reasoningProgress.js`

## End-of-session rule

Update this document after each meaningful development session with the date, completed work, remaining work, decisions, changed files/routes, next tasks, and any backend dependency or technical risk. Do not mark visual prototypes as complete.
