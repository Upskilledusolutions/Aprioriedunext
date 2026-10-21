# English Aptitude — Phase B Architecture Proposal

**Prepared:** 2026-10-20  
**Status:** Architecture direction approved for staged implementation; Phase C question-bank foundation is in progress on `english-aptitude-phase-c-schema`. No application changes have been merged to `main` or deployed.  
**Frontend:** `Upskilledusolutions/Aprioriedunext`, branch `main`  
**Production:** https://www.upskilleduonline.com  
**Deployment:** Vercel team `Upskilledusolutions / upskilledusolutions-projects`  
**Backend:** `Upskilledusolutions/Backend`; Render service `https://backend-575y.onrender.com`

This proposal follows the completed source audit in `ENGLISH_APTITUDE_PHASE_A_AUDIT.md` and the approved curriculum/specification. It defines the product architecture and delivery sequence, not a file-by-file implementation plan.

## 1. Product experience and navigation

English Aptitude should use the same learner-facing design language and navigation conventions as Reasoning Skills: responsive headings, concise eyebrow labels, restrained navy/blue with sparing accent colours, white rounded cards, subtle borders/shadows, consistent spacing, clear back links, responsive grids, progress summaries and consistent action links.

Proposed English learner route structure:

- `/English-Aptitude` — product landing/entry page.
- `/English-Aptitude/Dashboard` — English dashboard and Level selection.
- `/English-Aptitude/Level/[levelId]` — the selected level's six stages and their Explore/Extend activities.
- `/English-Aptitude/Activity/[activityId]` — English-specific activity experience.
- `/English-Aptitude/Analytics` — cumulative English Aptitude analytics.

The final route names may be adjusted to fit repository conventions during implementation, without changing the intended user journey. Add English Aptitude to the authenticated Courses navigation without removing or unintentionally reordering existing products. Keep mobile navigation, return paths and analytics access coherent with the Reasoning experience.

Use verified Reasoning presentation patterns as the reference, not blind reuse of its player or data logic. Prefer English-scoped styling. Do not change global colour tokens to achieve the visual match because the audit found that some token names do not match their actual colours.

## 2. Shared systems and product boundaries

- **Authentication:** use the existing account/login identity; do not create a second login system. Trace actual route-guard behaviour before applying English access checks.
- **Shared UI:** reuse the common layout and presentation primitives only where their dependencies are understood. Any shared Navbar change must be regression-tested.
- **English-specific systems:** maintain separate curriculum/activity mappings, stable question IDs, editable/canonical banks, response rendering, scoring/rubrics, attempts, progress and analytics.
- **Persistence:** inspect the full backend configuration, authorization and deployment setup before finalizing the API or database contract. Do not write English attempts to Reasoning endpoints/collections or Foreign Languages records. Use a separately namespaced English persistence model and API if backend persistence is required.
- **Analytics:** start cumulative tracking from Level 1 and preserve records as stages are added. Report only data actually captured; distinguish automatically scored answers from rubric/manual/self-assessed responses. Do not imply automatic scoring where it does not exist.
- **Access:** design and test explicit authenticated access and level authorization, including the established mastertrainer access rules, without changing existing products' permissions.

## 3. Content and learner delivery

Follow the approved nine-level, six-stage curriculum, the 12 question types, the 300/320 per-stage bank totals, all reading allocations, minimum five Explore and three Extend activities, and all quality/rights rules in the approved specification and roadmap.

Establish an English-specific human-editable source and validated canonical/runtime representation. The format must support passages and linked comprehension questions, whole-novel study tasks, listening prompts, multiple-choice items, constructed sentences, written responses and rubric-based answers. Use stable IDs and validate required fields, duplicates, answer/rubric validity, activity mappings, counts, metadata, text-source/rights records and source-to-canonical drift.

Build only a small representative sample first, covering materially different response formats. Validate that sample and the source-to-runtime round trip before expanding the bank. Do not generate the full bank in one batch.

A 10-question attempt is a session size, not the full bank size. Delivery must allow repeat practice and continued use of the larger authored pool.

## 4. Listening, recording and oral assessment — decision required

The curriculum explicitly includes listening comprehension and oral-response prompts. Audio playback for listening material is therefore required where those activities use audio.

**Owner-approved initial-release scope (2026-10-21):**
- Include accessible audio playback for required listening activities.
- Learner audio recording is not a dependency for the initial release.
- Automated oral scoring is not part of the initial release and must not be represented as implemented. Revisit it only after a separate feasibility review and explicit approval covering assessment validity, accessibility, consent/privacy, data retention and explainability.
- Listening comprehension and appropriate oral-response paths remain curriculum requirements; they must not be silently removed or forced into unsuitable multiple-choice interactions.

These scope decisions do not authorize recording or automated oral scoring as part of the current Phase C work.

## 5. Delivery order and verification gates

1. **Phase B approval:** approve this architecture and the audio/oral-assessment decision. No application code is changed before this gate.
2. **Phase C — bank foundation:** implement the editable/canonical format and automated validation; prove it with a small, representative sample and round-trip checks.
3. **Phase D — learner foundation:** implement the English navigation and learner activity flow using validated sample content, with Reasoning-matched presentation and correct response modes.
4. **Phase E — persistence and analytics:** implement English-specific durable attempts/progress and cumulative analytics, then verify identity, authorization and data isolation.
5. **Phase F — content/stage rollout:** complete Level 1 Stages 1–6 sequentially, with live owner verification and acceptance after each stage. Only then deliver Stage 1 across Levels 2–9, then Stage 2 across Levels 2–9, continuing in stage waves through Stage 6.
6. **Regression:** after any coherent change to shared navigation/authentication, test English, Reasoning and Foreign Languages. Run build, content validation, persistence, analytics and access checks relevant to the change before live acceptance.

Implementation should proceed in meaningful, logically ordered increments: avoid both large bundled coding batches and trivial one-line phases. Verify each increment before beginning the next. The owner may override this proposal or prior roadmap decisions; record such decisions clearly and follow the owner's final instruction.

## 6. Acceptance conditions

- English entry, dashboard, level/stage/activity navigation and analytics follow the Reasoning visual/navigation pattern and work on mobile and desktop.
- Existing Reasoning and Foreign Languages navigation, authentication, learner records and analytics remain unaffected.
- English uses appropriate response and scoring modes for all approved question types.
- Editable/canonical content stays synchronized and passes validation; text rights and suitability are checked before publication.
- English attempts and progress persist for the correct learner and remain isolated from other products.
- Cumulative analytics are accurate, transparent about scoring methods, and retain previous records as new stages are released.
- Each stage passes automated checks and the owner's live production verification before the next stage begins.

## 7. Approval status

**Approved direction, implementation still in progress.** The owner authorized Phase C question-bank foundation work on 2026-10-21 and approved the initial-release audio/recording/oral-assessment scope above. Phase A audit is complete. This proposal is not evidence of a successful production build, live browser check or deployment. No API/database contract is treated as verified until the backend trace and implementation tests establish it.
