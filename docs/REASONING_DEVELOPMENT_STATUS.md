# Reasoning Development Status

Last updated: 2026-09-10

## Current status

Reasoning is in a **Level 1 systematic re-audit and remediation cycle**. Previous implementation/remediation records remain historical, but no Level 1 stage is treated as launch-verified until the current content, runtime, mapping, difficulty and learner-facing behavior pass the updated acceptance standard.

The existing single-account authentication model remains shared with Foreign Languages, while Reasoning progress is separately namespaced by track.

**Learner-facing rule:** Reasoning displays Level and Stage labels only (for example, **Level 1 · Stage 1**). School-grade names are not displayed to learners.

## Newly mandatory requirements — 2026-09-10

### 1. Full Level 1 stage audit before proceeding

All Level 1 stages must be checked again, including Stage 1. Earlier implementation status must not be treated as proof that the pages are runtime-safe. The audit must cover:

- dashboard pages;
- module/lesson pages;
- activity pages and activity-to-question mappings;
- question loading and fallback behavior;
- imports and route references;
- client-side rendering/runtime guards;
- Question Bank structure and stable IDs;
- difficulty and grade alignment;
- Explore/Extend distribution;
- answer structure and explanations;
- timing, navigation, scoring, completion and progress behavior.

A client-side error on any learner-facing page is a blocking defect for that affected stage.

### 2. Explicit question-mode labels

Every Reasoning assessment question must carry a content-mode classification in the Question Bank and display an appropriate learner-facing label before or with the question.

Approved labels are:

- **Computation** — the learner must calculate, manipulate quantities or carry out a mathematical procedure to reach the answer.
- **Text-Based Reasoning** — the learner primarily reads/interprets textual information, evidence, claims, conditions or ideas and reasons from it without calculation being the primary task.
- **Computation + Reasoning** — both calculation and substantive reasoning are required and neither is merely incidental.

The label is a learning-orientation indicator, not a difficulty label. It must never replace the existing Level/Stage labels.

### 3. Level 1 content calibration correction

The current Level 1 content audit has identified a two-level calibration mismatch:

- Existing **computational Quantitative questions** are generally operating around a **Grade 1 / two-level-below** demand rather than the intended Level 1 / Grade 3 demand.
- Existing **Quantitative text-based questions** are generally around a **Grade 5 / two-level-above** demand.
- Existing **Verbal questions** are also generally around a **Grade 5 / two-level-above** demand.

These findings must be recorded and corrected without deleting the existing questions.

For the current overly-advanced text-based sets, the **same questions must be placed two levels higher** through Question Bank/activity metadata and mappings. Their stable question records must not be discarded merely because their original Level 1 placement was wrong.

The easier computational questions must also be retained. They are treated as below-level/foundational material during recalibration rather than as the defining difficulty standard for Level 1. Future Level 1 computation content must be calibrated to the intended Level 1 demand.

No architectural redesign is permitted for this correction. The existing Question Bank, activity player, dashboard, progress and curriculum architecture remain in place.

### 4. Difficulty recalibration

Difficulty values must be recalibrated after the grade-level placement audit. Difficulty must describe the actual reasoning demand of the question at its new placement, not simply preserve the old label.

The recalibration must consider:

- numerical/reading prerequisites;
- number of reasoning steps;
- abstraction and generalization;
- vocabulary and language load separately from reasoning demand;
- amount of calculation required;
- degree of inference/evidence evaluation;
- independence and transfer expected from the learner.

Difficulty must still progress incrementally within Explore and within Extend.

### 5. Deployment-efficiency rule

The project must not use Vercel deployments as the debugging loop.

After the updated scope is approved, implementation should proceed in the **fewest coherent deployment-triggering commits that can be safely validated**. Related fixes should be grouped into one commit where practical. No speculative deployment should be created merely to discover deterministic source errors.

The intended workflow is:

```text
inspect → make coherent stage-level changes → static/prebuild validation → one deployment → owner verification → next stage
```

A deployment is only a verification event after the exact evaluated GitHub commit is confirmed.

## Completed / historical implementation foundations

- Shared authentication and account model retained.
- Reasoning has independent Quantitative and Verbal tracks.
- Level 1 six-stage curriculum structures exist for both tracks.
- Stages 1–6 use the approved six-stage architecture and 50–50 Explore/Extend structure.
- Reusable activity players support multi-question activities, scoring, feedback, explanations, navigation and per-question timing.
- Reasoning progress is stored separately from Foreign Languages progress in the current frontend implementation.
- Stage 1 module/activity navigation and Continue Learning flow were implemented.
- Stages 2–6 curriculum, module pages and activity layers were implemented.
- Foreign Languages and the existing authentication/account model have not been replaced by a second Reasoning login system.

These are implementation facts, not current launch-verification claims.

## Level 1 current verification state

### Stage 1 — Foundation Quantitative & Reasoning / Foundation Verbal & Reasoning
**Requires a fresh full remediation pass.** Current source inspection found concrete activity/question mapping defects in the shared Level 1 activity registry, including Verbal Stage 1 activities referencing question IDs with the wrong track prefix. These can produce missing-question/client-side failures. Stage 1 must therefore be the first implementation batch.

### Stage 2 — Advanced Problem Solving / Critical Reading & Argument
Previously remediated/implemented, but **re-audit required** under the new runtime and difficulty-calibration standard. No owner verification is inferred from historical commits.

### Stage 3 — Mathematical Thinking / Analytical & Scholarly Writing
Question bank is present and populated in the current source. **Re-audit required** for runtime mappings, difficulty calibration and question-mode labels before verification.

### Stage 4 — Math Olympiad / Essay Competitions
Previous remediation exists, but **not verified**. The known duplicate fifth Extend references remain a structural issue unless resolved by a later validated change.

### Stage 5 — Proof & Advanced Mathematics / Research Skills
Build work exists; **owner verification remains pending**. Re-audit required for runtime behavior, difficulty calibration and question-mode labeling.

### Stage 6 — Mathematical Research / Research Writing & Publication
Build work exists; **owner verification remains pending**. Re-audit required for runtime behavior, difficulty calibration and question-mode labeling.

## Level 2 current status

Level 2 Stage 1 implementation exists in the repository, but Level 2 work is **paused while Level 1 is re-audited and recalibrated**. The existing Level 2 implementation and validation changes must not be discarded; they remain historical/current source work to be resumed after the Level 1 foundation is stable.

## First implementation batch after approval

**Level 1 · Stage 1 — Quantitative + Verbal, end to end.**

The first deployment-triggering change should be one coherent, fully prevalidated commit containing:

1. Stage 1 learner-page/client-side runtime and mapping fixes;
2. Stage 1 Question Bank correction without deleting questions;
3. Stage 1 content-mode metadata and learner-facing labels;
4. Stage 1 difficulty/grade recalibration, including moving the current two-level-too-advanced text-based sets to Level 3 metadata/mappings while retaining their question records;
5. Stage 1 activity/module references corrected so every question ID resolves to the intended activity and track;
6. complete static/prebuild validation covering syntax, imports, mappings, duplicate IDs, question structure and Stage 1 page integrity.

This batch is **not yet approved for implementation**. No GitHub implementation change is authorized by this documentation update alone.

## Remaining curriculum work after the reset

- Complete and owner-verify Level 1 Stage 1.
- Re-audit/remediate Level 1 Stages 2–6 using the same runtime, content-mode and difficulty standard.
- Resolve the known Level 1 Stage 4 duplicate Extend references.
- Resume Level 2 Stage 1 only after the Level 1 foundation is stable, then continue Levels 2–9.
- Inspect and integrate the external backend before describing Reasoning progress as permanently persisted.

## Later-phase platform work

The following remain separate from the current frontend curriculum build and should be implemented only after the relevant external backend is inspected:

- Backend/database persistence for Reasoning.
- Durable server-side authorization for Reasoning data and operations.
- Server-side timer configuration or authorized overrides.
- Reasoning points, streaks, achievements and leaderboards.
- Broader account-level learning analytics and reporting.
- Optional interactive/API learning resources.

## Source-of-Truth Principle

Question count, substantive variety, activity-specific alignment, content-mode classification, difficulty progression, grade alignment, assessment integrity, runtime safety and deployment verification are separate acceptance criteria. A question bank or stage is not considered complete merely because it contains the required number of records or because a historical deployment succeeded.
