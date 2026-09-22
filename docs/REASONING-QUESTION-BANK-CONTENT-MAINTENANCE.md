# Reasoning Question-Bank Content Maintenance Workflow

**Status:** Operational source-of-truth workflow  
**Applies to:** all migrated Reasoning question content

## 1. Editing surface

For migrated content, edit the human-readable Stage JSON under `content/Reasoning/question-banks/stages/`.

Do not manually edit generated canonical records.

For non-migrated content, preserve the existing JavaScript source pool until that Stage is migrated.

## 2. Stage document scope

Each editable Stage document represents one Level + Stage and may contain both Quantitative and Verbal questions. Every question retains an explicit `track`, `half`, `moduleId` and `activityId` mapping.

A Module may contain one or multiple Activities/question sets. Each distinct question set is represented by a stable Activity ID and normally delivers exactly 10 questions. Do not add a separate `setId` layer unless explicitly approved.

## 3. Question lifecycle

Use:

```
draft → review → approved → published → retired
```

`calibrationStatus` is separate and must not be used as an authoring lifecycle state.

## 4. Editing one question

When changing a question:

1. Find the stable Question ID.
2. Keep the ID if the question remains the same underlying item.
3. Increment `version` for a substantive content revision.
4. Change the ID only when creating a materially different question.
5. Recheck answer/options, explanation, difficulty, timing and content mode.
6. Recheck Level/Stage/Track/Half/Module/Activity mapping.
7. Synchronize.
8. Run validation and drift detection.
9. Review the canonical diff.
10. Only then allow calibration/delivery to use the updated canonical record.

## 5. Adding a question or question set

Assign a globally unique stable Question ID and complete all required placement/content metadata.

For a new question inside an existing Activity, keep the Activity ID.

For a new question set within an existing Module, create or use a distinct approved Activity ID and map all questions to that Activity.

Do not satisfy the 10-question requirement by duplicating or cosmetically varying an existing question.

## 6. Retiring a question

Set its lifecycle status to `retired` and preserve the ID/history. Never recycle a retired ID.

If the Activity still needs exactly 10 delivered questions, add/review a replacement through the normal synchronization and validation process.

## 7. Synchronization and drift

The synchronization step is deterministic. It validates the editable Stage document and produces canonical records plus source provenance/fingerprint.

If the editable document changes after canonical generation, drift detection must fail until synchronization is rerun.

A stale canonical output must never silently pass into release.

## 8. Calibration and delivery

Calibration consumes validated canonical records. It is responsible for selecting/preparing the delivered set, not authoring content.

Before delivery, validate the exact 10-question Activity contract:

- 10 distinct questions;
- correct Activity and curriculum mapping;
- unique stable IDs;
- valid options/answers;
- content-mode metadata;
- appropriate difficulty progression;
- timing/explanation metadata;
- answer-position and answer-length quality.

## 9. Figures

Figures are part of the question record. Keep stable figure IDs, required alt text and asset references with the question. Synchronization and round-trip tests must preserve them.

## 10. Release workflow

```
Baseline / audit Stage
  ↓
Edit human-readable Stage source
  ↓
Synchronize
  ↓
Validate
  ↓
Drift check
  ↓
Review canonical diff
  ↓
Reconcile every Module + Explore/Extend
  ↓
Calibrate / build exact-10 sets
  ↓
Reasoning prebuild validation
  ↓
Deploy exact commit
  ↓
Production verification of every Module and Activity
  ↓
Stage acceptance
```

Related changes should be grouped into one coherent, prevalidated deployment-triggering commit. The complete operational standard is documented in `docs/REASONING_STAGE_LAUNCH_AND_VERIFICATION_STANDARD.md`.

## 11. Migration rule

Migrate one Stage at a time, starting with Level 1 · Stage 1 under the approved Stage-launch standard. Preserve existing Question IDs and legacy source-bank provenance. Do not delete legacy JavaScript content merely because canonical records have been generated.

Do not proceed to the next Stage until the current Stage has passed complete production verification and Stage acceptance.

