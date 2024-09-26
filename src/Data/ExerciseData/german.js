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
  }
];
