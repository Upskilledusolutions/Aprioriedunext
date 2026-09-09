# Reasoning Remediation History

**Project:** Apriori Edu Next / Upskilleduonline  
**Scope recorded here:** Level 1 Reasoning remediation through Stage 4 only  
**Last updated:** 2026-09-09

This document is the chronological remediation record for the completed Level 1 work through Stage 4. It records the navigation/runtime fixes that preceded the question-quality work, so the relationship between the fixes and the current build is explicit.

## Architecture preserved throughout

- One shared account/authentication model continues to serve Reasoning and Foreign Languages.
- Quantitative and Verbal remain independent Reasoning tracks.
- The six-stage curriculum and 50% Explore / 50% Extend structure are preserved.
- Reasoning uses its dedicated question banks and stable question IDs.
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
- Stage 3 remediation produced the working bank used by the current build while preserving stable IDs and the existing activity/player architecture.

## Stage 4 — Math Olympiad / Essay Competitions

### Navigation remediation

- Quantitative Stage 4 dashboard navigation was fixed: commit `b2b5bf380197c541db7f1e2a590399eedcdae437`.
- Verbal Stage 4 dashboard navigation was fixed: commit `dbacd34e8a73911612cf31d83d94159fc9d363c6`.

### Activity and question-bank remediation

- Stage 4 activity question mappings were corrected so activities connect to their complete question sets: commit `0bcefb9b364b1bfcf198358bec79ad2446e9bbb0`.
- Stage 4 question quality, difficulty progression and answer-position distribution were remediated: commit `34a71590b0b75fa2c22841ae3aa0c385f2b51540`.
- Stage 4 remediation completion was recorded: commit `6a654430918f84aa814c017a3f9bdc6e1c2c6584`.

## Current recorded endpoint

Stage 4 is the last stage recorded in this history. Its deployment work is complete in the repository, and the project owner has confirmed that the relevant Vercel deployments are showing **Ready**.

**Stages after Stage 4 are intentionally not documented in this history yet.** Their remediation work will be recorded only after project-owner verification and explicit instruction to record it.

## Acceptance standard used through Stage 4

A stage is not treated as remediated merely because the number of question records is correct. The content must also satisfy:

- activity-specific alignment;
- Core → Core → Stretch → Advanced progression for four-question activities;
- balanced answer positions;
- reduced answer-length and formatting/capitalization clues;
- plausible, reasoning-based distractors;
- stable question IDs and correct activity mappings;
- preserved navigation, timing, scoring, completion and progress architecture.
