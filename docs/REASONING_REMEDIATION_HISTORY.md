# Reasoning Remediation History

**Project:** Apriori Edu Next / Upskilleduonline  
**Scope recorded here:** Level 1 Reasoning remediation through Stage 6  
**Last updated:** 2026-09-09

This document is the chronological remediation record for completed Level 1 Reasoning work. It records the navigation/runtime fixes that preceded the question-quality work, so the relationship between the fixes and the current build is explicit.

## Architecture preserved throughout

- One shared account/authentication model continues to serve Reasoning and Foreign Languages.
- Quantitative and Verbal remain independent Reasoning tracks.
- The six-stage curriculum and 50% Explore / 50% Extend structure are preserved.
- Reasoning uses dedicated question banks and stable question IDs.
- The shared activity player remains the common execution layer for timing, scoring, feedback, completion, navigation and progress.
- Reasoning progress remains separate from Foreign Languages progress.
- No Foreign Languages architecture or content was changed as part of this remediation sequence.

## Stage 1 — Foundation remediation

### Navigation and activity flow

- Quantitative Stage 1 module navigation was added: commit `1cdaf88db4c8e650f7f61798e259f7e9a9313ea3`.
- Verbal Stage 1 module navigation was added: commit `20e75b7fa534f9c0cef979a0cced75c24cf9ff55`.
- Reasoning activity return navigation was improved: commit `230d0142c81d8219c443a1f63576d562622e5d02`.
- Reasoning activity navigation styling was corrected: commit `76a7114334523daee95a5478317fba3cd86b93c3`.
- Stage 1 navigation was subsequently verified/documented: commit `2e34ad0b5be4b2d3242410c02632dd1b6006800c`.

### Question-quality remediation

- The Stage 1 question bank was restored before quality remediation: commit `ee7b073cb6ab6676e5dfb5944ce75495728a5631`.
- Stage 1 choice-quality remediation was completed across the core and extension content: commits `282de52975a20ae7934574e09e16372b416009a6`, `7b6336f759f8340a75650caa790cbe3347a4a7fb`, `acdb54b66e906f4f23c2b232337a766654824987`, and `944341e4076fb63aec61e63d8ea2a7a35c36044f`.
- The permanent Question Quality Standard was applied as the governing assessment-quality rule rather than changing the underlying Reasoning architecture.

## Shared activity/runtime remediation before Stage 4

- Reasoning activity question loading and runtime guards were corrected: commits `f6174a0c6380ac309df5d699925e1d2d57d8009a` and `a3d1072631c469401adbf31526be62652d253e84`.
- Reasoning module return links were corrected: commit `14fc89fe3c1f9dc92b95224a14b977eaec020df5`.
- Reasoning activity navigation syntax was corrected: commit `55007ff9d56fc613e453c84a7d56e9e9005fce22`.
- Stage 4–6 shared activity navigation and scoring were completed: commit `2aacd55fa4e1e8691c9d597978192e83cd376516`.
- Shared activity timeout/module-navigation behavior was finalized, including completion handling when the final question times out: commit `a4dcf59644ec76e869c0184dd46efdb72a472589`.

## Stage 2 — Advanced Problem Solving / Critical Reading & Argument

- Stage 2 question-quality remediation was completed: commit `229468c0257b6181dd949de8a62fcb017c2c118c`.
- The remediation followed the permanent quality rules for answer-position balance, answer-length/structural clues, distractor quality, activity alignment and difficulty progression.

## Stage 3 — Mathematical Thinking / Analytical & Scholarly Writing

- The Stage 3 question bank was restored and substantively populated for both tracks: commit `1a90523ddcdcbc502729ce1b1d6132911f608d40`.
- Stage 3 remediation preserved stable IDs and the existing activity/player architecture while balancing answer positions and improving contextual distractors.

## Stage 4 — Math Olympiad / Essay Competitions

### Navigation remediation

- Quantitative Stage 4 dashboard navigation was fixed: commit `b2b5bf380197c541db7f1e2a590399eedcdae437`.
- Verbal Stage 4 dashboard navigation was fixed: commit `dbacd34e8a73911612cf31d83d94159fc9d363c6`.

### Activity and question-bank remediation

- Stage 4 activity question mappings were corrected so activities connect to their complete question sets: commit `0bcefb9b364b1bfcf198358bec79ad2446e9bbb0`.
- Stage 4 question quality, difficulty progression and answer-position distribution were remediated: commit `34a71590b0b75fa2c22841ae3aa0c385f2b51540`.
- Stage 4 remediation completion was recorded: commit `6a654430918f84aa814c017a3f9bdc6e1c2c6584`.

## Stage 5 — Proof & Advanced Mathematics / Research Skills

- Stage 5 retained the existing 20 activity groups and four-question structure: 10 Quantitative and 10 Verbal, split evenly between Explore and Extend.
- The Stage 5 question bank was remediated while preserving the existing activity IDs and generated question IDs: commit `f85f844b103f83258a26eb997c84c8222bc26924`.
- Each activity follows Core → Core → Stretch → Advanced progression.
- Correct-answer positions were rotated deterministically so the bank does not systematically place the correct answer in the same option position.
- Existing timing was retained: 55 seconds for Core questions and 65 seconds for Stretch/Advanced questions.
- The shared player, timing, scoring, timeout and completion architecture was preserved.

## Stage 6 — Mathematical Research / Research Writing & Publication

- Stage 6 retains 20 activities: 10 Quantitative and 10 Verbal, with 50% Explore and 50% Extend.
- The Stage 6 question bank contains four questions per activity, giving 80 questions across the stage.
- Stage 6 content covers mathematical inquiry, conjecture, modelling, proof, independent investigation, research design, literature search and synthesis, scholarly analysis, research writing and publication readiness.
- Correct-answer positions were rotated deterministically across the four-question activities to prevent systematic answer-position bias.
- Each activity follows Core → Core → Stretch → Advanced progression.
- Timing is 60 seconds for Core questions and 75 seconds for Stretch/Advanced questions.
- Stage 6 was committed directly to `main`: commit `3e49c5c4904d7f2a4b4c52cb451fdfb2f05aa5ba`.
- The shared activity player was preserved and continues to provide the common execution, scoring, timeout, completion and navigation behavior.

## Level 1 completion status

Level 1 Reasoning remediation is now recorded through **Stage 6**, completing the six-stage Level 1 remediation sequence. Stage 5 was confirmed Ready on Vercel by the project owner before the Level 2 build began. Stage 6 deployment status is intentionally not asserted here unless separately confirmed.

## Acceptance standard

A stage is not treated as remediated merely because the number of question records is correct. The content must also satisfy:

- activity-specific alignment;
- Core → Core → Stretch → Advanced progression for four-question activities;
- balanced answer positions;
- reduced answer-length and formatting/capitalization clues;
- plausible, reasoning-based distractors;
- stable question IDs and correct activity mappings;
- preserved navigation, timing, scoring, completion and progress architecture.

## Next development scope

Level 2 development begins with Stage 1. Level 2 is being added without altering the Level 1 curriculum, shared account architecture or Foreign Languages product.
