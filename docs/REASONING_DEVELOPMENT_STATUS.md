# Reasoning Development Status

**Last updated:** 2026-09-29

## Current status

Reasoning is governed by a **single sequential Stage/Level build-and-verification model**.

- **Level 1 · Stage 1:** ACCEPTED after owner live verification.
- **Level 1 · Stage 2:** implemented, Production/Ready, and owner quick-checked; **comprehensive live verification pending**.
- **Stage 3 and later:** do not begin until Stage 2 is comprehensively verified and accepted.
- Backend Reasoning authorization, durable question-attempt persistence and the current analytics foundation are implemented, deployed and owner-checked.
- Reasoning progress remains logically separate from Foreign Languages.

A GitHub commit, successful build or Vercel Ready state proves implementation/deployment success only; it does not prove learner-facing acceptance.

## Current source-of-truth hierarchy

1. `docs/REASONING_STAGE_LAUNCH_AND_VERIFICATION_STANDARD.md` — Stage/Level build, validation, deployment and acceptance.
2. `docs/REASONING-HUMAN-EDITABLE-CANONICAL-QUESTION-BANK-SPEC.md` — content-record and migration architecture.
3. `docs/DATA_AND_PROGRESS.md` — learner-record separation and progress calculation.
4. `docs/REASONING_QUESTION_QUALITY_STANDARD.md` — assessment quality and calibration.
5. `docs/REASONING_PROFILE_MASTERY_ANALYTICS_AND_LEVEL_ACCESS.md` — analytics, profile and Level access.

Historical files record what happened; they do not override these current standards.

## Universal Stage/Level template

Every Stage at every Level and in both tracks uses the accepted **Level 1 · Stage 1 learner-facing experience** as the UI, navigation, functionality and feature blueprint.

```text
Level + Stage configuration
        ↓
Stage-specific Module inventory
        ↓
Stage-specific Activity IDs
        ↓
Human-editable Stage source
        ↓
Canonical / validated records
        ↓
Calibration / delivery
        ↓
10-question Activity set
        ↓
Shared Activity Player
```

The UI is data-driven. Stage-specific code supplies curriculum/configuration; shared Stage and Module components provide the common learner-facing structure. Do not copy and independently maintain near-identical Stage UI pages.

Per track and Stage:
- at least **5 Explore Activities**;
- at least **3 Extend Activities**;
- at least **8 Activities/question sets** in total;
- exactly **10 delivered questions per Activity**.

Counts above these minimums are allowed and must preserve the approved Stage-specific curriculum. Never standardize every Stage to exactly 5 Explore + 3 Extend.

## Progress rule

Learner-facing Stage progress is **Activity-based**:

```text
completed Activities in the Stage
--------------------------------
all learner-facing Activities in the Stage
```

Explore and Extend both count.

Track progress is cumulative across the **currently released Stage/Level scope** and also uses Activity IDs. The denominator grows only when another Stage/Level is released through the sequential acceptance process.

Module completion is separate. It must never be used as a proxy for Stage or cumulative track progress.

Current Level 1 track-dashboard scope is Stages 1–2: **16 Activities per track**.

## Standard build sequence

For every future Stage or Level:

1. Read the current source-of-truth sections relevant to the target.
2. Baseline-audit the exact target Stage/Level and actual runtime paths.
3. Reconcile the approved Module → Activity inventory; preserve approved content above the minimums.
4. Build/validate content through the applicable human-editable → canonical → calibration/delivery path, or preserve the controlled legacy source pool if not yet migrated.
5. Wire the target to the shared Stage 1-style dashboard/module template and shared Activity Player.
6. Run complete deterministic source/prebuild validation before deployment.
7. Group related approved fixes into the fewest coherent deployment-triggering commits practical; normally one Stage-level deployment.
8. Confirm the exact Vercel Production commit is Ready.
9. Perform complete live verification of the entire Stage.
10. Accept the Stage before beginning the next Stage.

For a new Level, repeat the same sequence from Stage 1. Level access authorization is separate from completion and does not reset cumulative records.

## Permanent build-failure prevention rules

- Never use Vercel as the debugging loop.
- Scope validation to the active Stage/Level and its explicit shared dependencies; unrelated future Stages must not become blockers.
- Evaluate independent JavaScript source modules in isolated scopes with explicit dependency injection. Do not concatenate unrelated modules into one executable scope when helper names can collide.
- Do not pass JSX React files to raw Node `--check`; validate JSX through the repository's Next.js compilation path.
- Resolve imports from the actual source-file location.
- Validate Activity/Module/question mappings, structural counts, question IDs, exact-10 delivery, answers/options, content mode, timing and difficulty before deployment.
- Do not modify Stage 3+ while Stage 2 remains unaccepted.
- Do not modify Foreign Languages, authentication architecture or the shared Activity Player during an ordinary Stage rollout unless separately approved.

## Current Level 1 status

| Stage | Inventory per track | Explore | Extend | State |
|---|---:|---:|---:|---|
| L1-S1 | 8 Activities | 5 | 3 | **ACCEPTED** |
| L1-S2 | 8 Activities | 5 | 3 | **Quick-checked; comprehensive verification pending** |
| L1-S3 | Stage-specific | 5 | 5 | **UNVERIFIED; blocked until S2 acceptance** |
| L1-S4 | Stage-specific | 5 | 4 | **Future scope; preserve inventory** |
| L1-S5 | Stage-specific | 5 | 5 | **Future scope; preserve inventory** |
| L1-S6 | Stage-specific | 5 | 5 | **Future scope; preserve inventory** |

Stage 4–6 counts are descriptive existing inventories, not templates for other Stages.

## Current next step

**Level 1 · Stage 2 comprehensive live verification.**

Do not begin Stage 3 or any new Level curriculum work until Stage 2 is explicitly accepted.
