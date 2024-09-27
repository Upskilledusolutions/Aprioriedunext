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
];
