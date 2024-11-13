export const quiz = [
    {
      quiz: '1',
      name: 'French Exercise - 1 (A1)',
      level: 'Easy',
      topic: 'Mixed',
      questions: [

        {
          question: "What does 'bonjour' mean in English?",
          choices: ['good night', 'hello', 'goodbye', 'good evening'],
          type: 'MCQs',
          correctAnswer: 2,
        },
        {
          question: "How do the French say 'goodbye'?",
          choices: ['adieu', 'à bientôt', 'au revoir', 'à demoin!'],
          type: 'MCQs',
          correctAnswer: 3,
        },
        {
          question: "What does 'salut' mean?",
          choices: ['farewell', 'hi', 'see you!', 'good morning'],
          type: 'MCQs',
          correctAnswer: 2,
        },
        {
          question: "What's the French for 'good evening, sir'?",
          choices: ['bonjour, monsieur', 'bonsoir, monsieur', 'bonne nuit, monsieur', 'salut, monsieur'],
          type: 'MCQs',
          correctAnswer: 2,
        },
        {
          question: "How do you say 'I'm not doing very well' in French?",
          choices: ['je vais bien', 'je ne vais pas très bien', 'je ne vais pas loin', 'je ne vais bien'],
          type: 'MCQs',
          correctAnswer: 2,
        },
        {
          question: "What does 'comment vas-tu?' mean?",
          choices: ["what is it that you are?", 'where are you going?', "what is it that you are?", "how are you?"],
          type: 'MCQs',
          correctAnswer: 4,
        },
        {
          question: "If someone replies 'pas grand chose' when asked how they are doing, it means",
          choices: ['not much', 'a lot!', "I don't want to say", 'I want to say'],
          type: 'MCQs',
          correctAnswer: 1,
        },
        {
            question: "How do you say 'good luck!' in French?",
            choices: ['bonne chance!', 'bonne journée!', "bon retour!", 'bonne nuit'],
            type: 'MCQs',
            correctAnswer: 1,
          },
          {
            question: "How would you say 'if you please' (or 'please') in French?",
            choices: ['excusez-moi', "s'il vous plaît", "merci", "il n'y a pas de quoi"],
            type: 'MCQs',
            correctAnswer: 2,
          },
          {
            question: "What does 'merci' mean?",
            choices: ['excuse me', 'well', "thank you", 'hello'],
            type: 'MCQs',
            correctAnswer: 3,
          },
          {
            question: "How do you say 'excuse me' in French?",
            choices: ["il n'y a pas de quoi", 'excusez-moi', "merci", "s'il vous plaît"],
            type: 'MCQs',
            correctAnswer: 2,
          },
          {
            question: "'Comment allez-vous?' means ...",
            choices: ['where are you?', 'who are you?', "how are you?", 'are you well?'],
            type: 'MCQs',
            correctAnswer: 3,
          },
          {
            question: "How do you say 'nice to meet you' in French?",
            choices: ['a bientôt', 'bienvenu', "enchanté(e)", 'de rien'],
            type: 'MCQs',
            correctAnswer: 3,
          },
          {
            question: "What does 'très bien!' mean?",
            choices: ['very good!', 'well, say!', "we'll see!", 'hello'],
            type: 'MCQs',
            correctAnswer: 1,
          },
          {
            question: "How do you say 'sorry' in French?",
            choices: ['de rien', 'excusez-moi', "désolé", 'bienvenu'],
            type: 'MCQs',
            correctAnswer: 3,
          },
          {
            question: "How do you say 'what time is it?' in French?",
            choices: ["quelle heure est-il?", "où est la montre?", "c'est quelle heure?", "qu'est-ce que c'est l'heure?"],
            type: 'MCQs',
            correctAnswer: 1
          },
          {
            question: "Which of the following means 'I am thirsty' in French?",
            choices: ["j'ai faim", "je suis soif", "j'ai soif", "je veux boire"],
            type: 'MCQs',
            correctAnswer: 3
          },
          {
            question: "How do you say 'I would like' in French?",
            choices: ["je voudrais", "je veux", "j'aimerais", "j'ai besoin"],
            type: 'MCQs',
            correctAnswer: 1
          },
          {
            question: "What is the French word for 'bread'?",
            choices: ["pain", "fromage", "baguette", "gâteau"],
            type: 'MCQs',
            correctAnswer: 1
          },
          {
            question: "Which of the following means 'how much does it cost?' in French?",
            choices: ["c'est combien?", "combien ça coûte?", "qu'est-ce que c'est le prix?", "quelle est le tarif?"],
            type: 'MCQs',
            correctAnswer: 2
          },

            {
              question: "Bella: Bonjour, ______. (Hello, Sir)",
              choices: ["Monsieur", "mange", "a", "Mon"],
              type: 'FillInTheBlanks',
              correctAnswer: 1
            },
            {
              question: "Laurent: ______, Madame. (Hello, Madam)",
              choices: ["Bonjour", "a", "mange", "vont"],
              type: 'FillInTheBlanks',
              correctAnswer: 1
            },
            {
              question: "Bella: Je m'appelle Anne, et ______ ? (My name is Anne, and you?)",
              choices: ["vous", "faisons", "allons", "avons"],
              type: 'FillInTheBlanks',
              correctAnswer: 1
            },
            {
              question: "Laurent: ______ m'appelle Pierre. (My name is Pierre.)",
              choices: ["Je", "mangent", "lisent", "sont"],
              type: 'FillInTheBlanks',
              correctAnswer: 1
            },
            {
              question: "Bella: ______ . (Nice to meet you.)",
              choices: ["Enchantée", "fait", "mange", "vont"],
              type: 'FillInTheBlanks',
              correctAnswer: 1
            },
            {
              question: "Laurent: Je suis ______ d'anglais, et vous (I am an English teacher, and you?)",
              choices: ["professeur", "est", "mange", "a"],
              type:'FillInTheBlanks',
              correctAnswer: 1
            },
            {
              question: "Bella: Je suis ______ de français . (I am a French teacher.)",
              choices: ["professeure", "faites", "lisez", "mangez"],
              type: 'FillInTheBlanks',
              correctAnswer: 1
            },
            {
                question: "Bella: Vous ______ le café. (Do you like coffee?)",
                choices: ["aimez", "faites", "lisez", "mangez"],
                type: 'FillInTheBlanks',
                correctAnswer: 1
              },
              {
                question: "Laurent: J'adore le ______. (I love coffee.)",
                choices: ["café", "faites", "lisez", "mangez"],
                type: 'FillInTheBlanks',
                correctAnswer: 1
              },
              {
                question: "Bella regarde sa ______. (Bella looks at her watch.)",
                choices: ["montre", "faites", "lisez", "mangez"],
                type: 'FillInTheBlanks',
                correctAnswer: 1
              },
              {
                question: "Bella: Oh, ______ -moi. J'ai une classe dans 5 minutes !. (Oh, excuse me. I have a class in 5 minutes!)",
                choices: ["excusez", "faites", "lisez", "mangez"],
                type: 'FillInTheBlanks',
                correctAnswer: 1
              },
              {
                question: "Laurent: Je comprends. ______ , Madame. (I understand. Goodbye, Madam.)",
                choices: ["Au revoir", "faites", "lisez", "mangez"],
                type: 'FillInTheBlanks',
                correctAnswer: 1
              },
              {
                question: "Bella: Au revoir, ______ Monsieur. (Goodbye, Sir.)",
                choices: ["Au revoir", "faites", "lisez", "mangez"],
                type: 'FillInTheBlanks',
                correctAnswer: 1
              },
              {
                question: "Bella: Où habitez-______? (Where do you live?)",
                choices: ["vous", "tu", "elle", "moi"],
                type: 'FillInTheBlanks',
                correctAnswer: 1
              },
              {
                question: "Laurent: ______ à Paris. (I live in Paris.)",
                choices: ["J'habite", "dans", "sur", "chez"],
                type: 'FillInTheBlanks',
                correctAnswer: 1
              },
              {
                question: "Bella: Est-ce que vous ______ le français? (Do you speak French?)",
                choices: ["parlez", "mangez", "regardez", "étudiez"],
                type: 'FillInTheBlanks',
                correctAnswer: 1
              },
              {
                question: "Laurent: Oui, je ______ français et anglais. (Yes, I speak French and English.)",
                choices: ["parle", "mange", "regarde", "étudie"],
                type: 'FillInTheBlanks',
                correctAnswer: 1
              },
              {
                question: "Bella: Vous aimez la ______ ? (Do you like France?)",
                choices: ["France", "le café", "la ville", "la nourriture"],
                type: "FillInTheBlanks",
                correctAnswer: 1
              },
              {
                question: "Laurent: La France est un pays ______ . (France is a beautiful country.)",
                choices: ["beau", "grande", "riche", "pauvre"],
                type: "FillInTheBlanks",
                correctAnswer: 1
              },
              {
                question: "Bella: J'aimerais visiter ______ . (I would like to visit Paris.)",
                choices: ["Paris", "Rome", "Londres", "New York"],
                type: "FillInTheBlanks",
                correctAnswer: 1
              },

        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "Hello", "rightId": 1 },
              "right": { "word": "Monsieur", "rightId": 3 }
            },
            {
              "left": { "word": "Ma'am", "rightId": 2 },
              "right": { "word": "Bonjour", "rightId": 1 }
            },
            {
              "left": { "word": "Sir", "rightId": 3 },
              "right": { "word": "Madame", "rightId": 2 }
            },
            {
              "left": { "word": "Good-bye", "rightId": 4 },
              "right": { "word": "Enchanté", "rightId": 5 }
            },
            {
              "left": { "word": "Nice to meet you", "rightId": 5 },
              "right": { "word": "Au revoir", "rightId": 4 }
            },
            {
              "left": { "word": "Hi", "rightId": 6 },
              "right": { "word": "Bonne nuit", "rightId": 8 }
            },
            {
              "left": { "word": "See you soon", "rightId": 7 },
              "right": { "word": "Salut", "rightId": 6 }
            },
            {
              "left": { "word": "Good night", "rightId": 8 },
              "right": { "word": "À bientôt", "rightId": 7 }
            },
            {
              "left": { "word": "See you tomorrow", "rightId": 9 },
              "right": { "word": "Bonsoir!", "rightId": 10 }
            },
            {
              "left": { "word": "Good evening", "rightId": 10 },
              "right": { "word": "À demain!", "rightId": 9 }
            }
          ],
        },
  
      ],
    },
    {
      quiz: '2',
      name: 'French Exercise - 2 (A1)',
      level: 'Easy',
      topic: 'Mixed',
      questions: [

        {
          question: 'What is the French word for "three"?',
          choices: ['Un', 'Trois', 'Deux', 'Quatre'],
          type: 'MCQs',
          correctAnswer: 2,
        },
        {
          question: "How do you say 'seven' in French?",
          choices: ['Huit', 'Sept', 'Neuf', 'Dix'],
          type: 'MCQs',
          correctAnswer: 2,
        },
        {
          question: "How do you say 'twelve' in French?",
          choices: ['Douze', 'Onze', 'Dix', 'Vingt'],
          type: 'MCQs',
          correctAnswer: 1,
        },
        {
          question: "How do you say 'eighteen' in French?",
          choices: ['Dix-sept', 'Dix-huit', 'Vingt', 'Quinze'],
          type: 'MCQs',
          correctAnswer: 2,
        },
        {
          question: "How do you say 'fourteen' in French?",
          choices: ['Quatorze', 'Quinze', 'Seize', 'Vingt'],
          type: 'MCQs',
          correctAnswer: 1,
        },
        {
          question: "What is the French word for 'six'?",
          choices: ['Cinq', 'Six', 'Sept', 'Huit'],
          type: 'MCQs',
          correctAnswer: 2,
        },
        {
          question: "What is the French word for 'nine'?",
          choices: ['Neuf', 'Huit', 'Sept', 'Cinq'],
          type: 'MCQs',
          correctAnswer: 1,
        },
        {
          question: "What is the French word for 'fifteen'?",
          choices: ['Quatorze', 'Quinze', 'Seize', 'Dix-huit'],
          type: 'MCQs',
          correctAnswer: 2,
        },
        {
          question: "How do you say 'twenty' in French?",
          choices: ['Dix-neuf', 'Vingt', 'Vingt-et-un', 'Vingt-deux'],
          type: 'MCQs',
          correctAnswer: 2,
        },
        {
          question: "What is the French word for 'nine'?",
          choices: ['Huit', 'Sept', 'Neuf', 'Dix'],
          type: 'MCQs',
          correctAnswer: 3,
        },
        {
          question: "How do you say 'six' in French?",
          choices: ['Sept', 'Cinq', 'Six', 'Quatre'],
          type: 'MCQs',
          correctAnswer: 3,
        },
        {
          question: "How do you say 'seventeen' in French?",
          choices: ['Quinze', 'Seize', 'Dix-sept', 'Dix-huit'],
          type: 'MCQs',
          correctAnswer: 3,
        },
        {
          question: "Which of the following is the first letter of the French alphabet?",
          choices: ['C', 'Z', 'A', 'B'],
          type: 'MCQs',
          correctAnswer: 1,
        },
        {
          question: "Which letter comes after 'B' in the French alphabet?",
          choices: ['E', 'C', 'D', 'F'],
          type: 'MCQs',
          correctAnswer: 3,
        },
        {
          question: "Which of these letters does not exist in the traditional French alphabet?",
          choices: ['K', 'Q', 'W', 'T'],
          type: 'MCQs',
          correctAnswer: 3,
        },
        {
          question: "Which of the following letters is the last letter of the French alphabet?",
          choices: ['V', 'Y', 'Z', 'X'],
          type: 'MCQs',
          correctAnswer: 3,
        },
        {
          question: "What is the 10th letter of the French alphabet?",
          choices: ['I', 'H', 'J', 'K'],
          type: 'MCQs',
          correctAnswer: 3,
        },
        {
          question: "Which letter comes before 'Z' in the French alphabet?",
          choices: ['Y', 'D', 'F', 'G'],
          type: 'MCQs',
          correctAnswer: 1,
        },
        {
          question: "Which letter comes after 'G' in the French alphabet?",
          choices: ['H', 'K', 'A', 'D'],
          type: 'MCQs',
          correctAnswer: 1,
        },
        {
          question: "What is the 3rd letter of the French alphabet?",
          choices: ['C', 'Z', 'Q', 'P'],
          type: 'MCQs',
          correctAnswer: 1,
        },
        {
          "question": "'Four' in French is ______.",
          "choices": ["Quatre", "Cinq", "Six", "Trois"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "'Six' in French is ______.",
          "choices": ["Six", "Quatre", "Huit", "Dix"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "'Eight' in French is ______.",
          "choices": ["Huit", "Six", "Dix", "Quatorze"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "'Ten' in French is ______.",
          "choices": ["Dix", "Onze", "Huit", "Vingt"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "'Five' in French is ______.",
          "choices": ["Cinq", "Six", "Huit", "Quatre"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "'Nine' in French is ______.",
          "choices": ["neuf", "Dix", "Quatre", "Quatorze"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "'Three' in French is ______.",
          "choices": ["Trois", "Deux", "Un", "Quatre"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "The letter 'H' in French is ______ (silent or pronounced).",
          "choices": ["Silent", "Pronounced", "Gé", "Bé"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "'Eleven' in French is ______.",
          "choices": ["Onze", "Dix", "Quatre", "Quatorze"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "'Fourteen' in French is ______.",
          "choices": ["Quatorze", "Onze", "Vingt", "Six"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "'Twenty' in French is ______.",
          "choices": ["Vingt", "Dix", "Quinze", "Trois"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "The 5th letter of the French alphabet is ______.",
          "choices": ["E", "Dix", "Quinze", "Trois"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "The letter that comes before 'N' in the French alphabet is ______.",
          "choices": ["M", "Dix", "Quinze", "Trois"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "The 20th letter of the French alphabet is ______.",
          "choices": ["T", "Dix", "Quinze", "Trois"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "In the French alphabet, the letter ______ comes after 'R'.",
          "choices": ["S", "Dix", "Quinze", "Trois"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "The letter ______ is the last consonant of the French alphabet.",
          "choices": ["Z", "Dix", "Quinze", "Trois"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "The letter that comes after 'G' in the French alphabet is ______.",
          "choices": ["H", "Dix", "Quinze", "Trois"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "The 15th letter of the French alphabet is ______.",
          "choices": ["O", "Dix", "Quinze", "Trois"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "In the French alphabet, the letter ______ comes before 'F'.",
          "choices": ["E", "Dix", "Quinze", "Trois"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "The 23rd letter of the French alphabet is ______.",
          "choices": ["Vingt", "Dix", "Quinze", "Trois"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "DOUZE", "rightId": 1 },
              "right": { "word": "FIVE", "rightId": 4 }
            },
            {
              "left": { "word": "HUIT", "rightId": 2 },
              "right": { "word": "NINETEEN", "rightId": 3 }
            },
            {
              "left": { "word": "DIX-NEUF", "rightId": 3 },
              "right": { "word": "TWELVE", "rightId": 1 }
            },
            {
              "left": { "word": "CINQ", "rightId": 4 },
              "right": { "word": "EIGHT", "rightId": 2 }
            },
            {
              "left": { "word": "QUATORZE", "rightId": 5 },
              "right": { "word": "FIFTEEN", "rightId": 8 }
            },
            {
              "left": { "word": "VINGT", "rightId": 6 },
              "right": { "word": "SEVEN", "rightId": 7 }
            },
            {
              "left": { "word": "SEPT", "rightId": 7 },
              "right": { "word": "FOURTEEN", "rightId": 5 }
            },
            {
              "left": { "word": "QUINZE", "rightId": 8 },
              "right": { "word": "TWENTY", "rightId": 6 }
            },
            {
              "left": { "word": "SIX", "rightId": 9 },
              "right": { "word": "NINE", "rightId": 10 }
            },
            {
              "left": { "word": "NEUF", "rightId": 10 },
              "right": { "word": "SIX", "rightId": 9 }
            }
          ],
        },
  
      ],
    },
    {
      quiz: '3',
      name: 'French Exercise - 3 (A1)',
      level: 'Intermediate',
      topic: 'Mixed',
      questions: [

        {
          "question": "What is the French word for \"brain\"?",
          "choices": ["Cerveau", "Coeur", "Poumon", "Foie"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What is the number \"ninety-three\" in French?",
          "choices": ["Soixante-treize", "Quatre-vingt-treize", "Quatre-vingt-trois", "Quatre-vingt-dix"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What is the French word for \"purple\"?",
          "choices": ["Bleu", "Jaune", "Violet", "Rouge"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "Which of the following means \"to grow\" in French?",
          "choices": ["Grandir", "Coudre", "Cuisiner", "Dormir"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What does \"cinq\" translate to in English?",
          "choices": ["5", "50", "2", "7"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "Which color is “gris” in English?",
          "choices": ["Black", "Blue", "Gray", "Green"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "What does \"lumière\" mean in French?",
          "choices": ["Moon", "Light", "Shadow", "Air"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "How do you say \"I’m thirsty\" in French?",
          "choices": ["J'ai chaud", "J'ai faim", "J'ai soif", "J'ai sommeil"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "What is the plural of \"cheval\" in French?",
          "choices": ["Chevaux", "Chevals", "Chevauxes", "Chevail"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What does \"étonné\" mean in English?",
          "choices": ["Angry", "Surprised", "Happy", "Scared"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What is the French word for \"seventy-eight\"?",
          "choices": ["Soixante-huit", "Soixante-dix-huit", "Quatre-vingt-dix-huit", "Soixante-vingt-dix"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Which word means \"ear\" in French?",
          "choices": ["Nez", "Bouche", "Œil", "Oreille"],
          "type": "MCQs",
          "correctAnswer": 4
        },
        {
          "question": "What does \"château\" mean in French?",
          "choices": ["Forest", "Castle", "Field", "Church"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What is \"eighty\" in French?",
          "choices": ["quinze", "cinq", "Soixante", "trois"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Which of the following is the French translation of \"pink\"?",
          "choices": ["Rouge", "Rose", "Jaune", "Vert"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What is the meaning of \"chaleur\" in English?",
          "choices": ["Cold", "Heat", "Warm", "Humidity"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "How do you say \"library\" in French?",
          "choices": ["Librairie", "Bibliothèque", "Livre", "Cartable"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What does \"dix-neuf\" translate to?",
          "choices": ["11", "9", "19", "90"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "What is the French word for \"pencil\"?",
          "choices": ["Stylo", "Crayon", "Cahier", "Gomme"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Which of these words means \"eight\" in French?",
          "choices": ["huit", "Courir", "Voler", "Chanter"],
          "type": "MCQs",
          "correctAnswer": 1
        },
       
        {
          "question": "Le mur ______ (white) est taché.",
          "choices": ["blanc", "es", "est", "sommes"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Il y a ______ (three) pommes sur la table.",
          "choices": ["trois", "deux", "e", "quatre"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "La couleur du ciel est ______ (blue).",
          "choices": ["bleu", "vert", "rouge", "jaune"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "the number ______ (five) comes after number four.",
          "choices": ["mangeons", "manges", "mange", "mangent"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Elle a ______ (two) chats et un chien.",
          "choices": ["deux", "e", "trois", "quatre"],
          "type": "FillInTheBlanks",
          "correctAnswer": 2
        },
        {
          "question": "Je voudrais un café ______ (hot), s'il vous plaît.",
          "choices": ["chaud", "e", "tiède", "doux"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Le ______ (color) de ma voiture est rouge.",
          "choices": ["couleur", "ton", "teinte", "nuance"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "the number eleven comes before number ______ (twelve).",
          "choices": ["douze", "venir", "partir", "rester"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Mon frère a ______ (five) ans.",
          "choices": ["cinq", "e", "six", "dix"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Cette robe est très ______ (beautiful).",
          "choices": ["belle", "jolie", "beau", "ravissante"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "J'______ (to have) un examen demain.",
          "choices": ["ai", "as", "a", "avons"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Le ______ (weather) aujourd'hui est ensoleillé.",
          "choices": ["temps", "climat", "météo", "saison"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "La terre paraît ______ (blue) depuis l'espace.",
          "choices": ["bleue", "lisez", "lit", "lire"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Il fait ______ (cold) en hiver.",
          "choices": ["froid", "e", "tiède", "frais"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Où lis-tu un ______ (book) ?",
          "choices": ["livre", "parle", "parlons", "parles"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "La ______ (dog) de Marie est très amicale.",
          "choices": ["chien", "1", "animal", "bête"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Je préfère le ______ (green) aux autres couleurs.",
          "choices": ["vert", "bleu", "e", "jaune"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Elle a acheté ______ (ten) pommes au marché.",
          "choices": ["dix", "neuf", "e", "sept"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Mon anniversaire est le ______ (twentieth) mars.",
          "choices": ["vingtième", "e", "trentième", "quinzième"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Il est ______ (tired) après une longue journée de travail.",
          "choices": ["fatigué", "content", "énergique", "calme"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "Bonjour", "rightId": 1 },
              "right": { "word": "20", "rightId": 4 }
            },
            {
              "left": { "word": "Merci", "rightId": 2 },
              "right": { "word": "Red", "rightId": 3 }
            },
            {
              "left": { "word": "Rouge", "rightId": 3 },
              "right": { "word": "Thank you", "rightId": 2 }
            },
            {
              "left": { "word": "Vingt", "rightId": 4 },
              "right": { "word": "Good morning", "rightId": 1 }
            },
            {
              "left": { "word": "Chien", "rightId": 5 },
              "right": { "word": "Yes", "rightId": 8 }
            },
            {
              "left": { "word": "Comment ça va ?", "rightId": 6 },
              "right": { "word": "Please", "rightId": 7 }
            },
            {
              "left": { "word": "S'il vous plaît", "rightId": 7 },
              "right": { "word": "How are you?", "rightId": 6 }
            },
            {
              "left": { "word": "Oui", "rightId": 8 },
              "right": { "word": "Dog", "rightId": 5 }
            },
            {
              "left": { "word": "Non", "rightId": 9 },
              "right": { "word": "Goodbye", "rightId": 10 }
            },
            {
              "left": { "word": "Au revoir", "rightId": 10 },
              "right": { "word": "No", "rightId": 9 }
            }
          ],
        },
  
      ],
    },
    {
      quiz: '4',
      name: 'French Exercise - 4 (A1)',
      level: 'Intermediate',
      topic: 'Mixed',
      questions: [
        {
          "question": "How do you say 'uncle' in French?",
         "choices": ["père", "oncle", "cousin", "frère"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What is the French word for 'daughter'?",
         "choices": ["mère", "fille", "sœur", "tante"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What do you call your father's brother?",
          "choices": ["oncle", "père", "cousin", "grand-père"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What is the French word for 'grandson'?",
          "choices": ["fils", "petit-fils", "neveu", "frère"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What is the correct conjugation of the verb 'manger' for 'nous'?",
          "choices": ["mange", "mangeons", "mangent", "manges"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What is the correct conjugation of the verb 'parler' for 'ils'?",
          "choices": ["parlons", "Parlez", "Parlent", "Parles"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "What is the present tense of the verb 'aller' for 'vous'?",
          "choices": ["allez", "allons", "vont", "vas"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What is the form of the verb 'finir' for 'je'?",
          "choices": ["finis", "finit", "finissons", "finissez"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What is the correct conjugation of the verb 'prendre' for 'elle'?",
          "choices": ["prend", "prenons", "prenez", "prennent"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What is the present tense of the verb 'voir' for 'nous'?",
          "choices": ["Voyons", "Voit", "Vois", "Voient"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What pronoun is used for 'they' (masculine) in French?",
          "choices": ["Ils", "Ils", "Vous", "Nous"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What pronoun is used for 'we' (feminine)?",
          "choices": ["Ils", "Nous", "Elles", "Vous"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What pronoun is used for 'he'?",
          "choices": ["Elle", "Vous", "Il", "Nous"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "What pronoun is used for 'you' (informal)?",
          "choices": ["Vous", "Tu", "Il", "Elle"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What pronoun is used for 'they' (feminine)?",
          "choices": ["Elles", "Ils", "Vous", "Nous"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What pronoun is used for 'you all' (formal)?",
          "choices": ["Tu", "Vous tous", "Elles", "Nous"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What pronoun is used for 'we' (masculine)?",
          "choices": ["Ils", "Nous", "Elles", "Vous tous"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What pronoun is used for 'I'?",
          "choices": ["Vous", "Il", "Je", "Nous"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "What pronoun is used for 'you' (formal, singular)?",
          "choices": ["Tu", "Vous", "Il", "Nous"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What pronoun is used for 'she'?",
          "choices": ["Elle", "Il", "Vous", "Nous"],
          "type": "MCQs",
          "correctAnswer": 1
        },
       
        {
          "question": "Mon ______ (father) travaille à Paris.",
          "choices": ["père", "frère", "oncle", "ami"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Ma ______-mère (grandmother) habite avec nous.",
          "choices": ["grand", "tante", "mère", "sœur"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Ils ont un ______ (son) et une fille.",
          "choices": ["fils", "père", "frère", "neveu"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Je vais rendre visite à ma ______ (aunt) ce week-end.",
          "choices": ["tante", "cousine", "mère", "sœur"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Tu ______ (to eat) toujours des fruits le matin.",
          "choices": ["manges", "bois", "lis", "écris"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Nous ______ (to go) à l'école ensemble.",
          "choices": ["allons", "partons", "courons", "venons"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Elle ______ (to read) un bon livre en ce moment.",
          "choices": ["lit", "parle", "écrit", "dessine"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Vous ______ (to speak) français très bien.",
          "choices": ["parlez", "comprenez", "lisez", "écoutez"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Ils ______ (to finish) leurs devoirs maintenant.",
          "choices": ["finissent", "commencent", "lisent", "mangent"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Je ______ (to drink) du café tous les matins.",
          "choices": ["bois", "mange", "parle", "cours"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "______ (I) suis étudiant en français.",
          "choices": ["Je", "Il", "Elle", "Nous"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "______ (We - feminine) sommes heureuses d’être ici.",
          "choices": ["Nous", "Elles", "Vous", "Ils"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "______ (She) est toujours en avance.",
          "choices": ["Elle", "Il", "Je", "Nous"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "______ (They - masculine) jouent au football.",
          "choices": ["Ils", "Nous", "Elles", "Vous"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "______ (You - informal) es très intelligent.",
          "choices": ["Tu", "Vous", "Elle", "Il"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "______ (You - formal, singular) êtes professeur de français.",
          "choices": ["Vous", "Tu", "Elle", "Nous"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "______ (They - feminine) aiment voyager.",
          "choices": ["Elles", "Ils", "Nous", "Vous"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "______ (You all - informal) regardez la télévision ensemble.",
          "choices": ["Vous", "Nous", "Elles", "Ils"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "______ (He) habite en France depuis trois ans.",
          "choices": ["Il", "Elle", "Nous", "Vous"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "______ (We) parlons anglais et français.",
          "choices": ["Nous", "Ils", "Vous", "Elles"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "Mère", "rightId": 1 },
              "right": { "word": "He", "rightId": 7 }
            },
            {
              "left": { "word": "Nous", "rightId": 2 },
              "right": { "word": "You (formal, singular)", "rightId": 10 }
            },
            {
              "left": { "word": "Ils", "rightId": 3 },
              "right": { "word": "Father", "rightId": 6 }
            },
            {
              "left": { "word": "Tu", "rightId": 4 },
              "right": { "word": "She", "rightId": 9 }
            },
            {
              "left": { "word": "Sœur", "rightId": 5 },
              "right": { "word": "We (feminine)", "rightId": 2 }
            },
            {
              "left": { "word": "Père", "rightId": 6 },
              "right": { "word": "You (informal)", "rightId": 4 }
            },
            {
              "left": { "word": "Il", "rightId": 7 },
              "right": { "word": "They (masculine)", "rightId": 3 }
            },
            {
              "left": { "word": "Vous", "rightId": 8 },
              "right": { "word": "You all (formal)", "rightId": 8 }
            },
            {
              "left": { "word": "Elle", "rightId": 9 },
              "right": { "word": "Mother", "rightId": 1 }
            },
            {
              "left": { "word": "Vous", "rightId": 10 },
              "right": { "word": "Sister", "rightId": 5 }
            }
          ],
        },
  
      ],
    },
    {
      quiz: '5',
      name: 'French Exercise - 5 (A1)',
      level: 'Intermediate',
      topic: 'Mixed',
      questions: [
        {
          "question": "How do you say 'cousin' in French (masculine)?",
          "choices": ["Frère", "Neveu", "Cousin", "Oncle"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "What does 'belle-mère' mean in English?",
          "choices": ["Mother-in-law", "Sister-in-law", "Stepmother", "Aunt"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What is the French word for 'brother-in-law'?",
          "choices": ["Gendre", "Beau-frère", "Cousin", "Neveu"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What word describes 'the daughter of your brother'?",
          "choices": ["Nièce", "Fille", "Cousine", "Tante"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What is the correct conjugation of the verb 'manger' (to eat) for 'nous'?",
          "choices": ["Mangeons", "Mangez", "Mangent", "Mange"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What is the correct form of the verb 'écrire' (to write) for 'je'?",
          "choices": ["Écris", "Écrit", "Écrivons", "Écrivez"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What form of the verb 'finir' (to finish) corresponds to 'tu'?",
          "choices": ["Finis", "Finit", "Finissons", "Finissez"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What is the correct form of 'prendre' (to take) for 'il'?",
          "choices": ["Prend", "Prends", "Prenons", "Prenez"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "How do you conjugate 'parler' (to speak) with 'elles'?",
          "choices": ["Parlent", "Parlons", "Parlez", "Parle"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "How do you conjugate 'faire' (to do) for 'vous'?",
          "choices": ["Faites", "Faisons", "Fais", "Font"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What is the subject pronoun for 'we' in French?",
          "choices": ["Nous", "Vous", "Ils", "Elles"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What is the subject pronoun for 'she' in French?",
         "choices": ["Il", "Elle", "Ils", "Vous"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What subject pronoun is used for 'you' (informal)?",
          "choices": ["Tu (informel)", "Vous (formel)", "Ils", "Nous"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What subject pronoun corresponds to 'they' (feminine)?",
          "choices": ["Ils", "Elles", "Nous", "Vous"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What subject pronoun is used for 'he' in French?",
          "choices": ["Elle", "Nous", "Il", "Vous"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "What subject pronoun is used for 'they' (masculine)?",
          "choices": ["Elles", "Vous", "Ils", "Nous"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "What subject pronoun corresponds to 'I' in French?",
          "choices": ["Il", "Je", "Tu", "Nous"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What subject pronoun corresponds to 'you' (formal)?",
          "choices": ["Vous (formel)", "Tu (informel)", "Ils", "Nous"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "How do you say 'thirty-five' in French?",
          "choices": ["Trente-huit", "Trente-cinq", "Quarante-cinq", "Vingt-cinq"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What number is 'quarante-neuf'?",
          "choices": ["49", "29", "39", "59"],
          "type": "MCQs",
          "correctAnswer": 1
        },
       
        {
          "question": "Le ______ (uncle) de Marie vit à Paris.",
          "choices": ["oncle", "cousin", "frère", "père"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "La ______ (aunt) de Paul travaille à l'hôpital.",
          "choices": ["tante", "mère", "sœur", "cousine"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Mon ______ (nephew) est très intelligent.",
          "choices": ["neveu", "cousin", "fils", "frère"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Mes ______-parents (grandparents) habitent à la campagne.",
          "choices": ["grands", "oncles", "parents", "cousins"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Je ______ (to read) un livre intéressant.",
          "choices": ["lis", "parle", "apprends", "finis"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Ils ______ (to speak) trois langues.",
          "choices": ["parlent", "lisent", "finissent", "prennent"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Nous ______ (to go) à la plage cet été.",
          "choices": ["allons", "partons", "prenons", "finissons"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Tu ______ (to finish) tes devoirs rapidement.",
          "choices": ["finis", "prends", "lis", "apprends"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Elle ______ (to take) toujours le bus pour aller au travail.",
          "choices": ["prend", "finit", "lit", "parle"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Vous ______ (to learn) le français depuis deux ans.",
          "choices": ["apprenez", "finissez", "lisez", "parlez"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "______ (I) suis très fatigué aujourd'hui.",
          "choices": ["Je", "Tu", "Il", "Nous"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "______ (They - masculine) aiment jouer au football.",
          "choices": ["Ils", "Nous", "Elles", "Vous"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "______ (She) est toujours la première à répondre.",
          "choices": ["Elle", "Il", "Tu", "Nous"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "______ (You - formal) êtes mon professeur préféré.",
          "choices": ["Vous", "Tu", "Elle", "Il"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "______ (We) devons partir tôt demain matin.",
          "choices": ["Nous", "Ils", "Vous", "Elles"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "______ (They - feminine) habitent à Lyon.",
          "choices": ["Elles", "Ils", "Nous", "Vous"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "______ (He) ne mange pas de viande.",
          "choices": ["Il", "Elle", "Tu", "Nous"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "______ (You - informal) vas à la fête ce soir?",
          "choices": ["Tu", "Vous", "Il", "Elle"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Mon père a ______ (forty-five) ans aujourd'hui.",
          "choices": ["quarante-cinq", "trente-cinq", "vingt-cinq", "cinquante"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "J'ai acheté ______ (thirty-one) livres cette année.",
          "choices": ["trente et un", "quarante et un", "vingt et un", "trente-deux"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "Il", "rightId": 1 },
              "right": { "word": "You all (formal)", "rightId": 3 }
            },
            {
              "left": { "word": "Nous", "rightId": 2 },
              "right": { "word": "We (feminine)", "rightId": 2 }
            },
            {
              "left": { "word": "Vous tous", "rightId": 3 },
              "right": { "word": "They (feminine)", "rightId": 5 }
            },
            {
              "left": { "word": "Vous", "rightId": 4 },
              "right": { "word": "Forty-two", "rightId": 6 }
            },
            {
              "left": { "word": "Elles", "rightId": 5 },
              "right": { "word": "Thirty-five", "rightId": 7 }
            },
            {
              "left": { "word": "Quarante-deux", "rightId": 6 },
              "right": { "word": "He", "rightId": 1 }
            },
            {
              "left": { "word": "Trente-cinq", "rightId": 7 },
              "right": { "word": "You (formal)", "rightId": 8 }
            },
            {
              "left": { "word": "Vous", "rightId": 8 },
              "right": { "word": "You (informal)", "rightId": 4 }
            },
            {
              "left": { "word": "Elle", "rightId": 9 },
              "right": { "word": "She", "rightId": 9 }
            },
            {
              "left": { "word": "Quarante-sept", "rightId": 10 },
              "right": { "word": "Forty-seven", "rightId": 10 }
            }
          ],
        },
  
      ],
    },
    {
      quiz: '6',
      name: 'French Exercise - 6 (A1)',
      level: 'Intermediate',
      topic: 'Mixed',
      questions: [
        {
          "question": "How do you say 'Good morning' in French?",
          "choices": ["Bonsoir", "Bonjour", "Bonne nuit", "Salut"],
          "type": "MCQs",
          "correctAnswer": 2
      },
      {
          "question": "What does 'Merci' mean?",
          "choices": ["Please", "Goodbye", "Thank you", "Sorry"],
          "type": "MCQs",
          "correctAnswer": 3
      },
      {
          "question": "How do you say 'See you later' in French?",
          "choices": ["À tout à l'heure", "Salut", "Bonsoir", "Bonne nuit"],
          "type": "MCQs",
          "correctAnswer": 1
      },
      {
          "question": "What does 'Pardon' mean?",
          "choices": ["Sorry", "Hello", "Please", "Goodbye"],
          "type": "MCQs",
          "correctAnswer": 1
      },
      {
          "question": "How do you say 'Please' in French?",
          "choices": ["Merci", "S'il vous plaît", "Je suis désolé", "Salut"],
          "type": "MCQs",
          "correctAnswer": 2
      },
      {
          "question": "What does 'Je suis désolé' mean?",
          "choices": ["Excuse me", "I'm sorry", "Hello", "Goodbye"],
          "type": "MCQs",
          "correctAnswer": 2
      },
      {
          "question": "How do you say 'Goodbye' in French?",
          "choices": ["Bonjour", "Au revoir", "Salut", "Bonne nuit"],
          "type": "MCQs",
          "correctAnswer": 2
      },
      {
          "question": "What does 'Bonsoir' mean?",
          "choices": ["Good afternoon", "Good evening", "Good morning", "See you tomorrow"],
          "type": "MCQs",
          "correctAnswer": 2
      },
      {
          "question": "What does 'Ami' mean?",
          "choices": ["Friend", "Family", "Teacher", "Neighbor"],
          "type": "MCQs",
          "correctAnswer": 1
      },
      {
          "question": "How do you say 'House' in French?",
          "choices": ["Voiture", "Maison", "Porte", "Fenêtre"],
          "type": "MCQs",
          "correctAnswer": 2
      },
      {
          "question": "What does 'École' mean?",
          "choices": ["Library", "School", "Store", "Park"],
          "type": "MCQs",
          "correctAnswer": 2
      },
      {
          "question": "How do you say 'Book' in French?",
          "choices": ["Livre", "Stylo", "Table", "Chaise"],
          "type": "MCQs",
          "correctAnswer": 1
      },
      {
          "question": "What does 'Sœur' mean?",
          "choices": ["Brother", "Sister", "Mother", "Cousin"],
          "type": "MCQs",
          "correctAnswer": 2
      },
      {
          "question": "How do you say 'Car' in French?",
          "choices": ["Bicycle", "Bus", "Voiture", "Train"],
          "type": "MCQs",
          "correctAnswer": 3
      },
      {
          "question": "What does 'Frère' mean?",
          "choices": ["Father", "Brother", "Son", "Uncle"],
          "type": "MCQs",
          "correctAnswer": 2
      },
      {
        "question": "How do you say 'Water' in French?",
        "choices": ["Lait", "Jus", "Eau", "Vin"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "What does 'Chien' mean?",
        "choices": ["Cat", "Dog", "Horse", "Rabbit"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "How do you say 'Thank you very much' in French?",
        "choices": ["Merci", "S'il vous plaît", "Merci beaucoup", "Je t'en prie"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "What does 'Rouge' mean?",
        "choices": ["Red", "Blue", "Green", "Yellow"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "How do you say 'I'm sorry' in French?",
        "choices": ["Je t'aime", "Je te déteste", "Tu me manques", "Je suis désolé"],
        "type": "MCQs",
        "correctAnswer": 4
    },
       
        {
          "question": "Ami 1: Salut ! Comment ______ (to be) aujourd'hui ?",
          "choices": ["vas-tu", "est", "va", "êtes-vous"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
      {
          "question": "Ami 2: Bonjour, ______ (I) vais bien, merci. Et toi ?",
          "choices": ["je", "tu", "il", "elle"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
      {
          "question": "Ami 1: Moi, je ______ (to feel) un peu fatigué.",
          "choices": ["me sens", "ressens", "ressent", "sent"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
      {
          "question": "Ami 2: Qu'est-ce que tu ______ (to do) aujourd'hui ?",
          "choices": ["fais", "faites", "faire", "ferai"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
      {
          "question": "Ami 1: Je vais au cinéma. Veux-tu ______ (to come) avec moi ?",
          "choices": ["venir", "partir", "aller", "revenir"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
      {
          "question": "Ami 2: J'adorerais, mais je dois ______ (to study).",
          "choices": ["étudier", "travailler", "lire", "apprendre"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
      {
          "question": "Ami 1: Pas de souci, on peut y aller ______ (tomorrow) si tu veux.",
          "choices": ["demain", "hier", "aujourd'hui", "après-demain"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
      {
          "question": "Ami 2: Parfait ! À quelle heure nous ______ (to meet) ?",
          "choices": ["retrouvons", "voyons", "parlons", "arrivons"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
      {
          "question": "Ami 1: On se retrouve à ______ (seven) heures du soir.",
          "choices": ["sept", "huit", "six", "neuf"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
      {
          "question": "Ami 2: Très bien. Quel film ______ (to watch) ?",
          "choices": ["regardons", "écoutons", "lisons", "parlons"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
      {
          "question": "Ami 1: J'aimerais voir une comédie, mais tu ______ (can) choisir.",
          "choices": ["peux", "veux", "dois", "sais"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
      {
          "question": "Ami 2: Génial ! J'______ (to love) les films amusants.",
          "choices": ["adore", "aime", "regarde", "écoute"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
      {
          "question": "Ami 1: Et si nous ______ (to buy) les billets en ligne ?",
          "choices": ["achetions", "vendions", "prêtions", "regardions"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
      {
          "question": "Ami 2: Oui, ______ (it is) une bonne idée.",
          "choices": ["c'est", "il est", "tu es", "je suis"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
      {
          "question": "Ami 1: Alors, je te vois plus ______ (later).",
          "choices": ["tard", "ce soir", "demain", "maintenant"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
      {
          "question": "Ami 2: À plus ______ (See you later)!",
          "choices": ["tard", "Salut", "Bonjour", "Bonne nuit"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
      {
          "question": "Ami 1: N'oublie pas d'______ (to bring) tes lunettes.",
          "choices": ["apporter", "acheter", "chercher", "porter"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
      {
          "question": "Ami 2: Ne t'inquiète pas, je les ai ______ (already).",
          "choices": ["déjà", "encore", "toujours", "jamais"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
      {
          "question": "Ami 1: Très bien, on ______ (we) se voit bientôt.",
          "choices": ["se", "tu", "je", "vous"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
      {
          "question": "Ami 2:À ______ (See you tomorrow)!",
          "choices": ["demain", "À plus tard", "Bonjour", "Bonne nuit"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "Chien", "rightId": 1 },
              "right": { "word": "House", "rightId": 3 }
            },
            {
              "left": { "word": "Sœur", "rightId": 2 },
              "right": { "word": "Sister", "rightId": 2 }
            },
            {
              "left": { "word": "Maison", "rightId": 3 },
              "right": { "word": "Window", "rightId": 5 }
            },
            {
              "left": { "word": "Livre", "rightId": 4 },
              "right": { "word": "Family", "rightId": 6 }
            },
            {
              "left": { "word": "Fenêtre", "rightId": 5 },
              "right": { "word": "Friend", "rightId": 7 }
            },
            {
              "left": { "word": "Famille", "rightId": 6 },
              "right": { "word": "Dog", "rightId": 1 }
            },
            {
              "left": { "word": "Ami", "rightId": 7 },
              "right": { "word": "Chair", "rightId": 8 }
            },
            {
              "left": { "word": "Chaise", "rightId": 8 },
              "right": { "word": "Book", "rightId": 4 }
            },
            {
              "left": { "word": "École", "rightId": 9 },
              "right": { "word": "Table", "rightId": 10 }
            },
            {
              "left": { "word": "Table", "rightId": 10 },
              "right": { "word": "School", "rightId": 9 }
            }
          ],
        },
  
      ],
    },
    {
      quiz: '7',
      name: 'French Exercise - 7 (A1)',
      level: 'Intermediate',
      topic: 'Mixed',
      questions: [
        {
          "question": "How do you say \"I am happy\" in French?",
          "choices": [ "Je suis heureux", "Je es heureux", "Tu es triste", "Je suis triste",],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "How do you say \"We are friends\" in French?",
          "choices": [ "Vous êtes amis", "Ils sont amis", "Nous sommes amis", "Je suis amis"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "How do you say \"You (formal) are my teacher\" in French?",
          "choices": ["Tu es mon enseignant", "Vous êtes mon enseignant", "Ils sont mon enseignant", "Elle est mon enseignant"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "How do you say \"They are students\" in French?",
          "choices": ["Elles sont étudiante", "Ce sont des étudiants", "Nous sommes étudiants", "Je suis étudiants"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "How do you say \"She is my sister\" in French?",
          "choices": ["Elle est ma sœur", "Elle est mon frère", "Je suis ma sœur", "Tu es ma sœur"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "How do you say \"He is a doctor\" in French?",
          "choices": [ "Elle est docteur", "Ils sont docteurs", "Je suis docteur", "Il est docteur"],
          "type": "MCQs",
          "correctAnswer": 4
        },
        {
          "question": "How do you say \"They are happy\" in French?",
          "choices": [ "Elles est heureuse", "Je suis heureuse", "Ils sont heureux", "Nous sont heureux"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "How do you say \"We are from Spain\" in French?",
          "choices": [ "Vous êtes d'Espagne", "Ils sont d'Espagne", "Nous sommes d'Espagne", "Je suis d'Espagne"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "What is the feminine form of \"engineer\"?",
          "choices": [ "Ingénieur", "Ingénieurs", "Ingénieuses", "Ingénieure"],
          "type": "MCQs",
          "correctAnswer": 4
        },
        {
          "question": "How do you say \"Brazilian\" in French for a woman?",
          "choices": [ "Brésilien","Brésilienne", "Brésiliens", "Brésiliennes"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What is the masculine form of \"teacher\"?",
          "choices": ["Professeure", "Professeurse", "Professeur", "Professeur"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "How do you say \"Cuban\" in French for a man?",
          "choices": ["Cubain", "Cubaine", "Cubains", "Cubaines"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What is the feminine form of \"singer\"?",
          "choices": [ "Chanteurs", "Chanteuse", "Chanteuses", "Chanteur"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "How do you say \"Argentinian\" in French for a man?",
          "choices": ["Argentin", "Argentine", "Argentins", "Argentines"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "How do you say \"American\" in French?",
          "choices": [ "Américains", "Américaine", "Américain", "Américaines"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "How do you say \"nurse\" in French for a man?",
          "choices": [ "Infirmières", "Infirmiers", "Infirmer", "Infirmier"],
          "type": "MCQs",
          "correctAnswer": 4
        },
        {
          "question": "How do you form the phrase \"They have a cat\" in French?",
          "choices": ["Ils ont un chat", "Elles est un chat", "Nous avons un chat", "Je ai un chat"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "How do you say \"She is my friend\" in French?",
          "choices": [ "Je suis mon amie", "Elle sont mon amie", "Elle est mon amie", "Tu es mon amie"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "How do you form the phrase \"You have a book\" in French?",
          "choices": [ "Tu est un livre", "Vous avez un livre", "Tu as un livre", "Ils ont un livre"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "How do you say \"We are students\" in French?",
          "choices": [ "Vous êtes étudiants", "Ils sont étudiants", "Je suis étudiant", "Nous sommes étudiants"],
          "type": "MCQs",
          "correctAnswer": 4
        },
       
    {
      "question": "Je ______ (to be) heureux.",
      "choices": ["suis", "es", "est", "sommes"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
    },
    {
      "question": "Nous ______ (to be) amis.",
      "choices": ["sommes", "êtes", "sont", "est"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
    },
    {
      "question": "Vous ______ (to be) mon enseignant.",
      "choices": ["êtes", "sommes", "suis", "es"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
    },
    {
      "question": "Ils ______ (to be) étudiants.",
      "choices": ["sont", "suis", "es", "est"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
    },
    {
      "question": "Elle ______ (to be) ma sœur.",
      "choices": ["est", "suis", "es", "sommes"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
    },
    {
      "question": "Il ______ (to be) docteur.",
      "choices": ["est", "suis", "es", "sommes"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
    },
    {
      "question": "Ils ______ (to be) heureux.",
      "choices": ["sont", "est", "es", "suis"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
    },
    {
      "question": "Nous ______ (to be) d'Espagne.",
      "choices": ["sommes", "êtes", "sont", "est"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
    },
    {
      "question": "Je ______ (to be) un ingénieur.",
      "choices": ["suis", "est", "es", "sommes"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
    },
    {
      "question": "Elle ______ (to be) brésilienne.",
      "choices": ["est", "suis", "es", "sommes"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
    },
    {
      "question": "Il ______ (to be) cubain.",
      "choices": ["est", "suis", "es", "sommes"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
    },
    {
      "question": "Elle ______ (to be) chanteuse.",
      "choices": ["est", "suis", "es", "sommes"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
    },
    {
      "question": "Il ______ (to be) argentin.",
      "choices": ["est", "suis", "es", "sommes"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
    },
    {
      "question": "Je ______ (to be) américain.",
      "choices": ["suis", "est", "es", "sommes"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
    },
    {
      "question": "Elle ______ (to be) infirmière.",
      "choices": ["est", "suis", "es", "sommes"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
    },
    {
      "question": "Ils ______ (to have) un chat.",
      "choices": ["ont", "ai", "as", "a"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
    },
    {
      "question": "Elle ______ (to have) un livre.",
      "choices": ["a", "ont", "ai", "as"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
    },
    {
      "question": "Vous ______ (to have) un chat.",
      "choices": ["avez", "ont", "ai", "as"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
    },
    {
      "question": "Nous ______ (to have) un bon ami.",
      "choices": ["avons", "avez", "a", "ont"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
    },
    {
      "question": "Tu ______ (to have) une maison.",
      "choices": ["as", "a", "ai", "ont"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
    },
        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "Français", "rightId": 1 },
              "right": { "word": "Italian", "rightId": 2 }
            },
            {
              "left": { "word": "Italien", "rightId": 2 },
              "right": { "word": "German", "rightId": 4 }
            },
            {
              "left": { "word": "Espagnol", "rightId": 3 },
              "right": { "word": "French", "rightId": 1 }
            },
            {
              "left": { "word": "Allemand", "rightId": 4 },
              "right": { "word": "To speak", "rightId": 5 }
            },
            {
              "left": { "word": "Parler", "rightId": 5 },
              "right": { "word": "Spanish", "rightId": 3 }
            },
            {
              "left": { "word": "Manger", "rightId": 6 },
              "right": { "word": "To be", "rightId": 7 }
            },
            {
              "left": { "word": "Être", "rightId": 7 },
              "right": { "word": "English", "rightId": 8 }
            },
            {
              "left": { "word": "Anglais", "rightId": 8 },
              "right": { "word": "To eat", "rightId": 6 }
            },
            {
              "left": { "word": "Chinois", "rightId": 9 },
              "right": { "word": "Japanese", "rightId": 10 }
            },
            {
              "left": { "word": "Japonais", "rightId": 10 },
              "right": { "word": "Chinese", "rightId": 9 }
            }
          ],
        },
  
      ],
    },
    {
      quiz: '8',
      name: 'French Exercise - 8 (A1)',
      level: 'Intermediate',
      topic: 'Mixed',
      questions: [
        {
          "question": "What does \"bureau\" mean?",
          "choices": ["Chair", "Desk", "Notebook", "Pencil"],
          "type": "MCQs",
          "correctAnswer": 2
      },
      {
          "question": "What does \"cahier\" mean in English?",
          "choices": ["Pen", "Notebook", "Book", "Desk"],
          "type": "MCQs",
          "correctAnswer": 2
      },
      {
          "question": "What does \"professeur\" mean?",
          "choices": ["Student", "Teacher", "Classmate", "Principal"],
          "type": "MCQs",
          "correctAnswer": 2
      },
      {
          "question": "How do you say \"window\" in French?",
          "choices": ["Porte", "Bureau", "Fenêtre", "Mur"],
          "type": "MCQs",
          "correctAnswer": 3
      },
      {
          "question": "What does \"stylo\" mean?",
          "choices": ["Pencil", "Paper", "Pen", "Book"],
          "type": "MCQs",
          "correctAnswer": 3
      },
      {
          "question": "What does \"devoir\" mean?",
          "choices": ["Homework", "Exam", "Lesson", "Notebook"],
          "type": "MCQs",
          "correctAnswer": 1
      },
      {
          "question": "What does \"salle de classe\" mean?",
          "choices": ["Classroom", "Library", "Cafeteria", "Playground"],
          "type": "MCQs",
          "correctAnswer": 1
      },
      {
          "question": "What does \"école\" mean?",
          "choices": ["School", "College", "University", "Institute"],
          "type": "MCQs",
          "correctAnswer": 1
      },
      {
          "question": "What does \"S'il te plaît\" mean?",
          "choices": ["Excuse me", "Please", "Thank you", "I'm sorry"],
          "type": "MCQs",
          "correctAnswer": 2
      },
      {
          "question": "What does \"Merci\" mean?",
          "choices": ["Sorry", "Please", "Thank you", "Excuse me"],
          "type": "MCQs",
          "correctAnswer": 3
      },
      {
          "question": "How do you say \"I don’t understand\" in French?",
          "choices": ["Je suis désolé", "Je comprends", "Je ne comprends pas", "Excuse-moi"],
          "type": "MCQs",
          "correctAnswer": 3
      },
      {
          "question": "What does \"Je suis désolé\" mean?",
          "choices": ["I'm sorry", "I don't know", "I'm happy", "I'm sad"],
          "type": "MCQs",
          "correctAnswer": 1
      },
      {
          "question": "How do you say \"Excuse me\" in French?",
          "choices": ["Merci", "S'il te plaît", "Excuse-moi", "Je suis désolé"],
          "type": "MCQs",
          "correctAnswer": 3
      },
      {
          "question": "What does \"Bonjour\" mean?",
          "choices": ["Goodbye", "Good night", "Hello", "Good morning"],
          "type": "MCQs",
          "correctAnswer": 4
      },
      {
          "question": "What does \"Où est la salle de classe?\" mean?",
          "choices": ["Where is the classroom?", "What is the homework?", "How are you?", "When is the exam?"],
          "type": "MCQs",
          "correctAnswer": 1
      },
      {
          "question": "What does \"Puis-je aller aux toilettes?\" mean?",
          "choices": ["Can I go to the library?", "Can I go to the bathroom?", "Can I go home?", "Can I go to class?"],
          "type": "MCQs",
          "correctAnswer": 2
      },
      {
          "question": "What day is today? (If today is Thursday)",
          "choices": ["Lundi", "Mardi", "Jeudi", "Vendredi"],
          "type": "MCQs",
          "correctAnswer": 3
      },
      {
          "question": "How do you say \"February\" in French?",
          "choices": ["Janvier", "Mars", "Février", "Avril"],
          "type": "MCQs",
          "correctAnswer": 3
      },
      {
          "question": "Which season follows summer?",
          "choices": ["Printemps", "Automne", "Hiver", "Été"],
          "type": "MCQs",
          "correctAnswer": 2
      },
      {
          "question": "What does \"Il fait chaud\" mean?",
          "choices": ["It's cold", "It's warm", "It's hot", "It's rainy"],
          "type": "MCQs",
          "correctAnswer": 1
      },
       
        {
          "question": "Le ______ (desk) est en bois.",
          "choices": ["bureau", "chaise", "cahier", "stylo"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
      {
          "question": "La ______ (notebook) est sur la table.",
          "choices": ["cahier", "livre", "stylo", "fenêtre"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
      {
          "question": "Le ______ (teacher) explique la leçon.",
          "choices": ["professeur", "élève", "livre", "devoir"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
      {
          "question": "La ______ (window) est ouverte.",
          "choices": ["fenêtre", "porte", "mur", "bureau"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
      {
          "question": "Le ______ (pen) est sur le bureau.",
          "choices": ["stylo", "crayon", "cahier", "livre"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
      {
          "question": "______ te plaît (Please) passe-moi le livre.",
          "choices": ["S'il", "Merci", "Bonjour", "Excuse-moi"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
      {
          "question": "______ (Thank you) pour ton aide.",
          "choices": ["Merci", "S'il te plaît", "Bonjour", "Excuse-moi"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
      {
          "question": "______ (Excuse me) j'ai une question.",
          "choices": ["Excuse-moi", "S'il te plaît", "Merci", "Bonjour"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
      {
          "question": "Je ne ______ pas (I don't understand) la phrase.",
          "choices": ["comprends", "Merci", "S'il te plaît", "Bonjour"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
      {
          "question": "______ désolé (I'm sorry) d'être en retard.",
          "choices": ["Je suis", "Excuse-moi", "Merci", "Bonjour"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
      {
          "question": "Élève: Bonjour, comment ______ (are you)?",
          "choices": ["ça va", "es-tu", "t'es", "suis"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
      {
          "question": "Professeur: ______ (Good morning) tout le monde.",
          "choices": ["Bonjour", "Merci", "Salut", "Bonsoir"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
      {
          "question": "Élève: Puis-je ______ (go) à la bibliothèque?",
          "choices": ["aller", "venir", "partir", "rester"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
      {
          "question": "Professeur: Oui, ______ (go) vite.",
          "choices": ["vas", "allez", "venez", "pars"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
      {
          "question": "Élève: Quelle est la ______ (homework) pour demain?",
          "choices": ["devoir", "leçon", "examen", "cours"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
      {
          "question": "______ (The) livre est sur la table.",
          "choices": ["Le", "La", "Un", "Les"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
      {
          "question": "______ (A) chat est mignon.",
          "choices": ["Un", "Le", "La", "Les"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
      {
          "question": "______ (The) fleurs sont belles.",
          "choices": ["Les", "Le", "Un", "Une"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
      {
          "question": "______ (An) élève a oublié son livre.",
          "choices": ["Un", "Une", "Le", "La"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
      {
          "question": "______ (The) porte est fermée.",
          "choices": ["La", "Le", "Les", "Un"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
      },
        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "Un livre", "rightId": 1 },
              "right": { "word": "A board", "rightId": 3 }
            },
            {
              "left": { "word": "Une craie", "rightId": 2 },
              "right": { "word": "A sheet of paper", "rightId": 7 }
            },
            {
              "left": { "word": "Un tableau", "rightId": 3 },
              "right": { "word": "A teacher", "rightId": 6 }
            },
            {
              "left": { "word": "Un étudiant", "rightId": 4 },
              "right": { "word": "To draw", "rightId": 10 }
            },
            {
              "left": { "word": "Une règle", "rightId": 5 },
              "right": { "word": "A book", "rightId": 1 }
            },
            {
              "left": { "word": "Un professeur", "rightId": 6 },
              "right": { "word": "Chalk", "rightId": 2 }
            },
            {
              "left": { "word": "Une feuille de papier", "rightId": 7 },
              "right": { "word": "A student", "rightId": 4 }
            },
            {
              "left": { "word": "Écrire", "rightId": 8 },
              "right": { "word": "To read", "rightId": 9 }
            },
            {
              "left": { "word": "Lire", "rightId": 9 },
              "right": { "word": "To write", "rightId": 8 }
            },
            {
              "left": { "word": "Dessiner", "rightId": 10 },
              "right": { "word": "A ruler", "rightId": 5 }
            }
          ],
        },
  
      ],
    },
    {
      quiz: '9',
      name: 'French Exercise - 9 (A1)',
      level: 'Intermediate',
      topic: 'Mixed',
      questions: [
        {
          "question": "What does 'anniversaire' mean in English?",
          "choices": ["Anniversary", "Party", "Birthday", "Celebration"],
          "type": "MCQs",
          "correctAnswer": 3
      },
      {
          "question": "If you were born on May 10, your zodiac sign is...",
          "choices": ["Gémeaux", "Taureau", "Bélier", "Vierge"],
          "type": "MCQs",
          "correctAnswer": 2
      },
      {
          "question": "How do you say 'party' in French?",
          "choices": ["Anniversaire", "Fête", "Soirée", "Célébration"],
          "type": "MCQs",
          "correctAnswer": 2
      },
      {
          "question": "What is the zodiac sign of someone born in July?",
          "choices": ["Bélier", "Lion", "Cancer", "Balance"],
          "type": "MCQs",
          "correctAnswer": 3
      },
      {
          "question": "If your sign is 'Sagittarius', you were born in...",
          "choices": ["Décembre", "Mars", "Juin", "Avril"],
          "type": "MCQs",
          "correctAnswer": 1
      },
      {
          "question": "Which verb means 'célébrer' in English?",
          "choices": ["To celebrate", "To turn", "To complete", "To have"],
          "type": "MCQs",
          "correctAnswer": 1
      },
      {
          "question": "What zodiac sign corresponds to a person born on January 22?",
          "choices": ["Capricorne", "Verseau", "Scorpion", "Poissons"],
          "type": "MCQs",
          "correctAnswer": 2
      },
      {
          "question": "If you were born on April 18, you are...",
          "choices": ["Bélier", "Taureau", "Sagittaire", "Balance"],
          "type": "MCQs",
          "correctAnswer": 1
      },
      {
          "question": "What does the verb 'avoir' mean?",
          "choices": ["To be", "To have", "To make", "To go"],
          "type": "MCQs",
          "correctAnswer": 2
      },
      {
          "question": "What is the correct conjugation of the verb 'être' for 'je'?",
          "choices": ["Suis", "Es", "Sommes", "Sont"],
          "type": "MCQs",
          "correctAnswer": 1
      },
      {
          "question": "What pronoun is correct for 'we' in French?",
          "choices": ["Ils", "Tu", "Nous", "Vous"],
          "type": "MCQs",
          "correctAnswer": 3
      },
      {
          "question": "How do you say 'I am' in French?",
          "choices": ["Je suis", "Tu es", "Nous sommes", "Ils sont"],
          "type": "MCQs",
          "correctAnswer": 1
      },
      {
          "question": "What verb completes this sentence: 'Nous ______ (have) un chien.'?",
          "choices": ["As", "Avez", "Avons", "Ont"],
          "type": "MCQs",
          "correctAnswer": 3
      },
      {
          "question": "How do you conjugate the verb 'écrire' for 'tu'?",
          "choices": ["Écris", "Écrit", "Écrivez", "Écrivons"],
          "type": "MCQs",
          "correctAnswer": 1
      },
      {
          "question": "What does the verb 'écrire' mean?",
          "choices": ["To read", "To write", "To listen", "To watch"],
          "type": "MCQs",
          "correctAnswer": 2
      },
      {
          "question": "How do you say 'fifty' in French?",
          "choices": ["Quarante", "Cinquante", "Soixante", "Vingt"],
          "type": "MCQs",
          "correctAnswer": 2
      },
      {
          "question": "What number follows 'soixante-dix-neuf'?",
          "choices": ["Quatre-vingts", "Soixante", "Cinquante", "Quatre-vingt-dix"],
          "type": "MCQs",
          "correctAnswer": 1
      },
      {
          "question": "How do you say 'thirty-five' in French?",
          "choices": ["Vingt-cinq", "Quarante-cinq", "Trente-cinq", "Cinquante-cinq"],
          "type": "MCQs",
          "correctAnswer": 3
      },
      {
          "question": "How do you say 'one hundred' in French?",
          "choices": ["Cent", "Mille", "Dix", "Cinq"],
          "type": "MCQs",
          "correctAnswer": 1
      },
       
      {
        "question": "Mon anniversaire est le ______ (5) juin.",
        "choices": ["cinq","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Elle a ______ (30) ans aujourd'hui.",
        "choices": ["trente","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Quand est ton ______ (birthday)?",
        "choices": ["anniversaire","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Nous préparons une fête d'______ (birthday) pour mon ami.",
        "choices": ["anniversaire","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "J'ai une fête d'anniversaire le ______ (Sunday).",
        "choices": ["dimanche","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Mon signe astrologique est ______ (Cancer) parce que je suis né en juillet.",
        "choices": ["Cancer","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Il est ______ (Sagittarius) car son anniversaire est en décembre.",
        "choices": ["Sagittaire","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Si tu es né en octobre, tu es ______ (Libra).",
        "choices": ["Balance","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ma mère est ______ (Aquarius), née en février.",
        "choices": ["Verseau","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (Taurus) est le signe de mon frère.",
        "choices": ["Taureau","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Je ______ (am) étudiant en français.",
        "choices": ["suis","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Nous ______ (have) un cours de français aujourd'hui.",
        "choices": ["avons","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ils ______ (are) très gentils.",
        "choices": ["sont","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Tu ______ (speak) français très bien.",
        "choices": ["parles","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Elle ______ (writes) une lettre à sa sœur.",
        "choices": ["écrit","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Mon ______ (father) est médecin.",
        "choices": ["père","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "J'ai deux ______ (sisters).",
        "choices": ["sœurs","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ma ______ (mother) est avocate.",
        "choices": ["mère","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ton ______ (brother) travaille en France.",
        "choices": ["frère","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Leurs ______ (parents) sont très gentils.",
        "choices": ["parents","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "Anniversaire", "rightId": 1 },
              "right": { "word": "To write", "rightId": 3 }
            },
            {
              "left": { "word": "Cancer", "rightId": 2 },
              "right": { "word": "To speak", "rightId": 7 }
            },
            {
              "left": { "word": "Écrire", "rightId": 3 },
              "right": { "word": "Mother", "rightId": 6 }
            },
            {
              "left": { "word": "Frère", "rightId": 4 },
              "right": { "word": "Father", "rightId": 10 }
            },
            {
              "left": { "word": "Nous avons", "rightId": 5 },
              "right": { "word": "Birthday", "rightId": 1 }
            },
            {
              "left": { "word": "Mère", "rightId": 6 },
              "right": { "word": "Cancer", "rightId": 2 }
            },
            {
              "left": { "word": "Parler", "rightId": 7 },
              "right": { "word": "Brother", "rightId": 4 }
            },
            {
              "left": { "word": "École", "rightId": 8 },
              "right": { "word": "Student", "rightId": 9 }
            },
            {
              "left": { "word": "Étudiant", "rightId": 9 },
              "right": { "word": "School", "rightId": 8 }
            },
            {
              "left": { "word": "Père", "rightId": 10 },
              "right": { "word": "We have", "rightId": 5 }
            }
          ],
        },
  
      ],
    },
    {
      quiz: '10',
      name: 'French Exercise - 10 (A1)',
      level: 'Intermediate',
      topic: 'Mixed',
      questions: [
        {
          "question": "Which adverb means 'always' in French?",
          "choices": ["Jamais", "Parfois", "Toujours", "Rarement"],
          "type": "MCQs",
          "correctAnswer": 3
      },
      {
        "question": "How do you say 'He runs fast' in French?",
        "choices": ["Il court bien", "Il court vite", "Il court souvent", "Il court mal"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
      "question": "Which sentence correctly places the adverb 'toujours' in a sentence with a simple tense?",
      "choices": ["Il toujours parle français", "Il parle toujours français", "Toujours il parle français", "Il parle français toujours"],
      "type": "MCQs",
      "correctAnswer": 2
  },
  {
    "question": "What is the French adverb for 'quickly'?",
    "choices": ["Lentement", "Doucement", "Rapidement", "Fréquemment"],
    "type": "MCQs",
    "correctAnswer": 3
},
{
  "question": "What is the translation of 'I rarely go to the park'?",
  "choices": ["Je vais souvent au parc", "Je vais rarement au parc", "Je vais toujours au parc", "Je vais bien au parc"],
  "type": "MCQs",
  "correctAnswer": 2
},
{
  "question": "Which sentence is correct for 'She has already left'?",
  "choices": ["Elle est parti déjà", "Elle est déjà parti", "Elle déjà est partie", "Elle est déjà partie"],
  "type": "MCQs",
  "correctAnswer": 4
},
{
  "question": "Which of the following means 'sometimes' in French?",
  "choices": ["Toujours", "Jamais", "Parfois", "Ici"],
  "type": "MCQs",
  "correctAnswer": 3
},
{
  "question": "How do you say 'They never eat vegetables' in French?",
  "choices": ["Ils mangent jamais des légumes", "Ils ne mangent jamais des légumes", "Ils ne mangent des légumes jamais", "Ils mangent des légumes jamais"],
  "type": "MCQs",
  "correctAnswer": 2
},
{
  "question": "What is the meaning of 'Je fais parfois du sport'?",
  "choices": ["I always exercise", "I often exercise", "I never exercise", "I sometimes exercise"],
  "type": "MCQs",
  "correctAnswer": 4
},
{
  "question": "Which of the following adverbs means 'too much'?",
  "choices": ["Très", "Trop", "Toujours", "Rarement"],
  "type": "MCQs",
  "correctAnswer": 2
},
     
       
      {
        "question": "Il parle ______ (bien/mal) espagnol.",
        "choices": ["bien","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Nous allons ______ (souvent/rarement) au cinéma.",
        "choices": ["souvent","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Elle a ______ (déjà/trop) fini ses devoirs.",
        "choices": ["déjà","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Vous travaillez ______ (lentement/trop) aujourd'hui.",
        "choices": ["trop","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Il a ______ (toujours/souvent) mangé ici.",
        "choices": ["toujours","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Je fais ______ (parfois/souvent) de la randonnée le week-end.",
        "choices": ["parfois","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Elles lisent ______ (vite/lentement) les livres.",
        "choices": ["lentement","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Je suis ______ (très/trop) fatigué ce matin.",
        "choices": ["très","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Nous sommes ______ (déjà/souvent) arrivés à l'aéroport.",
        "choices": ["déjà","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ils ne viennent ______ (jamais/toujours) à nos fêtes.",
        "choices": ["jamais","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
  
        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "Souvent", "rightId": 1 },
              "right": { "word": "Early (placed after the verb or at the end of the sentence)", "rightId": 10 }
            },
            {
              "left": { "word": "Jamais", "rightId": 2 },
              "right": { "word": "Slowly (placed after the verb)", "rightId": 8 }
            },
            {
              "left": { "word": "Toujours", "rightId": 3 },
              "right": { "word": "Quickly (placed after the verb)", "rightId": 6 }
            },
            {
              "left": { "word": "Parfois", "rightId": 4 },
              "right": { "word": "Always (placed before the verb)", "rightId": 3 }
            },
            {
              "left": { "word": "Déjà", "rightId": 5 },
              "right": { "word": "Sometimes (placed at the end of a sentence)", "rightId": 4 }
            },
            {
              "left": { "word": "Rapidement", "rightId": 6 },
              "right": { "word": "Never (used with 'ne' for negation)", "rightId": 2 }
            },
            {
              "left": { "word": "Maintenant", "rightId": 7 },
              "right": { "word": "Often (usually placed after the verb)", "rightId": 1 }
            },
            {
              "left": { "word": "Doucement", "rightId": 8 },
              "right": { "word": "Here (placed after the verb or at the end of the sentence)", "rightId": 9 }
            },
            {
              "left": { "word": "Ici", "rightId": 9 },
              "right": { "word": "Now (at the start or end of a sentence)", "rightId": 7 }
            },
            {
              "left": { "word": "Tôt", "rightId": 10 },
              "right": { "word": "Already (before the past participle)", "rightId": 5 }
            }
          ],
        },
  
      ],
    },
    {
      quiz: '11',
      name: 'French Exercise - 11 (A1)',
      level: 'Intermediate',
      topic: 'Mixed',
      questions: [
        {
          "question": "How do you say \"I love ice cream\" in French?",
          "choices": [
            "J'adore les glaces",
            "J'aime les glaces",
            "Je préfère les glaces",
            "Je déteste les glaces"
          ],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What is the correct sentence to express \"She doesn’t like coffee\"?",
          "choices": [
            "Elle adore le café",
            "Elle n'aime pas le café",
            "Elle aime beaucoup le café",
            "Elle déteste le café"
          ],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Which sentence correctly expresses \"They prefer tea over coffee\"?",
          "choices": [
            "Ils détestent le thé",
            "Ils aiment beaucoup le café",
            "Ils préfèrent le thé au café",
            "Ils préfèrent le café au thé"
          ],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "How do you say \"We hate homework\" in French?",
          "choices": [
            "Nous adorons les devoirs",
            "Nous aimons les devoirs",
            "Nous détestons les devoirs",
            "Nous préférons les devoirs"
          ],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "Which sentence is correct for \"He likes reading but prefers watching TV\"?",
          "choices": [
            "Il aime lire, mais il préfère regarder la télévision",
            "Il déteste lire, mais il aime regarder la télévision",
            "Il préfère lire, mais il n'aime pas regarder la télévision",
            "Il adore lire et il aime regarder la télévision"
          ],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What is the French translation of \"Do you like playing football?\"",
          "choices": [
            "Tu préfères jouer au football ?",
            "Tu détestes jouer au football ?",
            "Tu aimes jouer au football ?",
            "Tu adores jouer au football ?"
          ],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "Which of the following sentences means \"I don’t like chocolate at all\"?",
          "choices": [
            "Je n'aime pas du tout le chocolat",
            "J'adore le chocolat",
            "Je déteste le chocolat",
            "Je préfère le chocolat"
          ],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What is the translation of \"They prefer dogs to cats\"?",
          "choices": [
            "Ils aiment beaucoup les chiens",
            "Ils préfèrent les chiens aux chats",
            "Ils détestent les chiens",
            "Ils adorent les chiens et les chats"
          ],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Which of the following sentences is correct to express \"She loves to travel\"?",
          "choices": [
            "Elle préfère voyager",
            "Elle aime voyager",
            "Elle adore voyager",
            "Elle déteste voyager"
          ],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "How do you say \"We prefer going to the movies\" in French?",
          "choices": [
            "Nous préférons aller au cinéma",
            "Nous aimons aller au cinéma",
            "Nous adorons aller au cinéma",
            "Nous détestons aller au cinéma"
          ],
          "type": "MCQs",
          "correctAnswer": 1
        },
       
      {
        "question": "Nous ______ (adorer) les vacances à la plage.",
        "choices": ["adorons","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
      "question": "Il ne ______ (aimer) pas le football, mais il préfère le basket.",
      "choices": ["aime","1","2","3"],
      "type": "FillInTheBlanks",
      "correctAnswer": 1
  },
    {
        "question": "Elles ______ (préférer) le thé au café.",
        "choices": ["préfèrent","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Tu ______ (détester) les légumes verts, n'est-ce pas ?",
        "choices": ["détestes","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Je ______ (aimer) beaucoup les films d'horreur.",
        "choices": ["aime","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ils ______ (préférer) voyager en voiture plutôt qu'en train.",
        "choices": ["préfèrent","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Vous ______ (aimer) écouter de la musique classique ?",
        "choices": ["aimez","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Elle ______ (détester) faire du shopping, mais elle adore lire.",
        "choices": ["déteste","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Nous ______ (préférer) les chiens aux chats.",
        "choices": ["préférons","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Je ______ (aimer) beaucoup le chocolat, mais je n'aime pas les bonbons.",
        "choices": ["aime","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
  
        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "Me gusta el fútbol", "rightId": 1 },
              "right": { "word": "I don’t like spicy food", "rightId": 3 }
            },
            {
              "left": { "word": "Prefiero leer libros", "rightId": 2 },
              "right": { "word": "I like football", "rightId": 1 }
            },
            {
              "left": { "word": "No me gusta la comida picante", "rightId": 3 },
              "right": { "word": "I prefer to read books", "rightId": 2 }
            },
            {
              "left": { "word": "Me encanta escuchar música", "rightId": 4 },
              "right": { "word": "I hate waking up early", "rightId": 5}
            },
            {
              "left": { "word": "Odio levantarme temprano", "rightId": 5 },
              "right": { "word": "I am fascinated by art", "rightId": 6 }
            },
            {
              "left": { "word": "Me fascina el arte", "rightId": 6 },
              "right": { "word": "I love listening to music", "rightId": 4 }
            },
            {
              "left": { "word": "No me gusta viajar", "rightId": 7 },
              "right": { "word": "I prefer summer to winter", "rightId": 8 }
            },
            {
              "left": { "word": "Prefiero el verano al invierno", "rightId": 8 },
              "right": { "word": "I hate doing homework", "rightId": 10 }
            },
            {
              "left": { "word": "Me encanta ver películas", "rightId": 9 },
              "right": { "word": "I don't like to travel", "rightId": 7 }
            },
            {
              "left": { "word": "Odio hacer la tarea", "rightId": 10 },
              "right": { "word": "I love watching movies", "rightId": 9 }
            }
          ],
        },
  
      ],
    },
    {
      quiz: '12',
      name: 'French Exercise - 12 (A1)',
      level: 'Intermediate',
      topic: 'Mixed',
      questions: [
        {
          "question": "How do you say \"Turn left\" in French?",
          "choices": ["Tournez à droite", "Continuez tout droit", "Tournez à gauche", "Traversez la rue"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "What is the correct phrase for \"Where is the bank?\" in French?",
          "choices": ["Où est la gare ?", "Où est la banque ?", "Comment puis-je aller à la banque ?", "Quel est le chemin pour la banque ?"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Which sentence means \"How can I go to the restaurant?\"",
          "choices": ["Où se trouve le restaurant ?", "Comment puis-je aller au restaurant ?", "Quel est le chemin pour le restaurant ?", "Est-ce loin du restaurant ?"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Which of the following means \"Take the first left\"?",
          "choices": ["Prenez la première à droite", "Prenez la deuxième à gauche", "Prenez la première à gauche", "Continuez tout droit"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "What is the translation of \"The hotel is near the station\"?",
          "choices": ["L’hôtel est à côté de la gare", "L’hôtel est loin de la gare", "L’hôtel est en face de la gare", "L’hôtel est près de la gare"],
          "type": "MCQs",
          "correctAnswer": 4
        },
        {
          "question": "If someone asks you \"Comment puis-je aller au musée ?\", how would you response with \"Turn right and take the first left\"?",
          "choices": ["Tournez à droite et prenez la première à gauche", "Tournez à gauche après l’hôtel", "Traversez la rue et prenez la deuxième à droite", "Continuez tout droit, puis tournez à droite"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What does \"Est-ce loin d’ici ?\" mean in French?",
          "choices": ["Is it near here?", "Is it far from here?", "What is the distance from here?", "Where is it?"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Which of the following sentences means \"The park is next to the school\" in French?",
          "choices": ["Le parc est près de l’école", "Le parc est à côté de l’école", "Le parc est en face de l’école", "Le parc est loin de l’école"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "How do you ask \"How can I go to the supermarket?\" in French?",
          "choices": ["Où se trouve le supermarché ?", "Comment puis-je aller au supermarché ?", "Est-ce loin du supermarché ?", "Quel est le chemin pour le supermarché ?"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "How do you say \"Go straight, then turn left\" in French?",
          "choices": ["Prenez la première rue à gauche", "Allez tout droit, puis tournez à gauche", "Continuez tout droit et traversez le pont", "Prenez la deuxième rue à droite"],
          "type": "MCQs",
          "correctAnswer": 2
        },
       
        {
          "question": "______ (Turn right) après le feu rouge.",
          "choices": ["Tournez à droite", "Aller à", "Tourner à gauche", "À côté de"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Excusez-moi, comment puis-je ______ (go to) la gare ?",
          "choices": ["aller à", "tourner à droite", "prendre la première", "traverser"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Pour aller au musée, continuez tout droit et puis ______ (turn left).",
          "choices": ["tournez à gauche", "tourner à droite", "continuer tout droit", "aller à"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Le cinéma est ______ (next to) la bibliothèque.",
          "choices": ["à côté de", "loin de", "en face de", "près de"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "______ (Cross) le pont, et vous verrez l’église à droite.",
          "choices": ["Traversez", "Prenez", "Continuez", "Allez à"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Pardon, où se trouve ______ (the nearest) pharmacie ?",
          "choices": ["la pharmacie la plus proche", "la banque", "la gare", "l'hôtel"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "L’hôtel est en face de la gare, ______ (far from) l’aéroport.",
          "choices": ["loin de", "près de", "à côté de", "en face de"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Pour aller à la poste, ______ (take the second) rue à droite.",
          "choices": ["prenez la deuxième", "prenez la première", "tournez à gauche", "allez tout droit"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "______ (Is it far) d’ici ?",
          "choices": ["Est-ce loin", "Est-ce proche", "Où est", "Comment aller à"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Où est l’arrêt de bus le plus ______ (near)?",
          "choices": ["proche", "loin", "près", "à côté"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
  
        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "Tournez à droite.", "rightId": 1 },
              "right": { "word": "I’m looking for the train station.", "rightId": 5 }
            },
            {
              "left": { "word": "Tourner à gauche", "rightId": 2 },
              "right": { "word": "It's near here.", "rightId": 4 }
            },
            {
              "left": { "word": "Allez tout droit.", "rightId": 3 },
              "right": { "word": "Go straight.", "rightId": 3 }
            },
            {
              "left": { "word": "C'est près d'ici.", "rightId": 4 },
              "right": { "word": "Turn left.", "rightId": 2}
            },
            {
              "left": { "word": "Je cherche la gare.", "rightId": 5 },
              "right": { "word": "Turn right.", "rightId": 1 }
            },
            {
              "left": { "word": "Est-ce que c'est loin ?", "rightId": 6 },
              "right": { "word": "You have arrived.", "rightId": 10 }
            },
            {
              "left": { "word": "Continuez jusqu'au feu.", "rightId": 7 },
              "right": { "word": "Cross the street.", "rightId": 9 }
            },
            {
              "left": { "word": "Pouvez-vous m'aider, s'il vous plaît ?", "rightId": 8 },
              "right": { "word": "Can you help me, please?", "rightId": 8 }
            },
            {
              "left": { "word": "Traversez la rue.", "rightId": 9 },
              "right": { "word": "Continue until the traffic light.", "rightId": 7 }
            },
            {
              "left": { "word": "Vous êtes arrivé.", "rightId": 10 },
              "right": { "word": "Is it far?", "rightId": 6 }
            }
          ],
        },
  
      ],
    },
    {
      quiz: '13',
      name: 'French Exercise - 13 (A1)',
      level: 'Intermediate',
      topic: 'Mixed',
      questions: [
        {
          "question": "What is the correct translation for \"I would like to make an appointment\"?",
          "choices": [
            "Je voudrais prendre un rendez-vous.",
            "Je voudrais confirmer un rendez-vous.",
            "Je voudrais reporter un rendez-vous.",
            "Je voudrais proposer un rendez-vous."
          ],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "Which phrase means \"Are you available on Tuesday?\"",
          "choices": [
            "Est-ce que vous êtes disponible mardi ?",
            "Est-ce que vous pouvez confirmer mardi ?",
            "Pouvons-nous annuler mardi ?",
            "Est-ce que vous proposez mardi ?"
          ],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "How do you say \"Please confirm the meeting time\"?",
          "choices": [
            "Veuillez reporter l’heure de la réunion.",
            "Merci de confirmer l’heure de la réunion.",
            "Est-ce que vous proposez une nouvelle heure ?",
            "Je voudrais annuler l’heure de la réunion."
          ],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What is the correct response to \"Je voudrais annuler notre rendez-vous\" (I would like to cancel our appointment)?",
          "choices": [
            "Je vais reporter la réunion.",
            "Merci de confirmer la nouvelle date.",
            "Je comprends, merci de me prévenir.",
            "Je suis disponible à cette heure."
          ],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "Which sentence means \"I propose we meet on Friday at 2 p.m.\"?",
          "choices": [
            "Je vous propose de nous rencontrer vendredi à 14h.",
            "Je vous confirme notre rendez-vous vendredi à 14h.",
            "Je voudrais reporter notre rendez-vous à 14h.",
            "Je vais annuler la réunion de vendredi à 14h."
          ],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What is the correct way to ask \"Can we reschedule the meeting?\"",
          "choices": [
            "Est-ce que nous pouvons confirmer la réunion ?",
            "Est-ce que nous pouvons annuler la réunion ?",
            "Est-ce que nous pouvons reporter la réunion ?",
            "Est-ce que nous pouvons discuter la réunion ?"
          ],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "How do you write \"I’m sorry, but I have to cancel our meeting\"?",
          "choices": [
            "Je suis désolé(e), mais je dois confirmer notre rendez-vous.",
            "Je suis désolé(e), mais je dois annuler notre rendez-vous.",
            "Je suis désolé(e), mais je dois reporter notre réunion.",
            "Je suis désolé(e), mais je vais confirmer notre réunion."
          ],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Which of the following is appropriate for ending a formal email?",
          "choices": [
            "À plus tard",
            "Amicalement",
            "Bien à vous",
            "Cordialement"
          ],
          "type": "MCQs",
          "correctAnswer": 4
        },
        {
          "question": "What is the best phrase to use in an informal email when suggesting a meeting time?",
          "choices": [
            "Je vous propose de nous rencontrer lundi à 10h.",
            "Est-ce que tu serais libre lundi à 10h ?",
            "Veuillez confirmer la date et l’heure.",
            "Merci de me faire savoir vos disponibilités."
          ],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Which sentence is appropriate for a formal email when requesting a meeting?",
          "choices": [
            "Ça te dit qu’on se voie jeudi après-midi ?",
            "Est-ce que nous pouvons prendre un rendez-vous jeudi ?",
            "Je voudrais prendre rendez-vous pour une réunion jeudi après-midi.",
            "Peux-tu confirmer notre réunion jeudi ?"
          ],
          "type": "MCQs",
          "correctAnswer": 3
        },
       
        {
          "question": "Je voudrais ______ (make an appointment) pour discuter du projet.",
          "choices": ["prendre rendez-vous", "faire un rendez-vous", "organiser un rendez-vous", "fixer un rendez-vous"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Est-ce que vous êtes ______ (available) lundi à 10h ?",
          "choices": ["disponible", "occupé", "libre", "prêt"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Merci de ______ (confirm) la date et l’heure de notre réunion.",
          "choices": ["confirmer", "vérifier", "notifier", "envoyer"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Je suis désolé(e), mais je dois ______ (cancel) notre rendez-vous.",
          "choices": ["annuler", "modifier", "reprogrammer", "suspendre"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Je vous ______ (propose) de nous rencontrer vendredi après-midi.",
          "choices": ["propose", "demande", "inviter", "suggérer"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Pouvons-nous ______ (meet) jeudi matin pour la réunion ?",
          "choices": ["nous rencontrer", "nous réunir", "nous rassembler", "nous discuter"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Veuillez ______ (suggest) une nouvelle date pour le rendez-vous.",
          "choices": ["proposer", "confirmer", "indiquer", "choisir"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "______ (I would like to) vous rencontrer la semaine prochaine.",
          "choices": ["Je voudrais", "Je veux", "J'aimerais", "Je suis désolé"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Pourriez-vous ______ (send) une confirmation par mail ?",
          "choices": ["envoyer", "faire", "écrire", "demander"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Je vous écris pour ______ (discuss) notre collaboration future.",
          "choices": ["discuter", "parler", "expliquer", "négocier"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
  
        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "Je veux un rendez-vous.", "rightId": 1 },
              "right": { "word": "When can we meet?", "rightId": 5 }
            },
            {
              "left": { "word": "À quelle heure?", "rightId": 2 },
              "right": { "word": "Does that work?", "rightId": 4 }
            },
            {
              "left": { "word": "Je suis libre.", "rightId": 3 },
              "right": { "word": "I am free.", "rightId": 3 }
            },
            {
              "left": { "word": "Est-ce que ça marche?", "rightId": 4 },
              "right": { "word": "I want a date", "rightId": 1}
            },
            {
              "left": { "word": "Quand pouvons-nous nous voir?", "rightId": 5 },
              "right": { "word": "What time?", "rightId": 2 }
            },
            {
              "left": { "word": "Vous êtes disponible?", "rightId": 6 },
              "right": { "word": "Does Friday work?", "rightId": 10 }
            },
            {
              "left": { "word": "Je peux demain.", "rightId": 7 },
              "right": { "word": "I prefer the afternoon.", "rightId": 9 }
            },
            {
              "left": { "word": "C'est bon pour vous?", "rightId": 8 },
              "right": { "word": "Is that good for you?", "rightId": 8 }
            },
            {
              "left": { "word": "Je préfère l'après-midi.", "rightId": 9 },
              "right": { "word": "I can tomorrow.", "rightId": 7 }
            },
            {
              "left": { "word": "Est-ce que vendredi marche?", "rightId": 10 },
              "right": { "word": "Are you available?", "rightId": 6 }
            }
          ],
        },
  
      ],
    },
    {
      quiz: '14',
      name: 'French Exercise - 14 (A1)',
      level: 'Intermediate',
      topic: 'Mixed',
      questions: [
        {
          "question": "Which auxiliary verb is used with the verb *manger* in Passé Composé?",
          "choices": ["être", "aller", "avoir", "faire"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "What is the past participle of *prendre*?",
          "choices": ["pris", "prendu", "prendé", "prent"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "Which of these verbs requires *être* as an auxiliary in Passé Composé?",
          "choices": ["dormir", "arriver", "comprendre", "écrire"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What is the past participle of *venir*?",
          "choices": ["venu", "vené", "vennis", "venais"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "Which sentence correctly uses *Passé Composé*?",
          "choices": ["Je suis mangé un sandwich.", "Il a vu un film intéressant.", "Nous avons être au restaurant hier.", "Elles sont avoir allé à l'école."],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Which of these is the correct auxiliary verb for *naître* in Passé Composé?",
          "choices": ["être", "avoir", "faire", "venir"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "The past participle of *voir* is:",
          "choices": ["vu", "voiré", "vus", "vuir"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What is the past participle of *faire*?",
          "choices": ["fait", "fairé", "fais", "faitu"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "Which of these verbs uses *avoir* in Passé Composé?",
          "choices": ["partir", "aller", "marcher", "tomber"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "Which sentence is grammatically correct in *Passé Composé*?",
          "choices": ["Nous sommes arrivé à temps.", "J’ai pris un taxi pour aller à la gare.", "Elle est avoir parlé avec son professeur.", "Ils avons mange une pizza."],
          "type": "MCQs",
          "correctAnswer": 2
        },
       
        {
          "question": "La semaine dernière, il ______ (visiter) un musée.",
          "choices": ["a visité","1","2","3"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Nous ______ (être) très fatigués après la randonnée.",
          "choices": ["avons été","1","2","3"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Elle ______ (prendre) le train pour Paris.",
          "choices": ["a pris","1","2","3"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Ils ______ (aller) au cinéma hier soir.",
          "choices": ["sont allés","1","2","3"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Vous ______ (faire) un gâteau pour l’anniversaire.",
          "choices": ["avez fait","1","2","3"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Je ______ (lire) un livre intéressant ce week-end.",
          "choices": ["ai lu","1","2","3"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Elles ______ (sortir) avec leurs amis samedi dernier.",
          "choices": ["sont sorties","1","2","3"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Tu ______ (boire) du café ce matin?",
          "choices": ["as bu","1","2","3"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Hier, nous ______ (voir) un film au cinéma.",
          "choices": ["avons vu","1","2","3"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Il ______ (naître) en 1990.",
          "choices": ["est né","1","2","3"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
  
        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "J'ai mangé une pomme.", "rightId": 1 },
              "right": { "word": "I went to the cinema.", "rightId": 9 }
            },
            {
              "left": { "word": "Nous avons visité Paris.", "rightId": 2 },
              "right": { "word": "She took the bus.", "rightId": 4 }
            },
            {
              "left": { "word": "Il a vu un film.", "rightId": 3 },
              "right": { "word": "We visited Paris.", "rightId": 2 }
            },
            {
              "left": { "word": "Elle a pris le bus.", "rightId": 4 },
              "right": { "word": "He saw a movie.", "rightId": 3 }
            },
            {
              "left": { "word": "Ils ont fini leurs devoirs.", "rightId": 5 },
              "right": { "word": "They finished their homework.", "rightId": 5 }
            },
            {
              "left": { "word": "Tu as acheté un livre.", "rightId": 6 },
              "right": { "word": "You bought a book.", "rightId": 6 }
            },
            {
              "left": { "word": "Elle a fait du vélo.", "rightId": 7 },
              "right": { "word": "I ate an apple.", "rightId": 1 }
            },
            {
              "left": { "word": "Vous avez parlé à Jean.", "rightId": 8 },
              "right": { "word": "She rode a bike.", "rightId": 7 }
            },
            {
              "left": { "word": "J'ai été au cinéma.", "rightId": 9 },
              "right": { "word": "You spoke to Jean.", "rightId": 8 }
            },
            {
              "left": { "word": "Ils ont joué au football.", "rightId": 10 },
              "right": { "word": "They played football.", "rightId": 10 }
            }
          ],
        },
  
      ],
    },
    {
      quiz: '15',
      name: 'French Exercise - 15 (A1)',
      level: 'Intermediate',
      topic: 'Mixed',
      questions: [
        {
          "question": "What is the correct future form of *avoir* (to have) for 'ils'?",
          "choices": ["ils aurons", "ils auront", "ils auraient", "ils avoiront"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What is the correct future form of *aller* (to go) for 'je'?",
          "choices": ["j’allons", "j’irais", "j’irai", "j’allai"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "Which of the following is the correct future form of *faire* (to do) for 'elle'?",
          "choices": ["elle fera", "elle faire", "elle ferai", "elle fait"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What is the future tense form of *être* (to be) for 'nous'?",
          "choices": ["nous sommes", "nous serons", "nous seront", "nous être"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Which verb stem is used for *venir* in *Futur Simple*?",
          "choices": ["viendr-", "vendr-", "ven-", "venir-"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What is the future form of *parler* (to speak) for 'tu'?",
          "choices": ["tu parlais", "tu parlera", "tu parleras", "tu parlai"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "The verb *vouloir* (to want) in *Futur Simple* for 'je' is:",
          "choices": ["je veux", "je voudrai", "je voudrais", "je voulerai"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What is the future form of *finir* (to finish) for 'nous'?",
          "choices": ["nous finirons", "nous finissons", "nous finirez", "nous finiront"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "Which of the following verbs has an irregular stem in *Futur Simple*?",
          "choices": ["parler", "finir", "aller", "manger"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "Which sentence is correctly written in *Futur Simple*?",
          "choices": ["Je vais partir demain.", "Nous partirons en vacances en juillet.", "Ils partaient en voyage l’année prochaine.", "Elle est partirai demain matin."],
          "type": "MCQs",
          "correctAnswer": 2
        },
       
        {
          "question": "La semaine prochaine, nous ______ (partir) en vacances.",
          "choices": ["partirons","1","2","3"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Demain, elle ______ (faire) ses devoirs tôt.",
          "choices": ["fera","1","2","3"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Je ______ (acheter) une nouvelle voiture l’année prochaine.",
          "choices": ["achèterai","1","2","3"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Ils ______ (être) en retard pour la réunion demain.",
          "choices": ["seront","1","2","3"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Nous ______ (déménager) à Paris dans deux ans.",
          "choices": ["déménagerons","1","2","3"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Tu ______ (aller) à l'université après tes études?",
          "choices": ["iras","1","2","3"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Il ______ (venir) avec nous au cinéma ce soir.",
          "choices": ["viendra","1","2","3"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Vous ______ (avoir) une réunion avec le directeur demain.",
          "choices": ["aurez","1","2","3"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Elles ______ (finir) le projet avant la fin de la semaine.",
          "choices": ["finiront","1","2","3"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Nous ______ (recevoir) une réponse bientôt.",
          "choices": ["recevrons","1","2","3"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "Je voyagerai demain.", "rightId": 1 },
              "right": { "word": "They will go to the beach.", "rightId": 9 }
            },
            {
              "left": { "word": "Elle ira à Paris.", "rightId": 2 },
              "right": { "word": "We will eat together.", "rightId": 4 }
            },
            {
              "left": { "word": "Ils travailleront ce week-end.", "rightId": 3 },
              "right": { "word": "She will go to Paris.", "rightId": 2 }
            },
            {
              "left": { "word": "Nous mangerons ensemble.", "rightId": 4 },
              "right": { "word": "They will work this weekend.", "rightId": 3 }
            },
            {
              "left": { "word": "Il achètera une nouvelle voiture.", "rightId": 5 },
              "right": { "word": "He will buy a new car.", "rightId": 5 }
            },
            {
              "left": { "word": "Tu parleras à Marie.", "rightId": 6 },
              "right": { "word": "You will talk to Marie.", "rightId": 6 }
            },
            {
              "left": { "word": "Je verrai mes amis.", "rightId": 7 },
              "right": { "word": "I will travel tomorrow.", "rightId": 1 }
            },
            {
              "left": { "word": "Nous visiterons nos grands-parents.", "rightId": 8 },
              "right": { "word": "I will see my friends.", "rightId": 7 }
            },
            {
              "left": { "word": "Ils iront à la plage.", "rightId": 9 },
              "right": { "word": "We will visit our grandparents.", "rightId": 8 }
            },
            {
              "left": { "word": "Vous ferez vos devoirs plus tard.", "rightId": 10 },
              "right": { "word": " You will do your homework later.", "rightId": 10 }
            }
          ],
        },
  
      ],
    },
    {
      quiz: '16',
      name: 'French Exercise - 16 (A1)',
      level: 'Intermediate',
      topic: 'Mixed',
      questions: [
        {
          "question": "What is the traditional French dessert often enjoyed during Christmas?",
          "choices": ["Tarte Tatin", "Bûche de Noël", "Crêpes Suzette", "Macarons"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Which French festival celebrates music and is held every June 21?",
          "choices": ["La Chandeleur", "La Fête de la Musique", "Bastille Day", "La Toussaint"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What is the significance of Bastille Day in France?",
          "choices": ["End of World War II", "Beginning of the French Revolution", "French Independence", "French National Day"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What is the famous French cheese often associated with fondue?",
          "choices": ["Brie", "Camembert", "Emmental", "Roquefort"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "Which French city is known as the 'City of Lights'?",
          "choices": ["Marseille", "Lyon", "Paris", "Nice"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "What is the traditional drink often served during French aperitif?",
          "choices": ["Café", "Vermouth", "Eau", "Thé"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Which French holiday commemorates the dead?",
          "choices": ["Noël", "Pâques", "La Toussaint", "Mardi Gras"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "What is the name of the French national anthem?",
          "choices": ["La Marseillaise", "Ode à la joie", "Fraternité", "L’hymne des enfants"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "Which of the following is a famous French art museum?",
          "choices": ["Musée d'Orsay", "Louvre Museum", "Centre Pompidou", "All of the above"],
          "type": "MCQs",
          "correctAnswer": 4
        },
        {
          "question": "What traditional pastry is associated with French weddings?",
          "choices": ["Croissant", "Macaron", "Gâteau de mariage", "Éclair"],
          "type": "MCQs",
          "correctAnswer": 3
        },
       
        {
          "question": "La ______ (gastronomy) française est reconnue dans le monde entier.",
          "choices": ["gastronomie", "culture", "histoire", "langue"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "La ______ (National holiday) est célébrée le 14 juillet en France.",
          "choices": ["Fête nationale", "Noël", "Pâques", "Halloween"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Claude Monet est un célèbre ______ (painter) impressionniste.",
          "choices": ["peintre", "sculpteur", "musicien", "écrivain"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Paris est connue comme la capitale de la ______ (fashion).",
          "choices": ["mode", "gastronomie", "musique", "littérature"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "La ______ (Candlemas) est une fête où l'on mange des crêpes.",
          "choices": ["Chandeleur", "Bastille", "Toussaint", "Fête de la musique"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "La Révolution ______ (French) a eu lieu en 1789.",
          "choices": ["française", "italienne", "espagnole", "russe"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Il est traditionnel de faire la bise pour ______ (greet) en France.",
          "choices": ["saluer", "manger", "danser", "chanter"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "La ______ (Eiffel Tower) est un symbole emblématique de Paris.",
          "choices": ["Tour Eiffel", "Cathédrale Notre-Dame", "Palais de Versailles", "Arc de Triomphe"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Le français est la ______ (language) officielle de la France.",
          "choices": ["langue", "culture", "monnaie", "tradition"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Le ______ (Fat Tuesday) est une fête célébrée avant le Carême.",
          "choices": ["Mardi Gras", "Noël", "Fête de la musique", "Fête nationale"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "La gastronomie française", "rightId": 1 },
              "right": { "word": "Outdoor markets", "rightId": 5 }
            },
            {
              "left": { "word": "La fête nationale", "rightId": 2 },
              "right": { "word": "Nice Carnival", "rightId": 4 }
            },
            {
              "left": { "word": "Le vin et le fromage", "rightId": 3 },
              "right": { "word": "French national holiday", "rightId": 2 }
            },
            {
              "left": { "word": "Le Carnaval de Nice", "rightId": 4 },
              "right": { "word": "French art and literature", "rightId": 1 }
            },
            {
              "left": { "word": "Les marchés en plein air", "rightId": 5 },
              "right": { "word": "Coffee with milk", "rightId": 9 }
            },
            {
              "left": { "word": "La Tour Eiffel", "rightId": 6 },
              "right": { "word": "Summer festivals", "rightId": 10 }
            },
            {
              "left": { "word": "La mode française", "rightId": 7 },
              "right": { "word": "French wine and cheese", "rightId": 3 }
            },
            {
              "left": { "word": "Les traditions de Noël", "rightId": 8 },
              "right": { "word": "French fashion", "rightId": 7 }
            },
            {
              "left": { "word": "Le café au lait", "rightId": 9 },
              "right": { "word": "Christmas traditions", "rightId": 8 }
            },
            {
              "left": { "word": "Les festivals d'été", "rightId": 10 },
              "right": { "word": "The Eiffel Tower", "rightId": 6 }
            }
          ],
        },
  
      ],
    },
    {
      quiz: '17',
      name: 'French Exercise - 17 (A1)',
      level: 'Intermediate',
      topic: 'Mixed',
      questions: [
        {
          "question": "Which form is used to talk to a friend?",
          "choices": ["Vous", "Tu", "Monsieur", "Madame"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "In which situation would you use 'vous'?",
          "choices": ["En parlant à un inconnu", "En parlant à un frère", "En parlant à un enfant", "En parlant à un ami proche"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "Which phrase is informal?",
          "choices": ["Comment allez-vous ?", "Bonjour, Monsieur.", "Comment vas-tu ?", "Je vous remercie."],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "Which is an example of formal speech?",
          "choices": ["Salut !", "Merci, mon ami !", "Je vous en prie.", "Ça va ?"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "Which word is used for formal language?",
          "choices": ["Salut", "Merci", "Pardon", "S’il vous plaît"],
          "type": "MCQs",
          "correctAnswer": 4
        },
        {
          "question": "In what context would you use 'tu'?",
          "choices": ["Avec un professeur", "Avec un ami", "Avec un client", "Avec un collègue plus âgé"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What is the formal version of 'Thanks a lot'?",
          "choices": ["Merci à toi", "Merci, Madame", "Je vous remercie", "Merci bien"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "How do you say 'Excuse me' formally?",
          "choices": ["Excuse-moi", "Excusez-vous", "Pardon", "Excusez-moi"],
          "type": "MCQs",
          "correctAnswer": 4
        },
        {
          "question": "When would you use 'vous'?",
          "choices": ["En parlant à un enfant", "En parlant à un parent", "En parlant à un supérieur hiérarchique", "En parlant à un camarade de classe"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "What is the correct formal phrase to conclude a letter?",
          "choices": ["Salut à toi", "Amicalement", "Cordialement", "Je vous prie d’agréer, Monsieur, l’expression de mes salutations distinguées."],
          "type": "MCQs",
          "correctAnswer": 4
        },
       
        {
          "question": "Quand je parle à un ami, je dis : “Comment ______-tu (are you going) ?”",
          "choices": ["vas","1","2","3"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Quand je parle à mon professeur, je dis : “Comment allez-______ (you) ?”",
          "choices": ["vous","1","2","3"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Avec mes parents, je dis : “Merci ______ (a lot) !”",
          "choices": ["beaucoup","1","2","3"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Quand je demande de l’aide à un inconnu, je dis : “Excusez-______ (me).”",
          "choices": ["moi","1","2","3"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Je dis “Salut” à mes amis, mais je dis ______ (Good morning) ” à mon patron.",
          "choices": ["Bonjour","1","2","3"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "En parlant à un collègue âgé, je dis : “S’il ______ (you) plaît, pourriez-vous m’aider ?”",
          "choices": ["vous","1","2","3"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Avec un enfant, je dis : “S’il ______ (you) plaît, aide-moi.”",
          "choices": ["vous","1","2","3"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Lors d’une réunion formelle, je dis : “Je vous remercie pour ______ temps.”",
          "choices": ["votre","1","2","3"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Quand je parle à mes grands-parents, j’utilise ______ (you)” pour rester poli.",
          "choices": ["vous","1","2","3"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "À la fin d’un email formel, je termine par “Je vous prie d’agréer, Monsieur, l’expression de mes salutations ______.”",
          "choices": ["distinguées","1","2","3"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "Comment allez-vous ?", "rightId": 1 },
              "right": { "word": "Je veux te poser une question.", "rightId": 10 }
            },
            {
              "left": { "word": "Pouvez-vous m’aider, s’il vous plaît ?", "rightId": 2 },
              "right": { "word": "Tu peux me passer le sel ?", "rightId": 9 }
            },
            {
              "left": { "word": "Je vous remercie.", "rightId": 3 },
              "right": { "word": "Désolé de te déranger.", "rightId": 8 }
            },
            {
              "left": { "word": "Voulez-vous venir avec moi ?", "rightId": 4 },
              "right": { "word": "Comment ça va ?", "rightId": 1 }
            },
            {
              "left": { "word": "Que faites-vous ce soir ?", "rightId": 5 },
              "right": { "word": "Tu peux m’aider, s’il te plaît ?", "rightId": 2 }
            },
            {
              "left": { "word": "Vous avez fini ?", "rightId": 6 },
              "right": { "word": "Merci.", "rightId": 3 }
            },
            {
              "left": { "word": "Je vous présente mon collègue.", "rightId": 7 },
              "right": { "word": "Tu veux venir avec moi ?", "rightId": 4 }
            },
            {
              "left": { "word": "Excusez-moi de vous déranger.", "rightId": 8 },
              "right": { "word": "Tu fais quoi ce soir ?", "rightId": 5 }
            },
            {
              "left": { "word": "Vous pourriez me passer le sel ?", "rightId": 9 },
              "right": { "word": "T’as fini ?", "rightId": 6 }
            },
            {
              "left": { "word": "Je voudrais vous poser une question.", "rightId": 10 },
              "right": { "word": "Je te présente mon ami.", "rightId": 7 }
            }
          ],
        },
  
      ],
    },
    {
      quiz: '18',
      name: 'French Exercise - 18 (A1)',
      level: 'Intermediate',
      topic: 'Mixed',
      questions: [
        {
          "question": "How do you start a phone conversation?",
          "choices": ["Oui ?", "Allô ?", "Salut ?", "Bonsoir ?"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Which phrase do you use to ask to speak to someone?",
          "choices": ["Puis-je parler à [nom], s’il vous plaît ?", "Comment ça va ?", "Je suis ici.", "Qu’est-ce que tu fais ?"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "How do you say that you are the one calling?",
          "choices": ["Salut, comment vas-tu ?", "Je suis là.", "C’est [votre nom] à l’appareil.", "Vous avez appelé ?"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "What do you say when asked to wait?",
          "choices": ["Je vous passe.", "Un moment, s'il vous plaît.", "Qui est à l'appareil ?", "Comment vous appelez-vous ?"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What is a formal way to answer a call?",
          "choices": ["Allô, c'est moi !", "Salut !", "Oui, qui parle ?", "Bonjour, ici [nom]."],
          "type": "MCQs",
          "correctAnswer": 4
        },
        {
          "question": "What do you say when you need to call back later?",
          "choices": ["Je vous rappellerai plus tard.", "Je vous passe.", "Au revoir.", "Oui, qui est-ce ?"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What is the correct phrase to transfer the call to someone else?",
          "choices": ["Je vous le passe.", "Je suis là.", "Je vous appelle.", "Je vous écoute."],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "How do you end a formal phone conversation?",
          "choices": ["Salut !", "À plus !", "Bonne journée !", "Qu'est-ce que tu fais ?"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "What do you say when you are unavailable to talk?",
          "choices": ["Je suis ici.", "Je ne suis pas disponible en ce moment.", "Qui est à l'appareil ?", "J'ai déjà parlé."],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What is a polite way to ask to speak to someone on the phone?",
          "choices": ["Donne-moi [nom], s'il te plaît.", "Puis-je parler à [nom], s'il vous plaît ?", "Où est [nom] ?", "Passe-moi [nom]."],
          "type": "MCQs",
          "correctAnswer": 2
        },
       
        {
          "question": "Pour dire que je vais passer l’appel, je dis : “Je vous ______ (the pass).”",
          "choices": ["le passe", "1", "2", "3"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Quand je décroche le téléphone, je dis : ______ (Hello) ?”",
          "choices": ["Allô", "1", "2", "3"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Si je dois attendre, on me dit : “Un ______ (moment), s’il vous plaît.”",
          "choices": ["moment", "1", "2", "3"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Quand je termine un appel, je dis : “Merci, ______ (has) bientôt !”",
          "choices": ["à", "1", "2", "3"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Si je veux rappeler plus tard, je dis : “Je vous ______ (will remind) plus tard.”",
          "choices": ["rappellerai", "1", "2", "3"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Pour dire que je vais transmettre l’appel, je dis : “Je vous ______ (the pass).”",
          "choices": ["le passe", "1", "2", "3"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Pour dire au revoir de manière formelle, je dis : “Merci beaucoup et ______ (has) bientôt !”",
          "choices": ["à", "1", "2", "3"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Lors d’un appel formel, je commence par : “Bonjour, ______ (It is) Martin à l’appareil.”",
          "choices": ["c'est", "1", "2", "3"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Si je ne peux pas parler maintenant, je dis : “Je ne suis pas ______ (available) en ce moment.”",
          "choices": ["disponible", "1", "2", "3"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Pour conclure un appel formel, je dis : “Je vous souhaite une bonne ______ (daytime).”",
          "choices": ["journée", "1", "2", "3"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "Allô, qui est à l'appareil ?", "rightId": 1 },
              "right": { "word": "I would like to speak to [Name].", "rightId": 2 }
            },
            {
              "left": { "word": "Je voudrais parler à [Name].", "rightId": 2 },
              "right": { "word": "Sorry, he/she is not available.", "rightId": 5 }
            },
            {
              "left": { "word": "Un moment, je vous le/la passe.", "rightId": 3 },
              "right": { "word": "I will call you back later.", "rightId": 8 }
            },
            {
              "left": { "word": "Est-ce que [Name] est là ?", "rightId": 4 },
              "right": { "word": "Hello, who is calling?", "rightId": 1 }
            },
            {
              "left": { "word": "Désolé(e), il/elle n'est pas disponible.", "rightId": 5 },
              "right": { "word": "Thank you for your call.", "rightId": 9 }
            },
            {
              "left": { "word": "Vous pouvez laisser un message.", "rightId": 6 },
              "right": { "word": "One moment, I’ll pass you to him/her.", "rightId": 3 }
            },
            {
              "left": { "word": "Pouvez-vous rappeler plus tard ?", "rightId": 7 },
              "right": { "word": "Is [Name] there?", "rightId": 4 }
            },
            {
              "left": { "word": "Je vous rappellerai plus tard.", "rightId": 8 },
              "right": { "word": "Have a nice day, goodbye!", "rightId": 10 }
            },
            {
              "left": { "word": "Merci de votre appel.", "rightId": 9 },
              "right": { "word": "You can leave a message.", "rightId": 6 }
            },
            {
              "left": { "word": "Bonne journée, au revoir !", "rightId": 10 },
              "right": { "word": "Can you call back later?", "rightId": 7 }
            }
          ],
        },
  
      ],
    },
    {
      quiz: '19',
      name: 'French Exercise - 19 (A1)',
      level: 'Intermediate',
      topic: 'Mixed',
      questions: [
        {
          "question": "What is the correct way to start a formal letter in French?",
          "choices": ["Salut,", "Chère amie,", "Madame, Monsieur,", "Bonjour,"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "How do you formally request information in an email?",
          "choices": ["Fais-moi savoir", "Je veux des informations", "Je vous saurais gré de bien vouloir me fournir...", "Dis-moi ce que je dois faire"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "Which phrase is commonly used at the end of a formal letter?",
          "choices": ["À plus tard", "Veuillez agréer l’expression de mes salutations distinguées", "Je t’embrasse", "Merci pour tout"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What is the French word for 'subject' in a formal email?",
          "choices": ["Objet", "Thème", "Sujet", "Mot"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "Which of the following is used to close a formal email?",
          "choices": ["Cordialement", "Bisous", "Salut", "À la prochaine"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "Which verb is most appropriate to use in a formal letter when making a polite request?",
          "choices": ["Veuillez", "Vouloir", "Avoir", "Être"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "How do you formally ask for someone’s understanding in a letter?",
          "choices": ["Je vous remercie pour votre aide", "Merci d’avance pour votre réponse", "Je vous saurais gré de votre compréhension", "À bientôt"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "Which phrase would you use to express gratitude in a formal email?",
          "choices": ["Je suis content", "Merci beaucoup", "Je vous remercie d’avance", "C’est gentil"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "What is the appropriate phrase to use when sending an attachment in a formal email?",
          "choices": ["Veuillez trouver ci-joint", "Je mets ça ici", "Regarde ça", "Voici le document"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "Which closing statement is the most formal for a letter in French?",
          "choices": ["À plus", "Salut", "Bien à vous", "Veuillez agréer, Madame/Monsieur, mes salutations distinguées"],
          "type": "MCQs",
          "correctAnswer": 4
        },
       
        {
          "question": "Je vous ______ (pray) de bien vouloir examiner ma demande.",
          "choices": ["prie", "demande", "conseille", "permets"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Veuillez agréer, Madame, l'expression de mes salutations ______ (distinguished).",
          "choices": ["distinguées", "sincères", "respectueuses", "amicales"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Je vous écris ______ (in order to) de solliciter un entretien.",
          "choices": ["afin", "pour", "après", "avant"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Nous vous remercions par avance pour votre ______ (answer) rapide.",
          "choices": ["réponse", "demande", "acceptation", "question"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "J'aimerais obtenir des renseignements au ______ (subject) de votre offre d'emploi.",
          "choices": ["sujet", "sous", "au-dessus de", "vers"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Dans ______ (Looking forward to) de votre réponse, je vous prie d'agréer, Monsieur, mes salutations distinguées.",
          "choices": ["Dans l'attente de", "Après", "Avec", "Suivant"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Le sujet de l'email doit être ______ (accurate) et clair.",
          "choices": ["précis", "long", "large", "vague"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Je vous ______ (thanks) d'avance pour l'attention que vous porterez à cette demande.",
          "choices": ["remercie", "écris", "excuse", "répare"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Je me permets de vous ______ (to write) pour obtenir des informations.",
          "choices": ["écrire", "parler", "consulter", "entendre"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Je vous serais reconnaissant(e) de bien vouloir me ______ (provide) des renseignements supplémentaires.",
          "choices": ["fournir", "donner", "envoyer", "offrir"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "Cher Monsieur,", "rightId": 1 },
              "right": { "word": "Dear Madam,", "rightId": 2 }
            },
            {
              "left": { "word": "Cher Madame,", "rightId": 2 },
              "right": { "word": "Thank you for...", "rightId": 5 }
            },
            {
              "left": { "word": "Je vous écris pour...", "rightId": 3 },
              "right": { "word": "Looking forward to your reply,", "rightId": 8 }
            },
            {
              "left": { "word": "En réponse à votre lettre,", "rightId": 4 },
              "right": { "word": "Hello, who is calling?", "rightId": 1 }
            },
            {
              "left": { "word": "Je vous remercie de...", "rightId": 5 },
              "right": { "word": "Best regards,", "rightId": 9 }
            },
            {
              "left": { "word": "Je suis heureux(se) de...", "rightId": 6 },
              "right": { "word": "I am writing to you for...", "rightId": 3 }
            },
            {
              "left": { "word": "Veuillez trouver ci-joint...", "rightId": 7 },
              "right": { "word": "In response to your letter,", "rightId": 4 }
            },
            {
              "left": { "word": "Dans l'attente de votre réponse,", "rightId": 8 },
              "right": { "word": "Sincere greetings,", "rightId": 10 }
            },
            {
              "left": { "word": "Cordialement,", "rightId": 9 },
              "right": { "word": "I am pleased to...", "rightId": 6 }
            },
            {
              "left": { "word": "Sincères salutations,", "rightId": 10 },
              "right": { "word": "Please find attached...", "rightId": 7 }
            }
          ],
        },
  
      ],
    },
    {
      quiz: '20',
      name: 'French Exercise - 1 (A2)',
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
    {
      quiz: '21',
      name: 'French Exercise - 2 (A2)',
      level: 'Easy',
      topic: 'Mixed',
      questions: [

        {
          "question": "What is the comparative adjective of \"bon\"?",
          "choices": ["Meilleur", "Plus bon", "Plus mauvais", "Bon plus"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What is the superlative adjective of \"beau\"?",
          "choices": ["Le plus beau", "Le plus belle", "Le mieux beau", "Le beau"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "\"Paris is __________ than Mumbai.\"",
          "choices": ["plus beau", "plus belle", "plus grands", "plus grand"],
          "type": "MCQs",
          "correctAnswer": 4
        },
        {
          "question": "Which sentence is correct?",
          "choices": ["Il est moins intelligent que moi.", "Il est plus intelligent que moi.", "Il est le plus intelligent que moi.", "Il est le moins intelligent que moi."],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "Which adjective corresponds to the comparative of \"petit\"?",
          "choices": ["Moins petit", "Le plus petit", "Le moins petit", "Petit plus"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What is the superlative of \"mauvais\"?",
          "choices": ["Le moins mauvais", "Le plus mauvais", "Le pire", "Plus mauvais"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "\"This dress is __________ than the other.\"",
          "choices": ["plus beau", "plus belle", "plus grand", "plus vieille"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What is the comparative form of \"facile\"?",
          "choices": ["Moins facile", "Plus facile", "Le plus facile", "Facile plus"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "\"He is __________ of all my friends.\"",
          "choices": ["le plus intelligent", "plus intelligent", "moins intelligent", "intelligent plus"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "Which of the following adjectives can be used as a superlative?",
          "choices": ["Moins bon", "Le meilleur", "Bon plus", "Plus meilleur"],
          "type": "MCQs",
          "correctAnswer": 2
        },

        {
          "question": "Mon frère est __________ (plus/moins) grand que moi.",
          "choices": ["plus", "moins","1","2"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Ce film est __________ (meilleur/pire) que le dernier.",
          "choices": ["meilleur", "pire","1","2"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Elle est __________ (plus/moins) gentille que sa sœur.",
          "choices": ["plus", "moins","1","2"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Ce gâteau est __________ (le meilleur/le pire) que j'ai mangé.",
          "choices": ["le meilleur", "le pire","1","2"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Ce livre est __________ (plus/moins) intéressant que le film.",
          "choices": ["plus", "moins","1","2"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Le Taj Mahal est __________ (plus/moins) beau que la Tour Eiffel.",
          "choices": ["plus", "moins","1","2"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "L’hiver à Delhi est __________ (plus/moins) froid que l'hiver à Paris.",
          "choices": ["moins", "plus",,"1","2" ],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Il est __________ (le plus/moins) rapide de tous les coureurs.",
          "choices": ["le plus", "moins","1","2"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Cette robe est __________ (plus/moins) chère que celle-là.",
          "choices": ["plus", "moins","1","2"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "La France est __________ (plus/moins) grande que l’Inde en termes de population.",
          "choices": ["moins", "plus","1","2"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },

        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "Elle est plus grande.", "rightId": 1 },
              "right": { "word": "He is the least noisy.", "rightId": 7 }
            },
            {
              "left": { "word": "Il est moins grand.", "rightId": 2 },
              "right": { "word": "She is as kind.", "rightId": 8 }
            },
            {
              "left": { "word": "C’est le plus rapide.", "rightId": 3 },
              "right": { "word": "It’s the most beautiful.", "rightId": 9 }
            },
            {
              "left": { "word": "Elle est moins rapide.", "rightId": 4 },
              "right": { "word": "She is less kind.", "rightId": 10 }
            },
            {
              "left": { "word": "Il est aussi fort.", "rightId": 5 },
              "right": { "word": "She is bigger.", "rightId": 1 }
            },
            {
              "left": { "word": "Elle est la meilleure.", "rightId": 6 },
              "right": { "word": "It’s the fastest.", "rightId": 3 }
            },
            {
              "left": { "word": "Il est le moins bruyant.", "rightId": 7 },
              "right": { "word": "He is smaller.", "rightId": 2 }
            },
            {
              "left": { "word": "Elle est aussi gentille.", "rightId": 8 },
              "right": { "word": "She is slower.", "rightId": 4 }
            },
            {
              "left": { "word": "C’est le plus beau.", "rightId": 9 },
              "right": { "word": "She is the best.", "rightId": 6 }
            },
            {
              "left": { "word": "Elle est moins gentille.", "rightId": 10 },
              "right": { "word": "He is as strong.", "rightId": 5 }
            }
          ],
        },
  
      ],
    },
    {
      quiz: '22',
      name: 'French Exercise - 3 (A2)',
      level: 'Easy',
      topic: 'Mixed',
      questions: [

        {
          "question": "How do you express a hypothetical situation with the conditional?",
          "choices": [
            "With 'si + present'",
            "With 'si + imperfect'",
            "With 'si + conditional'",
            "With 'si + future'"
          ],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Which phrase is correct for making a polite request?",
          "choices": [
            "I want help.",
            "You must help me.",
            "Could you help me?",
            "Help me, please."
          ],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "If I __________ earlier, I would have caught the train.",
          "choices": [
            "had left",
            "will leave",
            "would have left",
            "had been leaving"
          ],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "What is the correct verb form for the sentence: 'If you __________ a bit more, you would succeed.'",
          "choices": [
            "studied",
            "will study",
            "study",
            "would study"
          ],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "When is the conditional used?",
          "choices": [
            "To talk about real facts",
            "For wishes and hypotheses",
            "To express past actions",
            "To describe ongoing actions"
          ],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Which phrase is correct?",
          "choices": [
            "If I would have the money, I would help you.",
            "If I had the money, I would help you.",
            "If I have the money, I would help you.",
            "If I have the money, I will help you."
          ],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "I __________ like to meet you.",
          "choices": [
            "like",
            "would like",
            "likes",
            "would likes"
          ],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "If you __________ more time, you would travel more.",
          "choices": [
            "had",
            "have",
            "would have",
            "would had"
          ],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "How do you express a polite suggestion in French?",
          "choices": [
            "I can do that.",
            "I should do that.",
            "I would like to do that.",
            "I will do that."
          ],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "If you were more patient, you would understand the situation better.",
          "choices": [
            "are",
            "would be",
            "are",
            "were"
          ],
          "type": "MCQs",
          "correctAnswer": 2
        },

        {
          "question": "Si j'avais de l'argent, je __________ (would buy) une voiture neuve.",
          "choices": ["achèterais"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Si tu étais plus gentil, il __________ (would love you).",
          "choices": ["t'aimerait"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Si nous avions plus de temps, nous __________ (would visit) plus de musées.",
          "choices": ["visiterions"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Vous __________ (could) m’aider, s’il vous plaît ?",
          "choices": ["pourriez"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Si je savais parler français, je __________ (would work) en France.",
          "choices": ["travaillerais"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Si elle __________ (was) ici, elle t’aurait aidé.",
          "choices": ["était"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Nous __________ (would like) aller au cinéma ce soir.",
          "choices": ["aimerions"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Si tu __________ (had) le temps, tu pourrais m’accompagner.",
          "choices": ["avais"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "J'__________ (would be) heureux si tu acceptais mon invitation.",
          "choices": ["serais"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "Si je __________ (could), je t'emmènerais en vacances.",
          "choices": ["pouvais"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },

        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "Je voudrais un café.", "rightId": 1 },
              "right": { "word": "We could go to the cinema.", "rightId": 3 }
            },
            {
              "left": { "word": "Il aimerait venir.", "rightId": 2 },
              "right": { "word": "She would like to visit France.", "rightId": 5 }
            },
            {
              "left": { "word": "Nous pourrions aller au cinéma.", "rightId": 3 },
              "right": { "word": "Would you like an ice cream?", "rightId": 4 }
            },
            {
              "left": { "word": "Tu voudrais une glace ?", "rightId": 4 },
              "right": { "word": "We could try again.", "rightId": 8 }
            },
            {
              "left": { "word": "Elle aimerait visiter la France.", "rightId": 5 },
              "right": { "word": "Could you help me?", "rightId": 9 }
            },
            {
              "left": { "word": "J’achèterais une voiture.", "rightId": 6 },
              "right": { "word": "He would eat less sugar.", "rightId": 10 }
            },
            {
              "left": { "word": "Ils voudraient partir tôt.", "rightId": 7 },
              "right": { "word": "He would like to come.", "rightId": 2 }
            },
            {
              "left": { "word": "On pourrait essayer encore.", "rightId": 8 },
              "right": { "word": "I would like a coffee.", "rightId": 1 }
            },
            {
              "left": { "word": "Pourriez-vous m'aider ?", "rightId": 9 },
              "right": { "word": "They would like to leave early.", "rightId": 7 }
            },
            {
              "left": { "word": "Il mangerait moins de sucre.", "rightId": 10 },
              "right": { "word": "I would buy a car.", "rightId": 6 }
            }
          ],
        },
  
      ],
    },
]