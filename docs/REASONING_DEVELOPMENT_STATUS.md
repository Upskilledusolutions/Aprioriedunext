# Reasoning Development Status

**Project:** Apriori Edu Next / Upskilleduonline

**Purpose:** Living handover document for development sessions. This file records what has actually been built, what has been decided, what remains incomplete, and what should happen next. It is intended to prevent the project owner from having to repeat context at the start or end of every session.

**Last updated:** 2026-09-08

---

## 1. Current project status

### Overall

**Reasoning & Academic Skills is in the foundation/prototype stage.**

The public-facing structure has been created and connected to the existing application, but the Reasoning learning engine is not yet complete. Quantitative and Verbal currently provide structured entry points and stage descriptions rather than full lessons, problems, activities, assessments and persistent progress.

### Current priority

Move from **visual/structural Reasoning pages** to a **real learning experience**, while protecting the existing Foreign Languages product.

### Next 3 priorities

1. Build the actual Reasoning learning experience using the approved Level 1–9, six-stage and 50–50 Explore/Extend curriculum model.
2. Build a flexible Reasoning Question Bank and product-separated progress/state without disturbing Foreign Languages.
3. Inspect the separate backend before claiming persistent Reasoning progress, scoring, timing configuration or gamification is complete.

---

## 2. Work completed so far

### Product architecture and documentation

The project has been audited around the two-product model:

- Foreign Languages remains the existing product.
- Reasoning & Academic Skills is the new product.
- One learner account and one login system are shared.
- Product-specific learning experiences and data remain separate.
- Foreign Languages progress and Reasoning progress must not be combined.
- The backend is separate from this frontend repository.

The permanent architecture reference is maintained in:

- `docs/PRODUCT_ARCHITECTURE.md`

Supporting project documentation includes:

- `docs/PROJECT_OVERVIEW.md`
- `docs/USER_FLOWS.md`
- `docs/DATA_AND_PROGRESS.md`
- `docs/DEVELOPMENT_RULES.md`
- `docs/CHANGELOG.md`
- `docs/README.md`

### New approved Reasoning curriculum model

The Reasoning architecture now includes an additive grade-level layer:

- Level 1 — Grade 3
- Level 2 — Grade 4
- Level 3 — Grade 5
- Level 4 — Grade 6
- Level 5 — Grade 7
- Level 6 — Grade 8
- Level 7 — Grade 9
- Level 8 — Grade 10
- Level 9 — Grades 11–12

Each level retains the six-stage roadmap for its track and is divided into:

- **50% Explore:** concepts, ideas, foundations and applications appropriate to the level.
- **50% Extend:** additional concepts, applications, connections and higher challenge anchored to the same level.

Difficulty must increase incrementally within both halves. The Extend half should normally be more challenging than Explore, but should not simply become the next grade's curriculum. This progression applies independently to Quantitative and Verbal.

### Reasoning product structure

The Reasoning product has been added to the frontend structure with:

- Reasoning dashboard: `src/pages/Reasoning/index.js`
- Quantitative track: `src/pages/Reasoning/Quantitative/index.js`
- Verbal track: `src/pages/Reasoning/Verbal/index.js`

The home page contains a Reasoning entry point through:

- `components/home/Fromsection.js`

The product-selection experience contains Reasoning as a product option through:

- `src/pages/ProductSelection/index.js`

### Reasoning dashboard

The Reasoning dashboard currently communicates the intended proposition:

> **Build reasoning skills, not test-prep skills.**

It introduces a progression from foundation through challenge, advanced thinking, achievement and research.

It provides two independently usable academic tracks:

- Quantitative
- Verbal

### Quantitative track

The current Quantitative page presents six planned stages:

1. Foundation Quantitative & Reasoning
2. Advanced Problem Solving
3. Mathematical Thinking
4. Math Olympiad
5. Proof & Advanced Mathematics
6. Mathematical Research

### Verbal track

The current Verbal page presents six planned stages:

1. Foundation Verbal & Reasoning
2. Critical Reading & Argument
3. Analytical & Scholarly Writing
4. Essay Competitions
5. Research Skills
6. Research Writing & Publication

### Navigation/product work already established

Reasoning has been incorporated into the site's product/navigation structure, including the Reasoning dashboard and its Quantitative and Verbal entry points.

---

## 3. What is actually working vs. what is still a prototype

| Area | Status | Notes |
|---|---|---|
| Reasoning dashboard | Built | Visual/structural product landing page exists. |
| Quantitative entry point | Built | Stage structure exists; learning engine not yet implemented. |
| Verbal entry point | Built | Stage structure exists; learning engine not yet implemented. |
| Product selection | In progress | Reasoning is represented, but complete product-switching behavior still needs implementation/testing. |
| Authentication | Existing system | Uses the existing shared login/user identity. Do not create a second login system. |
| Grade levels 1–9 | Architecture defined | Curriculum layer approved; implementation not yet built. |
| Explore/Extend 50–50 model | Architecture defined | Difficulty progression rule approved; implementation not yet built. |
| Quantitative lessons | Not built | Need real lessons and learning activities. |
| Verbal lessons | Not built | Need real reading/writing/argument/research activities. |
| Reasoning Question Bank | Not built | Requires a flexible, extensible content model. |
| Problems/exercises | Not built | Need Reasoning-specific activity types. |
| Assessments | Not built | Need a deliberate assessment model. |
| Per-question timer | Architecture defined | Configurable timing model approved; implementation and backend configuration remain pending. |
| Interactive content/API capability | Architecture planned | Optional future-ready hooks are defined; actual integrations are not yet built. |
| Reasoning progress tracking | Not complete | Must be product-separated and track-independent. |
| Reasoning points/streaks | Not complete | Backend/data design still needs verification. |
| Reasoning achievements | Not complete | Design and implementation pending. |
| Reasoning leaderboard | Not complete | Must remain separate from Language leaderboard and usable independently per track. |
| Persistent Reasoning backend data | Not complete | Backend repository/API has not yet been inspected. |
| Common Reasoning academic profile | Future | Quantitative and Verbal can contribute later; exact aggregation is not finalized. |

---

## 4. Decisions already made

### Decision 1 — One account, two products

Do not create separate user accounts or a second authentication system for Reasoning.

### Decision 2 — Protect Foreign Languages

The existing Foreign Languages product is live functionality. New Reasoning work should be additive and isolated wherever practical.

### Decision 3 — Do not replace `/User` casually

`/User` is effectively the existing Foreign Languages dashboard. Reasoning should not replace it simply because a new Reasoning dashboard exists.

### Decision 4 — Separate product data

Foreign Languages and Reasoning must have separate logical namespaces for:

- curriculum
- progress
- completed activities
- points
- streaks
- achievements
- leaderboards

### Decision 5 — Quantitative and Verbal are independently selectable

A learner may take Quantitative only, Verbal only, or both. Neither track unlocks, requires, blocks or depends on the other.

Each track must have a complete learner experience, including its own progress/reporting and leaderboard contribution, even when the other track is not selected.

Detailed records must remain identifiable by track. A future Reasoning academic profile may aggregate both tracks without merging their underlying records.

### Decision 6 — Nine grade levels are an additive curriculum layer

Reasoning uses Level 1–9 mapped to Grades 3 through 10 and Grades 11–12 respectively. The grade-level layer does not replace the established six-stage Quantitative or Verbal roadmap.

### Decision 7 — 50% Explore + 50% Extend within every level

Every grade level is divided into two approximately equal curriculum halves.

**Explore** develops the core concepts, ideas and applications appropriate to that level.

**Extend** develops additional concepts, applications, connections and challenges while remaining anchored to the same level.

Difficulty increases incrementally within both halves. Progression should move toward greater reasoning depth, abstraction, multi-step thinking, transfer and application. The second half is generally more challenging than the first, but should not simply turn into the next grade's curriculum.

This difficulty-progression principle applies independently to Quantitative and Verbal.

### Decision 8 — Flexible Reasoning Question Bank

Reasoning requires its own Question Bank rather than reusing Foreign Languages exercise data unchanged.

The Question Bank must be extensible by metadata and stable identifiers so new question types and new question sets can be added to any course, stage, module or topic without an architectural rewrite and without breaking dashboards or progress reports.

Reporting/progress logic should not depend on hard-coded question-type lists. New activity types should supply the standard metadata needed by the progress system.

### Decision 9 — Configurable per-question timing

Every Reasoning question should support a configurable time-per-question value.

- Defaults should be based on grade level and difficulty, with question/activity type considered where appropriate.
- Timing should reflect a reasonable average expected response/solving time for the learner's grade and difficulty.
- Timing may be set or overridden for an individual question set/topic.
- Authorized front-end/back-end configuration may override timing when required.
- Where the learning experience permits it, the learner may select an available timing mode.
- The timer is primarily measured/displayed per question rather than only as a section timer.
- The architecture should remain capable of supporting a future section/set timer without discarding the per-question model.

### Decision 10 — Future-ready interactive content

Reasoning activities should be able to reference optional interactive learning resources such as images, diagrams, visualizations, generated visuals, interactive components or APIs/data sources.

These are separate from the Question Bank requirement. They should be optional and should not make ordinary lessons dependent on external services.

### Decision 11 — Do not invent backend contracts

The frontend repository does not contain the backend source. Database schemas, API contracts, permanent progress models, persistent Question Bank storage and server-controlled timer configuration must be verified before being treated as final.

### Decision 12 — Build incrementally

Prefer small, isolated additions over rewriting the existing application.

---

## 5. Immediate development roadmap

### Phase A — Build the Reasoning learning engine

Start with the learner-facing experience using the approved hierarchy:

**Track → Level → Explore/Extend → Stage → Module/Topic → Activity → Question/Content.**

#### Quantitative

Build the first usable learning stage with:

- grade-appropriate Explore and Extend content;
- incremental difficulty within each half;
- lesson/topic structure;
- explanation/content;
- worked examples;
- problems/questions;
- answer handling;
- feedback/explanations;
- configurable per-question timing;
- completion state;
- navigation between activities.

Then use the same proven pattern to expand through later Quantitative stages and levels.

#### Verbal

Build the first usable learning stage with:

- grade-appropriate Explore and Extend content;
- incremental difficulty within each half;
- reading/argument content;
- comprehension and reasoning activities;
- explanation/feedback;
- writing or response activities where appropriate;
- configurable per-question timing where applicable;
- completion state;
- navigation between activities.

Then expand through later Verbal stages and levels.

### Phase B — Reasoning Question Bank and product-separated progress

Build a reusable Question Bank that can accept new question/activity types and new question sets without changing the overall reporting/dashboard architecture.

Then:

- identify the exact current Redux/localStorage patterns used by Foreign Languages;
- introduce isolated Reasoning state/storage;
- ensure Language progress cannot be overwritten by Reasoning progress;
- ensure Reasoning progress cannot appear as Language progress;
- ensure Quantitative and Verbal progress remain independent;
- define what needs to be stored permanently versus locally.

### Phase C — Backend integration

Inspect the separate backend before implementing permanent Reasoning records.

Determine:

- authentication/user model available to the frontend;
- existing score/progress APIs;
- authorization model;
- database structure relevant to learner records;
- whether existing endpoints can safely support product/track/level namespacing;
- which new endpoints/models are required for Reasoning;
- how Question Bank records should be persisted;
- how timer defaults and authorized overrides should be persisted/configured.

Only then finalize the Reasoning persistence design.

### Phase D — Gamification

Once progress persistence is reliable, implement separately for Reasoning:

- points
- streaks
- achievements
- leaderboard

Quantitative and Verbal should contribute independently to Reasoning reporting/leaderboard logic without creating a dependency between tracks.

Do not mix Reasoning values with Foreign Languages.

### Phase E — Interactive learning enhancements

After the core content/question model is stable, add optional interactive resources where they materially improve learning:

- diagrams and visualizations;
- interactive mathematics/graphs;
- visual reasoning components;
- generated or hosted learning visuals;
- API/data-driven learning experiences.

These enhancements should plug into the existing activity/content model rather than require a new curriculum architecture.

### Phase F — Academic profile

Later, build a Reasoning academic profile that can show Quantitative and Verbal development together while preserving their separate detailed records.

Potential future areas:

- skill map
- mastery/proficiency
- challenge history
- competition/achievement history
- research milestones
- portfolio/work evidence

The exact model is **To Be Verified**.

---

## 6. Current known technical constraints

1. The backend source is outside this repository.
2. The current Redux and browser-storage systems are language-oriented.
3. Existing language progress must not be reset or migrated casually.
4. The current Reasoning pages are prototypes, not a complete learning engine.
5. Permanent Reasoning progress cannot be considered complete until backend support is verified.
6. Shared authentication code is high-risk because it affects both products.
7. The Reasoning Question Bank, timer configuration and interactive resource integrations are not yet implemented.

---

## 7. Files and routes currently important to Reasoning

### Documentation

- `docs/PRODUCT_ARCHITECTURE.md`
- `docs/REASONING_DEVELOPMENT_STATUS.md`
- `docs/PROJECT_OVERVIEW.md`
- `docs/USER_FLOWS.md`
- `docs/DATA_AND_PROGRESS.md`
- `docs/DEVELOPMENT_RULES.md`
- `docs/CHANGELOG.md`
- `docs/README.md`

### Reasoning pages

- `src/pages/Reasoning/index.js`
- `src/pages/Reasoning/Quantitative/index.js`
- `src/pages/Reasoning/Verbal/index.js`

### Product selection

- `src/pages/ProductSelection/index.js`

### Home Reasoning entry point

- `components/home/Fromsection.js`

### Existing language exercise data

- `src/Data/ExerciseData/` — existing Foreign Languages exercise/question structures. These must remain isolated from the new Reasoning Question Bank.

---

## 8. How the next AI development session should begin

The next AI coding session should **not ask the project owner to restate the project background**.

The AI should first read:

1. `docs/PRODUCT_ARCHITECTURE.md`
2. `docs/REASONING_DEVELOPMENT_STATUS.md`
3. `docs/DEVELOPMENT_RULES.md`

Then inspect the specific files relevant to the requested change.

The AI should use this document to understand the current state, but must verify actual code before modifying it.

If the requested feature requires backend persistence, the AI should identify that dependency rather than pretending a frontend-only solution is permanent.

---

## 9. End-of-session update rule

At the end of each meaningful development session, update this file with:

- the date;
- what was actually completed;
- what remains incomplete;
- important decisions made;
- files/routes changed;
- the next recommended development tasks;
- any newly discovered backend dependency or technical risk.

Do not mark a feature **Built/Complete** merely because a page or visual prototype exists.

Use clear statuses such as:

- **Built** — implemented and usable.
- **In progress** — partially implemented.
- **Prototype** — visual/structural implementation only.
- **Blocked** — requires another dependency.
- **To Be Verified** — needs inspection/testing before being treated as final.
- **Complete** — implemented and tested to the project's agreed standard.

---

## 10. Next session starting point

**Start here:** Build the first real Reasoning learning experience rather than adding more marketing/landing-page structure.

Recommended order:

1. Establish the reusable Level 1–9 and Explore/Extend curriculum data structure without duplicating architecture for every grade.
2. Choose the first Quantitative stage as the pilot learning module.
3. Define its lesson → problem → feedback → per-question timer → completion flow.
4. Build the first Question Bank structure so additional question types/sets can be added without changing reporting/dashboard foundations.
5. Implement the pilot without disturbing Foreign Languages.
6. Repeat the proven pattern for the first Verbal stage.
7. Implement product- and track-separated progress/state.
8. Inspect backend requirements before persistent storage, server-side timer configuration or final gamification is finalized.

**Primary goal:** Turn Reasoning from a structured prototype into a genuinely usable, grade-layered learning product with an extensible Question Bank and configurable per-question timing while keeping the existing Foreign Languages product safe.
