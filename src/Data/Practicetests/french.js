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
          question: 'Who was the first President of the Fifth French Republic?',
          choices: ['François Mitterrand', 'Charles de Gaulle', 'Georges Pompidou', 'Jacques Chirac'],
          type: 'MCQs',
          correctAnswer: 2,
        },
        {
          question: 'Which famous novel by Victor Hugo is set during the French Revolution?',
          choices: ['Les Misérables', 'The Hunchback of Notre-Dame', 'Ninety-Three', 'Toilers of the Sea'],
          type: 'MCQs',
          correctAnswer: 3,
        },
        {
          question: 'The Eiffel Tower was originally constructed as a temporary exhibit for which event?',
          choices: ['The World Exposition of 1889', 'The Paris Exposition of 1900', 'The Bastille Day Celebration of 1885', 'The Universal Exposition of 1878'],
          type: 'MCQs',
          correctAnswer: 1,
        },
        {
          question: 'Which French painter is known for the artwork Impression, Sunrise?',
          choices: ['Édouard Manet', 'Claude Monet', 'Pierre-Auguste Renoir', 'Paul Cézanne'],
          type: 'MCQs',
          correctAnswer: 2,
        },
        {
          question: 'What is the French word for “apple”?',
          choices: ['Pomme', 'Poire', 'Pêche', 'Prune'],
          type: 'MCQs',
          correctAnswer: 1,
        },
        {
          question: 'Choose the correct translation: “I am learning French.”',
          choices: ["J'apprends le français.", 'Je apprends le français.', 'Je apprende le français.', "J'apprende le français."],
          type: 'MCQs',
          correctAnswer: 1,
        },
        {
          question: 'What is the French term for “library”?',
          choices: ['Librairie', 'Bibliothèque', 'École', 'Bureau'],
          type: 'MCQs',
          correctAnswer: 2,
        },
  
        // 7 Fill in the Blanks
        {
          question: 'Fill in the blank: Tu ______ un chien. (You have a dog)',
          choices: [],
          type: 'FillInTheBlanks',
          correctAnswer: 'as',
        },
        {
          question: 'Fill in the blank: Il ______ un professeur. (He is a teacher)',
          choices: [],
          type: 'FillInTheBlanks',
          correctAnswer: 'est',
        },
        {
          question: 'Fill in the blank: Nous ______ au restaurant. (We are going to the restaurant)',
          choices: [],
          type: 'FillInTheBlanks',
          correctAnswer: 'allons',
        },
        {
          question: 'Fill in the blank: Elle ______ une pomme. (She is eating an apple)',
          choices: [],
          type: 'FillInTheBlanks',
          correctAnswer: 'mange',
        },
        {
          question: 'Fill in the blank: Vous ______ de la musique. (You are listening to music)',
          choices: [],
          type: 'FillInTheBlanks',
          correctAnswer: 'écoutez',
        },
        {
          question: 'Fill in the blank: Ils ______ un film. (They are watching a movie)',
          choices: [],
          type: 'FillInTheBlanks',
          correctAnswer: 'regardent',
        },
        {
          question: 'Fill in the blank: Je ______ français. (I speak French)',
          choices: [],
          type: 'FillInTheBlanks',
          correctAnswer: 'parle',
        },
  
        // 2 Jumbled Words
        {
            question: "education",
            choices: ["education", "technology", "language", "development"],
            type: "JumbledWords"
          },
          {
            question: "technology",
            choices: ["education", "technology", "language", "development"],
            type: "JumbledWords"
          },
  
        // 2 Click on Correct Words
        {
          question: 'Click on the correct translation for "cat":',
          choices: ['chat', 'chien', 'oiseau', 'poisson'],
          type: 'ClickCorrectWords',
          correctAnswer: 1,
        },
        {
          question: 'Click on the correct translation for "school":',
          choices: ['bibliothèque', 'école', 'hôpital', 'maison'],
          type: 'ClickCorrectWords',
          correctAnswer: 2,
        },
  
        // 2 Drag and Drop
        {
          question: 'Drag and drop the correct verb into the blank: Il _____ une pomme.',
          choices: ['mange', 'boit', 'court', 'lit'],
          type: 'DragAndDrop',
          correctAnswer: 'mange',
        },
        {
          question: 'Drag and drop the correct verb into the blank: Elle _____ au parc.',
          choices: ['va', 'lit', 'mange', 'court'],
          type: 'DragAndDrop',
          correctAnswer: 'va',
        },
      ],
    },
  ];
  