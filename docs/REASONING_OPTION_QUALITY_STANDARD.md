# Reasoning Option Quality Standard

**Status:** Mandatory source-of-truth rule for all current and future Reasoning Levels 1–9 and Stages 1–6.

## Purpose

A learner must not be able to infer a multiple-choice answer from superficial presentation rather than from the reasoning required by the question.

## Required controls

Every Reasoning multiple-choice question must be audited for four independent cue classes:

1. **Answer position** — the correct answer must not follow a predictable A/B/C/D pattern.
2. **Capitalization/case** — the correct answer must not be the only option beginning with upper- or lowercase text when the options are otherwise equivalent.
3. **Punctuation/formatting** — the correct answer must not be the only option with distinctive terminal punctuation or formatting.
4. **Character length** — the correct answer must not be systematically or uniquely the longest or shortest option. Material length imbalance must be corrected by re-authoring distractors/answers, not by padding text with meaningless characters.

The same rules apply to **Quantitative Text-Based Reasoning** and **all Verbal** questions. They also apply to any future multiple-choice question set regardless of Level or Stage.

## Stage 1 implementation

Level 1 · Stage 1 Verbal delivery now passes through a shared option-quality preparation layer before delivery. The layer:

- normalizes inconsistent initial capitalization across an option set;
- normalizes terminal punctuation for presentation consistency;
- randomizes answer position per question delivery;
- records a length-cue flag when the correct answer is a unique shortest/longest option so that the content can be re-authored;
- preserves the semantic answer and stable question ID.

The mechanism is deliberately **not** allowed to solve length imbalance by adding invisible or meaningless characters. Length-cue flags are a content-authoring issue and must be corrected in the question bank.

## Mandatory stage workflow

Before a stage deployment:

```text
inspect question bank
→ run option-quality audit
→ re-author length/cue violations
→ apply shared presentation preparation
→ validate IDs/mappings/content mode
→ one coherent deployment
→ owner verification
→ record the verified result
```

Do not repeat this as an ad-hoc fix at each stage. The standard is global; each stage only supplies its own audited content.

## Recording standard

Every future remediation record must state:

- **Change ID / date**
- **Affected Level + Stage + track**
- **Question-mode scope**
- **Defect found**
- **Content correction**
- **Shared mechanism used**
- **Validation performed**
- **Commit/deployment SHA**
- **Owner verification status**

Historical records remain preserved, but the latest source-of-truth standard overrides older records where requirements conflict.

## Acceptance criteria

A stage cannot be marked verified if:

- a correct answer has a systematic position pattern;
- capitalization or punctuation reveals the answer;
- a correct answer is consistently or uniquely the longest/shortest option without a content reason;
- distractors are visibly weaker because of superficial construction;
- the option-quality audit has not been run for the affected question set.

No Foreign Languages changes are part of this standard.
