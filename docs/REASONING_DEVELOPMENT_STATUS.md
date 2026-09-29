# Reasoning Development Status

**Last updated:** 2026-09-29

## Current status

Reasoning follows the **single sequential Stage/Level build → deployment → live-verification → acceptance model** defined in:

`docs/REASONING_STAGE_LAUNCH_AND_VERIFICATION_STANDARD.md`

- **Level 1 · Stage 1:** **ACCEPTED** after owner live verification.
- **Level 1 · Stage 2:** **ACCEPTED after owner live quick-check** on the post-remediation production deployment (commit `84ffd50e9201d5e98e5116e2e90de1f695f44425`). The final runtime delivery audit is 46/160 = 28.7% unique-longest correct answers, below the <30% preferred benchmark. **Stage 3 remains blocked until the reusable Stage Analytics selector is implemented and live-verified.**
- **Level 1 · Stage 3:** baseline audit completed and human-editable Stage source prepared; **question-quality verification, learner-facing release, deployment and live verification remain pending**.
- **Stage 4 and later:** blocked until the current Stage is comprehensively verified and accepted.
- Backend Reasoning authorization, durable question-attempt persistence and the current analytics foundation are implemented, deployed and owner-checked.
- Reasoning data and progress remain separate from Foreign Languages.

A successful GitHub commit/build or Vercel Ready state is deployment evidence only, not learner-facing acceptance.

## Current source-of-truth hierarchy

1. `docs/REASONING_STAGE_LAUNCH_AND_VERIFICATION_STANDARD.md` — operational Stage/Level implementation, validation, deployment and acceptance.
2. `docs/REASONING-HUMAN-EDITABLE-CANONICAL-QUESTION-BANK-SPEC.md` — editable/canonical content architecture, synchronization, maintenance and migration.
3. `docs/DATA_AND_PROGRESS.md` — Reasoning data separation and authoritative progress calculation.
4. `docs/REASONING_QUESTION_QUALITY_STANDARD.md` — question quality and calibration.
5. `docs/REASONING_PROFILE_MASTERY_ANALYTICS_AND_LEVEL_ACCESS.md` — profile, analytics and Level access.
6. `docs/PRODUCT_ARCHITECTURE.md` — permanent cross-product and reusable architecture.
7. `docs/DEVELOPMENT_RULES.md` — global development safety rules.

Historical files record past work and do not override the current standards.

## Current verification record

| Stage | Explore / Extend | State |
|---|---|---|
| L1-S1 | 5 / 3 | **ACCEPTED** |
| L1-S2 | 5 / 3 | **Quality benchmark PASS: 28.7% unique-longest correct answers — pending post-remediation production verification** |
| L1-S3 | 5 / 5 | **Checkpoint 0 complete; Checkpoint 1 complete; Checkpoint 2 complete; Checkpoint 3 complete; Checkpoint 4 audited — remediation required** |
| L1-S4 | 5 / 4 | Future scope; preserve inventory |
| L1-S5 | 5 / 5 | Future scope; preserve inventory |
| L1-S6 | 5 / 5 | Future scope; preserve inventory |

Stage 4–6 values are existing Stage-specific inventories, not templates.

## Current progress scope

The learner-facing Stage and Track progress model is Activity-based. The current Level 1 track-dashboard denominator covers **Stages 1–2 = 16 Activities per track**. Quantitative and Verbal progress bars use the same cumulative Activity model and must remain independent.

## Current Stage 3 checkpoint record

**Checkpoint 0 — Baseline audit: COMPLETE.**

- Quantitative: 5 Explore + 5 Extend Activities; all approved Stage 3 Activities are present and mapped.
- Verbal: 5 Explore + 5 Extend Activities; all approved Stage 3 Activities are present and mapped.
- Total learner-facing Stage 3 inventory: 20 Activities (10 per track), preserving the approved above-minimum inventory.
- Existing Stage 3 learner-facing routes use the established Stage 1 shared dashboard/module/player architecture.
- Existing Stage 3 delivery calibration provides 10-question sets for all 20 Activities.
- The Stage 3 human-editable source now serves the 200-question migrated source set; legacy JavaScript banks remain preserved as controlled source pools.
- No Stage 4–6 implementation was changed.

**Checkpoint 1 — Human-editable Stage source: COMPLETE.**

## Stage 2 answer-length clue audit record

### Initial audit
**Audit date:** 2026-09-29  
**Delivery path reviewed:** Stage 2 calibrated learner-facing delivery (`getStage2CalibratedQuestions`) with the existing Stage 2 option-quality rewrites applied.  
**Initial scope:** 16 Activities, 160 delivered questions; 80 Quantitative and 80 Verbal.

| Scope | Questions | Unique-longest correct | Rate | Status |
|---|---:|---:|---:|---|
| Level 1 · Stage 2 — Overall | 160 | 84 | **52.5%** | **FAIL — remediation required** |
| Quantitative | 80 | 29 | **36.3%** | Review/remediation required |
| Verbal | 80 | 55 | **68.8%** | **FAIL — remediation required** |
| Text-Based Reasoning questions | 120 | 78 | **65.0%** | **FAIL — remediation required** |

### Post-remediation audit
**Audit date:** 2026-09-29  
**Source changes:** Stage 2 base question bank, Stage 2 expanded question bank and Stage 2 elevated computation bank were re-authored to remove conspicuous correct-answer length cues while preserving the assessed skill and stable question records.  
**Final runtime delivery scope:** 16 Activities, 160 delivered questions; 80 Quantitative and 80 Verbal.

| Scope | Questions | Unique-longest correct | Rate | Status |
|---|---:|---:|---:|---|
| Level 1 · Stage 2 — Overall | 160 | 46 | **28.7%** | **PASS — preferred benchmark met** |
| Quantitative | 80 | 23 | **28.7%** | **PASS — preferred benchmark met** |
| Verbal | 80 | 23 | **28.7%** | **PASS — preferred benchmark met** |

**Tied-for-longest correct-answer cases:** 41 overall; 37 Quantitative; 4 Verbal. These are reported separately and are not counted as unique-longest clues.

**Benchmark result:** PASS — overall and both tracks are strictly below the <30% preferred benchmark. The source edits are complete; the acceptance gate remains open only for repository prebuild validation, the resulting deployment, and complete post-remediation live verification.

**Structural checks:** 16 Activities; exactly 10 questions per Activity; 160 questions total; no duplicate Question IDs detected in the reviewed source delivery sets.

The project rule is **below 50% required; below 30% preferred**. The post-remediation result is below 30% for the full Stage and for both tracks. The question-quality benchmark is therefore passed. Because the source content changed after the earlier live verification, Stage 2 remains pending post-remediation deployment and complete live production verification before its acceptance state is restored.

## Stage 2 acceptance and Analytics prerequisite

**Stage 2 acceptance decision — 2026-09-29:** Owner approved Level 1 · Stage 2 after a live quick-check of the post-remediation production deployment. This records the Stage 2 curriculum/content release as accepted.

**New prerequisite before Stage 3 completion:** implement a reusable **Stage Analytics selector** on the dedicated Reasoning Analytics page. The selector must show only Reasoning Stages that are both released/accepted and authorized for the current learner, allow selection of a particular Stage, and render the existing Analytics feature set using only that Stage's recorded progress and question-attempt data. For a `type = "all"` account, all released/accepted Stages available to that account must be selectable.

The selector is a reusable analytics capability, not a separate implementation for each Stage. It must be built once before Stage 3 acceptance and then automatically support later accepted Stages through the same stage-aware analytics model.

## Current next step

**Next:** implement the reusable Stage Analytics selector and stage-scoped analytics model; deploy it through the normal validation/deployment/live-verification sequence. Only after this feature is live-verified should Stage 3 Checkpoint 4 work resume toward Stage 3 acceptance.

After the analytics selector is verified, future Stage launches should add the newly accepted Stage to the selector/data scope automatically rather than create a new analytics UI for that Stage.

Checkpoint 3 structural learner-facing reconciliation is complete for Level 1 Stage 3. Both Quantitative and Verbal expose all 10 approved Stage 3 modules and all 10 approved Activities per track (5 Explore + 5 Extend). Each module resolves its Activity ID through the shared Activity registry; the Stage dashboard exposes all Activities; module pages resolve linked Activities and provide Previous/Next navigation across the complete module sequence. Canonical Stage 3 contains all 20 corresponding Activity IDs with exactly 10 questions per Activity. No placeholder or duplicate Activity mapping was found. The next step is Stage 3 Checkpoint 4 question-quality verification.
