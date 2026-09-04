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
    ├── Quantitative progress
    ├── Verbal progress
    ├── completed activities
    ├── points
    ├── streaks
    ├── achievements
    └── leaderboard
```

## Do not combine scores

Never calculate a single product score by simply adding Language points and Reasoning points.

A user can participate in both products, but each product has its own progress and gamification system.

## Quantitative and Verbal data

Within Reasoning & Academic Skills, Quantitative and Verbal are two academic tracks. They can contribute to the Reasoning product's overall academic profile, but their detailed progress should remain identifiable by track.

Example:

```text
Reasoning & Academic Skills

Quantitative
- Foundation Quantitative & Reasoning
- Advanced Problem Solving
- Mathematical Thinking
- Math Olympiad
- Proof/Advanced Mathematics
- Mathematical Research

Verbal
- Foundation Verbal & Reasoning
- Critical Reading & Argument
- Analytical/Scholarly Writing
- Essay Competitions
- Research Skills
- Research Writing
- Publication
```

## Technical schema status

A final database schema has **not** been approved yet.

The frontend repository does not contain the backend source, so permanent storage design must be finalized only after the backend is inspected.

## Browser storage caution

The existing `localStorage` system was designed around language learning. Do not create Reasoning data using the same generic keys without a deliberate product namespace.

Preferred future pattern:

```text
language:* 
reasoning:*
```

The exact implementation should be decided after the backend and existing storage usage are fully audited.
