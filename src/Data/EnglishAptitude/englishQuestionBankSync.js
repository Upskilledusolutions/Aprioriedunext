/**
 * English Aptitude editable-bank <-> canonical-bank conversion.
 *
 * The editable JSON format is intended for human-maintained source files.
 * Canonical records are the validated shape consumed by later English-specific
 * runtime work. Conversion preserves all fields except the two explicit
 * version-field renames; unknown metadata is preserved rather than discarded.
 */
const { validateEnglishBank } = require("./englishQuestionSchema");

function isPlainObject(value) {
  if (value === null || typeof value !== "object" || Array.isArray(value)) return false;
  const prototype = Object.getPrototypeOf(value);
  return prototype === Object.prototype || prototype === null;
}

function cloneJsonValue(value, path = "$", seen = new Set()) {
  if (value === null || typeof value === "string" || typeof value === "boolean") return value;
  if (typeof value === "number") {
    if (!Number.isFinite(value)) throw new Error(`Non-finite number at ${path}; bank files must be valid JSON data.`);
    return value;
  }
  if (typeof value !== "object") {
    throw new Error(`Unsupported value at ${path}; editable banks must contain JSON-compatible values only.`);
  }
  if (seen.has(value)) throw new Error(`Circular reference at ${path}; editable banks must be JSON-compatible.`);
  if (!Array.isArray(value) && !isPlainObject(value)) {
    throw new Error(`Unsupported object at ${path}; editable banks must use plain objects and arrays.`);
  }
  seen.add(value);
  let result;
  if (Array.isArray(value)) {
    result = value.map((item, index) => cloneJsonValue(item, `${path}[${index}]`, seen));
  } else {
    result = {};
    for (const key of Object.keys(value)) {
      result[key] = cloneJsonValue(value[key], `${path}.${key}`, seen);
    }
  }
  seen.delete(value);
  return result;
}

function assertVersion(value, label) {
  if (!Number.isInteger(value) || value < 1) throw new Error(`${label} must be a positive integer.`);
}

function assertEditableBankShape(editable) {
  if (!isPlainObject(editable)) throw new Error("Editable bank must be a plain object.");
  if (editable.formatVersion !== "1.0") throw new Error("formatVersion must be 1.0.");
  if (Object.prototype.hasOwnProperty.call(editable, "schemaVersion") || Object.prototype.hasOwnProperty.call(editable, "version")) {
    throw new Error("Editable banks must use formatVersion and bankVersion, not canonical version fields.");
  }
  if (typeof editable.bankId !== "string" || !editable.bankId.trim()) throw new Error("bankId must be non-empty text.");
  if (typeof editable.levelId !== "string" || !editable.levelId.trim()) throw new Error("levelId must be non-empty text.");
  if (typeof editable.stageId !== "string" || !editable.stageId.trim()) throw new Error("stageId must be non-empty text.");
  assertVersion(editable.bankVersion, "bankVersion");
  if (!Array.isArray(editable.questions)) throw new Error("Editable bank questions must be an array.");
}

function assertNoValidationErrors(errors, label) {
  if (errors.length) throw new Error(`${label} validation failed:\n- ${errors.join("\n- ")}`);
}

function editableBankToCanonical(editable, context = {}) {
  assertEditableBankShape(editable);
  const safeCopy = cloneJsonValue(editable);
  const canonical = { ...safeCopy };
  delete canonical.formatVersion;
  delete canonical.bankVersion;
  canonical.schemaVersion = "1.0";
  canonical.version = safeCopy.bankVersion;
  assertNoValidationErrors(validateEnglishBank(canonical, context), "Canonical bank");
  return canonical;
}

function canonicalBankToEditable(canonical, context = {}) {
  if (!isPlainObject(canonical)) throw new Error("Canonical bank must be a plain object.");
  assertNoValidationErrors(validateEnglishBank(canonical, context), "Canonical bank");
  const safeCopy = cloneJsonValue(canonical);
  const editable = { ...safeCopy };
  delete editable.schemaVersion;
  delete editable.version;
  editable.formatVersion = "1.0";
  editable.bankVersion = safeCopy.version;
  return editable;
}

function assertRoundTripIntegrity(editable, context = {}) {
  const canonical = editableBankToCanonical(editable, context);
  const roundTripped = canonicalBankToEditable(canonical, context);
  const expected = cloneJsonValue(editable);
  if (!isPlainObject(expected)) throw new Error("Editable bank must be a plain object.");
  // Compare serialized JSON with stable object-key ordering, while retaining array order.
  const stableStringify = value => {
    if (Array.isArray(value)) return `[${value.map(stableStringify).join(",")}]`;
    if (isPlainObject(value)) {
      return `{${Object.keys(value).sort().map(key => `${JSON.stringify(key)}:${stableStringify(value[key])}`).join(",")}}`;
    }
    return JSON.stringify(value);
  };
  if (stableStringify(roundTripped) !== stableStringify(expected)) {
    throw new Error("Editable → canonical → editable round trip changed source data.");
  }
  return { canonical, roundTripped };
}

module.exports = {
  editableBankToCanonical,
  canonicalBankToEditable,
  assertRoundTripIntegrity,
};
