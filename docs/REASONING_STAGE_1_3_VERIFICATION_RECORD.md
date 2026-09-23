# Reasoning Level 1 Stages 1–3 Verification Record

**Last updated:** 2026-09-23

## Purpose

This record is the current verification boundary for Level 1 Stages 1–3. It supplements the chronological remediation history and makes the current owner-verification requirement explicit.

## Critical status

**Level 1 · Stage 1 is ACCEPTED. Level 1 · Stages 2–3 remain UNVERIFIED.**

Implementation and remediation work has been completed to the current build boundary. Stage 1 is accepted; Stages 2–3 may not be recorded as fully complete until the project owner verifies them on the live production website.

A successful GitHub commit, successful build, or Vercel deployment marked Ready proves build/deployment success only. It does not prove that every learner-facing activity is present, usable, correctly mapped, correctly calibrated, or free of runtime defects.

## 2026-09-18 re-audit findings and approved correction sequence

- The Verbal correct answer can still be conspicuously longest in delivered questions across Stages 1–3. This must be corrected at content level and protected by a pre-deployment quality check.
- Stage 2 already contains Explore and Extend curriculum data, but its dashboard presentation does not separate the two halves as Stage 1 does. Previous/Next module navigation is already implemented in `ff9a16234066517269c642b6f81fa5356e1c418f`.
- Stage 3 already contains Explore and Extend curriculum data, but the current learner-facing presentation hard-codes Explore treatment and its module pages lack Previous/Next navigation.

**Current transition boundary:** Stage 1 is accepted. The project must complete the backend authorization and durable-attempt verification gates before beginning Stage 2 curriculum implementation.

This record does not mark Stages 2–3 as verified; Stage 1 acceptance is already recorded.

## 2026-09-21 corrective-step status

The approved first step — **Verbal answer-quality correction across Stages 1–3** — has been implemented and source-level prevalidated.

- Conspicuous correct-answer length cues were reauthored in the actual delivered Verbal sets.
- Stage 2 incomplete two-option records were restored to four options.
- Stage 1 answer matching was corrected after case normalization.
- The prebuild validator now checks actual Stage 1–2 Verbal delivery and the existing Stage 3 authoritative delivery for exact-10 delivery, four-option integrity, valid answers/content-mode metadata and conspicuous length cues.

**Current status:** the corrective implementation is complete. This corrective step does not change the already accepted Stage 1 status or the UNVERIFIED status of Stages 2–3.

### Historical next action

The 2026-09-21 deployment verification remains historical. The current next step is production verification of the already deployed backend authorization/persistence foundations, followed by the approved Reasoning Analytics expansion and only then the next curriculum-stage work.

## Stage 1 — Foundation

### Implementation/remediation recorded

- Historical Stage 1 navigation and activity-flow fixes remain part of the implementation history.
- Stage 1 question-bank restoration and question-quality remediation were completed.
- The 2026-09-10 re-audit identified concrete activity/question mapping defects, including incorrect Verbal references using Quantitative question IDs.
- Stage 1 computational and Computation + Reasoning delivery was subsequently elevated two additional difficulty levels above the prior recalibrated baseline.
- A dedicated elevated delivery bank was used for the affected computation activities, with exactly 10 questions per activity and substantive reasoning demand.
- Learner-facing Grade labels were removed; grade remains internal calibration/reference data.
- **Historical re-audit finding:** delivered Verbal questions previously exposed conspicuous answer-length cues. The corrective work was completed and included in the later owner-verified Stage 1 acceptance. This does not reopen Stage 1 absent a new live defect.

### Verification required

Verify on production:

- all intended Stage 1 Quantitative and Verbal activities are reachable;
- exactly 10 substantive questions are delivered per activity;
- no question is missing, duplicated, or incorrectly mapped;
- Computation, Text-Based Reasoning and Computation + Reasoning labels are correct;
- difficulty is substantively calibrated, not merely changed in metadata;
- Explore/Extend progression is appropriate;
- answers and explanations are valid;
- per-question timing works;
- Previous/Next, answered/unanswered state, scoring, completion and progress work;
- no learner-facing Grade labels remain;
- no client-side/runtime errors occur.

**Status: UNVERIFIED.**

## Stage 2 — Advanced Problem Solving / Critical Reading & Argument

### Implementation/remediation recorded

- Stage 2 question-quality remediation was completed in commit `229468c0257b6181dd949de8a62fcb017c2c118c`.
- The remediation addressed answer-position balance, answer-length/structural clues, distractor quality, activity alignment and difficulty progression.
- Current project standards subsequently require a fresh runtime/content-mode/grade-difficulty audit rather than relying on the historical remediation record.

### Current corrective item

The Stage 2 dashboard must be changed to present the existing Explore and Extend content as separate **Explore first → Extend** sections, matching the Stage 1 learner-facing pattern. Existing module/activity data, IDs, player behavior, progress and the already-added Previous/Next navigation remain unchanged.

### Verification required

Verify on production the complete Stage 2 Quantitative and Verbal experience, including mappings, exactly-10-question activity delivery, substantive question quality, content-mode labels, calibration, Explore/Extend progression and presentation, answers/explanations, timing, navigation, scoring, completion, progress and runtime errors.

**Status: UNVERIFIED.**

## Stage 3 — Mathematical Thinking / Analytical & Scholarly Writing

### Implementation/remediation recorded

Original substantive question-bank remediation: `1a90523ddcdcbc502729ce1b1d6132911f608d40`.

The later Stage 3 build/remediation sequence included:

- `22ed7d81e64d42276b2e3a4a94c05c672f4c2799` — standardized reasoning delivery.
- `b841cded7fc30c729b76c79895baa11f6a51853b` — calibration safeguards.
- `fb538c313b706892a156e99c53b25fe6750d1b97` — Verbal option-length calibration.
- `cffb60c13284edf27b90f4e818b34836bc3bb0d5` — remaining Verbal length-cue reauthoring.
- `1d5ff2cf3a2a96c4cc817617f9a686093ae4c0d0` — complete activity mappings restored.
- `2edc84bdc07a5c620fff496281554e63808a8d07` — missing calibrated activities restored.
- `1729c985b2b57a04bd059a7fcc22384e8d3058de` — calibrated activity delivery completed.
- `93219b2435045993ecc42bbd84d563932ce695ee` — complete calibration routing.
- `c8db6774473f1c6d4740b7943f4061e723d60151` — complete activity delivery validation.
- `64ba10cc4dcd6b2395a7c75f4b48907cab8f8896` — calibration layers validated separately.
- `44a18dde83465a94b28b9b29f5629fec33f49314` — authoritative delivery-layer validation.
- `d746c3e63482923ff3e12ab7f5f8a2d3c838c89a` — fallback calibration enabled during build validation.
- `d56b8847206b268d1cf0169e76f81c80014ce955` — fallback answer-length cues reauthored.
- `7f9271d4e5c74f50a488e1955b0f35d3e8bb13e5` — scholarly revision cue rebalanced.

The Stage 3 failure sequence had previously caused five Verbal Explore activities to return no calibrated questions, producing only 50 delivered questions instead of the expected 100 in the affected validation path. The remediation restored complete calibrated delivery and allowed the deployment to pass build validation.

### Deployment boundary

The latest Stage 3 deployment is Ready.

### Current corrective item

Stage 3 must expose the existing Explore and Extend curriculum correctly instead of treating the modules as Explore-only, and the individual module pages must gain Previous/Next module navigation. Question content is unchanged by this presentation fix unless the separate Verbal answer-quality audit identifies a specific content defect.

### Verification required

Verify on production, especially the previously missing **Mathematical Justification** and the other Stage 3 Extend activities. Confirm complete activity visibility and usability, exactly 10 substantive questions per activity, correct mappings, Explore/Extend presentation, content-mode labels, actual difficulty/progression, answers/explanations, timing, Previous/Next navigation, scoring, completion/progress and absence of client-side errors.

**Status: UNVERIFIED.**

## Superseded grouped-stage resume rule

The previous grouped Stages 1–3 verification gate is superseded by the 2026-09-22 **Reasoning Stage Launch and Verification Standard**.

The current restart point is **Level 1 · Stage 1**. Stage 1 must be migrated, structurally reconciled, fully exposed to learners, deployed and completely verified on production before Stage 2 begins. The same sequential acceptance rule applies to later Stages.

Do not redo historical remediation merely because verification is pending. If live verification exposes a defect, make only the targeted fix required by the observed defect, then redeploy and reverify the affected Stage.

## Deployment-efficiency rule carried forward

For each approved corrective deployment:

1. Inspect the exact affected delivery/UI paths first.
2. Run repository/static validation before the deployment-triggering commit.
3. Group only the coherent approved fix into the deployment.
4. Deploy once.
5. Verify the exact deployed commit on Vercel.
6. Perform the required live owner verification.
7. Proceed to the next approved corrective step only after verification.

This record deliberately does not mark Stages 1–3 as verified.

## 2026-09-23 — Backend authorization and durable-attempt persistence transition

Level 1 · Stage 1 is **ACCEPTED**. The project has completed the implementation/deployment portion of the approved backend transition before Level 1 · Stage 2.

### Manual Level authorization

The external Backend repository now provides:

- signed server sessions using the shared Auth identity;
- learner-scoped Reasoning access reads;
- administrator-only Reasoning access updates;
- selective `reasoningL1`–`reasoningL9` access;
- separation from Foreign Languages `next`.

### Durable attempt persistence

The backend provides:

- `POST /api/reasoning/attempts`
- `GET /api/reasoning/attempts`
- separate `Reasoning.question_attempts` storage;
- answered and timed-out question capture;
- server-derived learner ownership;
- Level-access authorization before persistence.

The shared frontend Activity Player sends the supported attempt data through `src/utils/reasoningAttempts.js`.

Implementation/deployment:

- Backend `6c353c4529fe3b5c613deb3396f8a00b8d1ce500` — Render **LIVE**.
- Frontend `e22ccb1bc800f41689fc62a07c52b664783c3cfb` — Vercel **READY**.

### Verification boundary

This record does **not** mark the backend authorization or durable persistence gates as fully verified. The owner must verify production authorization behavior, administrator access management, answered/timed-out capture, learner ownership and Reasoning/Foreign Languages separation.

Level 1 · Stage 2 remains blocked until this verification is complete. No Stage 2 curriculum change is included in this transition record.
