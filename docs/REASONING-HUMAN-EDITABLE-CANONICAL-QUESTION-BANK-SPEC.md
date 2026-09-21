# Reasoning Human-Editable / Canonical Question Bank Specification

**Status:** Permanent source-of-truth specification  
**Version:** 1.0  
**Applies to:** Reasoning Levels 1–9, Stages 1–6, Quantitative and Verbal

## 1. Purpose

This specification adds a controlled content-authoring layer to the existing Reasoning curriculum without replacing the current Level → Stage → Module → Activity → Player architecture.

The target flow is:

```
Level
  → Stage
    → Module
      → Activity ID
        → Human-Editable Stage Question Bank
          → Synchronization / Validation
            → Canonical Question Records
              → Calibration / Delivery
                → 10-Question Set
                  → Shared Activity Player
```

The human-editable bank is the preferred editing surface. Canonical records are the validated runtime content authority. Calibration/delivery decides which validated questions are actually delivered. Existing JavaScript banks remain controlled source pools during migration and must not be deleted or rewritten merely to introduce this architecture.

## 2. Existing architecture preserved

The following remain unchanged unless a separately approved architectural change is made:

- Reasoning tracks: Quantitative and Verbal.
- Levels 1–9.
- Six stages per track.
- Explore / Extend halves.
- Existing Module and Activity IDs.
- Existing activity-to-module relationships.
- Existing shared activity player.
- Existing progress model.
- Existing authentication/product separation.
- Existing timing, scoring, completion and navigation behavior.

The new question-bank layer sits between Activity ID selection and calibration/delivery.

## 3. Canonical Question Record

Every canonical record represents one independently addressable question.

Required identity and placement fields:

- `id`: immutable stable Question ID.
- `track`: `quantitative` or `verbal`.
- `levelId`: `L1`–`L9`.
- `stageId`: `S1`–`S6`.
- `half`: `explore` or `extend`.
- `moduleId`: existing Reasoning module identifier.
- `activityId`: existing Reasoning Activity ID.
- `questionType`: registered question type, initially `multiple_choice` where applicable.

Content fields:

- `question`
- `options` when required by the question type.
- `answer`
- `explanation`
- `concept`
- `topicId`
- `difficulty`
- `timePerQuestion`

Assessment metadata:

- `contentMode`: `computation`, `textReasoning`, or `computationReasoning`.
- `contentModeLabel`
- `contentModeDescription`
- `tags`: optional controlled skill/concept tags.
- `status`: lifecycle state.
- `version`: content version integer.
- `sourceBank`: originating bank identifier.
- `provenance`: source/provenance object.
- `calibrationStatus`: delivery/calibration state, separate from authoring status.

Optional media:

- `figures`: zero or more figure/visual descriptors. A figure is content metadata, not a separate question identity.
- Figure descriptors may contain stable `figureId`, `type`, `src` or asset reference, `alt`, `caption`, `width`, `height`, and optional structured data required by the renderer.

The canonical schema is implemented in `src/Data/Reasoning/canonicalQuestionSchema.js`.

## 4. Stable Question ID rules

1. Question IDs are immutable once published or used by an Activity.
2. Existing IDs are preserved during migration.
3. A corrected/re-authored question keeps its ID when it is still the same question record; its `version` increases.
4. A materially different question receives a new ID.
5. IDs are globally unique across all Reasoning canonical records, not merely unique within a stage.
6. IDs must encode enough placement context to remain operationally traceable, but validators must use the explicit metadata fields rather than parsing meaning from the string alone.
7. Deleting a question must not silently recycle its ID.
8. Legacy source IDs are retained through `sourceBank` / provenance during migration.

## 5. Human-Editable Stage Bank Format

Preferred authoring format: **one UTF-8 JSON document per Stage**, stored outside the runtime source tree under:

`content/Reasoning/question-banks/stages/`

Example filename:

`L1-S1-reasoning-question-bank.json`

The document contains:

- `schemaVersion`
- `bankId`
- `levelId`
- `stageId`
- `version`
- `tracks[]` — normally `quantitative` and `verbal`
- `questions[]`

There is one editable document per **Level + Stage**, not one per track. This preserves the preferred one-document-per-Stage workflow while allowing the same Stage number to contain both Reasoning tracks. The `track` field remains mandatory on each individual question, and each question must resolve to the correct Activity.

Example:

```json
{
  "schemaVersion": "1.0",
  "bankId": "reasoning-L1-S1",
  "levelId": "L1",
  "stageId": "S1",
  "version": 1,
  "tracks": ["quantitative", "verbal"],
  "questions": []
}
```

Each question is an explicit object using the canonical field names. The format is intentionally plain JSON so it can be edited without JavaScript knowledge, imported/exported deterministically, diffed in Git, and validated without adding a YAML dependency.

A human editor changes question content and approved metadata in this document. Runtime JavaScript files are not the preferred manual editing surface after a stage has migrated.

## 6. Level → Stage → Module → Activity → Question mapping

The mapping is explicit.

A question is valid only when:

- its `levelId` matches the bank and Activity;
- its `stageId` matches the bank and Activity;
- its `track` matches the Activity;
- its `half` matches the Activity;
- its `moduleId` matches the Activity;
- its `activityId` exists in the authoritative Activity mapping;
- the Activity explicitly references or resolves the Question ID;
- the Question ID resolves to exactly one canonical record.

The validator must reject orphaned question IDs, missing question IDs, cross-track references, cross-stage references, duplicate IDs and Activity mappings that resolve to the wrong bank.

The existing `src/Data/Reasoning/activities.js` remains the current Activity mapping authority during migration.

## 7. Synchronization

Synchronization is a deterministic build step:

```
human-editable Stage JSON
        ↓
schema + mapping validation
        ↓
normalized canonical records
        ↓
canonical output
```

Synchronization must:

- validate before writing output;
- preserve stable IDs;
- normalize only deterministic representation details;
- attach source-bank/provenance metadata;
- never silently repair an invalid mapping;
- fail closed when required fields, IDs, answers, options or placement metadata are invalid;
- emit deterministic output so repeated synchronization with unchanged input produces the same canonical representation.

The first implementation provides the synchronization/validation tooling without switching existing runtime delivery. Runtime migration is staged separately.

## 8. Drift detection

Editable and canonical representations must not silently diverge.

For each synchronized Stage:

- calculate a deterministic content fingerprint for the normalized editable source;
- store the source fingerprint with the canonical output;
- record source bank/version metadata;
- compare the current editable fingerprint against canonical provenance before release;
- fail validation when canonical output is stale or was generated from different editable content;
- require an explicit resynchronization to update canonical output.

Manual edits to generated canonical output are prohibited.

## 9. Validation

Validation is layered.

### Structural

- valid JSON/schema;
- required fields;
- registered question type;
- valid option count for multiple choice;
- unique options;
- answer exists in options;
- valid timing;
- valid difficulty representation.

### Curriculum/mapping

- Level / Stage / Track / Half alignment;
- valid Module ID;
- valid Activity ID;
- Question ID uniqueness;
- Activity-to-question resolution;
- no cross-track or cross-stage leakage.

### Quality

- exactly 10 delivered questions per Activity;
- no duplicate delivered IDs;
- substantive concept/activity alignment;
- difficulty progression;
- content-mode correctness;
- answer-position balance;
- answer-length/structural cue checks;
- valid explanations and timing metadata.

### Release

- synchronization completed;
- drift check passes;
- canonical records validate;
- calibration/delivery passes;
- exact 10-question Activity contract passes;
- prebuild checks pass;
- deployed commit is verified separately.

## 10. Versioning, provenance and lifecycle

Canonical records carry:

- `version`: integer content revision.
- `sourceBank`: stable identifier for the editable or legacy source pool.
- `provenance`: source type, source file/bank, migration state and optional author/review metadata.
- `status`: at minimum `draft`, `review`, `approved`, `published`, `retired`.

Authoring status is separate from calibration/delivery status.

A retired question remains historically traceable and its ID is not reused.

## 11. Figures and visuals

Figures belong to the same question record so that content, answer logic and visual dependencies move together through synchronization and validation.

Validation must check:

- stable figure ID;
- referenced asset/path exists when local;
- required alt text;
- no broken runtime reference;
- figure metadata survives round-trip reconstruction.

The architecture must also permit structured diagrams/data visuals without making ordinary questions dependent on external APIs.

## 12. Calibration and delivery separation

Calibration does not author questions.

Its input is the validated canonical question set. Calibration may:

- normalize/derive delivery metadata;
- select questions;
- enforce difficulty/content-mode requirements;
- prepare the exact Activity delivery set.

Calibration must not silently alter question wording, answers, options or stable IDs.

The shared player consumes the validated delivered set and remains the common execution layer.

## 13. Exact-10 Activity contract

The default contract is exactly 10 distinct questions per learner-facing Activity.

Before delivery, validate:

- exactly 10;
- globally unique Question IDs within the delivered set;
- all questions belong to the Activity;
- all questions belong to the same Level/Stage/Track/Half;
- no duplicate or cosmetic variation;
- required content-mode metadata;
- valid answers/options;
- valid explanations;
- valid timing;
- appropriate difficulty progression;
- answer-position and answer-length quality checks.

A documented future curriculum exception must be explicit rather than inferred.

## 14. Round-trip guarantee

The architecture must support:

```
editable Stage document
      → canonical records
      → reconstructed editable representation
```

The normalized reconstructed representation must be semantically equivalent to the normalized source:

- same Question IDs;
- same placement metadata;
- same question content;
- same answer/options;
- same explanation;
- same timing/difficulty;
- same provenance/version/status;
- same figure references.

Round-trip validation is a build/test concern, not a learner-facing feature.

## 15. Milestones, checkpoints and migration gates

The architecture is implemented through controlled milestones rather than a runtime cutover:

### Milestone M0 — Repository audit

Confirm existing banks, schemas, Activity mappings, calibration/delivery paths, shared player expectations, remediation/expansion banks and documentation. **Completed 2026-09-21.**

### Milestone M1 — Canonical architecture foundation

Define the canonical schema, editable Stage document contract, stable-ID rules and architecture/source-of-truth documentation. **Completed 2026-09-21.**

### Checkpoint C1 — Foundation integrity gate

Before synchronization is introduced:

- canonical schema syntax is included in the Reasoning prebuild validation;
- current JavaScript banks remain untouched;
- current Activity mappings remain authoritative;
- current calibration/delivery remains the runtime path;
- shared player and progress architecture remain unchanged.

### Milestone M2 — Synchronization

Build deterministic editable Stage JSON → canonical records generation. **Completed 2026-09-21.** No existing learner-facing runtime path was switched.

### Checkpoint C2 — Synchronization integrity gate

**Passed at source level 2026-09-21.** Valid editable input, deterministic output, stable IDs, correct current Activity mapping, provenance/fingerprint generation and fail-closed validation were exercised against current repository sources.

### Milestone M3 — Drift detection and canonical validation

Add stale-output detection, canonical validation and round-trip reconstruction tests. **Completed 2026-09-21.**

### Checkpoint C3 — Canonical integrity gate

**Passed for infrastructure 2026-09-21.** Canonical output validation, stale-output rejection and canonical → editable round-trip reconstruction passed against current repository sources. No Stage content has yet been migrated or switched to canonical runtime.

### Milestone M4 — Per-Stage migration

Migrate one existing Stage at a time, preserving existing Question IDs and legacy JavaScript source pools. The migrated Stage becomes canonical-runtime-authoritative only after its canonical delivery path is validated.

### Checkpoint C4 — Runtime migration gate

Calibration for a migrated Stage may consume canonical records only after the canonical path reproduces the required Activity delivery contract without changing the shared player contract. The legacy JavaScript bank remains preserved as a controlled fallback/source pool during verification.

### Milestone M5 — Gradual legacy retirement

Only after migrated content has been verified and historical dependencies are no longer required may legacy source pools be considered for retirement. Deletion is a separate deliberate decision, never an automatic consequence of migration.

The existing Level 1 Stages 1–3 live-production verification gate remains independent. Architecture infrastructure may be developed without changing or implementing a new stage; **runtime migration of curriculum content and new stage implementation remain subject to the existing verification boundary.**

## 16. Migration strategy

Migration is gradual.

Phase 1: define schema, authoring format, synchronization, drift detection and validation.

Phase 2: migrate one Stage at a time from existing JavaScript source pools into editable Stage documents while preserving existing IDs.

Phase 3: generate canonical records and validate them against the existing Activity mappings.

Phase 4: route calibration/delivery through canonical records for the migrated Stage.

Phase 5: retain legacy JavaScript banks as controlled source pools until the migrated canonical path has been verified and historical dependencies are no longer required.

No legacy bank is deleted merely because a canonical representation exists.

## 17. Production safety

A question-bank change is not production-ready until:

1. editable source validates;
2. synchronization succeeds;
3. drift detection passes;
4. canonical records validate;
5. Activity mappings resolve;
6. exact-10 delivery validates;
7. existing Reasoning build validation passes;
8. the deployment contains the intended commit;
9. owner/live verification is completed where the current project status requires it.

Failed validation must stop the release rather than producing partial canonical output.

## 18. Current migration boundary

At introduction of this specification, existing Reasoning JavaScript banks remain the controlled source pools:

- `questionBank.js`
- `questionBankStage1Extensions.js`
- `questionBankStage2.js`
- `questionBankStage3.js`
- `questionBankStage4.js`
- `questionBankStage5.js`
- `questionBankStage6.js`
- Level 2 Stage 1 bank
- remediation/expansion/elevated/calibration banks where currently used

No existing question content is rewritten by this architectural introduction.

## 19. Source-of-truth hierarchy

During migration:

1. Human-editable Stage bank — preferred editing surface for migrated content.
2. Canonical records — validated runtime authority for migrated content.
3. Calibration/delivery output — determines the actual delivered 10-question set.
4. Shared Activity Player — executes the delivered set.

For non-migrated content, the existing JavaScript source pools remain authoritative until that content is migrated and verified.

