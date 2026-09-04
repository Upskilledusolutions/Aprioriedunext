# Project Overview

## Project

**Apriori Edu Next / Upskilleduonline** is an existing educational web platform. The current repository is a JavaScript/Next.js application. The repository is public and its default branch is `main`.

## Current product

The existing product is primarily a **Foreign Languages** learning platform. The codebase contains language lessons, exercises, conversations, reading and listening assignments, speaking/writing practice, translations, practice tests, clubs, events, quizzes, forums, profile/progress views, administration, and payment-related pages.

The current home page and user course page are language-oriented. The authenticated `/User` page currently presents a list of language-learning activities such as Lessons, Exercises, Conversations, Reading Assignments, Listening Assignments, Speaking Practice, Writing Practice, Translation, Writing Tasks, Speaking Tasks and Practice Test.

## New product to be added

The planned second product is **Reasoning & Academic Skills**.

Its educational proposition is:

> **Build reasoning skills, not test-prep skills.**

### Quantitative track

Foundation Quantitative & Reasoning → Advanced Problem Solving → Mathematical Thinking → Math Olympiad → Proof/Advanced Mathematics → Mathematical Research

### Verbal track

Foundation Verbal & Reasoning → Critical Reading & Argument → Analytical/Scholarly Writing → Essay Competitions → Research Skills → Research Writing → Publication

### Combined outcome

The Quantitative and Verbal tracks remain academically distinct. They can contribute to one common Reasoning & Academic Skills profile containing the learner's progress, achievements and research portfolio.

## Product separation principle

One learner account should be able to use both products.

The intended experience is:

```text
ONE LOGIN
    ↓
PRODUCT SELECTION
    ├── Foreign Languages
    └── Reasoning & Academic Skills
```

The products must not become one mixed course system.

## What should be shared

- User identity/account
- Authentication/login
- Appropriate common infrastructure

## What should remain separate

- Course navigation
- Curriculum
- Product dashboard
- Progress
- Achievements
- Points
- Streaks
- Leaderboards
- Product-specific learning data

## Development philosophy

The project should be extended rather than rebuilt from scratch. Existing Foreign Languages functionality is valuable and must be protected while the Reasoning & Academic Skills product is developed alongside it.

The initial goal is to validate demand with free content and free infrastructure before introducing paid infrastructure or monetization.

## Important current-state notes

The repository is a frontend Next.js application that communicates with a backend through `NEXT_PUBLIC_BACKENDURL`. The backend itself is not present in this repository, so backend behavior must not be assumed until the backend repository/service is inspected.

The existing repository contains both local browser storage and backend calls for learning/progress data. These mechanisms must be reviewed before introducing product-specific progress.

## Source of truth

This document is a simplified project map. Detailed technical behavior belongs in the other documents in this folder and must be updated when verified against the code.
