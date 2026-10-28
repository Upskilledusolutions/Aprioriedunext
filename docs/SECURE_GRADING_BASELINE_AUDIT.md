# Secure Grading Baseline Audit — Foreign Languages and Reasoning Skills

**Audit date:** 2026-10-28  
**Checkpoint:** 1 of the 8-step Secure Grading Hardening plan  
**Method:** Read-only inspection of the current frontend and backend `main` branches and the documented deployed contracts.  
**Code/configuration changes:** None. No tests or deployments were deliberately triggered by this inspection-only checkpoint. Documentation commits on the feature branch may cause automatic Vercel preview builds; no production deployment was triggered.

## Executive findings

The current implementation confirms the need for server-side grading, but the two products have different integration paths:

- **Foreign Languages:** question banks and correct-answer data are imported into the browser. Shared players check answers and calculate scores in frontend code. The common score-save endpoint accepts `userId` and `points` supplied by the browser and does not apply the existing session-authentication middleware.
- **Reasoning Skills:** the active player imports questions containing the correct answer and explanation, checks answers locally, displays the answer in learner feedback, and sends both `correctAnswer` and `isCorrect` to an authenticated backend attempt endpoint. The endpoint verifies identity and Level access, but it stores the browser-supplied correctness rather than independently grading the response. Analytics then uses that saved correctness.
- **Architecture:** no product redesign or separate service is needed as the default. The safe change is to separate authoring/source records from generated browser-safe delivery data and a server-only answer-key/evaluation module. Backend grading must calculate correctness and score from the authenticated learner's response. Existing product-specific records and routes should remain separate.

## 1. Foreign Languages — frontend question data and grading

### Verified question-bank families and learner routes

The inspected main-branch code shows these families:

- Exercise banks, for example [`src/Data/ExerciseData/french.js`](https://github.com/Upskilledusolutions/Aprioriedunext/blob/main/src/Data/ExerciseData/french.js) and [`src/Data/ExerciseData/Englisha1.js`](https://github.com/Upskilledusolutions/Aprioriedunext/blob/main/src/Data/ExerciseData/Englisha1.js), used by language exercise pages such as [`src/pages/Exercise/FrenchExercise/[id].js`](https://github.com/Upskilledusolutions/Aprioriedunext/blob/main/src/pages/Exercise/FrenchExercise/%5Bid%5D.js).
- Legacy quiz-time banks such as [`src/Data/frenchquestions.js`](https://github.com/Upskilledusolutions/Aprioriedunext/blob/main/src/Data/frenchquestions.js), used by [`src/pages/QuizTime/FrenchQuiz/[id].js`](https://github.com/Upskilledusolutions/Aprioriedunext/blob/main/src/pages/QuizTime/FrenchQuiz/%5Bid%5D.js).
- Practice-test banks such as [`src/Data/Practicetests/french.js`](https://github.com/Upskilledusolutions/Aprioriedunext/blob/main/src/Data/Practicetests/french.js), used by [`src/pages/Practicetest/FrenchQuiz/[id].js`](https://github.com/Upskilledusolutions/Aprioriedunext/blob/main/src/pages/Practicetest/FrenchQuiz/%5Bid%5D.js).
- Reading assignments such as [`src/Data/ReadingAssignments/English.js`](https://github.com/Upskilledusolutions/Aprioriedunext/blob/main/src/Data/ReadingAssignments/English.js) and listening assignments such as [`src/Data/ListeningAssignments/English.js`](https://github.com/Upskilledusolutions/Aprioriedunext/blob/main/src/Data/ListeningAssignments/English.js). Their route components dynamically import assignment banks into the browser.

The full repository contains many language/level-specific banks. These inspected files establish the recurring patterns but are not a claim that every single bank file has already been individually inventoried. The implementation checkpoint that builds the bank-splitting generator must enumerate the repository's complete set and fail on any unclassified bank or question format.

### Where correct answers are available to the browser

- Question records include `correctAnswer` and available choices. The shared [MCQ component](https://github.com/Upskilledusolutions/Aprioriedunext/blob/main/components/QuestionContent/MCQ.js) receives and reads `correctAnswer`; exercise and quiz-time pages compare the selected option with that value.
- Fill-in-the-blank records also use `correctAnswer`, usually as an index into `choices`. The [FillInTheBlanks component](https://github.com/Upskilledusolutions/Aprioriedunext/blob/main/components/QuestionContent/FillInTheBlanks.js) compares typed input locally against the expected choice.
- Matching questions encode the pairing in the question data using `rightId`. The [MatchTheFollowing component](https://github.com/Upskilledusolutions/Aprioriedunext/blob/main/components/QuestionContent/MatchtheFollowing.js) checks these IDs in the browser.
- Other shared practice-test components add further grading patterns: sentence/word reordering in [`ReorderParagraph.js`](https://github.com/Upskilledusolutions/Aprioriedunext/blob/main/components/QuestionContent/ReorderParagraph.js), selecting the required words via `correctAnswers` in [`HighlightIncorrectWords.js`](https://github.com/Upskilledusolutions/Aprioriedunext/blob/main/components/QuestionContent/HighlightIncorrectWords.js), and categorisation via correct `type` metadata in [`SelectMissingWords.js`](https://github.com/Upskilledusolutions/Aprioriedunext/blob/main/components/QuestionContent/SelectMissingWords.js).

**At least six distinct grading mechanics are confirmed in the inspected shared components:** multiple choice, typed fill-in, matching pairs, sentence/word ordering, select-the-required-words, and categorisation/drag-and-drop. Reading, listening and quiz-time pages also use answer-key-bearing multiple-choice records. Any additional bank format discovered by the full inventory must be handled inside the same planned checkpoint rather than counted as a new roadmap step.

### How scores and completion are saved

- [`src/helperfunction/SendQuizdata.js`](https://github.com/Upskilledusolutions/Aprioriedunext/blob/main/src/helperfunction/SendQuizdata.js) sends `userId`, `points`, exercise, language and question type to `POST /api/updateScore`. The point total is calculated in the browser; this request does not include `credentials: "include"`.
- [`src/helperfunction/Finishedquiz.js`](https://github.com/Upskilledusolutions/Aprioriedunext/blob/main/src/helperfunction/Finishedquiz.js) sends the supplied `userId` and completed-quiz marker to `POST /api/completed-quizzes`, also without `credentials: "include"`.
- In the current backend [`routes/dynamicRoutes.js`](https://github.com/Upskilledusolutions/Backend/blob/main/routes/dynamicRoutes.js), both `/updateScore` and `/completed-quizzes` are registered without `requireAuth`. The score route uses the browser-submitted `userId` to locate a learner and accepts the submitted `points` instead of recalculating them from trusted answer records.
- The inspected QuizTime player calculates a local result and displays it locally; it does not use the shared score-sender flow in that file. Persistence behavior varies across the different route families and must be preserved during integration.

**Consequence:** a server grader alone is insufficient if the old endpoint continues to accept arbitrary points. For affected flows the backend must derive the learner from the existing signed session, calculate the score from server-verified answers, and preserve the current completion/progress behavior without trusting a browser-provided score or user ID. Existing endpoints should be migrated compatibly and tested before they are changed.

## 2. Reasoning Skills — frontend grading and backend persistence

### Current learner flow

The main-branch [Reasoning Activity page](https://github.com/Upskilledusolutions/Aprioriedunext/blob/main/src/pages/Reasoning/Activity/%5BactivityId%5D.js) loads activity questions from frontend modules such as [`stage1RemediationQuestionBank.js`](https://github.com/Upskilledusolutions/Aprioriedunext/blob/main/src/Data/Reasoning/stage1RemediationQuestionBank.js), with other stage-specific banks/calibration layers; Stage 4's delivery module imports a canonical JSON file directly. The active question records contain `answer`, `options`, and `explanation`.

The Activity page compares the selected option with `question.answer`, calculates the visible activity score in the browser, and shows the correct answer/explanation after answering or timeout. Its `recordQuestionAttempt` function sends `correctAnswer: question.answer` and `isCorrect: selectedAnswer === question.answer` to the persistence helper. Since these answer-bearing question modules are imported by the learner page, the answer data is available in browser-delivered code/data; hiding answer text in the UI would not remove that exposure.

### What the backend already protects—and what it does not

- [`routes/reasoning.js`](https://github.com/Upskilledusolutions/Backend/blob/main/routes/reasoning.js) protects `POST /api/reasoning/attempts` with `requireAuth` and checks the authenticated learner's `reasoningAccess`. The learner identity is derived from the session, and the GET endpoint scopes results to that learner.
- However, the POST endpoint accepts `body.isCorrect` and `body.correctAnswer` and stores those browser-supplied values. Its current contract does not resolve the right answer independently on the server.
- [`src/pages/Reasoning/Analytics/index.js`](https://github.com/Upskilledusolutions/Aprioriedunext/blob/main/src/pages/Reasoning/Analytics/index.js) reads persisted attempts and computes accuracy from their stored `isCorrect` values. Consequently, tampering with the submitted correctness can affect saved attempt analytics even though the request is authenticated.
- The existing dedicated Reasoning database namespace, session authentication, Level authorization, attempt identity and idempotent persistence are useful foundations and must be preserved. The grading work must not replace Reasoning's data model with Foreign Languages records or break the existing analytics contract.

**Consequence:** Reasoning must move both checking and authoritative result generation to the server. The request should supply the activity/question identifier and selected response—not the answer key, explanation, correctness flag or score. The backend should return the verdict and appropriate feedback, then save server-derived correctness for analytics. The learner's current interface can remain substantially unchanged.

## 3. Recommended design for the next checkpoints

### Checkpoint 2 — server-only keys plus browser-safe question data

Generate two outputs from the authoritative question sources:

1. A backend-only answer/evaluation module containing the key and rules for each stable activity/question ID.
2. Browser-safe question data containing the prompt, required choices and display metadata only.

Do not merely strip answer fields at render time: if the original keyed module is imported into a client bundle, its values can still be inspected. Add a consistency/drift check so the two generated outputs cannot silently diverge. For Reasoning, generate from the **final calibrated runtime delivery** (including remediation/replacement mappings), not from an incomplete raw bank, or the server may grade against a different answer set than the learner saw.

For Foreign Languages, the evaluator must represent the verified response mechanics (including matching maps, typed answers, reorder/categorisation and multi-select cases), not only MCQ indices.

### Checkpoint 3 — backend grading and authorization

Use the existing Render service, existing signed session, existing Auth identity and existing database arrangement by default. Add product-scoped grading contracts; derive user identity on the server for stored outcomes; validate activity/question IDs and response shape; calculate scores server-side; reject client-supplied correctness/score fields as authoritative. Preserve separate Foreign Languages, Reasoning and English Aptitude records and routes.

### Remaining checkpoints

Continue through the original 8-checkpoint plan: answer-free browser integration, Reasoning integration, Foreign Languages integration, focused security/regression verification, and the already-approved deploy-then-verify release process. These are not added steps; the findings above fit the existing checkpoints.

## 4. Step-count and scope decision

This baseline audit **does not increase the plan's 8 major checkpoints**. Keep the original expected range of 8–10, with a maximum of 11 before returning to the owner for agreement. Enumerating every language/level bank, implementing each evaluator, and testing each route family are sub-tasks within the existing checkpoints, not separate roadmap steps.

## 5. Audit limitations and controls

- This was a source-code/documentation inspection, not a live penetration test. No request was sent to manipulate a user score or write a learner record.
- The audit inspected representative bank families and all shared grading components located by repository search; the generated inventory in Checkpoint 2 must scan and classify every relevant bank/route before any answer key is split.
- No application code, service configuration, database contents or feature flags were changed; no branch was merged and no production deployment was triggered. The GitHub feature-branch documentation commit may cause Vercel to create an automatic non-production preview.
