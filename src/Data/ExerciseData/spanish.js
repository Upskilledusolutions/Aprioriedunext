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
  },
  {
    quiz: '4',
    name: 'Spanish Exercise - 4',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs

      {
        "question": "¿Cuál es la palabra para 'sister' en español?",
        "choices": ["Hermana", "Madre", "Tía", "Abuela"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "¿Cómo se dice 'father' en español?",
        "choices": ["Padre", "Hermano", "Tío", "Abuelo"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "¿Qué significa 'sobrino' en inglés?",
        "choices": ["Nephew", "Uncle", "Cousin", "Grandson"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "¿Cómo se llama la esposa de tu padre?",
        "choices": ["Madre", "Hermana", "Abuela", "Tía"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "What is the correct present tense form of 'comer' (to eat) for 'yo'?",
        "choices": ["Como", "Comes", "Comemos", "Coméis"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "What is the present tense of 'escribir' (to write) for 'nosotros'?",
        "choices": ["Escriben", "Escribe", "Escribimos", "Escribes"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "Which form of 'hablar' (to speak) is used for 'tú'?",
        "choices": ["Habla", "Hablas", "Hablan", "Hablamos"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What is the present tense of 'vivir' (to live) for 'ellos'?",
        "choices": ["Vive", "Vivimos", "Viven", "Vivís"],
        "type": "MCQs",
        "correctAnswer": 3
    },
    {
        "question": "What is the correct form of 'leer' (to read) for 'yo'?",
        "choices": ["Leemos", "Leo", "Lees", "Leen"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What is the present tense of 'tener' (to have) for 'vosotros'?",
        "choices": ["Tenéis", "Tienen", "Tienes", "Tengo"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "What is the pronoun for 'they' (feminine) in Spanish?",
        "choices": ["Ellos", "Ellas", "Ustedes", "Vosotros"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What is the pronoun for 'we' (masculine)?",
        "choices": ["Nosotros", "Nosotras", "Vosotros", "Ellos"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "Which pronoun is used for 'you' (informal, singular)?",
        "choices": ["Tú", "Usted", "Vosotros", "Ellos"],
        "type": "MCQs",
        "correctAnswer": 1
    },
    {
        "question": "What is the pronoun for 'he'?",
        "choices": ["Ella", "Él", "Tú", "Usted"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "What is the pronoun for 'you' (formal, singular)?",
        "choices": ["Tú", "Usted", "Ellos", "Nosotros"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
        "question": "Which pronoun is used for 'she'?",
        "choices": ["Él", "Ella", "Usted", "Ellos"],
        "type": "MCQs",
        "correctAnswer": 2
    },
    {
      "question": "Which pronoun is used for 'we' (feminine)?",
      "choices": ["Nosotros", "Ellas", "Nosotras", "Tú"],
      "type": "MCQs",
      "correctAnswer": 3
  },
  {
    "question": "What is the pronoun for 'I' in Spanish?",
    "choices": ["Tú", "Usted", "Yo", "Nosotros"],
    "type": "MCQs",
    "correctAnswer": 3
},
{
  "question": "What is the correct pronoun for 'they' (masculine)?",
  "choices": ["Ellas", "Ellos", "Vosotros", "Nosotros"],
  "type": "MCQs",
  "correctAnswer": 2
},
{
  "question": "What is the pronoun for 'you' (informal, plural)?",
  "choices": ["Tú", "Usted", "Vosotros", "Ellas"],
  "type": "MCQs",
  "correctAnswer": 3
},
      
      // 20 Fill in the Blanks

      {
        "question": "Mi ______ (brother) es muy alto.",
        "choices": ["hermano", "madre", "padres", "hermana"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "La ______ (mother) de Juan es muy simpática.",
        "choices": ["madre", "hermano", "padres", "hermana"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Mis ______ (parents) viven en Madrid.",
        "choices": ["padres", "hermano", "madre", "hermana"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ella tiene una ______ (sister) mayor.",
        "choices": ["hermana", "madre", "padres", "hermano"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Yo ______ (to eat) en casa todos los días.",
        "choices": ["como", "comes", "comemos", "coméis"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Nosotros ______ (to go) al parque los domingos.",
        "choices": ["vamos", "vas", "van", "voy"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Tú ______ (to speak) español muy bien.",
        "choices": ["hablas", "hablo", "habla", "hablan"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Ellos siempre ______ (to study) en la biblioteca.",
        "choices": ["estudian", "estudio", "estudia", "estudias"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "Vosotros ______ (to run) por la mañana.",
        "choices": ["corréis", "corren", "corremos", "corro"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "María ______ (to write) cartas a su abuela.",
        "choices": ["escribe", "escribo", "escribes", "escriben"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (He) es muy trabajador.",
        "choices": ["Él", "Yo", "Nosotros", "Ellos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (I) siempre ayudo a mi familia.",
        "choices": ["Yo", "Él", "Nosotros", "Ellos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (We) vivimos en una casa grande.",
        "choices": ["Nosotros/Nosotras", "Yo", "Ellos", "Tú"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (They - masculine) están jugando al fútbol.",
        "choices": ["Ellos", "Ellas", "Nosotros", "Tú"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (You - informal, singular) tienes un perro bonito.",
        "choices": ["Tú", "Él", "Nosotros", "Ellos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (She) es mi amiga.",
        "choices": ["Ella", "Él", "Tú", "Usted"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (They - feminine) son mis compañeras de clase.",
        "choices": ["Ellas", "Ellos", "Nosotros", "Tú"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (You - formal, singular) es muy amable.",
        "choices": ["Usted", "Tú", "Él", "Nosotros"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (We - feminine) vamos a la playa mañana.",
        "choices": ["Nosotras", "Nosotros", "Ellos", "Tú"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
    {
        "question": "______ (You all - formal, plural) trabajan mucho.",
        "choices": ["Ustedes", "Ellos", "Nosotros", "Tú"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
    },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Madre", "rightId": 1 },
            "right": { "word": "Sister", "rightId": 5 }
          },
          {
            "left": { "word": "Nosotros", "rightId": 2 },
            "right": { "word": "You all (formal)", "rightId": 4 }
          },
          {
            "left": { "word": "Ellos", "rightId": 3 },
            "right": { "word": "Father", "rightId": 6 }
          },
          {
            "left": { "word": "Tú", "rightId": 4 },
            "right": { "word": "She", "rightId": 9 }
          },
          {
            "left": { "word": "Hermana", "rightId": 5 },
            "right": { "word": "We (masculine)", "rightId": 2 }
          },
          {
            "left": { "word": "Padre", "rightId": 6 },
            "right": { "word": "You (informal)", "rightId": 8 }
          },
          {
            "left": { "word": "Él", "rightId": 7 },
            "right": { "word": "They (masculine)", "rightId": 3 }
          },
          {
            "left": { "word": "Ustedes", "rightId": 8 },
            "right": { "word": "He", "rightId": 7 }
          },
          {
            "left": { "word": "Ella", "rightId": 9 },
            "right": { "word": "Mother", "rightId": 1 }
          },
          {
            "left": { "word": "Vosotros", "rightId": 10 },
            "right": { "word": "You all (informal)", "rightId": 10 }
          }
        ]
      }
      
    ]
  },
  {
    quiz: '5',
    name: 'Spanish Exercise - 5',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs

      {
        "question": "¿Cómo se dice 'cousin' en español (feminine)?",
        "choices": ["Hermana", "Prima", "Tía", "Amiga"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "¿Qué significa 'abuelo' en inglés?",
        "choices": ["Grandfather", "Uncle", "Brother", "Father"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿Cuál es el término en español para 'daughter-in-law'?",
        "choices": ["Hija", "Suegra", "Cuñada", "Nuera"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "¿Qué palabra describe el 'padre de tu esposa'?",
        "choices": ["Sobrino", "Yerno", "Suegro", "Padrino"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "¿Cuál es la conjugación correcta del verbo 'beber' (to drink) para 'nosotros'?",
        "choices": ["Bebemos", "Bebéis", "Bebes", "Beben"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿Qué conjugación corresponde a 'él' para el verbo 'comer' (to eat)?",
        "choices": ["Coma", "Comemos", "Come", "Coméis"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "¿Qué verbo en presente usa 'yo' para 'trabajar' (to work)?",
        "choices": ["Trabajo", "Trabajamos", "Trabajas", "Trabaja"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿Qué forma de 'vivir' corresponde a 'tú'?",
        "choices": ["Vivo", "Vives", "Vive", "Vivimos"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "¿Cuál es la forma correcta del verbo 'escribir' para 'vosotros'?",
        "choices": ["Escribes", "Escribimos", "Escribís", "Escriben"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "¿Cómo se conjuga 'entender' (to understand) para 'ella'?",
        "choices": ["Entiende", "Entendemos", "Entiendes", "Entienden"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿Qué pronombre corresponde a 'we' (feminine) en español?",
        "choices": ["Nosotros", "Nosotras", "Vosotros", "Ellas"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "¿Qué pronombre se usa para 'they' (masculine)?",
        "choices": ["Ellos", "Vosotros", "Ellas", "Nosotros"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿Qué pronombre se usa para 'you all' (informal, masculine)?",
        "choices": ["Ellas", "Vosotros", "Ellos", "Nosotras"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "¿Qué pronombre se usa para 'he' en español?",
        "choices": ["Ella", "Ello", "Él", "Yo"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "¿Qué pronombre corresponde a 'I' en español?",
        "choices": ["Yo", "Tú", "Nosotros", "Él"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿Qué pronombre corresponde a 'you' (formal)?",
        "choices": ["Usted", "Tú", "Ellos", "Nosotros"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿Qué pronombre se usa para 'she' en español?",
        "choices": ["Él", "Nosotros", "Ella", "Ellos"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "¿Qué pronombre corresponde a 'they' (feminine)?",
        "choices": ["Ellos", "Vosotros", "Ellas", "Nosotros"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "¿Cómo se dice 'twenty-three' en español?",
        "choices": ["Treinta y tres", "Veintitrés", "Veintiocho", "Veintiuno"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "¿Qué número es 'cuarenta y siete'?",
        "choices": ["47", "27", "37", "17"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      
      // 20 Fill in the Blanks

      {
        "question": "Mi ______ (uncle) vive en Barcelona.",
        "choices": ["tío", "hermano", "padre", "primo"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "El hijo de mi hermana es mi ______ (nephew).",
        "choices": ["sobrino", "hijo", "tío", "primo"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Su ______ (mother) trabaja en un hospital.",
        "choices": ["madre", "abuela", "hermana", "tía"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "La ______ (granddaughter) de mi abuela se llama Carla.",
        "choices": ["nieta", "hija", "prima", "sobrina"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Yo ______ (to write) correos electrónicos todos los días.",
        "choices": ["escribo", "leo", "hablo", "corro"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ellos ______ (to speak) inglés y español.",
        "choices": ["hablan", "escriben", "comen", "cantan"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nosotros ______ (to live) en una casa grande.",
        "choices": ["vivimos", "escribimos", "hablamos", "jugamos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Tú ______ (to understand) la lección muy bien.",
        "choices": ["entiendes", "escribes", "comes", "vives"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "¿______ (to run) todos los días, Juan?",
        "choices": ["Corres", "Lees", "Hablas", "Comes"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ella ______ (to read) muchos libros en su tiempo libre.",
        "choices": ["lee", "corre", "vive", "come"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "______ (They - feminine) van a la escuela.",
        "choices": ["Ellas", "Nosotras", "Vosotras", "Ellos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "______ (You - formal) es profesor.",
        "choices": ["Usted", "Tú", "Nosotros", "Ellos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "______ (We - masculine) jugamos al fútbol todos los fines de semana.",
        "choices": ["Nosotros", "Ellos", "Vosotros", "Ellas"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "______ (I) estudio en la universidad.",
        "choices": ["Yo", "Él", "Ella", "Nosotros"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "______ (She) no tiene hermanos.",
        "choices": ["Ella", "Él", "Nosotros", "Usted"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "______ (You all - informal) siempre llegáis tarde.",
        "choices": ["Vosotros", "Ellos", "Nosotros", "Ellas"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "______ (He) es mi amigo.",
        "choices": ["Él", "Ella", "Tú", "Yo"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "______ (We - feminine) cantamos en el coro.",
        "choices": ["Nosotras", "Ellas", "Vosotras", "Ellos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Hoy cumplo ______ (twenty-eight) años.",
        "choices": ["veintiocho", "veintinueve", "veintisiete", "treinta"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Mi hermana tiene ______ (forty-five) años.",
        "choices": ["cuarenta y cinco", "cuarenta y cuatro", "cuarenta y seis", "cincuenta"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Él", "rightId": 1 },
            "right": { "word": "You all (formal)", "rightId": 5 }
          },
          {
            "left": { "word": "Nosotros", "rightId": 2 },
            "right": { "word": "She", "rightId": 9 }
          },
          {
            "left": { "word": "Ellas", "rightId": 3 },
            "right": { "word": "Forty", "rightId": 6 }
          },
          {
            "left": { "word": "Tú", "rightId": 4 },
            "right": { "word": "They (feminine)", "rightId": 3 }
          },
          {
            "left": { "word": "Ustedes", "rightId": 5 },
            "right": { "word": "Twenty-five", "rightId": 7 }
          },
          {
            "left": { "word": "Cuarenta", "rightId": 6 },
            "right": { "word": "He", "rightId": 1 }
          },
          {
            "left": { "word": "Veinticinco", "rightId": 7 },
            "right": { "word": "You (informal)", "rightId": 4 }
          },
          {
            "left": { "word": "Nosotros", "rightId": 8 },
            "right": { "word": "We (masculine)", "rightId": 8 }
          },
          {
            "left": { "word": "Ella", "rightId": 9 },
            "right": { "word": "They (feminine)", "rightId": 1 }
          },
          {
            "left": { "word": "Cuarenta y dos", "rightId": 10 },
            "right": { "word": "Forty-two", "rightId": 10 }
          }
        ]
      }
      
    ]
  }
];
