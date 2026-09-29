# Data and Progress

## Purpose

This document is the authoritative reference for Reasoning learner-record separation and progress calculation. Stage build/deployment workflow is defined in `docs/REASONING_STAGE_LAUNCH_AND_VERIFICATION_STANDARD.md`.

This document records how learner data is currently handled and how it should be separated when Reasoning & Academic Skills is added.

## Current user identity

The current Redux authentication state stores a user object. Login receives user information from the backend and places it into Redux. A `user` cookie is also used so `AuthInitializer` can restore the user when the application starts.

The current user information includes fields such as `userId`, `name`, `trial`, `type`, `next`, `active`, `contest`, and completed quiz information.

## Current learning data

The current application uses a mixture of:

1. Backend data accessed through `NEXT_PUBLIC_BACKENDURL`.
2. Redux state in the browser.
3. Browser `localStorage` for some completed quizzes and unlocked pages/lessons.

The current Redux store contains language-specific unlocked pages and lessons. Examples include French, Spanish, German, Italian, Russian, Dutch, Japanese, Korean and Danish variants.

## Current completed quizzes

Completed quizzes are identified using fields including `exercise`, `language` and `questionTypes`. Login currently merges completed quiz information received from the backend with legacy browser `localStorage` data and sends the merged result back to the backend.

This is an important legacy system. It must not be casually changed because existing language-learning users may depend on it.

## Current performance system

The frontend requests performance information from backend endpoints including:

- `/api/{userId}/performance`
- `/api/{userId}/scores`
- `/api/users/totalScores`
- `/api/updateScore`

The existing Profile page uses this data to display learning performance, weekly/monthly statistics, streak information and leaderboard rank.

## Current leaderboard

The existing leaderboard uses performance `totalScore` values and filters users based on active status and, in some cases, contest membership. It is part of the existing Foreign Languages profile experience.

## Required future separation

Reasoning & Academic Skills must have its own logical data namespace.

Conceptually:

```text
User
│
├── Foreign Languages
│   ├── curriculum progress
│   ├── completed activities
│   ├── points
│   ├── streaks
│   ├── achievements
│   └── leaderboard
│
└── Reasoning & Academic Skills
    ├── Quantitative
    │   └── Level → Explore/Extend → Stage → Module/Topic → Activity → Question
    │       └── independent progress / points / achievements / leaderboard contribution
    ├── Verbal
    │   └── Level → Explore/Extend → Stage → Module/Topic → Activity → Question
    │       └── independent progress / points / achievements / leaderboard contribution
    ├── reasoning points
    ├── reasoning streaks
    └── reasoning leaderboard
```

## Do not combine scores

Never calculate a single product score by simply adding Language points and Reasoning points.

A user can participate in both products, but each product has its own progress and gamification system.

## Quantitative and Verbal data

Within Reasoning & Academic Skills, Quantitative and Verbal are independent academic tracks.

A learner may:

- take Quantitative only;
- take Verbal only; or
- take both.

Neither track should unlock, block, require or depend on the other.

Each track must feed its own detailed progress/reporting and leaderboard contribution directly. If both tracks are selected, their records remain separate even if a future Reasoning academic profile displays an aggregate view.

## Reasoning profile access

The Reasoning profile is reached from the login icon/name using the same general user-affordance pattern as Foreign Languages. The profile is a separate Reasoning view and must not replace the existing Foreign Languages profile.

## Reasoning progress calculation standard

The authoritative learner-facing progress unit is the **Activity**, not the Module.

### Stage progress

```text
completed Activity IDs in the Stage
-----------------------------------
all learner-facing Activity IDs in the Stage
```

Explore and Extend both count equally.

### Track progress

Track progress is cumulative across the **currently released Stage/Level scope** for that track:

```text
completed Activity IDs in released scope
---------------------------------------
all Activity IDs in released scope
```

The denominator is data-driven and grows only when additional content is released through the sequential Stage/Level acceptance process.

### Module completion

Module completion is separate. A Module is complete only when all Activities assigned to that Module are complete. A completed Module flag must never be used as a proxy for Stage or cumulative track progress.

**Current dashboard scope:** Level 1 Stages 1–2, with 16 Activities per track. This scope expands only as later Stages are accepted.

## Reasoning cumulative mastery and analytics

Mastery and analytics are a mandatory Reasoning product capability from **Level 1 · Stage 1 onward**.

The learner record must accumulate under the same Reasoning identity as new verified Stages and Levels are completed. Earlier results must remain available when later content is added.

The initial analytics model should provide:

- cumulative Reasoning progress;
- separate Quantitative and Verbal progress;
- Level/Stage/Module/Activity completion;
- questions attempted/completed;
- accuracy/performance;
- performance by concept/skill;
- performance by difficulty;
- Explore versus Extend performance;
- response time/per-question timing where available;
- strengths and areas for improvement;
- longitudinal growth.

Analytics should be usable from Stage 1 and should expand with each later verified Stage and Level. Adding a new question set should add to the same reporting model rather than require a separate analytics system.

### Stage-scoped Analytics

The dedicated Reasoning Analytics page uses a reusable **Stage selector**. A selectable Stage must be both released/accepted and authorized for the current learner.

The selected Stage is a reporting filter across the full Analytics feature set. All Stage-scoped progress, completion, activity performance, question-attempt analytics, difficulty, concept/skill, timing and growth views must use records carrying the selected Level/Stage identifiers.

The existing Reasoning attempt contract already stores `levelId` and `stageId`, and `GET /api/reasoning/attempts` supports authenticated `levelId` and `stageId` filters. The frontend should use this existing contract rather than create a parallel attempt store or reconstruct unsupported historical values.

The Stage selector must not change stored progress or create a new data namespace. It changes only the reporting scope presented to the learner.

## Manual Reasoning Level access

Reasoning Levels are manually enabled by an administrator using dedicated identifiers for every Level:

```
reasoningL1
reasoningL2
reasoningL3
reasoningL4
reasoningL5
reasoningL6
reasoningL7
reasoningL8
reasoningL9
```

Each identifier maps to the corresponding Reasoning Level. Manual access controls availability; it does not reset, replace or migrate previous Reasoning learning records. **Access is selective, not progressive**: `reasoningL4` may be assigned directly without `reasoningL1`, `reasoningL2` or `reasoningL3`. Completion of one Level does not automatically authorize another Level, and assignment of a later Level does not imply assignment of earlier Levels.

The backend authorization, durable-attempt persistence and analytics foundations have been implemented and owner-checked. Current Stage work follows the sequential Stage-launch standard; new Stages are added to the cumulative record only after their own production acceptance.

## Reasoning grade-level progress model

Reasoning uses nine grade levels:

| Level | Grade |
|---|---|
| 1 | Grade 3 |
| 2 | Grade 4 |
| 3 | Grade 5 |
| 4 | Grade 6 |
| 5 | Grade 7 |
| 6 | Grade 8 |
| 7 | Grade 9 |
| 8 | Grade 10 |
| 9 | Grades 11–12 |

Each Stage in every Level uses the accepted Stage 1 learner-facing UI, navigation, functionality and feature pattern independently for Quantitative and Verbal.

Content thresholds are:
- **at least 5 Explore Activities**;
- **at least 3 Extend Activities**;
- **at least 8 Activities/question sets** in total per track;
- **10 delivered questions per Activity**.

Explore is presented first and Extend second. The number of Modules and any Activities above these minimums may vary by Stage and should preserve the approved curriculum inventory. Difficulty increases incrementally within Explore and within Extend, and across the Level. Extend is generally more demanding than Explore while remaining appropriate to the selected Level. The same principle applies independently to Quantitative and Verbal.

## Reasoning Question Bank

Reasoning should use a dedicated, extensible Question Bank rather than the existing Foreign Languages exercise data unchanged.

A Question Bank item/set should be addressable through stable identifiers and metadata such as:

- product = Reasoning;
- track = Quantitative or Verbal;
- level/grade;
- curriculum half = Explore or Extend;
- stage;
- module/topic;
- concept/skill;
- difficulty;
- activity/question type;
- question/set identifier;
- answer/response information;
- explanation/feedback where appropriate;
- timing configuration;
- optional media/interactive resource references.

New question types and new question sets should be addable to any existing course, stage, module or topic without an architectural rewrite. Progress reports and dashboards should use stable identifiers and common progress metadata rather than hard-coded question-type lists, so new content can flow into the existing reporting structure without breaking it.

## Reasoning timing model

Every Reasoning question should support a configurable **time-per-question** value.

The intended model is:

1. A sensible default is assigned based on grade level and difficulty, with activity/question type considered where useful.
2. The default represents a reasonable average expected response/solving time rather than a rigid rule.
3. A question set or topic can override the default.
4. Authorized front-end/back-end configuration can override timing where appropriate.
5. Where enabled by the learning experience, the learner may choose from available timing modes/settings.
6. The timer is displayed and measured per question.
7. The model remains extensible so a future section/set timer can be supported without discarding per-question timing.

Exact timing defaults and server-side override rules remain **To Be Verified** during implementation/testing.

## Interactive content readiness

Question Bank and interactive content are separate requirements.

The Question Bank should nevertheless allow an activity to optionally reference:

- images;
- diagrams;
- visualizations;
- interactive components;
- generated visuals;
- API/data-driven resources.

These references must be optional so standard lessons and questions remain functional without external services. The integration mechanism should be added when needed rather than forcing an immediate API dependency.

## Reasoning canonical content schema status

The Reasoning frontend now has a canonical **content-record contract** in `src/Data/Reasoning/canonicalQuestionSchema.js`. This is an application/content schema, not a backend database schema. It governs the editable Stage-bank → canonical-record pipeline and does not establish a permanent persistence/API contract.

Existing JavaScript Reasoning banks remain controlled source pools during migration. The canonical schema is not a runtime cutover by itself.

## Technical schema status

A final database schema has **not** been approved yet.

The frontend repository does not contain the backend source, so permanent storage design must be finalized only after the backend is inspected.

This includes the permanent schemas/API contracts for:

- Reasoning progress;
- Question Bank records;
- question/activity type registration;
- timer defaults and overrides;
- interactive resource references.

## Browser storage caution

The existing `localStorage` system was designed around language learning. Do not create Reasoning data using the same generic keys without a deliberate product namespace.

Preferred future pattern:

```text
language:*
reasoning:*
```

Reasoning storage should additionally distinguish track, level, stage, module/activity and question where required. The exact implementation should be decided after the backend and existing storage usage are fully audited.

## 2026-09-23 backend authorization and durable question-attempt persistence record

The external Backend repository is now the documented backend companion for Reasoning.

### Authentication and Level access

The server establishes learner identity from the signed HttpOnly `ups_auth_session` cookie and resolves the active learner from the existing Auth model. Reasoning access uses dedicated `reasoningL1`–`reasoningL9` values, separate from Foreign Languages `next`.

Implemented rules:
- a learner may read only their own Reasoning access;
- an authenticated administrator may manage another learner's Reasoning access;
- learners cannot modify Reasoning access;
- access is selective rather than progressive;
- changing access does not reset Reasoning records.

### Durable question attempts

The backend provides:

```
POST /api/reasoning/attempts
GET  /api/reasoning/attempts
```

Attempts are stored in the separate `Reasoning` database namespace in the `question_attempts` collection.

The record captures the authenticated learner, activity-attempt ID, question ID, track, Level, Stage, Explore/Extend half, Activity/Module, available concept/question-type/content-mode/difficulty metadata, selected/correct response values, correctness for answered attempts, response status, time limit, response time and timestamps.

POST derives ownership from the authenticated session rather than accepting a browser-supplied learner identity and requires access to the submitted Reasoning Level. GET is automatically scoped to the authenticated learner.

This is a **durable capture foundation**, not the final authoritative grading service. Correctness is currently supplied by the active frontend Activity Player because the active Reasoning question banks remain in the frontend repository. Future authoritative grading may be introduced separately; analytics must not fabricate unsupported historical values.

The frontend sends attempts through `src/utils/reasoningAttempts.js`. Existing browser Reasoning completion/progress storage remains in place and is not migrated or reset.

### Verification boundary

The authorization, durable-attempt and Reasoning/Foreign Languages separation implementations are deployed and owner-checked. Only recorded, supported data may be used for analytics; unsupported historical values must not be reconstructed.

See `Upskilledusolutions/Backend/docs/REASONING_INTEGRATION.md`.
