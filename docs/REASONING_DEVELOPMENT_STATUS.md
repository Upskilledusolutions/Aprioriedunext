# Reasoning Development Status

Last updated: 2026-09-08

## Current status

Reasoning has progressed from the initial pilot into a working-learning build for Level 1 / Grade 3. The existing single-account authentication model is shared with Foreign Languages, while Reasoning progress is separately namespaced by track.

## Completed

- Shared authentication and account model retained.
- Reasoning has independent Quantitative and Verbal tracks.
- Level 1 / Grade 3 Stage 1 learning flow is implemented.
- Stage 1 has five Quantitative and five Verbal modules with lesson content, worked examples, practice direction and learning goals.
- Reusable activity player supports multi-question activities, scoring, feedback, explanations, navigation and per-question timing.
- Reasoning progress is stored separately from Foreign Languages progress and persists across refresh/navigation in the current frontend implementation.
- Stage 1 module/activity navigation and Continue Learning flow are implemented.
- Explore / Extend presentation is implemented for the completed Stage 1 content.
- Stage 1 practice depth was extended with dedicated activities and additional questions.
- Reasoning learning entry and activities are protected by the existing authentication flow; public discovery pages remain accessible.
- Duplicate Stage 1 module routes were removed.
- Stage 2 curriculum foundation is implemented for both tracks.
- Stage 2 is Level 1 / Grade 3 and preserves the approved six-stage architecture.
- Stage 2 Quantitative and Verbal dashboards are implemented and connected from their track dashboards.
- Stage 2 has five curriculum modules per track with lesson concepts, examples and practice direction.
- Stage 2 activity/question layer is implemented for both tracks.
- Stage 2 activities are connected to the reusable activity player with explanations, scoring and per-question timing.
- Stage 2 has dedicated module pages and module/activity navigation.
- Stage 2 practice depth has been expanded to four questions per activity.
- Stage 3 curriculum foundation is implemented for both tracks.
- Stage 3 Explore half is implemented for both tracks.
- Stage 3 Extend half is now implemented for both tracks.
- Stage 3 activities are connected to the reusable activity player and Stage 3 module navigation.

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

Stage 2 is implemented as a working-learning pathway. Final live end-to-end verification remains a project-owner verification step.

## Stage 3 current build state

Quantitative Stage 3 — Mathematical Thinking:
- Explore: Representing Mathematical Ideas; Generalizing Patterns; Logical Mathematical Reasoning; Connecting Representations; Explaining Mathematical Thinking.
- Extend: Non-Routine Representations; Justifying Generalizations; Cases & Counterexamples; Strategic Problem Solving; Mathematical Justification.

Verbal Stage 3 — Analytical & Scholarly Writing:
- Explore: Planning Analytical Writing; Building Analytical Paragraphs; Using Evidence Effectively; Synthesis & Comparison; Revising for Clarity.
- Extend: Advanced Writing Structure; Evaluating Evidence & Sources; Counterarguments & Rebuttal; Synthesis Across Sources; Scholarly Voice & Revision.

Stage 3 therefore now has the full 50–50 Explore/Extend curriculum structure for Level 1 / Grade 3, with interactive activities and question sets connected to the existing learning architecture.

## Remaining stages

Stages 4–6 remain to be built for Level 1 / Grade 3. After the Level 1 six-stage pathway is established, the same reusable architecture can be extended to Levels 2–9 with grade-appropriate curriculum and difficulty.

## Later-phase platform work

The following remain separate from the current frontend curriculum build and should be implemented only after the relevant external backend is inspected:

- Backend/database persistence for Reasoning.
- Durable server-side authorization for Reasoning data and operations.
- Server-side timer configuration or authorized overrides.
- Reasoning points, streaks, achievements and leaderboards.
- Broader account-level learning analytics and reporting.
- Optional interactive/API learning resources.

The current Reasoning progress implementation is frontend/browser-storage based and must not be described as permanent backend persistence until the backend is inspected and integrated.
