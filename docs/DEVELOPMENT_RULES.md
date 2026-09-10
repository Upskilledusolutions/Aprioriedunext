# Development Rules

These rules are the project's safety guide. They are written so that an AI coding assistant and a non-technical project owner can use them.

## 1. Protect the existing Foreign Languages product

The existing Foreign Languages product is live project functionality. Do not rewrite or restructure it unnecessarily.

Before changing shared code, identify whether the change can affect:

- login
- user identity
- language courses
- language progress
- language points
- language streaks
- language leaderboard
- payments
- admin functions

## 2. One login, two products

Do not create a second authentication system for Reasoning & Academic Skills unless a verified technical requirement makes it unavoidable.

Use the existing user identity and authentication infrastructure where practical.

## 3. Separate product data

Foreign Languages and Reasoning & Academic Skills must not share product-specific progress accidentally.

Keep separate:

- curriculum
- dashboards
- progress
- achievements
- points
- streaks
- leaderboards

Within Reasoning, Quantitative and Verbal are independently selectable and independently reportable. Neither track should unlock, block, require or depend on the other.

## 4. Reasoning grade-level and difficulty rules

Reasoning uses nine additive levels:

- Level 1 — Grade 3
- Level 2 — Grade 4
- Level 3 — Grade 5
- Level 4 — Grade 6
- Level 5 — Grade 7
- Level 6 — Grade 8
- Level 7 — Grade 9
- Level 8 — Grade 10
- Level 9 — Grades 11–12

Each level is divided into two approximately equal curriculum halves:

- **Explore 50%** — core concepts, ideas and applications for the selected grade.
- **Extend 50%** — additional concepts, ideas, connections and applications anchored to the same grade.

Difficulty must increase incrementally within both halves. The Extend half should generally be more challenging than Explore, but must remain appropriate to the selected level rather than simply becoming the next grade. This applies independently to Quantitative and Verbal.

### Mandatory 2026-09-10 calibration correction

The current Level 1 audit found that some existing content is miscalibrated by approximately two grade levels:

- Computational Quantitative questions are generally around Grade 1 demand rather than Grade 3.
- Quantitative Text-Based Reasoning questions are generally around Grade 5 demand rather than Grade 3.
- Verbal questions are generally around Grade 5 demand rather than Grade 3.

Do not delete these existing question records. The current overly-advanced Quantitative and Verbal text-based question sets must be placed two levels higher in Question Bank/activity metadata and mappings while retaining their stable question IDs. The easier Computational questions remain available as foundational/review items, while new/adjusted Level 1 computational content must meet the intended Level 1 standard.

Difficulty metadata must be recalibrated after placement is corrected. Difficulty labels must reflect actual reasoning demand, not vocabulary length or a historical value.

## 5. Reasoning question mode labels

Every Reasoning assessment question must be classified and learner-labeled as one of:

- **Computation**
- **Text-Based Reasoning**
- **Computation + Reasoning**

The label explains the primary nature of the task and is not a difficulty indicator. It must be stored in Question Bank metadata so pages and validators use the same source of truth.

This is a content/UX metadata requirement, not an architectural change.

## 6. Reasoning Question Bank extensibility

Reasoning must use a dedicated Question Bank/content model rather than reusing Foreign Languages exercise data unchanged.

The Question Bank must be designed so that:

- new question types can be added without an architectural rewrite;
- new question sets can be added to any existing course, stage, module or topic;
- existing progress reports and dashboards continue to work when new content is introduced;
- stable activity/question identifiers and common progress metadata are used instead of hard-coded question-type lists;
- question sets can carry grade, track, stage, module/topic, Explore/Extend, concept/skill, content-mode and difficulty metadata;
- explanations, worked examples, feedback and answer data can be attached where appropriate.

A new question type may require its own rendering/interaction component, but adding that component must not require rewriting the overall curriculum, progress or dashboard architecture.

## 7. Reasoning timer rules

Every Reasoning question must support configurable time-per-question settings.

- Default timing should be based on grade and difficulty, with question/activity type considered where appropriate.
- Defaults should reflect reasonable average expected solving/response time.
- Timing may be overridden at question-set/topic level.
- Authorized front-end/back-end configuration may override timing where required.
- The learner may be offered a choice of timing modes/settings where the final learning experience enables this.
- The primary timer is per question, not only per section.
- The model should remain extensible for a future section/set timer.

Do not hard-code timer values into components when configuration/data can be used instead.

## 8. Future-ready interactive content

Reasoning content should support optional references to:

- images
- diagrams
- visualizations
- interactive components
- generated visuals
- API/data-driven resources

These are separate from the Question Bank requirement. They should remain optional so standard content does not depend on external services.

## 9. Inspect before modifying

Never change a file simply because its name looks relevant.

First:

1. Read the actual file.
2. Trace what imports it.
3. Identify what data it reads/writes.
4. Identify whether it communicates with the backend.
5. Identify whether it is shared by both products.
6. Explain the risk before making the change.

## 10. Prefer small changes

Do not perform a large rewrite when a small addition or isolated module can achieve the same result.

Prefer:

```text
new product module
        ↓
shared authentication
        ↓
existing language module remains intact
```

over:

```text
rewrite entire application
```

## 11. Every code change must be understandable

For every change, provide the non-technical owner with:

- what we are changing
- why we are changing it
- exact file path(s)
- what will be added/removed/replaced
- whether existing functionality is affected
- how to test it
- expected result
- what to do if the test fails
- how to roll back the change

## 12. Backend changes require special attention

The frontend uses `NEXT_PUBLIC_BACKENDURL` to communicate with a separate backend. The backend is not part of this repository.

If a feature requires permanent data storage, new API endpoints, database changes or server-side authorization, clearly identify that backend work before proceeding.

## 13. Security

Never place passwords, private keys, database credentials, API secrets or other confidential values in source code or documentation.

The `.gitignore` already excludes local environment files such as `.env*.local`; do not remove that protection without a specific reason.

Frontend protection is not sufficient for sensitive data. The backend must enforce authorization.

## 14. Do not expose secrets in documentation

Documentation may describe the existence and purpose of an environment variable, but must never contain the secret value.

## 15. Preserve existing progress

Do not delete, reset or migrate existing learner progress unless a migration plan has been reviewed and tested.

## 16. Product selection

The desired experience is:

```text
ONE LOGIN
    ↓
PRODUCT SELECTION
    ├── Foreign Languages
    └── Reasoning & Academic Skills
```

The selected product controls the learning experience without changing the underlying user identity.

## 17. Testing priority

When a shared change is made, test the existing Foreign Languages flow as well as the new Reasoning flow.

For every Reasoning stage being remediated, additionally verify:

- all learner-facing pages render without client-side errors
- all imports and route references resolve
- every activity question ID resolves to a real question
- Quantitative and Verbal activity mappings use the correct track
- content-mode labels match the actual question task
- difficulty matches the calibrated level
- Explore/Extend progression remains valid
- login still works
- logout still works
- existing language dashboard still opens
- existing language progress is unchanged
- new Reasoning dashboard opens
- Reasoning progress does not appear inside Language progress
- Quantitative can be used without Verbal
- Verbal can be used without Quantitative
- selecting both tracks preserves separate progress
- adding a new Question Bank set does not break existing reporting/dashboard behavior
- per-question timing displays and resets correctly between questions
- timer overrides work at the intended configuration level
- switching products does not log the user out

## 18. No premature technical decisions

Do not invent a database schema, API contract or architecture just to fill documentation.

If something has not been verified, label it as **To Be Verified**.

## 19. Zero-cost development preference

During validation, prefer the existing infrastructure and free tiers. Do not add paid services unless there is a clear business or technical reason.

## 20. AI development rule

The AI assistant must read the documentation in `/docs` before making architectural changes.

If the code conflicts with the documentation, the AI should stop and explain the conflict before making a broad change.

## 21. Deployment discipline

Do not use Vercel deployments as a debugging mechanism.

For each approved stage-level change set:

1. inspect the exact affected source files;
2. make all related fixes together where practical;
3. run complete static/prebuild validation;
4. check syntax, imports, mappings, question structure, content-mode metadata and difficulty placement;
5. create one deployment-triggering commit only after validation passes;
6. verify the exact GitHub commit evaluated by Vercel;
7. wait for owner verification before recording the stage as verified.

If a deterministic source problem is found, fix it before creating another deployment. If the failure is a platform/rate-limit problem, do not spend additional deployment attempts on it.

## 22. Priority order

When making decisions, use this order:

**Safety → Separation → Simplicity → Reuse → Scalability**
