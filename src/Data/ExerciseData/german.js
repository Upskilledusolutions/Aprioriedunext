export const quiz = [
  {
    quiz: '1',
    name: 'German Exercise - 1',
    level: 'Easy',
    topic: 'Mixed',
    questions: [
      // 20 MCQs
      {
        question: "What is the German word for 'friend'?",
        choices: ['Freund', 'Familie', 'Arbeiter', 'Kollege'],
        type: 'MCQs',
        correctAnswer: 1
      },
      {
        question: "How do you say 'I am hungry' in German?",
        choices: ['Ich bin müde', 'Ich habe Hunger', 'Ich habe Durst', 'Ich bin voll'],
        type: 'MCQs',
        correctAnswer: 2
      },
      {
        question: "What does 'Sprechen Sie Englisch?' mean?",
        choices: ['Do you speak English?', 'Where are you?', 'How are you?', 'What time is it?'],
        type: 'MCQs',
        correctAnswer: 1
      },
      {
        question: "How would you say 'Excuse me' in German?",
        choices: ['Entschuldigung', 'Danke', 'Bitte', 'Guten Tag'],
        type: 'MCQs',
        correctAnswer: 1
      },
      {
        question: "What does 'Ich verstehe nicht' mean?",
        choices: ['I don’t understand', 'I am tired', 'I am fine', 'I am lost'],
        type: 'MCQs',
        correctAnswer: 1
      },
      {
        question: "How do you say 'goodbye' in German?",
        choices: ['Guten Abend', 'Gute Nacht', 'Tschüss', 'Guten Morgen'],
        type: 'MCQs',
        correctAnswer: 3
      },
      {
        question: "What does 'Wie viel kostet das?' mean?",
        choices: ['How much does it cost?', 'Where is it?', 'How are you?', 'What time is it?'],
        type: 'MCQs',
        correctAnswer: 1
      },
      {
        question: "How do you say 'I would like' in German?",
        choices: ['Ich möchte', 'Ich liebe', 'Ich brauche', 'Ich kann'],
        type: 'MCQs',
        correctAnswer: 1
      },
      {
        question: "What is the German word for 'house'?",
        choices: ['Haus', 'Auto', 'Stuhl', 'Buch'],
        type: 'MCQs',
        correctAnswer: 1
      },
      {
        question: "Which of the following means 'good afternoon' in German?",
        choices: ['Guten Abend', 'Guten Morgen', 'Guten Tag', 'Gute Nacht'],
        type: 'MCQs',
        correctAnswer: 3
      },
      {
        question: "How do you say 'I am lost' in German?",
        choices: ['Ich bin müde', 'Ich bin verloren', 'Ich bin hungrig', 'Ich bin krank'],
        type: 'MCQs',
        correctAnswer: 2
      },
      {
        question: "What does 'Wie geht es Ihnen?' mean?",
        choices: ['How are you?', 'Where are you?', 'What is it?', 'What time is it?'],
        type: 'MCQs',
        correctAnswer: 1
      },
      {
        question: "How do you say 'please' in German?",
        choices: ['Bitte', 'Entschuldigung', 'Danke', 'Hallo'],
        type: 'MCQs',
        correctAnswer: 1
      },
      {
        question: "What is the German word for 'book'?",
        choices: ['Buch', 'Haus', 'Stuhl', 'Auto'],
        type: 'MCQs',
        correctAnswer: 1
      },
      {
        question: "How do you say 'see you soon' in German?",
        choices: ['Bis bald', 'Gute Nacht', 'Guten Morgen', 'Guten Abend'],
        type: 'MCQs',
        correctAnswer: 1
      },
      {
        question: "What does 'Ich hätte gerne' mean?",
        choices: ['I would like', 'I need', 'I am happy', 'I am sad'],
        type: 'MCQs',
        correctAnswer: 1
      },
      {
        question: "How do you say 'I don’t know' in German?",
        choices: ['Ich weiß nicht', 'Ich verstehe', 'Ich habe', 'Ich will'],
        type: 'MCQs',
        correctAnswer: 1
      },
      {
        question: "What does 'Könnten Sie das bitte wiederholen?' mean?",
        choices: ['Could you please repeat that?', 'Where are you?', 'How much is this?', 'Can I help you?'],
        type: 'MCQs',
        correctAnswer: 1
      },
      {
        question: "How would you say 'goodbye' formally in German?",
        choices: ['Tschüss', 'Auf Wiedersehen', 'Guten Tag', 'Bis bald'],
        type: 'MCQs',
        correctAnswer: 2
      },
      {
        question: "What is the German word for 'apple'?",
        choices: ['Apfel', 'Banane', 'Orange', 'Traube'],
        type: 'MCQs',
        correctAnswer: 1
      },

      // 20 Fill in the Blanks
      {
        question: "Wir ______ Kaffee. (We drink coffee.)",
        choices: ['trinken', 'essen', 'lesen', 'schlafen'],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Er ______ ein Auto. (He has a car.)",
        choices: ['hat', 'geht', 'trinkt', 'liest'],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Du ______ Englisch. (You speak English.)",
        choices: ['sprichst', 'isst', 'gehst', 'liest'],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Wir ______ in Berlin. (We live in Berlin.)",
        choices: ['wohnen', 'gehen', 'sehen', 'essen'],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Ich ______ eine E-Mail. (I write an email.)",
        choices: ['schreibe', 'lese', 'höre', 'trinke'],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Sie ______ eine Tasse Tee. (She drinks a cup of tea.)",
        choices: ['trinkt', 'schreibt', 'geht', 'schläft'],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Er ______ im Park. (He walks in the park.)",
        choices: ['geht', 'trinkt', 'isst', 'schläft'],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Wir ______ Musik. (We listen to music.)",
        choices: ['hören', 'lesen', 'essen', 'sehen'],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Ich ______ gerne Filme. (I like watching movies.)",
        choices: ['sehe', 'höre', 'lese', 'esse'],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Sie ______ einen Apfel. (She eats an apple.)",
        choices: ['isst', 'geht', 'trinkt', 'liest'],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Er ______ in der Bibliothek. (He studies in the library.)",
        choices: ['lernt', 'geht', 'trinkt', 'isst'],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Ich ______ eine Tasse Kaffee. (I drink a cup of coffee.)",
        choices: ['trinke', 'schreibe', 'lese', 'höre'],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Sie ______ in einem Restaurant. (They eat in a restaurant.)",
        choices: ['essen', 'gehen', 'sehen', 'schreiben'],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Er ______ ein Geschenk. (He buys a gift.)",
        choices: ['kauft', 'schreibt', 'liest', 'trinkt'],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Wir ______ einen Film. (We watch a movie.)",
        choices: ['sehen', 'lesen', 'essen', 'trinken'],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Ich ______ auf der Couch. (I sit on the couch.)",
        choices: ['sitze', 'liege', 'gehe', 'schreibe'],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Er ______ einen Hund. (He has a dog.)",
        choices: ['hat', 'geht', 'trinkt', 'liest'],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Wir ______ am Wochenende. (We relax on the weekend.)",
        choices: ['entspannen', 'lesen', 'sehen', 'essen'],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Sie ______ einen Film im Kino. (They watch a movie in the cinema.)",
        choices: ['sehen', 'essen', 'trinken', 'schreiben'],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Ich ______ einen Brief. (I write a letter.)",
        choices: ['schreibe', 'sehe', 'höre', 'lese'],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
  "question": "Ordne die Singular- und Pluralwörter zu.",
  "type": "MatchTheFollowing",
  "pairs": [
    {
      "left": { "word": "Hund", "rightId": 1 },
      "right": { "word": "Mäuse", "rightId": 4 }
    },
    {
      "left": { "word": "Katze", "rightId": 2 },
      "right": { "word": "Häuser", "rightId": 3 }
    },
    {
      "left": { "word": "Haus", "rightId": 3 },
      "right": { "word": "Autos", "rightId": 5 }
    },
    {
      "left": { "word": "Maus", "rightId": 4 },
      "right": { "word": "Hunde", "rightId": 1 }
    },
    {
      "left": { "word": "Auto", "rightId": 5 },
      "right": { "word": "Katzen", "rightId": 2 }
    },
    {
      "left": { "word": "Baum", "rightId": 6 },
      "right": { "word": "Kinder", "rightId": 8 }
    },
    {
      "left": { "word": "Blume", "rightId": 7 },
      "right": { "word": "Stühle", "rightId": 10 }
    },
    {
      "left": { "word": "Kind", "rightId": 8 },
      "right": { "word": "Bäume", "rightId": 6 }
    },
    {
      "left": { "word": "Tisch", "rightId": 9 },
      "right": { "word": "Blumen", "rightId": 7 }
    },
    {
      "left": { "word": "Stuhl", "rightId": 10 },
      "right": { "word": "Tische", "rightId": 9 }
    }
  ]
}

    ]
  },
  {
    quiz: '2',
    name: 'German Exercise - 2',
    level: 'Easy',
    topic: 'Mixed',
    questions: [
      // 20 MCQs
      {
        question: "What is the German word for 'friend'?",
        choices: ['Freund', 'Familie', 'Arbeiter', 'Kollege'],
        type: 'MCQs',
        correctAnswer: 1
      },
      {
        question: "How do you say 'I am hungry' in German?",
        choices: ['Ich bin müde', 'Ich habe Hunger', 'Ich habe Durst', 'Ich bin voll'],
        type: 'MCQs',
        correctAnswer: 2
      },
      {
        question: "What does 'Sprechen Sie Englisch?' mean?",
        choices: ['Do you speak English?', 'Where are you?', 'How are you?', 'What time is it?'],
        type: 'MCQs',
        correctAnswer: 1
      },
      {
        question: "How would you say 'Excuse me' in German?",
        choices: ['Entschuldigung', 'Danke', 'Bitte', 'Guten Tag'],
        type: 'MCQs',
        correctAnswer: 1
      },
      {
        question: "What does 'Ich verstehe nicht' mean?",
        choices: ['I don’t understand', 'I am tired', 'I am fine', 'I am lost'],
        type: 'MCQs',
        correctAnswer: 1
      },
      {
        question: "How do you say 'goodbye' in German?",
        choices: ['Guten Abend', 'Gute Nacht', 'Tschüss', 'Guten Morgen'],
        type: 'MCQs',
        correctAnswer: 3
      },
      {
        question: "What does 'Wie viel kostet das?' mean?",
        choices: ['How much does it cost?', 'Where is it?', 'How are you?', 'What time is it?'],
        type: 'MCQs',
        correctAnswer: 1
      },
      {
        question: "How do you say 'I would like' in German?",
        choices: ['Ich möchte', 'Ich liebe', 'Ich brauche', 'Ich kann'],
        type: 'MCQs',
        correctAnswer: 1
      },
      {
        question: "What is the German word for 'house'?",
        choices: ['Haus', 'Auto', 'Stuhl', 'Buch'],
        type: 'MCQs',
        correctAnswer: 1
      },
      {
        question: "Which of the following means 'good afternoon' in German?",
        choices: ['Guten Abend', 'Guten Morgen', 'Guten Tag', 'Gute Nacht'],
        type: 'MCQs',
        correctAnswer: 3
      },
      {
        question: "How do you say 'I am lost' in German?",
        choices: ['Ich bin müde', 'Ich bin verloren', 'Ich bin hungrig', 'Ich bin krank'],
        type: 'MCQs',
        correctAnswer: 2
      },
      {
        question: "What does 'Wie geht es Ihnen?' mean?",
        choices: ['How are you?', 'Where are you?', 'What is it?', 'What time is it?'],
        type: 'MCQs',
        correctAnswer: 1
      },
      {
        question: "How do you say 'please' in German?",
        choices: ['Bitte', 'Entschuldigung', 'Danke', 'Hallo'],
        type: 'MCQs',
        correctAnswer: 1
      },
      {
        question: "What is the German word for 'book'?",
        choices: ['Buch', 'Haus', 'Stuhl', 'Auto'],
        type: 'MCQs',
        correctAnswer: 1
      },
      {
        question: "How do you say 'see you soon' in German?",
        choices: ['Bis bald', 'Gute Nacht', 'Guten Morgen', 'Guten Abend'],
        type: 'MCQs',
        correctAnswer: 1
      },
      {
        question: "What does 'Ich hätte gerne' mean?",
        choices: ['I would like', 'I need', 'I am happy', 'I am sad'],
        type: 'MCQs',
        correctAnswer: 1
      },
      {
        question: "How do you say 'I don’t know' in German?",
        choices: ['Ich weiß nicht', 'Ich verstehe', 'Ich habe', 'Ich will'],
        type: 'MCQs',
        correctAnswer: 1
      },
      {
        question: "What does 'Könnten Sie das bitte wiederholen?' mean?",
        choices: ['Could you please repeat that?', 'Where are you?', 'How much is this?', 'Can I help you?'],
        type: 'MCQs',
        correctAnswer: 1
      },
      {
        question: "How would you say 'goodbye' formally in German?",
        choices: ['Tschüss', 'Auf Wiedersehen', 'Guten Tag', 'Bis bald'],
        type: 'MCQs',
        correctAnswer: 2
      },
      {
        question: "What is the German word for 'apple'?",
        choices: ['Apfel', 'Banane', 'Orange', 'Traube'],
        type: 'MCQs',
        correctAnswer: 1
      },

      // 20 Fill in the Blanks
      {
        "question": "The letter 'J' in German is called ______.",
        "choices": ["Jott", "Ka", "El", "En"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The number 7 in German is ______.",
        "choices": ["Sieben", "Sieeben", "Neun", "Drei"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The letter 'K' in German is called ______.",
        "choices": ["Ka", "Jott", "Te", "O"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The number 9 in German is ______.",
        "choices": ["Neun", "Sechzehn", "Neeun", "Zwanzig"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The letter 'L' in German is pronounced as ______.",
        "choices": ["El", "En", "Ef", "Te"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The number 1 in German is ______.",
        "choices": ["Eins", "Sieben", "Drei", "Elf"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The letter 'N' in German is called ______.",
        "choices": ["En", "Ef", "Er", "Te"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The number 3 in German is ______.",
        "choices": ["Drei", "Sechzehn", "e", "Vier"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The letter 'O' in German is called ______.",
        "choices": ["O", "Jott", "Te", "El"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The number 20 in German is ______.",
        "choices": ["Zwanzig", "e", "Dreizehn", "Elf"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The letter 'R' in German is pronounced as ______.",
        "choices": ["Er", "Ef", "Te", "O"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The number 4 in German is ______.",
        "choices": ["Vier", "Neun", "Dreizehn", "Sechzehn"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The letter 'S' in German is called ______.",
        "choices": ["Es", "Er", "Ef", "O"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The number 11 in German is ______.",
        "choices": ["Elf", "Sechzehn", "Neun", "Vier"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The letter 'T' in German is pronounced as ______.",
        "choices": ["Te", "Ef", "En", "Er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The letter 'Q' in German is called ______.",
        "choices": ["Ku", "Te", "Jott", "Er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The number 13 in German is ______.",
        "choices": ["Dreizehn", "Vier", "Eins", "Zwanzig"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The letter 'E' in German is pronounced as ______.",
        "choices": ["E", "Ef", "Te", "Es"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The number 16 in German is ______.",
        "choices": ["Sechzehn", "Drei", "Neun", "Elf"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The letter 'F' in German is called ______.",
        "choices": ["Ef", "Er", "Te", "Es"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
  "question": "Ordne die Singular- und Pluralwörter zu.",
  "type": "MatchTheFollowing",
  "pairs": [
    {
      "left": { "word": "ZWÖLF", "rightId": 1 },
      "right": { "word": "NINE", "rightId": 5 }
    },
    {
      "left": { "word": "DREI", "rightId": 2 },
      "right": { "word": "FIVE", "rightId": 4 }
    },
    {
      "left": { "word": "SIEBEN", "rightId": 3 },
      "right": { "word": "SEVEN", "rightId": 3 }
    },
    {
      "left": { "word": "FÜNF", "rightId": 4 },
      "right": { "word": "THREE", "rightId": 2 }
    },
    {
      "left": { "word": "NEUN", "rightId": 5 },
      "right": { "word": "TWELVE", "rightId": 1 }
    },
    {
      "left": { "word": "VIER", "rightId": 6 },
      "right": { "word": "EIGHT", "rightId": 7 }
    },
    {
      "left": { "word": "ACHT", "rightId": 7 },
      "right": { "word": "TWO", "rightId": 8 }
    },
    {
      "left": { "word": "ZWEI", "rightId": 8 },
      "right": { "word": "TEN", "rightId": 9 }
    },
    {
      "left": { "word": "ZEHN", "rightId": 9 },
      "right": { "word": "NINETEEN", "rightId": 10 }
    },
    {
      "left": { "word": "NEUNZEHN", "rightId": 10 },
      "right": { "word": "FOUR", "rightId": 6 }
    }
  ]
}

    ]
  },
  {
    quiz: '3',
    name: 'German Exercise - 3',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      // 20 MCQs
      {
        "question": "What is the German word for \"school\"?",
        "choices": ["Haus", "Schule", "Bibliothek", "Büro"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What does \"fünf\" mean in English?",
        "choices": ["Five", "Six", "Seven", "Eight"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which color is “gelb” in English?",
        "choices": ["Green", "Yellow", "Blue", "Black"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the German word for \"friend\"?",
        "choices": ["Feind", "Freund", "Begleiter", "Lehrer"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What does \"dreißig\" mean in English?",
        "choices": ["Twenty", "Thirty", "Forty", "Fifty"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which of the following means \"to write\" in German?",
        "choices": ["Lesen", "Schreiben", "Sprechen", "Spielen"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the meaning of \"traurig\"?",
        "choices": ["Happy", "Sad", "Angry", "Excited"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is \"sechzig\" in English?",
        "choices": ["Sixty", "Seventy", "Eighty", "Ninety"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which word means \"food\" in German?",
        "choices": ["Wasser", "Essen", "Suppe", "Obst"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What does \"willkommen\" mean?",
        "choices": ["Goodbye", "Welcome", "Thank you", "Please"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the German word for \"family\"?",
        "choices": ["Haus", "Familie", "Gruppe", "Gemeinschaft"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What does \"acht\" mean in English?",
        "choices": ["Six", "Eight", "Ten", "Twelve"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which of the following means \"to listen\" in German?",
        "choices": ["Sehen", "Hören", "Sprechen", "Spielen"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the meaning of \"glücklich\"?",
        "choices": ["Happy", "Busy", "Tired", "Sad"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What does \"schnee\" mean in English?",
        "choices": ["Snow", "Rain", "Wind", "Sun"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which word means \"city\" in German?",
        "choices": ["Dorf", "Stadt", "Land", "Gemeinde"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is \"fünfzehn\" in English?",
        "choices": ["Twelve", "Thirteen", "Fourteen", "Fifteen"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "What does \"waschen\" mean?",
        "choices": ["To cook", "To clean", "To dance", "To run"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the German word for \"teacher\"?",
        "choices": ["Schüler", "Lehrer", "Freund", "Autor"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What does \"gesundheit\" mean?",
        "choices": ["Health", "Love", "Happiness", "Money"],
        "type": "MCQs",
        "correctAnswer": 1
      },

      // 20 Fill in the Blanks
      {
        "question": "Der Himmel ist ______ (gray) heute.",
        "choices": ["grau", "blau", "schwarz", "weiß"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ich habe ______ (three) Katzen.",
        "choices": ["drei", "zwei", "e", "vier"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ich gehe zum Laden, um ______ (to buy) Brot.",
        "choices": ["kaufen", "essen", "trinken", "sehen"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Meine Lieblingsfarbe ist ______ (yellow).",
        "choices": ["blau", "e", "gelb", "grün"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Die Kinder ______ (to play) im Park.",
        "choices": ["spielen", "singen", "tanzen", "essen"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Du hast ______ (four) Bücher in deiner Tasche.",
        "choices": ["vier", "e", "fünf", "sechs"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ich liebe es, ______ (to dance).",
        "choices": ["zu tanzen", "zu singen", "zu spielen", "zu lernen"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Die ______ (color) ihres Kleides ist rosa.",
        "choices": ["Farbe", "Schuhe", "Tasche", "Hut"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Wo ist mein ______ (phone)?",
        "choices": ["Telefon", "Buch", "Tisch", "Stuhl"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ich werde einen Film ______ (to watch) heute Abend.",
        "choices": ["ansehen", "lesen", "essen", "spielen"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Der Zug fährt um ______ (five) Uhr nachmittags ab.",
        "choices": ["fünf", "e", "sechs", "drei"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Meine Freunde sind sehr ______ (funny).",
        "choices": ["lustig", "traurig", "langweilig", "ernst"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Das Obst, das ich am meisten mag, ist die ______ (banana).",
        "choices": ["Banane", "Apfel", "Orange", "Traube"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ich muss für die Prüfung ______ (to study).",
        "choices": ["lernen", "spielen", "essen", "trinken"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Das Haus hat ______ (ten) Fenster.",
        "choices": ["zehn", "neun", "e", "elf"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ich fühle mich ______ (tired) nach der Arbeit.",
        "choices": ["müde", "wach", "aktiv", "fit"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Das ______ (weather) ist im Frühling sehr angenehm.",
        "choices": ["Wetter", "Jahr", "Tag", "Monat"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Das Buch liegt auf dem ______ (table).",
        "choices": ["Tisch", "Stuhl", "Boden", "Regal"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Meine Schwester ist ______ (eight) Jahre alt.",
        "choices": ["acht", "sieben", "e", "neun"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Es ist wichtig, ______ (to rest) nach dem Sport.",
        "choices": ["sich auszuruhen", "zu lernen", "zu spielen", "zu essen"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
  "question": "Ordne die Singular- und Pluralwörter zu.",
  "type": "MatchTheFollowing",
"pairs": [
    {
      "left": { "word": "GUTEN MORGEN", "rightId": 1 },
      "right": { "word": "HEALTH", "rightId": 10 }

    },
    {
      "left": { "word": "BITTE", "rightId": 2 },
      "right": { "word": "THANK YOU", "rightId": 2 }

    },
    {
      "left": { "word": "BLAU", "rightId": 3 },
      "right": { "word": "CAT", "rightId": 5 }
      
    },
    {
      "left": { "word": "FÜNFZIG", "rightId": 4 },
      "right": { "word": "GOOD MORNING", "rightId": 1 }
      
    },
    {
      "left": { "word": "KATZE", "rightId": 5 },
      "right": { "word": "BLUE", "rightId": 3 }

    },
    {
      "left": { "word": "WIE GEHT'S?", "rightId": 6 },
      "right": { "word": "FIFTY", "rightId": 4 }
      
    },
    {
      "left": { "word": "BIS MORGEN", "rightId": 7 },
      "right": { "word": "NO", "rightId": 9 }
      
    },
    {
      "left": { "word": "JA", "rightId": 8 },
      "right": { "word": "HOW'S IT GOING?", "rightId": 6 }
      
    },
    {
      "left": { "word": "NEIN", "rightId": 9 },
      "right": { "word": "SEE YOU TOMORROW", "rightId": 7 }
      
    },
    {
      "left": { "word": "GESUNDHEIT", "rightId": 10 },
      "right": { "word": "YES", "rightId": 8 }
      
    }
  ]

}

    ]
  },
  {
    quiz: '4',
    name: 'German Exercise - 4',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      // 20 MCQs
      {
        "question": "How do you say 'uncle' in German?",
        "choices": ["Vater", "Onkel", "Bruder", "Opa"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What is the German word for 'daughter'?",
        "choices": ["Tochter", "Schwester", "Cousine", "Tante"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "What do you call your mother's brother?",
        "choices": ["Cousin", "Großvater", "Onkel", "Neffe"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "What is the word for 'grandson' in German?",
        "choices": ["Sohn", "Enkel", "Neffe", "Bruder"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What is the correct conjugation of the verb 'essen' (to eat) for 'we'?",
        "choices": ["Esse", "Esst", "Essen", "Isst"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "What is the correct conjugation of the verb 'sprechen' (to speak) for 'they'?",
        "choices": ["Spreche", "Spricht", "Sprechen", "Sprecht"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "What is the correct form of the verb 'gehen' (to go) for 'you all'?",
        "choices": ["Geht", "Gehst", "Gehen", "Gehts"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "What is the correct form of the verb 'lesen' (to read) for 'he'?",
        "choices": ["Lese", "Liest", "Lesen", "Lest"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What is the conjugation of the verb 'schreiben' (to write) for 'you' (informal)?",
        "choices": ["Schreibe", "Schreibt", "Schreibst", "Schreiben"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "What is the correct conjugation of the verb 'fahren' (to drive) for 'she'?",
        "choices": ["Fährt", "Fahre", "Fahren", "Fahrt"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "Which pronoun is used for 'they' (masculine) in German?",
        "choices": ["Sie", "Ihr", "Er", "Du"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "Which pronoun is used for 'we' in German?",
        "choices": ["Ihr", "Sie", "Wir", "Du"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "Which pronoun is used for 'he' in German?",
        "choices": ["Er", "Sie", "Wir", "Ihr"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "Which pronoun is used for 'you' (informal) in German?",
        "choices": ["Sie", "Du", "Er", "Wir"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "Which pronoun is used for 'they' (feminine) in German?",
        "choices": ["Sie", "Ihr", "Du", "Er"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "Which pronoun is used for 'you all' (informal) in German?",
        "choices": ["Wir", "Ihr", "Sie", "Du"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "Which pronoun is used for 'I' in German?",
        "choices": ["Du", "Er", "Ich", "Sie"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "Which pronoun is used for 'you' (formal) in German?",
        "choices": ["Sie", "Er", "Du", "Ihr"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "Which pronoun is used for 'we' (feminine) in German?",
        "choices": ["Sie", "Wir", "Ihr", "Du"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "Which pronoun is used for 'she' in German?",
        "choices": ["Sie", "Er", "Ihr", "Du"],
        "type": "MCQs",
        "correctAnswer": 1
    },

      // 20 Fill in the Blanks
      {
        "question": "Mein ______ (father) arbeitet in Berlin.",
        "choices": ["Vater", "Bruder", "Sohn", "Onkel"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Meine ______ (grandmother) besucht uns oft.",
        "choices": ["Großmutter", "Tante", "Mutter", "Schwester"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Er hat einen ______ (son) und zwei Töchter.",
        "choices": ["Sohn", "Bruder", "Cousin", "Neffe"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ich gehe am Wochenende zu meiner ______ (aunt).",
        "choices": ["Tante", "Cousine", "Mutter", "Schwester"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Du ______ (to eat) immer Brot zum Frühstück.",
        "choices": ["isst", "trinkst", "liest", "schreibst"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Wir ______ (to go) oft ins Kino.",
        "choices": ["gehen", "essen", "lesen", "trinken"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Er ______ (to read) jeden Abend ein Buch.",
        "choices": ["liest", "schreibt", "redet", "trinkt"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ihr ______ (to speak) Deutsch sehr gut.",
        "choices": ["sprecht", "reden", "lesen", "essen"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Sie ______ (to finish) ihre Arbeit bald.",
        "choices": ["beendet", "isst", "liest", "redet"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ich ______ (to drink) jeden Tag Wasser.",
        "choices": ["trinke", "esse", "gehe", "schreibe"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "______ (I) bin Schüler.",
        "choices": ["Ich", "Du", "Er", "Wir"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "______ (We) sind froh, hier zu sein.",
        "choices": ["Wir", "Sie", "Ihr", "Er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "______ (She) kommt aus Deutschland.",
        "choices": ["Sie", "Er", "Ich", "Wir"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "______ (They - masculine) spielen Fußball.",
        "choices": ["Sie", "Wir", "Ihr", "Euch"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "______ (You - informal) bist sehr nett.",
        "choices": ["Du", "Sie", "Er", "Wir"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "______ (You - formal) sind Lehrer.",
        "choices": ["Sie", "Du", "Er", "Wir"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "______ (They - feminine) gehen einkaufen.",
        "choices": ["Sie", "Ihr", "Wir", "Er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "______ (You all - informal) habt Zeit, oder?",
        "choices": ["Ihr", "Du", "Sie", "Er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "______ (He) wohnt in München.",
        "choices": ["Er", "Sie", "Du", "Wir"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "______ (We) lernen Deutsch.",
        "choices": ["Wir", "Ihr", "Sie", "Er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },      
      {
  "question": "Ordne die Singular- und Pluralwörter zu.",
  "type": "MatchTheFollowing",
"pairs": [
    {
      "left": { "word": "Mutter", "rightId": 1 },
      "right": { "word": "He", "rightId": 7 }

    },
    {
      "left": { "word": "Wir (feminine)", "rightId": 2 },
      "right": { "word": "You (formal, singular)", "rightId": 10 }

    },
    {
      "left": { "word": "Sie (plural)", "rightId": 3 },
      "right": { "word": "Father", "rightId": 6 }
      
    },
    {
      "left": { "word": "Du", "rightId": 4 },
      "right": { "word": "She", "rightId": 9 }
      
    },
    {
      "left": { "word": "Schwester", "rightId": 5 },
      "right": { "word": "We (feminine)", "rightId": 2 }

    },
    {
      "left": { "word": "Vater", "rightId": 6 },
      "right": { "word": "You (informal)", "rightId": 4 }
      
    },
    {
      "left": { "word": "Er", "rightId": 7 },
      "right": { "word": "They (plural)", "rightId": 3 }
      
    },
    {
      "left": { "word": "Ihr", "rightId": 8 },
      "right": { "word": "You all (informal)", "rightId": 8 }
      
    },
    {
      "left": { "word": "Sie (singular, feminine)", "rightId": 9 },
      "right": { "word": "Mother", "rightId": 1 }
      
    },
    {
      "left": { "word": "Sie (formal, singular)", "rightId": 10 },
      "right": { "word": "Sister", "rightId": 5 }
      
    }
  ]

}

    ]
  },
  {
    quiz: '5',
    name: 'German Exercise - 5',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      // 20 MCQs
      {
        "question": "How do you say \"sister\" in German?",
        "choices": ["Bruder", "Schwester", "Onkel", "Tante"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What does \"Cousin\" mean in English?",
        "choices": ["Onkel", "Cousin", "Bruder", "Neffe"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What is the German term for \"grandmother\"?",
        "choices": ["Großvater", "Tante", "Großmutter", "Schwester"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "What is the English word for \"Nichte\"?",
        "choices": ["Neffe", "Nichte", "Cousin", "Tante"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "How do you conjugate \"gehen\" (to go) for \"wir\"?",
        "choices": ["Gehst", "Gehe", "Gehen", "Geht"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "What is the form of \"sehen\" (to see) for \"du\"?",
        "choices": ["Siehst", "Seht", "Sehen", "Sehe"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "How do you conjugate \"essen\" (to eat) for \"sie\" (feminine)?",
        "choices": ["Isst", "Essen", "Essst", "Isst"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "What is the correct form of \"lernen\" (to learn) for \"ihr\"?",
        "choices": ["Lerne", "Lernt", "Lernen", "Lerns"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "How do you say \"to speak\" in the first person singular?",
        "choices": ["Sprichst", "Spreche", "Sprechen", "Spricht"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "How do you conjugate \"trinken\" (to drink) for \"sie\" (plural)?",
        "choices": ["Trinkt", "Trinke", "Trinken", "Trinkst"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "What is the pronoun for \"we\" in German?",
        "choices": ["Wir", "Sie", "Du", "Ich"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "Which pronoun is used for \"you\" (formal)?",
        "choices": ["Du", "Sie", "Ihr", "Er"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What is the pronoun for \"he\"?",
        "choices": ["Sie", "Er", "Wir", "Ich"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "Which pronoun do we use for \"they\" (feminine)?",
        "choices": ["Er", "Sie", "Du", "Ich"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What is the pronoun for \"I\"?",
        "choices": ["Ich", "Du", "Er", "Sie"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "How do you say \"thirty-five\" in German?",
        "choices": ["fünfunddreißig", "dreißig", "vierzig", "zwanzig"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "How do you say \"forty-two\" in German?",
        "choices": ["zweiundvierzig", "dreißig", "vierzig", "fünfzig"],
        "type": "MCQs",
        "correctAnswer": 1
    },

      // 20 Fill in the Blanks
      {
        "question": "Mein ______ (brother) spielt Fußball.",
        "choices": ["Bruder", "Schwester", "Onkel", "Großeltern"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Die ______ (sister) von Anna ist sehr nett.",
        "choices": ["Bruder", "Schwester", "Onkel", "Großeltern"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Mein ______ (uncle) wohnt in Berlin.",
        "choices": ["Bruder", "Schwester", "Onkel", "Großeltern"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Die ______ (grandparents) kommen zu Besuch.",
        "choices": ["Bruder", "Schwester", "Onkel", "Großeltern"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ich ______ (to read) ein interessantes Buch.",
        "choices": ["lese", "les", "liest", "lesen"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Er ______ (to eat) gern Pizza.",
        "choices": ["isst", "esse", "isst", "essen"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Wir ______ (to go) morgen ins Kino.",
        "choices": ["gehe", "geht", "gehen", "gehst"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Du ______ (to speak) sehr gut Deutsch.",
        "choices": ["spricht", "spreche", "sprichst", "sprechen"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Sie ______ (to take) den Bus zur Schule.",
        "choices": ["nehmt", "nehmt", "nimmt", "nehmen"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ihr ______ (to learn) schnell.",
        "choices": ["lerne", "lernst", "lernt", "lernen"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (I) habe keine Zeit.",
        "choices": ["Ich", "Du", "Er", "Wir"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (You - informal) bist mein Freund.",
        "choices": ["Du", "Ich", "Er", "Sie"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (They - masculine) spielen im Park.",
        "choices": ["Sie", "Wir", "Du", "Er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (We) gehen heute Abend essen.",
        "choices": ["Wir", "Du", "Er", "Sie"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (She) ist sehr fleißig.",
        "choices": ["Sie", "Er", "Wir", "Du"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (You - formal) sind herzlich willkommen.",
        "choices": ["Sie", "Du", "Er", "Wir"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (He) mag Musik.",
        "choices": ["Er", "Sie", "Wir", "Du"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (They - feminine) fahren nach Hamburg.",
        "choices": ["Sie", "Wir", "Du", "Er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ich habe ______ (thirty-five) Äpfel gekauft.",
        "choices": ["fünfunddreißig", "zwanzig", "dreißig", "vierzig"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Mein Bruder ist ______ (forty-two) Jahre alt.",
        "choices": ["zweiundvierzig", "vierzig", "fünfzig", "dreißig"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },   
      {
  "question": "Ordne die Singular- und Pluralwörter zu.",
  "type": "MatchTheFollowing",
"pairs": [
    {
      "left": { "word": "Ich", "rightId": 1 },
      "right": { "word": "Thirty", "rightId": 10 }

    },
    {
      "left": { "word": "Sie (formal)", "rightId": 2 },
      "right": { "word": "They (feminine)", "rightId": 9 }

    },
    {
      "left": { "word": "Er", "rightId": 3 },
      "right": { "word": "You (informal)", "rightId": 8 }
      
    },
    {
      "left": { "word": "Wir", "rightId": 4 },
      "right": { "word": "Thirty-five", "rightId": 7 }
      
    },
    {
      "left": { "word": "Sie (plural)", "rightId": 5 },
      "right": { "word": " Forty-two", "rightId": 6 }

    },
    {
      "left": { "word": "Zweiunddreißig", "rightId": 6 },
      "right": { "word": "They (masculine)", "rightId": 5 }
      
    },
    {
      "left": { "word": "Fünfundvierzig", "rightId": 7 },
      "right": { "word": "We", "rightId": 4 }
      
    },
    {
      "left": { "word": "Du", "rightId": 8 },
      "right": { "word": "He", "rightId": 3 }
      
    },
    {
      "left": { "word": "Sie", "rightId": 9 },
      "right": { "word": "You (formal)", "rightId": 2 }
      
    },
    {
      "left": { "word": "Dreißig", "rightId": 10 },
      "right": { "word": "I", "rightId": 1 }
      
    }
  ]

}

    ]
  },
  {
    quiz: '6',
    name: 'German Exercise - 6',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      // 20 MCQs
      {
        "question": "How do you say \"Good morning\" in German?",
        "choices": ["Guten Tag", "Guten Morgen", "Gute Nacht", "Hallo"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What does \"Danke\" mean in English?",
        "choices": ["Please", "Goodbye", "Thank you", "Sorry"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "How do you say \"See you later\" in German?",
        "choices": ["Bis später", "Tschüss", "Gute Nacht", "Guten Abend"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What does \"Entschuldigung\" mean in English?",
        "choices": ["Sorry", "Hello", "Please", "Goodbye"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "How do you say \"Please\" in German?",
        "choices": ["Danke", "Bitte", "Entschuldigung", "Tschüss"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What does \"Es tut mir leid\" mean in English?",
        "choices": ["Excuse me", "I'm sorry", "Hello", "Goodbye"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say \"Goodbye\" in German?",
        "choices": ["Hallo", "Auf Wiedersehen", "Tschüss", "Gute Nacht"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What does \"Guten Abend\" mean in English?",
        "choices": ["Good afternoon", "Good evening", "Good morning", "See you tomorrow"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What does \"Freund\" mean in English?",
        "choices": ["Friend", "Family", "Teacher", "Neighbor"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "How do you say \"House\" in German?",
        "choices": ["Auto", "Haus", "Tür", "Fenster"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What does \"Schule\" mean in English?",
        "choices": ["Library", "School", "Store", "Park"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say \"Book\" in German?",
        "choices": ["Buch", "Stift", "Tisch", "Stuhl"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What does \"Schwester\" mean in English?",
        "choices": ["Brother", "Sister", "Mother", "Cousin"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say \"Dog\" in German?",
        "choices": ["Katze", "Pferd", "Hund", "Kaninchen"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What does \"Familie\" mean in English?",
        "choices": ["Friends", "Family", "Neighbors", "Colleagues"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say \"Window\" in German?",
        "choices": ["Tür", "Fenster", "Stuhl", "Tisch"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What does Peter say to Stefan to invite him?",
        "choices": ["Möchtest du zu mir kommen?", "Wo ist die Bibliothek?", "Magst du Filme?", "Willst du in den Park gehen?"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "How would Stefan respond if he wants to accept the invitation?",
        "choices": ["Nein, danke", "Ja, ich würde gerne", "Es tut mir leid, ich kann nicht", "Vielleicht ein anderes Mal"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What could Peter say to know the time?",
        "choices": ["Wann kommen wir an?", "Willst du einen Film sehen?", "Wo ist die Uhr?", "Was machst du morgen?"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "If Stefan wants to know the plan for tomorrow, how would he ask?",
        "choices": ["Was machen wir morgen?", "Hast du Zeit?", "Wie viel kostet das?", "Welcher Tag ist heute?"],
        "type": "MCQs",
        "correctAnswer": 1
      },

      // 20 Fill in the Blanks
      {
        "question": "Freund 1: Hallo! Wie ______ (to be) du heute?",
        "choices": ["geht es","fg","sd","er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Freund 2: Guten Morgen, ______ (I) geht’s gut, danke. Und dir?",
        "choices": ["mir","fg","sd","er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Freund 1: Ich ______ (am) ein bisschen müde.",
        "choices": ["bin","fg","sd","er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Freund 2: Was ______ (to do) du heute?",
        "choices": ["machst","fg","sd","er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Freund 1: Ich gehe ins Kino. Möchtest du mit ______ (to come)?",
        "choices": ["kommen","fg","sd","er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Freund 2: Ich würde gerne, aber ich muss ______ (to study).",
        "choices": ["lernen","fg","sd","er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Freund 1: Kein Problem, wir können ______ (tomorrow) gehen.",
        "choices": ["morgen","fg","sd","er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Freund 2: Super! Wann ______ (to meet) wir uns?",
        "choices": ["treffen","fg","sd","er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Freund 1: Wir treffen uns um ______ (seven) Uhr abends.",
        "choices": ["sieben","fg","sd","er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Freund 2: Toll! Welchen Film ______ (to watch) wir uns an?",
        "choices": ["schauen","fg","sd","er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Freund 1: Ich möchte eine Komödie sehen, aber du ______ (can) entscheiden.",
        "choices": ["kannst","fg","sd","er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Freund 2: Klasse! Ich ______ (love) lustige Filme.",
        "choices": ["liebe","fg","sd","er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Freund 1: Sollen wir die Karten online ______ (to buy)?",
        "choices": ["kaufen","fg","sd","er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Freund 2: Ja, ______ (that) ist eine gute Idee.",
        "choices": ["das","fg","sd","er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Freund 1: Also, ich sehe dich ______ (later).",
        "choices": ["später","fg","sd","er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Freund 2: ______ (until) später!",
        "choices": ["Bis","fg","sd","er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Freund 1: Vergiss nicht, deine ______ (glasses) mitzubringen.",
        "choices": ["Brille","fg","sd","er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Freund 2: Keine Sorge, ich habe sie ______ (already).",
        "choices": ["schon","fg","sd","er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Freund 1: Sehr gut, wir ______ (to see) uns bald.",
        "choices": ["sehen","fg","sd","er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Freund 2: ______ (until) morgen!",
        "choices": ["Bis","fg","sd","er"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
  "question": "Ordne die Singular- und Pluralwörter zu.",
  "type": "MatchTheFollowing",
"pairs": [
    {
      "left": { "word": "Hund", "rightId": 1 },
      "right": { "word": "Table", "rightId": 10 }

    },
    {
      "left": { "word": "Schwester", "rightId": 2 },
      "right": { "word": "School", "rightId": 9 }

    },
    {
      "left": { "word": "Haus", "rightId": 3 },
      "right": { "word": "Chair", "rightId": 8 }
      
    },
    {
      "left": { "word": "Buch", "rightId": 4 },
      "right": { "word": "Friend", "rightId": 7 }
      
    },
    {
      "left": { "word": "Fenster", "rightId": 5 },
      "right": { "word": "Family", "rightId": 6 }

    },
    {
      "left": { "word": "Familie", "rightId": 6 },
      "right": { "word": "Window", "rightId": 5 }
      
    },
    {
      "left": { "word": "Freund", "rightId": 7 },
      "right": { "word": "Book", "rightId": 4 }
      
    },
    {
      "left": { "word": "Stuhl", "rightId": 8 },
      "right": { "word": "House", "rightId": 3 }
      
    },
    {
      "left": { "word": "Schule", "rightId": 9 },
      "right": { "word": "Sister", "rightId": 2 }
      
    },
    {
      "left": { "word": "Tisch", "rightId": 10 },
      "right": { "word": "Dog", "rightId": 1 }
      
    }
  ]

}

    ]
  },
  {
    quiz: '7',
    name: 'German Exercise - 7',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      // 20 MCQs
      {
        "question": "How do you say 'I am happy' in German?",
        "choices": ["Ich bin traurig", "Ich bin glücklich", "Du bist glücklich", "Er ist glücklich"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "How do you say 'We are friends' in German?",
        "choices": [ "Sie sind Freunde", "Du bist Freunde","Wir sind Freunde", "Ich bin Freunde"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "How do you say 'You (formal) are my teacher' in German?",
        "choices": [ "Sie sind mein Lehrer", "Er ist mein Lehrer","Du bist mein Lehrer", "Wir sind mein Lehrer"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "How do you say 'They are students' in German?",
        "choices": [ "Sie sind Studenten", "Wir sind Studenten", "Ich bin Studenten", "Sie sind Student",],
        "type": "MCQs",
        "correctAnswer": 4
    },
    {
        "question": "How do you say 'She is my sister' in German?",
        "choices": [ "Sie ist mein Bruder", "Ich bin meine Schwester", "Du bist meine Schwester", "Sie ist meine Schwester"],
        "type": "MCQs",
        "correctAnswer": 4
    },
    {
        "question": "How do you say 'He is a doctor' in German?",
        "choices": ["Er ist Arzt", "Sie ist Arzt", "Wir sind Arzt", "Ich bin Arzt"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "How do you say 'They are happy' in German?",
        "choices": [ "Sie ist glücklich","Sie sind glücklich", "Ich bin glücklich", "Wir sind glücklich"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "How do you say 'We are from Spain' in German?",
        "choices": ["Wir sind aus Spanien", "Sie sind aus Spanien", "Ich bin aus Spanien", "Du bist aus Spanien"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "What is the feminine form of 'engineer'?",
        "choices": [ "Ingenieure", "Ingenieuren","Ingenieurin", "Ingenieurein"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "How do you say 'Cuban' in German for a woman?",
        "choices": [ "Kuban", "Kubanerin", "Kubanisches", "Kubanerin"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What is the masculine form of 'teacher'?",
        "choices": [ "Lehrerinnen", "Lehrerinnen", "Lehrer", "Lehrerin"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "How do you say 'Brazilian' in German for a man?",
        "choices": ["Brasilianer", "Brasilianerin", "Brasilianische", "Brasilianern"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "What is the feminine form of 'singer'?",
        "choices": [ "Sänger", "Sängerinnen", "Sängerin", "Sängeren"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "How do you say 'Argentinian' in German for a man?",
        "choices": [ "Argentinierin", "Argentinier", "Argentinische", "Argentiniern"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "How do you say 'American' in German?",
        "choices": [ "Amerikanerin", "Amerikaner", "Amerikanische", "Amerikanern"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "How do you say 'nurse' in German for a man?",
        "choices": [ "Krankenschwestern", "Krankenpflegerin", "Krankenpflegerin", "Krankenpfleger"],
        "type": "MCQs",
        "correctAnswer": 4
    },
    {
        "question": "How do you form the sentence 'They have a cat' in German?",
        "choices": [ "Sie haben eine Katze","Sie haben eine Katze", "Wir haben eine Katze", "Ich habe eine Katze"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "How do you say 'She is my friend' in German?",
        "choices": [ "Ich bin meine Freundin","Sie ist meine Freundin", "Sie sind meine Freundin", "Du bist meine Freundin"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "How do you form the sentence 'You have a book' in German?",
        "choices": ["Du hast ein Buch", "Du bist ein Buch", "Sie haben ein Buch", "Wir haben ein Buch"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "How do you say 'We are students' in German?",
        "choices": ["Wir sind Studenten", "Du bist Studenten", "Sie sind Studenten", "Ich bin Studenten"],
        "type": "MCQs",
        "correctAnswer": 1
    },

      // 20 Fill in the Blanks
      {
        "question": "Ich ______ (to be) ein Lehrer.",
        "choices": ["bin", "bist", "ist", "sind"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Du ______ (to be) meine Freundin.",
        "choices": ["bist", "bin", "ist", "sind"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Er ______ (to be) ein Student.",
        "choices": ["ist", "bin", "bist", "sind"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Wir ______ (to be) glücklich.",
        "choices": ["sind", "bist", "ist", "bin"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Sie ______ (to be) aus Deutschland.",
        "choices": ["sind", "bist", "ist", "bin"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ich ______ (to call myself) Anna.",
        "choices": ["heiße", "bin", "habe", "ist"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ich ______ (to have) einen Hund.",
        "choices": ["habe", "hat", "bist", "sind"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Er ______ (to have) ein Buch.",
        "choices": ["hat", "habe", "bist", "sind"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Wir ______ (to have) viele Freunde.",
        "choices": ["haben", "hat", "habe", "bist"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Du ______ (to have) eine schöne Wohnung.",
        "choices": ["hast", "hat", "bist", "sind"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Mein Name ______ (is) Peter.",
        "choices": ["ist", "bin", "habe", "sind"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ich bin ______ (a nationality).",
        "choices": ["Deutscher", "deutscher", "deutsche", "deutsch"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Sie ist ______ (a profession).",
        "choices": ["Ärztin", "arzt", "ärztin", "ärzte"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ich bin ______ (a nationality).",
        "choices": ["Französin", "französisch", "franzosen", "franzose"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Er ist ______ (a profession).",
        "choices": ["Tänzer", "tänzer", "tanzende", "tanz"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Er ist ______ (a nationality).",
        "choices": ["Kanadier", "kanadisch", "kanadieren", "kanada"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Sie ist ______ (a profession).",
        "choices": ["Lehrerin", "lehrer", "lehrerin", "lehren"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ich bin ______ (masculine nationality).",
        "choices": ["Italiener", "italienisch", "italiener", "italienerin"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Er ist ______ (masculine profession).",
        "choices": ["Ingenieur", "ingenieur", "ingenieurin", "ingenieure"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Sie sind ______ (masculine nationality).",
        "choices": ["Amerikaner", "amerikanisch", "amerikaner", "amerikanerin"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
      {
  "question": "Ordne die Singular- und Pluralwörter zu.",
  "type": "MatchTheFollowing",
"pairs": [
    {
      "left": { "word": "Nationalität", "rightId": 1 },
      "right": { "word": "Doctor", "rightId": 7 }

    },
    {
      "left": { "word": "Beruf", "rightId": 2 },
      "right": { "word": "Italian", "rightId": 9 }

    },
    {
      "left": { "word": "Deutscher", "rightId": 3 },
      "right": { "word": "Happy", "rightId": 8 }
      
    },
    {
      "left": { "word": "Ärztin", "rightId": 4 },
      "right": { "word": "Canadian", "rightId": 10 }
      
    },
    {
      "left": { "word": "Spanier", "rightId": 5 },
      "right": { "word": "English", "rightId": 6 }

    },
    {
      "left": { "word": "Engländer", "rightId": 6 },
      "right": { "word": "Spanish", "rightId": 5 }
      
    },
    {
      "left": { "word": "Arzt", "rightId": 7 },
      "right": { "word": "German", "rightId": 1 }
      
    },
    {
      "left": { "word": "Glücklich", "rightId": 8 },
      "right": { "word": "German", "rightId": 3 }
      
    },
    {
      "left": { "word": "Italiener", "rightId": 9 },
      "right": { "word": "Teacher", "rightId": 2 }
      
    },
    {
      "left": { "word": "Kanadier", "rightId": 10 },
      "right": { "word": "Doctor", "rightId": 4 }
      
    }
  ]
}
    ]
  },
  {
    quiz: '8',
    name: 'German Exercise - 8',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      // 20 MCQs
      {
        "question": "What does \"Bleistift\" mean?",
        "choices": ["Eraser", "Pencil", "Paper", "Pen"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What does \"Heft\" mean in English?",
        "choices": ["Book", "Notebook", "Desk", "Chair"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What does \"Lehrerin\" mean?",
        "choices": ["Student", "Teacher", "Classmate", "Principal"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "How do you say \"window\" in German?",
        "choices": ["Tür", "Tafel", "Fenster", "Wand"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "What does \"Hausaufgabe\" mean?",
        "choices": ["Homework", "Test", "Lesson", "Project"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "What does \"Schüler\" mean?",
        "choices": ["Teacher", "Student", "Classroom", "Principal"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What does \"Klasse\" mean?",
        "choices": ["School", "Class", "Teacher", "Lesson"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What does \"Tafel\" mean?",
        "choices": ["Whiteboard", "Desk", "Blackboard", "Book"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "What does \"Bitte\" mean?",
        "choices": ["Thank you", "Excuse me", "Please", "I'm sorry"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "What does \"Danke\" mean?",
        "choices": ["Sorry", "Please", "Thank you", "Excuse me"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "How do you say \"I don't understand\" in German?",
        "choices": ["Ich verstehe", "Ich verstehe nicht", "Ich bin müde", "Entschuldigung"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What does \"Entschuldigung\" mean?",
        "choices": ["I'm happy", "Excuse me", "Thank you", "Please"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "How do you say \"Good morning\" in German?",
        "choices": ["Guten Tag", "Guten Abend", "Guten Morgen", "Gute Nacht"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "What does \"Es tut mir leid\" mean?",
        "choices": ["I am happy", "I am sorry", "I don't know", "I understand"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What does \"Könnte ich zur Toilette gehen?\" mean?",
        "choices": ["Can I go to the library?", "Can I go to the bathroom?", "Can I go home?", "Can I go to class?"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What does \"Wie geht's dir?\" mean?",
        "choices": ["Where are you?", "How are you?", "What do you want?", "Who are you?"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What day is today?",
        "choices": ["Montag", "Dienstag", "Mittwoch", "Donnerstag"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "How do you say \"April\" in German?",
        "choices": ["März", "April", "Mai", "Juni"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "Which season comes after summer?",
        "choices": ["Herbst", "Winter", "Frühling", "Sommer"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "What does \"Es ist kalt\" mean?",
        "choices": ["It's hot", "It's warm", "It's cold", "It's raining"],
        "type": "MCQs",
        "correctAnswer": 3
    },

      // 20 Fill in the Blanks
      {
        "question": "Der ______ (pencil) liegt auf dem Tisch.",
        "choices": ["Bleistift", "Papier", "Tafel", "Heft"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Das ______ (notebook) ist neu.",
        "choices": ["Heft", "Bleistift", "Tafel", "Schüler"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Die ______ (teacher) ist freundlich.",
        "choices": ["Lehrerin", "Schüler", "Bleistift", "Heft"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Das ______ (board) ist grün.",
        "choices": ["Tafel", "Bleistift", "Heft", "Schüler"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Der ______ (student) lernt für die Prüfung.",
        "choices": ["Schüler", "Lehrerin", "Tafel", "Heft"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (Please) helfen Sie mir.",
        "choices": ["Bitte", "Danke", "Entschuldigung", "Tut mir leid"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (Thank you) für Ihre Unterstützung.",
        "choices": ["Danke", "Bitte", "Entschuldigung", "Tut mir leid"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (Excuse me) ich habe eine Frage.",
        "choices": ["Entschuldigung", "Danke", "Bitte", "Tut mir leid"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (I don’t understand) die Aufgabe.",
        "choices": ["Ich verstehe nicht", "Ich bin müde", "Entschuldigung", "Danke"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (I'm sorry) für die Verspätung.",
        "choices": ["Es tut mir leid", "Danke", "Bitte", "Entschuldigung"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Schüler: Hallo, wie ______ (are you)?",
        "choices": ["geht's dir", "ist dir", "sind dir", "heißt dir"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Lehrerin: ______ (Good morning) alle zusammen.",
        "choices": ["Guten Morgen", "Guten Abend", "Guten Tag", "Gute Nacht"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Schüler: Darf ich ______ (go) zur Toilette?",
        "choices": ["gehen", "bleiben", "sitzen", "kommen"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Lehrerin: Ja, ______ (go) schnell.",
        "choices": ["geh", "komme", "bleib", "sitze"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Schüler: Was ist die ______ (homework) für morgen?",
        "choices": ["Hausaufgabe", "Klasse", "Prüfung", "Lehrerin"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (The) Buch liegt auf dem Tisch.",
        "choices": ["Das", "Ein", "Die", "Der"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (A) Lehrer erklärt die Lektion.",
        "choices": ["Ein", "Die", "Das", "Der"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (The) Stühle sind bequem.",
        "choices": ["Die", "Das", "Ein", "Der"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (An) Apfel ist rot.",
        "choices": ["Ein", "Das", "Die", "Der"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (The) Tür ist offen.",
        "choices": ["Die", "Das", "Ein", "Der"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
      {
  "question": "Ordne die Singular- und Pluralwörter zu.",
  "type": "MatchTheFollowing",
"pairs": [
    {
      "left": { "word": "Der Bleistift", "rightId": 1 },
      "right": { "word": "Thank you", "rightId": 8 }

    },
    {
      "left": { "word": "Das Heft", "rightId": 2 },
      "right": { "word": "Good morning", "rightId": 9 }

    },
    {
      "left": { "word": "Die Lehrerin", "rightId": 3 },
      "right": { "word": "Please", "rightId": 7 }
      
    },
    {
      "left": { "word": "Die Tafel", "rightId": 4 },
      "right": { "word": "Teacher", "rightId": 3 }
      
    },
    {
      "left": { "word": "Der Schüler", "rightId": 5 },
      "right": { "word": "Pencil", "rightId": 1 }

    },
    {
      "left": { "word": "Die Klasse", "rightId": 6 },
      "right": { "word": "Student", "rightId": 5 }
      
    },
    {
      "left": { "word": "Bitte", "rightId": 7 },
      "right": { "word": "Window", "rightId": 4 }
      
    },
    {
      "left": { "word": "Danke", "rightId": 8 },
      "right": { "word": "Excuse me", "rightId": 10 }
      
    },
    {
      "left": { "word": "Guten Morgen", "rightId": 9 },
      "right": { "word": "Notebook", "rightId": 2 }
      
    },
    {
      "left": { "word": "Entschuldigung", "rightId": 10 },
      "right": { "word": "Classroom", "rightId": 6 }
      
    }
  ]
}
    ]
  },
  {
    quiz: '9',
    name: 'German Exercise - 9',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      // 20 MCQs
      {
        "question": "What does \"Geburtstag\" mean in English?",
        "choices": ["Anniversary", "Party", "Birthday", "Celebration"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "If you were born on February 12th, what is your zodiac sign?",
        "choices": ["Aquarius", "Pisces", "Capricorn", "Libra"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "How do you say \"party\" in German?",
        "choices": ["Feier", "Geburtstag", "Veranstaltung", "Fest"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "What zodiac sign corresponds to someone born in August?",
        "choices": ["Capricorn", "Libra", "Leo", "Gemini"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "What is the German word for \"celebrate\"?",
        "choices": ["Feiern", "Singen", "Tanzen", "Spielen"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "What is your zodiac sign if you were born in December?",
        "choices": ["Scorpio", "Sagittarius", "Capricorn", "Libra"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "What word means \"gift\" in German?",
        "choices": ["Geschenk", "Überraschung", "Feier", "Einladung"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "What zodiac sign corresponds to someone born in April?",
        "choices": ["Aries", "Taurus", "Pisces", "Libra"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "What does the verb \"haben\" mean?",
        "choices": ["To be", "To have", "To make", "To go"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "How do you conjugate \"sein\" for \"ich\"?",
        "choices": ["Bin", "Bist", "Sind", "Seid"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "Which form of \"sprechen\" belongs to \"wir\"?",
        "choices": ["Sprichst", "Sprechen", "Spricht", "Spreche"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What is the correct pronoun for \"we\" in German?",
        "choices": ["Ihr", "Du", "Wir", "Sie"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "How do you say \"I am\" in German?",
        "choices": ["Du bist", "Wir sind", "Ich bin", "Sie sind"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "What is the conjugated form of \"haben\" for \"wir\"?",
        "choices": ["Habt", "Haben", "Hat", "Hatte"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "How do you conjugate the verb \"schreiben\" for \"du\"?",
        "choices": ["Schreibst", "Schreibe", "Schreiben", "Schreibt"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "What does the verb \"schreiben\" mean?",
        "choices": ["To read", "To write", "To listen", "To watch"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "How do you say \"fifty\" in German?",
        "choices": ["Fünfzig", "Sechzig", "Vierzig", "Dreißig"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "What number follows \"neunundneunzig\"?",
        "choices": ["Hundert", "Achtzig", "Siebzig", "Sechsundneunzig"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "How do you say \"thirty-five\" in German?",
        "choices": ["Fünfunddreißig", "Vierunddreißig", "Dreiunddreißig", "Zweiunddreißig"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "How do you say \"one hundred\" in German?",
        "choices": ["Eins", "Zwei", "Hundert", "Tausend"],
        "type": "MCQs",
        "correctAnswer": 3
    },

      // 20 Fill in the Blanks
      {
        "question": "Mein ______ (birthday) ist am 10. Mai.",
        "choices": ["Geburtstag", "Jahr", "Monat", "Woche"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ich habe am ______ (30) Geburtstag gefeiert.",
        "choices": ["dreißig", "vierzig", "fünfzig", "sechzig"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Wann ist dein ______ (birthday)?",
        "choices": ["Geburtstag", "Tag", "Jahr", "Monat"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Wir machen eine ______ (party) für meinen Freund.",
        "choices": ["Party", "Feier", "Veranstaltung", "Zeremonie"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ich bekomme ein Geschenk zu meinem ______ (birthday).",
        "choices": ["Geburtstag", "Geschenk", "Tag", "Jahr"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Mein Sternzeichen ist ______ (Leo), weil ich im August geboren bin.",
        "choices": ["Löwe", "Stier", "Widder", "Zwilling"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Er ist ______ (Gemini), da sein Geburtstag im Juni ist.",
        "choices": ["Zwilling", "Löwe", "Widder", "Krebs"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Wenn du im Oktober geboren bist, bist du ______ (Libra).",
        "choices": ["Waage", "Skorpion", "Jungfrau", "Löwe"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Meine Mutter ist ______ (Aquarius), sie wurde im Februar geboren.",
        "choices": ["Wassermann", "Fische", "Stier", "Widder"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (Taurus) ist das Zeichen meines Bruders.",
        "choices": ["Stier", "Waage", "Zwilling", "Löwe"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ich ______ (am) Student in Deutsch.",
        "choices": ["bin", "habe", "gehe", "schreibe"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Wir ______ (have) einen Deutschkurs heute.",
        "choices": ["haben", "sind", "gehen", "spricht"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Sie ______ (are) sehr freundlich.",
        "choices": ["sind", "haben", "gehen", "schreiben"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Du ______ (speak) gut Deutsch.",
        "choices": ["sprichst", "sprich", "sprichst", "sprich"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Sie ______ (write) einen Brief an ihre Schwester.",
        "choices": ["schreibt", "schreibe", "schreiben", "schreib"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Mein ______ (father) ist Lehrer.",
        "choices": ["Vater", "Mutter", "Bruder", "Schwester"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ich habe zwei ______ (sisters).",
        "choices": ["Schwestern", "Brüder", "Väter", "Mütter"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Meine ______ (mother) ist Ärztin.",
        "choices": ["Mutter", "Vater", "Schwester", "Bruder"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Dein ______ (brother) arbeitet in Deutschland.",
        "choices": ["Bruder", "Schwester", "Vater", "Mutter"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ihre ______ (parents) sind sehr nett.",
        "choices": ["Eltern", "Brüder", "Schwestern", "Tanten"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
      {
  "question": "Ordne die Singular- und Pluralwörter zu.",
  "type": "MatchTheFollowing",
"pairs": [
    {
      "left": { "word": "Geburtstag", "rightId": 1 },
      "right": { "word": "School", "rightId": 8 }

    },
    {
      "left": { "word": "Löwe", "rightId": 2 },
      "right": { "word": "Student", "rightId": 9 }

    },
    {
      "left": { "word": "Schreiben", "rightId": 3 },
      "right": { "word": "To have", "rightId": 7 }
      
    },
    {
      "left": { "word": "Bruder", "rightId": 4 },
      "right": { "word": "To write", "rightId": 3 }
      
    },
    {
      "left": { "word": "Wir haben", "rightId": 5 },
      "right": { "word": "Birthday", "rightId": 1 }

    },
    {
      "left": { "word": "Mutter", "rightId": 6 },
      "right": { "word": "We have", "rightId": 5 }
      
    },
    {
      "left": { "word": "Sprechen", "rightId": 7 },
      "right": { "word": "Brother", "rightId": 4 }
      
    },
    {
      "left": { "word": "Schule", "rightId": 8 },
      "right": { "word": "Father", "rightId": 10 }
      
    },
    {
      "left": { "word": "Schüler", "rightId": 9 },
      "right": { "word": "Leo", "rightId": 2 }
      
    },
    {
      "left": { "word": "Vater", "rightId": 10 },
      "right": { "word": "Mother", "rightId": 6 }
      
    }
  ]
}
    ]
  },
];
