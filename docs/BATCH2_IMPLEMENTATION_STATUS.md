# Batch 2 Implementation Status

**Project:** Apriori Edu Next / Upskilleduonline

**Date:** 2026-09-08

## Scope implemented in this session

Batch 2 builds the Level 1 Reasoning learning experience without changing the Foreign Languages product or introducing backend/database work.

### Implemented

- Expanded Quantitative Level 1 Stage 1 with multiple Explore and Extend activities beyond Number Patterns.
- Expanded Verbal Level 1 Stage 1 with multiple Explore and Extend activities beyond Claims & Evidence.
- Added three questions per Level 1 Stage 1 activity in the dedicated Reasoning Question Bank.
- Preserved stable activity/question IDs and added activity-specific metadata.
- Standardized question timing around the established `timePerQuestion` field, with fallback to the existing configurable default timing function.
- Rebuilt the Reasoning activity player around multiple questions.
- Added Previous/Next navigation.
- Added question number/total display.
- Added answered/remaining tracking.
- Added live score and activity progress.
- Added per-question countdown and automatic expiry handling.
- Preserved answer feedback and explanations.
- Added explicit activity completion after all questions are answered or expired.
- Saved completed activity status and score through the existing Reasoning-only progress namespace.
- Added Level 1 activity/progress reflection to the Quantitative and Verbal Stage 1 dashboards.
- Kept Quantitative and Verbal progress separate.
- Kept Reasoning progress separate from Foreign Languages progress.

## Files changed

- `src/Data/Reasoning/activities.js`
- `src/Data/Reasoning/questionBank.js`
- `src/pages/Reasoning/Activity/[activityId].js`
- `src/pages/Reasoning/Quantitative/Dashboard/Stage1/index.js`
- `src/pages/Reasoning/Verbal/Dashboard/Stage1/index.js`
- `docs/BATCH2_IMPLEMENTATION_STATUS.md`

## Intentionally not implemented yet

- Backend/database persistence for Reasoning.
- Server-side timer configuration or authorized overrides.
- Reasoning gamification such as points, streaks, achievements and leaderboards.
- Full Level 2–9 content.
- Full six-stage content for all levels.
- Optional interactive/API learning resources.

## Important verification note

This is a frontend implementation using the existing Reasoning local progress namespace. It must not be described as permanent backend persistence until the separate backend has been inspected and integrated.

## User verification

After Vercel finishes deploying the latest `main` commit, verify the Reasoning Level 1 Stage 1 flows on the Vercel deployment URL first. Then verify the production/live site once that deployment is confirmed.

Minimum checks:

1. Quantitative → Level 1 → Stage 1 shows the expanded activities.
2. Verbal → Level 1 → Stage 1 shows the expanded activities.
3. An activity contains multiple questions.
4. Previous/Next navigation works.
5. The question number and total are correct.
6. The timer counts down and resets for each question.
7. Allowing a timer to reach zero marks that question as expired and reveals the answer/explanation.
8. Answers show feedback/explanations.
9. The activity cannot be completed until every question is answered or expired.
10. The final score is displayed on completion.
11. Returning to the relevant track dashboard shows the activity as completed with its score.
12. Quantitative completion does not change Verbal progress, and Verbal completion does not change Quantitative progress.
13. Existing Foreign Languages login, dashboard and learning flow remain unaffected.
