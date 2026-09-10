# Reasoning Development Status

Last updated: 2026-09-10

## Current status

Reasoning is being developed through a focused stage-by-stage audit and remediation process. Level 1 · Stage 1 has been owner-verified after deployment. Level 1 · Stage 2 is now implemented and awaiting owner verification.

The existing single-account authentication model remains shared with Foreign Languages, while Reasoning progress remains separately namespaced by track. No architecture redesign is being introduced for these stage remediations.

**Learner-facing rule:** Reasoning displays Level and Stage labels only (for example, **Level 1 · Stage 2**). School-grade names are not displayed to learners.

## Mandatory quality requirements — 2026-09-10

### 1. Full Level 1 audit

Every Level 1 stage must be checked independently. The audit covers dashboard pages, module/lesson pages, activity mappings, question loading, imports/routes, client-side guards, Question Bank structure, stable IDs, grade/difficulty alignment, Explore/Extend progression, answers/explanations, timing, navigation, scoring, completion and progress behavior.

A client-side error on a learner-facing page is a blocking defect for the affected stage.

### 2. Explicit content-mode labels

Every Reasoning assessment question must carry a content-mode classification and show the learner-facing label before or with the question.

Approved labels:

- **Computation** — calculation or numerical manipulation is the primary task.
- **Text-Based Reasoning** — the learner primarily interprets written information, evidence, claims, conditions or ideas without calculation being the primary task.
- **Computation + Reasoning** — both meaningful interpretation/reasoning and calculation are required.

These labels describe the type of thinking, not the difficulty or Level/Stage.

### 3. Level 1 content calibration correction

The Level 1 audit identified a two-level mismatch:

- Existing computational Quantitative questions were generally around **Grade 1 / two levels below** the intended Level 1 / Grade 3 demand.
- Existing Quantitative text-based questions were generally around **Grade 5 / two levels above** the intended Level 1 demand.
- Existing Verbal questions were also generally around **Grade 5 / two levels above** the intended Level 1 demand.

Existing questions are retained. Over-advanced Quantitative text-based and Verbal sets are tagged for **Level 3 delivery**, preserving their stable question records. Easier computational questions remain as below-Level-1 foundation material rather than being deleted.

### 4. Difficulty recalibration

Difficulty values must reflect actual reasoning demand at the assigned placement. Recalibration considers prerequisites, reasoning steps, abstraction/generalization, vocabulary load, calculation load, inference/evidence demand, independence and transfer. Difficulty must rise incrementally within Explore and within Extend.

### 5. Deployment-efficiency rule

Related fixes should be grouped into the fewest coherent deployment-triggering commits that can be safely validated. The intended operating model for each stage is:

```text
inspect → one coherent stage implementation → deployment → owner verification → targeted second fix only if needed → verify
```

A third deployment is reserved only for a genuinely necessary post-deployment correction. Vercel deployments are verification events, not the debugging loop.

## Stage 1 — owner verified

### Level 1 · Stage 1 — Foundation Quantitative & Reasoning / Foundation Verbal & Reasoning

Stage 1 remediation was implemented and subsequently owner-verified after deployment.

The remediation corrected activity/question mappings, added Grade-3-calibrated replacement questions without deleting original records, added content-mode presentation, recalibrated difficulty/placement, supplied replacements for uncovered activities, and preserved the multi-question activity experience with per-question timing, navigation, scoring, explanations and completion.

Stage 1 is the reference implementation model for subsequent stage remediation.

## Stage 2 — implementation complete, owner verification pending

### Level 1 · Stage 2 — Advanced Problem Solving / Critical Reading & Argument

Stage 2 has been audited and implemented using the same focused model.

Implemented changes:

1. Preserved the existing Stage 2 curriculum architecture, modules and stable question IDs.
2. Added a Stage 2 calibration layer that assigns explicit content-mode labels and Grade-3 Level 1 calibration metadata at delivery time.
3. Classified Quantitative Stage 2 activities as Computation or Computation + Reasoning according to their primary learner demand.
4. Classified Verbal Stage 2 activities as Text-Based Reasoning.
5. Normalized Stage 2 difficulty values for the activity player while retaining the intended Easy → Medium → Hard progression.
6. Updated the shared activity player to use the Stage 2 calibration layer, so the learner sees the required content-mode label and description.
7. Retained all four available Stage 2 questions per activity from the Question Bank; the player resolves the complete activity question set rather than limiting delivery to the shorter activity registry subset.
8. Did not redesign the Question Bank, dashboard, progress architecture, authentication model or Foreign Languages product.

Stage 2 implementation commits/deployments:

- `ce0df99aaac07e6932929ded5129dbc4a999874d` — added the Stage 2 calibration layer.
- `01360e35f13d6b80c7a33663117c01e9e99ee424` — wired Stage 2 calibration into the shared activity player.

A documentation synchronization follows the implementation so the source-of-truth record matches the current state.

### Stage 2 verification state

**Implementation complete; owner verification pending.** Verify the deployed Level 1 Stage 2 Quantitative and Verbal paths end-to-end before Stage 2 is marked verified.

Verification should confirm every Stage 2 activity opens, all four available questions load, the correct content-mode label appears, difficulty progression is sensible, answers/explanations work, timing is per question, Previous/Next works, completion and score work, progress records correctly, and no client-side errors occur.

## Level 1 remaining stages

### Stage 3
Question bank and activities are present. Fresh audit required for runtime mappings, content-mode classification and difficulty calibration.

### Stage 4
Previous remediation exists, but owner verification is pending. The known duplicate fifth Extend references remain a structural issue until resolved by a validated change.

### Stage 5
Build work exists; owner verification is pending. Fresh audit required.

### Stage 6
Build work exists; owner verification is pending. Fresh audit required.

No Stage 3–6 work is being recorded as verified by historical deployment status alone.

## Level 2 status

Level 2 Stage 1 implementation exists in the repository but remains paused while the Level 1 foundation is stabilized and verified.

## Completed / historical implementation foundations

- Shared authentication and account model retained.
- Reasoning has independent Quantitative and Verbal tracks.
- Level 1 six-stage curriculum structures exist for both tracks.
- Stages use the approved six-stage architecture and 50–50 Explore/Extend structure.
- Reusable activity players support multi-question activities, scoring, feedback, explanations, navigation and per-question timing.
- Reasoning progress is separately namespaced from Foreign Languages progress in the current frontend implementation.
- Stage 1 module/activity navigation and Continue Learning flow were implemented.
- Stages 2–6 curriculum, module pages and activity layers were implemented.
- The existing one-account model across Foreign Languages and Reasoning was retained.

These are implementation facts, not substitutes for current owner verification.

## Remaining curriculum work after Level 1 verification

- Freshly audit and remediate Level 1 Stages 3–6 using the same focused stage-level model.
- Resolve the known Level 1 Stage 4 duplicate Extend references.
- Resume Level 2 Stage 1 only after Level 1 is stable, then continue Levels 2–9.
- Inspect and integrate the external backend before describing Reasoning progress as permanently persisted.

## Later-phase platform work

These remain separate from the current frontend curriculum build and should be implemented only after the relevant external backend is inspected:

- Backend/database persistence for Reasoning.
- Durable server-side authorization for Reasoning data and operations.
- Server-side timer configuration or authorized overrides.
- Reasoning points, streaks, achievements and leaderboards.
- Broader account-level learning analytics and reporting.
- Optional interactive/API learning resources.

## Source-of-Truth Principle

Question count, substantive variety, activity alignment, content-mode classification, difficulty progression, grade alignment, assessment integrity, runtime safety and deployment verification are separate acceptance criteria. A stage is not considered complete merely because it has the required number of question records or because a previous deployment succeeded.
