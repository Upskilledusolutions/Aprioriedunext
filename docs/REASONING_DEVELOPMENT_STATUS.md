# Reasoning Development Status

Last updated: 2026-09-10

## Current status

Reasoning is in a systematic Level 1 re-audit and remediation cycle. Level 1 · Stage 1 is now implemented end-to-end and is ready for owner verification; it is not marked launch-verified until the owner tests the deployed learner paths.

The existing single-account authentication model remains shared with Foreign Languages, while Reasoning progress remains separately namespaced by track. No architecture redesign was made for the Stage 1 remediation.

**Learner-facing rule:** Reasoning displays Level and Stage labels only (for example, **Level 1 · Stage 1**). School-grade names are not displayed to learners.

## Mandatory quality requirements — 2026-09-10

### 1. Full Level 1 audit

All Level 1 stages must be checked again, including stages that were historically marked implemented. The audit covers dashboard pages, module/lesson pages, activity mappings, question loading, imports/routes, client-side guards, Question Bank structure, stable IDs, grade/difficulty alignment, Explore/Extend progression, answers/explanations, timing, navigation, scoring, completion and progress behavior.

A client-side error on a learner-facing page is a blocking defect for the affected stage.

### 2. Explicit content-mode labels

Every Reasoning assessment question must carry a content-mode classification in the Question Bank and show the learner-facing label before or with the question.

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

Existing questions were retained. The overly advanced Quantitative text-based and Verbal sets are tagged for **Level 3 delivery**, preserving their stable question records. Easier computational questions are retained as below-Level-1 foundation content rather than deleted.

New Level 1 Stage 1 replacement questions are calibrated to the intended Grade 3 demand.

### 4. Difficulty recalibration

Difficulty values must reflect actual reasoning demand at the assigned placement. Recalibration considers prerequisites, reasoning steps, abstraction/generalization, vocabulary load, calculation load, inference/evidence demand, independence and transfer. Difficulty must rise incrementally within Explore and within Extend.

### 5. Deployment-efficiency rule

Related fixes should be grouped into the fewest coherent deployment-triggering commits that can be safely validated. The working sequence is:

```text
inspect → coherent stage-level changes → static/prebuild validation → one deployment → owner verification → next stage
```

Vercel deployments are verification events, not the debugging loop.

## Stage 1 implementation completed

### Level 1 · Stage 1 — Foundation Quantitative & Reasoning / Foundation Verbal & Reasoning

Approved Stage 1 remediation has been implemented in the repository.

Implemented changes include:

1. Corrected Stage 1 Quantitative and Verbal activity-to-question mappings and track prefixes.
2. Added Grade 3-calibrated Level 1 replacement questions while retaining the original Question Bank records.
3. Added explicit content-mode labels and descriptions for Stage 1 assessment questions.
4. Recalibrated computational content as below-Level-1 foundation material and marked the formerly over-advanced text-based Quantitative/Verbal content for Level 3 delivery.
5. Added Grade 3-calibrated replacement content for the previously uncovered Stage 1 Quantitative Relationships, Logic Puzzles and Multi-Step Reasoning activities.
6. Preserved multi-question activity behavior, per-question timing, Previous/Next navigation, answered/remaining state, score/progress display, explanations and completion tracking.
7. Added missing-question/client-side fallback behavior so an invalid mapping produces a controlled learner-facing state rather than an unhandled client exception.

The Stage 1 corrective implementation is represented by:

- `4421b58e3e204ce0a1d485d0775ef57b713f7c78` — initial Level 1 Stage 1 calibration/mapping/runtime remediation.
- The follow-up corrective commit for the remaining uncovered Stage 1 activities and documentation synchronization is the next deployment in this remediation cycle.

### Stage 1 verification state

**Implementation complete; owner verification pending.** No Stage 1 launch-verification claim should be made until the deployed Quantitative and Verbal Stage 1 learner paths have been tested end-to-end.

Verification should confirm that every Stage 1 activity opens, all questions load, the correct content-mode label is shown, questions are grade-appropriate, answers/explanations work, timing is per question, navigation works, completion records correctly, and no client-side errors occur.

## Level 1 remaining stages

### Stage 2
Previously implemented/remediated, but requires a fresh audit under the updated runtime, content-mode and difficulty standard.

### Stage 3
Question bank and activities are present. Fresh audit required for runtime mappings, difficulty calibration and content-mode labels.

### Stage 4
Previous remediation exists, but owner verification is pending. The known duplicate fifth Extend references remain a structural issue until resolved by a validated change.

### Stage 5
Build work exists; owner verification is pending. Fresh audit required.

### Stage 6
Build work exists; owner verification is pending. Fresh audit required.

No Stage 2–6 work is being recorded as verified by historical deployment status alone.

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

## Remaining curriculum work after Stage 1 verification

- Freshly audit and remediate Level 1 Stages 2–6 using the same runtime, content-mode and difficulty standard.
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
