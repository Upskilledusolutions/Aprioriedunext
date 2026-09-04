# Development Rules

These rules are the project's safety guide. They are written so that an AI coding assistant and a non-technical project owner can use them.

## 1. Protect the existing Foreign Languages product

The existing Foreign Languages product is live project functionality. Do not rewrite or restructure it unnecessarily.

Before changing shared code, identify whether the change can affect:

- login
- user identity
- language courses
- language progress
- language points
- language streaks
- language leaderboard
- payments
- admin functions

## 2. One login, two products

Do not create a second authentication system for Reasoning & Academic Skills unless a verified technical requirement makes it unavoidable.

Use the existing user identity and authentication infrastructure where practical.

## 3. Separate product data

Foreign Languages and Reasoning & Academic Skills must not share product-specific progress accidentally.

Keep separate:

- curriculum
- dashboards
- progress
- achievements
- points
- streaks
- leaderboards

## 4. Inspect before modifying

Never change a file simply because its name looks relevant.

First:

1. Read the actual file.
2. Trace what imports it.
3. Identify what data it reads/writes.
4. Identify whether it communicates with the backend.
5. Identify whether it is shared by both products.
6. Explain the risk before making the change.

## 5. Prefer small changes

Do not perform a large rewrite when a small addition or isolated module can achieve the same result.

Prefer:

```text
new product module
        ↓
shared authentication
        ↓
existing language module remains intact
```

over:

```text
rewrite entire application
```

## 6. Every code change must be understandable

For every change, provide the non-technical owner with:

- what we are changing
- why we are changing it
- exact file path(s)
- what will be added/removed/replaced
- whether existing functionality is affected
- how to test it
- expected result
- what to do if the test fails
- how to roll back the change

## 7. Backend changes require special attention

The frontend uses `NEXT_PUBLIC_BACKENDURL` to communicate with a separate backend. The backend is not part of this repository.

If a feature requires permanent data storage, new API endpoints, database changes or server-side authorization, clearly identify that backend work before proceeding.

## 8. Security

Never place passwords, private keys, database credentials, API secrets or other confidential values in source code or documentation.

The `.gitignore` already excludes local environment files such as `.env*.local`; do not remove that protection without a specific reason.

Frontend protection is not sufficient for sensitive data. The backend must enforce authorization.

## 9. Do not expose secrets in documentation

Documentation may describe the existence and purpose of an environment variable, but must never contain the secret value.

## 10. Preserve existing progress

Do not delete, reset or migrate existing learner progress unless a migration plan has been reviewed and tested.

## 11. Product selection

The desired experience is:

```text
ONE LOGIN
    ↓
PRODUCT SELECTION
    ├── Foreign Languages
    └── Reasoning & Academic Skills
```

The selected product controls the learning experience without changing the underlying user identity.

## 12. Testing priority

When a shared change is made, test the existing Foreign Languages flow as well as the new Reasoning flow.

At minimum, verify:

- login still works
- logout still works
- existing language dashboard still opens
- existing language progress is unchanged
- new Reasoning dashboard opens
- Reasoning progress does not appear inside Language progress
- switching products does not log the user out

## 13. No premature technical decisions

Do not invent a database schema, API contract or architecture just to fill documentation.

If something has not been verified, label it as **To Be Verified**.

## 14. Zero-cost development preference

During validation, prefer the existing infrastructure and free tiers. Do not add paid services unless there is a clear business or technical reason.

## 15. AI development rule

The AI assistant must read the documentation in `/docs` before making architectural changes.

If the code conflicts with the documentation, the AI should stop and explain the conflict before making a broad change.

## 16. Priority order

When making decisions, use this order:

**Safety → Separation → Simplicity → Reuse → Scalability**
