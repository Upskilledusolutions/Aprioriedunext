export const quiz = [
    {
      quiz: '1',
      name: 'French Practice Test - 1',
      level: 'Easy',
      topic: 'Mixed',
      questions: [
        // 7 MCQs

        {
          question: 'What does "merci" mean in English?',
          choices: ['yes', 'no', 'thank you', 'goodbye'],
          type: 'MCQs',
          correctAnswer: 3,
        },
        {
          question: 'Which of the following words means "car" in French?',
          choices: ['voiture', 'maison', 'chien', 'chat'],
          type: 'MCQs',
          correctAnswer: 1,
        },
        {
          question: 'Which pronoun replaces "le livre" (the book) in French?',
          choices: ['llle', 'lui', 'la', 'il'],
          type: 'MCQs',
          correctAnswer: 4,
        },
        {
          question: 'The Louvre Museum is located along the bank of which river?',
          choices: ['River Somme', 'Loire', 'Seine', 'Dordogne'],
          type: 'MCQs',
          correctAnswer: 3,
        },
        {
          question: 'What is the French word for "summer"?',
          choices: ['printemps', 'hiver', 'automne', 'été'],
          type: 'MCQs',
          correctAnswer: 4,
        },
        {
          question: 'What does the expression "avoir le cafard" mean in English?',
          choices: ["to have butterflies in one's stomach", 'to have the blues', "to have a frog in one's throat", "to have ants in one's pants"],
          type: 'MCQs',
          correctAnswer: 2,
        },
        {
          question: 'Who wrote the French classic "Le Petit Prince"?',
          choices: ['Victor Hugo', 'Albert Camus', 'Antoine de Saint-Exupéry', 'Marcel Proust'],
          type: 'MCQs',
          correctAnswer: 3,
        },
  
        // 7 Fill in the Blanks

            {
              question: "Fill in the blank: Je ______ un livre. (I am reading a book)",
              choices: ["lis", "mange", "a", "fait"],
              type: "FillInTheBlanks",
              correctAnswer: 4
            },
            {
              question: "Fill in the blank: Elle ______ très heureuse. (She is very happy)",
              choices: ["est", "a", "mange", "vont"],
              type: "FillInTheBlanks",
              correctAnswer: 1
            },
            {
              question: "Fill in the blank: Nous ______ du pain. (We are eating bread)",
              choices: ["mangeons", "faisons", "allons", "avons"],
              type: "FillInTheBlanks",
              correctAnswer: 1
            },
            {
              question: "Fill in the blank: Ils ______ au parc. (They are going to the park)",
              choices: ["vont", "mangent", "lisent", "sont"],
              type: "FillInTheBlanks",
              correctAnswer: 1
            },
            {
              question: "Fill in the blank: Elle ______ un livre. (She has a book)",
              choices: ["a", "fait", "mange", "vont"],
              type: "FillInTheBlanks",
              correctAnswer: 1
            },
            {
              question: "Fill in the blank: Il ______ froid. (It is cold)",
              choices: ["fait", "est", "mange", "a"],
              type:"FillInTheBlanks",
              correctAnswer: 1
            },
            {
              question: "Vous ______ à l'école. (You are going to school)",
              choices: ["allez", "faites", "lisez", "mangez"],
              type: "FillInTheBlanks",
              correctAnswer: 1
            },
  
        // 2 Jumbled Words
        
        {
            question: "language",
            choices: ["education", "technology", "language", "development"],
            type: "JumbledWords"
          },
          {
            question: "develope",
            choices: ["education", "technology", "language", "develope"],
            type: "JumbledWords"
          },
  
        // 2 Click on Correct Words
            {
              question: "Select the correct words related to education.",
              options: ["school", "book", "car", "pen", "tree", "bird", "pan","teacher", "sea"],
              correctAnswers: ["school", "teacher", "pen"],
              type: "ClickCorrectWords"
            },

            {
                question: "Select the correct words related to education.",
                options: ["school", "book", "car", "pen", "tree", "bird", "pan","teacher", "sea"],
                correctAnswers: ["school", "teacher", "pen"],
                type: "ClickCorrectWords"
              },
  
        // 2 Drag and Drop
        {
          question: "Classify the following words into categories: Fruit and Vegetable.",
          types: ["Fruit","Vegetable"],
          initialWords : [
            { word: "Apple", type: "Fruit" },
            { word: "Carrot", type: "Vegetable" },
            { word: "Banana", type: "Fruit" },
            { word: "Potato", type: "Vegetable" },
            { word: "Grapes", type: "Fruit" },
            { word: "Tomato", type: "Vegetable" },
        ],
          type: "DragAndDrop"
        },
        {
          question: "Classify the following words into categories: Singular and Plural.",
          types: ["Singular","Plural"],
          initialWords : [
            { word: "Apple", type: "Singular" },
            { word: "Carrots", type: "Plural" },
            { word: "Banana", type: "Singular" },
            { word: "Potatoes", type: "Plural" },
            { word: "Grape", type: "Singular" },
            { word: "Tomatoes", type: "Plural" },
        ],
          type: "DragAndDrop"
        },
      ],
    },
    {
      quiz: '2',
      name: 'French Practice Test - 2',
      level: 'Intermediate',
      topic: 'Mixed',
      questions: [
        // 7 MCQs

        {
          question: 'What does "merci" mean in English?',
          choices: ['yes', 'no', 'thank you', 'goodbye'],
          type: 'MCQs',
          correctAnswer: 3,
        },
        {
          question: 'Which of the following words means "car" in French?',
          choices: ['voiture', 'maison', 'chien', 'chat'],
          type: 'MCQs',
          correctAnswer: 1,
        },
        {
          question: 'Which pronoun replaces "le livre" (the book) in French?',
          choices: ['llle', 'lui', 'la', 'il'],
          type: 'MCQs',
          correctAnswer: 4,
        },
        {
          question: 'The Louvre Museum is located along the bank of which river?',
          choices: ['River Somme', 'Loire', 'Seine', 'Dordogne'],
          type: 'MCQs',
          correctAnswer: 3,
        },
        {
          question: 'What is the French word for "summer"?',
          choices: ['printemps', 'hiver', 'automne', 'été'],
          type: 'MCQs',
          correctAnswer: 4,
        },
        {
          question: 'What does the expression "avoir le cafard" mean in English?',
          choices: ["to have butterflies in one's stomach", 'to have the blues', "to have a frog in one's throat", "to have ants in one's pants"],
          type: 'MCQs',
          correctAnswer: 2,
        },
        {
          question: 'Who wrote the French classic "Le Petit Prince"?',
          choices: ['Victor Hugo', 'Albert Camus', 'Antoine de Saint-Exupéry', 'Marcel Proust'],
          type: 'MCQs',
          correctAnswer: 3,
        },
  
        // 7 Fill in the Blanks

            {
              question: "Fill in the blank: Je ______ un livre. (I am reading a book)",
              choices: ["lis", "mange", "a", "fait"],
              type: "FillInTheBlanks",
              correctAnswer: 4
            },
            {
              question: "Fill in the blank: Elle ______ très heureuse. (She is very happy)",
              choices: ["est", "a", "mange", "vont"],
              type: "FillInTheBlanks",
              correctAnswer: 1
            },
            {
              question: "Fill in the blank: Nous ______ du pain. (We are eating bread)",
              choices: ["mangeons", "faisons", "allons", "avons"],
              type: "FillInTheBlanks",
              correctAnswer: 1
            },
            {
              question: "Fill in the blank: Ils ______ au parc. (They are going to the park)",
              choices: ["vont", "mangent", "lisent", "sont"],
              type: "FillInTheBlanks",
              correctAnswer: 1
            },
            {
              question: "Fill in the blank: Elle ______ un livre. (She has a book)",
              choices: ["a", "fait", "mange", "vont"],
              type: "FillInTheBlanks",
              correctAnswer: 1
            },
            {
              question: "Fill in the blank: Il ______ froid. (It is cold)",
              choices: ["fait", "est", "mange", "a"],
              type:"FillInTheBlanks",
              correctAnswer: 1
            },
            {
              question: "Vous ______ à l'école. (You are going to school)",
              choices: ["allez", "faites", "lisez", "mangez"],
              type: "FillInTheBlanks",
              correctAnswer: 1
            },
  
        // 2 Jumbled Words
        
        {
            question: "language",
            choices: ["education", "technology", "language", "development"],
            type: "JumbledWords"
          },
          {
            question: "develope",
            choices: ["education", "technology", "language", "develope"],
            type: "JumbledWords"
          },
  
        // 2 Click on Correct Words
            {
              question: "Select the correct words related to education.",
              options: ["school", "book", "car", "pen", "tree", "bird", "pan","teacher", "sea"],
              correctAnswers: ["school", "teacher", "pen"],
              type: "ClickCorrectWords"
            },

            {
                question: "Select the correct words related to education.",
                options: ["school", "book", "car", "pen", "tree", "bird", "pan","teacher", "sea"],
                correctAnswers: ["school", "teacher", "pen"],
                type: "ClickCorrectWords"
              },
  
        // 2 Drag and Drop
        {
          question: "Classify the following words into categories: Fruit and Vegetable.",
          types: ["Fruit","Vegetable"],
          initialWords : [
            { word: "Apple", type: "Fruit" },
            { word: "Carrot", type: "Vegetable" },
            { word: "Banana", type: "Fruit" },
            { word: "Potato", type: "Vegetable" },
            { word: "Grapes", type: "Fruit" },
            { word: "Tomato", type: "Vegetable" },
        ],
          type: "DragAndDrop"
        },
        {
          question: "Classify the following words into categories: Singular and Plural.",
          types: ["Singular","Plural"],
          initialWords : [
            { word: "Apple", type: "Singular" },
            { word: "Carrots", type: "Plural" },
            { word: "Banana", type: "Singular" },
            { word: "Potatoes", type: "Plural" },
            { word: "Grape", type: "Singular" },
            { word: "Tomatoes", type: "Plural" },
        ],
          type: "DragAndDrop"
        },
      ],
    },
  ];
  