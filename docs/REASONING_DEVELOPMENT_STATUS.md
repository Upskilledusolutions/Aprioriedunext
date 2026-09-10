# Reasoning Development Status

Last updated: 2026-09-10

## Current status

Reasoning is being developed through a focused stage-by-stage audit and remediation process. **Level 1 Stages 1–3 have received implementation/remediation work, but all three remain UNVERIFIED by the project owner.** A successful build or Ready Vercel deployment does not count as owner verification.

**Mandatory resume rule:** when work resumes after this documentation update, the first step is to remind the project owner that **Level 1 Stages 1–3 must be verified on the live production website before any new stage implementation proceeds.** Do not treat historical deployment success as verification.

The existing single-account authentication model remains shared with Foreign Languages, while Reasoning progress remains separately namespaced by track. No architecture redesign is introduced for curriculum remediations.

**Learner-facing rule:** Reasoning displays Level and Stage labels only (for example, **Level 1 · Stage 1**). School-grade names are documentation-only reference data and must not be displayed to learners.

## Mandatory quality requirements

### 1. Full stage audit

Every stage must be checked independently. The audit covers dashboard pages, module/lesson pages, activity mappings, question loading, imports/routes, client-side guards, Question Bank structure, stable IDs, grade/difficulty alignment, Explore/Extend progression, answers/explanations, timing, navigation, scoring, completion and progress behavior.

A client-side error on a learner-facing page is a blocking defect for the affected stage.

### 2. Explicit content-mode labels

Every Reasoning assessment question must carry a content-mode classification and show the learner-facing label before or with the question.

Approved labels:

- **Computation** — calculation or numerical manipulation is the primary task.
- **Text-Based Reasoning** — the learner primarily interprets written information, evidence, claims, conditions or ideas without calculation being the primary task.
- **Computation + Reasoning** — both meaningful interpretation/reasoning and calculation are required.

These labels describe the type of thinking, not the difficulty or Level/Stage.

### 3. Difficulty calibration — two-level elevation rule

Difficulty values must reflect actual reasoning demand. When a computation or Computation + Reasoning baseline has been identified as insufficient, the delivery standard is now **two additional difficulty levels above that previously recalibrated baseline**. This is a curriculum rule, not a request to change metadata alone.

The uplift must be demonstrated through harder task construction: additional meaningful steps, inverse reasoning, multi-condition constraints, abstraction/generalization, transfer, estimation/checking, proportional relationships or equivalent mathematical reasoning appropriate to the placement. Difficulty must still rise incrementally within Explore and within Extend.

This standard applies to **all Reasoning Levels 1–9 and Stages 1–6** for both Computation and Computation + Reasoning questions. The relative uplift is against the calibrated baseline for the specific Level/Stage; it does not make every level identical in absolute difficulty.

### 4. Question-set quality and quantity standard

Every learner-facing activity is required to deliver **exactly 10 distinct, substantive questions**, unless a future documented curriculum exception explicitly requires another count.

Questions must test the same core concept and intended application, meet the actual difficulty requirement, preserve Explore/Extend progression and content mode, use unique stable IDs, avoid duplicate/cosmetic variations, and retain valid answers/explanations and timing metadata.

### 5. Deployment-efficiency rule

Related fixes should be grouped into the fewest coherent deployment-triggering commits that can be safely validated.

```text
inspect → one coherent stage implementation → deployment → owner verification → targeted second fix only if needed
```

Vercel deployments are verification events, not the debugging loop. Before deployment, perform a repository-wide learner-facing label sweep and a stage-specific content/runtime sweep so that route-level omissions are caught before the deployment.

## Level 1 · Stage 1 — implementation/remediation complete; owner verification pending

### Scope

Stage 1 remediation covered Quantitative and Verbal delivery without changing the core architecture, Foreign Languages, authentication, navigation architecture, progress architecture or shared activity-player UI.

### Historical navigation and activity flow

- Quantitative Stage 1 module navigation: `1cdaf88db4c8e650f7f61798e259f7e9a9313ea3`.
- Verbal Stage 1 module navigation: `20e75b7fa534f0c9cef979a0cced75c24cf9ff55`.
- Reasoning activity return navigation: `230d0142c81d8219c443a1f63576d562622e5d02`.
- Reasoning activity navigation styling: `76a7114334523daee95a5478317fba3cd86b93c3`.
- Stage 1 navigation verification/documentation history: `2e34ad0b5be4b2d3242410c02632dd1b6006800c`.

### Current Stage 1 quality/remediation sequence

- Stage 1 question bank restoration: `ee7b073cb6ab6676e5dfb5944ce75495728a5631`.
- Historical choice-quality remediation: `282de52975a20ae7934574e09e16372b416009a6`, `7b6336f759f8340a75650caa790cbe3347a4a7fb`, `acdb54b66e906f4f23c2b232337a766654824987`, `944341e4076fb63aec61e63d8ea2a7a35c36044f`.
- Current re-audit identified concrete activity/question mapping defects and reset the launch-verification boundary.
- Stage 1 computational content was then elevated two additional difficulty levels above the prior recalibrated baseline, using a dedicated elevated delivery bank with exactly 10 questions per affected activity and substantive reasoning demand.
- Learner-facing Grade labels were removed while grade remains internal calibration data.

### Stage 1 verification state

**UNVERIFIED — owner verification required.**

Live production verification must confirm: exactly 10 questions per activity; no missing or duplicated delivery; substantive two-level difficulty elevation; correct Computation vs Computation + Reasoning labels; valid answers/explanations/timing; Previous/Next and answered/unanswered behavior; scoring/completion/progress; no learner-facing Grade labels; and no client-side errors.

Do not mark Stage 1 verified until the owner completes this live check.

## Level 1 · Stage 2 — implementation/remediation complete; owner verification pending

Stage 2 question-quality remediation was completed in commit `229468c0257b6181dd949de8a62fcb017c2c118c`, following the permanent quality rules for answer-position balance, answer-length/structural clues, distractor quality, activity alignment and difficulty progression.

**UNVERIFIED — owner verification required.**

Stage 2 must be checked on the live production site for runtime mappings, complete activity delivery, exactly 10 substantive questions per activity, content-mode labels, grade/difficulty calibration, Explore/Extend progression, answers/explanations, timing, navigation, scoring, completion, progress and client-side errors. No historical deployment or earlier completion record is sufficient for owner verification.

## Level 1 · Stage 3 — implementation/remediation complete; owner verification pending

Stage 3 is the **Mathematical Thinking / Analytical & Scholarly Writing** stage. The original substantive question-bank remediation was committed as `1a90523ddcdcbc502729ce1b1d6132911f608d40`.

The subsequent Stage 3 remediation sequence addressed delivery/calibration and build-validation failures without changing the existing architecture:

- `22ed7d81e64d42276b2e3a4a94c05c672f4c2799` — standardized Stage 3 reasoning delivery.
- `b841cded7fc30c729b76c79895baa11f6a51853b` — completed Stage 3 calibration safeguards.
- `fb538c313b706892a156e99c53b25fe6750d1b97` — calibrated Stage 3 Verbal option lengths.
- `cffb60c13284edf27b90f4e818b34836bc3bb0d5` — reauthored remaining Stage 3 Verbal length cues.
- `1d5ff2cf3a2a96c4cc817617f9a686093ae4c0d0` — restored complete Stage 3 activity mappings.
- `2edc84bdc07a5c620fff496281554e63808a8d07` — restored missing Stage 3 calibrated activities.
- `1729c985b2b57a04bd059a7fcc22384e8d3058de` — completed Stage 3 calibrated activity delivery.
- `93219b2435045993ecc42bbd84d563932ce695ee` — routed Stage 3 activities through complete calibration.
- `c8db6774473f1c6d4740b7943f4061e723d60151` — validated complete Stage 3 activity delivery.
- `64ba10cc4dcd6b2395a7c75f4b48907cab8f8896` — validated Stage 3 calibration layers separately.
- `44a18dde83465a94b28b9b29f5629fec33f49314` — validated Stage 3 through the authoritative delivery layer.
- `d746c3e63482923ff3e12ab7f5f8a2d3c838c89a` — allowed Stage 3 fallback calibration during build validation.
- `d56b8847206b268d1cf0169e76f81c80014ce955` — reauthored Stage 3 fallback answer-length cues.
- `7f9271d4e5c74f50a488e1955b0f35d3e8bb13e5` — rebalanced a Stage 3 scholarly revision cue.

These changes resolved the build/calibration path that had previously caused the Stage 3 Verbal Explore activities to deliver no calibrated questions and reduced build validation to only 50 delivered questions instead of the expected 100 for the affected validation set.

**Build/deployment state:** the latest Stage 3 deployment is Ready.

**Verification state: UNVERIFIED — owner verification required.**

The owner must verify Stage 3 on the live production website, including the previously missing Mathematical Justification and the other Stage 3 Extend activities, complete question delivery, correct content-mode labels, difficulty/progression, answers/explanations, timing, navigation, scoring, completion/progress and absence of client-side errors. A Ready deployment establishes successful build/deployment, not live owner verification.

## Level 1 · Stages 1–3 verification boundary

Stages 1, 2 and 3 are now explicitly grouped under a **live-production owner-verification gate**. Until the owner confirms all three stages are functioning correctly on production:

- do not mark any of Stages 1–3 as verified;
- do not record them as fully complete;
- do not start new stage implementation on the assumption that the foundation is verified;
- on the next build-session resume, first remind the owner that Stages 1–3 require verification;
- preserve all implementation/remediation history and do not redo completed work unless live verification exposes a specific defect.

## Reusable standard for all future stages and levels

Before implementing each future stage, inspect its current computation and Computation + Reasoning bank against the calibrated baseline. Apply the same two-additional-level elevation where the current baseline is insufficient. Do not simply increment `difficulty` metadata. The actual question content must carry the increased demand.

This rule must be applied consistently across Levels 1–9 and Stages 1–6. It is part of the source-of-truth acceptance criteria for every future computation remediation.

## Level 1 · Stage 4–6 status

### Stage 4
Previous remediation exists, but owner verification remains pending. Known structural issues must be resolved through a validated focused change. The exact-10-question and difficulty standards apply. No Stage 4 work is considered verified by historical deployment status alone.

### Stage 5
Build work exists; owner verification remains pending. Fresh audit required, including question quantity, runtime safety, content-mode labeling and actual difficulty calibration.

### Stage 6
Build work exists; owner verification remains pending. Fresh audit required, including question quantity, runtime safety, content-mode labeling and actual difficulty calibration.

## Level 2 status

Level 2 Stage 1 implementation exists in the repository but remains paused while the Level 1 foundation is stabilized and verified. The exact-10-question standard and actual difficulty calibration will apply when Level 2 work resumes.

## Completed / historical implementation foundations

- Shared authentication and account model retained.
- Reasoning has independent Quantitative and Verbal tracks.
- Level 1 six-stage curriculum structures exist for both tracks.
- Stages use the approved six-stage architecture and 50–50 Explore/Extend structure.
- Reusable activity players support multi-question activities, scoring, feedback, explanations, navigation and per-question timing.
- Reasoning progress is separately namespaced from Foreign Languages progress in the current frontend implementation.
- Stage 1 module/activity navigation and Continue Learning flow were implemented.
- Stages 2–6 curriculum, module pages and activity layers were implemented.
- The existing one-account model across Foreign Languages and Reasoning was retained.

These are implementation facts, not substitutes for current owner verification.

## Remaining curriculum work after Level 1 verification

- First verify Level 1 Stages 1–3 on live production.
- Then freshly audit and remediate Level 1 Stages 4–6 using the same focused stage-level model.
- Apply the exact-10-question quality standard without lowering conceptual or difficulty quality.
- Apply the two-additional-level computation/Computation + Reasoning elevation wherever the existing recalibrated baseline is insufficient.
- Resolve known Level 1 structural issues through validated changes.
- Resume Level 2 Stage 1 only after Level 1 is stable, then continue Levels 2–9.
- Inspect and integrate the external backend before describing Reasoning progress as permanently persisted.

## Later-phase platform work

These remain separate from the current frontend curriculum build and should be implemented only after the relevant external backend is inspected: backend/database persistence; durable server-side authorization; server-side timer configuration; Reasoning points, streaks, achievements and leaderboards; broader account-level analytics; and optional interactive/API learning resources.

## Source-of-Truth Principle

Question count, substantive variety, activity alignment, content-mode classification, actual difficulty progression, grade alignment, assessment integrity, runtime safety and deployment verification are separate acceptance criteria.

A stage is not considered complete merely because it has the required number of question records, because a commit exists, or because a Vercel deployment is Ready. **Owner live-production verification is a separate mandatory acceptance criterion.**