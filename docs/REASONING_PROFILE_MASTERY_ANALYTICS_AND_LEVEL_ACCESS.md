# Reasoning Profile, Mastery, Analytics and Level Access Standard

**Status:** Approved product/UX operational requirement  
**Approved:** 2026-09-22  
**Applies to:** Reasoning Levels 1–9, Stages 1–6

## 1. Purpose

This document defines the learner-facing Reasoning profile, cumulative progress/analytics requirements and controlled Level access model.

These are required product features, not optional later enhancements.

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

**Data-availability boundary:** Stage 1 must present all analytics that the current persisted learner record can support. Attempt-level question history, performance by question difficulty, per-question response timing and growth over time require durable server-side attempt persistence. These richer dimensions are scheduled to be enabled after Stage 1 acceptance and before Level 1 · Stage 2 implementation begins; they must not be fabricated from incomplete data.

## 5. Progressive analytics growth

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

The agreed sequence for the richer historical analytics is:

**Stage 1 owner verification → Stage 1 acceptance → backend inspection + durable question-attempt persistence → verify capture and Reasoning/Foreign Languages separation → expand analytics → Stage 2 implementation.**

The system must begin accumulating this detailed history from the point at which the new persistence is activated. Unsupported historical values must not be reconstructed or estimated. The manual Reasoning Level-access implementation and verification must occur before this analytics-persistence work in the agreed transition sequence.

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

The exact backend/admin storage and authorization implementation remains subject to code/backend audit before implementation; these product behaviors are approved requirements and must not be dropped because the current frontend does not yet expose them.

**Implementation order:** after the backend foundation is established, manual Reasoning Level access is implemented and verified first; richer analytics persistence is implemented afterward, before Level 1 · Stage 2 work begins.

## 10. Analytics expansion after the persistence foundation

The richer historical/question-level analytics are scheduled after Stage 1 acceptance and before Level 1 · Stage 2 implementation. The first step is durable question-attempt persistence; once the new capture is verified, the same Reasoning Analytics experience can expand to:

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


## 11. Authenticated navigation labels

The authenticated name/user menu uses a separate entry for each product experience:

- **Language Club** — existing Foreign Languages profile entry. Retains the current `/Profile` route, navigation and features.
- **Reasoning Analytics** — dedicated Reasoning analytics entry. Opens the Reasoning Analytics experience directly; it does not open the Quantitative or Verbal track-selection pages.

The Reasoning Dashboard remains the separate entry point for choosing Quantitative or Verbal learning tracks.

All authenticated name-menu links/buttons must display without text underlines.

## 2026-09-23 — Manual Level access implementation and security gate

The backend foundation for manual Reasoning Level access is now implemented with a dedicated `reasoningAccess` user field containing validated `reasoningL1`–`reasoningL9` identifiers. The existing Admin user editor can manage this field, while Foreign Languages `next` access remains separate.

The implementation is **not yet fully verified as secure authorization** because the current backend has no effective authentication middleware. Before relying on manual Level access for learner release, implement a server-recognized authenticated identity/session/credential and enforce:

- learner read access limited to the authenticated learner's own record;
- no learner-side modification of Reasoning access;
- administrator-only access assignment/removal;
- selective Level assignment with no prerequisite dependency;
- preservation of all existing Reasoning learning records.

Do not reconstruct or alter historical analytics because of the authorization change.

After authorization verification, implement the durable question-attempt persistence foundation. Only newly collected, supported attempt history may feed the richer cumulative analytics; unsupported historical values must not be fabricated.
