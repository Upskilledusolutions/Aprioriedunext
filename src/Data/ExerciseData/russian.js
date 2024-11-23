export const quiz = [
    {
      quiz: '1',
      name: 'Russian Exercise - 1 (A1)',
      level: 'Easy',
      topic: 'Mixed',
      questions: [
        {
          "question": "How do you say \"Hello\" informally in Russian?",
          "choices": ["Здравствуйте", "Привет", "Доброе утро", "Пока"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What is the Russian phrase for \"How are you?\"",
          "choices": ["Как тебя зовут?", "Как ты?", "Как дела?", "Кто ты?"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "What does \"Меня зовут\" mean in English?",
          "choices": ["I am from", "My name is", "How are you?", "Nice to meet you"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What is the correct response to \"Как дела?\"",
          "choices": ["Спасибо", "Хорошо, спасибо", "Привет", "Пока"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What is the Russian word for \"Good morning\"?",
          "choices": ["Добрый вечер", "Доброе утро", "Добрый день", "Здравствуйте"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "\"Пожалуйста\" means:",
          "choices": ["Hello", "Please", "Thank you", "Goodbye"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "\"Я из Индии\" means:",
          "choices": ["I am from India", "My name is India", "I am studying", "How are you?"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "\"Рад познакомиться\" means:",
          "choices": ["I am glad to meet you", "I am from Russia", "How are you?", "Goodbye"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "\"До свидания\" means:",
          "choices": ["See you later", "Goodbye", "Thank you", "Welcome"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What does \"Спасибо\" mean?",
          "choices": ["Please", "Thank you", "You're welcome", "Goodbye"],
          "type": "MCQs",
          "correctAnswer": 2
        },
         
          {
            "question": "Привет, меня зовут ______ (Hello, my name is......).",
            "choices": ["Анна", "Иван", "Елена", "Алексей"],
            "type": "FillInTheBlanks",
            "correctAnswer": 1
          },
          {
            "question": "Как ______ тебя зовут? (What is ...... your name?)",
            "choices": ["тебя", "вас", "их", "его"],
            "type": "FillInTheBlanks",
            "correctAnswer": 1
          },
          {
            "question": "Здравствуйте, как ______? (Hello, how are ......?)",
            "choices": ["вы", "дела", "тебя", "их"],
            "type": "FillInTheBlanks",
            "correctAnswer": 1
          },
          {
            "question": "Я из ______ (I am from ......).",
            "choices": ["Индии", "России", "Германии", "Франции"],
            "type": "FillInTheBlanks",
            "correctAnswer": 1
          },
          {
            "question": "______ день! (Good .......!)",
            "choices": ["Добрый", "Хороший", "Утренний", "Солнечный"],
            "type": "FillInTheBlanks",
            "correctAnswer": 1
          },
          {
            "question": "Как ______? (How are .......?)",
            "choices": ["ты", "вы", "он", "она"],
            "type": "FillInTheBlanks",
            "correctAnswer": 1
          },
          {
            "question": "Рад ______ познакомиться. (Nice to ........ you.)",
            "choices": ["познакомиться", "видеть", "услышать", "встретить"],
            "type": "FillInTheBlanks",
            "correctAnswer": 1
          },
          {
            "question": "Где ______? (Where are ........?)",
            "choices": ["ты", "вы", "он", "она"],
            "type": "FillInTheBlanks",
            "correctAnswer": 1
          },
          {
            "question": "Я ______ студент. (I am ....... a student.)",
            "choices": ["я", "он", "мы", "вы"],
            "type": "FillInTheBlanks",
            "correctAnswer": 1
          },
          {
            "question": "Очень ______ встретиться. (Nice to ....... you.)",
            "choices": ["приятно", "важно", "радостно", "интересно"],
            "type": "FillInTheBlanks",
            "correctAnswer": 1
          },

        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "Привет", "rightId": 1 },
              "right": { "word": "Good morning", "rightId": 3 }
            },
            {
              "left": { "word": "Как дела?", "rightId": 2 },
              "right": { "word": "Hello (informal)", "rightId": 1 }
            },
            {
              "left": { "word": "Доброе утро", "rightId": 3 },
              "right": { "word": "How are you?", "rightId": 2 }
            },
            {
              "left": { "word": "Здравствуйте", "rightId": 4 },
              "right": { "word": "My name is", "rightId": 5 }
            },
            {
              "left": { "word": "Меня зовут", "rightId": 5 },
              "right": { "word": "Hello (formal)", "rightId": 4 }
            },
            {
              "left": { "word": "Я из", "rightId": 6 },
              "right": { "word": "Please", "rightId": 8 }
            },
            {
              "left": { "word": "Рад познакомиться", "rightId": 7 },
              "right": { "word": "I am from", "rightId": 6 }
            },
            {
              "left": { "word": "Пожалуйста", "rightId": 8 },
              "right": { "word": "Nice to meet you", "rightId": 7 }
            },
            {
              "left": { "word": "Спасибо", "rightId": 9 },
              "right": { "word": "Goodbye", "rightId": 10 }
            },
            {
              "left": { "word": "До свидания", "rightId": 10 },
              "right": { "word": "Thank you", "rightId": 9 }
            }
          ],
        },
  
      ],
    },
]