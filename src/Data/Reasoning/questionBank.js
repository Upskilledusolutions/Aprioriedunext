import { getLevel } from "./curriculum";

export const QUESTION_TYPES = {
  multipleChoice: "multiple_choice",
  shortAnswer: "short_answer",
  trueFalse: "true_false",
};

const questions = [
  {
    id: "Q-L1-Q-S1-EXP-NUM-001", track: "quantitative", levelId: "L1", half: "explore", stageId: "S1", moduleId: "number-patterns", topicId: "patterns", activityId: "Q-L1-S1-EXP-number-patterns", questionType: QUESTION_TYPES.multipleChoice, concept: "Number patterns", difficulty: 1, timePerQuestion: 45,
    question: "What number comes next: 2, 4, 6, 8, ?", options: ["9", "10", "11", "12"], answer: "10", explanation: "The pattern increases by 2 each time, so 8 + 2 = 10.",
  },
  {
    id: "Q-L1-Q-S1-EXP-NUM-002", track: "quantitative", levelId: "L1", half: "explore", stageId: "S1", moduleId: "number-patterns", topicId: "patterns", activityId: "Q-L1-S1-EXP-number-patterns", questionType: QUESTION_TYPES.multipleChoice, concept: "Number patterns", difficulty: 1, timePerQuestion: 45,
    question: "What number comes next: 5, 10, 15, 20, ?", options: ["22", "24", "25", "30"], answer: "25", explanation: "The pattern adds 5 each time: 5, 10, 15, 20, 25.",
  },
  {
    id: "Q-L1-Q-S1-EXP-NUM-003", track: "quantitative", levelId: "L1", half: "explore", stageId: "S1", moduleId: "number-patterns", topicId: "patterns", activityId: "Q-L1-S1-EXP-number-patterns", questionType: QUESTION_TYPES.multipleChoice, concept: "Number patterns", difficulty: 2, timePerQuestion: 60,
    question: "Which rule makes this pattern: 4, 7, 10, 13?", options: ["Add 2", "Add 3", "Add 4", "Multiply by 3"], answer: "Add 3", explanation: "Each term is 3 greater than the term before it.",
  },
  {
    id: "Q-L1-Q-S1-EXP-ARI-001", track: "quantitative", levelId: "L1", half: "explore", stageId: "S1", moduleId: "arithmetic-reasoning", topicId: "operations", activityId: "Q-L1-S1-EXP-arithmetic-reasoning", questionType: QUESTION_TYPES.multipleChoice, concept: "Addition reasoning", difficulty: 1, timePerQuestion: 45,
    question: "Mia has 8 stickers and gets 5 more. How many stickers does she have?", options: ["12", "13", "14", "15"], answer: "13", explanation: "Adding 5 to 8 gives 13.",
  },
  {
    id: "Q-L1-Q-S1-EXP-ARI-002", track: "quantitative", levelId: "L1", half: "explore", stageId: "S1", moduleId: "arithmetic-reasoning", topicId: "operations", activityId: "Q-L1-S1-EXP-arithmetic-reasoning", questionType: QUESTION_TYPES.multipleChoice, concept: "Subtraction reasoning", difficulty: 1, timePerQuestion: 45,
    question: "There are 16 apples. If 7 are used, how many remain?", options: ["8", "9", "10", "11"], answer: "9", explanation: "16 minus 7 leaves 9.",
  },
  {
    id: "Q-L1-Q-S1-EXP-ARI-003", track: "quantitative", levelId: "L1", half: "explore", stageId: "S1", moduleId: "arithmetic-reasoning", topicId: "operations", activityId: "Q-L1-S1-EXP-arithmetic-reasoning", questionType: QUESTION_TYPES.multipleChoice, concept: "Equal groups", difficulty: 2, timePerQuestion: 60,
    question: "There are 4 bags with 3 marbles in each bag. How many marbles are there altogether?", options: ["7", "10", "12", "14"], answer: "12", explanation: "Four equal groups of three make 4 × 3 = 12.",
  },
  {
    id: "Q-L1-Q-S1-EXP-SHP-001", track: "quantitative", levelId: "L1", half: "explore", stageId: "S1", moduleId: "shape-measurement", topicId: "measurement", activityId: "Q-L1-S1-EXP-shape-measurement", questionType: QUESTION_TYPES.multipleChoice, concept: "Length", difficulty: 1, timePerQuestion: 45,
    question: "Which unit is most sensible for measuring the length of a pencil?", options: ["Centimetres", "Kilometres", "Litres", "Kilograms"], answer: "Centimetres", explanation: "A pencil is a small object, so centimetres are a sensible unit for its length.",
  },
  {
    id: "Q-L1-Q-S1-EXP-SHP-002", track: "quantitative", levelId: "L1", half: "explore", stageId: "S1", moduleId: "shape-measurement", topicId: "measurement", activityId: "Q-L1-S1-EXP-shape-measurement", questionType: QUESTION_TYPES.multipleChoice, concept: "Shape properties", difficulty: 1, timePerQuestion: 45,
    question: "Which shape has 4 equal sides?", options: ["Triangle", "Rectangle", "Square", "Pentagon"], answer: "Square", explanation: "A square has four sides of equal length.",
  },
  {
    id: "Q-L1-Q-S1-EXP-SHP-003", track: "quantitative", levelId: "L1", half: "explore", stageId: "S1", moduleId: "shape-measurement", topicId: "measurement", activityId: "Q-L1-S1-EXP-shape-measurement", questionType: QUESTION_TYPES.multipleChoice, concept: "Perimeter", difficulty: 2, timePerQuestion: 60,
    question: "A rectangle has sides of 5 cm and 3 cm. What is its perimeter?", options: ["8 cm", "15 cm", "16 cm", "20 cm"], answer: "16 cm", explanation: "Perimeter is the total distance around the shape: 5 + 3 + 5 + 3 = 16 cm.",
  },
  {
    id: "Q-L1-Q-S1-EXT-NUM-001", track: "quantitative", levelId: "L1", half: "extend", stageId: "S1", moduleId: "number-patterns", topicId: "patterns", activityId: "Q-L1-S1-EXT-number-patterns", questionType: QUESTION_TYPES.multipleChoice, concept: "Growing number patterns", difficulty: 2, timePerQuestion: 60,
    question: "A pattern starts 3, 6, 9, 12. Which number is the 7th term?", options: ["18", "21", "24", "27"], answer: "21", explanation: "The pattern adds 3 each time. The terms are 3, 6, 9, 12, 15, 18, 21.",
  },
  {
    id: "Q-L1-Q-S1-EXT-NUM-002", track: "quantitative", levelId: "L1", half: "extend", stageId: "S1", moduleId: "number-patterns", topicId: "patterns", activityId: "Q-L1-S1-EXT-number-patterns", questionType: QUESTION_TYPES.multipleChoice, concept: "Pattern rules", difficulty: 2, timePerQuestion: 60,
    question: "Which number should replace the question mark: 2, 5, 8, 11, ?", options: ["12", "13", "14", "15"], answer: "14", explanation: "Each term increases by 3, so 11 + 3 = 14.",
  },
  {
    id: "Q-L1-Q-S1-EXT-NUM-003", track: "quantitative", levelId: "L1", half: "extend", stageId: "S1", moduleId: "number-patterns", topicId: "patterns", activityId: "Q-L1-S1-EXT-number-patterns", questionType: QUESTION_TYPES.multipleChoice, concept: "Pattern reasoning", difficulty: 3, timePerQuestion: 75,
    question: "A pattern follows 1, 3, 6, 10, 15. What is the next number?", options: ["18", "20", "21", "22"], answer: "21", explanation: "The increases are +2, +3, +4, +5, so the next increase is +6. Therefore 15 + 6 = 21.",
  },
  {
    id: "Q-L1-Q-S1-EXT-LOG-001", track: "quantitative", levelId: "L1", half: "extend", stageId: "S1", moduleId: "logic-puzzles", topicId: "logical-reasoning", activityId: "Q-L1-S1-EXT-logic-puzzles", questionType: QUESTION_TYPES.multipleChoice, concept: "Logical elimination", difficulty: 2, timePerQuestion: 60,
    question: "Sam, Lee and Noor each choose a different number: 2, 4 or 6. Sam does not choose 2. Noor chooses 6. What must Lee choose?", options: ["2", "4", "6", "It cannot be known"], answer: "2", explanation: "Noor has 6 and Sam cannot have 2, so Sam must have 4 and Lee must have 2.",
  },
  {
    id: "Q-L1-Q-S1-EXT-LOG-002", track: "quantitative", levelId: "L1", half: "extend", stageId: "S1", moduleId: "logic-puzzles", topicId: "logical-reasoning", activityId: "Q-L1-S1-EXT-logic-puzzles", questionType: QUESTION_TYPES.multipleChoice, concept: "Ordering clues", difficulty: 2, timePerQuestion: 60,
    question: "Ava is taller than Ben. Ben is taller than Chen. Who is shortest?", options: ["Ava", "Ben", "Chen", "Cannot tell"], answer: "Chen", explanation: "The order is Ava, then Ben, then Chen from tallest to shortest.",
  },
  {
    id: "Q-L1-Q-S1-EXT-LOG-003", track: "quantitative", levelId: "L1", half: "extend", stageId: "S1", moduleId: "logic-puzzles", topicId: "logical-reasoning", activityId: "Q-L1-S1-EXT-logic-puzzles", questionType: QUESTION_TYPES.multipleChoice, concept: "Combining clues", difficulty: 3, timePerQuestion: 75,
    question: "Three boxes are labelled red, blue and green. The red box is not first. The green box is after the blue box. Which order could be correct?", options: ["Red, Blue, Green", "Blue, Green, Red", "Green, Blue, Red", "Blue, Red, Green"], answer: "Blue, Green, Red", explanation: "Red must not be first, and green must come after blue. Blue, Green, Red satisfies both clues.",
  },
  {
    id: "Q-L1-Q-S1-EXT-MUL-001", track: "quantitative", levelId: "L1", half: "extend", stageId: "S1", moduleId: "multi-step-reasoning", topicId: "multi-step-problems", activityId: "Q-L1-S1-EXT-multi-step-reasoning", questionType: QUESTION_TYPES.multipleChoice, concept: "Multi-step addition", difficulty: 2, timePerQuestion: 60,
    question: "A class has 18 pencils. The teacher adds 7 and then gives 5 away. How many pencils are left?", options: ["19", "20", "21", "25"], answer: "20", explanation: "First 18 + 7 = 25. Then 25 − 5 = 20.",
  },
  {
    id: "Q-L1-Q-S1-EXT-MUL-002", track: "quantitative", levelId: "L1", half: "extend", stageId: "S1", moduleId: "multi-step-reasoning", topicId: "multi-step-problems", activityId: "Q-L1-S1-EXT-multi-step-reasoning", questionType: QUESTION_TYPES.multipleChoice, concept: "Multi-step multiplication", difficulty: 2, timePerQuestion: 60,
    question: "There are 3 teams with 4 students each. Then 2 more students join. How many students are there?", options: ["12", "14", "16", "18"], answer: "14", explanation: "Three teams of four make 12 students. Adding 2 gives 14.",
  },
  {
    id: "Q-L1-Q-S1-EXT-MUL-003", track: "quantitative", levelId: "L1", half: "extend", stageId: "S1", moduleId: "multi-step-reasoning", topicId: "multi-step-problems", activityId: "Q-L1-S1-EXT-multi-step-reasoning", questionType: QUESTION_TYPES.multipleChoice, concept: "Choosing a strategy", difficulty: 3, timePerQuestion: 75,
    question: "A shop has 5 boxes with 6 cards in each. It sells 8 cards. How many cards remain?", options: ["22", "24", "30", "38"], answer: "22", explanation: "There are 5 × 6 = 30 cards. After selling 8, 30 − 8 = 22 remain.",
  },
  {
    id: "Q-L1-V-S1-EXP-ARG-001", track: "verbal", levelId: "L1", half: "explore", stageId: "S1", moduleId: "evidence-and-claims", topicId: "claims", activityId: "V-L1-S1-EXP-evidence-and-claims", questionType: QUESTION_TYPES.multipleChoice, concept: "Claims and evidence", difficulty: 1, timePerQuestion: 60,
    question: "Which sentence is a claim that could be supported with evidence?", options: ["The book has 120 pages.", "I think the story is interesting.", "The story's ending teaches an important lesson.", "Please open the book."], answer: "The story's ending teaches an important lesson.", explanation: "A claim makes an idea that can be explained or supported with reasons or evidence.",
  },
  {
    id: "Q-L1-V-S1-EXP-ARG-002", track: "verbal", levelId: "L1", half: "explore", stageId: "S1", moduleId: "evidence-and-claims", topicId: "claims", activityId: "V-L1-S1-EXP-evidence-and-claims", questionType: QUESTION_TYPES.multipleChoice, concept: "Identifying evidence", difficulty: 1, timePerQuestion: 60,
    question: "Which detail would best support the claim that a character is helpful?", options: ["She has a red hat.", "She carries books for a younger student.", "She likes blue shoes.", "She sits near a window."], answer: "She carries books for a younger student.", explanation: "The detail describes an action that directly shows helpful behaviour.",
  },
  {
    id: "Q-L1-V-S1-EXP-ARG-003", track: "verbal", levelId: "L1", half: "explore", stageId: "S1", moduleId: "evidence-and-claims", topicId: "claims", activityId: "V-L1-S1-EXP-evidence-and-claims", questionType: QUESTION_TYPES.multipleChoice, concept: "Relevant evidence", difficulty: 2, timePerQuestion: 75,
    question: "A student claims that the garden attracts birds. Which detail is strongest evidence?", options: ["The garden has a wooden bench.", "A bird feeder is filled every morning.", "The garden has green leaves.", "The gardener wears gloves."], answer: "A bird feeder is filled every morning.", explanation: "A filled bird feeder directly relates to attracting birds.",
  },
  {
    id: "Q-L1-V-S1-EXP-MID-001", track: "verbal", levelId: "L1", half: "explore", stageId: "S1", moduleId: "main-idea", topicId: "main-idea-and-details", activityId: "V-L1-S1-EXP-main-idea", questionType: QUESTION_TYPES.multipleChoice, concept: "Main idea", difficulty: 1, timePerQuestion: 60,
    question: "Read: 'Bees visit many flowers. They collect nectar and carry pollen from one flower to another.' What is the main idea?", options: ["Bees are insects.", "Bees help flowers by carrying pollen.", "Flowers are colourful.", "Nectar is sweet."], answer: "Bees help flowers by carrying pollen.", explanation: "The passage focuses on what bees do at flowers and how they carry pollen.",
  },
  {
    id: "Q-L1-V-S1-EXP-MID-002", track: "verbal", levelId: "L1", half: "explore", stageId: "S1", moduleId: "main-idea", topicId: "main-idea-and-details", activityId: "V-L1-S1-EXP-main-idea", questionType: QUESTION_TYPES.multipleChoice, concept: "Supporting details", difficulty: 1, timePerQuestion: 60,
    question: "Which detail best supports the idea that exercise can help us?", options: ["Some shoes are colourful.", "Walking can make our muscles stronger.", "A park can have benches.", "People have different hobbies."], answer: "Walking can make our muscles stronger.", explanation: "This detail gives a direct benefit of exercise.",
  },
  {
    id: "Q-L1-V-S1-EXP-MID-003", track: "verbal", levelId: "L1", half: "explore", stageId: "S1", moduleId: "main-idea", topicId: "main-idea-and-details", activityId: "V-L1-S1-EXP-main-idea", questionType: QUESTION_TYPES.multipleChoice, concept: "Main idea", difficulty: 2, timePerQuestion: 75,
    question: "Read: 'Reusing a bottle reduces the number of new bottles we need. It can also reduce waste.' What is the main idea?", options: ["Bottles can be blue.", "Reusing bottles can reduce waste and the need for new bottles.", "New bottles are expensive.", "Everyone uses bottles."], answer: "Reusing bottles can reduce waste and the need for new bottles.", explanation: "Both sentences describe benefits of reusing bottles.",
  },
  {
    id: "Q-L1-V-S1-EXP-SEQ-001", track: "verbal", levelId: "L1", half: "explore", stageId: "S1", moduleId: "sequencing", topicId: "sequence-and-structure", activityId: "V-L1-S1-EXP-sequencing", questionType: QUESTION_TYPES.multipleChoice, concept: "Sequence", difficulty: 1, timePerQuestion: 60,
    question: "Which should happen first when planting a seed?", options: ["Water the soil", "Watch the plant grow", "Pick the fruit", "Measure the tall plant"], answer: "Water the soil", explanation: "Watering the planted seed is an early step before the plant can grow.",
  },
  {
    id: "Q-L1-V-S1-EXP-SEQ-002", track: "verbal", levelId: "L1", half: "explore", stageId: "S1", moduleId: "sequencing", topicId: "sequence-and-structure", activityId: "V-L1-S1-EXP-sequencing", questionType: QUESTION_TYPES.multipleChoice, concept: "Sequence clues", difficulty: 1, timePerQuestion: 60,
    question: "Lina put on her shoes after she put on her socks. What happened first?", options: ["She put on her shoes.", "She put on her socks.", "She ran outside.", "We cannot tell."], answer: "She put on her socks.", explanation: "The word 'after' tells us the socks came before the shoes.",
  },
  {
    id: "Q-L1-V-S1-EXP-SEQ-003", track: "verbal", levelId: "L1", half: "explore", stageId: "S1", moduleId: "sequencing", topicId: "sequence-and-structure", activityId: "V-L1-S1-EXP-sequencing", questionType: QUESTION_TYPES.multipleChoice, concept: "Sequence", difficulty: 2, timePerQuestion: 75,
    question: "A story says: 'First, Ravi found the map. Next, he followed it. Finally, he reached the lake.' What happened second?", options: ["He found the map.", "He followed the map.", "He reached the lake.", "He lost the map."], answer: "He followed the map.", explanation: "'Next' identifies the second event.",
  },
  {
    id: "Q-L1-V-S1-EXT-ARG-001", track: "verbal", levelId: "L1", half: "extend", stageId: "S1", moduleId: "evidence-and-claims", topicId: "claims", activityId: "V-L1-S1-EXT-evidence-and-claims", questionType: QUESTION_TYPES.multipleChoice, concept: "Choosing relevant evidence", difficulty: 2, timePerQuestion: 75,
    question: "A student claims that reading every day can improve vocabulary. Which evidence is most relevant?", options: ["The student has a blue backpack.", "A class survey found that regular readers learned more new words.", "The library has large windows.", "The student prefers mystery stories."], answer: "A class survey found that regular readers learned more new words.", explanation: "Relevant evidence directly supports the claim about regular reading and vocabulary growth.",
  },
  {
    id: "Q-L1-V-S1-EXT-ARG-002", track: "verbal", levelId: "L1", half: "extend", stageId: "S1", moduleId: "evidence-and-claims", topicId: "claims", activityId: "V-L1-S1-EXT-evidence-and-claims", questionType: QUESTION_TYPES.multipleChoice, concept: "Evidence strength", difficulty: 2, timePerQuestion: 75,
    question: "A claim says that trees can make a playground cooler. Which evidence is strongest?", options: ["Trees are usually green.", "A tree has rough bark.", "A shaded playground measured cooler temperatures than an unshaded area.", "Some children like climbing trees."], answer: "A shaded playground measured cooler temperatures than an unshaded area.", explanation: "The measurement directly compares temperatures and supports the claim.",
  },
  {
    id: "Q-L1-V-S1-EXT-ARG-003", track: "verbal", levelId: "L1", half: "extend", stageId: "S1", moduleId: "evidence-and-claims", topicId: "claims", activityId: "V-L1-S1-EXT-evidence-and-claims", questionType: QUESTION_TYPES.multipleChoice, concept: "Claim and evidence", difficulty: 3, timePerQuestion: 90,
    question: "A class claims that quiet reading time helps students focus. Which evidence best supports it?", options: ["The classroom has 20 chairs.", "Students reported that they enjoyed reading.", "A class observation found fewer off-task behaviours during quiet reading time.", "The books have colourful covers."], answer: "A class observation found fewer off-task behaviours during quiet reading time.", explanation: "The observation directly measures behaviour related to focus.",
  },
  {
    id: "Q-L1-V-S1-EXT-INF-001", track: "verbal", levelId: "L1", half: "extend", stageId: "S1", moduleId: "inference", topicId: "inference", activityId: "V-L1-S1-EXT-inference", questionType: QUESTION_TYPES.multipleChoice, concept: "Inference", difficulty: 2, timePerQuestion: 75,
    question: "Maya carried an umbrella and wore boots. The ground was wet when she arrived. What is the best inference?", options: ["It had probably rained.", "It was definitely snowing.", "Maya was going swimming.", "The sun was very hot."], answer: "It had probably rained.", explanation: "The umbrella, boots and wet ground together make rain the best-supported inference.",
  },
  {
    id: "Q-L1-V-S1-EXT-INF-002", track: "verbal", levelId: "L1", half: "extend", stageId: "S1", moduleId: "inference", topicId: "inference", activityId: "V-L1-S1-EXT-inference", questionType: QUESTION_TYPES.multipleChoice, concept: "Inference", difficulty: 2, timePerQuestion: 75,
    question: "The classroom lights were off, chairs were stacked and the door was locked. What is most likely true?", options: ["A lesson was starting.", "The classroom was not being used then.", "Students were taking a test.", "The teacher was writing on the board."], answer: "The classroom was not being used then.", explanation: "The clues together suggest that the room was not in use at that time.",
  },
  {
    id: "Q-L1-V-S1-EXT-INF-003", track: "verbal", levelId: "L1", half: "extend", stageId: "S1", moduleId: "inference", topicId: "inference", activityId: "V-L1-S1-EXT-inference", questionType: QUESTION_TYPES.multipleChoice, concept: "Evidence-based inference", difficulty: 3, timePerQuestion: 90,
    question: "A plant near the window has dry soil and drooping leaves. Another plant is watered regularly and looks healthy. What is the best inference?", options: ["The first plant may need more water.", "The first plant is made of plastic.", "The healthy plant never needs water.", "The window makes every plant unhealthy."], answer: "The first plant may need more water.", explanation: "Dry soil and drooping leaves provide evidence that lack of water may be affecting the plant.",
  },
  {
    id: "Q-L1-V-S1-EXT-PER-001", track: "verbal", levelId: "L1", half: "extend", stageId: "S1", moduleId: "perspectives", topicId: "compare-perspectives", activityId: "V-L1-S1-EXT-perspectives", questionType: QUESTION_TYPES.multipleChoice, concept: "Comparing perspectives", difficulty: 2, timePerQuestion: 75,
    question: "Ava says, 'We should walk to school because it gives us exercise.' Ben says, 'We should take the bus because it is faster.' What do they disagree about?", options: ["Whether school exists", "Which reason is more important", "Whether walking is possible", "What time school starts"], answer: "Which reason is more important", explanation: "Ava values exercise, while Ben values speed.",
  },
  {
    id: "Q-L1-V-S1-EXT-PER-002", track: "verbal", levelId: "L1", half: "extend", stageId: "S1", moduleId: "perspectives", topicId: "compare-perspectives", activityId: "V-L1-S1-EXT-perspectives", questionType: QUESTION_TYPES.multipleChoice, concept: "Comparing reasons", difficulty: 2, timePerQuestion: 75,
    question: "One student prefers paper books because they are easy to share. Another prefers e-books because one device can hold many books. What is different about their reasons?", options: ["One focuses on sharing and the other on convenience.", "Both give exactly the same reason.", "Neither gives a reason.", "Both are discussing sports."], answer: "One focuses on sharing and the other on convenience.", explanation: "The first reason concerns sharing; the second concerns carrying many books on one device.",
  },
  {
    id: "Q-L1-V-S1-EXT-PER-003", track: "verbal", levelId: "L1", half: "extend", stageId: "S1", moduleId: "perspectives", topicId: "compare-perspectives", activityId: "V-L1-S1-EXT-perspectives", questionType: QUESTION_TYPES.multipleChoice, concept: "Perspective comparison", difficulty: 3, timePerQuestion: 90,
    question: "Priya says the class garden should have more flowers for bees. Omar says it should have more vegetables for students to eat. What is the clearest comparison?", options: ["They want different benefits from the same garden.", "They both want fewer plants.", "Only Priya gives a reason.", "They are discussing different schools."], answer: "They want different benefits from the same garden.", explanation: "Priya focuses on helping bees, while Omar focuses on producing food for students.",
  },
];

export function getQuestionBank(filters = {}) {
  return questions.filter((item) => Object.entries(filters).every(([key, value]) => item[key] === value));
}

export function getQuestionById(id) {
  return questions.find((item) => item.id === id) || null;
}

export function getQuestionsForActivity(track, levelId, half, activityId) {
  return getQuestionBank({ track, levelId, half, activityId });
}

export function getDefaultTimeSeconds({ levelId, difficulty = 1, questionType = QUESTION_TYPES.multipleChoice } = {}) {
  const level = getLevel(levelId);
  const base = level.level <= 3 ? 45 : level.level <= 6 ? 60 : 75;
  const typeAdjustment = questionType === QUESTION_TYPES.shortAnswer ? 15 : questionType === QUESTION_TYPES.trueFalse ? -10 : 0;
  return Math.max(20, base + (difficulty - 1) * 15 + typeAdjustment);
}

export const REASONING_QUESTION_BANK = questions;
