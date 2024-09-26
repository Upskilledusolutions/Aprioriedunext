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
  },
  {
    quiz: '2',
    name: 'Spanish Exercise - 2',
    level: 'Easy',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs

      {
        "question": "What is the Spanish word for the number 'one'?",
        "choices": ["Uno", "Dos", "Tres", "Cuatro"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "How do you say the number 'four' in Spanish?",
        "choices": ["Cinco", "Cuatro", "Tres", "Seis"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the Spanish word for the letter 'A'?",
        "choices": ["Efe", "A", "Be", "Ce"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the Spanish word for the number 'ten'?",
        "choices": ["Nueve", "Diez", "Ocho", "Doce"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say the number 'fifteen' in Spanish?",
        "choices": ["Quince", "Catorce", "Dieciséis", "Veinte"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the Spanish word for the letter 'B'?",
        "choices": ["A", "Be", "Ce", "De"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say the number 'seven' in Spanish?",
        "choices": ["Cinco", "Seis", "Siete", "Ocho"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What is the Spanish word for the letter 'C'?",
        "choices": ["Efe", "Ce", "Be", "De"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say the number 'eleven' in Spanish?",
        "choices": ["Doce", "Trece", "Once", "Catorce"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What is the Spanish word for the number 'twenty'?",
        "choices": ["Diecinueve", "Dieciocho", "Veinte", "Veintidós"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "How do you say the number 'three' in Spanish?",
        "choices": ["Uno", "Tres", "Cuatro", "Dos"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the Spanish word for the letter 'D'?",
        "choices": ["Ce", "De", "A", "Efe"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say the number 'sixteen' in Spanish?",
        "choices": ["Dieciseis", "Quince", "Dieciséis", "Catorce"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What is the Spanish word for the letter 'E'?",
        "choices": ["E", "Be", "Ce", "Efe"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "How do you say the number 'eighteen' in Spanish?",
        "choices": ["Diecisiete", "Dieciocho", "Quince", "Veinte"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the Spanish word for the number 'five'?",
        "choices": ["Seis", "Cinco", "Siete", "Cuatro"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the Spanish word for the letter 'F'?",
        "choices": ["A", "E", "Efe", "Ce"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "How do you say the number 'nine' in Spanish?",
        "choices": ["Nueve", "Diez", "Ocho", "Siete"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the Spanish word for the letter 'G'?",
        "choices": ["Ge", "Be", "De", "Ce"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "How do you say the number 'two' in Spanish?",
        "choices": ["Uno", "Tres", "Cuatro", "Dos"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      
      // 20 Fill in the Blanks

      {
        "question": "The letter 'B' in Spanish is called ______.",
        "choices": ["be", "ce", "de", "e"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The number 1 in Spanish is ______.",
        "choices": ["uno", "dos", "tres", "cuatro"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The letter 'J' in Spanish is pronounced as ______.",
        "choices": ["jota", "ge", "ka", "ve"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The number 2 in Spanish is ______.",
        "choices": ["dos", "does", "tres", "cuatro"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The letter 'Ñ' in Spanish is called ______.",
        "choices": ["eñe", "ene", "ele", "eme"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The number 3 in Spanish is ______.",
        "choices": ["tres", "dos", "trees", "cuatro"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The letter 'C' before 'e' or 'i' is pronounced like ______.",
        "choices": ["th", "k", "ch", "s"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The number 4 in Spanish is ______.",
        "choices": ["cuatro", "dos", "tres", "cueatro"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The letter 'H' in Spanish is ______ (silent or pronounced).",
        "choices": ["silent", "pronounced", "soft", "hard"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The number 5 in Spanish is ______.",
        "choices": ["cinco", "dos", "cincoe", "seis"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The letter 'R' in Spanish has a ______ sound.",
        "choices": ["rolled", "soft", "hard", "silent"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The number 6 in Spanish is ______.",
        "choices": ["seis", "seeis", "siete", "ocho"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The letter 'G' before 'e' or 'i' is pronounced as ______.",
        "choices": ["heh", "geh", "hah", "jeh"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The number 7 in Spanish is ______.",
        "choices": ["siete", "seis", "ocho", "nueve"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The letter 'V' in Spanish is pronounced as ______.",
        "choices": ["uve", "ve", "be", "ge"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The number 8 in Spanish is ______.",
        "choices": ["ocho", "nueve", "diez", "once"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The letter 'LL' in Spanish is pronounced as ______.",
        "choices": ["ye", "elle", "ele", "elleh"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The number 9 in Spanish is ______.",
        "choices": ["nueve", "nuevee", "diez", "once"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The letter 'Z' in Spanish is pronounced like ______.",
        "choices": ["th", "s", "z", "ch"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "The number 10 in Spanish is ______.",
        "choices": ["diez", "once", "doce", "trece"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "CATORCE", "rightId": 1 },
            "right": { "word": "SEVENTEEN", "rightId": 10 }
          },
          {
            "left": { "word": "OCHO", "rightId": 2 },
            "right": { "word": "D", "rightId": 9 }
          },
          {
            "left": { "word": "JOTA", "rightId": 3 },
            "right": { "word": "FOURTEEN", "rightId": 8 }
          },
          {
            "left": { "word": "CINCO", "rightId": 4 },
            "right": { "word": "SIX", "rightId": 7 }
          },
          {
            "left": { "word": "DIECIOCHO", "rightId": 5 },
            "right": { "word": "H", "rightId": 6 }
          },
          {
            "left": { "word": "HACHE", "rightId": 6 },
            "right": { "word": "EIGHTEEN", "rightId": 5 }
          },
          {
            "left": { "word": "SEIS", "rightId": 7 },
            "right": { "word": "FIVE", "rightId": 4 }
          },
          {
            "left": { "word": "CATORCE", "rightId": 8 },
            "right": { "word": "J", "rightId": 3 }
          },
          {
            "left": { "word": "DE", "rightId": 9 },
            "right": { "word": "EIGHT", "rightId": 2 }
          },
          {
            "left": { "word": "DIECISIETE", "rightId": 10 },
            "right": { "word": "FOURTEEN", "rightId": 1 }
          }
        ]
      }
      
    ]
  },
  {
    quiz: '3',
    name: 'Spanish Exercise - 3',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs

      {
        "question": "What is the Spanish word for \"school\"?",
        "choices": ["Casa", "Escuela", "Biblioteca", "Oficina"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What does \"cinco\" mean in English?",
        "choices": ["Five", "Six", "Seven", "Eight"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which color is “amarillo” in English?",
        "choices": ["Green", "Yellow", "Blue", "Black"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the Spanish word for \"friend\"?",
        "choices": ["Amigo", "Enemigo", "Compañero", "Maestro"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What does \"treinta\" mean in English?",
        "choices": ["Twenty", "Thirty", "Forty", "Fifty"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which of the following means \"to write\" in Spanish?",
        "choices": ["Leer", "Escribir", "Hablar", "Jugar"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the meaning of \"triste\"?",
        "choices": ["Happy", "Sad", "Angry", "Excited"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is \"sesenta\" in English?",
        "choices": ["Sixty", "Seventy", "Eighty", "Ninety"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which word means \"food\" in Spanish?",
        "choices": ["Agua", "Comida", "Sopa", "Fruta"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What does \"bienvenido\" mean?",
        "choices": ["Goodbye", "Welcome", "Thank you", "Please"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the Spanish word for \"family\"?",
        "choices": ["Casa", "Familia", "Grupo", "Comunidad"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What does \"ocho\" mean in English?",
        "choices": ["Six", "Eight", "Ten", "Twelve"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which of the following means \"to listen\" in Spanish?",
        "choices": ["Mirar", "Oír", "Hablar", "Jugar"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the meaning of \"feliz\"?",
        "choices": ["Happy", "Busy", "Tired", "Sad"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What does \"nieve\" mean in English?",
        "choices": ["Snow", "Rain", "Wind", "Sun"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which word means \"city\" in Spanish?",
        "choices": ["Pueblo", "Ciudad", "Campo", "Aldea"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is \"quince\" in English?",
        "choices": ["Twelve", "Thirteen", "Fourteen", "Fifteen"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "What does \"lavar\" mean?",
        "choices": ["To cook", "To clean", "To dance", "To run"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the Spanish word for \"teacher\"?",
        "choices": ["Estudiante", "Maestro", "Amigo", "Escritor"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What does \"salud\" mean?",
        "choices": ["Health", "Love", "Happiness", "Money"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      
      // 20 Fill in the Blanks

      {
        "question": "El cielo es ______ (gray) hoy.",
        "choices": ["gris", "azul", "blanco", "negro"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ella tiene ______ (three) gatos.",
        "choices": ["tres", "dos", "e", "cuatro"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Voy a la tienda a ______ (buy) pan.",
        "choices": ["comprar", "vender", "pagar", "buscar"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Mi color favorito es ______ (yellow).",
        "choices": ["amarillo", "e", "verde", "azul"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Los niños ______ (to play) en el parque.",
        "choices": ["juegan", "corren", "comen", "saltan"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Tienes ______ (four) libros en tu mochila.",
        "choices": ["cuatro", "tres", "e", "cinco"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Me gusta ______ (to dance) salsa.",
        "choices": ["bailar", "cantar", "escuchar", "ver"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "La ______ (color) de su vestido es rosa.",
        "choices": ["color", "talla", "forma", "textura"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "¿Dónde está mi ______ (phone)?",
        "choices": ["teléfono", "coche", "llave", "bolso"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Voy a ______ (watch) una película esta noche.",
        "choices": ["ver", "escuchar", "leer", "comprar"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "El tren sale a las ______ (five) de la tarde.",
        "choices": ["cinco", "e", "seis", "siete"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Mis amigos son muy ______ (funny).",
        "choices": ["divertidos", "serios", "tristes", "aburridos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "La fruta que más me gusta es la ______ (banana).",
        "choices": ["banana", "naranja", "e", "pera"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Necesito ______ (to study) para el examen.",
        "choices": ["estudiar", "trabajar", "leer", "escribir"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "La casa tiene ______ (ten) ventanas.",
        "choices": ["diez", "siete", "ocho", "e"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Me siento ______ (tired) después de trabajar.",
        "choices": ["cansado", "e", "emocionado", "tranquilo"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "La ______ (weather) es muy agradable en primavera.",
        "choices": ["clima", "temperatura", "temporada", "estación"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "El libro está sobre la ______ (table).",
        "choices": ["mesa", "silla", "cama", "puerta"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Mi hermana tiene ______ (eight) años.",
        "choices": ["ocho", "e", "nueve", "diez"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Es importante ______ (to rest) después de hacer ejercicio.",
        "choices": ["descansar", "comer", "beber", "jugar"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Buenos días", "rightId": 1 },
            "right": { "word": "Thank you", "rightId": 2 }
          },
          {
            "left": { "word": "Por favor", "rightId": 2 },
            "right": { "word": "Fifty", "rightId": 4 }
          },
          {
            "left": { "word": "Verde", "rightId": 3 },
            "right": { "word": "Goodbye", "rightId": 1 }
          },
          {
            "left": { "word": "Cincuenta", "rightId": 4 },
            "right": { "word": "Green", "rightId": 3 }
          },
          {
            "left": { "word": "Gato", "rightId": 5 },
            "right": { "word": "Yes", "rightId": 8 }
          },
          {
            "left": { "word": "¿Qué tal?", "rightId": 6 },
            "right": { "word": "No", "rightId": 9 }
          },
          {
            "left": { "word": "Hasta mañana", "rightId": 7 },
            "right": { "word": "Health", "rightId": 10 }
          },
          {
            "left": { "word": "Sí", "rightId": 8 },
            "right": { "word": "How's it going?", "rightId": 6 }
          },
          {
            "left": { "word": "No", "rightId": 9 },
            "right": { "word": "See you tomorrow", "rightId": 7 }
          },
          {
            "left": { "word": "Salud", "rightId": 10 },
            "right": { "word": "Cat", "rightId": 5 }
          }
        ]
      }
      
    ]
  }
];
