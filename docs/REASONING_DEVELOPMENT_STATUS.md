# Reasoning Development Status

Last updated: 2026-09-08

## Current status

Reasoning is now beyond the initial pilot and is in the early working-learning build stage. The existing single-account authentication model is shared with Foreign Languages, while Reasoning progress is separately namespaced by track.

## Completed and verified

- Shared authentication and account model retained.
- Reasoning has independent Quantitative and Verbal tracks.
- Level 1 / Grade 3 Stage 1 learning flow is working.
- Five Quantitative and five Verbal Stage 1 modules have lesson content, worked examples, practice direction and learning goals.
- Reusable activity player supports multi-question activities, scoring, feedback, explanations, navigation and per-question timing.
- Reasoning progress is stored separately from Foreign Languages progress and persists across refresh/navigation.
- Stage 1 module/activity navigation and Continue Learning flow are working.
- Explore / Extend presentation has been built and verified.
- Stage 1 practice depth has been extended with additional dedicated activities and questions.
- Reasoning learning entry and actual activities are protected by the existing authentication flow; public discovery pages remain accessible.
- Duplicate Stage 1 module routes were removed.
- Stage 2 curriculum foundation has been built for both tracks.
- Stage 2 is Level 1 / Grade 3 and preserves the approved six-stage architecture.
- Stage 2 Quantitative dashboard is accessible from the Quantitative track dashboard.
- Stage 2 Verbal dashboard is accessible from the Verbal track dashboard.
- Stage 2 has five curriculum modules per track with lesson concepts, examples and practice direction.
- Stage 2 Question Bank and activity layer has been added for both tracks.
- Stage 2 activities are connected to the reusable activity player.
- Stage 2 questions include explanations, scoring and per-question timing.

## Stage 2 current build state

Quantitative Stage 2 — Advanced Problem Solving:
1. Advanced Number Reasoning
2. Multi-Step Strategies
3. Patterns & Relationships
4. Choosing a Strategy
5. Communicating Solutions

Verbal Stage 2 — Critical Reading & Argument:
1. Reading Structure
2. Argument Mapping
3. Assumptions & Inference
4. Comparing Arguments
5. Evaluating Evidence

The Stage 2 curriculum and initial interactive activity layer are implemented. Stage 2 still requires deeper module-page presentation, broader practice coverage, richer progress presentation, and final end-to-end verification before it should be considered complete.

## Next development direction

Focus on completing Stage 2 as a substantial learner-ready pathway before moving to Stages 3–6. The next build should use the reusable Stage 1 architecture rather than creating parallel systems, and should preserve the separation between Quantitative and Verbal progress.

Backend persistence, durable server-side authorization, gamification and broader account-level learning analytics remain later-phase work after the external backend is inspected.
