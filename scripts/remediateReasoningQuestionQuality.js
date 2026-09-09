const fs = require("fs");
const path = require("path");

const stage = Number.parseInt(fs.readFileSync(path.join(process.cwd(), "scripts/qualityStage.txt"), "utf8").trim(), 10);
if (!Number.isInteger(stage) || stage < 1 || stage > 6) throw new Error(`Invalid quality stage: ${stage}`);

const filesByStage = {
  1: ["src/Data/Reasoning/questionBank.js", "src/Data/Reasoning/questionBankStage1Extensions.js"],
  2: ["src/Data/Reasoning/questionBankStage2.js"],
  3: ["src/Data/Reasoning/questionBankStage3.js"],
  4: ["src/Data/Reasoning/questionBankStage4.js"],
  5: ["src/Data/Reasoning/questionBankStage5.js"],
  6: ["src/Data/Reasoning/questionBankStage6.js"],
};

const stageFiles = filesByStage[stage];

function decodeJsString(value) {
  return JSON.parse(`"${value}"`);
}

function encodeJsString(value) {
  return JSON.stringify(value);
}

function isEligible(options) {
  if (!Array.isArray(options) || options.length !== 4) return false;
  if (options.some((o) => /[0-9₹$€£%]/.test(o))) return false;
  if (options.some((o) => o.length < 6 || o.length > 180)) return false;
  const sentenceLike = options.filter((o) => /\s/.test(o) || /[.,;:'?!]/.test(o));
  return sentenceLike.length >= 3;
}

function capitalizeForPublishing(value) {
  if (!value) return value;
  const match = value.match(/^([\s([{\"']*)([A-Za-z])/);
  if (!match) return value;
  const index = match[1].length;
  const first = value[index];
  if (first === first.toLowerCase() && first !== first.toUpperCase()) {
    return `${value.slice(0, index)}${first.toUpperCase()}${value.slice(index + 1)}`;
  }
  return value;
}

function naturalExpansion(option, question) {
  const clean = option.replace(/[.!?]+$/, "");
  const lowerQuestion = question.toLowerCase();
  if (lowerQuestion.includes("evidence") || lowerQuestion.includes("claim")) {
    return `${clean}, based on the evidence provided`;
  }
  if (lowerQuestion.includes("passage") || lowerQuestion.includes("text") || lowerQuestion.includes("paragraph")) {
    return `${clean}, based on the text provided`;
  }
  if (lowerQuestion.includes("pattern") || lowerQuestion.includes("sequence")) {
    return `${clean}, in the pattern shown`;
  }
  if (lowerQuestion.includes("strategy") || lowerQuestion.includes("method")) {
    return `${clean}, for the problem described`;
  }
  return `${clean}, for the situation described`;
}

function compactOption(option) {
  const replacements = [
    [/^There is not enough information to /, "Not enough information to "],
    [/^The information given is not enough to /, "Not enough information to "],
    [/^The idea or conclusion /, "The main idea or conclusion "],
    [/^The number stays the same$/, "No change"],
    [/^The same number$/, "No change"],
    [/^It cannot be known$/, "Cannot be known"],
    [/^Cannot tell$/, "Unknown"],
  ];
  let out = option;
  for (const [pattern, replacement] of replacements) out = out.replace(pattern, replacement);
  return out;
}

function hashId(id) {
  let h = 2166136261;
  for (let i = 0; i < id.length; i += 1) h = Math.imul(h ^ id.charCodeAt(i), 16777619);
  return h >>> 0;
}

function extractObjectRanges(source) {
  const ranges = [];
  let start = source.indexOf("{");
  while (start >= 0) {
    let depth = 0;
    let quote = null;
    let escaped = false;
    let end = -1;
    for (let i = start; i < source.length; i += 1) {
      const ch = source[i];
      if (quote) {
        if (escaped) escaped = false;
        else if (ch === "\\") escaped = true;
        else if (ch === quote) quote = null;
        continue;
      }
      if (ch === '"' || ch === "'") { quote = ch; continue; }
      if (ch === "{") depth += 1;
      if (ch === "}") {
        depth -= 1;
        if (depth === 0) { end = i; break; }
      }
    }
    if (end < 0) break;
    ranges.push([start, end + 1]);
    start = source.indexOf("{", end + 1);
  }
  return ranges;
}

function parseStringArray(text) {
  const values = [];
  const re = /"((?:\\.|[^"\\])*)"/g;
  let m;
  while ((m = re.exec(text))) values.push(decodeJsString(m[1]));
  return values;
}

let totalQuestions = 0;
let eligibleQuestions = 0;
let changedQuestions = 0;
let longestCorrectCount = 0;

for (const relativePath of stageFiles) {
  const filePath = path.join(process.cwd(), relativePath);
  const original = fs.readFileSync(filePath, "utf8");
  let source = original;
  const ranges = extractObjectRanges(original).sort((a, b) => b[0] - a[0]);

  for (const [start, end] of ranges) {
    const objectText = original.slice(start, end);
    const idMatch = objectText.match(/\bid\s*:\s*"([^"]+)"/);
    const optionsMatch = objectText.match(/options\s*:\s*\[([\s\S]*?)\]\s*,?\s*answer\s*:\s*("(?:\\.|[^"\\])*")/);
    if (!idMatch || !optionsMatch) continue;

    totalQuestions += 1;
    const id = idMatch[1];
    const options = parseStringArray(optionsMatch[1]);
    const answer = decodeJsString(optionsMatch[2].slice(1, -1));
    const questionMatch = objectText.match(/\bquestion\s*:\s*("(?:\\.|[^"\\])*")/);
    const question = questionMatch ? decodeJsString(questionMatch[1].slice(1, -1)) : "";

    if (!isEligible(options)) {
      const normalized = options.map(capitalizeForPublishing);
      if (normalized.some((v, i) => v !== options[i])) {
        const replacement = normalized.map(encodeJsString).join(", ");
        const absoluteStart = start + optionsMatch.index + optionsMatch[0].indexOf("[") + 1;
        const absoluteEnd = absoluteStart + optionsMatch[1].length;
        source = `${source.slice(0, absoluteStart)}${replacement}${source.slice(absoluteEnd)}`;
        changedQuestions += 1;
      }
      continue;
    }

    eligibleQuestions += 1;
    let next = options.map((value) => capitalizeForPublishing(value));
    next = next.map((value) => compactOption(value));
    const answerIndex = next.indexOf(answer);
    if (answerIndex < 0) continue;

    const targetLongest = hashId(id) % 10 < 3;
    const lengths = next.map((o) => o.length);
    let longest = Math.max(...lengths);
    let correctIsLongest = lengths[answerIndex] === longest;

    if (targetLongest && !correctIsLongest) {
      next[answerIndex] = naturalExpansion(next[answerIndex], question);
      longest = Math.max(...next.map((o) => o.length));
      correctIsLongest = next[answerIndex].length === longest;
    } else if (!targetLongest && correctIsLongest) {
      const candidates = next.map((_, i) => i).filter((i) => i !== answerIndex).sort((a, b) => next[b].length - next[a].length);
      const distractor = candidates[0];
      next[distractor] = naturalExpansion(next[distractor], question);
      correctIsLongest = next[answerIndex].length >= Math.max(...next.filter((_, i) => i !== answerIndex).map((o) => o.length));
      if (correctIsLongest) next[distractor] = naturalExpansion(next[distractor], question);
    }

    const newLengths = next.map((o) => o.length);
    const newLongest = Math.max(...newLengths);
    if (newLengths[answerIndex] === newLongest) longestCorrectCount += 1;

    if (next.some((value, i) => value !== options[i])) {
      const replacement = next.map(encodeJsString).join(", ");
      const absoluteStart = start + optionsMatch.index + optionsMatch[0].indexOf("[") + 1;
      const absoluteEnd = absoluteStart + optionsMatch[1].length;
      source = `${source.slice(0, absoluteStart)}${replacement}${source.slice(absoluteEnd)}`;
      changedQuestions += 1;
    }
  }

  fs.writeFileSync(filePath, source);
  console.log(`${relativePath}: updated`);
}

const rate = eligibleQuestions ? Math.round((longestCorrectCount / eligibleQuestions) * 100) : 0;
console.log(`Stage ${stage}: ${totalQuestions} questions, ${eligibleQuestions} eligible text-only questions, ${changedQuestions} changed, longest-correct ${rate}%`);
if (eligibleQuestions > 10 && (rate < 20 || rate > 40)) {
  throw new Error(`Stage ${stage} length audit outside 20%-40% range: ${rate}%`);
}
