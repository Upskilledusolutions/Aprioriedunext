#!/usr/bin/env node
const assert = require("node:assert/strict");
const { validateActivityRegistry } = require("../src/Data/EnglishAptitude/englishActivityRegistry");
const { getEnglishStageNavigation, getEnglishActivityRoute } = require("../src/Data/EnglishAptitude/englishStageNavigation");

assert.deepEqual(validateActivityRegistry(), []);
const modules = getEnglishStageNavigation("L1", "S1");
assert.equal(modules.length, 3, "L1/S1 navigation must contain its three registered modules.");
assert.deepEqual(modules.map(module => module.half), ["explore", "explore", "extend"]);
assert.deepEqual(modules.map(module => module.activities.length), [3, 2, 3]);
assert.equal(modules.flatMap(module => module.activities).length, 8);
assert.equal(modules.flatMap(module => module.activities).filter(activity => activity.half === "explore").length, 5);
assert.equal(modules.flatMap(module => module.activities).filter(activity => activity.half === "extend").length, 3);
assert.equal(getEnglishActivityRoute("ENG-L1-S1-EXP-01"), "/English-Aptitude/Activity/ENG-L1-S1-EXP-01");
assert.equal(getEnglishActivityRoute("ENG-L1-S1-EXT-03"), "/English-Aptitude/Activity/ENG-L1-S1-EXT-03");
assert.equal(getEnglishActivityRoute("ENG-L1-S1-EXP-99"), null, "Unknown activities must not receive a destination.");
assert.deepEqual(getEnglishStageNavigation("L2", "S1"), [], "Unimplemented stages must not be populated with guessed content.");

console.log("English Aptitude stage-navigation tests passed: three registered modules, five Explore and three Extend activities, stable activity routes, and rejection of unknown/unimplemented destinations.");
