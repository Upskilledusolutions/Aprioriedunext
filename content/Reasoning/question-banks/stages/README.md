# Human-Editable Reasoning Stage Question Banks

This directory is the preferred editing surface for **migrated** Reasoning content.

## File convention

Use one JSON document per Stage, for example:

`L1-S1-reasoning-question-bank.json`

The document must contain:

```json
{
  "schemaVersion": "1.0",
  "bankId": "reasoning-L1-S1",
  "track": "quantitative",
  "levelId": "L1",
  "stageId": "S1",
  "version": 1,
  "questions": []
}
```

Each question object uses the canonical field names defined in:

`docs/REASONING-HUMAN-EDITABLE-CANONICAL-QUESTION-BANK-SPEC.md`

Do not create migrated Stage documents by copying or rewriting the existing JavaScript banks until the migration step for that Stage is explicitly performed.

Existing JavaScript banks remain controlled source pools during migration.
