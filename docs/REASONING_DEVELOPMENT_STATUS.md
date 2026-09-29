# Reasoning Development Status

**Last updated:** 2026-09-29

## Current status

Reasoning follows the **single sequential Stage/Level build → deployment → live-verification → acceptance model** defined in:

`docs/REASONING_STAGE_LAUNCH_AND_VERIFICATION_STANDARD.md`

- **Level 1 · Stage 1:** **ACCEPTED** after owner live verification.
- **Level 1 · Stage 2:** implemented and Production/Ready; owner quick-checked; **comprehensive live verification pending**.
- **Stage 3 and later:** blocked until the current Stage is comprehensively verified and accepted.
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
| L1-S2 | 5 / 3 | **Quick-checked; comprehensive verification pending** |
| L1-S3 | 5 / 5 | **UNVERIFIED; blocked until S2 acceptance** |
| L1-S4 | 5 / 4 | Future scope; preserve inventory |
| L1-S5 | 5 / 5 | Future scope; preserve inventory |
| L1-S6 | 5 / 5 | Future scope; preserve inventory |

Stage 4–6 values are existing Stage-specific inventories, not templates.

## Current progress scope

The learner-facing Stage and Track progress model is Activity-based. The current Level 1 track-dashboard denominator covers **Stages 1–2 = 16 Activities per track**. Quantitative and Verbal progress bars use the same cumulative Activity model and must remain independent.

## Current next step

**Complete the comprehensive live verification of Level 1 · Stage 2.**

Do not begin Stage 3 or new Level curriculum work until Stage 2 is explicitly accepted.
