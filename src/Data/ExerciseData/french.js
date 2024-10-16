export const quiz = [
    {
      quiz: '1',
      name: 'French Exercise - 1',
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
      name: 'French Exercise - 2',
      level: 'Easy',
      topic: 'Mixed',
      questions: [

        {
          question: 'What is the French word for the number "three"?',
          choices: ['Un', 'Trois', 'Deux', 'Quatre'],
          type: 'MCQs',
          correctAnswer: 2,
        },
        {
          question: "How do you say the number 'seven' in French?",
          choices: ['Huit', 'Sept', 'Neuf', 'Dix'],
          type: 'MCQs',
          correctAnswer: 2,
        },
        {
          question: "What is the French letter for the pronunciation 'Effe'?",
          choices: ['M', 'F', 'T', 'P'],
          type: 'MCQs',
          correctAnswer: 2,
        },
        {
          question: "How do you say the number 'twelve' in French?",
          choices: ['Douze', 'Onze', 'Dix', 'Vingt'],
          type: 'MCQs',
          correctAnswer: 1,
        },
        {
          question: "What is the letter for the French pronunciation 'Emme'?",
          choices: ['N', 'R', 'D', 'M'],
          type: 'MCQs',
          correctAnswer: 4,
        },
        {
          question: "How do you say the number 'eighteen' in French?",
          choices: ['Dix-sept', 'Dix-huit', 'Vingt', 'Quinze'],
          type: 'MCQs',
          correctAnswer: 2,
        },
        {
          question: "What is the letter for the French pronunciation 'El'?",
          choices: ['L', 'K', 'F', 'U'],
          type: 'MCQs',
          correctAnswer: 1,
        },
        {
          question: "How do you say the number 'fourteen' in French?",
          choices: ['Quatorze', 'Quinze', 'Seize', 'Vingt'],
          type: 'MCQs',
          correctAnswer: 1,
        },
        {
          question: "What is the French word for the number 'six'?",
          choices: ['Cinq', 'Six', 'Sept', 'Huit'],
          type: 'MCQs',
          correctAnswer: 2,
        },
        {
          question: "How do you say the letter 'H' in French?",
          choices: ['Hache', 'Ach', 'H', 'Hechy'],
          type: 'MCQs',
          correctAnswer: 2,
        },
        {
          question: "What is the French word for the number 'nine'?",
          choices: ['Neuf', 'Huit', 'Sept', 'Cinq'],
          type: 'MCQs',
          correctAnswer: 1,
        },
        {
          question: "How do you say the letter 'Q' in French?",
          choices: ['Ku', 'Ké', 'Qu', 'Ki'],
          type: 'MCQs',
          correctAnswer: 2,
        },
        {
          question: "What is the French word for the number 'fifteen'?",
          choices: ['Quatorze', 'Quinze', 'Seize', 'Dix-huit'],
          type: 'MCQs',
          correctAnswer: 2,
        },
        {
          question: "How do you say the letter 'H' in French?",
          choices: ['Hache', 'Ach', 'H', 'Hechy'],
          type: 'MCQs',
          correctAnswer: 2,
        },
        {
          question: "What is the French word for the letter 'Z'?",
          choices: ['Zé', 'Z', 'Éd', 'Cé'],
          type: 'MCQs',
          correctAnswer: 2,
        },
        {
          question: "How do you say the number 'twenty' in French?",
          choices: ['Dix-neuf', 'Vingt', 'Vingt-et-un', 'Vingt-deux'],
          type: 'MCQs',
          correctAnswer: 2,
        },
        {
          question: "What is the French word for the number 'nine'?",
          choices: ['Huit', 'Sept', 'Neuf', 'Dix'],
          type: 'MCQs',
          correctAnswer: 3,
        },
        {
          question: "How do you say the number 'six' in French?",
          choices: ['Sept', 'Cinq', 'Six', 'Quatre'],
          type: 'MCQs',
          correctAnswer: 3,
        },
        {
          question: "What is the French letter for the pronunciation 'Té'?",
          choices: ['H', 'T', 'P', 'O'],
          type: 'MCQs',
          correctAnswer: 2,
        },
        {
          question: "How do you say the number 'seventeen' in French?",
          choices: ['Quinze', 'Seize', 'Dix-sept', 'Dix-huit'],
          type: 'MCQs',
          correctAnswer: 3,
        },
       
        {
          "question": "'Bé' is the French letter for ______.",
          "choices": ["B", "Dé", "Cinq", "El"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "The number 4 in French is ______.",
          "choices": ["Quatre", "Cinq", "Six", "Trois"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "'Dé' is the French letter for ______.",
          "choices": ["D", "Bé", "El", "Gé"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "The number 6 in French is ______.",
          "choices": ["Six", "Quatre", "Huit", "Dix"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "'Ér' is the French pronunciation for English letter ______.",
          "choices": ["R", "Gé", "Bé", "Dé"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "The number 8 in French is ______.",
          "choices": ["Huit", "Six", "Dix", "Quatorze"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "The pronunciation 'Vé' in French is the letter ______ in English.",
          "choices": ["V", "Dé", "Ér", "Gé"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "The number 10 in French is ______.",
          "choices": ["Dix", "Onze", "Huit", "Vingt"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "The pronunciation 'Gé' in French is the letter ______ in English.",
          "choices": ["G", "Vé", "Bé", "Dé"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "The number 5 in French is ______.",
          "choices": ["Cinq", "Six", "Huit", "Quatre"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "The number 9 in French is ______.",
          "choices": ["neuf", "Dix", "Quatre", "Quatorze"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "The number 3 in French is ______.",
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
          "question": "The letter 'L' in French is pronounced as ______.",
          "choices": ["El", "Bé", "Dé", "Ér"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "The number 11 in French is ______.",
          "choices": ["Onze", "Dix", "Quatre", "Quatorze"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "The letter 'K' in French is called ______.",
          "choices": ["Ka", "Bé", "Gé", "Dé"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "The number 14 in French is ______.",
          "choices": ["Quatorze", "Onze", "Vingt", "Six"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "The pronunciation 'Double vé' in French is for the letter ______.",
          "choices": ["W", "Gé", "Dé", "Bé"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "The number 20 in French is ______.",
          "choices": ["Vingt", "Dix", "Quinze", "Trois"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "The letter 'N' in French is pronounced as ______.",
          "choices": ["En", "Ér", "El", "Dé"],
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
              "right": { "word": "F", "rightId": 3 }
            },
            {
              "left": { "word": "EFFE", "rightId": 3 },
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
              "left": { "word": "HACHE", "rightId": 6 },
              "right": { "word": "SEVEN", "rightId": 7 }
            },
            {
              "left": { "word": "SEPT", "rightId": 7 },
              "right": { "word": "FOURTEEN", "rightId": 5 }
            },
            {
              "left": { "word": "QUINZE", "rightId": 8 },
              "right": { "word": "H", "rightId": 6 }
            },
            {
              "left": { "word": "ÉLÉ", "rightId": 9 },
              "right": { "word": "NINE", "rightId": 10 }
            },
            {
              "left": { "word": "NEUF", "rightId": 10 },
              "right": { "word": "L", "rightId": 9 }
            }
          ],
        },
  
      ],
    },
    {
      quiz: '3',
      name: 'French Exercise - 3',
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
          "question": "What does \"vingt-cinq\" translate to in English?",
          "choices": ["15", "50", "25", "75"],
          "type": "MCQs",
          "correctAnswer": 3
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
          "question": "What is \"eighty-five\" in French?",
          "choices": ["Quatre-vingt-quinze", "Quatre-vingt-cinq", "Soixante-cinq", "Quatre-vingt-trois"],
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
          "question": "What does \"quatre-vingt-dix-neuf\" translate to?",
          "choices": ["79", "89", "99", "109"],
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
          "question": "Which of these words means \"to swim\" in French?",
          "choices": ["Nager", "Courir", "Voler", "Chanter"],
          "type": "MCQs",
          "correctAnswer": 1
        },
       
        {
          "question": "Je ______ (to be) heureux aujourd'hui.",
          "choices": ["suis", "es", "est", "sommes"],
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
          "question": "Nous ______ (to eat) des crêpes pour le petit déjeuner.",
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
          "question": "Ils vont ______ (to go) au cinéma ce soir.",
          "choices": ["aller", "venir", "partir", "rester"],
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
          "question": "Je ______ (to have) un examen demain.",
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
          "question": "Nous ______ (to read) un livre intéressant.",
          "choices": ["lisons", "lisez", "lit", "lire"],
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
          "question": "Vous ______ (to speak) français très bien.",
          "choices": ["parlez", "parle", "parlons", "parles"],
          "type": "FillInTheBlanks",
          "correctAnswer": 1
        },
        {
          "question": "La ______ (dog) de Marie est très amicale.",
          "choices": ["chienne", "chien", "animal", "bête"],
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
      name: 'French Exercise - 4',
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
          "question": "What is the correct conjugation of the verb 'manger' (to eat) for 'nous'?",
          "choices": ["mange", "mangeons", "mangent", "manges"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What is the correct conjugation of the verb 'parler' (to speak) for 'ils'?",
          "choices": ["parlons", "Parlez", "Parlent", "Parles"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "What is the present tense of the verb 'aller' (to go) for 'vous'?",
          "choices": ["allez", "allons", "vont", "vas"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What is the form of the verb 'finir' (to finish) for 'je'?",
          "choices": ["finis", "finit", "finissons", "finissez"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What is the correct conjugation of the verb 'prendre' (to take) for 'elle'?",
          "choices": ["prend", "prenons", "prenez", "prennent"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What is the present tense of the verb 'voir' (to see) for 'nous'?",
          "choices": ["Voyons", "Voit", "Vois", "Voient"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What pronoun is used for 'they' (masculine) in French?",
          "choices": ["Ils (féminin)", "Ils (masculin)", "Vous", "Nous"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What pronoun is used for 'we' (feminine)?",
          "choices": ["Ils (masculin)", "Nous (féminin)", "Elles (féminin)", "Vous"],
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
          "choices": ["Vous (formel)", "Tu (informel)", "Il", "Elle"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What pronoun is used for 'they' (feminine)?",
          "choices": ["Elles (féminin)", "Ils (masculin)", "Vous (formel)", "Nous"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What pronoun is used for 'you all' (formal)?",
          "choices": ["Tu (informel)", "Vous tous (formel)", "Elles (féminin)", "Nous"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What pronoun is used for 'we' (masculine)?",
          "choices": ["Ils (masculin)", "Nous (masculin)", "Elles (féminin)", "Vous tous (formel)"],
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
          "choices": ["Tu (informel)", "Vous (formel)", "Il", "Nous"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What pronoun is used for 'she'?",
          "choices": ["Elle", "Il", "Vous (informel)", "Nous"],
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
              "left": { "word": "Nous (féminin)", "rightId": 2 },
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
              "left": { "word": "Vous (pluriel)", "rightId": 8 },
              "right": { "word": "You all (formal)", "rightId": 8 }
            },
            {
              "left": { "word": "Elle", "rightId": 9 },
              "right": { "word": "Mother", "rightId": 1 }
            },
            {
              "left": { "word": "Vous (singulier)", "rightId": 10 },
              "right": { "word": "Sister", "rightId": 5 }
            }
          ],
        },
  
      ],
    },
    {
      quiz: '5',
      name: 'French Exercise - 5',
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
      name: 'French Exercise - 6',
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
      name: 'French Exercise - 7',
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
      name: 'French Exercise - 8',
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
      name: 'French Exercise - 9',
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
      name: 'French Exercise - 10',
      level: 'Intermediate',
      topic: 'Mixed',
      questions: [
        {
          "question": "Where should the adverb be placed in this sentence: 'Je (mange) (souvent) du pain'?",
          "choices": ["Before 'je'", "After 'je'", "After 'mange'", "Before 'mange'"],
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
    "question": "In compound tenses, where should the adverb be placed in this sentence: 'Elle a (mangé) du chocolat'?",
    "choices": ["After 'a'", "After 'mangé'", "Before 'mangé'", "Before 'a'"],
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
  "question": "Where should the adverb 'bien' be placed in this sentence: 'Ils (parlent) (bien) anglais'?",
  "choices": ["After 'ils'", "Before 'parlent'", "After 'parlent'", "Before 'anglais'"],
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
      name: 'French Exercise - 11',
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
      name: 'French Exercise - 12',
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
          "question": "If someone asks you \"Comment puis-je aller au musée ?\", which of the following is a correct response?",
          "choices": ["Tournez à droite et prenez la première à gauche", "Tournez à gauche après l’hôtel", "Traversez la rue et prenez la deuxième à droite", "Continuez tout droit, puis tournez à droite"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What does \"Est-ce loin d’ici ?\" mean?",
          "choices": ["Is it near here?", "Is it far from here?", "What is the distance from here?", "Where is it?"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Which of the following sentences means \"The park is next to the school\"?",
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
          "question": "Which sentence is the correct response to \"Où est la gare ?\" (Where is the station)?",
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
      name: 'French Exercise - 13',
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
      name: 'French Exercise - 14',
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
      name: 'French Exercise - 15',
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
]