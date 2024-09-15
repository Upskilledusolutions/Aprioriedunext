export const quiz = [
  {
    quiz: '1',
    name: 'Spanish Exercise - 1',
    level: 'Easy',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs

      {
        question: "How do you say 'my name is' in Spanish?",
        choices: ['me llamo', 'cómo estás', 'por favor', 'gracias'],
        type: 'MCQs',
        correctAnswer: 1,
      },
      {
        question: "What does 'de nada' mean?",
        choices: ['you’re welcome', 'thank you', 'goodbye', 'please'],
        type: 'MCQs',
        correctAnswer: 1,
      },
      {
        question: "How do you say 'good afternoon' in Spanish?",
        choices: ['buenas noches', 'buenas tardes', 'hola', 'buenos días'],
        type: 'MCQs',
        correctAnswer: 2,
      },
      {
        question: "What does 'sí' mean?",
        choices: ['yes', 'no', 'please', 'thank you'],
        type: 'MCQs',
        correctAnswer: 1,
      },
      {
        question: "What is the Spanish word for 'no'?",
        choices: ['sí', 'no', 'gracias', 'por favor'],
        type: 'MCQs',
        correctAnswer: 2,
      },
      {
        question: "What does 'mucho gusto' mean?",
        choices: ['nice to meet you', 'good morning', 'good night', 'see you later'],
        type: 'MCQs',
        correctAnswer: 1,
      },
      {
        question: "How do you say 'see you later' in Spanish?",
        choices: ['hasta luego', 'adiós', 'hola', 'gracias'],
        type: 'MCQs',
        correctAnswer: 1,
      },
      {
        question: "What does 'bienvenido' mean?",
        choices: ['welcome', 'goodbye', 'please', 'thank you'],
        type: 'MCQs',
        correctAnswer: 1,
      },
      {
        question: "How do you say 'I don’t understand' in Spanish?",
        choices: ['no comprendo', 'me llamo', 'por favor', 'gracias'],
        type: 'MCQs',
        correctAnswer: 1,
      },
      {
        question: "What does 'hasta mañana' mean?",
        choices: ['see you tomorrow', 'good night', 'goodbye', 'hello'],
        type: 'MCQs',
        correctAnswer: 1,
      },
      {
        question: "What does 'hola' mean in English?",
        choices: ['goodbye', 'hello', 'thank you', 'please'],
        type: 'MCQs',
        correctAnswer: 2,
      },
      {
        question: "How do you say 'thank you' in Spanish?",
        choices: ['gracias', 'por favor', 'adiós', 'hola'],
        type: 'MCQs',
        correctAnswer: 1,
      },
      {
        question: "What does 'por favor' mean?",
        choices: ['please', 'thank you', 'excuse me', 'goodbye'],
        type: 'MCQs',
        correctAnswer: 1,
      },
      {
        question: "How do you say 'goodbye' in Spanish?",
        choices: ['hola', 'adiós', 'buenos días', 'gracias'],
        type: 'MCQs',
        correctAnswer: 2,
      },
      {
        question: "What does 'buenos días' mean?",
        choices: ['good night', 'good morning', 'goodbye', 'thank you'],
        type: 'MCQs',
        correctAnswer: 2,
      },
      {
        question: "How do you say 'excuse me' in Spanish?",
        choices: ['lo siento', 'disculpe', 'gracias', 'por favor'],
        type: 'MCQs',
        correctAnswer: 2,
      },
      {
        question: "What does 'lo siento' mean?",
        choices: ['I’m sorry', 'thank you', 'please', 'hello'],
        type: 'MCQs',
        correctAnswer: 1,
      },
      {
        question: "How do you say 'good night' in Spanish?",
        choices: ['buenos días', 'buenas noches', 'hola', 'gracias'],
        type: 'MCQs',
        correctAnswer: 2,
      },
      {
        question: "What does '¿cómo estás?' mean?",
        choices: ['what is your name?', 'how are you?', 'goodbye', 'where are you?'],
        type: 'MCQs',
        correctAnswer: 2,
      },
      {
        question: "How do you say 'I am fine' in Spanish?",
        choices: ['estoy bien', 'estoy mal', 'gracias', 'buenas noches'],
        type: 'MCQs',
        correctAnswer: 1,
      },
      
      // 20 Fill in the Blanks

      {
        question: "Hola, ¿cómo _______? (Hello, how are you?)",
        choices: ["estás", "estoy", "eres", "somos"],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Yo _______ bien, gracias. (I am fine, thank you.)",
        choices: ["estoy", "eres", "somos", "estás"],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Me llamo Juan, ¿y tú _______? (My name is Juan, and you?)",
        choices: ["cómo", "tú", "yo", "cómo te llamas"],
        type: 'FillInTheBlanks',
        correctAnswer: 4
      },
      {
        question: "Yo _______ de España. (I am from Spain.)",
        choices: ["soy", "eres", "somos", "es"],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "¿_______ español? (Do you speak Spanish?)",
        choices: ["hablas", "hablo", "hablan", "hablas tú"],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Sí, yo _______ español. (Yes, I speak Spanish.)",
        choices: ["hablo", "hablas", "habla", "hablamos"],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Gracias, _______ luego. (Thank you, see you later.)",
        choices: ["hasta", "adiós", "nos", "después"],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "_________ por favor. (Water, please.)",
        choices: ["agua", "tierra", "fuego", "aire"],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "No, _______ entiendo. (No, I don’t understand.)",
        choices: ["no", "sí", "tal vez", "ahora"],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "_______ de dónde eres. (I know where you are from.)",
        choices: ["sé", "sabes", "sabe", "sabemos"],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Nosotros _______ en la playa. (We are at the beach.)",
        choices: ["estamos", "soy", "somos", "es"],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Ella _______ profesora. (She is a teacher.)",
        choices: ["es", "soy", "son", "estás"],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "¿Dónde _______ tú? (Where are you?)",
        choices: ["estás", "eres", "soy", "es"],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Ellos _______ en casa. (They are at home.)",
        choices: ["están", "estás", "estamos", "soy"],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Nosotros _______ a la escuela. (We are going to school.)",
        choices: ["vamos", "va", "voy", "van"],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "¿Cómo _______ tú? (How are you?)",
        choices: ["estás", "es", "soy", "somos"],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Yo _______ de México. (I am from Mexico.)",
        choices: ["soy", "eres", "es", "somos"],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Ellos _______ contentos. (They are happy.)",
        choices: ["están", "es", "soy", "somos"],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "Nosotros _______ amigos. (We are friends.)",
        choices: ["somos", "soy", "eres", "es"],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        question: "_______ usted? (How are you?)",
        choices: ["cómo está", "cómo eres", "cómo soy", "cómo estamos"],
        type: 'FillInTheBlanks',
        correctAnswer: 1
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Hola", "rightId": 1 },
            "right": { "word": "Buenos días", "rightId": 3 }
          },
          {
            "left": { "word": "Señorita", "rightId": 2 },
            "right": { "word": "Hola", "rightId": 1 }
          },
          {
            "left": { "word": "Señor", "rightId": 3 },
            "right": { "word": "Señorita", "rightId": 2 }
          },
          {
            "left": { "word": "Adiós", "rightId": 4 },
            "right": { "word": "Mucho gusto", "rightId": 5 }
          },
          {
            "left": { "word": "Mucho gusto", "rightId": 5 },
            "right": { "word": "Adiós", "rightId": 4 }
          },
          {
            "left": { "word": "Hola", "rightId": 6 },
            "right": { "word": "Buenas noches", "rightId": 8 }
          },
          {
            "left": { "word": "Hasta luego", "rightId": 7 },
            "right": { "word": "Hola", "rightId": 6 }
          },
          {
            "left": { "word": "Buenas noches", "rightId": 8 },
            "right": { "word": "Hasta luego", "rightId": 7 }
          },
          {
            "left": { "word": "Hasta mañana", "rightId": 9 },
            "right": { "word": "Buenas tardes", "rightId": 10 }
          },
          {
            "left": { "word": "Buenas tardes", "rightId": 10 },
            "right": { "word": "Hasta mañana", "rightId": 9 }
          }
        ]
      }
      
    ]
  }
];
