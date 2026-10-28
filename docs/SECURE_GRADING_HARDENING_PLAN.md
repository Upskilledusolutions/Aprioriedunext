# Secure Grading Hardening — Foreign Languages and Reasoning Skills

**Planning record:** 2026-10-28  
**Status:** Checkpoint 1 (read-only baseline audit) is complete. Checkpoint 2 has started: backend-only answer-key registry/exporter scaffolding is on the separate Backend branch `secure-grading-hardening`. The owner reported a local test passing on 2026-10-28, but the exact command/output and full export result are not yet recorded. This remains a bounded implementation plan, not authorization to change production, merge branches, enable feature flags, or deploy.  
**Scope:** Move answer checking for existing Foreign Languages and Reasoning Skills activities to the backend while preserving the current learner experience and product architecture.

## Goal and boundaries

The browser may display the question and available choices, but it must not receive the correct-answer key or decide the authoritative correctness/score. The existing backend must check submitted responses and calculate the authoritative result. The browser should display the returned result and feedback.

Keep the existing login and user identity, product routes, question/activity identifiers, UI, navigation, progress/analytics contracts and product-data separation wherever possible. Prefer additive, product-scoped backend grading and generated answer-free browser data over a redesign. Foreign Languages and Reasoning must remain logically separate. Do not create a second login system, a new database or a separate Render service unless the audit demonstrates a real requirement and the owner approves it.

Use the existing Render backend and established deploy-then-verify workflow by default. Add backend capability compatibly before switching the relevant frontend player to use it; verify one product at a time. This plan does not itself authorize a production change or release.

## Verified starting point

- **Foreign Languages:** the inspected French exercise implementation imports questions with `correctAnswer` into the browser, checks the learner's selection in frontend code, and sends completion/points to the backend. Audit the other language/response formats before treating them as identical.
- **Reasoning Skills:** frontend activity data/player determines correctness. The backend protects learner identity and Level access and persists attempts, but the existing attempt endpoint accepts the browser-supplied correctness value. That is persistence and access control, not authoritative grading.
- **English Aptitude:** its separate secure-grading prototype is disabled by default and undeployed. Do not assume it is a complete shared grader or reuse its limited answer list without inspecting dependencies and product boundaries.

## Eight major implementation checkpoints

1. **Read-only baseline audit.** Inventory the actual answer banks, formats, answer/feedback fields, scoring rules, authentication/access behavior, current result-saving routes, and analytics dependencies in both products. Identify how many distinct grading formats must be supported. No code changes during this checkpoint.
2. **Create a server-only answer-key source.** Generate or synchronize the keys from existing authoritative question banks so answer keys do not need to be manually re-entered. Add a drift check and validation for missing/duplicate question IDs and invalid answers. Keep existing source IDs and learning content intact. No new database is planned just to store answer keys.
3. **Add authoritative backend grading.** Add or extend product-scoped backend logic on the existing service. The server must validate question/activity identifiers and submitted responses, derive the learner identity from the existing session where authentication is required, enforce existing access rules, and calculate correctness/score itself. It must not trust browser-supplied `isCorrect`, correct answers, explanations, or scores. Return only the result and feedback appropriate for that response.
4. **Prepare answer-free browser content.** Ensure delivered frontend data and compiled browser assets do not contain answer keys or other answer-revealing fields. Preserve the learner-facing prompts, passages, options, layout, and navigation. Correct-answer explanations/feedback must be returned only at the appropriate point by the backend.
5. **Integrate Reasoning Skills.** Switch the existing player to backend grading without changing the learner-facing flow. Ensure authoritative grading and attempt persistence are connected safely: a browser must not be able to submit a fabricated correctness value to the existing attempt endpoint and have it stored as truth. Preserve the existing Reasoning data namespace, access rules, attempts, and analytics.
6. **Integrate Foreign Languages.** Update the existing exercise/player flows to use backend results for every response format confirmed in the audit. The server must calculate stored scores rather than trust the points sent by the browser. Preserve supported interaction types, immediate feedback behavior, completion flows, language progress, and existing data.
7. **Run focused security and regression verification.** Test correct and incorrect responses for every distinct format; tampered answers/scores; missing or unauthorized sessions where applicable; absence of answer keys from delivered browser assets and responses; persistence and analytics; and no cross-product data leakage. Smoke-test the affected language courses, Reasoning, login/navigation, and existing progress. Reuse already-passed tests unless relevant code or requirements change.
8. **Deploy and verify in controlled order.** After the required approval gate, release the compatible backend change through the existing Render workflow, then update and verify Reasoning on the public website before switching Foreign Languages. Confirm the exact deployed commits and check learner feedback, scores, saved records, analytics, and existing product behavior. Stop and remediate any regression before proceeding to the next product. Do not create a new service, merge, enable a feature flag, or deploy outside the documented approval boundary without explicit approval.

## Step-count commitment

The plan contains **8 major checkpoints**. The expected planning range is **8–10**, with **11 as the maximum before returning to the owner for agreement on any revised estimate**. Do not count each language, question bank, response format, individual test command, or deployment sub-action as a new roadmap step; group them under the checkpoint they serve. If the audit discovers a substantial incompatibility that cannot reasonably fit an existing checkpoint, explain it and its effect before expanding the plan. Do not silently double the step count.

These are major implementation checkpoints, not a promise that each checkpoint requires only one file edit or one command. The implementation should remain grouped into meaningful increments, with clear outcomes at every checkpoint. Give advance notice before any necessary Windows Command Prompt work and provide expected output.

## Cost and service constraint

The plan assumes the current Render backend and its existing database arrangement. **No additional Render service or database is planned, so no additional service fee is expected.** This is not a guarantee against future capacity-related plan upgrades or charges; inspect actual resource needs before proposing any paid change. Do not create/configure a service or incur new costs without explicit approval.

## Release and regression safeguards

- Backend grading, not browser-calculated correctness, is authoritative.
- Never deliver answer keys to the browser; hiding them in the UI alone is insufficient.
- Preserve existing learner records; do not reset, reconstruct, or cross-attribute history.
- Keep changes product-scoped and backward-compatible where practical; avoid broad redesigns or unrelated refactoring.
- Passing automated tests does not itself authorize a production release.
- English Aptitude reading-source eligibility and approval remain separate gates; no original reading drafts may be released.


## Checkpoint 1 complete — read-only baseline audit (2026-10-28)

Recorded in [SECURE_GRADING_BASELINE_AUDIT.md](SECURE_GRADING_BASELINE_AUDIT.md).

Key results:
- Foreign Languages has answer keys in browser-loaded language/level banks and grades in the browser across at least six shared response mechanics. Its common `/api/updateScore` endpoint accepts client-supplied user ID and points without `requireAuth`; this must be addressed compatibly when server grading is introduced.
- Reasoning's active player uses browser-loaded `answer` and `explanation` values, calculates correctness locally, and submits `correctAnswer` and `isCorrect`. The authenticated backend correctly enforces identity/Level access for attempt writes but does not independently grade the answer; stored correctness flows into analytics.
- The smallest maintainable approach remains a generated server-only answer/evaluation source plus browser-safe question data, with synchronized keys based on the **final delivered/calibrated question sets** and product-scoped server grading.

**Checkpoint 1 is a source audit, not a live security test.** No application code, runtime configuration, learner records, feature flags, services or production deployments changed, and no branch was merged. GitHub feature-branch documentation commits may trigger automatic Vercel preview builds. The plan remains at **8 major checkpoints**, with the existing 8–10 expected range and 11-step ceiling unchanged.


## Checkpoint 2 started — answer-key tooling (2026-10-28)

The separate Backend branch `secure-grading-hardening` now contains:
- `grading/answerKeyRegistry.js` — schema validation and server-only lookup;
- `scripts/exportSecureGradingAnswerKeys.js` — exporter for existing Foreign Languages banks and approved learner-facing Reasoning runtime/calibrated question sets;
- `scripts/testSecureGradingAnswerKeyRegistry.js` and npm scripts for checking the tooling.

The owner reported a local test passing on 2026-10-28, but did not identify the exact command or supply the result. Therefore, do **not** infer that the full bank export passed. Next, confirm the result of `npm run secure-grading:export-answer-keys`: require counts for both products, zero unresolved issues, and a verified generated manifest plus export audit before marking Checkpoint 2 complete. Backend implementation details are tracked in [SECURE_GRADING_HARDENING.md](https://github.com/Upskilledusolutions/Backend/blob/secure-grading-hardening/docs/SECURE_GRADING_HARDENING.md).

No grading routes or frontend player paths have been switched; no feature flag, production setting, service, database, or deployment was changed. No branch was merged. The plan remains at **8 major checkpoints** (expected 8–10; maximum 11 without agreement on a revised estimate).
