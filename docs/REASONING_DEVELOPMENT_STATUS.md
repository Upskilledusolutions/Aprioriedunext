# Reasoning Development Status

**Last updated:** 2026-09-29

## Current status

Reasoning follows the **single sequential Stage/Level build → deployment → live-verification → acceptance model** defined in:

`docs/REASONING_STAGE_LAUNCH_AND_VERIFICATION_STANDARD.md`

- **Level 1 · Stage 1:** **ACCEPTED** after owner live verification.
- **Level 1 · Stage 2:** **ACCEPTED after owner live quick-check** on the post-remediation production deployment (commit `84ffd50e9201d5e98e5116e2e90de1f695f44425`). The final runtime delivery audit is 46/160 = 28.7% unique-longest correct answers, below the <30% preferred benchmark.
- **Level 1 · Stage 3:** **ACCEPTED after owner live quick-check** on the released production deployment (commit `12c3481fdd23b79fc888ce7841096b94f1982b95`; Vercel deployment `dpl_6C9i9WsoeaKDcDkXFrBVcF4hN7xk` = READY). On 2026-09-29 the owner confirmed Stage 3 learner-facing functionality and Stage 3 Analytics. Stage 3 is released in the shared Stage Analytics selector.

- **Stage 4 and later:** blocked until the current Stage has passed its required validation/deployment gate and owner live verification has been recorded.
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
| L1-S2 | 5 / 3 | **ACCEPTED after owner live quick-check** |
| L1-S3 | 5 / 5 | **ACCEPTED after owner live quick-check** |
| L1-S4 | 5 / 4 | Future scope; preserve inventory |
| L1-S5 | 5 / 5 | Future scope; preserve inventory |
| L1-S6 | 5 / 5 | Future scope; preserve inventory |

Stage 4–6 values are existing Stage-specific inventories, not templates.

## Current progress scope

The learner-facing Stage and Track progress model is Activity-based. The current released Level 1 track-dashboard denominator covers **Stages 1–3 = 26 Activities per track** (8 + 8 + 10). Quantitative and Verbal progress bars use the same cumulative Activity model and must remain independent.

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

**Checkpoint 4 — Question-quality verification: COMPLETE / PASS.**

- Final calibrated learner-facing scope: 20 Activities, 200 questions; 100 Quantitative and 100 Verbal. The final runtime delivery remains 20 Activities × 10 questions.
- Unique-longest correct-answer rate: **46/200 = 23.0% overall**, **26/100 = 26.0% Quantitative**, **20/100 = 20.0% Verbal**.
- Tied-for-longest correct-answer cases: **45 overall; 36 Quantitative; 9 Verbal**; these are reported separately and do not count as unique-longest clues.
- No Stage 3 `lengthCueDetected` flags remain after remediation.
- Content-integrity follow-up: corrected the keyed answer/options for `...generalizing-patterns-09`; the mathematically correct answer is 38, with four distinct options.
- Every Stage 3 Activity delivers exactly 10 questions; no duplicate delivered Question IDs were found.
- The preferred <30% benchmark is passed for the full Stage and both tracks; the hard <50% acceptance ceiling is satisfied.

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

**Benchmark result:** PASS — overall and both tracks are strictly below the <30% preferred benchmark. Stage 2 acceptance after the post-remediation production quick-check is recorded above.

**Structural checks:** 16 Activities; exactly 10 questions per Activity; 160 questions total; no duplicate Question IDs detected in the reviewed source delivery sets.

The project rule is **below 50% required; below 30% preferred**. The post-remediation result is below 30% for the full Stage and for both tracks. The question-quality benchmark is therefore passed. Owner acceptance of the post-remediation production deployment was recorded on 2026-09-29 after a live quick-check.

## Stage 2 acceptance and Stage Analytics verification

**Stage 2 acceptance decision — 2026-09-29:** Owner approved Level 1 · Stage 2 after a live quick-check of the post-remediation production deployment. This records the Stage 2 curriculum/content release as accepted.

**Stage Analytics selector verification — 2026-09-29:** Owner completed live quick-checks confirming the reusable Stage selector and Stage-specific Analytics views for Stages 1–3. Stage 1, Stage 2 and Stage 3 remain separate reporting scopes, and the shared Analytics feature set is retained.

The reusable selector is a completed shared capability. Stage 3 has now been released through the same configuration after owner approval.

## Build hardening and remediation lessons

The Stage 2 and Stage 3 remediation issues are now converted into reusable release gates rather than recurring Stage-specific blockers:

- **Stage 2 answer-length issue:** the initial final-delivery audit exceeded the hard ceiling (52.5%). Future Stage releases must run the answer-length audit on the final calibrated learner-facing delivery after all reauthoring, and any remediation invalidates the previous result until the audit is rerun.
- **Stage 3 source/content-integrity issues:** the editable source schema, answer/options and canonical output were brought back into agreement. Future migrations must validate the editable document envelope before synchronization; keep question corrections source-first; bump the affected question/Stage version; regenerate canonical records; verify the source fingerprint; and rerun final runtime answer/options integrity checks.
- **Runtime correction-layer risk:** calibration/delivery must not silently replace a keyed answer or question options through an undocumented correction map. Content corrections belong in the editable source and canonical regeneration path.
- **Deployment discipline:** related fixes are grouped into one prevalidated Stage-level deployment wherever practical. A failed deployment is diagnosed by category before another deployment-triggering commit is created.

## Level 1 Stages 1–3 focused production checkpoint

**Completed / PASS — 2026-09-29.** Owner confirmed the focused production check had already been completed before the current Stage 4 continuation. The accepted Stages 1–3 were checked as a combined production scope for navigation, module visibility, Activity launch, core scoring/progress and obvious runtime errors. This gate is therefore recorded as passed and does not require repetition.

## Level 1 · Stage 4 checkpoint status

### Checkpoint 0 — Baseline audit: COMPLETE

- Quantitative: 5 Explore + 4 distinct Extend Activities currently exist in the Stage 4 source.
- Verbal: 5 Explore + 4 distinct Extend Activities currently exist in the Stage 4 source.
- The previous duplicate fifth Extend module references were removed; no duplicate placeholder Activity is being treated as a distinct Activity.
- Existing Stage 4 JavaScript question bank contains 72 questions across 18 distinct Activities (4 source questions per Activity) and remains the controlled legacy/source pool until migration is accepted.
- Stage 4 is not yet learner-facing or accepted.

### Checkpoint 1 — Human-editable Stage source: COMPLETE

- Created content/Reasoning/question-banks/stages/L1-S4-reasoning-question-bank.json from the existing Stage 4 source pool.
- The editable Stage source contains 72 questions across all 18 existing Stage 4 Activities, with stable IDs, track, half, module, content-mode, difficulty, timing, status and provenance fields.
- The existing Stage 4 Activity mappings are registered with the shared Activity registry for subsequent canonical validation; this does not by itself expose Stage 4 to learners.

### Checkpoint 2 — Canonical records: COMPLETE

- Synchronized the Level 1 · Stage 4 editable source into `content/Reasoning/question-banks/canonical/L1-S4-reasoning-question-bank.json`.
- Canonical output contains all 72 Stage 4 question records across 18 Activities.
- Stable Question IDs, four-option answer integrity, required canonical metadata, provenance and source fingerprint validation passed.
- Editable → canonical fingerprint matches exactly; no duplicate Question IDs were found.
- Stage 4 remains non-learner-facing and unaccepted. The canonical records do not yet constitute final calibrated 10-question delivery sets.

### Checkpoint 3 — Structural learner-facing reconciliation: COMPLETE

- Stage 4 now resolves to exactly 5 Explore + 4 Extend module objects and 9 Activities per track.
- Every Stage 4 Activity is mapped exactly once to a module; no orphan module or duplicate Activity mapping remains.
- All 72 editable/canonical questions resolve to an existing Stage 4 Activity with matching track, half, module and stable Question ID.
- Quantitative and Verbal each contain 9 distinct Stage 4 Activities: 5 Explore + 4 Extend.
- No learner-facing Stage 4 exposure or acceptance was made by this checkpoint.

### Checkpoint 4 — Canonical delivery/readiness validation: COMPLETE

- Expanded the Stage 4 human-editable source from 72 to **180 questions across 18 Activities** — exactly **10 questions per Activity**.
- Resynchronized the canonical bank to the same **180 questions**, with source fingerprint `8942797750acf776e86d0aaaddd71c26e34319916ff905d697a787fe8e3d7fce`.
- Delivery validation passed: every Stage 4 Activity has exactly 10 canonical questions; no duplicate Question IDs or four-option integrity errors were found.
- The fail-closed delivery boundary at `src/Data/Reasoning/stage4CanonicalDelivery.js` requires the 10-question canonical set and has **no fallback** to `questionBankStage4.js`.
- Stage 4 remains **non-learner-facing and unaccepted**. No learner-facing deployment was made by this checkpoint.

### Checkpoint 4A — Question-quality / final-delivery validation: COMPLETE / PASS

**Audit date:** 2026-09-29

- Final Stage 4 delivery scope: **180 questions across 18 Activities**, exactly **10 questions per Activity**.
- Quantitative: **9 Activities (5 Explore + 4 Extend)**; Verbal: **9 Activities (5 Explore + 4 Extend)**.
- Initial post-expansion answer-length audit failed: **122/140 = 87.1%** unique-longest correct answers among Text-Based Reasoning questions; answer positions were also materially skewed.
- Remediation was applied **human-editable source first**, with targeted option-quality corrections and deterministic answer-position rebalancing; stable Question IDs and assessed skills were preserved.
- Final editable source version: **4**. Canonical source version: **4**.
- Final unique-longest correct-answer rate: **40/140 = 28.6%** for Text-Based Reasoning questions — **PASS; preferred <30% benchmark met** and hard <50% ceiling satisfied.
- Tied-for-longest correct-answer cases: **11**; these are reported separately and are not counted as unique-longest clues.
- Correct-answer positions are exactly balanced: **A 45, B 45, C 45, D 45**.
- Unique-shortest correct-answer cases: **3/140 = 2.1%**; no systematic reverse length clue was identified.
- No lowercase option-start inconsistencies, required-field omissions or four-option structural errors were found.
- Difficulty ordering is monotonic within every Activity, and Extend uses the higher base difficulty range.
- Editable → canonical synchronization is aligned with source fingerprint **`6014d252e616a7e3d02037323d65a61b34b4308f5c3cf78f271e08311c246e66`**.
- The fail-closed canonical delivery boundary remains unchanged and has **no legacy-bank fallback**.
- **Stage 4 remains non-learner-facing and unaccepted.** This source-quality PASS does not constitute production acceptance.

### Vercel build-blocker diagnosis and systematic fix — 2026-09-29

- Twelve consecutive Stage 4-related production deployments were checked. All returned the same Vercel signature: **`BUILD_UTILS_SPAWN_1`**, with **`npm run build` exiting with code 1** during the build step.
- The failures began after Stage 4 was added to the shared Reasoning Activity registry: `activities.js` now imports and spreads `STAGE4_ACTIVITIES`.
- The mandatory `prebuild` validator was still evaluating `activities.js` as a standalone module, stripping its import and leaving `STAGE4_ACTIVITIES` undefined. This created a deterministic validator failure before the Next.js build could complete.
- The systematic fix updates the validator to load the Stage 4 dependency explicitly, uses that dependency-aware Activity registry for the existing Stage 2/3 checks, and adds Stage 4 structural/canonical checks to the same prebuild gate.
- The fix also runs the existing canonical-drift check during prebuild so a changed editable Stage source cannot silently reach deployment with stale canonical output. The shared synchronization loader was then corrected on `main` in commit `53278cdb1ccdb6ead54d9c10a25a27b9e189a323` so that this drift check uses the same dependency-aware `STAGE4_ACTIVITIES` loading model.
- The validator change and its documentation are grouped as **one coherent repair commit**; no speculative content or UI changes are being introduced.
- Stage 4 remains non-learner-facing and unaccepted until a successful production deployment and explicit live verification.

### Current next step

**Next:** Verify the repaired prebuild validator through one Vercel deployment. Only after that build succeeds should the learner-facing Stage 4 deployment/verification gate proceed.

