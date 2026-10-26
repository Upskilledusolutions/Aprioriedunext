# English Aptitude — Phase B Architecture Proposal



> ## BINDING OWNER RULE — AUTHENTIC PUBLISHED READING TEXTS ONLY
>
> **No original fiction or nonfiction reading passages may ever be used.** Every learner-facing fiction or nonfiction passage must be an authentic excerpt from a published work by a recognized literary writer/author, or an authentic published translation whose own rights status is verified for use in India. Do not create original passages, AI-written retellings, paraphrases, modernizations, or imitations of an author's style.
>
> **Rights failure means replacement, never original writing.** If a text, edition, excerpt, or translation is not confirmed eligible for use in India, replace it with another authentic published work by a recognized author that serves the same learning purpose and has comparable syntactic and semantic complexity appropriate to that level. Prefer a title from the owner's approved reading list. If no eligible approved alternative is available, stop and ask the owner to approve a replacement; never fill the slot with invented text.
>
> **Source approval is mandatory.** Use the owner's approved reading list as the source of truth. Record the original author, title, publication/edition, translator if applicable, exact source URL and excerpt location, India-specific rights basis, and owner/editorial approval. The underlying work's public-domain status does not automatically clear a modern translation, edition, annotations, or illustrations. Original questions and feedback may be authored about an eligible text; the reading passage itself may not be original.
>
> **Text-only replacement and regression protection.** For the current content-replacement work, change reading text and only the passage metadata strictly required to identify its authentic source. Preserve existing question-bank structure, IDs where valid, question counts, response formats, answer mappings, player/UI, navigation, analytics, authentication, and all previously completed build functionality. Do not undertake unrelated refactoring or unnecessary checks. The owner will review the content directly on the website. Once a stage's text replacement is accepted and that stage is ready to go live, publish that completed stage as the corresponding public live update; do not publish unreviewed content or bundle unrelated changes. No build, feature, or prior stage may regress.

**Prepared:** 2026-10-20  
**Status:** Architecture direction approved for staged implementation. The Phase C editable/canonical bank foundation and combined L1/S1 source-bank coverage test have passed on `english-aptitude-phase-c-schema`; authored content remains draft, and learner delivery/persistence/analytics are not yet verified. No application changes have been merged to `main` or deployed.  
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

**Approved direction, implementation still in progress.** The owner authorized Phase C question-bank foundation work on 2026-10-21 and approved the initial-release audio/recording/oral-assessment scope above. Phase A audit is complete. On 2026-10-26, the owner reported that the combined L1/S1 coverage test passed for all 16 editable source banks (320 unique draft questions, 200 Explore / 120 Extend, all 12 question types, registered mappings, and round-trip/gap checks). This validates bank coverage only; editorial/rights review, learner delivery, persistence, analytics, production build and live behaviour remain unverified. No API/database contract is treated as verified until the backend trace and implementation tests establish it.


## Phase D navigation foundation — 2026-10-26

English-scoped L1/S1 dashboard and registered activity-overview routes have been added, along with a registry-derived navigation helper, authenticated Courses link, and focused navigation test. This is navigation scaffolding only and is not an interactive question player. Local tests/build and deployment have not yet been run. Next increment: implement and test one representative response mode using validated bank data, without inventing persistence APIs.


## Phase D single-select preview — 2026-10-26

The first registered Explore short-story activity now has a branch-only 10-question single-select preview with option selection, immediate feedback/explanation and a temporary result. The 20-question source bank remains draft. This is not release-ready: it does not persist progress, and its client-side preview currently includes answer keys in the bundled draft data. Before any public delivery, answer checking must move behind a verified server-side authorization boundary after the existing auth/backend contract is inspected. Other response formats, persistence, analytics, local build and live behaviour remain unverified. No merge to `main` or production deployment.


## Secure grading boundary — 2026-10-26

The existing Backend has a shared signed HttpOnly session and `requireAuth`. The existing Reasoning attempt endpoint accepts client-provided correctness, so it must not be reused as authoritative English Aptitude grading. A separate, unmerged Backend branch `english-aptitude-secure-grading` now contains a feature-flagged grading prototype for the 16 single-select items in the first Explore story activity. It returns correctness/feedback without exposing the answer key, and requires shared authentication. It is disabled by default and has not been tested locally or deployed.

This prototype duplicates the answer key from the frontend editable bank and does not implement attempt persistence, analytics, or an English Aptitude access-entitlement policy. Those limitations must be resolved/reviewed before enabling. The frontend preview still has client-side draft answers and must not be released publicly. Neither branch has been merged or deployed.

## Secure grading integration update — 2026-10-26

The frontend feature branch imports a generated public preview payload containing only the 16 supported single-select prompts, options and safe passage text. A strict allowlist generator excludes answer keys, correct-answer feedback, explanations and authoring-only fields while preserving the editable source bank. Its source-consistency check and single-select player test passed in the owner's Windows checkout on 2026-10-26 after regenerating the public file.

The learner page no longer grades answers locally. It sends activity ID, question ID and selected option to the disabled-by-default Backend feature-branch route using the shared session cookie and displays correctness/feedback returned by the server. It fails closed when the route is disabled or unavailable: the response remains unscored and can be retried.

**Still unverified:** frontend production build/lint and browser behaviour; an authenticated server request; deployed backend URL/session configuration; and persistent attempts, progress, analytics or an English-specific access entitlement policy. The backend route-security test passed its isolated checks but emitted a malformed database connection-string warning, so database-backed authentication is not verified. Keep both branches unmerged, keep `ENGLISH_APTITUDE_PREVIEW_ENABLED` unset, and do not release draft content. Next checkpoint is frontend build/regression verification, followed by database/session configuration and authenticated testing against an intentionally configured non-production backend.

## Source provenance and release-eligibility gate — 2026-10-26

The owner requires authentic published fiction and nonfiction passages by recognized authors that are public domain for use in India, or authentic published translations whose separate rights status is verified. Original/AI-written reading passages, stories, informational passages, retellings and paraphrases are not permitted. Original question items and explanations may be written around an eligible published source.

Passage validation must be distinct from question validation. A passage may not pass the reading-source gate solely because sourceType, rights.status or an authoring note says original; reading-passage records must resolve to the owner's approved source register and include the exact work/title, author, publication/edition, translator if applicable, source URL and excerpt location, India-specific rights evidence, editorial status and approval. Add automated tests that reject missing/unapproved provenance and any original-source reading passage.

The committed curriculum currently holds five grade-band candidate pools, not the complete approved per-level source inventory, and has no exact nonfiction excerpt inventory. Treat restoration of the earlier owner-approved inventory as a prerequisite. Current original L1/S1 reading passages are unapproved and ineligible for release. Technical validity and test success are not editorial, source or rights approval.

