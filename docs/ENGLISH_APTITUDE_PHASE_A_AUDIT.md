# English Aptitude — Phase A Codebase Audit

**Audit date:** 2026-10-20  
**Repository inspected:** `Upskilledusolutions/Aprioriedunext`, branch `main`  
**Backend reference inspected:** `Upskilledusolutions/Backend`, branch `main`  
**Status:** Source-level audit completed; architecture proposal and implementation have not started.  
**Boundary:** This record describes files inspected through GitHub. It does not claim a local build, live browser test, API test or production verification was performed.

## 1. Verified current structure

- The frontend uses Next.js 14 with the Pages Router, React and Redux. The shared app wrapper is `src/pages/_app.js`.
- `components/Layouts.js` wraps pages with the common `components/Navbar.js` and Footer. Navbar edits can therefore affect multiple products and require regression checks.
- Existing Reasoning learner routes inspected include:
  - `/Reasoning` — introductory track-selection page;
  - `/Reasoning/Dashboard` — learner dashboard with progress and Quantitative/Verbal choices;
  - `/Reasoning/Quantitative/Dashboard` and `/Reasoning/Verbal/Dashboard` — track dashboards;
  - `/Reasoning/Activity/[activityId]` — shared activity-player route;
  - `/Reasoning/Analytics` — dedicated cumulative analytics.
- The authenticated Courses dropdown in `components/Navbar.js` currently places **Reasoning Skills** first. It also contains Reading Skills, Language Skills, Writing Skills and links to the two Reasoning tracks. No English Aptitude learner entry was found in the inspected menu. The authenticated name menu already separates Language Club from Reasoning Analytics.
- Reasoning pages establish a recognizable visual pattern: large responsive headings, concise eyebrow labels, restrained navy/blue and accent colours, white cards with subtle borders/shadows, rounded corners, clear back links, responsive card grids, progress summaries and consistent action links. Styling is currently implemented largely through page-local inline style objects, with global tokens in `src/styles/globals.css`.
- The global token names are not reliable descriptions of their actual colours: for example, `--blue` is currently a coral/red RGB value and `--orange` is blue. English-specific styling should reuse verified Reasoning visual values/components or add scoped tokens, not change global colours for the whole site.
- The current app wrapper's protected-route selection is unusual: `src/pages/_app.js` applies `ProtectedRoute` only to paths in its `noAuthRequired` list, while most other pages render directly. The Reasoning dashboard also performs its own redirect to `/Auth`. New route protection must be deliberately designed and tested; do not copy assumptions based on variable names alone.
- Reasoning's activity player imports Reasoning-specific curriculum, modules, question banks, calibration and progress helpers. The backend has a Reasoning-specific Mongo/Mongoose attempt model and authenticated `/api/reasoning/attempts` routes. Those contracts use Reasoning track values and Reasoning-specific records and must not be reused unchanged for English Aptitude.

## 2. English Aptitude gaps established by this audit

- The curriculum, question-type specification and implementation roadmap exist in `docs/`, but no English Aptitude learner route or dashboard was found in the inspected page paths and repository search results. The existing payment receipt's course dropdown includes the label “English Aptitude”; that is not evidence of a learner-facing product implementation.
- No English Aptitude-specific question-bank/runtime, activity player, persistent progress model or analytics implementation was identified in the inspected files/results.
- The inspected backend integration documents and route/model files establish Reasoning persistence, not an English Aptitude persistence contract. Any required backend changes must be determined after tracing the complete backend route/model configuration in Phase B; no English endpoint or schema should be assumed.
- Reasoning's 10-question attempt delivery, question metadata and analytics are designed around Reasoning's own tracks and response contract. English's 12 approved question types include reading, listening and open-ended work, so reuse of the Reasoning player/data model is not yet justified without a format-by-format compatibility review.

## 3. Required design and navigation direction

The owner has explicitly required English Aptitude to match Reasoning Skills in **design, aesthetics and navigation**. Treat the established Reasoning learner experience as the visual and navigation reference, while keeping English Aptitude content, routes, question interactions, progress, analytics and records logically separate.

The Phase B proposal must specify:
- a consistent English Aptitude entry and dedicated dashboard/learning navigation that fits the existing Reasoning visual hierarchy;
- matching responsive layout, typography, card treatment, spacing, back/forward navigation conventions, action styling and progress presentation;
- an English-specific route tree and clear return paths, without hijacking or renaming existing Reasoning/Foreign Languages routes;
- the exact safe reuse boundaries for shared layout, visual primitives and navigation patterns;
- isolated English content, response/scoring, progress and analytics logic;
- the effect of any shared Navbar change and regression checks for Reasoning and Foreign Languages.

Do not change global CSS colours or redesign the other products just to make English Aptitude match. Prefer scoped styles/tokens and small shared components only where source inspection proves they are safe.

## 4. Reuse vs. build decision inventory

**Candidate for reuse after dependency verification**
- Existing shared app layout and global typography foundations.
- Reasoning's visual conventions and reusable presentation patterns (headers, cards, progress summaries, stage/activity navigation).
- Shared authentication identity, if existing access rules can be safely extended without creating a second login.
- General validation/testing conventions, adapted to English's different question formats.

**Must be English-specific unless Phase B proves a safe shared abstraction**
- Curriculum and Level/Stage/Explore/Extend/Module/Activity mappings.
- Stable English question IDs and editable/canonical content sources.
- Question rendering and response capture for English question types.
- English grading/scoring rules, especially rubric-based open-ended responses and any approved oral-assessment feature.
- English learner progress, attempt records, cumulative analytics and data/API namespace.
- English stage release/access configuration.

**Not approved for implementation yet**
- Any specific route/API/database schema.
- Reuse of the Reasoning activity player or Reasoning attempt endpoints.
- Audio playback/recording/automated oral scoring delivery scope; these remain subject to the explicit Phase B decision gate in the roadmap.
- Any changes to Reasoning or Foreign Languages beyond a separately approved, verified shared-system dependency.

## 5. Risks and controls

1. **Shared navigation regression:** add English Aptitude without removing/reordering existing approved entries unintentionally; verify authenticated and unauthenticated menus, mobile menu, name menu and current Reasoning/Foreign Languages routes.
2. **Cross-product data leakage:** do not write English attempts into Reasoning or Foreign Languages stores; test learner identity, persistence and analytics isolation.
3. **Visual drift:** match Reasoning page hierarchy and interaction patterns while keeping English styling scoped; avoid global CSS changes unless explicitly justified.
4. **Response-mode mismatch:** review each approved question type before selecting a player or grading model. Do not force writing, listening or oral-response tasks into multiple choice.
5. **Authentication/access ambiguity:** verify the existing route protection behaviour and access model before defining English route guards.
6. **Unverified deployment assumptions:** this was a source audit only; deployment configuration, local build, backend runtime and public-site behaviour have not been tested as part of this audit.

## 6. Audit conclusion and next action

Phase A source inspection is complete. The next step is **Phase B: prepare the English-specific architecture and file-level implementation proposal**, including the route/navigation design that matches Reasoning, the exact safe reuse boundaries, English-specific persistence/analytics, response-mode strategy, and the audio/oral-assessment decision. Present the proposal for the owner's approval before changing application code.

No application code, backend configuration or production deployment was changed by this audit.
