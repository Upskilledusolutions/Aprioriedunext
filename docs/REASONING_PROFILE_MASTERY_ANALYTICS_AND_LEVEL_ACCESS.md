# Reasoning Profile, Mastery, Analytics and Level Access Standard

**Status:** Approved product/UX operational requirement  
**Approved:** 2026-09-22  
**Applies to:** Reasoning Levels 1–9, Stages 1–6
**Last updated:** 2026-09-29

## 1. Purpose

This document defines the learner-facing Reasoning profile, cumulative progress/analytics requirements and controlled Level access model.

These are required product features, not optional later enhancements. The visual presentation is also a first-class product requirement because Reasoning Analytics is a primary product and marketing surface.

## 2. Standalone Reasoning profile

Reasoning Skills has its own learner-facing profile/analytics experience, separate from the Foreign Languages profile experience.

The learner uses the existing shared login identity. The Reasoning profile is accessed from the same general user affordance used by Foreign Languages: clicking the login icon/name exposes the profile entry point.

The Reasoning profile must not replace or destabilize the existing Foreign Languages profile.

## 3. Cumulative Reasoning record

All Reasoning learning records belong to the same learner identity and accumulate across:

- Levels 1–9;
- Stages 1–6;
- Quantitative and Verbal;
- Modules;
- Activities/question sets;
- Questions.

The cumulative Reasoning record remains separate from all Foreign Languages learning records.

Quantitative and Verbal detailed records remain independently identifiable, while the Reasoning profile may provide a combined Reasoning overview.

## 4. Mastery and analytics — mandatory from Level 1 · Stage 1

Mastery and analytics must be functional from **Level 1 · Stage 1**, not deferred until later Levels.

The initial Stage 1 release must begin collecting and presenting meaningful Reasoning learning insights. As additional Stages and Levels are launched, the same record expands cumulatively rather than resetting.

At minimum, the analytics model should support:

- overall Reasoning progress;
- Quantitative progress;
- Verbal progress;
- Level and Stage completion;
- Module/activity completion;
- questions attempted and completed;
- accuracy/performance;
- performance by concept/skill;
- performance by difficulty;
- performance by Explore/Extend;
- performance by Activity;
- response time/per-question timing where available;
- strengths and areas needing improvement;
- progress/growth over time.

The learner should be able to distinguish detailed Quantitative and Verbal results and see the cumulative Reasoning picture.

**Data-availability boundary:** Stage 1 presents the analytics supported by the current learner record. The durable server-side attempt-persistence foundation is now implemented and owner-checked, so supported question-level history, difficulty, timing and growth views may expand as verified data accumulates. Unsupported historical values must not be fabricated.

## 5. Progressive analytics growth

**Progress calculation:** learner-facing Stage and cumulative track percentages are Activity-based. Explore and Extend both contribute. Module-completion flags are separate and must not determine Stage or cumulative track percentages.


Every accepted Stage must contribute its verified data to the learner's cumulative Reasoning analytics.

```
Level 1 · Stage 1
        ↓
initial mastery + analytics
        ↓
Level 1 · Stage 2
        ↓
cumulative analytics expands
        ↓
Level 2 · Stage 1
        ↓
cumulative analytics continues
```

Earlier verified records must not be overwritten when a new Stage or Level is added.

The analytics model should be designed so that adding a new Activity/question set does not require a redesign of the profile or reporting system.

The durable authorization and question-attempt foundation is now implemented, deployed and owner-checked. Analytics may expand only from recorded/supportable data as each Stage/Level is accepted; unsupported historical values must not be reconstructed.

The system accumulates detailed history from the point at which durable persistence is active. Unsupported historical values are not reconstructed or estimated. Manual Level authorization and live authorization/capture verification are complete and are separate from the per-Stage acceptance gate.

## 6. Progress report and leaderboard

The Reasoning profile must provide a Reasoning progress report and Reasoning leaderboard using the cumulative Reasoning record.

These may follow the practical interaction model of the existing Foreign Languages product, but the Reasoning data namespace must remain separate.

A learner's Foreign Languages score, progress or leaderboard position must never be silently combined with Reasoning data.

## 7. Manual Level access

Reasoning Levels beyond the currently authorized Level are manually unlocked by an administrator.

The intended operational pattern is analogous to the existing language administration flow, where access entries identify a particular language level.

For Reasoning, use dedicated access identifiers for every Level:

```
reasoningL1
reasoningL2
reasoningL3
reasoningL4
reasoningL5
reasoningL6
reasoningL7
reasoningL8
reasoningL9
```

Each identifier corresponds to the matching Reasoning Level.

Access is **selective, not progressive**. An administrator may directly assign `reasoningL4` without first assigning `reasoningL1`, `reasoningL2` or `reasoningL3`. Completion of one Level does not automatically authorize another Level. Earlier or later access must be granted separately according to the administrator's decision.

The manual access operation must not modify or erase previous Reasoning progress.

## 8. Level access and cumulative progress

Manual unlocking controls **access**, not the underlying learning record.

For example:

```
reasoningL2
   ↓
Level 2 becomes accessible
   ↓
Level 1 records remain
   ↓
Level 2 records accumulate under the same learner
   ↓
Reasoning profile reflects both
```

The same learner login identity must therefore continue across unlocked Levels.

## 9. Release verification

Whenever a new Level is manually enabled for a learner, verify:

- the intended Level becomes accessible;
- earlier Levels remain accessible as designed;
- earlier progress remains intact;
- the correct Quantitative and Verbal content appears;
- cumulative analytics include newly completed work;
- Foreign Languages data remains separate.

The backend/admin storage and authorization implementation has been audited, implemented, deployed and owner-checked. Level access remains selective (`reasoningL1`–`reasoningL9`), while cumulative Reasoning records remain unchanged by access changes.

## 10. Analytics expansion after the persistence foundation

The richer question-level analytics now expand through the same cumulative Reasoning Analytics model as verified data becomes available. The first persistence foundation is already deployed and owner-checked. The same experience can expand to:

- attempt-level question history;
- performance by question difficulty;
- per-question response timing;
- growth over time;
- concept mastery trends;
- difficulty-band progression;
- time-efficiency trends;
- consistency patterns;
- cross-stage skill development;
- longitudinal growth views.

These extend the same cumulative Reasoning record rather than creating a separate analytics system. The implementation must use recorded data only and must not fabricate unsupported historical values.

### 10B. Stage-selectable Analytics experience

The dedicated Reasoning Analytics page must provide a **Stage selector dropdown** so a learner can view the same Analytics feature set for a particular released/authorized Stage.

Required behavior:

- The selector lists only Stages that are both **released/accepted** and **authorized for the current learner**.
- For an administrator/mastertrainer with `type = "all"`, all released/accepted Reasoning Stages available in the current product release are selectable.
- Selecting a Stage changes the entire Analytics view to that Stage: progress, Quantitative and Verbal activity charts, completion cards, persisted question-attempt analytics, difficulty performance, concept/skill performance, strengths/areas needing improvement, growth over time, activity performance, and Stage/module/activity completion.
- The selected Stage view must use only that Stage's recorded data. It must not mix attempts, progress or completion values from other Stages.
- Quantitative and Verbal remain independently attributable within the selected Stage.
- Existing cumulative Reasoning records remain unchanged; selecting a Stage is a reporting filter, not a reset, migration or new data namespace.
- A Stage with no recorded learner data must still render the same feature structure, using the existing unsupported/no-data states rather than invented values.
- Stage selection must not expose an unreleased or unauthorized Stage merely because source code or backend records exist.
- The Stage selector must be implemented as a reusable parameterized analytics model (for example, a stage-aware equivalent of the current Stage 1 analytics utility), so future accepted Stages are added by configuration/data availability rather than by creating another Analytics page.

### 10C. Analytics implementation timing for future Stages

Build the stage-selection capability **once, before Level 1 · Stage 3 acceptance**. **COMPLETE:** the capability is implemented and owner quick-checked for Stages 1–2. Do not build a separate Analytics UI for Stage 3, Stage 4, or later Stages.

For each later Stage/Level, the normal Stage launch process should only require:
1. the Stage's verified progress/activity data and persisted attempt records to carry the correct Level/Stage identifiers;
2. the accepted Stage to become eligible for the selector;
3. targeted live verification that selecting the new Stage renders the same Analytics feature set with only that Stage's data.

A new bespoke Analytics implementation is required only if a future product-approved requirement changes the shared Analytics feature model itself. Ordinary addition of a Stage must not require a new Analytics architecture.

### 10A. Reasoning Analytics visual presentation standard

The existing analytics features form the accepted baseline Reasoning-specific analytics experience. The **reusable stage-scoped Analytics selector is implemented and owner quick-checked for Stages 1–2** and is now the shared reporting mechanism for Stage 3 and later accepted Stages.

Required visual elements:
- prominent 3D-styled **overall Reasoning circular progress chart**;
- distinct Quantitative and Verbal circular progress charts;
- bar graphs for applicable comparisons such as Explore/Extend, difficulty, concept/skill and activity performance;
- line graphs for applicable time-based views such as growth, accuracy and response-time trends;
- selective 3D depth, layered lighting/shadows, animation and elevated visual treatment without reducing readability or performance;
- a distinctive navy/blue/orange Reasoning palette with grey used sparingly;
- visual identity clearly distinct from the Foreign Languages Progress Report.

Charts must remain data-driven, responsive, accessible and consistent with the existing cumulative Reasoning analytics. No decorative visualization may imply data that is not recorded.


## 11. Authenticated navigation labels

The authenticated name/user menu uses a separate entry for each product experience:

- **Language Club** — existing Foreign Languages profile entry. Retains the current `/Profile` route, navigation and features.
- **Reasoning Analytics** — dedicated Reasoning analytics entry. Opens the Reasoning Analytics experience directly; it does not open the Quantitative or Verbal track-selection pages.

The Reasoning Dashboard remains the separate entry point for choosing Quantitative or Verbal learning tracks.

All authenticated name-menu links/buttons must display without text underlines.

## 2026-09-23 — Manual Level access, authentication and durable-attempt persistence

Manual Reasoning Level access and its authentication boundary are implemented and deployed. `reasoningAccess` remains separate from Foreign Languages `next`.

The durable question-attempt persistence foundation is also implemented and deployed:

- Backend implementation commit: `6c353c4529fe3b5c613deb3396f8a00b8d1ce500`
- Frontend: `e22ccb1bc800f41689fc62a07c52b664783c3cfb`
- Storage: separate `Reasoning.question_attempts` collection
- APIs: `POST/GET /api/reasoning/attempts`
- Capture: answered and timed-out questions from the shared Activity Player
- Ownership: authenticated server session
- Idempotency: learner + activity-attempt + question combination

### Current release state

Authorization, durable-attempt persistence and the stage-selectable Analytics expansion are implemented, deployed and owner-checked for the currently released Stages. Only recorded, supported data may be used. Stage 3 is wired into the reusable Analytics model but remains intentionally unreleased until Stage 3 acceptance.
