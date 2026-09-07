# Product Architecture

**Purpose:** Permanent architectural reference for Apriori Edu Next / Upskilleduonline.

**Status:** Living reference. Update this document only when an architectural decision is verified or deliberately approved.

**Last updated:** 2026-09-07

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
          Language Progress         Reasoning Progress
          Language Points           Reasoning Points
          Language Streaks          Reasoning Streaks
          Language Leaderboard      Reasoning Leaderboard
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

The exact route names may change during implementation, but the separation of the two product experiences should remain.

## 6. Reasoning & Academic Skills architecture

Reasoning is an academic-skills product, not a conventional test-preparation product.

Its core proposition is:

> **Build reasoning skills, not test-prep skills.**

The Reasoning dashboard is the entry point to two academically distinct tracks:

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

Quantitative and Verbal progress should remain identifiable by track. They may contribute to a common Reasoning academic profile later.

## 7. Product-specific separation

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
    ├── Quantitative progress
    ├── Verbal progress
    ├── reasoning points
    ├── reasoning streaks
    └── reasoning leaderboard
```

**Do not combine Foreign Languages and Reasoning scores into one product score.**

## 8. Frontend state

The current Redux store contains language-oriented state, including unlocked pages/lessons and completed quiz information. Existing browser `localStorage` also contains language-oriented learning data.

These systems should not be reused unchanged for Reasoning.

Preferred direction:

- keep existing language state stable;
- introduce product-aware or isolated Reasoning state;
- use explicit namespaces for browser storage if browser persistence is required;
- avoid generic keys that can collide between products.

The exact state architecture should be chosen after the relevant code has been audited.

## 9. Backend dependency

The frontend communicates with a separate backend through `NEXT_PUBLIC_BACKENDURL`. The backend source is not currently part of this repository.

Therefore:

- frontend-only prototypes can be developed independently;
- permanent Reasoning progress requires backend/API support;
- database schema and API contracts must not be invented prematurely;
- backend work must be identified before a feature is described as fully persistent or production-complete.

## 10. Security and authorization

Frontend route protection is not sufficient for sensitive data.

The backend must enforce authentication and authorization for protected data and operations.

No passwords, API keys, private credentials or other secrets may be placed in this repository or documentation.

## 11. Architectural implementation strategy

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
```

A change to shared code must be assessed for its effect on the existing language product before implementation.

## 12. Architecture decisions that are intentionally not final

The following remain **To Be Verified** until the relevant implementation/backend is inspected:

- final product-selection route and redirect behavior;
- final Reasoning Redux/state structure;
- final Reasoning API endpoints;
- final database schema;
- final persistent progress model;
- final achievements, points, streak and leaderboard implementation for Reasoning;
- whether and how the common Reasoning academic profile aggregates Quantitative and Verbal achievements.

Do not treat these as settled merely because a prototype currently displays them.

## 13. Priority order

When architectural decisions conflict, use:

**Safety → Separation → Simplicity → Reuse → Scalability**

## 14. Definition of a successful two-product architecture

The architecture is successful when:

1. One learner account works across both products.
2. Login/logout remain reliable.
3. Foreign Languages continues to work independently.
4. Reasoning has its own dashboard and curriculum structure.
5. Quantitative and Verbal remain distinguishable within Reasoning.
6. Product-specific progress and gamification do not leak across products.
7. Permanent Reasoning data is backed by verified backend support when required.
8. Future development can add either product without unnecessarily destabilizing the other.
