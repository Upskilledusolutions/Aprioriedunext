# Product Architecture

**Purpose:** Permanent architectural reference for Apriori Edu Next / Upskilleduonline.

**Status:** Living reference. Update this document only when an architectural decision is verified or deliberately approved.

**Last updated:** 2026-09-08

## 1. Product vision

The application should support two products under one learner account:

1. **Foreign Languages** — the existing product and its current learning experience.
2. **Reasoning & Academic Skills** — the new academic-skills product.

The core principle is:

> **Shared identity + separate product modules.**

The two products should feel like parts of one platform while keeping their curriculum, dashboards, learning records, progress and gamification logically separate.

## 2. Target architecture

```text
                         ONE USER ACCOUNT
                                │
                         ONE LOGIN SYSTEM
                                │
                        PRODUCT SELECTION
                           /            \
                          /              \
             FOREIGN LANGUAGES      REASONING & ACADEMIC SKILLS
                    │                         │
            Language Dashboard        Reasoning Dashboard
                    │                         │
             Language Curriculum       Quantitative + Verbal
                    │                         │
          Language Progress         Independent Track Progress
          Language Points           Reasoning Progress
          Language Streaks          Reasoning Points
          Language Leaderboard      Reasoning Streaks
                                    Reasoning Leaderboard
```

A learner must be able to use both products without creating a second account or logging out.

## 3. Existing Foreign Languages product

Foreign Languages is existing project functionality and must be protected during Reasoning development.

The current authenticated `/User` page is effectively the existing language-learning dashboard. It should **not** simply be replaced by the Reasoning dashboard or renamed without a specific implementation decision.

Existing language routes, learning records, progress, scores, streaks, leaderboard behavior, payments and admin functionality should be preserved unless a change is explicitly required and tested.

## 4. Authentication and identity

The current application uses a shared authentication flow:

- Next.js/React frontend.
- Redux for client-side authentication state.
- A `user` browser cookie.
- `AuthInitializer` to restore the user when the application starts.
- Login through the separate backend `/api/login` endpoint.
- Backend base URL supplied through `NEXT_PUBLIC_BACKENDURL`.

Reasoning should use the existing identity/authentication infrastructure rather than creating a second login system.

The selected product changes the learner's experience, **not the underlying user identity**.

## 5. Product selection

The desired high-level journey is:

```text
LOGIN
  ↓
PRODUCT SELECTION
  ├── Foreign Languages
  │      ↓
  │  Language Dashboard
  │
  └── Reasoning & Academic Skills
         ↓
     Reasoning Dashboard
         ├── Quantitative
         └── Verbal
```

Within Reasoning, Quantitative and Verbal are independently selectable. A learner may take Quantitative only, Verbal only, or both. Selecting one track must never require, unlock, block or depend on the other.

The exact route names may change during implementation, but the separation of the two product experiences and the independence of the two Reasoning tracks should remain.

## 6. Reasoning & Academic Skills architecture

Reasoning is an academic-skills product, not a conventional test-preparation product.

Its core proposition is:

> **Build reasoning skills, not test-prep skills.**

The Reasoning dashboard is the entry point to two academically distinct tracks. Each track uses the same six-stage roadmap at every grade level, while the content, concepts, applications and difficulty are adapted to the selected grade level.

### Quantitative

1. Foundation Quantitative & Reasoning
2. Advanced Problem Solving
3. Mathematical Thinking
4. Math Olympiad
5. Proof & Advanced Mathematics
6. Mathematical Research

### Verbal

1. Foundation Verbal & Reasoning
2. Critical Reading & Argument
3. Analytical & Scholarly Writing
4. Essay Competitions
5. Research Skills
6. Research Writing & Publication

### Grade-level layer

The grade-level layer is additive; it does not replace the six-stage roadmap.

| Level | Grade |
|---|---|
| Level 1 | Grade 3 |
| Level 2 | Grade 4 |
| Level 3 | Grade 5 |
| Level 4 | Grade 6 |
| Level 5 | Grade 7 |
| Level 6 | Grade 8 |
| Level 7 | Grade 9 |
| Level 8 | Grade 10 |
| Level 9 | Grades 11–12 |

Every level is divided into two approximately equal curriculum halves:

- **First 50% — Explore:** concepts, ideas, foundations and applications appropriate to the selected grade.
- **Second 50% — Extend:** additional concepts, applications, connections and more challenging reasoning, still anchored to the selected grade.

Difficulty must increase incrementally **within both halves**. The progression should move from accessible concepts and applications toward increasingly demanding reasoning, abstraction, multi-step thinking and transfer/application. This applies independently to Quantitative and Verbal. The second half should generally be more challenging than the first half, while remaining appropriate to the level rather than simply becoming a next-grade curriculum.

Conceptually:

```text
Reasoning
│
├── Quantitative
│   └── Level 1–9
│       ├── Explore 50%  → increasing difficulty
│       └── Extend 50%  → increasing difficulty, higher challenge
│
└── Verbal
    └── Level 1–9
        ├── Explore 50%  → increasing difficulty
        └── Extend 50%  → increasing difficulty, higher challenge
```

### Learning hierarchy

The intended reusable hierarchy is:

```text
Reasoning
  → Track (Quantitative / Verbal)
    → Level (Grade)
      → Explore / Extend
        → Stage (1–6)
          → Module / Topic
            → Activity
              → Question / Content
```

Quantitative and Verbal progress must remain independently identifiable throughout this hierarchy.

## 7. Reasoning Question Bank and extensibility

Reasoning requires its own question/content bank rather than reusing the Foreign Languages exercise data unchanged.

The Question Bank should support:

- Quantitative and Verbal tracks;
- every level and grade;
- every roadmap stage;
- any module or topic;
- Explore and Extend curriculum halves;
- concept/skill tags;
- difficulty metadata;
- multiple question/activity types;
- question sets that can be expanded or replaced independently;
- explanations and worked examples where appropriate;
- answer/feedback data;
- timing metadata.

The content model must be extensible so that a **new question type or new question set can be added to any existing course, stage, module or topic without requiring an architectural rewrite** and without breaking progress reports or dashboards.

Progress and dashboard calculations should depend on stable activity/question identifiers and metadata rather than hard-coded lists of question types. Adding content should therefore automatically fit the existing reporting structure wherever the new activity type supplies the required progress metadata.

The Question Bank should also be designed for optional future interactive content. An activity may eventually reference an optional image, diagram, interactive component, generated visual, API/data source or other learning resource. These additions must be optional so ordinary content continues to work without external services.

### Timing model

Every question should support a configurable **time-per-question** value.

- The default should be determined using grade level, question/activity type and difficulty as appropriate.
- Defaults should reflect reasonable average solving/response time for the selected grade and difficulty.
- A question set/topic may define or override its default timing.
- Authorized front-end/back-end configuration may override timing when required.
- The learner may optionally be allowed to choose between the default timing mode and an available alternative timing mode, depending on the final learning experience.
- The timer should measure and display time **per question**, not only as one timer for an entire section.

The architecture should allow future support for section/set-level timing without requiring the current per-question model to be discarded.

## 8. Product-specific separation

Each product should have its own logical namespace for:

- curriculum
- course navigation
- dashboard
- progress
- completed learning activities
- achievements
- points
- streaks
- leaderboard
- product-specific learning records

Conceptually:

```text
User 123
│
├── Foreign Languages
│   ├── language curriculum
│   ├── language progress
│   ├── language points
│   ├── language streaks
│   └── language leaderboard
│
└── Reasoning & Academic Skills
    ├── Quantitative
    │   ├── Level → Explore/Extend → Stage → Module → Activity
    │   └── independent progress / leaderboard contribution
    ├── Verbal
    │   ├── Level → Explore/Extend → Stage → Module → Activity
    │   └── independent progress / leaderboard contribution
    ├── reasoning points
    ├── reasoning streaks
    └── reasoning leaderboard
```

**Do not combine Foreign Languages and Reasoning scores into one product score.**

Quantitative and Verbal must also remain independently usable and reportable. Neither track should unlock or depend on the other. If only one track is selected, that track must still provide a complete progress, dashboard and leaderboard experience. If both are selected, their detailed records remain separate while a future Reasoning academic profile may aggregate them at a higher level.

## 9. Frontend state

The current Redux store contains language-oriented state, including unlocked pages/lessons and completed quiz information. Existing browser `localStorage` also contains language-oriented learning data.

These systems should not be reused unchanged for Reasoning.

Preferred direction:

- keep existing language state stable;
- introduce product-aware or isolated Reasoning state;
- use explicit namespaces for browser storage if browser persistence is required;
- avoid generic keys that can collide between products;
- identify Reasoning records by stable track/level/stage/module/activity/question identifiers so new content can be added without redesigning reporting state.

The exact state architecture should be chosen after the relevant code has been audited.

## 10. Backend dependency

The frontend communicates with a separate backend through `NEXT_PUBLIC_BACKENDURL`. The backend source is not currently part of this repository.

Therefore:

- frontend-only prototypes can be developed independently;
- permanent Reasoning progress requires backend/API support;
- database schema and API contracts must not be invented prematurely;
- backend work must be identified before a feature is described as fully persistent or production-complete;
- Question Bank persistence, timer overrides and permanent progress should use verified backend support when implemented.

## 11. Security and authorization

Frontend route protection is not sufficient for sensitive data.

The backend must enforce authentication and authorization for protected data and operations.

No passwords, API keys, private credentials or other secrets may be placed in this repository or documentation.

## 12. Architectural implementation strategy

Prefer incremental additions over large rewrites.

```text
existing Foreign Languages product
             │
             ├── remains stable
             │
             └── shared authentication / identity
                              │
                              ↓
                    new product modules
                              │
                    ┌─────────┴─────────┐
                    ↓                   ↓
             Foreign Languages     Reasoning
                                  /          \
                         Quantitative       Verbal
                              │               │
                         Level 1–9        Level 1–9
                              │               │
                         Explore/Extend   Explore/Extend
```

A change to shared code must be assessed for its effect on the existing language product before implementation.

## 13. Architecture decisions that are intentionally not final

The following remain **To Be Verified** until the relevant implementation/backend is inspected:

- final product-selection route and redirect behavior;
- final Reasoning Redux/state structure;
- final Reasoning API endpoints;
- final database schema;
- final persistent progress model;
- final Question Bank storage/API model;
- final question/activity type registry;
- final timer configuration and override permissions;
- final achievements, points, streak and leaderboard implementation for Reasoning;
- whether and how the common Reasoning academic profile aggregates Quantitative and Verbal achievements;
- final interactive media/API integration mechanism.

Do not treat these as settled merely because a prototype currently displays them.

## 14. Priority order

When architectural decisions conflict, use:

**Safety → Separation → Simplicity → Reuse → Scalability**

## 15. Definition of a successful two-product architecture

The architecture is successful when:

1. One learner account works across both products.
2. Login/logout remain reliable.
3. Foreign Languages continues to work independently.
4. Reasoning has its own dashboard and curriculum structure.
5. Quantitative and Verbal remain distinguishable within Reasoning and can be used independently.
6. Each Reasoning track has complete progress/reporting/leaderboard behavior even when the other track is not selected.
7. Reasoning supports nine grade levels with a six-stage roadmap and a 50–50 Explore/Extend curriculum split.
8. Difficulty increases incrementally within both halves of each level and remains grade-appropriate.
9. New Reasoning question types and question sets can be added without architectural rewrites or disruption to reporting/dashboard behavior.
10. Questions support configurable per-question timing with sensible grade/difficulty defaults.
11. Optional future interactive media/API resources can be added without making them mandatory for ordinary activities.
12. Product-specific progress and gamification do not leak across products.
13. Permanent Reasoning data is backed by verified backend support when required.
14. Future development can add either product without unnecessarily destabilizing the other.
