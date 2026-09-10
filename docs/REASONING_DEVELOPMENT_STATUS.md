# Reasoning Development Status

Last updated: 2026-09-10

## Current status

Reasoning is being developed through a focused stage-by-stage audit and remediation process. Level 1 · Stage 1 had previously been owner-verified after deployment; its new question-set expansion is now implemented and awaits re-verification. Level 1 · Stage 2 is implemented, including the new question-set expansion, and awaits owner verification.

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

### 5. Question-set quality and quantity standard — 2026-09-10

For the active Level 1 stage build, each learner-facing activity is expanded to **10 distinct questions**. The same standard applies to subsequent stages and future levels unless a documented curriculum reason requires a different count.

The expansion is not a quantity-only change. Additional questions must:

- test the same core concept and intended application as the existing activity;
- remain at the same calibrated Level/grade demand and preserve the intended difficulty progression;
- preserve the activity's assigned content mode (Computation, Text-Based Reasoning, or Computation + Reasoning);
- use new stable question IDs;
- avoid duplicate or repeated prompts, answer patterns or merely cosmetic variations;
- retain valid answer choices and explanations; and
- avoid changing the curriculum architecture, navigation, progress model or unrelated features.

The existing question records are retained; expansion adds substantive practice rather than replacing or deleting the original bank.

### 6. Deployment-efficiency rule

Related fixes should be grouped into the fewest coherent deployment-triggering commits that can be safely validated. The intended operating model for each stage is:

```text
inspect → one coherent stage implementation → deployment → owner verification → targeted second fix only if needed → verify
```

A third deployment is reserved only for a genuinely necessary post-deployment correction. Vercel deployments are verification events, not the debugging loop.

## Stage 1 — expansion implemented; re-verification pending

### Level 1 · Stage 1 — Foundation Quantitative & Reasoning / Foundation Verbal & Reasoning

The original Stage 1 remediation was implemented and owner-verified after deployment. The subsequent quality expansion now adds six substantive questions to activities that had four delivered questions, while activities already carrying the earlier corrective four-question replacement set receive only the number needed to reach exactly ten. This prevents accidental over-counting in the repaired Quantitative Relationships, Logic Puzzles and Multi-Step Reasoning activities.

Implemented expansion characteristics:

1. Every Stage 1 learner-facing activity now targets exactly 10 delivered questions.
2. Computation activities retain Computation classification; text-based activities retain Text-Based Reasoning; Multi-Step Reasoning retains Computation + Reasoning.
3. New questions use stable IDs and preserve Level 1 / Grade 3 calibration and the existing Explore/Extend difficulty progression.
4. The original calibrated/replacement records remain intact; the expansion is additive.
5. No architecture, navigation, authentication, progress or Foreign Languages changes were introduced.
6. The existing shared activity player remains the delivery path.

Stage 1 expansion implementation commit:

- `55e25edb7235a97899069d94faa1149a1258ed35` — added the Stage 1 expansion question set.
- `b958ef53eaddc8a4037b626ff89b1211f4d49e37` — wired the expanded set into the existing Stage 1 delivery path.

### Stage 1 verification state

**Expansion implemented; owner re-verification pending.** Verify every Stage 1 activity opens and presents exactly 10 distinct questions, with the correct content-mode label, calibrated difficulty, answers/explanations, timing, Previous/Next behavior, scoring, completion and progress recording. The earlier Stage 1 owner verification remains valid for the pre-expansion implementation but does not substitute for verifying the expanded set.

## Stage 2 — expansion implemented, owner verification pending

### Level 1 · Stage 2 — Advanced Problem Solving / Critical Reading & Argument

Stage 2 has been audited and implemented using the same focused model.

Implemented changes:

1. Preserved the existing Stage 2 curriculum architecture, modules and stable question IDs.
2. Added a Stage 2 calibration layer that assigns explicit content-mode labels and Grade-3 Level 1 calibration metadata at delivery time.
3. Classified Quantitative Stage 2 activities as Computation or Computation + Reasoning according to their primary learner demand.
4. Classified Verbal Stage 2 activities as Text-Based Reasoning.
5. Normalized Stage 2 difficulty values for the activity player while retaining the intended Easy → Medium → Hard progression.
6. Updated the shared activity player to use the Stage 2 calibration layer, so the learner sees the required content-mode label and description.
7. Expanded every Stage 2 activity to exactly 10 delivered questions by adding six distinct questions to the existing four-question sets.
8. Preserved the same conceptual application, Grade 3 / Level 1 calibration and difficulty progression while avoiding duplicate prompts.
9. Did not redesign the Question Bank, dashboard, progress architecture, authentication model or Foreign Languages product.

Stage 2 implementation commits/deployments:

- `ce0df99aaac07e6932929ded5129dbc4a999874d` — added the Stage 2 calibration layer.
- `01360e35f13d6b80c7a33663117c01e9e99ee424` — wired Stage 2 calibration into the shared activity player.
- `549998edc32e22832923b53c6216f600ecf322d8` — added the Stage 2 expansion question set.
- `09069cb58c7431e353955e693a5a5dd058fd52ef` — wired the expanded set into the existing Stage 2 calibration delivery path.

### Stage 2 verification state

**Expansion implemented; owner verification pending.** Verify every Stage 2 activity opens and presents exactly 10 distinct questions, the correct content-mode label appears, difficulty progression is sensible, answers/explanations work, timing is per question, Previous/Next works, completion and score work, progress records correctly, and no client-side errors occur.

## Level 1 remaining stages

### Stage 3
Question bank and activities are present. Fresh audit required for runtime mappings, content-mode classification, question-set quantity/variety and difficulty calibration.

### Stage 4
Previous remediation exists, but owner verification is pending. The known duplicate fifth Extend references remain a structural issue until resolved by a validated change. The 10-question quality standard must also be applied during the fresh audit.

### Stage 5
Build work exists; owner verification is pending. Fresh audit required, including the 10-question quality standard.

### Stage 6
Build work exists; owner verification is pending. Fresh audit required, including the 10-question quality standard.

No Stage 3–6 work is being recorded as verified by historical deployment status alone.

## Level 2 status

Level 2 Stage 1 implementation exists in the repository but remains paused while the Level 1 foundation is stabilized and verified. The 10-question standard will apply when Level 2 work resumes.

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
- Apply the 10-question quality standard without lowering conceptual or difficulty quality.
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
