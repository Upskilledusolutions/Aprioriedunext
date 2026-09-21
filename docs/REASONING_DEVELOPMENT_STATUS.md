# Reasoning Development Status

Last updated: 2026-09-18

## Current status

Reasoning is being developed through a focused stage-by-stage audit and remediation process. **Level 1 Stages 1–3 have received implementation/remediation work, but all three remain UNVERIFIED by the project owner.** A successful build or Ready Vercel deployment does not count as owner verification.

**Mandatory resume rule:** when work resumes after this documentation update, the first step is to remind the project owner that **Level 1 Stages 1–3 must be verified on the live production website before any new stage implementation proceeds.** Do not treat historical deployment success as verification.

The existing single-account authentication model remains shared with Foreign Languages, while Reasoning progress remains separately namespaced by track. No architecture redesign is introduced for curriculum remediations.

**Learner-facing rule:** Reasoning displays Level and Stage labels only (for example, **Level 1 · Stage 1**). School-grade names are documentation-only reference data and must not be displayed to learners.

## Approved Level 1 Stages 1–3 corrective roadmap — 2026-09-18

The project owner approved the following focused sequence. It records the next implementation work without reopening completed remediation:

1. **Verbal answer-quality correction across Stages 1–3 — implementation completed/prevalidated.** The actual delivered Verbal sets were audited, conspicuous correct-answer length cues were reauthored, two incomplete Stage 2 option sets were restored to four choices, Stage 1 answer matching was corrected, and the prebuild gate was extended to check the actual Stage 1–3 Verbal delivery paths. Production deployment/owner verification remains pending.
2. **Stage 2 learner-facing Explore/Extend structure.** Keep the existing Stage 2 modules, activities, IDs, question banks, progress and player unchanged. Present Explore first and Extend second, matching the Stage 1 model. Stage 2 Previous/Next module navigation is already implemented in `ff9a16234066517269c642b6f81fa5356e1c418f`. Implement this presentation correction, deploy, then obtain owner verification of Stage 2.
3. **Stage 3 learner-facing Explore/Extend structure and navigation.** Expose the existing Explore and Extend content correctly, remove hard-coded Explore-only labels, and add Previous/Next module navigation. Do not change Stage 3 question content unless the separate answer-quality audit identifies a specific defect. Implement, deploy, then obtain owner verification of Stage 3.
4. **Three-stage checkpoint.** After Stage 2 and Stage 3 have each been owner-verified, perform the focused Stages 1–3 quick check. The comprehensive quality audit remains deferred until all nine stages are live.

No stage is marked verified by this roadmap alone.

## Verification cadence

Owner verification is deliberately split into two levels:

- **Quick check after every three live stages:** after Stages 1–3, again after Stages 4–6, and again after Stages 7–9 are live, perform a focused production check of navigation, module visibility, activity launch, core scoring/progress flow and obvious runtime errors. This is a checkpoint, not a substitute for the full quality audit.
- **Comprehensive quality check after all nine stages are live:** once all nine stages are live, perform the full end-to-end quality audit across all stages, both tracks, modules, activities and question delivery against every acceptance criterion in this document.

### Current verification note

The project owner has performed a **quick functional check of Stage 1** and reported that it is functioning as expected. This was **not a comprehensive quality check**. The comprehensive quality check is intentionally deferred until all nine stages are live. Stages 1–3 therefore remain unverified for formal completion purposes until the required production verification checkpoint is completed.

## Mandatory quality requirements

### 1. Full stage audit

Every stage must be checked independently. The audit covers dashboard pages, module/lesson pages, activity mappings, question loading, imports/routes, client-side guards, Question Bank structure, stable IDs, grade/difficulty alignment, Explore/Extend progression, answers/explanations, timing, navigation, scoring, completion and progress behavior.

A client-side error on a learner-facing page is a blocking defect for the affected stage.

### 2. Explicit content-mode labels

Every Reasoning assessment question must carry a content-mode classification and show the learner-facing label before or with the question.

Approved labels:

- **Computation** — calculation or numerical manipulation is the primary task.
- **Text-Based Reasoning** — the learner primarily interprets written information, evidence, claims, conditions or ideas without calculation being the primary task.
- **Computation + Reasoning** — both meaningful interpretation/reasoning and calculation are required.

These labels describe the type of thinking, not the difficulty or Level/Stage.

### 3. Difficulty calibration — two-level elevation rule

Difficulty values must reflect actual reasoning demand. When a computation or Computation + Reasoning baseline has been identified as insufficient, the delivery standard is now **two additional difficulty levels above that previously recalibrated baseline**. This is a curriculum rule, not a request to change metadata alone.

The uplift must be demonstrated through harder task construction: additional meaningful steps, inverse reasoning, multi-condition constraints, abstraction/generalization, transfer, estimation/checking, proportional relationships or equivalent mathematical reasoning appropriate to the placement. Difficulty must still rise incrementally within Explore and within Extend.

This standard applies to **all Reasoning Levels 1–9 and Stages 1–6** for both Computation and Computation + Reasoning questions. The relative uplift is against the calibrated baseline for the specific Level/Stage; it does not make every level identical in absolute difficulty.

### 4. Question-set quality and quantity standard

Every learner-facing activity is required to deliver **exactly 10 distinct, substantive questions**, unless a future documented curriculum exception explicitly requires another count.

Questions must test the same core concept and intended application, meet the actual difficulty requirement, preserve Explore/Extend progression and content mode, use unique stable IDs, avoid duplicate/cosmetic variations, and retain valid answers/explanations and timing metadata.

### 5. Deployment-efficiency rule

Related fixes should be grouped into the fewest coherent deployment-triggering commits that can be safely validated.

```text
inspect → one coherent stage implementation → deployment → owner verification → targeted second fix only if needed
```

Vercel deployments are verification events, not the debugging loop. Before deployment, perform a repository-wide learner-facing label sweep and a stage-specific content/runtime sweep so that route-level omissions are caught before the deployment.

## Level 1 · Stage 1 — implementation/remediation complete; owner verification pending

### Scope

Stage 1 remediation covered Quantitative and Verbal delivery without changing the core architecture, Foreign Languages, authentication, navigation architecture, progress architecture or shared activity-player UI.

### Historical navigation and activity flow

- Quantitative Stage 1 module navigation: `1cdaf88db4c8e650f7f61798e259f7e9a9313ea3`.
- Verbal Stage 1 module navigation: `20e75b7fa534f0c9cef979a0cced75c24cf9ff55`.
- Reasoning activity return navigation: `230d0142c81d8219c443a1f63576d562622e5d02`.
- Reasoning activity navigation styling: `76a7114334523daee95a5478317fba3cd86b93c3`.
- Stage 1 navigation verification/documentation history: `2e34ad0b5be4b2d3242410c02632dd1b6006800c`.

### Current Stage 1 quality/remediation sequence

- Stage 1 question bank restoration: `ee7b073cb6ab6676e5dfb5944ce75495728a5631`.
- Historical choice-quality remediation: `282de52975a20ae7934574e09e16372b416009a6`, `7b6336f759f8340a75650caa790cbe3347a4a7fb`, `acdb54b66e906f4f23c2b232337a766654824987`, `944341e4076fb63aec61e63d8ea2a7a35c36044f`.
- Current re-audit identified concrete activity/question mapping defects and reset the launch-verification boundary.
- Stage 1 computational content was then elevated two additional difficulty levels above the prior recalibrated baseline, using a dedicated elevated delivery bank with exactly 10 questions per affected activity and substantive reasoning demand.
- Learner-facing Grade labels were removed while grade remains internal calibration data.
- **New re-audit finding:** Verbal Stage 1 delivered questions can still leave the correct option as a conspicuously longest answer. This is a content-quality defect, not a reason to change the underlying architecture.
- **Completed corrective step:** Stage 1 is included in the Stages 1–3 Verbal answer-quality correction. Production deployment and owner verification remain pending.

### Stage 1 verification state

**UNVERIFIED — owner verification required.**

Live production verification must confirm: exactly 10 questions per activity; no missing or duplicated delivery; substantive two-level difficulty elevation; correct Computation vs Computation + Reasoning labels; valid answers/explanations/timing; Previous/Next and answered/unanswered behavior; scoring/completion/progress; no learner-facing Grade labels; and no client-side errors.

Do not mark Stage 1 verified until the owner completes this live check.

## Level 1 · Stage 2 — implementation/remediation complete; owner verification pending

Stage 2 question-quality remediation was completed in commit `229468c0257b6181dd949de8a62fcb017c2c118c`, following the permanent quality rules for answer-position balance, answer-length/structural clues, distractor quality, activity alignment and difficulty progression. Previous/Next module navigation was subsequently added in `ff9a16234066517269c642b6f81fa5356e1c418f`.

**New learner-facing finding:** the Stage 2 dashboard has Explore and Extend data, but does not present them in the same separated **Explore first → Extend** structure used by Stage 1. The issue is presentation, not a missing curriculum layer.

**Next action:** after the current Verbal correction is deployed and Stage 2 is owner-verified, apply the approved Stage 2 presentation correction without changing the underlying data, IDs, question bank, progress or shared activity player.

**UNVERIFIED — owner verification required.**

Stage 2 must be checked on the live production site for runtime mappings, complete activity delivery, exactly 10 substantive questions per activity, content-mode labels, grade/difficulty calibration, Explore/Extend progression and presentation, answers/explanations, timing, navigation, scoring, completion, progress and client-side errors. No historical deployment or earlier completion record is sufficient for owner verification.

## Level 1 · Stage 3 — implementation/remediation complete; owner verification pending

Stage 3 is the **Mathematical Thinking / Analytical & Scholarly Writing** stage. The original substantive question-bank remediation was committed as `1a90523ddcdcbc502729ce1b1d6132911f608d40`.

The subsequent Stage 3 remediation sequence addressed delivery/calibration and build-validation failures without changing the existing architecture:

- `22ed7d81e64d42276b2e3a4a94c05c672f4c2799` — standardized Stage 3 reasoning delivery.
- `b841cded7fc30c729b76c79895baa11f6a51853b` — completed Stage 3 calibration safeguards.
- `fb538c313b706892a156e99c53b25fe6750d1b97` — calibrated Stage 3 Verbal option lengths.
- `cffb60c13284edf27b90f4e818b34836bc3bb0d5` — reauthored remaining Stage 3 Verbal length cues.
- `1d5ff2cf3a2a96c4cc817617f9a686093ae4c0d0` — restored complete Stage 3 activity mappings.
- `2edc84bdc07a5c620fff496281554e63808a8d07` — restored missing Stage 3 calibrated activities.
- `1729c985b2b57a04bd059a7fcc22384e8d3058de` — completed Stage 3 calibrated activity delivery.
- `93219b2435045993ecc42bbd84d563932ce695ee` — routed Stage 3 activities through complete calibration.
- `c8db6774473f1c6d4740b7943f4061e723d60151` — validated complete Stage 3 activity delivery.
- `64ba10cc4dcd6b2395a7c75f4b48907cab8f8896` — validated Stage 3 calibration layers separately.
- `44a18dde83465a94b28b9b29f5629fec33f49314` — validated Stage 3 through the authoritative delivery layer.
- `d746c3e63482923ff3e12ab7f5f8a2d3c838c89a` — allowed Stage 3 fallback calibration during build validation.
- `d56b8847206b268d1cf0169e76f81c80014ce955` — reauthored Stage 3 fallback answer-length cues.
- `7f9271d4e5c74f50a488e1955b0f35d3e8bb13e5` — rebalanced a Stage 3 scholarly revision cue.

These changes resolved the build/calibration path that had previously caused the Stage 3 Verbal Explore activities to deliver no calibrated questions and reduced build validation to only 50 delivered questions instead of the expected 100 for the affected validation set.

**Build/deployment state:** the latest Stage 3 deployment is Ready.

**New learner-facing finding:** Stage 3 data contains both Explore and Extend modules, but the current dashboard/module presentation hard-codes Explore treatment instead of exposing the two halves correctly. Stage 3 individual module pages also lack Previous/Next module navigation.

**Next action:** after Stage 2 is owner-verified, apply the approved Stage 3 Explore/Extend presentation and Previous/Next correction without changing question content unless a separate live verification identifies a specific defect.

**Verification state: UNVERIFIED — owner verification required.**

The owner must verify Stage 3 on the live production website, including the previously missing Mathematical Justification and the other Stage 3 Extend activities, complete question delivery, correct Explore/Extend presentation, content-mode labels, difficulty/progression, answers/explanations, timing, navigation, scoring, completion/progress and absence of client-side errors. A Ready deployment establishes successful build/deployment, not live owner verification.

## Level 1 · Stages 1–3 verification boundary

Stages 1, 2 and 3 remain explicitly grouped under a **live-production owner-verification gate**. The Stage 1 quick check noted above does not complete this gate. The approved corrective work on these existing stages may proceed before the gate is completed; **no new stage implementation** proceeds beyond this boundary until the gate is completed. Until the owner confirms all three stages are functioning correctly on production:

- do not mark any of Stages 1–3 as verified;
- do not record them as fully complete;
- do not start new stage implementation on the assumption that the foundation is verified;
- on the next build-session resume, first remind the owner that Stages 1–3 require verification;
- preserve all implementation/remediation history and do not redo completed work unless live verification exposes a specific defect.

## Reusable standard for all future stages and levels

Before implementing each future stage, inspect its current computation and Computation + Reasoning bank against the calibrated baseline. Apply the same two-additional-level elevation where the current baseline is insufficient. Do not simply increment `difficulty` metadata. The actual question content must carry the increased demand.

This rule must be applied consistently across Levels 1–9 and Stages 1–6. It is part of the source-of-truth acceptance criteria for every future computation remediation.

## Level 1 · Stage 4–6 status

### Stage 4
Previous remediation exists, but owner verification remains pending. Known structural issues must be resolved through a validated focused change. The exact-10-question and difficulty standards apply. No Stage 4 work is considered verified by historical deployment status alone.

### Stage 5
Build work exists; owner verification remains pending. Fresh audit required, including question quantity, runtime safety, content-mode labeling and actual difficulty calibration.

### Stage 6
Build work exists; owner verification remains pending. Fresh audit required, including question quantity, runtime safety, content-mode labeling and actual difficulty calibration.

## Level 2 status

Level 2 Stage 1 implementation exists in the repository but remains paused while the Level 1 foundation is stabilized and verified. The exact-10-question standard and actual difficulty calibration will apply when Level 2 work resumes.

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

## Remaining curriculum work after the Stages 1–3 gate

- Complete the approved Stages 1–3 corrective sequence: Verbal answer-quality correction, Stage 2 Explore/Extend presentation, then Stage 3 Explore/Extend presentation and navigation.
- Owner-verify Stage 2 after its deployment and Stage 3 after its deployment.
- Perform the focused Stages 1–3 quick-check checkpoint.
- Then freshly audit and remediate Level 1 Stages 4–6 using the same focused stage-level model.
- Apply the exact-10-question quality standard without lowering conceptual or difficulty quality.
- Apply the two-additional-level computation/Computation + Reasoning elevation wherever the existing recalibrated baseline is insufficient.
- Resolve known Level 1 structural issues through validated changes.
- Resume Level 2 Stage 1 only after Level 1 is stable, then continue Levels 2–9.
- Inspect and integrate the external backend before describing Reasoning progress as permanently persisted.

## Later-phase platform work

These remain separate from the current frontend curriculum build and should be implemented only after the relevant external backend is inspected: backend/database persistence; durable server-side authorization; server-side timer configuration; Reasoning points, streaks, achievements and leaderboards; broader account-level analytics; and optional interactive/API learning resources.

## Source-of-Truth Principle

Question count, substantive variety, activity alignment, content-mode classification, actual difficulty progression, grade alignment, assessment integrity, runtime safety and deployment verification are separate acceptance criteria.

A stage is not considered complete merely because it has the required number of question records, because a commit exists, or because a Vercel deployment is Ready. **Owner live-production verification is a separate mandatory acceptance criterion.**

## 2026-09-21 — Reasoning question-bank architecture foundation

A new controlled question-content architecture was introduced around the existing Reasoning curriculum without changing the player or current Level/Stage/Module/Activity structure.

### Audit result

The repository currently contains:

- a base Reasoning bank in `src/Data/Reasoning/questionBank.js`;
- separate Stage 1 extension/remediation/Verbal and expansion banks;
- dedicated Stage 2, Stage 3, Stage 4, Stage 5 and Stage 6 JavaScript banks;
- Level 2 Stage 1 content;
- separate elevated/calibration layers, including Stage 1, Stage 2 and Stage 3 delivery/calibration files;
- explicit Activity mappings in `src/Data/Reasoning/activities.js` plus stage-specific Activity/Module files;
- existing exact-10 and question-quality prebuild validation in `scripts/validateReasoningBuild.js`;
- existing shared activity execution pages and Reasoning progress utilities.

The current banks are JavaScript source pools rather than a dedicated human-editable Stage-document → canonical-record pipeline. Calibration is also currently distributed across stage-specific resolvers and remediation/elevated banks. There is no permanent canonical schema, editable Stage-bank format, synchronization/fingerprint drift gate, canonical provenance/lifecycle model, or round-trip test layer.

### Implemented foundation

- Added `src/Data/Reasoning/canonicalQuestionSchema.js` with the target canonical field contract and placement-aware validation primitives.
- Added the permanent specification `docs/REASONING-HUMAN-EDITABLE-CANONICAL-QUESTION-BANK-SPEC.md`.
- Added the operational workflow `docs/REASONING-QUESTION-BANK-CONTENT-MAINTENANCE.md`.
- Added the human-editable Stage-bank directory contract under `content/Reasoning/question-banks/stages/` without copying or rewriting existing question content.
- Updated the permanent product architecture document to show the new content layer inside the existing Reasoning hierarchy.

### Current implementation boundary

This commit defines the schema and authoring contract only. Existing JavaScript banks and calibration/delivery paths remain in place and are not silently switched to an unpopulated canonical bank. The next implementation step is the deterministic Stage-document synchronization layer, followed by drift detection and canonical validation tests.

The existing Level 1 Stages 1–3 live-production verification gate remains unchanged and is independent of this architecture work. This architecture foundation does not mark any Reasoning stage verified or complete.
