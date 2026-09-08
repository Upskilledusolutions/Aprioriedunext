# Data and Progress

## Purpose

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

Each level uses the same six-stage roadmap for its selected track and is divided into two approximately equal curriculum halves:

- **Explore 50%** — core concepts, ideas, foundations and applications for the level.
- **Extend 50%** — additional concepts, applications, connections and more challenging reasoning for the same level.

Difficulty increases incrementally within both halves and across the level. Extend is generally more demanding than Explore but remains anchored to the selected grade rather than simply becoming the next grade. The same principle applies independently to Quantitative and Verbal.

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
