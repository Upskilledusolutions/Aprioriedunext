# Reasoning Development Status

Last updated: 2026-09-09

## Current status

Reasoning has progressed into a working-learning build for Level 1. The existing single-account authentication model is shared with Foreign Languages, while Reasoning progress is separately namespaced by track.

**Learner-facing rule:** Reasoning displays Level and Stage labels only (for example, **Level 1 · Stage 1**). School-grade names are not displayed to learners.

## Completed

- Shared authentication and account model retained.
- Reasoning has independent Quantitative and Verbal tracks.
- Level 1 six-stage curriculum structures are implemented for both tracks.
- Stages 1–6 use the approved six-stage architecture and 50–50 Explore/Extend structure.
- Reusable activity players support multi-question activities, scoring, feedback, explanations, navigation and per-question timing.
- Reasoning progress is stored separately from Foreign Languages progress and persists across refresh/navigation in the current frontend implementation.
- Stage 1 module/activity navigation and Continue Learning flow are implemented.
- Stage 2 and Stage 3 curriculum, module pages and activity layers are implemented.
- Stage 4 Math Olympiad and Essay Competitions pathways are implemented with Explore and Extend content.
- Stage 5 Proof & Advanced Mathematics and Research Skills pathways are implemented with Explore and Extend content.
- Stage 6 Mathematical Research and Research Writing & Publication pathways are implemented with Explore and Extend content.
- Stages 4–6 have dedicated dashboards, module learning pages and interactive activity/question layers.
- Reasoning learning entry and activities are protected by the existing authentication flow; public discovery pages remain accessible.
- Foreign Languages and the existing authentication/account model have not been replaced by a second Reasoning login system.

## Level 1 current build state

### Stage 1 — Foundation Quantitative & Reasoning / Foundation Verbal & Reasoning
Implemented with Explore/Extend learning, activities, scoring and progress. Question content is being audited for answer-length, capitalization, answer-position and other assessment clues under the new Question Quality Standard.

### Stage 2 — Advanced Problem Solving / Critical Reading & Argument
Implemented with interactive questions and module/activity navigation. Question content is being audited under the same Question Quality Standard.

### Stage 3 — Mathematical Thinking / Analytical & Scholarly Writing
**Question bank is present and populated.** The current `src/Data/Reasoning/questionBankStage3.js` contains substantive Quantitative and Verbal questions; the earlier documentation stating that this file was empty is stale and has been corrected. Stage 3 still requires the same systematic assessment-quality audit as the other stages before final launch verification.

### Stage 4 — Math Olympiad / Essay Competitions
**Stage 4 question remediation completed in this build.** The question bank contains 80 questions: 40 Quantitative and 40 Verbal across 20 activities, with 10 Explore and 10 Extend activities. Every activity now maps all four questions. Four-question activities follow Core → Core → Stretch → Advanced progression, stable IDs are retained, and answer positions are balanced across the bank. The content was strengthened to use more contextual, reasoning-based distractors and to reduce structural assessment clues. Existing Stage 4 dashboards, module pages, activity routing and shared player architecture are preserved.

### Stage 5 — Proof & Advanced Mathematics / Research Skills
Curriculum, dashboards, module pages, activities and question bank are implemented with Explore and Extend structure. The substantive question-quality remediation remains part of the staged audit. Known player robustness follow-ups remain: reliable final-answer scoring and correct completion when the final question times out.

### Stage 6 — Mathematical Research / Research Writing & Publication
Curriculum, dashboards, module pages, activities and question bank are implemented with Explore and Extend structure. The substantive question-quality remediation remains part of the staged audit. Known player robustness follow-ups remain: reliable final-answer scoring and correct completion when the final question times out.

## Reasoning Question Quality & Anti-Cheat Standard

The permanent standard is recorded in `docs/REASONING_QUESTION_QUALITY_STANDARD.md`.

Every current and future stage/level must be checked for:

- answer-length bias, with the longest option correct in approximately 30% of eligible text-only multiple-choice questions;
- capitalization/formatting clues, including lower-case correct answers standing out from otherwise consistently formatted options;
- answer-position bias;
- grammatical or punctuation clues;
- implausible or structurally weak distractors;
- activity-specific alignment;
- Core → Core → Stretch → Advanced progression where four-question activity sets are used;
- stable IDs and correct activity mappings.

These checks improve assessment integrity without changing the Reasoning architecture.

## Architecture protection rule

A new level or stage changes curriculum content and difficulty, **not the underlying Reasoning architecture**, unless a separate architectural change is proposed and explicitly approved.

Question-quality work must preserve:

- Quantitative and Verbal independent tracks.
- Six-stage curriculum structure.
- 50% Explore / 50% Extend split.
- Dedicated Reasoning Question Bank and stable question IDs.
- Shared activity player.
- Existing timing, scoring, completion, navigation and progress architecture.
- One account working across both products.
- Foreign Languages product.
- Authentication/account architecture.

## Current validation/deployment safeguards

The Reasoning prebuild validator now checks required files, relative imports, duplicate route hazards, question-bank syntax and Stage 5–6 structural integrity before Next.js compilation.

Assessment-quality auditing is being expanded to all existing stages. Existing content will be remediated one stage at a time; once the current content has been normalized, appropriate quality thresholds should become build-blocking for future content.

## Deployment status / next-session resume point

The Stage 3 deployment was confirmed successful on commit `1a90523ddcdcbc502729ce1b1d6132911f608d40`. Stage 4 remediation is now committed to `main`; use the resulting Vercel deployment as the source of truth for build status.

## Remaining curriculum work

- Complete the staged question-quality audit/remediation for Level 1 Stages 1, 2, 5 and 6.
- Complete final owner verification of Level 1 before launch readiness is claimed.
- Extend the six-stage curriculum to Levels 2–9 with the same architecture and the same question-quality standard.
- Inspect and integrate the external backend before describing Reasoning progress as permanently persisted.

## Later-phase platform work

The following remain separate from the current frontend curriculum build and should be implemented only after the relevant external backend is inspected:

- Backend/database persistence for Reasoning.
- Durable server-side authorization for Reasoning data and operations.
- Server-side timer configuration or authorized overrides.
- Reasoning points, streaks, achievements and leaderboards.
- Broader account-level learning analytics and reporting.
- Optional interactive/API learning resources.

## Source-of-Truth Principle

Question count, substantive variety, activity-specific alignment, difficulty progression and assessment integrity are separate acceptance criteria. A question bank is not considered complete merely because it contains the required number of records.
