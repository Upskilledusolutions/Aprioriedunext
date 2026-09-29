# Reasoning Stage Launch and Verification Standard

**Status:** Approved operational source-of-truth standard  
**Approved:** 2026-09-22  
**Last updated:** 2026-09-29  
**Applies to:** Reasoning Levels 1–9, Stages 1–6, Quantitative and Verbal

## 1. Purpose

This standard defines the repeatable way a Reasoning Stage is migrated, exposed to learners, deployed and accepted.

A Stage is not considered launched merely because source code exists, a Question Bank contains records, or Vercel reports Ready. A Stage is launched only after the complete intended learner-facing Stage has been deployed and verified in production.

The same process is used for every Stage, starting again with **Level 1 · Stage 1**.

## 2. Product boundary

Reasoning Skills has a standalone learner-facing product experience separate from Foreign Languages.

The Reasoning dashboard should provide a comparable level of usefulness to the existing language dashboard while remaining independently implemented and visually aligned with the current Reasoning pages. It should use a more refined professional aesthetic and a Reasoning-specific colour scheme.

The dashboard/profile scope includes:

- Reasoning identity and navigation;
- authenticated Courses-menu access with Reasoning Skills first;
- Quantitative and Verbal track selection;
- level and stage progress;
- Continue Learning / resume;
- recent activity;
- cumulative Reasoning progress report;
- cumulative Reasoning leaderboard;
- **mastery and analytics from Level 1 · Stage 1 onward**;
- milestones/achievements where supported.

Reasoning progress, mastery, analytics, points, streaks, achievements and leaderboard data must remain logically separate from Foreign Languages. Quantitative and Verbal remain independently usable.

Mastery and analytics are a required first-release capability for Stage 1. They must expand cumulatively as additional Stages and Levels are verified. They are not a later-phase enhancement.

The durable Reasoning question-attempt persistence and authorization foundation is implemented, deployed and owner-checked. Current analytics use only recorded/supportable data. Unsupported historical values must not be reconstructed or fabricated.

## 3. Stage content model

One editable document represents one **Level + Stage** and can contain both Quantitative and Verbal questions.

Every Reasoning Stage follows the **Level 1 · Stage 1 learner-facing experience as the UI, navigation, functionality and feature blueprint**. The curriculum inventory itself remains stage-specific.

**Per track, per Stage — minimum content contract:**
- at least **5 Explore Activities**;
- at least **3 Extend Activities**;
- therefore at least **8 learner-facing Activities/question sets** in total;
- exactly **10 delivered questions per Activity**.

The number of Modules and the total number of Activities beyond these minimums may vary by Stage and must preserve the approved curriculum for that Stage. Existing Stage 4–6 combinations remain valid where they satisfy the minimums.

Within a Stage:

**Stage → Modules → Activities/question sets → 10 questions per Activity**

The subject matter, lesson content, difficulty and question wording must progress appropriately for the Level and Stage. The learner-facing presentation and behaviour must remain aligned one-to-one with the Stage 1 blueprint.

A Module may contain one or multiple Activities/question sets. Each question set is represented by a distinct stable **Activity ID**; no additional `setId` layer is required unless a separately approved architecture decision introduces one.

Questions retain explicit track, level, stage, half, module and activity mappings.

**Structural gate:** a Stage is noncompliant when either track has fewer than 5 Explore Activities or fewer than 3 Extend Activities. A Stage having both halves present is not sufficient; the minimum counts and the Stage 1 UI/navigation/functionality blueprint must both be satisfied.

## 4A. Reusable Stage/Level implementation template

Every Stage and Level uses the same implementation pattern. Stage-specific code supplies only the data/configuration that changes.

**Shared layer**
- Stage dashboard shell;
- Module/lesson shell;
- common progress calculation;
- shared Activity Player;
- common route/navigation conventions.

**Stage-specific layer**
- Level ID and Stage number;
- stage title/description;
- approved Module inventory;
- approved Activity IDs and Explore/Extend placement;
- question-bank/canonical source and calibration resolver;
- stage route.

**Progress**
- Stage progress = completed Activities / total Activities in that Stage;
- Explore and Extend both count;
- cumulative track progress = completed Activities / total Activities in the currently released scope;
- the Quantitative and Verbal track-dashboard progress bars must use this same cumulative Activity-based numerator and denominator and display a matching percentage/completed-total count;
- the progress bars must not use completed-module counts, fixed denominators or per-Stage-only totals;
- Module completion is a separate status and must not drive Stage/track percentages.

This template must be reused for Levels 2–9. Do not create a new page architecture for a new Level merely because the curriculum content changes.

Implementation is deliberately sequential within a Stage: complete and validate each checkpoint before moving to the next checkpoint. Do not bundle content, UI, validation and deployment work into one unvalidated implementation pass.

## 4. Stage launch workflow

Every Stage follows these checkpoints in order.

### Checkpoint 0 — Baseline audit

Inspect the existing Stage before changing it:

- Quantitative and Verbal modules;
- Explore and Extend structure;
- Activities and Activity IDs;
- current question banks and calibration/delivery;
- known defects;
- navigation and learner-facing routes.

Do not redesign the curriculum or shared Activity Player as part of a normal Stage migration.

### Checkpoint 1 — Human-editable Stage source

Create or complete the one human-editable JSON document for the Level + Stage.

Preserve existing Question IDs when the underlying question remains the same.

The document must represent every intended Module, Activity/question set, track and Explore/Extend placement.

### Checkpoint 2 — Canonical records

Synchronize the editable Stage source into canonical records.

Validate schema, provenance, stable IDs, mappings, answers/options, explanations, timing, difficulty, content mode, duplicates and drift.

Canonical records are generated output and must not be manually edited.

### Checkpoint 3 — Structural learner-facing reconciliation

Before deployment, compare the content records with the actual learner-facing curriculum structure.

For every Module and Stage, confirm:

- the approved Stage-specific Module inventory is intact;
- at least 8 learner-facing Activities/question sets exist for the track;
- at least 5 are Explore and at least 3 are Extend;
- all approved Explore activities exist;
- all approved Extend activities exist;
- any approved Activities above the minimum are preserved;
- each Activity ID resolves correctly;
- no duplicate placeholder Activity is being used where distinct activities are required;
- module sequencing and Previous/Next navigation are correct;
- the learner-facing Stage exposes the complete intended curriculum.

This checkpoint exists specifically to prevent a Stage from containing Extend data that learners cannot reach.

### Checkpoint 4 — Question-quality verification

For every learner-facing Activity:

- exactly 10 distinct substantive questions;
- correct concept/activity alignment;
- correct Explore/Extend placement;
- incremental difficulty progression;
- two-additional-level elevation where required by the calibrated baseline;
- correct Computation / Text-Based Reasoning / Computation + Reasoning classification;
- balanced answer positions;
- no conspicuous answer-length or structural clues;
- valid answers, explanations and timing;
- stable IDs.

**Mandatory answer-length clue audit and record:**
- calculate the **unique-longest correct-answer rate** across the final learner-facing delivery set for the Level + Stage;
- record numerator, denominator and percentage for the full Stage and separately for Quantitative and Verbal;
- record tied-for-longest cases separately;
- the **hard acceptance ceiling is below 50%**;
- **below 30% is preferred**;
- 50% or higher = **FAIL / remediation required** before release;
- 30% to below 50% = below the hard ceiling but requires documented human review before release.

The result must be retained in the Stage verification record. This audit is required independently for every Stage in every Level; do not copy a result from another Stage.

### Checkpoint 5 — Learner-facing implementation

Implement only the UI/runtime changes required to expose the Stage completely.

The Reasoning experience must also provide the standalone Reasoning dashboard/profile experience and expose the Reasoning profile entry through the login icon/name, using the shared learner identity without merging Reasoning and Foreign Languages data.

The authenticated Courses menu must place **Reasoning Skills first** and open the Reasoning Dashboard, where Quantitative and Verbal are independently selectable. In the authenticated name menu, **Language Club** retains the existing Foreign Languages `/Profile` route/features, while **Reasoning Analytics** opens the dedicated Reasoning Analytics experience directly. Name-menu links/buttons must have no text underlines.

Mastery and analytics must already be functional for the Stage being launched, beginning with Level 1 · Stage 1. The Stage's verified activity data must feed the cumulative Reasoning profile.

The target pattern is:

```
Stage
├── Module
│   ├── Explore
│   │   └── Activities
│   └── Extend
│       └── Activities
└── Next / Previous module navigation
```

Do not mix unrelated product redesign or shared-player changes into a Stage launch unless explicitly approved.

### Checkpoint 6 — Pre-deployment validation

Before a deployment-triggering commit, run the available repository validation for:

- syntax;
- imports and paths;
- required files;
- Activity mappings;
- question IDs;
- question counts;
- content-mode metadata;
- difficulty placement;
- canonical validation;
- drift;
- Stage structure;
- learner-facing routes.

Validation must be deterministic and stage-scoped: evaluate independent JavaScript modules in isolated scopes with explicit dependency injection; do not concatenate separate modules into one scope when helper names can collide. Do not pass JSX React components to raw Node `--check`; JSX must be validated by the repository's Next.js compilation path. Do not audit unrelated future Stages as part of the current Stage release.

Deterministic source failures must be resolved before creating the deployment-triggering commit.

### Checkpoint 7 — One coherent deployment

Group the approved, validated Stage change into the fewest coherent deployment-triggering commits.

For a normal Stage launch, the preferred unit is one coherent Stage-level deployment.

Confirm that Vercel evaluates the exact intended GitHub commit and that the deployment is Production / Ready before performing live verification.

### Checkpoint 8 — Complete live production verification

Verify the entire Stage as a learner would experience it.

Every Module must be checked, including both Explore and Extend.

For every Activity/question set, verify:

- activity opens;
- all 10 questions load;
- answer interaction works;
- Previous/Next question behavior works;
- explanation/feedback works;
- timing works;
- scoring and completion work;
- progress updates correctly;
- return navigation works;
- no client-side/runtime error occurs.

At Stage level, verify:

- the approved Stage-specific Module inventory is reachable;
- at least 8 learner-facing Activities/question sets exist for the track;
- at least 5 are Explore and at least 3 are Extend;
- every approved Activity above the minimum is reachable;
- every intended Module is reachable;
- Explore is exposed first;
- Extend is exposed second;
- module Previous/Next navigation works;
- no intended Activity is missing;
- no unintended duplicate Activity is presented.

Also verify:

- the standalone Reasoning dashboard/profile;
- Reasoning Skills appears first in the authenticated Courses menu and opens the Reasoning Dashboard;
- the profile entry reached from the login icon/name;
- Language Club still opens the existing Foreign Languages profile/navigation;
- Reasoning Analytics opens only the dedicated Reasoning Analytics experience;
- authenticated name-menu links/buttons have no text underlines;
- cumulative Reasoning progress;
- Quantitative and Verbal track-dashboard progress bars show the same cumulative Activity-based percentage and completed/total count;
- mastery and analytics generated from the Stage under verification;
- separation from the Foreign Languages profile/data;
- manual Level-access behavior where a Level is being released.

### Checkpoint 9 — Stage acceptance

A Stage becomes **Verified / Launched** only when:

```
content source              ✓
canonical records           ✓
mappings                    ✓
question quality            ✓
Explore/Extend exposure     ✓
learner-facing navigation   ✓
mastery/analytics           ✓
profile access              ✓
cumulative progress         ✓
prebuild validation         ✓
production deployment      ✓
complete live verification ✓
```

A Ready deployment is evidence of successful deployment, not evidence of Stage acceptance.

## 5. Stage sequence

Work proceeds one Stage at a time.

The current sequence is one Stage at a time. Level 1 · Stage 1 is accepted; the backend access/persistence foundation has been implemented, deployed and owner-checked; Level 1 · Stage 2 is implemented and quick-checked but remains pending comprehensive owner verification. Do not start the next Stage until the current Stage is accepted.

The **manual Reasoning Level-access implementation** is the first Reasoning-specific backend feature after the backend foundation. The approved identifiers are `reasoningL1`–`reasoningL9`, and access is selective rather than progressive: any individual level may be assigned directly without prerequisite Level identifiers. The **analytics persistence foundation** is a separate backend/data task afterward. It must establish durable question-attempt storage using only fields the audited backend can support, verify capture and separation from Foreign Languages, and then enable the richer question-level/historical analytics. Stage 2 implementation does not begin until Stage 1 has passed its acceptance gate and both backend sequences are complete.

Completion of a Level is separate from access authorization to the next Level. The next Level is manually enabled using the approved Reasoning Level access identifier (for example, `reasoningL2`, `reasoningL3`) and must retain the same cumulative Reasoning record.

Historical remediation is preserved. A live defect triggers only the targeted correction required by the observed defect.

## 6. Three-stage checkpoints

After Stages 1–3, 4–6 and 7–9 are each live and individually verified, perform a focused three-stage production checkpoint covering:

- navigation;
- module visibility;
- activity launch;
- core scoring/progress;
- obvious runtime errors.

These checkpoints do not replace the per-Stage acceptance gate.

## 7. Nine-level final audit

After all nine Levels are live, perform the comprehensive end-to-end quality audit across all Levels, Stages, tracks, Modules, Explore/Extend activities, question delivery, dashboard/profile, cumulative progress, mastery/analytics, leaderboard and runtime behavior.

## 8. Migration and runtime rules

For migrated content:

```
Human-editable Stage source
        ↓
Synchronization
        ↓
Canonical records
        ↓
Validation / drift detection
        ↓
Canonical delivery validation
        ↓
Shared Activity Player
```

Existing JavaScript banks remain controlled legacy/source pools until the relevant Stage is deliberately migrated and its canonical delivery path is accepted.

Do not manually maintain two competing versions of migrated content.

## 9. Deployment safety

- Validate before every deployment-triggering commit.
- Group related Stage changes into one coherent deployment when practical.
- Do not use Vercel as the first test for deterministic source errors.
- Diagnose a failed deployment from its actual status before creating another deployment-triggering commit.
- If the problem is a rate/build-system condition, do not spend more build attempts on speculative source changes.
- Preserve the exact commit used for verification.
- Do not record a Stage as verified from deployment status alone.

## 10. What does not change

This standard does not redesign:

- the six-stage curriculum;
- the Stage 1 learner-facing UI, navigation, functionality and feature blueprint; Stage-specific Module and Activity counts may vary, subject to the minimum of 5 Explore and 3 Extend Activities per track;
- Quantitative/Verbal separation;
- stable Activity IDs;
- stable Question IDs;
- the shared Activity Player;
- existing Foreign Languages architecture;
- product account identity.

It adds a consistent launch and verification process around the existing architecture.

## Historical foundation note
The backend authorization and durable-attempt work is recorded in the supporting architecture/progress documents. Its implementation is complete and owner-checked; the current Stage gate is governed by Sections 4–9 above.
