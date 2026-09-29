# Reasoning Level 1 Stages 1–3 Verification Record

**Last updated:** 2026-09-29

## Purpose

This file records the current owner-verification boundary for Level 1 Stages 1–3. Historical remediation details remain in `docs/REASONING_REMEDIATION_HISTORY.md`; they are not repeated here.

## Current status

| Stage | Current state | Owner verification |
|---|---|---|
| **L1-S1** | Foundation Quantitative & Reasoning / Foundation Verbal & Reasoning | **ACCEPTED** |
| **L1-S2** | Advanced Problem Solving / Critical Reading & Argument | **Quick-checked only; comprehensive verification pending** |
| **L1-S3** | Mathematical Thinking / Analytical & Scholarly Writing | **UNVERIFIED and blocked until S2 acceptance** |

A GitHub commit, successful build or Vercel Ready deployment is not owner verification.

## Permanent Stage standard

The accepted L1-S1 learner-facing experience is the reusable blueprint for every Stage and Level:

- same Stage dashboard structure;
- same Module/lesson structure;
- same Explore-first → Extend-second presentation;
- same Previous/Next module behaviour;
- same shared Activity Player;
- same scoring, completion, timing and progress behaviour.

The curriculum inventory remains Stage-specific.

Per track and Stage:
- **at least 5 Explore Activities**;
- **at least 3 Extend Activities**;
- **at least 8 Activities/question sets in total**;
- **exactly 10 delivered questions per Activity**.

Do not interpret these thresholds as a requirement to reduce every Stage to 8 activities. Additional approved activities must be preserved.

## Progress verification standard

Stage progress is calculated from completed **Activity IDs**, not completed Module flags.

```text
completed activities in Stage
-----------------------------
all learner-facing activities in Stage
```

Explore and Extend both contribute.

Cumulative track progress uses the same Activity-based model across the currently released scope. Module completion is a separate status and must not determine Stage or cumulative track percentages.

## L1-S1

**Status: ACCEPTED.**

The owner has completed and accepted the required live-production verification. No historical Stage 1 remediation is reopened unless a new live defect is observed.

## L1-S2

**Implementation state:** complete and deployed.

Current approved inventory:
- Quantitative: 5 Explore + 3 Extend across 5 Modules.
- Verbal: 5 Explore + 3 Extend across 5 Modules.
- 8 learner-facing Activities/question sets per track.
- 10 delivered questions per Activity.

The shared Stage 1-style dashboard/module template is used. The activity-based Stage progress and cumulative track-progress corrections are part of the current implementation.

**Owner state:** the owner has performed a **quick live check** and reported that the Stage 2 experience looks fine. This is not comprehensive Stage acceptance.

### Comprehensive verification required

Verify on production, as a learner:

- every Module is reachable;
- all Explore and Extend activities are visible and usable;
- every Activity opens through the shared Activity Player;
- exactly 10 questions load per Activity;
- answer interaction, feedback, explanations and timing work;
- scoring and completion work;
- Activity, Stage and cumulative track progress update correctly;
- module Previous/Next navigation works;
- Quantitative and Verbal remain independent;
- content-mode labels are correct;
- difficulty/progression is appropriate;
- no missing mappings or duplicate placeholders occur;
- no client-side/runtime errors occur.

**Status: UNVERIFIED — comprehensive owner verification required.**

## L1-S3

Existing implementation/remediation remains recorded historically.

**Status: UNVERIFIED.**

Do not inspect, modify or release Stage 3 as part of the current Stage 2 workstream. Start Stage 3 only after Stage 2 has passed complete production verification and has been explicitly accepted.

## Sequential acceptance rule

```text
Current Stage
   ↓
complete implementation
   ↓
prebuild/source validation
   ↓
Production / Ready
   ↓
complete owner verification
   ↓
Stage accepted
   ↓
next Stage
```

No historical deployment or remediation record can substitute for the current Stage's owner verification.
