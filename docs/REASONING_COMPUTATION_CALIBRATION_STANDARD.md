# Reasoning Computation Calibration Standard

Last updated: 2026-09-10

## Purpose

This is the source-of-truth rule for **Computation** and **Computation + Reasoning** questions across the entire Reasoning curriculum.

## Difficulty rule

A question must be calibrated by the **actual reasoning demand**, not merely by its numeric `difficulty` field.

For every Reasoning Level (L1–L9) and every Stage (S1–S6), computation and computation-plus-reasoning delivery must be designed at **two difficulty levels above the previously recalibrated baseline** when an audit identifies that baseline as insufficient. The uplift is cumulative only when explicitly ordered by the current remediation; it must never be achieved by changing metadata alone.

The uplift must appear in the question itself through additional reasoning demand: more meaningful steps, less direct operations, inverse reasoning, multi-condition constraints, generalization, transfer, estimation/checking, proportional relationships, or other appropriate complexity. Vocabulary must not be used as a substitute for mathematical difficulty.

## Stage 1 implementation

Level 1 · Stage 1 Quantitative computation delivery has been replaced by a new elevated bank covering all seven computation/computation-plus-reasoning activities. Each activity delivers exactly 10 questions. The new bank is two additional difficulty levels above the prior recalibrated computation standard and includes `Computation + Reasoning` items in Multi-Step Reasoning.

Stable IDs are new and delivery remains isolated through the existing Stage 1 remediation resolver. The activity player, scoring, timing, completion and progress architecture are unchanged.

## All stages and levels

This standard applies prospectively to:

- Levels 1–9
- Stages 1–6 within every level
- Quantitative Computation questions
- Quantitative Computation + Reasoning questions

It does **not** mean every question must have the same absolute difficulty. The two-level uplift is relative to the calibrated baseline for the specific Level/Stage placement, and difficulty must still progress incrementally within Explore and Extend.

## Acceptance criteria

Before a stage is considered complete:

1. Every delivered computation/computation-plus-reasoning question is substantively harder than the prior recalibrated baseline by the required two-level uplift.
2. Difficulty is demonstrated in the task, not only in metadata.
3. Questions remain appropriate to the curriculum concept and track.
4. Computation + Reasoning genuinely requires interpretation plus calculation.
5. Exactly 10 distinct questions are delivered per activity unless a documented exception exists.
6. Answers, explanations, stable IDs, timing and content-mode metadata are valid.
7. Explore/Extend progression remains coherent.
8. Runtime loading and the learner-facing activity player remain functional.
9. The change is implemented as one focused deployment whenever the related fixes can be safely validated together.

## Grade visibility

School-grade labels and mappings remain documentation-only reference data. They must never be displayed in the learner-facing Reasoning navigation, dashboards, cards, module pages, activity pages or progress labels.
