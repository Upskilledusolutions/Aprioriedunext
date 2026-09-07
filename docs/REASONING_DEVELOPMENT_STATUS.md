# Reasoning Development Status

**Project:** Apriori Edu Next / Upskilleduonline

**Purpose:** Living handover document for development sessions. This file records what has actually been built, what has been decided, what remains incomplete, and what should happen next. It is intended to prevent the project owner from having to repeat context at the start or end of every session.

**Last updated:** 2026-09-07

---

## 1. Current project status

### Overall

**Reasoning & Academic Skills is in the foundation/prototype stage.**

The public-facing structure has been created and connected to the existing application, but the Reasoning learning engine is not yet complete. Quantitative and Verbal currently provide structured entry points and stage descriptions rather than full lessons, problems, activities, assessments and persistent progress.

### Current priority

Move from **visual/structural Reasoning pages** to a **real learning experience**, while protecting the existing Foreign Languages product.

### Next 3 priorities

1. Build the actual Reasoning learning experience, starting with the Quantitative and Verbal entry points.
2. Design and implement product-separated Reasoning progress/state without disturbing Foreign Languages.
3. Inspect the separate backend before claiming persistent Reasoning progress, scoring or gamification is complete.

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

It provides two main academic tracks:

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
| Quantitative lessons | Not built | Need real lessons and learning activities. |
| Verbal lessons | Not built | Need real reading/writing/argument/research activities. |
| Problems/exercises | Not built | Need Reasoning-specific activity types. |
| Assessments | Not built | Need a deliberate assessment model. |
| Reasoning progress tracking | Not complete | Must be product-separated. |
| Reasoning points/streaks | Not complete | Backend/data design still needs verification. |
| Reasoning achievements | Not complete | Design and implementation pending. |
| Reasoning leaderboard | Not complete | Must remain separate from Language leaderboard. |
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

### Decision 5 — Quantitative and Verbal are distinct tracks

Detailed progress must remain identifiable as Quantitative or Verbal, even if both later contribute to a common Reasoning academic profile.

### Decision 6 — Do not invent backend contracts

The frontend repository does not contain the backend source. Database schemas, API contracts and permanent progress models must be verified before being treated as final.

### Decision 7 — Build incrementally

Prefer small, isolated additions over rewriting the existing application.

---

## 5. Immediate development roadmap

### Phase A — Build the Reasoning learning engine

Start with the learner-facing experience.

#### Quantitative

Build the first usable learning stage with:

- lesson/topic structure
- explanation/content
- worked examples
- problems/questions
- answer handling
- feedback/explanations
- completion state
- navigation between activities

Then use the same proven pattern to expand through later Quantitative stages.

#### Verbal

Build the first usable learning stage with:

- reading/argument content
- comprehension and reasoning activities
- explanation/feedback
- writing or response activities where appropriate
- completion state
- navigation between activities

Then expand through later Verbal stages.

### Phase B — Product-separated progress

After the first learning activities work:

- identify the exact current Redux/localStorage patterns used by Foreign Languages;
- introduce isolated Reasoning state/storage;
- ensure Language progress cannot be overwritten by Reasoning progress;
- ensure Reasoning progress cannot appear as Language progress;
- define what needs to be stored permanently versus locally.

### Phase C — Backend integration

Inspect the separate backend before implementing permanent Reasoning records.

Determine:

- authentication/user model available to the frontend;
- existing score/progress APIs;
- authorization model;
- database structure relevant to learner records;
- whether existing endpoints can safely support product namespacing;
- which new endpoints/models are required for Reasoning.

Only then finalize the Reasoning persistence design.

### Phase D — Gamification

Once progress persistence is reliable, implement separately for Reasoning:

- points
- streaks
- achievements
- leaderboard

Do not mix these values with Foreign Languages.

### Phase E — Academic profile

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

1. Choose the first Quantitative stage as the pilot learning module.
2. Define its lesson → problem → feedback → completion flow.
3. Implement the pilot without disturbing Foreign Languages.
4. Repeat the proven pattern for the first Verbal stage.
5. Then implement product-separated progress/state.
6. Inspect backend requirements before persistent storage is finalized.

**Primary goal:** Turn Reasoning from a structured prototype into a genuinely usable learning product while keeping the existing Foreign Languages product safe.
