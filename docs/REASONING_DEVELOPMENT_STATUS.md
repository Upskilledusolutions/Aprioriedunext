# Reasoning Development Status

Last updated: 2026-09-10

## Current status

Reasoning is being developed through a focused stage-by-stage audit and remediation process. Level 1 · Stage 1 has now received a consolidated question-set and calibration remediation and is **ready for owner verification after deployment**. Level 1 · Stage 2 remains implemented but is not being changed or re-recorded in this Stage 1 remediation.

The existing single-account authentication model remains shared with Foreign Languages, while Reasoning progress remains separately namespaced by track. No architecture redesign is being introduced for these curriculum remediations.

**Learner-facing rule:** Reasoning displays Level and Stage labels only (for example, **Level 1 · Stage 1**). School-grade names are not displayed to learners.

## Mandatory quality requirements

### 1. Full stage audit

Every Level 1 stage must be checked independently. The audit covers dashboard pages, module/lesson pages, activity mappings, question loading, imports/routes, client-side guards, Question Bank structure, stable IDs, grade/difficulty alignment, Explore/Extend progression, answers/explanations, timing, navigation, scoring, completion and progress behavior.

A client-side error on a learner-facing page is a blocking defect for the affected stage.

### 2. Explicit content-mode labels

Every Reasoning assessment question must carry a content-mode classification and show the learner-facing label before or with the question.

Approved labels:

- **Computation** — calculation or numerical manipulation is the primary task.
- **Text-Based Reasoning** — the learner primarily interprets written information, evidence, claims, conditions or ideas without calculation being the primary task.
- **Computation + Reasoning** — both meaningful interpretation/reasoning and calculation are required.

These labels describe the type of thinking, not the difficulty or Level/Stage.

### 3. Level 1 calibration correction

The Level 1 audit identified a two-level mismatch:

- Existing computational Quantitative questions were generally around Grade 1 / two levels below the intended Level 1 / Grade 3 demand.
- Existing Quantitative text-based questions were generally around Grade 5 / two levels above the intended Level 1 demand.
- Existing Verbal questions were also generally around Grade 5 / two levels above the intended Level 1 demand.

The over-advanced original records are retained with their stable IDs and are not deleted. They must not be delivered as Level 1 content merely because an activity is labelled Level 1. Level 1 delivery uses questions that are actually calibrated to the Level 1 / Grade 3 target.

### 4. Difficulty recalibration

Difficulty values must reflect actual reasoning demand at the assigned placement. Recalibration considers prerequisites, reasoning steps, abstraction/generalization, vocabulary load, calculation load, inference/evidence demand, independence and transfer. Difficulty must rise incrementally within Explore and within Extend.

### 5. Question-set quality and quantity standard

Every learner-facing activity is required to deliver **exactly 10 distinct, substantive questions**, unless a future documented curriculum exception explicitly requires another count.

Questions must test the same core concept and intended application, remain at the calibrated Level/grade demand, preserve Explore/Extend progression and content mode, use unique stable IDs, avoid duplicate/cosmetic variations, retain valid answers/explanations, and avoid unrelated architecture or product changes.

This rule is now the reusable standard for subsequent stages and future levels.

### 6. Deployment-efficiency rule

Related fixes should be grouped into the fewest coherent deployment-triggering commits that can be safely validated.

```text
inspect → one coherent stage implementation → deployment → owner verification → targeted second fix only if needed
```

Vercel deployments are verification events, not the debugging loop.

## Level 1 · Stage 1 — consolidated remediation implemented; owner verification pending

### Scope

This remediation covers **both Quantitative and Verbal Stage 1**. It is intentionally limited to Stage 1 and does not change Stage 2, Levels 2–9, Foreign Languages, authentication, navigation architecture, progress architecture or the shared activity-player UI.

### Exact 10-question delivery

All Stage 1 learner-facing activities are now backed by an authoritative Stage 1 delivery set containing **exactly 10 questions per activity**.

Quantitative activities: Number Sense; Patterns — Explore; Patterns — Extend; Logic Puzzles; Quantitative Relationships; Shape & Measurement; Multi-Step Reasoning.

Verbal activities: Main Idea; Vocabulary in Context; Evidence & Claims — Explore; Basic Argument; Sequencing; Evidence & Claims — Extend; Inference; Perspectives.

The delivery layer no longer depends on combining partially overlapping calibration, expansion and replacement arrays to determine the learner-facing count. The Stage 1 calibration resolver supplies the exact 10-question set, and the previous replacement layer is prevented from appending additional questions.

### Verbal recalibration

The earlier Verbal Stage 1 questions were identified as approximately two levels above the Level 1 target. They remain preserved in the repository rather than being deleted, but they are not used as the Level 1 delivery set.

Stage 1 now uses newly authored Verbal questions calibrated specifically for **Level 1 / Grade 3**. All are **Text-Based Reasoning**, vocabulary and passage demand are controlled for Grade 3, difficulty increases incrementally, and Explore/Extend remain distinct.

### Quantitative recalibration

Stage 1 Quantitative delivery is normalized to Level 1 / Grade 3 demand. Computation activities remain Computation; logic/relationship activities use Text-Based Reasoning where written conditions are primary; Multi-Step Reasoning remains Computation + Reasoning. Each activity is limited to exactly 10 delivered questions with incremental difficulty.

### Stable IDs and quality

New remediation questions use new stable IDs and include answers, explanations, timing and content-mode metadata. Existing records are preserved. The existing activity player remains the learner-facing delivery path; its navigation, scoring, completion and progress behavior are not being redesigned.

### Stage 1 verification state

**Implemented; owner verification pending.**

After deployment is Ready, verify every Stage 1 activity and confirm: exactly 10 questions; no duplicates; Verbal questions are genuinely Level 1 / Grade 3; Quantitative questions are correctly calibrated; difficulty rises sensibly; the correct content-mode label appears; answers/explanations, per-question timing, Previous/Next, score, completion and progress all work; and there are no client-side errors.

Do **not** mark Stage 1 verified until the owner completes this check.

## Level 1 · Stage 2

Stage 2 had previously been implemented with its own calibration and question-set expansion. It remains **owner verification pending**. No Stage 2 changes are recorded by this Stage 1 remediation.

When Stage 2 is next remediated or verified, the same exact-10-question and actual-difficulty calibration rules apply.

## Level 1 remaining stages

### Stage 3
Fresh audit required for runtime mappings, content-mode classification, question-set quantity/variety and difficulty calibration.

### Stage 4
Previous remediation exists, but owner verification remains pending. Known structural issues must be resolved through a validated change. The exact-10-question standard also applies.

### Stage 5
Build work exists; owner verification remains pending. Fresh audit required, including the exact-10-question standard.

### Stage 6
Build work exists; owner verification remains pending. Fresh audit required, including the exact-10-question standard.

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
- Resolve known Level 1 structural issues through validated changes.
- Resume Level 2 Stage 1 only after Level 1 is stable, then continue Levels 2–9.
- Inspect and integrate the external backend before describing Reasoning progress as permanently persisted.

## Later-phase platform work

These remain separate from the current frontend curriculum build and should be implemented only after the relevant external backend is inspected: backend/database persistence; durable server-side authorization; server-side timer configuration; Reasoning points, streaks, achievements and leaderboards; broader account-level analytics; and optional interactive/API learning resources.

## Source-of-Truth Principle

Question count, substantive variety, activity alignment, content-mode classification, difficulty progression, grade alignment, assessment integrity, runtime safety and deployment verification are separate acceptance criteria.

A stage is not considered complete merely because it has the required number of question records or because a previous deployment succeeded.
