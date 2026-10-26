# English Aptitude — Step 3 Implementation Roadmap

**Status:** Step 3 roadmap approved on 2026-10-20. Phase C implementation is in progress on the isolated branch `english-aptitude-phase-c-schema`; it has not been merged or deployed.
**Repository:** `Upskilledusolutions/Aprioriedunext`; active implementation branch `english-aptitude-phase-c-schema` (do not merge to `main` without explicit approval)
**Production:** [upskilleduonline.com](https://www.upskilleduonline.com)
**Deployment:** Vercel team `Upskilledusolutions / upskilledusolutions-projects`
**Backend:** Inspect the existing `Upskilledusolutions/Backend` repository and Render service before deciding whether any backend changes are needed.

## 1. Purpose and non-negotiable requirements

Implement the approved English Aptitude curriculum using the smallest safe, maintainable design that fits the verified codebase.

- Preserve the approved nine-level, six-stage curriculum, 12 question types, reading allocations, authored-bank minimums and Explore/Extend rules in `ENGLISH_APTITUDE_QUESTION_TYPES_AND_LEVELS.md`.
- Treat the authored question-bank quantities as reusable banks, not limits on lifetime practice. A learner activity may deliver a 10-question attempt while the larger approved bank remains available across practice.
- Keep the existing authentication/user identity where appropriate, but keep English Aptitude learner records, progress and analytics logically separate from both Reasoning and Foreign Languages.
- Reuse proven components and validation patterns only after inspecting their real dependencies and behaviour. Do not assume Reasoning's schema, endpoints or runtime model automatically fit English Aptitude.
- Match English Aptitude's design, aesthetics and navigation to the established Reasoning Skills learner experience. Reuse visual/layout/navigation patterns only where safe; keep English routes, content, response/scoring logic, progress and analytics separate. Prefer scoped styles and avoid global changes that alter other products.
- Maintain full content, interaction, accessibility, grading and analytics quality at every level. The rollout sequence below changes **when** each stage is built, not its requirements.
- Do not change Reasoning or Foreign Languages unless the audit identifies a necessary shared-system dependency; explain the impact and obtain approval before such a change.
- Do not invent database schemas, API routes or backend contracts. Mark unverified items as **To Be Verified** until inspected and tested.

## 2. Required implementation and release order

### Foundation: complete Level 1 first

Build **Level 1, Stages 1–6 in sequence**. Each stage must pass its checks and the owner's live production verification before it is accepted and the next stage begins. Level 1 is not complete until all six stages, their approved content, learner delivery, persistent progress and the full cumulative analytics experience work together.

### Rotation: Levels 2–9

Only after Level 1 is accepted, work through the remaining levels in stage waves:

| Wave | Required order |
|---|---|
| Stage 1 | Level 2 Stage 1 → Level 3 Stage 1 → Level 4 Stage 1 → … → Level 9 Stage 1 |
| Stage 2 | Level 2 Stage 2 → Level 3 Stage 2 → Level 4 Stage 2 → … → Level 9 Stage 2 |
| Stage 3 | Level 2 Stage 3 → Level 3 Stage 3 → Level 4 Stage 3 → … → Level 9 Stage 3 |
| Stage 4 | Level 2 Stage 4 → Level 3 Stage 4 → Level 4 Stage 4 → … → Level 9 Stage 4 |
| Stage 5 | Level 2 Stage 5 → Level 3 Stage 5 → Level 4 Stage 5 → … → Level 9 Stage 5 |
| Stage 6 | Level 2 Stage 6 → Level 3 Stage 6 → Level 4 Stage 6 → … → Level 9 Stage 6 |

Finish and accept one stage for one level before moving to the next level in that wave. Do not build Level 2 Stages 2–6 before Stage 1 has been completed across Levels 2–9. The rotation applies only after the full Level 1 foundation has been accepted.

## 3. Feature delivery register — what is included and when

This register makes the timing of the roadmap's previously discussed feature choices explicit. It does not change the approved curriculum, architecture direction, rollout sequence or quality standards.

| Feature / capability | Delivery commitment or decision point |
|---|---|
| English-specific architecture for all nine levels and six stages | Defined in Phase B and designed for the approved full curriculum, even though delivery starts with Level 1. |
| Level 1 content, learner experience and all six stages | Required before the Level 2–9 rotation; each stage requires production verification and owner acceptance. |
| Full cumulative analytics and persistent progress | Required from the Level 1 foundation, across all six Level 1 stages; the same architecture must support every later stage. |
| All approved question types and suitable response/scoring modes | Required as the relevant activities are implemented. Listening prompts and open-ended/oral-response tasks must not be reduced to unsuitable multiple-choice interactions. |
| Editable/canonical banks, validation, content/source metadata, rights checks and quality controls | Established and sample-validated in Phase C before broad content authoring; applied throughout all stage waves. |
| Levels 2–9 delivery | Only after Level 1 is accepted, in the exact stage-wave order in Section 2; no stage may bypass its acceptance gate. |
| Audio playback, learner audio recording and automated oral assessment | **Explicit decision required during Phase B, before architecture approval.** The initial options did not establish a firm delivery milestone for these features. The audit must assess the requirements, technical feasibility, privacy/consent and data handling, accessibility, and valid/transparently explainable assessment criteria. The architecture proposal must then state which features are approved, their implementation phase/stage and acceptance tests. They must not be silently omitted, assumed implemented, or added in a way that changes approved curriculum or quality standards. Until that decision is approved, listening prompts and appropriate oral-response handling remain required where the curriculum calls for them, but recording and automated oral scoring are not claimed as delivered commitments. |
| Any other feature not yet assigned a delivery point | Phase B must identify it explicitly as required for the initial release, scheduled for a later milestone, or awaiting owner decision. No previously discussed option should disappear merely because its milestone was unspecified. |

**Release rule:** Phase B's architecture proposal must include a reviewed feature register with a delivery phase/stage and acceptance criteria for every approved feature. The owner must approve the proposal before implementation starts. If a feature is still undecided, record the decision needed and its impact; do not silently treat it as out of scope.

## 4. Implementation phases and approval gates

### Phase A — Audit the actual codebase

Read the approved English curriculum/specification and relevant architecture, user-flow, data/progress and development-rule documents. Inspect the existing frontend routes, navigation, player, question-bank conventions, scoring, analytics, authentication and access controls. Inspect the backend and Render configuration only as needed to verify persistence and authorization.

**Output:** concise inventory of reusable components, English-specific gaps, affected files, data flows and regression risks. No code changes during the audit.

### Phase B — Propose the English-specific architecture

Define and review the English Aptitude → Level → Stage → Explore/Extend → Module → Activity → Question structure, stable identifiers, content metadata, routes/access, delivery and progress boundaries. Specify safe reuse boundaries and English-specific systems at the architectural level; a file-by-file implementation plan is not required.

The proposal must preserve existing products and their data. Do not finalize an API/database contract until the relevant frontend and backend have been inspected. Plan implementation in meaningful, logically ordered increments, validating each before proceeding rather than bundling too much work or splitting it into trivial micro-steps.

**Gate:** obtain the owner's approval of the architecture and any explicit feature decisions before implementing dependent application features. On 2026-10-21, the owner directed implementation of the Phase C question-bank foundation. That authorization covers the editable/canonical schema and validation foundation; it does not approve learner audio recording or automated oral assessment. The owner's latest instruction and approval supersede prior plans and roadmap wording; document any override and follow it.

### Phase C — Editable question bank and validation

Define a human-editable source format and canonical/runtime representation suited to all approved English question types, including reading passages, whole-novel tasks, listening prompts and open-ended responses. Specify stable IDs, source/rights metadata, answer keys or scoring rubrics, explanations/feedback, difficulty, level/stage, Explore/Extend and module/activity placement.

Create automated checks for required fields, duplicate/missing IDs, answer validity, bank quantities, content-to-activity mappings, metadata, source/rights records and synchronization/drift. Preserve India-specific rights and suitability checks for every selected text and edition.

**Gate:** validate and round-trip a small representative sample across materially different response formats before scaling up content authoring.

### Phase D — Learner delivery

Implement the stage/module/activity navigation and player using the approved curriculum and validated bank. Support the response mode each question actually requires; do not force writing, listening or oral-response prompts into an unsuitable multiple-choice format. A 10-question attempt must draw from the larger approved bank without permanently hiding the remaining eligible questions.

**Gate:** verify representative Explore and Extend activities and each distinct response/scoring mode before broad content rollout.

### Phase E — Persistent progress and complete analytics

Build and verify English Aptitude's progress and analytics from the Level 1 foundation. The accepted design must support cumulative attempts, accuracy, completion, stage/activity progress, question-type performance, Explore/Extend comparison, per-question timing where available, and growth over time using recorded data only.

Define and test a transparent rubric for open-ended responses before reporting them as scored. Keep progress persistent across sessions and ensure English Aptitude records do not leak into or alter Reasoning or Foreign Languages analytics. Do not reset earlier records when new stages are added.

**Gate:** Level 1's full analytics must work across all six stages before any Level 2–9 rotation begins. Each later stage must feed the same cumulative architecture without breaking previously accepted data or reports.

### Phase F — Stage-by-stage implementation and release

Apply the sequence in Section 2. For each stage, complete its approved content, learner experience, scoring, persistence and analytics; run the applicable automated checks; deploy a coherent verified change; confirm the exact GitHub commit and Vercel deployment; and have the owner perform live production verification.

**Acceptance gate:** no stage is accepted and no next stage begins until the current stage's production checks pass. If a check fails, fix the current stage and rerun affected checks before proceeding.

### Phase G — Regression and final audit

Test shared login/navigation and ensure Foreign Languages and Reasoning continue to work, their progress remains unchanged, and access controls still behave correctly. Run automated checks for IDs, bank counts, delivery, scoring, persistence, analytics, routes and build/prebuild validation. After all nine levels and six stages are complete, perform a comprehensive content-quality, analytics, data-separation and production audit.

## 4A. Local command preparation and advance notice

The owner is not a developer and needs clear, advance notice before any terminal/Command Prompt work.

- **Give at least one logical implementation step/checkpoint in advance** whenever a future step will require the owner to run a command. State which upcoming checkpoint will need commands, why they are needed, which computer to use, and the exact application/folder prerequisites.
- Do not first reveal a required command at the moment it must be run. Provide the heads-up in the preceding step/stage/wave/phase, as appropriate, so the owner has time to prepare.
- Before asking the owner to run commands, confirm that the command is actually necessary, the correct repository/branch and local folder are identified, and the command is safe. Give copy-paste-ready commands and explain what successful and failed output looks like.
- Avoid repeating checks already completed unless code, branch, environment or test requirements have changed. Keep terminal requests grouped into meaningful verification checkpoints rather than unnecessary micro-steps.
- The current local checkout is on the owner's **Windows laptop**, in `D:\Aprioriedunext`, with GitHub Desktop installed there. Do not ask the owner to download/clone the project to the MacBook or move development there unless the owner explicitly changes this preference.
- The schema, sync, sample-bank, all-12-question-type, all-10-response-format, stage-bank quality, registry/integration, individual content-set and combined real-bank coverage checks have been reported passing on Windows. Do not ask to rerun them unless related code or test requirements change. Give advance notice before any future Windows command checkpoint.
- Running commands, committing code, merging to `main`, and deploying to production are separate actions. Do not treat test execution as approval to merge or deploy; follow the applicable approval gate.

## 5. Per-stage acceptance checklist

A stage is accepted only when all applicable items pass:

- Approved level/stage outcomes, activity minimums, bank quantities and Explore/Extend allocations are preserved.
- All required content is age-appropriate, fact-checked, rights-checked and mapped to stable IDs.
- Every activity and question reference resolves; correct answers, explanations and scoring rules agree across editable source, canonical records and delivered content.
- Each question uses an appropriate interaction and scoring mode.
- Navigation, learner feedback, completion and repeat practice work.
- Attempts and progress persist for the authenticated learner and remain isolated from other products.
- Analytics reflect supported stored records, correctly aggregate this stage, preserve prior data and show missing values honestly.
- Automated validation and production build/deployment checks pass.
- The owner verifies the exact live production scope and explicitly accepts the stage.

## 6. Risks and controls

- **Large banks vs 10-question attempts:** validate the whole authored bank and separately test repeat delivery/coverage; do not truncate the bank to one attempt.
- **Backend uncertainty:** inspect the existing integration before defining persistence changes; never invent endpoints or duplicate identity systems.
- **Mixed response formats:** establish rendering, feedback and scoring per question type; rubric-based responses must not be reported as automatically correct unless genuinely scored.
- **Text rights and suitability:** verify the exact edition/translation/adaptation for use in India and record the decision before publication.
- **Cross-product regressions:** isolate English-specific modules and records; regression-test Reasoning and Foreign Languages whenever shared code changes.
- **Analytics integrity:** use durable, supported records; do not reconstruct missing history or reset earlier progress.
- **Deployment instability:** complete and validate a coherent stage release before deploying; resolve failed build/validation checks rather than bypassing them.

## 7. Current status and next action

- Step 1 curriculum direction: provisionally approved; candidate texts still require suitability and rights checks.
- Step 2 question types, level mapping, stage sequence and quantities: approved and documented.
- Step 3 roadmap and rollout order: approved and documented here.
- Phase A source-level codebase audit: **Completed 2026-10-20**; findings recorded in `docs/ENGLISH_APTITUDE_PHASE_A_AUDIT.md`. This was not a local build, live browser, API or production test.
- Phase B architecture proposal: **Prepared 2026-10-20** in `docs/ENGLISH_APTITUDE_ARCHITECTURE_PROPOSAL.md`. The owner authorized Phase C question-bank foundation work on 2026-10-21; audio recording and automated oral-assessment decisions remain pending and are not included in this implementation.
- Phase C1 schema/validator and representative schema tests: implemented on `english-aptitude-phase-c-schema`; the owner ran `npm run english-aptitude:test-schema` on Windows and reported that it passed.
- Phase C2 editable-to-canonical conversion, canonical-to-editable conversion, metadata-preservation checks and round-trip/negative tests: implemented on the same branch. The owner ran `npm run english-aptitude:test-sync` on Windows and reported that it passed.
- Phase C3 sample-bank fixture and test runner: implemented on the same branch. The owner ran `npm run english-aptitude:test-sample-bank` on Windows and reported that it passed. The fixture is a small, draft-only Level 1 Stage 1 workflow sample with original text, one passage, Explore/Extend records, source/rights metadata and multiple response formats. It is explicitly **not** a complete curriculum bank; activity IDs are provisional pending implementation of the real activity registry.
- Phase C4 passage-registry validation: implemented on the same branch. Bank validation now checks passage record shape, unique passage IDs, required source/rights metadata, unresolved passage references, and conflicts between registered passage text and duplicated question passage text. Inline passage text remains supported when a bank does not define a passage registry. The owner ran `npm run english-aptitude:test-sample-bank` on Windows after these checks were added and reported that the sample-bank tests passed.
- Phase C5 full question-type coverage: added `scripts/testEnglishAptitudeQuestionTypes.js` and `npm run english-aptitude:test-question-types`. The owner ran the command on Windows and reported that all 12 approved question types, representative response formats, passage links, metadata, canonical validation, round-trip integrity and invalid response cases passed. The first run exposed `undefined` values in the JavaScript test fixture; the fixture was corrected to omit those fields, and the corrected test then passed.
- Phase C6 response-format coverage: added `scripts/testEnglishAptitudeResponseFormats.js` and `npm run english-aptitude:test-response-formats`. The owner ran this command on Windows and reported that all 10 supported response formats, selection and true/false answer-key rules, rubric/guidance requirements, listening compatibility and invalid-format rejection passed.
- Phase C7 complete-stage bank quality: implemented and verified on Windows. The owner ran `npm run english-aptitude:test-stage-bank-quality` and reported that all six stage totals, story allocation, 20 questions per reading passage, 10+10 allocation for each other type, and negative quantity/half-allocation cases passed.
- Phase C8 L1/S1 activity registry: implemented on the same branch in `src/Data/EnglishAptitude/englishActivityRegistry.js`. It defines three modules and eight stable activities (five Explore and three Extend), supported question types per activity, explicit slots for the three nonfiction passages, and a whole-book study activity for Novel 1. It includes validators for registry integrity and each question's activity/module/half/type mapping. The sample bank was remapped from provisional IDs. The owner ran `npm run english-aptitude:test-activity-registry` on Windows after a missing-import fix; both the registry and updated sample-bank tests passed. Follow-up implementation adds checks that questions in passage-slot activities reference the registered passage type, Explore/Extend half and ordinal order; those new checks are pending local verification.
- Phase C9 Stage 1 integration fixture: added `scripts/testEnglishAptitudeStageOneIntegration.js` and `npm run english-aptitude:test-stage-one-integration`. A synthetic full-sized Stage 1 bank is assembled in the test to ensure curriculum quality rules and the real L1/S1 registry work together: 320 questions, 200 Explore/120 Extend, per-passage quotas, all ten other type allocations, valid registered activity/module/type mappings, required passage-slot references and every activity represented. Passage slot order is scoped within each half (Explore nonfiction passages 1 and 2; Extend nonfiction passage 1). It creates no real curriculum content. The first local run exposed incorrect destructuring of the converter's direct return value in the integration test; this was corrected. The owner subsequently reported the integration/registry checks passing.
- The first real Stage 1 reading-content slice, `english-L1-S1-story-01.json`, passed the owner's Windows run of `npm run english-aptitude:test-story-set`: 20 unique Explore comprehension questions, registered mapping, three response formats, answer validity, metadata and round-trip integrity. It remains draft content pending editorial review.
- Two original Grade 3 Explore stories, `english-L1-S1-story-01.json` and `english-L1-S1-story-02.json`, have been authored with 20 comprehension questions each. On 2026-10-21, the owner ran `npm run english-aptitude:test-story-set` on Windows and reported that both passed: unique question IDs, registered mapping, three response formats, answer validity, metadata, answer-option length balance and round-trip integrity. Both remain draft content pending editorial review.
- A third original Grade 3 Explore story, `english-L1-S1-story-03.json` (*The Kite That Would Not Fly*), has been authored with 20 comprehension questions and added to `scripts/testEnglishAptitudeStorySet.js`. It uses the registered Explore story activity, has balanced correct-answer positions (4 per option position), and 4/16 longest/tied-longest correct answers (25%, below the preferred 30% ceiling). On 2026-10-21, the owner ran `npm run english-aptitude:test-story-set` on Windows and reported that the expanded test passed for all three original Explore stories: 20 unique comprehension questions per story, registered Explore mapping, three response formats, answer validity, metadata, answer-option length balance and round-trip integrity. All three stories remain draft pending editorial review.
- **Answer-length cue prevention (added 2026-10-21):** English Aptitude has its own `src/Data/EnglishAptitude/englishOptionQuality.js` safeguard, modeled on the verified Reasoning rule without importing Reasoning code or data. Canonical question validation rejects only an *isolated* correct option that is at least 2.5× the nearest competing option and at least 25 characters longer (or the equivalent extreme-short cue); ordinary natural variation is allowed. On 2026-10-21, the owner ran `npm run english-aptitude:test-option-quality` on Windows and reported that extreme long/short cues were rejected, natural variation and tied lengths accepted, and distribution auditing passed. The story and nonfiction-set tests separately enforce the preferred under-30% longest/tied-longest correct-option benchmark.
- The first original Level 1 Stage 1 Explore nonfiction set, `english-L1-S1-nonfiction-explore-01.json`, has been authored: an original Grade 3 informational passage, 20 questions (16 single-select, 2 true/false, 2 evidence responses), stable IDs, registered Explore passage-slot metadata, original-text rights metadata, balanced answer positions and a designed 0/16 longest/tied-longest correct-option rate. A dedicated `scripts/testEnglishAptitudeNonfictionSet.js` and `npm run english-aptitude:test-nonfiction-set` check passage mapping, schema, response counts, answer validity, metadata, length balance and round-trip integrity. The owner reported the nonfiction-set checks passing on Windows; the content remains draft pending editorial/factual review.
- The owner ran `npm run english-aptitude:test-nonfiction-set` on Windows on 2026-10-21 and reported that the first Explore nonfiction set passed: original passage, 20 unique questions, 16 single-select/2 true-false/2 evidence responses, registry mapping, rights metadata, balanced answer positions and lengths, and round-trip integrity.
- The second original Level 1 Stage 1 Explore nonfiction set, `english-L1-S1-nonfiction-explore-02.json`, is *From Kitchen Scraps to Compost*, with 20 questions (16 single-select, 2 true/false, 2 evidence responses), registered as Explore nonfiction passage slot 2. Its correct answer is longest/tied-longest in 3/16 single-select items (18.75%), with evenly distributed answer positions. On 2026-10-21, the owner ran `npm run english-aptitude:test-nonfiction-set` on Windows and reported that both Explore nonfiction sets passed schema, mapping, rights metadata, response-format counts, answer-position/length checks and round-trip integrity. Both sets remain draft pending editorial/factual review.
- The complete approved 320-question L1/S1 bank is now authored across 16 editable source banks and has passed the combined coverage test. The test assembles the banks in memory; a learner-facing delivery integration is not yet implemented. No changes have been merged to `main`, and no production deployment has been performed.

## Verified incremental content checkpoint — 2026-10-23

- The owner reported that the dedicated Paragraph Improvement test passed on Windows. The original Level 1 Stage 1 bank contains 20 draft questions (10 Explore / 10 Extend) and validates IDs, activity mappings, schema, original-content/rights metadata, explanations, answer-position balance, answer-length cues, and round-trip integrity.
- Sentence Ordering, Combining and Construction contains 20 original draft questions (10 Explore / 10 Extend; nine single-select and one rubric-guided reorder item per half). The owner reported that `npm run english-aptitude:test-sentence-ordering` passed on Windows.
- Short Written-Response Prompts contains 20 original draft prompts (10 Explore `short_text`, 10 Extend `long_text`) with guidance and multi-criterion rubrics. The owner reported that `npm run english-aptitude:test-written-response` passed on Windows, confirming schema, registered mappings, metadata, rubric/guidance, and round-trip integrity.
- Final approved question type implemented: Listening Comprehension and Oral-Response Prompts. Added `content/EnglishAptitude/editable/L1/S1/english-L1-S1-listening-oral-response.json` with 20 original draft items (10 Explore / 10 Extend; each half has five `listening_text_response` items and five `oral_prompt` items). Each item includes an original read-aloud stimulus in `listeningText`, response guidance, feedback, and a multi-criterion rubric. This is a text stimulus for read-aloud delivery, not a recorded audio asset. The owner has now reported that `npm run english-aptitude:test-listening-oral` passed on Windows.
- Combined real-bank coverage checkpoint implemented: added `scripts/testEnglishAptitudeCombinedStageCoverage.js` and `npm run english-aptitude:test-combined-stage-coverage`. The first owner-run exposed an actual taxonomy allocation mismatch: 10 questions in the three nonfiction passage banks were tagged `inference_supporting_evidence`, inflating that type to 30 and reducing nonfiction comprehension to 50. Corrected those 10 passage-context questions to `nonfiction_passage_comprehension` while retaining their evidence/inference prompts and response formats; the dedicated standalone inference bank remains 20 questions. The content taxonomy mismatch was corrected. The owner subsequently reported that the combined coverage test passed after the follow-up ID and passage-metadata fixes; see the verified checkpoint dated 2026-10-26.
- All authored content remains draft pending editorial and pedagogical review. The current local checkout is `D:\\Aprioriedunext`, branch `english-aptitude-phase-c-schema`. No merge to `main` and no production deployment has occurred.

- **Follow-up to the 2026-10-23 combined coverage test:** the next local run exposed duplicate Explore/Extend `q09` IDs in `english-L1-S1-sentence-ordering-combining-construction.json`. Renamed the two later duplicate records to `eng-l1-s1-sentence-ordering-explore-q10` and `eng-l1-s1-sentence-ordering-extend-q10`, preserving all 20 questions and their content. The owner subsequently reported the combined coverage test passing after this ID correction.
- **Follow-up to the combined coverage test:** the next run reached complete-stage curriculum validation and identified missing `half` metadata on the three Explore short-story passage records. Added `"half": "explore"` to each passage in the three story source banks (without changing story or question content). The owner subsequently reported that `npm run english-aptitude:test-combined-stage-coverage` passed after pulling these metadata corrections.


## Verified combined-bank checkpoint — 2026-10-26

- The owner reported that `npm run english-aptitude:test-combined-stage-coverage` passed on Windows after pulling the latest branch changes.
- The test validates all 16 expected editable L1/S1 source banks; 320 unique draft questions; the approved 200 Explore / 120 Extend split; all 12 question types and their allocations; three story and three nonfiction passage records; passage/type/half/order mappings; registered activity mappings; editable/canonical round-trip integrity; and detection of a missing question.
- Fixes resolved during the checkpoint: the ten passage-context items were restored to `nonfiction_passage_comprehension` taxonomy while retaining their evidence-oriented prompts/response formats; duplicate sentence-ordering IDs were corrected; and all three Explore story passage records received required `half: "explore"` metadata. Story/question wording was not changed by those fixes.
- **Phase C bank foundation: combined coverage verified for the authored L1/S1 source banks.** Content is still draft and needs editorial, factual, pedagogical and rights review before publication. This test does not verify learner delivery, persistence, analytics, live-site behaviour or production readiness.
- **Next logical checkpoint (started 2026-10-26):** implement and validate an English-scoped L1/S1 module/activity selection route, registry-derived activity overview routes, and an authenticated Courses navigation entry. This is navigation scaffolding only; it does not deliver questions or imply that draft content is approved. Next verify the first single-select preview locally, then inspect secure answer checking and the actual persistence/authentication contract before adding other response formats.
- Working branch remains `english-aptitude-phase-c-schema`; local Windows checkout remains `D:\\Aprioriedunext`. No merge to `main` and no production deployment has occurred.


## Phase D navigation foundation — 2026-10-26

- Added `src/Data/EnglishAptitude/englishStageNavigation.js` to derive module/activity navigation from the stable registry and return a destination only for registered activity IDs.
- Added authenticated English Aptitude dashboard at `/English-Aptitude/Dashboard`, grouping the registered five Explore and three Extend activities under their modules and matching the Reasoning learner UI's responsive card/layout conventions.
- Added registry-checked activity route at `/English-Aptitude/Activity/[activityId]`. It rejects unknown IDs and now contains the first single-select practice preview for the first Explore short-story activity; other activities remain overview-only.
- Added English Aptitude to the authenticated Courses dropdown without altering existing product links.
- Added `npm run english-aptitude:test-stage-navigation` to test module grouping, Explore/Extend counts, registered destinations and rejection of unknown/unimplemented activities.
- **Not yet verified:** local test/build, deployed preview, question rendering/scoring, saved attempts/progress, analytics, production accessibility and public-site behaviour. Authored questions remain draft. No merge to `main` or production deployment.


## Phase D first response-mode preview — 2026-10-26

- Added `src/Data/EnglishAptitude/englishQuestionPlayer.js` with a tested helper to sample a 10-question single-select attempt from the registered story activity's 20-question bank and grade a selected option.
- Updated `/English-Aptitude/Activity/[activityId]` to render the complete story, answer options, check-answer feedback, explanations, progress within the attempt, and a temporary result for `ENG-L1-S1-EXP-01`. Each new attempt samples ten items from the larger bank.
- Other activities explicitly remain unavailable for question delivery until their response/scoring modes are implemented.
- Added `npm run english-aptitude:test-single-select-player` covering unique attempt selection, compatible formats, correct/incorrect grading, empty-answer rejection and insufficient-bank guards.
- **Preview-only limitation:** the bank is draft, the score/progress is not persisted, and the current client-side preview bundles the draft bank including answer keys. It must not be merged/deployed as a learner release. Before public delivery, move answer checking behind a verified server-side authorization boundary; inspect the existing auth/backend contract rather than inventing one.
- **Still unverified:** local test execution, lint/build, accessibility, secure server-side grading, persistent attempts, analytics and production behaviour. No merge to `main` or production deployment.
