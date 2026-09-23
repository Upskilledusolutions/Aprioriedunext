# Reasoning Development Status

Last updated: 2026-09-23

## Current status

Reasoning is being developed through a focused stage-by-stage audit and remediation process. **Level 1 · Stage 1 has been accepted by the project owner after live verification. Level 1 Stages 2–3 remain UNVERIFIED by the project owner.** A successful build or Ready Vercel deployment does not count as owner verification.

**New standard:** Reasoning work now follows the approved per-Stage launch and verification standard in `docs/REASONING_STAGE_LAUNCH_AND_VERIFICATION_STANDARD.md`. The immediate restart point is **Level 1 · Stage 1**. Stage 1 must be migrated, exposed completely, deployed and fully owner-verified before Stage 2 begins. Each later Stage follows the same sequential acceptance gate.

The existing single-account authentication model remains shared with Foreign Languages, while Reasoning progress remains separately namespaced by track. No architecture redesign is introduced for curriculum remediations.

**Agreed backend sequencing:** after Level 1 · Stage 1 passes complete owner live verification and is accepted, the project will inspect the existing backend and establish the required backend foundation. **Immediately after that backend foundation, the first Reasoning-specific backend feature to implement and verify is manual Reasoning Level access** using the approved `reasoningL1`–`reasoningL9` identifiers. The richer question-attempt persistence for advanced analytics follows this access-control step, and Level 1 · Stage 2 implementation begins only after these required backend steps are complete.

**Learner-facing rule:** Reasoning displays Level and Stage labels only (for example, **Level 1 · Stage 1**). School-grade names are documentation-only reference data and must not be displayed to learners.

## Superseded Level 1 Stages 1–3 corrective roadmap — historical record

The 2026-09-18 focused corrective sequence remains valid as remediation history, but its launch/verification order is superseded by the 2026-09-22 **Reasoning Stage Launch and Verification Standard**.

The approved current sequence is: restart with Level 1 · Stage 1, migrate the complete Stage into the human-editable/canonical content path, reconcile every Module including Explore and Extend, expose the complete learner-facing Stage, deploy, perform full live verification, accept Stage 1, then proceed to Stage 2 and continue sequentially.


## Verification cadence

Owner verification is deliberately split into two levels:

- **Quick check after every three live stages:** after Stages 1–3, again after Stages 4–6, and again after Stages 7–9 are live, perform a focused production check of navigation, module visibility, activity launch, core scoring/progress flow and obvious runtime errors. This is a checkpoint, not a substitute for the full quality audit.
- **Comprehensive quality check after all nine stages are live:** once all nine stages are live, perform the full end-to-end quality audit across all stages, both tracks, modules, activities and question delivery against every acceptance criterion in this document.

## Question-bank architecture milestones and gates

The architecture roadmap is now tracked separately from curriculum-stage verification so the two workstreams cannot be confused.

| Milestone / gate | State | Requirement before next step |
|---|---|---|
| M0 Repository audit | **Complete** | Current banks, mappings, calibration, player and documentation audited |
| M1 Canonical schema + editable-bank contract | **Complete** | Schema and authoring rules documented; no runtime cutover |
| C1 Foundation integrity | **Recorded** | Canonical schema must remain covered by prebuild validation; legacy runtime preserved |
| M2 Editable → canonical synchronization | **Complete** | Deterministic generation implemented and source-tested; no runtime switch |
| C2 Synchronization integrity | **Passed (source-level)** | Mapping, provenance/fingerprint, stable IDs and fail-closed behavior tested |
| M3 Drift + canonical validation + round-trip | **Complete** | Canonical validation, stale-output rejection and round-trip test implemented |
| C3 Canonical integrity | **Passed (infrastructure)** | Canonical path validated before any Stage migration |
| M4 One-Stage migration | **Pending** | Begin only when a suitable existing Stage is approved for migration; preserve legacy JS source pool and Activity/player contracts |
| C4 Runtime migration gate | **Pending** | Canonical delivery reproduces valid Activity sets before cutover |
| M5 Gradual legacy retirement | **Pending** | Separate decision after migrated content is verified |

**Important separation:** architecture infrastructure and curriculum-stage acceptance are distinct, but the approved 2026-09-22 launch standard now joins them operationally at the per-Stage level: a Stage is migrated, structurally exposed, deployed and live-verified as one controlled sequence. Stage 2 begins only after Stage 1 acceptance; later Stages follow the same rule.

### Current verification note

The project owner has now completed a **quick live check** of the latest Stage 1 production changes. The previously identified authenticated Courses-menu issue has been corrected: the live Courses page now shows **Quantitative Reasoning** and **Verbal Reasoning** at the top, and each card opens its respective track directly. The existing **Reasoning Skills → Reasoning Dashboard** pathway remains unchanged.

The project owner has now explicitly confirmed that the previously completed live-production verification of Stage 1 should be treated as the complete verification record and has accepted Stage 1. Stage 1 is therefore **ACCEPTED**. The project now proceeds to the documented transition sequence: backend inspection/foundation → manual Reasoning Level access → analytics persistence foundation → Level 1 · Stage 2.
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

## Level 1 · Stage 1 — restart point for controlled migration and full launch verification

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
- **Completed corrective step:** Stage 1 is included in the Stages 1–3 Verbal answer-quality correction. The corrected implementation is deployed in production. The owner has completed a quick live check; comprehensive Stage 1 verification and acceptance remain pending.

### Stage 1 current state

**Implementation, production deployment, complete owner verification and Stage 1 acceptance completed.**

Stage 1 was deployed in production and the owner has confirmed that the complete live-production verification previously performed should be recorded as completed. Stage 1 is now accepted. No Stage 2 curriculum work begins until the required backend/access/analytics transition sequence is completed.

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

## Level 1 sequential Stage-acceptance boundary

The previous grouped Stages 1–3 gate is superseded.

The current rule is **one Stage at a time**, with the agreed backend/access/analytics foundation gates between Stage 1 acceptance and Stage 2:

1. complete the approved Stage migration/launch workflow;
2. obtain complete owner verification for that Stage;
3. accept the Stage;
4. for the transition from Stage 1 to Stage 2, complete the backend inspection/foundation;
5. immediately implement and verify manual Reasoning Level access using the approved level identifiers, with direct selective assignment supported and no prerequisite dependency between Levels;
6. complete the durable analytics question-attempt persistence foundation and verify data capture/separation;
7. only then begin Stage 2.

The immediate sequence starts at Level 1 · Stage 1, then Stage 2, then Stage 3, and continues through later Levels. Historical remediation is preserved and is not repeated unless live verification identifies a specific defect.


## Reusable standard for all future stages and levels

Before implementing each future stage, inspect its current computation and Computation + Reasoning bank against the calibrated baseline. Apply the same two-additional-level elevation where the current baseline is insufficient. Do not simply increment `difficulty` metadata. The actual question content must carry the increased demand.

This rule must be applied consistently across Levels 1–9 and Stages 1–6. It is part of the source-of-truth acceptance criteria for every future computation remediation.

## Level 1 · Stages 2–3 — queued under the sequential Stage-launch standard

Stages 2 and 3 retain their historical remediation and identified learner-facing corrections. They are **not accepted** and will be handled after Stage 1 passes the new complete migration/launch gate.

Their earlier findings remain relevant:

- Stage 2 requires correct Explore-first → Extend presentation.
- Stage 3 requires correct Explore/Extend presentation and Previous/Next module navigation.
- Existing question content should not be changed unless live verification identifies a specific defect.

Under the new process, both Stages 2 and 3 will receive the same full migration, structural reconciliation, prebuild validation, deployment and complete live verification as every other Stage.

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

## Remaining curriculum work under the sequential Stage-launch standard

- Restart Level 1 · Stage 1 through the complete migration → exposure → deployment → live verification → acceptance sequence.
- Proceed sequentially through Stage 2 and Stage 3 using the same standard.
- Perform the focused Stages 1–3 checkpoint after all three are individually accepted.
- Continue through Level 1 Stages 4–6 and then Levels 2–9 using the same per-Stage process.
- Apply the exact-10-question quality standard without lowering conceptual or difficulty quality.
- Apply the two-additional-level computation/Computation + Reasoning elevation wherever the existing recalibrated baseline is insufficient.
- Resolve known Level 1 structural issues through validated changes.
- Resume Level 2 Stage 1 only after Level 1 is stable, then continue Levels 2–9.
- Inspect and integrate the external backend before describing Reasoning progress as permanently persisted.

## Later-phase platform work

The following may require later backend/API implementation after the external backend is inspected: durable server-side storage/authorization details, server-side timer configuration, and optional interactive/API learning resources. The approved transition order is **backend inspection/foundation → manual Reasoning Level access → analytics persistence foundation**.

**Not deferred:** Reasoning mastery/analytics, cumulative profile reporting, Reasoning leaderboard, Reasoning profile access and manual Level access behavior are approved product requirements beginning with Level 1 · Stage 1. Their exact backend persistence mechanism remains subject to backend inspection.

## Manual Reasoning Level access — first backend feature after the backend foundation

The approved Reasoning access model is manual and level-specific. Once the existing backend has been inspected and the required backend foundation is established, this is the **first Reasoning-specific backend feature to implement and verify**, before the richer analytics persistence work and before Level 1 · Stage 2 begins.

The approved access identifiers are:

- `reasoningL1`
- `reasoningL2`
- `reasoningL3`
- `reasoningL4`
- `reasoningL5`
- `reasoningL6`
- `reasoningL7`
- `reasoningL8`
- `reasoningL9`

Each identifier grants access to its corresponding Reasoning Level. Access is **selective, not progressive**: an administrator may assign `reasoningL4` directly without first assigning `reasoningL1`, `reasoningL2` or `reasoningL3`. Completion of an earlier Level does not automatically grant a later Level, and granting a later Level does not automatically imply access to earlier Levels unless those identifiers are separately assigned.

The implementation must preserve the same learner identity and all previously recorded Reasoning progress. Exact storage and enforcement must be based on the audited external backend/admin flow rather than an invented frontend-only field.

This access-control implementation and its live verification are a prerequisite to the subsequent analytics persistence foundation and Level 1 · Stage 2 implementation.

## Advanced analytics data foundation — scheduled after Level access and before Stage 2

The current Stage 1 Analytics uses supported learner data and must not fabricate missing history. The project owner has agreed to implement the richer analytics data foundation **after Stage 1 passes owner live verification and Stage acceptance, and before Level 1 · Stage 2 implementation begins**.

The work will:

- inspect the existing backend/persistence before choosing storage changes;
- add durable server-side storage for Reasoning question-attempt history, capturing only fields the audited backend can reliably support, including question/activity identity, correctness, difficulty/skill metadata, timestamp, response time and attempt sequence where applicable;
- verify that the data is stored under the learner's Reasoning record and remains separate from Foreign Languages;
- expand Reasoning Analytics to use the verified stored history for attempt-level question history, performance by difficulty, per-question response timing and growth over time.

This is a backend/data foundation task, not a curriculum-stage implementation or curriculum/player redesign. Analytics can only use history collected from the point at which the new persistence is active; unsupported historical values will not be reconstructed or fabricated. Level 1 · Stage 2 content work begins only after the Stage 1 acceptance gate and this analytics-foundation sequence are completed.

## Source-of-Truth Principle

Question count, substantive variety, activity alignment, content-mode classification, actual difficulty progression, grade alignment, assessment integrity, runtime safety and deployment verification are separate acceptance criteria.

A stage is not considered complete merely because it has the required number of question records, because a commit exists, or because a Vercel deployment is Ready. **Owner live-production verification is a separate mandatory acceptance criterion.**

## 2026-09-22 — Final Reasoning product and Stage-launch process approved

The project owner approved a standalone Reasoning dashboard direction and a repeatable per-Stage launch process.

### Product direction

Reasoning receives its own learner-facing dashboard, separate from the Foreign Languages dashboard. It should provide comparable practical features to the language dashboard, while using a more refined professional aesthetic and Reasoning-specific colour scheme aligned with the existing Reasoning pages.

The first dashboard scope includes track selection, level/stage progress, Continue Learning, recent activity, a cumulative Reasoning progress report, a cumulative Reasoning leaderboard, and mandatory mastery/analytics from Level 1 · Stage 1 onward. The Reasoning profile is reached from the login icon/name. Reasoning and Foreign Languages records remain separately namespaced.

### Launch process

Every Stage now follows the sequence documented in `docs/REASONING_STAGE_LAUNCH_AND_VERIFICATION_STANDARD.md`: baseline audit → human-editable Stage source → canonical records → structural learner-facing reconciliation → question-quality validation → learner-facing exposure → pre-deployment validation → one coherent deployment → complete live production verification → Stage acceptance.

A Module may contain multiple Activities/question sets, with exactly 10 questions per Activity.

The immediate restart point is Level 1 · Stage 1. Stage 2 begins only after Stage 1 is fully accepted, and the same rule applies sequentially to every later Stage.

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

This commit defines the schema and authoring contract only. Existing JavaScript banks and calibration/delivery paths remain in place and are not silently switched to an unpopulated canonical bank. The next architectural implementation step is the deterministic Stage-document synchronization layer, followed by drift detection, canonical validation and round-trip tests. This is infrastructure work, not a new curriculum-stage implementation.

The existing Level 1 Stages 1–3 live-production verification gate remains unchanged and is independent of this architecture work. Architecture infrastructure may continue without changing a Stage or switching runtime delivery. No Stage content migration, new stage implementation or canonical runtime cutover should be treated as approval to bypass the existing live-verification gate. This architecture foundation does not mark any Reasoning stage verified or complete.


## 2026-09-23 — Stage 1 owner acceptance and transition to backend foundation

The project owner has explicitly confirmed that the complete Level 1 · Stage 1 live-production verification was already performed earlier and should be treated as completed. Stage 1 is therefore **ACCEPTED**.

The accepted Stage 1 verification covered the documented production criteria across Quantitative and Verbal, including Modules, Explore/Extend Activities, question sets, interaction, explanations, timing, scoring, completion, progress, navigation, content-mode labels, difficulty, analytics/profile access, authenticated Courses/name-menu pathways and Foreign Languages separation.

The project now moves to the required transition sequence. **No Level 1 · Stage 2 curriculum implementation begins yet.**

1. Inspect the existing external backend and establish the required backend foundation.
2. Implement and verify manual Reasoning Level access using `reasoningL1`–`reasoningL9`, with selective direct assignment and no prerequisite dependency.
3. Implement and verify the durable Reasoning question-attempt analytics persistence foundation.
4. Begin Level 1 · Stage 2 only after the above gates are complete.

## 2026-09-23 — Stage 1 live verification findings and next implementation scope

The owner quick-checked Level 1 · Stage 1 and reported that the questions and modules appear to function correctly. The required profile-access entry was then added to the authenticated name menu and deployed successfully.

The live Reasoning profile/dashboard check identified two remaining Stage 1 product issues:

- The current Reasoning Dashboard displays incorrect **100%** values for Overall Stage 1, Quantitative and Verbal rather than reflecting actual learner completion state. This requires source-level investigation and correction, not a visual workaround.
- The dashboard currently presents Quantitative and Verbal track choices but does not expose the approved Reasoning mastery/analytics experience. Analytics are **mandatory from Level 1 · Stage 1** and are not deferred.

Approved navigation refinements for the next implementation:

- Reasoning Skills appears first in the authenticated Courses menu and opens the Reasoning Dashboard with Quantitative/Verbal track selection.
- The authenticated name-menu label **Profile** becomes **Language Club** while retaining the existing `/Profile` navigation and Foreign Languages features.
- The authenticated name-menu label **Reasoning Profile** becomes **Reasoning Analytics** and must open the dedicated Reasoning Analytics experience directly, not a Quantitative/Verbal track page.
- Text underlines are removed from all links/buttons in the authenticated name-menu dropdown only.

Stage 1 was subsequently completed and accepted by the project owner. The next approved implementation sequence is backend inspection/foundation → manual Reasoning Level access → analytics persistence foundation → Level 1 · Stage 2.

### 2026-09-23 — Backend Reasoning access foundation and approved authorization gate

The external backend repository `Upskilledusolutions/Backend` has now been inspected and authorized for write access through the existing GitHub workflow.

The first backend foundation for manual Reasoning Level access has been implemented:

- `reasoningAccess` is a dedicated user field and is separate from the existing Foreign Languages `next` field.
- Valid identifiers are `reasoningL1` through `reasoningL9`.
- New users default to `reasoningL1`.
- A dedicated backend read endpoint exposes the Reasoning access list.
- The authenticated Admin user editor has been extended to manage the Reasoning Level identifiers.

Backend commit: `6637acc69fd6e64b1e3a29a85c5d8ac4967b0d24`.

Frontend Admin editor commit: `e14a8d2bf08a8b01bb243d4157023f5d1b357a5a`.

**Security boundary identified:** the existing backend does not currently enforce a server-side authenticated identity for these user-specific requests; `middlewares/auth.js` is empty and legacy endpoints identify users from request-supplied `userId` values. Therefore the new Reasoning access field is a data foundation, not yet a secure authorization system.

**Approved next backend step:** implement secure server-recognized authentication/authorization for Reasoning Level access before relying on manual access control in production. The server must distinguish the authenticated learner from an administrator, allow a learner to read only their own Reasoning access, prevent learners from modifying access, and allow only an authenticated administrator to assign/remove `reasoningL1`–`reasoningL9`. The existing Foreign Languages authentication/data behavior must remain compatible, and `next` must remain reserved for language access.

After this security gate is implemented and verified, proceed to durable Reasoning question-attempt persistence and richer analytics, then Level 1 · Stage 2. Do not begin Stage 2 curriculum implementation before those gates are complete.
