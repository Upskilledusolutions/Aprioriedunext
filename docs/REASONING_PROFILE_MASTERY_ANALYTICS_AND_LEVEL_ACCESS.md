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

## 6. Progress report and leaderboard

The Reasoning profile must provide a Reasoning progress report and Reasoning leaderboard using the cumulative Reasoning record.

These may follow the practical interaction model of the existing Foreign Languages product, but the Reasoning data namespace must remain separate.

A learner's Foreign Languages score, progress or leaderboard position must never be silently combined with Reasoning data.

## 7. Manual Level access

Reasoning Levels beyond the currently authorized Level are manually unlocked by an administrator.

The intended operational pattern is analogous to the existing language administration flow, where access entries identify a particular language level.

For Reasoning, use dedicated access identifiers such as:

```
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

Level 1 is the initial launch level. Completion of a Level does not automatically grant access to the next Level unless a separate approved rule is introduced. The administrator manually adds/enables the next Level access for the learner.

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

## 10. Future analytics

Additional insights may be added as the Question Bank becomes richer, including:

- concept mastery trends;
- difficulty-band progression;
- time-efficiency trends;
- consistency patterns;
- cross-stage skill development;
- longitudinal growth views.

These extend the same cumulative Reasoning record rather than creating separate analytics systems.
