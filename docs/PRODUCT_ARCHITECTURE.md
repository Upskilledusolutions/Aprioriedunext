# Product Architecture

## Goal

The application should support two products under one account:

1. **Foreign Languages** — the existing product.
2. **Reasoning & Academic Skills** — the new product.

The safest approach is to share identity/authentication while keeping the learning experiences and product-specific data logically separate.

## Target architecture

```text
                    ONE USER ACCOUNT
                          │
                    ONE LOGIN SYSTEM
                          │
                 PRODUCT SELECTION
                    /            \
                   /              \
        FOREIGN LANGUAGES     REASONING & ACADEMIC SKILLS
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

## Existing architecture observations

The current application uses Redux for client-side state, `js-cookie`/`react-cookie` for the user cookie, and an `AuthInitializer` component to restore the user from the cookie. The main application wrapper provides Redux, cookies, authentication initialization and the common layout.

The existing login page sends credentials to the backend `/api/login` endpoint using the `NEXT_PUBLIC_BACKENDURL` environment variable. After successful login it stores user information in Redux and a `user` cookie, and currently redirects to `/`.

The existing navigation also exposes the logged-in user's Profile, Courses (`/User`) and Forum.

## Important architectural finding

The current `/User` page is effectively the existing language-learning dashboard. It displays language activities directly after login/navigation. Therefore, the desired new product-selection experience should **not simply replace `/User`**.

Instead, we should introduce a product-selection step/page and then route the learner into the selected product's dashboard.

## Recommended future routing concept

The exact route names can be chosen during implementation, but the concept should be:

```text
/authentication
      ↓
/product-selection
      ├── /languages
      │      └── existing language experience
      │
      └── /reasoning
             ├── Quantitative
             ├── Verbal
             └── Reasoning profile
```

The existing language routes should be preserved as much as possible. We should avoid renaming or moving large numbers of existing pages unless there is a demonstrated need.

## Shared systems

### Authentication

Use the existing authentication system rather than creating a second login system for Reasoning & Academic Skills.

### User identity

A learner should have one account/user ID. Product selection determines which product experience is active.

### Common application shell

Some common UI and infrastructure can be shared where this does not create product coupling.

## Separate systems

Each product should have its own logical namespace for:

- curriculum
- course navigation
- dashboard
- progress
- achievements
- points
- streaks
- leaderboard
- product-specific learning records

For example:

```text
User 123
│
├── Foreign Languages
│   ├── French progress
│   ├── Spanish progress
│   ├── Language points
│   └── Language leaderboard position
│
└── Reasoning & Academic Skills
    ├── Quantitative progress
    ├── Verbal progress
    ├── Reasoning points
    └── Reasoning leaderboard position
```

These numbers must not be accidentally added together to produce one combined learning score.

## Current implementation risk

The current Redux store contains language-specific unlocked pages/lessons and completed quiz data, while backend performance endpoints provide scores and progress. The current Profile page also calculates streaks, weekly/monthly statistics and leaderboard rank. These systems were designed around the existing language product.

Therefore, they should **not be reused unchanged for Reasoning**. We should create a product-aware structure or isolated Reasoning state while preserving the existing language behavior.

## Backend dependency

The frontend calls a separate backend through `NEXT_PUBLIC_BACKENDURL`. The backend source is not part of this repository, so the final database/API design cannot be declared complete until that backend is inspected.

Any change that requires new Reasoning data to be stored permanently will probably require backend work.

## Design rule

Prefer this pattern:

**shared identity + separate product modules**

rather than:

**one giant mixed learning system**.

This makes it possible to continue improving Foreign Languages and Reasoning & Academic Skills at the same time with less risk of one product breaking the other.
