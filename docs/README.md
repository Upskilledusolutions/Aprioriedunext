# Project Documentation

This folder contains the documentation for Apriori Edu Next / Upskilleduonline.

## Important rule

These documents should describe the **actual project**, not an ideal or imagined version of it.

The documentation will be created and updated as the project is audited and developed.

## Planned documents

- `PROJECT_OVERVIEW.md` — what the project is and what products it contains.
- `PRODUCT_ARCHITECTURE.md` — how the Foreign Languages product and Reasoning & Academic Skills product fit together.
- `USER_FLOWS.md` — login, product selection, and important user journeys.
- `DATA_AND_PROGRESS.md` — how user data, progress, achievements, points, streaks, and leaderboards are separated by product.
- `DEVELOPMENT_RULES.md` — rules for safely developing the project without breaking the existing Foreign Languages product.
- `CHANGELOG.md` — simple record of important changes made to the project.

## Documentation principle

The existing Foreign Languages product must continue to work independently while the Reasoning & Academic Skills product is developed alongside it.

Shared systems should be reused where appropriate, especially authentication and user identity. Product-specific systems such as curriculum, progress, gamification, achievements, streaks, and leaderboards should remain separate.

Technical details should be documented only after they have been verified in the actual codebase.
