# Reasoning Development Status

Last updated: 2026-09-10

## Current status

Reasoning is being developed through a focused stage-by-stage audit and remediation process. Level 1 · Stage 1 has received a consolidated question-set, learner-facing Grade-label removal, and a second computation difficulty-elevation remediation. It is **ready for owner verification after the latest deployment**. Level 1 · Stage 2 remains implemented but is not being changed or re-recorded in this Stage 1 remediation.

The existing single-account authentication model remains shared with Foreign Languages, while Reasoning progress remains separately namespaced by track. No architecture redesign is introduced for curriculum remediations.

**Learner-facing rule:** Reasoning displays Level and Stage labels only (for example, **Level 1 · Stage 1**). School-grade names are documentation-only reference data and must not be displayed to learners.

## Mandatory quality requirements

### 1. Full stage audit

Every stage must be checked independently. The audit covers dashboard pages, module/lesson pages, activity mappings, question loading, imports/routes, client-side guards, Question Bank structure, stable IDs, grade/difficulty alignment, Explore/Extend progression, answers/explanations, timing, navigation, scoring, completion and progress behavior.

A client-side error on a learner-facing page is a blocking defect for the affected stage.

### 2. Explicit content-mode labels

Every Reasoning assessment question must carry a content-mode classification and show the learner-facing label before or with the question.

Approved labels:

- **Computation** — calculation or numerical manipulation is the primary task.
- **Text-Based Reasoning** — the learner primarily interprets written information, evidence, claims, conditions or ideas without calculation being the primary task.
- **Computation + Reasoning** — both meaningful interpretation/reasoning and calculation are required.

These labels describe the type of thinking, not the difficulty or Level/Stage.

### 3. Difficulty calibration — two-level elevation rule

Difficulty values must reflect actual reasoning demand. When a computation or Computation + Reasoning baseline has been identified as insufficient, the delivery standard is now **two additional difficulty levels above that previously recalibrated baseline**. This is a curriculum rule, not a request to change metadata alone.

The uplift must be demonstrated through harder task construction: additional meaningful steps, inverse reasoning, multi-condition constraints, abstraction/generalization, transfer, estimation/checking, proportional relationships or equivalent mathematical reasoning appropriate to the placement. Difficulty must still rise incrementally within Explore and within Extend.

This standard applies to **all Reasoning Levels 1–9 and Stages 1–6** for both Computation and Computation + Reasoning questions. The relative uplift is against the calibrated baseline for the specific Level/Stage; it does not make every level identical in absolute difficulty.

### 4. Question-set quality and quantity standard

Every learner-facing activity is required to deliver **exactly 10 distinct, substantive questions**, unless a future documented curriculum exception explicitly requires another count.

Questions must test the same core concept and intended application, meet the actual difficulty requirement, preserve Explore/Extend progression and content mode, use unique stable IDs, avoid duplicate/cosmetic variations, and retain valid answers/explanations and timing metadata.

### 5. Deployment-efficiency rule

Related fixes should be grouped into the fewest coherent deployment-triggering commits that can be safely validated.

```text
inspect → one coherent stage implementation → deployment → owner verification → targeted second fix only if needed
```

Vercel deployments are verification events, not the debugging loop. Before deployment, perform a repository-wide learner-facing label sweep and a stage-specific content/runtime sweep so that route-level omissions are caught before the deployment.

## Level 1 · Stage 1 — computation elevation implemented; owner verification pending

### Scope

This remediation is limited to Stage 1 Quantitative computation and Computation + Reasoning delivery. It does not change Stage 2, Levels 2–9, Foreign Languages, authentication, navigation architecture, progress architecture or the shared activity-player UI.

### Computation elevation

The previous Stage 1 computation bank had already been recalibrated upward once, but the resulting computation and Computation + Reasoning demand was still insufficient. Stage 1 has therefore been elevated **two additional difficulty levels above that prior recalibrated baseline**.

The authoritative delivery resolver now uses a dedicated elevated computation bank for all seven Stage 1 computation/computation-plus-reasoning activities. The bank contains exactly 10 questions per activity, with new stable IDs, answers, explanations, timing and content-mode metadata. The harder questions require more than direct arithmetic: inverse operations, multi-step transformations, pattern rules, proportional relationships, geometric constraints, percentage reasoning and contextual calculation/checking.

Multi-Step Reasoning questions are explicitly **Computation + Reasoning** and require meaningful interpretation before calculation.

### Grade visibility and delivery

The learner-facing Grade references were removed from the Stage 1 module entry/question-start routes before this remediation. Grade mappings remain only in documentation for internal calibration reference.

### Stage 1 verification state

**Implemented; owner verification pending.**

After the latest deployment is Ready, verify Stage 1 Quantitative computation activities end-to-end: exactly 10 questions per activity; no duplicates; difficulty is visibly and substantively elevated by the required two levels; Computation vs Computation + Reasoning labels are correct; answers/explanations and timing are valid; Previous/Next, scoring, completion and progress work; and no learner-facing Grade labels or client-side errors remain.

Do not mark Stage 1 verified until the owner completes this check.

## Reusable standard for all future stages and levels

Before implementing each future stage, inspect its current computation and Computation + Reasoning bank against the calibrated baseline. Apply the same two-additional-level elevation where the current baseline is insufficient. Do not simply increment `difficulty` metadata. The actual question content must carry the increased demand.

This rule must be applied consistently across Levels 1–9 and Stages 1–6. It is part of the source-of-truth acceptance criteria for every future computation remediation.

## Level 1 · Stage 2

Stage 2 remains **owner verification pending** and is not altered by this Stage 1 implementation. When Stage 2 is next remediated, perform a fresh audit first and apply the exact-10-question standard, actual difficulty calibration and two-additional-level computation/Computation + Reasoning rule before deployment.

## Level 1 remaining stages

### Stage 3
Fresh audit required for runtime mappings, content-mode classification, question-set quantity/variety and actual difficulty calibration.

### Stage 4
Previous remediation exists, but owner verification remains pending. Known structural issues must be resolved through a validated focused change. The exact-10-question and difficulty standards apply.

### Stage 5
Build work exists; owner verification remains pending. Fresh audit required, including question quantity and actual difficulty calibration.

### Stage 6
Build work exists; owner verification remains pending. Fresh audit required, including question quantity and actual difficulty calibration.

No Stage 3–6 work is considered verified by historical deployment status alone.

## Level 2 status

Level 2 Stage 1 implementation exists in the repository but remains paused while the Level 1 foundation is stabilized and verified. The exact-10-question standard and actual difficulty calibration will apply when Level 2 work resumes.

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

- Freshly audit and remediate Level 1 Stages 2–6 using the same focused stage-level model.
- Apply the exact-10-question quality standard without lowering conceptual or difficulty quality.
- Apply the two-additional-level computation/Computation + Reasoning elevation wherever the existing recalibrated baseline is insufficient.
- Resolve known Level 1 structural issues through validated changes.
- Resume Level 2 Stage 1 only after Level 1 is stable, then continue Levels 2–9.
- Inspect and integrate the external backend before describing Reasoning progress as permanently persisted.

## Later-phase platform work

These remain separate from the current frontend curriculum build and should be implemented only after the relevant external backend is inspected: backend/database persistence; durable server-side authorization; server-side timer configuration; Reasoning points, streaks, achievements and leaderboards; broader account-level analytics; and optional interactive/API learning resources.

## Source-of-Truth Principle

Question count, substantive variety, activity alignment, content-mode classification, actual difficulty progression, grade alignment, assessment integrity, runtime safety and deployment verification are separate acceptance criteria.

A stage is not considered complete merely because it has the required number of question records or because a previous deployment succeeded.
