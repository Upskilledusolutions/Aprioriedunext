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
          correctAnswer: 2,
        },
        {
          question: "What does 'salut' mean?",
          choices: ['farewell', 'hi', 'see you!', 'good morning'],
          type: 'MCQs',
          correctAnswer: 2,
        },
        {
          question: "TWhat's the French for 'good evening, sir'?",
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
          question: "What does 'est-ce que vous allez bien?' mean?",
          choices: ["what is it that you are?", 'where are you going?', "what is it that you are?", "how are you doing?"],
          type: 'MCQs',
          correctAnswer: 1,
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
            choices: ['de rien', 'excusez-moi', "s'il vous plait", 'bienvenu'],
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
              choices: ["lis", "mange", "a", "Monsieur"],
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
              question: "Bella: Je m'appelle Anne, ______ ? (My name is Anne, and you?)",
              choices: ["et vous", "faisons", "allons", "avons"],
              type: 'FillInTheBlanks',
              correctAnswer: 1
            },
            {
              question: "Laurent: ______ Pierre. (My name is Pierre.)",
              choices: ["Je m'appelle", "mangent", "lisent", "sont"],
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
              question: "Bella: Je suis ______ . (I am a French teacher.)",
              choices: ["professeure de français", "faites", "lisez", "mangez"],
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
                question: "Laurent: J'adore ______. (I love coffee.)",
                choices: ["le café", "faites", "lisez", "mangez"],
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
                question: "Laurent: J'habite ______ Paris. (I live in Paris.)",
                choices: ["à", "dans", "sur", "chez"],
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
                question: "Bella: Vous aimez ______ ? (Do you like France?)",
                choices: ["la France", "le café", "la ville", "la nourriture"],
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
              "right": { "word": "À demoin!", "rightId": 9 }
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
          question: "What is the French word for the letter 'F'?",
          choices: ['É', 'Effe', 'Té', 'Pé'],
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
          question: "What is the French word for the letter 'M'?",
          choices: ['Émme', 'Em', 'Am', 'Emme'],
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
          question: "What is the French word for the letter L?",
          choices: ['El', 'Élle', 'Elle', 'Éle'],
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
          question: "How do you say the letter 'Y' in French?",
          choices: ['I', 'Y', 'I grec', 'I lat'],
          type: 'MCQs',
          correctAnswer: 3,
        },
        {
          question: "What is the French word for the number 'nine'?",
          choices: ['Neuf', 'Huit', 'Sept', 'Cinq'],
          type: 'MCQs',
          correctAnswer: 1,
        },
        {
          question: "How do you say the letter 'Q' in French?",
          choices: ['Ku', 'Ké', 'Qu', 'Ké'],
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
          choices: ['Hache', 'Ach', 'H', 'Hech'],
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
          question: "What is the French word for the letter 'T'?",
          choices: ['Té', 'Te', 'T', 'Tee'],
          type: 'MCQs',
          correctAnswer: 1,
        },
        {
          question: "How do you say the number 'seventeen' in French?",
          choices: ['Quinze', 'Seize', 'Dix-sept', 'Dix-huit'],
          type: 'MCQs',
          correctAnswer: 2,
        },
       
        {
          "question": "The letter 'B' in French is called ______.",
          "choices": ["Bé", "Dé", "Cinq", "El"],
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
          "question": "The letter 'D' in French is called ______.",
          "choices": ["Dé", "Bé", "El", "Gé"],
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
          "question": "The letter 'R' in French is pronounced as ______.",
          "choices": ["Ér", "Gé", "Bé", "Dé"],
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
          "question": "The letter 'V' in French is pronounced as ______.",
          "choices": ["Vé", "Dé", "Ér", "Gé"],
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
          "question": "The letter 'G' in French is pronounced as ______.",
          "choices": ["Gé", "Vé", "Bé", "Dé"],
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
          "question": "The letter 'Y' in French is called ______.",
          "choices": ["Y grec", "El", "Ér", "Dé"],
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
          "question": "The letter 'L' in French is ______.",
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
          "question": "The letter 'W' in French is pronounced as ______.",
          "choices": ["Double vé", "Gé", "Dé", "Bé"],
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
]