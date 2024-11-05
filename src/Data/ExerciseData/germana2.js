export const quiz = [
    {
      quiz: '1',
      name: 'French Exercise - 1',
      level: 'Easy',
      topic: 'Mixed',
      questions: [

        {
          "question": "Which reflexive pronoun is appropriate for 'I'?",
          "choices": ["me", "te", "nous", "se"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What does 's’habiller' mean?",
          "choices": ["To brush", "To go to bed", "To get dressed", "To hurry"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "How do you say 'They wash themselves' in French?",
          "choices": ["Ils lavent.", "Ils se lavent.", "Ils lavent eux-mêmes.", "Ils se laver."],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Complete: \"Nous __________ à huit heures.\"",
          "choices": ["se réveillent", "me réveille", "se réveille", "nous réveillons"],
          "type": "MCQs",
          "correctAnswer": 4
        },
        {
          "question": "Which verb means 'to go to bed'?",
          "choices": ["se lever", "se coucher", "se brosser", "se dépêcher"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "How do you translate 'I rest' into French?",
          "choices": ["Je me repose", "Je se repose", "Nous nous reposons", "Je me lève"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "Which reflexive pronoun is appropriate for 'they'?",
          "choices": ["se", "te", "nous", "vous"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "How do you say 'You (informal) brush your teeth' in French?",
          "choices": ["Tu te brosses les dents.", "Vous vous brossez les dents.", "Il se brosse les dents.", "Nous nous brossons les dents."],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "Complete: \"Elle __________ avant de sortir.\" (se maquiller)",
          "choices": ["se maquille", "se maquilles", "me maquille", "nous maquille"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What is the translation of 'They hurry'?",
          "choices": ["Ils se reposent.", "Ils se dépêchent.", "Ils se lèvent.", "Ils se couchent."],
          "type": "MCQs",
          "correctAnswer": 2
        },

            {
              question: "Je ______ (se réveiller) à six heures chaque matin.",
              choices: ["me réveille", "mange", "a", "Mon"],
              type: 'FillInTheBlanks',
              correctAnswer: 1
            },
            {
              question: "Elle ______ (se laver) le visage avant de manger.",
              choices: ["se lave", "a", "mange", "vont"],
              type: 'FillInTheBlanks',
              correctAnswer: 1
            },
            {
              question: "Nous ______ (s'habiller) pour aller à l'école.",
              choices: ["habillons", "faisons", "allons", "avons"],
              type: 'FillInTheBlanks',
              correctAnswer: 1
            },
            {
              question: "Vous ______ (se reposer) après le travail.",
              choices: ["reposez", "mangent", "lisent", "sont"],
              type: 'FillInTheBlanks',
              correctAnswer: 1
            },
            {
              question: "Ils ______ (se coucher) tard le soir.",
              choices: ["se couchent", "fait", "mange", "vont"],
              type: 'FillInTheBlanks',
              correctAnswer: 1
            },
            {
              question: "Tu ______ (se brosser) les dents après le repas.",
              choices: ["te brosses", "est", "mange", "a"],
              type:'FillInTheBlanks',
              correctAnswer: 1
            },
            {
              question: "Elles ______ (se maquiller) pour la fête.",
              choices: ["se maquillent", "faites", "lisez", "mangez"],
              type: 'FillInTheBlanks',
              correctAnswer: 1
            },
            {
                question: "Nous ______ (se préparer) pour le dîner de famille.",
                choices: ["préparons", "faites", "lisez", "mangez"],
                type: 'FillInTheBlanks',
                correctAnswer: 1
              },
              {
                question: "Je ______ (se dépêcher) pour arriver à l’heure.",
                choices: ["me dépêche", "faites", "lisez", "mangez"],
                type: 'FillInTheBlanks',
                correctAnswer: 1
              },
              {
                question: "Il ______ (se lever) à sept heures le week-end.",
                choices: ["se lève", "faites", "lisez", "mangez"],
                type: 'FillInTheBlanks',
                correctAnswer: 1
              },

        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "Je me lève tôt.", "rightId": 1 },
              "right": { "word": "He wakes up at six o'clock.", "rightId": 4 }
            },
            {
              "left": { "word": "Elle se brosse les dents.", "rightId": 2 },
              "right": { "word": "You take a shower in the morning.", "rightId": 5 }
            },
            {
              "left": { "word": "Nous nous habillons.", "rightId": 3 },
              "right": { "word": "We rest after school.", "rightId": 9 }
            },
            {
              "left": { "word": "Il se réveille à six heures.", "rightId": 4 },
              "right": { "word": "She puts on makeup before going out.", "rightId": 8 }
            },
            {
              "left": { "word": "Tu te douches le matin.", "rightId": 5 },
              "right": { "word": "They brush their hair.", "rightId": 10 }
            },
            {
              "left": { "word": "Ils s'endorment rapidement.", "rightId": 6 },
              "right": { "word": "I wake up early.", "rightId": 1 }
            },
            {
              "left": { "word": "Je me regarde dans le miroir.", "rightId": 7 },
              "right": { "word": "I wash my hands.", "rightId": 2 }
            },
            {
              "left": { "word": "Elle se maquille avant de sortir.", "rightId": 8 },
              "right": { "word": "We get dressed.", "rightId": 3 }
            },
            {
              "left": { "word": "Nous nous reposons après l'école.", "rightId": 9 },
              "right": { "word": "They comb their hair.", "rightId": 6 }
            },
            {
              "left": { "word": "Ils se peignent les cheveux.", "rightId": 10 },
              "right": { "word": "I look at myself in the mirror.", "rightId": 7 }
            }
          ],
        },
  
      ],
    },
]