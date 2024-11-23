export const quiz = [
    {
      quiz: '1',
      name: 'French Practice Test - 1',
      level: 'Easy',
      topic: 'Mixed',
      questions: [
        // 7 MCQs
        {
          "question": "What is the total of 12 + 8 ?",
          "choices": ["vingt", "dix-huit", "vingt-deux", "vingt-cinq"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        // {
        //   "question": "How do you say 'hello' in French?",
        //   "choices": ["Bonjour", "Au revoir", "Merci", "S'il vous plaît"],
        //   "type": "MCQs",
        //   "correctAnswer": 1
        // },
        // {
        //   "question": "How do you introduce yourself in French?",
        //   "choices": ["Je vais bien", "Je m'appelle...", "Merci beaucoup", "À bientôt"],
        //   "type": "MCQs",
        //   "correctAnswer": 2
        // },
        // {
        //   "question": "What is the nationality of someone from Spain?",
        //   "choices": ["Français", "Espagnol", "Italien", "Allemand"],
        //   "type": "MCQs",
        //   "correctAnswer": 2
        // },
        // {
        //   "question": "What is the verb 'être' for 'je' in French??",
        //   "choices": ["Es", "Suis", "Est", "Sommes"],
        //   "type": "MCQs",
        //   "correctAnswer": 2
        // },
        // {
        //   "question": "How old is Marie if she was born in 2005?",
        //   "choices": ["15 ans", "16 ans", "17 ans", "18 ans"],
        //   "type": "MCQs",
        //   "correctAnswer": 2
        // },
        // {
        //   "question": "What does 'Comment ça va?' mean?",
        //   "choices": ["What's your name?", "How are you?", "Where are you from?", "How old are you?"],
        //   "type": "MCQs",
        //   "correctAnswer": 2
        // },
        // {
        //   "question": "What is the verb 'avoir' for 'ils' in French?",
        //   "choices": ["Ont", "A", "Ai", "Avons"],
        //   "type": "MCQs",
        //   "correctAnswer": 1
        // },
        // {
        //   "question": "How do you say 'thank you' in French?",
        //   "choices": ["Bonjour", "Merci", "S'il vous plaît", "Oui"],
        //   "type": "MCQs",
        //   "correctAnswer": 2
        // },
        // {
        //   "question": "What number comes after quarante-deux in French?",
        //   "choices": ["41", "43", "44", "40"],
        //   "type": "MCQs",
        //   "correctAnswer": 2
        // },
        // {
        //   "question": "What is the verb 'être' for 'nous' in French?",
        //   "choices": ["Sommes", "Êtes", "Sont", "Suis"],
        //   "type": "MCQs",
        //   "correctAnswer": 1
        // },
        // {
        //   "question": "What is the feminine form of 'acteur' in French?",
        //   "choices": ["Actrice", "Acteur", "Directeur", "Directrice"],
        //   "type": "MCQs",
        //   "correctAnswer": 1
        // },
        // {
        //   "question": "What does 'soixante-dix' mean?",
        //   "choices": ["60", "70", "80", "90"],
        //   "type": "MCQs",
        //   "correctAnswer": 2
        // },
        // {
        //   "question": "How do you say 'goodbye' in French?",
        //   "choices": ["Bonjour", "Merci", "Au revoir", "À bientôt"],
        //   "type": "MCQs",
        //   "correctAnswer": 3
        // },
        // {
        //   "question": "How old are you if you were born in 1990?",
        //   "choices": ["30 ans", "32 ans", "34 ans", "28 ans"],
        //   "type": "MCQs",
        //   "correctAnswer": 3
        // },
        // {
        //   "question": "What is the nationality of someone from Canada?",
        //   "choices": ["Canadien", "Américain", "Français", "Anglais"],
        //   "type": "MCQs",
        //   "correctAnswer": 1
        // },
        // {
        //   "question": "What does 'Je suis fatigué' mean?",
        //   "choices": ["I am happy", "I am tired", "I am hungry", "I am busy"],
        //   "type": "MCQs",
        //   "correctAnswer": 2
        // },
        // {
        //   "question": "What does 'quatre-vingts' mean?",
        //   "choices": ["70", "80", "90", "100"],
        //   "type": "MCQs",
        //   "correctAnswer": 2
        // },
        // {
        //   "question": "What is the verb 'avoir' for 'nous' in French?",
        //   "choices": ["Avons", "Avez", "Ont", "Ai"],
        //   "type": "MCQs",
        //   "correctAnswer": 1
        // },
        // {
        //   "question": "What is the feminine form of français?",
        //   "choices": ["Française", "France", "Français", "Francaise"],
        //   "type": "MCQs",
        //   "correctAnswer": 1
        // },



        {
          "question": "J'ai ______ (three) pommes.",
          "choices": ["trois","","",""],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        // {
        //   "question": "Il y a ______ (five) élèves dans la classe.",
        //   "choices": ["cinq","","",""],
        //   "type": "FillInTheBlanks",
        //   "correctAnswer": 1
        // },
        // {
        //   "question": "Nous avons ______ (ten) livres.",
        //   "choices": ["dix","","",""],
        //   "type": "FillInTheBlanks",
        //   "correctAnswer": 1
        // },
        // {
        //   "question": "Mon anniversaire est le ______ (twenty) juin.",
        //   "choices": ["vingt","","",""],
        //   "type": "FillInTheBlanks",
        //   "correctAnswer": 1
        // },
        // {
        //   "question": "Elle a ______ (thirty) ans.",
        //   "choices": ["trente","","",""],
        //   "type": "FillInTheBlanks",
        //   "correctAnswer": 1
        // },
        // {
        //   "question": "Je suis ______ (fourteen) ans.",
        //   "choices": ["quatorze","","",""],
        //   "type": "FillInTheBlanks",
        //   "correctAnswer": 1
        // },
        // {
        //   "question": "Ils ont ______ (four) chiens.",
        //   "choices": ["quatre","","",""],
        //   "type": "FillInTheBlanks",
        //   "correctAnswer": 1
        // },
        // {
        //   "question": "Vous êtes ______ (sixty) ans.",
        //   "choices": ["soixante","","",""],
        //   "type": "FillInTheBlanks",
        //   "correctAnswer": 1
        // },
        // {
        //   "question": "Il y a ______ (twenty-five) étudiants.",
        //   "choices": ["vingt-cinq","","",""],
        //   "type": "FillInTheBlanks",
        //   "correctAnswer": 1
        // },
        // {
        //   "question": "Elle a ______ (thirty-five) amis.",
        //   "choices": ["trente-cinq","","",""],
        //   "type": "FillInTheBlanks",
        //   "correctAnswer": 1
        // },
        // {
        //   "question": "(My name is) ______ Marie.",
        //   "choices": ["Je m'appelle","","",""],
        //   "type": "FillInTheBlanks",
        //   "correctAnswer": 1
        // },
        // {
        //   "question": "Bonjour, ______ (he is) Paul.",
        //   "choices": ["il est","","",""],
        //   "type": "FillInTheBlanks",
        //   "correctAnswer": 1
        // },
        // {
        //   "question": "(I am from) ______ France.",
        //   "choices": ["Je viens de","","",""],
        //   "type": "FillInTheBlanks",
        //   "correctAnswer": 1
        // },
        // {
        //   "question": "Comment ça va? Je vais ______ (good).",
        //   "choices": ["bien","","",""],
        //   "type": "FillInTheBlanks",
        //   "correctAnswer": 1
        // },
        // {
        //   "question": "Il est ______ (teacher, masculine).",
        //   "choices": ["professeur","","",""],
        //   "type": "FillInTheBlanks",
        //   "correctAnswer": 1
        // },
        // {
        //   "question": "Elle est ______ (student, feminine).",
        //   "choices": ["étudiante","","",""],
        //   "type": "FillInTheBlanks",
        //   "correctAnswer": 1
        // },
        // {
        //   "question": "Tu as ______ (a sister).",
        //   "choices": ["une soeur","","",""],
        //   "type": "FillInTheBlanks",
        //   "correctAnswer": 1
        // },
        // {
        //   "question": "Nous sommes ______ (family).",
        //   "choices": ["famille","","",""],
        //   "type": "FillInTheBlanks",
        //   "correctAnswer": 1
        // },
        // {
        //   "question": "Ils sont ______ (engineer).",
        //   "choices": ["ingénieur","","",""],
        //   "type": "FillInTheBlanks",
        //   "correctAnswer": 1
        // },
        // {
        //   "question": "Je suis ______ (sad).",
        //   "choices": ["triste","","",""],
        //   "type": "FillInTheBlanks",
        //   "correctAnswer": 1
        // },
       
  
        // 2 Jumbled Words
        
        {
          "question": "Comment ça va ?",
          "choices": ["va", "ça", "comment"],
          "type": "JumbledWords"
        },
        {
          "question": "Elle s'appelle Marie.",
          "choices": ["s'appelle", "elle", "Marie"],
          "type": "JumbledWords"
        },
        // {
        //   "question": "Il a vingt ans.",
        //   "choices": ["ans", "a", "il", "vingt"],
        //   "type": "JumbledWords"
        // },
        // {
        //   "question": "Je suis Français.",
        //   "choices": ["Français", "je", "suis"],
        //   "type": "JumbledWords"
        // },
        // {
        //   "question": "Je viens du Canada.",
        //   "choices": ["Canada", "viens", "du", "je"],
        //   "type": "JumbledWords"
        // },
        // {
        //   "question": "Elle a trente ans.",
        //   "choices": ["trente", "elle", "a", "ans"],
        //   "type": "JumbledWords"
        // },
        // {
        //   "question": "Il est un professeur.",
        //   "choices": ["professeur", "il", "est", "un"],
        //   "type": "JumbledWords"
        // },
        // {
        //   "question": "Nous sommes une famille.",
        //   "choices": ["nous", "sommes", "une", "famille"],
        //   "type": "JumbledWords"
        // },
        // {
        //   "question": "Il dit bonjour.",
        //   "choices": ["bonjour", "il", "dit"],
        //   "type": "JumbledWords"
        // },
        // {
        //   "question": "J'ai un chien.",
        //   "choices": ["un", "j'ai", "chien"],
        //   "type": "JumbledWords"
        // },
        // {
        //   "question": "Elle est étudiante.",
        //   "choices": ["elle", "est", "étudiante"],
        //   "type": "JumbledWords"
        // },
        // {
        //   "question": "Nous avons trois livres.",
        //   "choices": ["nous", "avons", "livres", "trois"],
        //   "type": "JumbledWords"
        // },
        // {
        //   "question": "Ils sont mes amis.",
        //   "choices": ["sont", "ils", "amis", "mes"],
        //   "type": "JumbledWords"
        // },
        // {
        //   "question": "Je veux être un artiste.",
        //   "choices": ["être", "je", "veux", "un", "artiste"],
        //   "type": "JumbledWords"
        // },
        // {
        //   "question": "Il a un chat.",
        //   "choices": ["a", "un", "il", "chat"],
        //   "type": "JumbledWords"
        // },
        // {
        //   "question": "Elle est très heureuse.",
        //   "choices": ["elle", "très", "est", "heureuse"],
        //   "type": "JumbledWords"
        // },
        // {
        //   "question": "D'où êtes vous ?",
        //   "choices": ["vous", "d'où", "êtes"],
        //   "type": "JumbledWords"
        // },
        // {
        //   "question": "Ils travaillent à Paris.",
        //   "choices": ["travaillent", "ils", "à", "Paris"],
        //   "type": "JumbledWords"
        // },
        // {
        //   "question": "J'ai un frère.",
        //   "choices": ["j'ai", "un", "frère"],
        //   "type": "JumbledWords"
        // },
        // {
        //   "question": "Il est anglais.",
        //   "choices": ["est", "il", "anglais"],
        //   "type": "JumbledWords"
        // },

        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "Bonjour", "rightId": 1 },
              "right": { "word": "Goodbye", "rightId": 3 }
            },
            {
              "left": { "word": "Merci", "rightId": 2 },
              "right": { "word": "Hello", "rightId": 1 }
            },
            {
              "left": { "word": "Au revoir", "rightId": 3 },
              "right": { "word": "Thank you", "rightId": 2 }
            },
            {
              "left": { "word": "S'il vous plaît", "rightId": 4 },
              "right": { "word": "How are you?", "rightId": 5 }
            },
            {
              "left": { "word": "Comment ça va ?", "rightId": 5 },
              "right": { "word": "Please", "rightId": 4 }
            },
            {
              "left": { "word": "À bientôt", "rightId": 6 },
              "right": { "word": "Welcome", "rightId": 8 }
            },
            {
              "left": { "word": "Je suis désolé", "rightId": 7 },
              "right": { "word": "Excuse me", "rightId": 9 }
            },
            {
              "left": { "word": "Bienvenue", "rightId": 8 },
              "right": { "word": "Good night", "rightId": 10 }
            },
            {
              "left": { "word": "Excusez-moi", "rightId": 9 },
              "right": { "word": "See you soon", "rightId": 6 }
            },
            {
              "left": { "word": "Bonne nuit", "rightId": 10 },
              "right": { "word": "I am sorry", "rightId": 7 }
            },
          ],
        },
{
          "question": "Match the Words.",
          type: "MatchTheFollowing",
"pairs": [
    {
      "left": { "word": "Zéro", "rightId": 1 },
      "right": { "word": "60", "rightId": 7 }
    },
    {
      "left": { "word": "Dix", "rightId": 2 },
      "right": { "word": "0", "rightId": 1 }
    },
    {
      "left": { "word": "Vingt", "rightId": 3 },
      "right": { "word": "40", "rightId": 5 }
    },
    {
      "left": { "word": "Trente", "rightId": 4 },
      "right": { "word": "100", "rightId": 10 }
    },
    {
      "left": { "word": "Quarante", "rightId": 5 },
      "right": { "word": "20", "rightId": 3 }
    },
    {
      "left": { "word": "Cinquante", "rightId": 6 },
      "right": { "word": "10", "rightId": 2 }
    },
    {
      "left": { "word": "Soixante", "rightId": 7 },
      "right": { "word": "30", "rightId": 4 }
    },
    {
      "left": { "word": "Soixante-dix", "rightId": 8 },
      "right": { "word": "80", "rightId": 9 }
    },
    {
      "left": { "word": "Quatre-vingts", "rightId": 9 },
      "right": { "word": "50", "rightId": 6 }
    },
    {
      "left": { "word": "Cent", "rightId": 10 },
      "right": { "word": "70", "rightId": 8 }
    }
  ]
},
{
  "question": "Match the Words.",
  type: "MatchTheFollowing",
"pairs": [
{
"left": { "word": "Je m'appelle...", "rightId": 1 },
"right": { "word": "I come from...", "rightId": 2 }
},
{
"left": { "word": "Je viens de...", "rightId": 2 },
"right": { "word": "My name is...", "rightId": 1 }
},
{
"left": { "word": "Je suis...", "rightId": 3 },
"right": { "word": "Here is...", "rightId": 5 }
},
{
"left": { "word": "Enchanté(e)...", "rightId": 4 },
"right": { "word": "Nice to meet you...", "rightId": 4 }
},
{
"left": { "word": "Voici...", "rightId": 5 },
"right": { "word": "I am...", "rightId": 3 }
},
{
"left": { "word": "C'est mon ami...", "rightId": 6 },
"right": { "word": "I am a student...", "rightId": 7 }
},
{
"left": { "word": "Je suis étudiant(e)...", "rightId": 7 },
"right": { "word": "This is my friend...", "rightId": 6 }
},
{
"left": { "word": "Quel âge as-tu", "rightId": 8 },
"right": { "word": "I am of... nationality", "rightId": 9 }
},
{
"left": { "word": "Je suis de nationalité...", "rightId": 9 },
"right": { "word": "Pleased to meet you.", "rightId": 10 }
},
{
"left": { "word": "Ravi(e) de vous rencontrer.", "rightId": 10 },
"right": { "word": "How old are you?", "rightId": 8 }
}
]
},
{
  "question": "Match the Words.",
  type: "MatchTheFollowing",
"pairs": [
{
"left": { "word": "Français", "rightId": 1 },
"right": { "word": "Teacher", "rightId": 5 }
},
{
"left": { "word": "Espagnol", "rightId": 2 },
"right": { "word": "Italian", "rightId": 6 }
},
{
"left": { "word": "Ingénieur", "rightId": 3 },
"right": { "word": "Student", "rightId": 8 }
},
{
"left": { "word": "Médecin", "rightId": 4 },
"right": { "word": "German", "rightId": 7 }
},
{
"left": { "word": "Professeur", "rightId": 5 },
"right": { "word": "French", "rightId": 1 }
},
{
"left": { "word": "Italien", "rightId": 6 },
"right": { "word": "Spanish", "rightId": 2 }
},
{
"left": { "word": "Allemand", "rightId": 7 },
"right": { "word": "Canadian", "rightId": 9 }
},
{
"left": { "word": "Étudiant(e)", "rightId": 8 },
"right": { "word": "Lawyer", "rightId": 10 }
},
{
"left": { "word": "Canadien", "rightId": 9 },
"right": { "word": "Engineer", "rightId": 3 }
},
{
"left": { "word": "Avocat(e)", "rightId": 10 },
"right": { "word": "Doctor", "rightId": 4 }
}
]
},
{
  "question": "Match the Words.",
  type: "MatchTheFollowing",
"pairs": [
{
"left": { "word": "Je suis", "rightId": 1 },
"right": { "word": "I have", "rightId": 7 }
},
{
"left": { "word": "Tu es", "rightId": 2 },
"right": { "word": "He has", "rightId": 9 }
},
{
"left": { "word": "Il est", "rightId": 3 },
"right": { "word": "You have", "rightId": 8 }
},
{
"left": { "word": "Nous sommes", "rightId": 4 },
"right": { "word": "You are (formal/plural)", "rightId": 5 }
},
{
"left": { "word": "Vous êtes", "rightId": 5 },
"right": { "word": "I am", "rightId": 1 }
},
{
"left": { "word": "Ils sont", "rightId": 6 },
"right": { "word": "You are", "rightId": 2 }
},
{
"left": { "word": "J'ai", "rightId": 7 },
"right": { "word": "They are", "rightId": 6 }
},
{
"left": { "word": "Tu as", "rightId": 8 },
"right": { "word": "We have", "rightId": 10 }
},
{
"left": { "word": "Il a", "rightId": 9 },
"right": { "word": "He is", "rightId": 3 }
},
{
"left": { "word": "Nous avons", "rightId": 10 },
"right": { "word": "We are", "rightId": 4 }
}
]
},

        



  
        // 2 Click on Correct Words
        // {
        //   question: "Sélectionnez les mots corrects liés à l'éducation.",
        //   options: ["école", "ordinateur", "voiture", "stylo", "arbre", "oiseau", "poêle", "enseignant", "mer"],
        //   correctAnswers: ["école", "enseignant", "stylo"],
        //   type: "ClickCorrectWords"
        // },
        // {
        //   question: "Sélectionnez les mots associés à la nourriture.",
        //   options: ["pain", "puzzle", "chat", "ordinateur", "fromage", "voiture", "poulet", "télévision", "football"],
        //   correctAnswers: ["pain", "fromage", "poulet"],
        //   type: "ClickCorrectWords"
        // },

            // {
            //     question: "Select the correct words related to education.",
            //     options: ["school", "book", "car", "pen", "tree", "bird", "pan","teacher", "sea"],
            //     correctAnswers: ["school", "teacher", "pen"],
            //     type: "ClickCorrectWords"
            //   },
  
        // 2 Drag and Drop
        // {
        //   question: "Classifiez les mots suivants en catégories : Fruit et Légume.",
        //   types: ["Fruit", "Légume"],
        //   initialWords: [
        //     { word: "Pomme", type: "Fruit" },
        //     { word: "Carotte", type: "Légume" },
        //     { word: "Banane", type: "Fruit" },
        //     { word: "Pomme de terre", type: "Légume" },
        //     { word: "Raisin", type: "Fruit" },
        //     { word: "Tomate", type: "Légume" }
        //   ],
        //   type: "DragAndDrop"
        // },
        // {
        //   question: "Classifiez les mots suivants en catégories : Singulier et Pluriel.",
        //   types: ["Singulier", "Pluriel"],
        //   initialWords: [
        //     { word: "Pomme", type: "Singulier" },
        //     { word: "Carottes", type: "Pluriel" },
        //     { word: "Banane", type: "Singulier" },
        //     { word: "Pommes de terre", type: "Pluriel" },
        //     { word: "Raisin", type: "Singulier" },
        //     { word: "Tomates", type: "Pluriel" }
        //   ],
        //   type: "DragAndDrop"
        // },
      ],
    },
  ];
  