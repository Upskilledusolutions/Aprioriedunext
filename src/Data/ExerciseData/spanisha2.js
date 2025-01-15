export const quiz = [
  {
    quiz: '1',
    name: 'Spanish Exercise - 1 (A2)',
    level: 'Easy',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs
      {
        "question": "What is the reflexive pronoun for 'you' (informal)?",
        "choices": ["me", "se", "te", "nos"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What does 'despertarse' mean?",
        "choices": ["To get up", "To wake up", "To wash oneself", "To dress oneself"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say 'We wash ourselves' in Spanish?",
        "choices": ["Nos lavamos", "Se lavan", "Me lavo", "Te lavas"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the reflexive pronoun for 'she'?",
        "choices": ["me", "se", "te", "nos"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say 'They get dressed' in Spanish?",
        "choices": ["Ellos se visten", "Ellos se levantan", "Ellos se bañan", "Ellos se cepillan"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which verb means 'to go to bed'?",
        "choices": ["levantarse", "acostarse", "ducharse", "despertarse"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say 'You (formal) relax' in Spanish?",
        "choices": ["Te relajas", "Se relaja", "Nos relajamos", "Me relajo"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the reflexive pronoun for 'we'?",
        "choices": ["os", "se", "me", "nos"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "How do you say 'I brush my teeth' in Spanish?",
        "choices": ["Me cepillo los dientes", "Te cepillas los dientes", "Se cepilla los dientes", "Nos cepillamos los dientes"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What does 'vestirse' mean?",
        "choices": ["To wash", "To dress", "To relax", "To eat"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      
      // 20 Fill in the Blanks

      {
        "question": "Yo ______ (I wake up) a las seis cada mañana.",
        "choices": ["me despierto", "me despiertas", "me despierta", "me despiertan"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Tú ______ (you wash) las manos antes de comer.",
        "choices": ["te lavas", "te lavo", "te lavan", "te lavamos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ella ______ (dresses) rápidamente para la fiesta.",
        "choices": ["se viste", "se visten", "se vistes", "se visto"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nosotros ______ (we went to bed) temprano durante la semana.",
        "choices": ["nos acostamos", "nos acuesto", "nos acuestan", "nos acuestas"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ellos ______ (they brush) los dientes después de desayunar.",
        "choices": ["se cepillan", "se cepillo", "se cepillas", "se cepillamos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Juan ______ (he combs his hair) antes de salir.",
        "choices": ["se peina", "se peinan", "se peino", "se peinas"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nosotros ______ (we make up) para la celebración.",
        "choices": ["nos maquillamos", "nos maquillo", "nos maquillas", "nos maquillan"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Tú ______ (you shower) después de hacer ejercicio.",
        "choices": ["te duchas", "te ducha", "te duchan", "te duchamos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ellas ______ (they relax) en el sofá por la tarde.",
        "choices": ["se relajan", "se relajo", "se relaja", "se relajas"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Yo ______ (leave) a la cama a las diez.",
        "choices": ["me voy", "me va", "me vas", "me van"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },

      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Me despierto a las siete.", "rightId": 1 },
            "right": { "word": "I shower in the morning.", "rightId": 3 }
          },
          {
            "left": { "word": "Me levanto rápidamente.", "rightId": 2 },
            "right": { "word": "I brush my teeth.", "rightId": 5 }
          },
          {
            "left": { "word": "Me ducho en la mañana.", "rightId": 3 },
            "right": { "word": "I get dressed.", "rightId": 4 }
          },
          {
            "left": { "word": "Me visto después de ducharme.", "rightId": 4 },
            "right": { "word": "I wake up at seven.", "rightId": 1 }
          },
          {
            "left": { "word": "Me cepillo los dientes.", "rightId": 5 },
            "right": { "word": "I get up quickly.", "rightId": 2 }
          },
         
        ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          
          {
            "left": { "word": "Me peino frente al espejo.", "rightId": 6 },
            "right": { "word": "I put on makeup before going out.", "rightId": 7 }
          },
          {
            "left": { "word": "Me maquillo antes de salir.", "rightId": 7 },
            "right": { "word": "I wash my face.", "rightId": 8 }
          },
          {
            "left": { "word": "Me lavo la cara.", "rightId": 8 },
            "right": { "word": "I go to bed at ten.", "rightId": 9 }
          },
          {
            "left": { "word": "Me acuesto a las diez.", "rightId": 9 },
            "right": { "word": "I fall asleep right away.", "rightId": 10 }
          },
          {
            "left": { "word": "Me duermo enseguida.", "rightId": 10 },
            "right": { "word": "I comb my hair.", "rightId": 6 }
          }
        ]
      }
      
    ]
  },
  {
    quiz: '2',
    name: 'Spanish Exercise - 2 (A2)',
    level: 'Easy',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs
      {
        "question": "La montaña más __________ de todas es el Everest.",
        "choices": ["alto", "alta", "más alto", "alta de"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Este examen es __________ que el anterior.",
        "choices": ["más difícil", "difícil", "tan difícil", "más fácil"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Ella es __________ estudiante de la clase.",
        "choices": ["el mejor", "la mejor", "lo mejor", "mejor"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Mi carro es __________ caro que el tuyo.",
        "choices": ["tanto", "menos", "más", "igual"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "El perro de Ana es __________ de todos.",
        "choices": ["el más grande", "la más grande", "grande", "grande más"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Pedro es __________ trabajador que Luis.",
        "choices": ["tan", "más", "el más", "poco"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Esta es la __________ pizza que he probado.",
        "choices": ["peor", "peores", "más peor", "más buena"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Marta es __________ rápida que su hermana.",
        "choices": ["más", "menos", "tan", "el más"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Este libro es __________ interesante que el otro.",
        "choices": ["más", "menos", "tan", "mejor"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Mi coche es __________ que el tuyo.",
        "choices": ["mejor", "más bueno", "el mejor", "tan mejor"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      
      // 20 Fill in the Blanks

      {
        "question": "Mi hermana es ______ (more intelligent) que yo.",
        "choices": ["más inteligente", "1", "2", "3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Este restaurante es el ______ (best) de la ciudad.",
        "choices": ["mejor", "1", "2", "3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Juan corre ______ (faster) que Pedro.",
        "choices": ["más rápido", "1", "2", "3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Esta película es ______ (less interesting) que la anterior.",
        "choices": ["menos interesante", "1", "2", "3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "El perro de Marta es ______ (bigger) que el gato de Luis.",
        "choices": ["más grande", "1", "2", "3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Este verano ha sido el ______ (hottest) en los últimos diez años.",
        "choices": ["más caluroso", "1", "2", "3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Mi casa es ______ (smaller) que la tuya.",
        "choices": ["más pequeña", "1", "2", "3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ana es la ______ (tallest) de la clase.",
        "choices": ["más alta", "1", "2", "3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Esta tarea es ______ (easier) que la de ayer.",
        "choices": ["más fácil", "1", "2", "3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Luis es el ______ (most generous) de todos.",
        "choices": ["más generoso", "1", "2", "3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },

      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "más rápido que", "rightId": 1 },
            "right": { "word": "the best", "rightId": 4 }
          },
          {
            "left": { "word": "menos caro que", "rightId": 2 },
            "right": { "word": "bigger than", "rightId": 5 }
          },
          {
            "left": { "word": "tan inteligente como", "rightId": 3 },
            "right": { "word": "faster than", "rightId": 1 }
          },
          {
            "left": { "word": "el mejor", "rightId": 4 },
            "right": { "word": "as smart as", "rightId": 3 }
          },
          {
            "left": { "word": "más grande que", "rightId": 5 },
            "right": { "word": "less expensive than", "rightId": 2 }
          },
         
        ]
      },
       {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
         
          {
            "left": { "word": "la más alta", "rightId": 6 },
            "right": { "word": "worst", "rightId": 7 }
          },
          {
            "left": { "word": "el peor", "rightId": 7 },
            "right": { "word": "the kindest", "rightId": 10 }
          },
          {
            "left": { "word": "menos interesante que", "rightId": 8 },
            "right": { "word": "the highest", "rightId": 6 }
          },
          {
            "left": { "word": "el más difícil", "rightId": 9 },
            "right": { "word": "less interesting than", "rightId": 8 }
          },
          {
            "left": { "word": "la más amable", "rightId": 10 },
            "right": { "word": "the most difficult", "rightId": 9 }
          }
        ]
      }
    ]
  },
  {
    quiz: '3',
    name: 'Spanish Exercise - 3 (A2)',
    level: 'Easy',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs
      {
        "question": "What is the correct translation of 'I would like to travel to Spain'?",
        "choices": ["Me gustaría viajar a España.", "Me gustar viajar a España.", "Me gustaría viajo a España.", "Me gustarás viajar a España."],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which of the following sentences is a hypothetical situation?",
        "choices": ["Compré un coche el año pasado.", "Si tuviera un coche, conduciría a la playa.", "¿Podrías traerme agua, por favor?", "Estoy estudiando para el examen de mañana."],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Complete the sentence: Si yo fuera rico, ______ una mansión en Madrid.",
        "choices": ["compraré", "compraría", "compro", "comprar"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which sentence demonstrates a polite request?",
        "choices": ["¿Podrías cerrar la ventana, por favor?", "Si pudiera, visitaría París.", "Él compraría una casa si ganara dinero.", "Me gustaría vivir en una gran ciudad."],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which verb is irregular in the conditional tense?",
        "choices": ["Hablar", "Tener", "Comer", "Beber"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say 'Could we go to the museum tomorrow?' in Spanish?",
        "choices": ["Podríamos ir al museo mañana.", "Podemos ir al museo mañana.", "Podiamos ir al museo mañana.", "Podremos ir al museo mañana."],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What does 'Si yo fuera tú, estudiaría más' mean?",
        "choices": ["If I were you, I would study more.", "If I was you, I will study more.", "If I am you, I will study more.", "If I will be you, I will study more."],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Complete the sentence: ¿______ ayudarme con este proyecto, por favor?",
        "choices": [ "Puedo", "Podrías", "Podrá", "Podrían"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the conditional form of the verb 'ir' for 'nosotros'?",
        "choices": [ "Vamos", "Íbamos", "Iremos","Iríamos"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "Choose the sentence that uses the conditional correctly.",
        "choices": ["Me gusta aprender a tocar el piano.", "Gustaría aprender a tocar el piano.","Me gustaría aprender a tocar el piano.", "Me gustarás aprender a tocar el piano."],
        "type": "MCQs",
        "correctAnswer": 3
      },
      
      // 20 Fill in the Blanks

      {
        "question": "Si tuviera más dinero, ______ (comprar) una casa cerca del mar.",
        "choices": ["compraría", "compraríamos", "comprarías", "comprarían"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "¿Qué ______ (hacer) tú si fueras el presidente?",
        "choices": ["harías", "haremos", "haríamos", "harías"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Si viviéramos en España, ______ (aprender) a bailar flamenco.",
        "choices": ["aprenderíamos", "aprendíamos", "aprenderíamos", "aprenderías"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "¿ ______ (poder) usted decirme la hora, por favor?",
        "choices": ["podría", "puedo", "podría", "podrías"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nosotros ______ (ir) a la playa si no lloviera.",
        "choices": ["iríamos", "iremos", "iríamos", "irán"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Si yo fuera médico, ______ (ayudar) a muchas personas enfermas.",
        "choices": ["ayudaría", "ayudamos", "ayudaríamos", "ayudaría"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Me ______ (gustar) probar las tapas típicas españolas.",
        "choices": ["gustaría", "gustaría", "gustan", "gustaron"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Si fuera posible, ______ (viajar) al extranjero con mis amigos.",
        "choices": ["viajaríamos", "viajamos", "viajaremos", "viajaría"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "¿ ______ (querer) venir al concierto conmigo esta noche?",
        "choices": ["querrías", "quería", "querría", "querrías"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Si ellos tuvieran tiempo, ______ (organizar) una fiesta para ti.",
        "choices": ["organizarían", "organizan", "organizaríamos", "organizarían"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Me gustaría viajar a España.", "rightId": 1 },
            "right": { "word": "It would be a good day to walk.", "rightId": 4 }
          },
          {
            "left": { "word": "¿Podrías ayudarme?", "rightId": 2 },
            "right": { "word": "I would eat pizza every day.", "rightId": 5 }
          },
          {
            "left": { "word": "Deberíamos estudiar más.", "rightId": 3 },
            "right": { "word": "I would like to travel to Spain.", "rightId": 1 }
          },
          {
            "left": { "word": "Sería un buen día para caminar.", "rightId": 4 },
            "right": { "word": "We should study more.", "rightId": 3 }
          },
          {
            "left": { "word": "Yo comería pizza todos los días.", "rightId": 5 },
            "right": { "word": "Could you help me?", "rightId": 2 }
          },
        ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "¿Qué harías tú?", "rightId": 1 },
            "right": { "word": "They would visit the museum.", "rightId": 2 }
          },
          {
            "left": { "word": "Ellos visitarían el museo.", "rightId": 2 },
            "right": { "word": "Could you wait a moment?", "rightId": 5 }
          },
          {
            "left": { "word": "Nos encantaría ir al cine.", "rightId": 3 },
            "right": { "word": "What would you do?", "rightId": 1 }
          },
          {
            "left": { "word": "Ella aprendería rápido.", "rightId": 4 },
            "right": { "word": "We would love to go to the movies.", "rightId": 3 }
          },
          {
            "left": { "word": "¿Podrían esperar un momento?", "rightId": 5 },
            "right": { "word": "She would learn quickly.", "rightId": 4 }
          }
        ]
      }
      
    ]
  },
  {
    quiz: '4',
    name: 'Spanish Exercise - 4 (A2)',
    level: 'Easy',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs
      {
        "question": "Which of these phrases expresses an opinion in Spanish?",
        "choices": [
          "Comer pizza es divertido.",
          "Pienso que el cine español es fantástico.",
          "El clima está soleado.",
          "Viajar a la India es caro."
        ],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which of these phrases expresses an opinion in Spanish?",
        "choices": ["Discutir", "Creer", "Estar de acuerdo", "Preferir"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Complete: Si ganara la lotería, __________ una casa en Barcelona.",
        "choices": ["compra", "compraría", "compré", "compraré"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say 'It seems to me' in Spanish?",
        "choices": ["Me parece que", "Estoy de acuerdo", "Creo que", "No estoy de acuerdo"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What phrase would you use to express disagreement?",
        "choices": ["Estoy de acuerdo en que...", "No creo que...", "Pienso que...", "Me parece que..."],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the conditional form of 'hacer'?",
        "choices": ["Hacía", "Haría", "Hago", "Haré"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Si no __________ comida, no podríamos vivir.",
        "choices": ["hubiera", "tendría", "habría", "hay"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What word would you use to express a strong opinion?",
        "choices": ["Creo que", "Me encanta que", "Es obvio que", "Es mejor que"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Completa: Si los estudiantes tuvieran menos tareas, __________ más tiempo libre.",
        "choices": ["tendrían", "tendrían que", "tuvieran", "tuvieron"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "In Spanish, how do you say 'If I were a bird'?",
        "choices": ["Si soy un pájaro", "Si fuera un pájaro", "Si era un pájaro", "Si seré un pájaro"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      
      // 20 Fill in the Blanks

      {
        "question": "Creo que las redes sociales son útiles, pero también ______.",
        "choices": ["dañinas"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "En mi opinión, viajar a otro país es una experiencia ______.",
        "choices": ["inolvidable"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Si tuviera más tiempo, ______ aprender un nuevo idioma.",
        "choices": ["trataría de"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "No estoy de acuerdo con que la tecnología ______ el tiempo familiar.",
        "choices": ["reduzca"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Me parece que ______ es más importante que ganar dinero.",
        "choices": ["la felicidad"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Si pudieras elegir un superpoder, ¿cuál ______?",
        "choices": ["elegirías"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Estoy de acuerdo en que un buen libro siempre ______ el ánimo.",
        "choices": ["mejora"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Si fuera posible, yo ______ más proyectos de voluntariado.",
        "choices": ["haría"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "No creo que todos los programas de televisión sean ______.",
        "choices": ["educativos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "En mi opinión, los jóvenes ______ más tiempo en actividades productivas.",
        "choices": ["deberían pasar"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Creo que es buena idea.", "rightId": 1 },
            "right": { "word": "If I had time, I would do it.", "rightId": 2 }
          },
          {
            "left": { "word": "Si tuviera tiempo, lo haría.", "rightId": 2 },
            "right": { "word": "What do you think about this?", "rightId": 5 }
          },
          {
            "left": { "word": "En mi opinión, es mejor esperar.", "rightId": 3 },
            "right": { "word": "I think it's a good idea.", "rightId": 1 }
          },
          {
            "left": { "word": "Me parece interesante.", "rightId": 4 },
            "right": { "word": "In my opinion, it's better to wait.", "rightId": 3 }
          },
          {
            "left": { "word": "¿Qué opinas de esto?", "rightId": 5 },
            "right": { "word": "It seems interesting to me.", "rightId": 4 }
          },
        ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Si fuera posible, viajaría más.", "rightId": 1 },
            "right": { "word": "I'm not sure about that.", "rightId": 2 }
          },
          {
            "left": { "word": "No estoy seguro de eso.", "rightId": 2 },
            "right": { "word": "Do you think it is important?", "rightId": 5 }
          },
          {
            "left": { "word": "Prefiero no decir nada.", "rightId": 3 },
            "right": { "word": "If it were possible, I would travel more.", "rightId": 1 }
          },
          {
            "left": { "word": "Si pudiera, ayudaría más.", "rightId": 4 },
            "right": { "word": "I prefer not to say anything.", "rightId": 3 }
          },
          {
            "left": { "word": "¿Crees que es importante?", "rightId": 5 },
            "right": { "word": "If I could, I would help more.", "rightId": 4 }
          }
        ]
      }
      
    ]
  },
  {
    quiz: '5',
    name: 'Spanish Exercise - 5 (A2)',
    level: 'Easy',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs
      {
        "question": "Which tense is used for completed actions in the past?",
        "choices": ["Presente", "Pretérito", "Condicional", "Futuro"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which verb is used to express wishes or hypothetical actions?",
        "choices": ["Ser", "Estar", "Gustar", "Conditional"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "Which of the following sentences is in conditional tense?",
        "choices": [
          "Nosotros viajamos a México.",
          "Yo aprendería francés si tuviera tiempo.",
          "Ellos van al cine los sábados.",
          "Marta está muy cansada hoy."
        ],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say 'Where is the meeting?' in Spanish?",
        "choices": [
          "¿Dónde estar la reunión?",
          "¿Dónde ser la reunión?",
          "¿Dónde es la reunión?",
          "¿Dónde estás la reunión?"
        ],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Which is correct?",
        "choices": [
          "Yo estaría en casa si no tuviera trabajo.",
          "Yo estaré en casa si no tuviera trabajo.",
          "Yo estoy en casa si no tuviera trabajo.",
          "Yo estuve en casa si no tuviera trabajo."
        ],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which of the following describes emotions?",
        "choices": [
          "Yo soy feliz.",
          "Yo estoy feliz.",
          "Yo fui feliz.",
          "Yo seré feliz."
        ],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Complete: Marta __________ una película anoche.",
        "choices": ["verá", "ve", "vio", "vería"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Which sentence indicates a habitual action?",
        "choices": [
          "Luis viajó a Madrid.",
          "Marta estaría en casa.",
          "Ellos van al cine cada viernes.",
          "Yo estaré en casa."
        ],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What does 'Me gustaría viajar a Francia' mean?",
        "choices": [
          "I like to travel to France.",
          "I would like to travel to France.",
          "I traveled to France.",
          "I will travel to France."
        ],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which verb indicates temporary location or condition?",
        "choices": ["Ser", "Estar", "Gustar", "Ir"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      
      // 20 Fill in the Blanks

      {
        "question": "Yo ______ (comer) en un restaurante famoso el fin de semana pasado.",
        "choices": ["comí"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nosotros ______ (viajar) a Barcelona durante las vacaciones de verano.",
        "choices": ["viajamos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Marta ______ (ser/estar) muy emocionada por su nuevo trabajo.",
        "choices": ["está"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "¿Qué ______ (hacer, tú) si tuvieras un millón de euros?",
        "choices": ["harías"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ellos ______ (ir) al cine cada sábado por la tarde.",
        "choices": ["van"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Luis ______ (leer) un libro interesante anoche en su habitación.",
        "choices": ["leyó"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ahora, nosotros ______ (estar) muy cansados después del partido de fútbol.",
        "choices": ["estamos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Me ______ (gustar, condicional) aprender a tocar la guitarra algún día.",
        "choices": ["gustaría"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "¿Dónde ______ (ser/estar) la reunión esta tarde, en la oficina o en casa?",
        "choices": ["es"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Pablo y Ana ______ (hablar) español todos los días para practicar.",
        "choices": ["hablan"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Tengo un libro.", "rightId": 1 },
            "right": { "word": "She is kind.", "rightId": 2 }
          },
          {
            "left": { "word": "Ella es amable.", "rightId": 2 },
            "right": { "word": "I am going to study tomorrow.", "rightId": 5 }
          },
          {
            "left": { "word": "Nos gusta el café.", "rightId": 3 },
            "right": { "word": "I have a book.", "rightId": 1 }
          },
          {
            "left": { "word": "¿Dónde está la tienda?", "rightId": 4 },
            "right": { "word": "We like coffee.", "rightId": 3 }
          },
          {
            "left": { "word": "Voy a estudiar mañana.", "rightId": 5 },
            "right": { "word": "Where is the store?", "rightId": 4 }
          },
        ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Los gatos están durmiendo.", "rightId": 1 },
            "right": { "word": "He is taller than me.", "rightId": 2 }
          },
          {
            "left": { "word": "Es más alto que yo.", "rightId": 2 },
            "right": { "word": "I prefer the blue one.", "rightId": 5 }
          },
          {
            "left": { "word": "Abrí la ventana.", "rightId": 3 },
            "right": { "word": "The cats are sleeping.", "rightId": 1 }
          },
          {
            "left": { "word": "Estamos en el parque.", "rightId": 4 },
            "right": { "word": "I opened the window.", "rightId": 3 }
          },
          {
            "left": { "word": "Prefiero el azul.", "rightId": 5 },
            "right": { "word": "We are at the park.", "rightId": 4 }
          }
        ]
      }
      
    ]
  },
  {
    quiz: '6',
    name: 'Spanish Exercise - 6 (A2)',
    level: 'Easy',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs
      {
        "question": "What does 'train' mean in Spanish?",
        "choices": ["Tren", "Metro", "Autobús", "Avión"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "How do you say 'ticket' in Spanish?",
        "choices": ["Billete", "Coche", "Estación", "Pasaporte"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the correct form of 'ir a' for 'they'?",
        "choices": ["Voy a", "Vamos a", "Van a", "Vas a"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What word means 'subway' in Spanish?",
        "choices": ["Tren", "Metro", "Barco", "Bicicleta"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What document do you need to travel internationally?",
        "choices": ["Billete", "Pasaporte", "Estación", "Salida"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How would you say 'We are going to take the bus'?",
        "choices": ["Vamos a tomar el autobús.", "Voy a tomar el avión.", "Vas a tomar el barco.", "Van a tomar el coche."],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which phrase describes 'They are going to rent a car'?",
        "choices": ["Ellos van a alquilar un coche.", "Ellos van a conducir un barco.", "Ellos van a caminar.", "Ellos van a tomar el metro."],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What does 'aeropuerto' mean in English?",
        "choices": ["Train Station", "Airport", "Subway", "Departure"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What does 'barco' mean in English?",
        "choices": ["Train", "Subway", "Boat", "Car"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What is the plural of 'bicicleta'?",
        "choices": ["Bicicletas", "Bicicletes", "Bicicletos", "Bicicleto"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      
      // 20 Fill in the Blanks

      {
        "question": "Yo voy a viajar en ______ (plane) para llegar más rápido.",
        "choices": ["avión", "", "", ""],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ellos van a tomar un ______ (ship) para explorar el río.",
        "choices": ["barco", "", "", ""],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nosotros vamos a la ______ (season) para tomar el tren.",
        "choices": ["estación", "", "", ""],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "¿Tú vas a comprar un ______ (ticket) de ida o ida y vuelta?",
        "choices": ["billete", "", "", ""],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Mis amigos van a llegar en ______ (bus) desde otra ciudad.",
        "choices": ["autobús", "", "", ""],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ella va a alquilar un ______ (car) para su viaje.",
        "choices": ["coche", "", "", ""],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nosotros vamos a tomar el ______ (metro) para llegar al trabajo.",
        "choices": ["metro", "", "", ""],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ellos van a viajar en ______ (bicycle) porque es más ecológico.",
        "choices": ["bicicleta", "", "", ""],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "¿Tú vas a necesitar un ______ (passport) para viajar a otro país?",
        "choices": ["pasaporte", "", "", ""],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Vamos a esperar la ______ (exit) antes de abordar el avión.",
        "choices": ["salida", "", "", ""],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Avión", "rightId": 1 },
            "right": { "word": "Metro", "rightId": 5 }
          },
          {
            "left": { "word": "Autobús", "rightId": 2 },
            "right": { "word": "Train Station", "rightId": 3 }
          },
          {
            "left": { "word": "Estación de tren", "rightId": 3 },
            "right": { "word": "Plane", "rightId": 1 }
          },
          {
            "left": { "word": "Pasaporte", "rightId": 4 },
            "right": { "word": "Bus", "rightId": 2 }
          },
          {
            "left": { "word": "Metro", "rightId": 5 },
            "right": { "word": "Passport", "rightId": 4 }
          },
        ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Billete.", "rightId": 1 },
            "right": { "word": "Airport", "rightId": 3 }
          },
          {
            "left": { "word": "Bicicleta", "rightId": 2 },
            "right": { "word": "Departure", "rightId": 5 }
          },
          {
            "left": { "word": "Aeropuerto", "rightId": 3 },
            "right": { "word": "Ticket", "rightId": 1 }
          },
          {
            "left": { "word": "Barco", "rightId": 4 },
            "right": { "word": "Bicycle", "rightId": 2 }
          },
          {
            "left": { "word": "Salida", "rightId": 5 },
            "right": { "word": "Boat", "rightId": 4 }
          }
        ]
      }
      
    ]
  },
  {
    quiz: '7',
    name: 'Spanish Exercise - 7 (A2)',
    level: 'Easy',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs
      {
        "question": "What word means 'shoes' in Spanish?",
        "choices": ["Zapatillas", "Zapatos", "Botas", "Sombreros"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say 'shirt' in Spanish?",
        "choices": ["Falda", "Camiseta", "Camisa", "Vestido"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What is the plural form of 'abrigo' (coat)?",
        "choices": ["Abrigos", "Abrigas", "Abrigues", "Abrigados"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What phrase would you use to ask for the price?",
        "choices": ["¿Cómo se llama esto?", "¿Dónde está la tienda?", "¿Cuánto cuesta esto?", "¿Qué hora es?"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What does 'pantalones cortos' mean?",
        "choices": ["Shorts", "Jeans", "Pants", "Coats"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What is the plural of 'camisa' (shirt)?",
        "choices": ["Camisas", "Camises", "Camisaos", "Camisos"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "How would you say 'I want to try this dress on'?",
        "choices": ["Quiero comprar este vestido.", "Quiero probarme este vestido.", "Quiero llevar este vestido.", "Quiero devolver este vestido."],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which phrase means 'The shoes are expensive'?",
        "choices": ["Las zapatillas son baratas.", "Los zapatos son caros.", "Los zapatos son grandes.", "Las botas son caras."],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the correct adjective to describe 'las camisas rojas' (the red shirts)?",
        "choices": ["Roja", "Rojo", "Rojos", "Rojas"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "What clothing do you wear in the winter?",
        "choices": ["Traje de baño", "Sombrero", "Abrigo", "Sandalias"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      
      // 20 Fill in the Blanks

      {
        "question": "Yo necesito comprar un ______ (coat) nuevo para el invierno.",
        "choices": ["abrigo", "falda", "pantalones cortos", "zapatillas"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ella lleva una ______ (skirt) roja con zapatos negros.",
        "choices": ["falda", "abrigo", "pantalones cortos", "zapatillas"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nosotros vamos a comprar unos ______ (shorts) para el verano.",
        "choices": ["pantalones cortos", "falda", "abrigo", "zapatillas"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "¿Tienes unas ______ (sneakers) deportivas para correr?",
        "choices": ["zapatillas", "falda", "pantalones cortos", "sombreros"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Los ______ (hats) están de oferta en esta tienda.",
        "choices": ["sombreros", "falda", "pantalones cortos", "zapatillas"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Él busca una ______ (shirt) azul para la oficina.",
        "choices": ["camisa", "falda", "pantalones cortos", "zapatillas"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Mis padres siempre compran ______ (suits) tradicionales para las bodas.",
        "choices": ["trajes", "falda", "pantalones cortos", "zapatillas"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "En el mercado, venden muchas ______ (t-shirts) de algodón.",
        "choices": ["camisetas", "falda", "pantalones cortos", "zapatillas"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Voy a probarme este par de ______ (boots) de cuero.",
        "choices": ["botas", "falda", "pantalones cortos", "zapatillas"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "¿Dónde está el probador para estas ______ (blouses)?",
        "choices": ["blusas", "falda", "pantalones cortos", "zapatillas"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Camiseta", "rightId": 1 },
            "right": { "word": "Pants", "rightId": 5 }
          },
          {
            "left": { "word": "Zapatos", "rightId": 2 },
            "right": { "word": "Hat", "rightId": 3 }
          },
          {
            "left": { "word": "Sombrero", "rightId": 3 },
            "right": { "word": "T-shirt", "rightId": 1 }
          },
          {
            "left": { "word": "Vestido", "rightId": 4 },
            "right": { "word": "Shoes", "rightId": 2 }
          },
          {
            "left": { "word": "Pantalones", "rightId": 5 },
            "right": { "word": "Dress", "rightId": 4 }
          },
        ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Zapatillas", "rightId": 1 },
            "right": { "word": "Blouse", "rightId": 3 }
          },
          {
            "left": { "word": "Falda", "rightId": 2 },
            "right": { "word": "Shirt", "rightId": 5 }
          },
          {
            "left": { "word": "Blusa", "rightId": 3 },
            "right": { "word": "Sneakers", "rightId": 1 }
          },
          {
            "left": { "word": "Chaqueta", "rightId": 4 },
            "right": { "word": "Skirt", "rightId": 2 }
          },
          {
            "left": { "word": "Camisa", "rightId": 5 },
            "right": { "word": "Jacket", "rightId": 4 }
          }
        ]
      }
      
    ]
  },
  {
    quiz: '8',
    name: 'Spanish Exercise - 8 (A2)',
    level: 'Easy',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs
      {
        "question": "¿Cuál de las siguientes actividades es un ejemplo de un pasatiempo?",
        "choices": ["correr", "comer", "dormir", "estudiar"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿Qué verbo significa 'to live' en español?",
        "choices": ["comer", "vivir", "hablar", "bailar"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "¿Cómo se dice 'I like to swim' en español?",
        "choices": [ "me gusta nadé", "me gusta nadar", "me gusta nadando", "me gusta nadaré"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "¿Qué verbo significa 'to eat' en español?",
        "choices": ["vivir", "jugar", "leer", "comer"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "¿Cómo se conjuga el verbo 'comer' en la primera persona singular en el presente?",
        "choices": ["como", "comes", "comí", "comemos"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿Cuál de las siguientes actividades no es un pasatiempo?",
        "choices": ["estudiar", "leer", "ver una película", "bailar"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿Cómo se dice 'He likes to play soccer' en español?",
        "choices": ["le gustaba jugar al fútbol", "le gusta jugando al fútbol", "le gusta jugar fútbol", "le gusta jugar al fútbol"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "¿Cuál es la conjugación correcta del verbo 'vivir' en la tercera persona singular en el presente?",
        "choices": ["vives", "vive", "vivimos", "vivieron"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "¿Qué actividad se relaciona con 'escuchar música'?",
        "choices": ["escuchar canciones", "ver una película", "pintar cuadros", "jugar al fútbol"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿Qué significa 'hacer ejercicio'?",
        "choices": [ "dormir", "comer bien", "practicar deportes", "leer un libro"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      
      // 20 Fill in the Blanks

      {
        "question": "Me gusta ______ (to read) libros en mi tiempo libre.",
        "choices": ["leer", "hacer", "correr", "vivir"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "¿Qué te gusta ______ (to do) los fines de semana?",
        "choices": ["hacer", "leer", "cantar", "bailar"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ella siempre ______ (to run) en el parque por la mañana.",
        "choices": ["corre", "canta", "baila", "lee"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nosotros ______ (to live) en la ciudad de Madrid.",
        "choices": ["vivimos", "comemos", "corremos", "jugamos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "A ti te gusta ______ (to sing) en el baño.",
        "choices": ["cantar", "bailar", "leer", "correr"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Mi hermano ______ (to eat) pizza los domingos.",
        "choices": ["come", "canta", "baila", "corre"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Me encanta ______ (to draw) y pintar.",
        "choices": ["dibujar", "leer", "cantar", "bailar"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ellos ______ (to live) en una casa cerca del mar.",
        "choices": ["viven", "comen", "cantan", "bailan"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Me gusta ______ (to dance) salsa en las fiestas.",
        "choices": ["bailar", "leer", "correr", "cantar"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "A Marta le gusta ______ (to watch) películas en su tiempo libre.",
        "choices": ["ver", "cantar", "bailar", "leer"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "hacer ejercicio", "rightId": 1 },
            "right": { "word": "watch a movie", "rightId": 2 }
          },
          {
            "left": { "word": "ver películas", "rightId": 2 },
            "right": { "word": "play music", "rightId": 3 }
          },
          {
            "left": { "word": "tocar la guitarra", "rightId": 3 },
            "right": { "word": "do exercise", "rightId": 1 }
          },
          {
            "left": { "word": "leer libros", "rightId": 4 },
            "right": { "word": "sing songs", "rightId": 5 }
          },
          {
            "left": { "word": "ir al cine", "rightId": 5 },
            "right": { "word": "read books", "rightId": 4 }
          },
        ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "bailar salsa", "rightId": 1 },
            "right": { "word": "paint pictures", "rightId": 3 }
          },
          {
            "left": { "word": "correr en el parque", "rightId": 2 },
            "right": { "word": "listen to music", "rightId": 5 }
          },
          {
            "left": { "word": "pintar cuadros", "rightId": 3 },
            "right": { "word": "dance to music", "rightId": 1 }
          },
          {
            "left": { "word": "jugar al fútbol", "rightId": 4 },
            "right": { "word": "watch sports", "rightId": 2 }
          },
          {
            "left": { "word": "escuchar música", "rightId": 5 },
            "right": { "word": "play soccer", "rightId": 4 }
          }
        ]
      }
      
    ]
  },
  {
    quiz: '9',
    name: 'Spanish Exercise - 9 (A2)',
    level: 'Easy',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs
      {
        "question": "¿Qué significa \"tener fiebre\"?",
        "choices": ["Tener hambre", "Tener calor", "Tener frío", "Tener temperatura alta"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "¿Qué deberías hacer si tienes un dolor de garganta?",
        "choices": ["Cantar mucho", "Descansar y beber agua", "Comer comida picante", "Ir al gimnasio"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "¿Cuál de los siguientes es un verbo modal que se usa para expresar una obligación?",
        "choices": ["Poder", "Deber", "Comer", "Dormir"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Si alguien tiene un resfriado, ¿qué debe hacer?",
        "choices": ["Dormir mucho y tomar medicinas", "Hacer ejercicio", "Comer dulces", "Salir a caminar"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿Qué parte del cuerpo necesitas para ver?",
        "choices": ["Estómago", "Ojos", "Manos", "Corazón"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Si tienes dolor de cabeza, ¿qué no debes hacer?",
        "choices": ["Tomar una aspirina", "Dormir mucho", "Estudiar mucho", "Hacer ejercicio suave"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "¿Qué significa \"deber\" en español?",
        "choices": ["Poder hacer algo", "Necesitar hacer algo", "Comer algo", "Estudiar algo"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "¿Qué es un síntoma común de la gripe?",
        "choices": ["Dolor de estómago", "Dolor de cabeza", "Dolor de espalda", "Dolor de pierna"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "¿Cómo puedes prevenir el dolor de espalda?",
        "choices": ["Levantando pesas", "Manteniendo una buena postura", "Corriendo mucho", "Comiendo más carne"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Si una persona tiene alergia a los mariscos, ¿qué debe evitar?",
        "choices": ["Comer mariscos", "Comer verduras", "Comer frutas", "Comer carne"],
        "type": "MCQs",
        "correctAnswer": 1
      },    
      
      // 20 Fill in the Blanks

      {
        "question": "Mi cabeza me duele mucho, ______ (poder, deber) ir al médico.",
        "choices": ["debo", "poder", "deber", "ir"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Para estar saludable, ______ (poder, deber) comer frutas y verduras todos los días.",
        "choices": ["debes", "poder", "deber", "comer"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Si tienes fiebre, ______ (poder, deber) descansar mucho.",
        "choices": ["debes", "poder", "deber", "descansar"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "El doctor me dijo que ______ (poder, deber) hacer ejercicio regularmente.",
        "choices": ["deberías", "poder", "deber", "hacer"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ella no ______ (poder, deber) comer comida picante debido a su estómago sensible.",
        "choices": ["puede", "poder", "deber", "comer"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "¿Tú ______ (poder, deber) levantarte temprano para ir al gimnasio?",
        "choices": ["puedes", "poder", "deber", "levantarse"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Si ______ (poder, deber) correr más rápido, estarías más saludable.",
        "choices": ["pudieras", "poder", "deber", "correr"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(Poder, Deber) ______ ir a la farmacia a comprar medicinas para el dolor de cabeza.",
        "choices": ["Puedo", "poder", "deber", "ir"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Es importante que tú ______ (poder, deber) tomar suficiente agua cada día.",
        "choices": ["debes", "poder", "deber", "tomar"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ellos no ______ (poder, deber) practicar deportes por su lesión.",
        "choices": ["pueden", "poder", "deber", "practicar"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "cabeza", "rightId": 1 },
            "right": { "word": "bones", "rightId": 4 }
          },
          {
            "left": { "word": "estómago", "rightId": 2 },
            "right": { "word": "eyes", "rightId": 5 }
          },
          {
            "left": { "word": "corazón", "rightId": 3 },
            "right": { "word": "head", "rightId": 1 }
          },
          {
            "left": { "word": "huesos", "rightId": 4 },
            "right": { "word": "heart", "rightId": 3 }
          },
          {
            "left": { "word": "ojos", "rightId": 5 },
            "right": { "word": "stomach", "rightId": 2 }
          },
        ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "resfriado", "rightId": 1 },
            "right": { "word": "headache", "rightId": 2 }
          },
          {
            "left": { "word": "dolor de cabeza", "rightId": 2 },
            "right": { "word": "back", "rightId": 5 }
          },
          {
            "left": { "word": "alergia", "rightId": 3 },
            "right": { "word": "cold", "rightId": 1 }
          },
          {
            "left": { "word": "pierna", "rightId": 4 },
            "right": { "word": "allergy", "rightId": 3 }
          },
          {
            "left": { "word": "espalda", "rightId": 5 },
            "right": { "word": "leg", "rightId": 4 }
          }
        ]
      }
      
    ]
  },
  {
    quiz: '10',
    name: 'Spanish Exercise - 10 (A2)',
    level: 'Easy',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs
      {
        "question": "¿Qué hora es si el reloj marca 5:45 PM?",
        "choices": ["Son las 5:45 AM", "Son las 5:45 PM", "Son las 6:45 PM", "Son las 4:45 PM"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿Cuál es la respuesta correcta para esta pregunta? \"¿__________ (comer) tú algo antes de ir al trabajo?\"",
        "choices": ["Comí", "Has comido", "Comer", "Comiste"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿Qué significa “¿A qué hora __________ (empezar) la reunión?”?",
        "choices": ["What time does the meeting begin?", "What time did the meeting start?", "What time will the meeting start?", "What time is the meeting?"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿Cómo se usa el pretérito perfecto en esta frase? \"Yo __________ (leer) ese libro.\"",
        "choices": ["He leído", "Leí", "Leeré", "Leyó"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿Cuál es la forma correcta del verbo en pretérito perfecto? \"Ellos __________ (ir) al cine este fin de semana.\"",
        "choices": ["Fueron", "Han ido", "Iban", "Van"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "¿Qué significa \"¿Qué hora es?\" en español?",
        "choices": [ "What time was it?", "What time will it be?","What time is it?", "What time has it been?"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "¿A qué hora __________ (salir) tú ayer?",
        "choices": ["Salgo", "Salí", "Has salido", "Salías"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "¿Cuándo __________ (llegar) ustedes al trabajo hoy?",
        "choices": ["Llegaron", "Llegaron", "Han llegado", "Llegaban"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "¿Cuál es la forma correcta para “She has finished the work”?",
        "choices": ["Ella ha terminado el trabajo", "Ella terminó el trabajo", "Ella termina el trabajo", "Ella terminará el trabajo"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿Qué significa la frase \"¿A qué hora empieza el partido de fútbol?\"?",
        "choices": ["What time is the football match?", "What time does the football match end?", "What time does the football match start?", "What time was the football match?"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      
      // 20 Fill in the Blanks

      {
        "question": "Yo ______ (comer) en casa esta mañana.",
        "choices": ["he comido", "comí", "como", "comía"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "¿A qué hora ______ (llegar) tú al trabajo ayer?",
        "choices": ["llegaste", "llego", "llegaba", "llegué"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ellos ______ (trabajar) todo el día, así que están cansados.",
        "choices": ["han trabajado", "trabajaron", "trabajan", "trabajaban"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Tú ______ (ver) esa película antes, ¿verdad?",
        "choices": ["has visto", "viste", "ves", "veías"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nosotros ______ (hacer) todo el trabajo de la oficina ya.",
        "choices": ["hemos hecho", "hicimos", "hacemos", "hacíamos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "¿Cuándo ______ (salir) ella del trabajo ayer?",
        "choices": ["salió", "sale", "salía", "salí"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Yo ______ (estudiar) mucho esta semana para el examen.",
        "choices": ["he estudiado", "estudié", "estudio", "estudiaba"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ellos ______ (volver) de sus vacaciones hace dos días.",
        "choices": ["han vuelto", "volvieron", "vuelven", "volvían"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "¿A qué hora ______ (empezar) la reunión ayer?",
        "choices": ["empezó", "empieza", "empezaba", "empezaré"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Marta ______ (terminar) su tarea hace media hora.",
        "choices": ["ha terminado", "terminó", "termina", "terminaba"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "La reunión empieza a las 9:00 AM.", "rightId": 1 },
            "right": { "word": "The football match begins at 7:00 PM.", "rightId": 5 }
          },
          {
            "left": { "word": "Tengo una cita a las 3:00 PM.", "rightId": 2 },
            "right": { "word": "The party is on Saturday night.", "rightId": 4 }
          },
          {
            "left": { "word": "El tren sale a las 6:30 AM.", "rightId": 3 },
            "right": { "word": "The meeting starts at 9:00 AM.", "rightId": 1 }
          },
          {
            "left": { "word": "La fiesta es el sábado por la noche.", "rightId": 4 },
            "right": { "word": "The train leaves at 6:30 AM.", "rightId": 3 }
          },
          {
            "left": { "word": "El partido de fútbol comienza a las 7:00 PM.", "rightId": 5 },
            "right": { "word": "I have an appointment at 3:00 PM.", "rightId": 2 }
          },
        ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Mi clase de español es a las 10:00 AM.", "rightId": 1 },
            "right": { "word": "The flight arrives at 5:00 PM.", "rightId": 2 }
          },
          {
            "left": { "word": "El vuelo llega a las 5:00 PM.", "rightId": 2 },
            "right": { "word": "We eat at 1:00 PM.", "rightId": 5 }
          },
          {
            "left": { "word": "Tengo que trabajar hasta las 5:00 PM.", "rightId": 3 },
            "right": { "word": "My Spanish class is at 10:00 AM.", "rightId": 1 }
          },
          {
            "left": { "word": "La conferencia empieza a las 11:00 AM.", "rightId": 4 },
            "right": { "word": "I have to work until 5:00 PM.", "rightId": 3 }
          },
          {
            "left": { "word": "Comemos a las 1:00 PM.", "rightId": 5 },
            "right": { "word": "The conference starts at 11:00 AM.", "rightId": 4 }
          }
        ]
      }
      
    ]
  },
  {
    quiz: '11',
    name: 'Spanish Exercise - 11 (A2)',
    level: 'Easy',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs
      {
        "question": "What does 'teatro' mean?",
        "choices": ["Dance", "Theatre", "Painting", "Sculpture"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which one is an indirect object pronoun?",
        "choices": ["Yo", "Tú", "Me", "Él"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Which word describes a place where art is kept?",
        "choices": ["Feria", "Museo", "Concierto", "Canción"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which of these words is related to music?",
        "choices": ["Pintura", "Canción", "Escultura", "Exposición"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What does 'Les compré flores a mis padres.' mean?",
        "choices": ["I bought flowers for my parents.", "My parents bought flowers for me.", "I sold flowers to my parents.", "My parents bought flowers for themselves."],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which cultural activity involves 'flamenco'?",
        "choices": ["Escultura", "Música y danza", "Pintura", "Teatro"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which pronoun would you use for 'a nosotros'?",
        "choices": ["Me", "Te", "Nos", "Les"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Where can you see an 'exposición'?",
        "choices": ["En un teatro", "En un museo", "En un concierto", "En una feria"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What does 'les mostramos las fotos' mean?",
        "choices": ["We show them the photos.", "They show us the photos.", "You show me the photos.", "I show you the photos."],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which word is related to a festival or celebration?",
        "choices": ["Tradición", "Canción", "Escultura", "Exposición"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      
      // 20 Fill in the Blanks

      {
        "question": "Fui al ______ (museum) para ver esculturas antiguas.",
        "choices": ["museo", "feria", "teatro", "concierto"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "¿ ______ (You) diste las entradas para el concierto a Juan?",
        "choices": ["Le", "Te", "Nos", "Les"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nos encanta escuchar la ______ (music) tradicional de España.",
        "choices": ["música", "escultura", "danza", "pintura"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ayer asistí a un ______ (show) de flamenco.",
        "choices": ["espectáculo", "concierto", "teatro", "museo"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "¿Le ______ (dar) tu opinión sobre la exposición?",
        "choices": ["diste", "dio", "dieron", "daba"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Mi madre siempre me ______ (comprar) un regalo para mi cumpleaños.",
        "choices": ["compra", "compró", "comprar", "compraban"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Hay un ______ (exposure) de arte moderno en la galería esta semana.",
        "choices": ["exposición", "teatro", "danza", "feria"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Te ______ (prestar) mi guitarra para practicar.",
        "choices": ["presto", "presté", "prestar", "prestan"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Mi hermana, quien ama el teatro, ______ (ir) al festival anual.",
        "choices": ["fue", "fue", "iba", "iría"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Los niños les ______ (pedir) a sus padres permiso para ir al museo.",
        "choices": ["pidieron", "pedían", "pedirán", "pedido"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Museo", "rightId": 1 },
            "right": { "word": "Painting", "rightId": 2 }
          },
          {
            "left": { "word": "Pintura", "rightId": 2 },
            "right": { "word": "Fair", "rightId": 4 }
          },
          {
            "left": { "word": "Canción", "rightId": 3 },
            "right": { "word": "Museum", "rightId": 1 }
          },
          {
            "left": { "word": "Feria", "rightId": 4 },
            "right": { "word": "Dance", "rightId": 5 }
          },
          {
            "left": { "word": "Danza", "rightId": 5 },
            "right": { "word": "Song", "rightId": 3 }
          },
        ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Teatro", "rightId": 1 },
            "right": { "word": "Concert", "rightId": 3 }
          },
          {
            "left": { "word": "Tradición", "rightId": 2 },
            "right": { "word": "Exhibition", "rightId": 5 }
          },
          {
            "left": { "word": "Concierto", "rightId": 3 },
            "right": { "word": "Theatre", "rightId": 1 }
          },
          {
            "left": { "word": "Escultura", "rightId": 4 },
            "right": { "word": "Tradition", "rightId": 2 }
          },
          {
            "left": { "word": "Exposición", "rightId": 5 },
            "right": { "word": "Sculpture", "rightId": 4 }
          }
        ]
      }
      
    ]
  },
  {
    quiz: '12',
    name: 'Spanish Exercise - 12 (A2)',
    level: 'Easy',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs
      {
        "question": "¿Cómo se dice 'fireworks' en español?",
        "choices": ["calabaza", "fuegos artificiales", "fiesta", "comparsa"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿Qué comida tradicional se come en México durante el Día de los Muertos?",
        "choices": ["tacos", "paella", "pan de muerto", "pollo asado"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "¿Cuál es la mejor descripción de 'comparsa'?",
        "choices": ["un baile tradicional", "un desfile religioso", "un grupo de personas disfrazadas", "una comida navideña"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "¿Qué bebida tradicional se toma durante Navidad en España?",
        "choices": ["vino tinto", "sidra", "champán", "horchata"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "¿Cuál es el plato principal tradicional en una cena de Nochebuena?",
        "choices": ["jamón", "pavo", "tortilla", "empanada"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿Cómo se compara 'más grande' con 'el más grande'?",
        "choices": ["bigger / the biggest", "larger / the largest", "smaller / the smallest", "both a and b"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "¿Qué tradición ocurre durante la Feria de Abril en Sevilla?",
        "choices": ["Lanzar tomates", "Bailar sevillanas", "Comer paella", "Hacer procesiones"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿Cuál es el significado de 'rosas' en el día de Sant Jordi?",
        "choices": ["libros", "flores", "bailes", "regalos"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿Qué celebración marca el 31 de diciembre en España?",
        "choices": ["nochebuena", "nochevieja", "día de los Reyes Magos", "la Semana Santa"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿Qué evento incluye el uso de máscaras y disfraces?",
        "choices": ["la Feria de Abril", "el Carnaval", "el Día de los Muertos", "la Nochebuena"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      
      // 20 Fill in the Blanks

      {
        "question": "La ______ es una fiesta popular en España donde las personas lanzan tomates. (Hint: festival name)",
        "choices": ["Tomatina", "Cava", "Calaveras", "Regalos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Durante Navidad, solemos comer turrón y ______ (a sparkling drink).",
        "choices": ["Cava", "Tomatina", "Pavo", "Procesiones"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "En México, el Día de los Muertos se celebra con pan de muerto y ______ (decorations).",
        "choices": ["Calaveras", "Arroz", "Encierros", "Fuegos artificiales"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Los niños esperan que los Reyes Magos les traigan ______ (gifts) el 6 de enero.",
        "choices": ["Regalos", "Fuegos artificiales", "Cava", "Turrón"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "El ______ (turkey) es un plato tradicional para la cena de Navidad en España.",
        "choices": ["Pavo", "Arroz", "Pan de muerto", "Jamón"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Durante la Semana Santa, las personas asisten a ______ (religious parades).",
        "choices": ["Procesiones", "Turrón", "Tomatina", "Cabalgata"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "En las bodas, los invitados suelen lanzar ______ (rice) para desear buena suerte.",
        "choices": ["Arroz", "Roscas", "Cava", "Pavo"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "La fiesta de San Fermín se celebra con ______ (bull runs) en Pamplona.",
        "choices": ["Encierros", "Fuegos artificiales", "Procesiones", "Cava"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Durante la Feria de Abril en Sevilla, las personas bailan ______ (a traditional dance).",
        "choices": ["Sevillanas", "Cava", "Arroz", "Turrón"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "En Cataluña, el 23 de abril se celebra el día de Sant Jordi regalando libros y ______ (roses).",
        "choices": ["Rosas", "Fuegos artificiales", "Pavo", "Tomatina"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "nochevieja", "rightId": 1 },
            "right": { "word": "alimento", "rightId": 5 }
          },
          {
            "left": { "word": "comparsa", "rightId": 2 },
            "right": { "word": "pumpkin", "rightId": 4 }
          },
          {
            "left": { "word": "villancicos", "rightId": 3 },
            "right": { "word": "epiphany", "rightId": 1 }
          },
          {
            "left": { "word": "calabaza", "rightId": 4 },
            "right": { "word": "christmas carols", "rightId": 2 }
          },
          {
            "left": { "word": "food", "rightId": 5 },
            "right": { "word": "fireworks", "rightId": 3 }
          },
        ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "feria", "rightId": 1 },
            "right": { "word": "parade", "rightId": 3 }
          },
          {
            "left": { "word": "procesión", "rightId": 2 },
            "right": { "word": "celebration", "rightId": 5 }
          },
          {
            "left": { "word": "cabalgata", "rightId": 3 },
            "right": { "word": "fair", "rightId": 1 }
          },
          {
            "left": { "word": "fiesta", "rightId": 4 },
            "right": { "word": "religious procession", "rightId": 2 }
          },
          {
            "left": { "word": "celebración", "rightId": 5 },
            "right": { "word": "party", "rightId": 4 }
          }
        ]
      }
      
    ]
  },
  {
    quiz: '13',
    name: 'Spanish Exercise - 13 (A2)',
    level: 'Easy',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs
      {
        "question": "¿Qué palabra significa 'recycling' en español?",
        "choices": ["Naturaleza", "Reciclaje", "Basura", "Tormenta"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "¿Cómo se dice 'forest' en español?",
        "choices": ["Río", "Árbol", "Bosque", "Contaminación"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "¿Qué es un ejemplo de energía renovable?",
        "choices": ["Carbón", "Petróleo", "Energía solar", "Plástico"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Si el clima ______ (cambiar), los animales no tendrían suficiente comida.",
        "type": "MCQs",
        "choices": ["cambia", "cambiara", "cambiaría", "cambió"],
        "correctAnswer": 2
      },
      {
        "question": "¿Qué fenómeno está relacionado con el aumento de las temperaturas globales?",
        "type": "MCQs",
        "choices": ["Reciclaje", "Cambio climático", "Tormenta", "Contaminación"],
        "correctAnswer": 2
      },
      {
        "question": "Si pudieras elegir, ¿dónde vivirías?",
        "choices": ["En la ciudad", "En un bosque", "En una oficina", "En una fábrica"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "¿Cuál es la mejor forma de reducir la basura en el medio ambiente?",
        "type": "MCQs",
        "choices": ["Tirarla al océano", "Quemarla", "Reciclarla", "Guardarla"],
        "correctAnswer": 3
      },
      {
        "question": "¿Cómo se llama el gas principal responsable del calentamiento global?",
        "type": "MCQs",
        "choices": ["Oxígeno", "Dióxido de carbono", "Hidrógeno", "Nitrógeno"],
        "correctAnswer": 2
      },
      {
        "question": "Si plantamos más árboles, ¿qué beneficio tendremos?",
        "choices": ["Más madera para quemar", "Aire más limpio", "Menos oxígeno", "Más basura"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "¿Cuál de estos animales vive principalmente en el océano?",
        "type": "MCQs",
        "choices": ["León", "Ballena", "Gato", "Águila"],
        "correctAnswer": 2
      },
      
      // 20 Fill in the Blanks

      {
        "question": "Si yo fuera un animal, sería un ______ (animal) que vive en el bosque.",
        "choices": ["animal", "animal", "animal", "animal"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "La ______ (rain) es importante para la agricultura.",
        "choices": ["lluvia", "lluvia", "lluvia", "lluvia"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Si cuidamos los ______ (trees), tendremos aire más limpio.",
        "choices": ["árboles", "árboles", "árboles", "árboles"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "El calentamiento global afecta a los ______ (glaciers) en todo el mundo.",
        "choices": ["glaciares", "glaciares", "glaciares", "glaciares"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Si plantáramos más ______ (flowers), los jardines serían más hermosos.",
        "choices": ["flores", "flores", "flores", "flores"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Una ______ (storm) fuerte puede causar muchos problemas en la ciudad.",
        "choices": ["tormenta", "tormenta", "tormenta", "tormenta"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "El ______ (recycling) es una forma de proteger el medio ambiente.",
        "choices": ["reciclaje", "reciclaje", "reciclaje", "reciclaje"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Si pudieras vivir en la naturaleza, ¿vivirías cerca de un ______ (river) o en las montañas?",
        "choices": ["río", "río", "río", "río"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "El cambio ______ (climatic) es un problema mundial que debemos resolver.",
        "choices": ["climático", "climático", "climático", "climático"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Si no reciclamos, habrá más ______ (trash) en los océanos.",
        "choices": ["basura", "basura", "basura", "basura"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "contaminación", "rightId": 1 },
            "right": { "word": "renewable energy", "rightId": 3 }
          },
          {
            "left": { "word": "bosque", "rightId": 2 },
            "right": { "word": "global warming", "rightId": 4 }
          },
          {
            "left": { "word": "energía renovable", "rightId": 3 },
            "right": { "word": "pollution", "rightId": 1 }
          },
          {
            "left": { "word": "calentamiento", "rightId": 4 },
            "right": { "word": "nature", "rightId": 5 }
          },
          {
            "left": { "word": "naturaleza", "rightId": 5 },
            "right": { "word": "forest", "rightId": 2 }
          },
        ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "recursos naturales", "rightId": 1 },
            "right": { "word": "climate change", "rightId": 3 }
          },
          {
            "left": { "word": "tormenta", "rightId": 2 },
            "right": { "word": "ocean", "rightId": 5 }
          },
          {
            "left": { "word": "cambio climático", "rightId": 3 },
            "right": { "word": "natural resources", "rightId": 1 }
          },
          {
            "left": { "word": "reciclaje", "rightId": 4 },
            "right": { "word": "storm", "rightId": 2 }
          },
          {
            "left": { "word": "océano", "rightId": 5 },
            "right": { "word": "recycling", "rightId": 4 }
          }
        ]
      }
      
    ]
  },
  {
    quiz: '14',
    name: 'Spanish Exercise - 14 (A2)',
    level: 'Easy',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs
      {
        "question": "¿Cuál de estas profesiones trabaja en un hospital?",
        "choices": ["abogado", "médico", "carpintero", "contador"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "¿Cómo se dice 'secretary' en español?",
        "choices": ["gerente", "ingeniero", "secretario", "obrero"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "¿Qué verbo usarías para hablar formalmente con un jefe?",
        "choices": ["tú", "usted", "nosotros", "ellos"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Completa la frase: ¿Puede ______ su identificación, por favor?",
        "choices": ["mostrarme", "hablar", "decir", "caminar"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿Qué opción describe mejor a un 'ingeniero'?",
        "choices": [
          "Trabaja en proyectos de construcción y diseño.",
          "Ayuda a los pacientes en un hospital.",
          "Prepara reportes financieros.",
          "Organiza reuniones en una oficina."
        ],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿Qué significa 'cliente'?",
        "choices": ["client", "worker", "manager", "engineer"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Completa la frase: ¿Dónde ______ usted?",
        "choices": ["estás", "está", "estoy", "están"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "¿Qué profesión corresponde a 'cuenta dinero y prepara balances'?",
        "choices": ["médico", "secretario", "contador", "carpintero"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "¿Qué forma es correcta para un jefe hablando con sus empleados?",
        "choices": [
          "Tú tienes que llegar temprano.",
          "Usted tiene que llegar temprano.",
          "Ellos tienen que llegar temprano.",
          "Nosotros tenemos que llegar temprano."
        ],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "¿Cuál es la forma correcta de hablar con un amigo?",
        "choices": ["tú", "usted", "él", "ellos"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      
      // 20 Fill in the Blanks

      {
        "question": "Yo soy ______ (doctor). Trabajo en un hospital.",
        "choices": ["doctor","médico","medico"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Mi madre es ______ (profesor). Enseña en una universidad.",
        "choices": ["profesora"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Tú ______ (hablar) con tus colegas en español.",
        "choices": ["hablas"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "¿(Ser)______ usted el jefe de esta empresa?",
        "choices": ["Es"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "La secretaria organiza las ______ (reuniones) para el equipo.",
        "choices": ["reuniones"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "¿Puedes ______ (escribir) un correo a tu jefe?",
        "choices": ["escribir"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Los ______ (clientes) siempre son muy educados con nosotros.",
        "choices": ["clientes"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ellos ______ (trabajar) como ingenieros en la empresa.",
        "choices": ["trabajan"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "¿Me puede decir cuál es su ______ (puesto) en la empresa?",
        "choices": ["puesto"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nosotros ______ (tener) una reunión con el gerente a las 3 PM.",
        "choices": ["tenemos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "carpintero", "rightId": 1 },
            "right": { "word": "company", "rightId": 3 }
          },
          {
            "left": { "word": "médico", "rightId": 2 },
            "right": { "word": "lawyer", "rightId": 4 }
          },
          {
            "left": { "word": "empresa", "rightId": 3 },
            "right": { "word": "carpenter", "rightId": 1 }
          },
          {
            "left": { "word": "abogado", "rightId": 4 },
            "right": { "word": "secretary", "rightId": 5 }
          },
          {
            "left": { "word": "secretario", "rightId": 5 },
            "right": { "word": "doctor", "rightId": 2 }
          },
        ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "contador", "rightId": 1 },
            "right": { "word": "manager", "rightId": 3 }
          },
          {
            "left": { "word": "cliente", "rightId": 2 },
            "right": { "word": "engineer", "rightId": 5 }
          },
          {
            "left": { "word": "gerente", "rightId": 3 },
            "right": { "word": "accountant", "rightId": 1 }
          },
          {
            "left": { "word": "obrero", "rightId": 4 },
            "right": { "word": "client", "rightId": 2 }
          },
          {
            "left": { "word": "ingeniero", "rightId": 5 },
            "right": { "word": "worker", "rightId": 4 }
          }
        ]
      }
      
    ]
  },
  {
    quiz: '15',
    name: 'Spanish Exercise - 15 (A2)',
    level: 'Easy',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs
      {
        "question": "¿Cuál es el significado de 'red social' en español?",
        "choices": [
          "Una aplicación de mensajería",
          "Un programa de televisión",
          "Una plataforma para compartir contenido en línea",
          "Un sistema de navegación"
        ],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "¿Qué significa 'correo electrónico'?",
        "choices": [
          "Un mensaje escrito en papel",
          "Un tipo de software",
          "Un mensaje enviado a través de internet",
          "Una forma de videollamada"
        ],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "¿Qué es una 'videollamada'?",
        "choices": [
          "Una llamada en persona",
          "Una llamada a través de internet con video",
          "Un mensaje de texto",
          "Una llamada de audio"
        ],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "¿Qué dispositivo suele tener una 'pantalla táctil'?",
        "choices": [
          "Un teléfono móvil",
          "Una impresora",
          "Una televisión vieja",
          "Un teléfono fijo"
        ],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿Qué hace un 'navegador web'?",
        "choices": [
          "Envía correos electrónicos",
          "Ayuda a encontrar información en internet",
          "Guarda información en la nube",
          "Llama a otros usuarios"
        ],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "¿Cuál es la función de un 'enlace'?",
        "choices": [
          "Guardar un archivo",
          "Acceder a una página web",
          "Enviar un correo",
          "Crear una publicación"
        ],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "¿Qué significa 'actualizar' en el contexto de tecnología?",
        "choices": [
          "Poner en pausa un programa",
          "Descargar un archivo de internet",
          "Cambiar algo a la última versión disponible",
          "Apagar un dispositivo"
        ],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "¿Qué es un 'blog'?",
        "choices": [
          "Una red social",
          "Un sitio web personal donde se publican artículos",
          "Una aplicación de video",
          "Un tipo de correo electrónico"
        ],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "¿Para qué usamos una 'contraseña'?",
        "choices": [
          "Para encender el dispositivo",
          "Para proteger la información",
          "Para iniciar una videollamada",
          "Para enviar un mensaje"
        ],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "¿Qué significa 'aplicación móvil'?",
        "choices": [
          "Un tipo de navegador web",
          "Un software para computadora de escritorio",
          "Un programa para teléfonos móviles",
          "Una red social"
        ],
        "type": "MCQs",
        "correctAnswer": 3
      },
      
      // 20 Fill in the Blanks

      {
        "question": "El ______ (ordenador, computadora) está apagado.",
        "choices": ["ordenador"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ella usa su ______ (teléfono, móvil) para enviar mensajes.",
        "choices": ["móvil"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Los ______ (conectores, cables) están enredados.",
        "choices": ["cables"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Vamos a usar ______ (porque, pero) no podemos encontrar la contraseña.",
        "choices": ["porque"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "María necesita ______ (apagar, encender) su computadora.",
        "choices": ["encender"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Me gusta enviar mensajes ______ (aunque, ya que) a veces son largos.",
        "choices": ["aunque"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "En el ______ (correo, web) recibí un mensaje importante.",
        "choices": ["correo"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Los ______ (datos, películas) de este programa son enormes.",
        "choices": ["datos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(Y, También) ______ quiero hablar con mis amigos por videollamada.",
        "choices": ["También"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Necesito buscar información ______ (después, antes) de comenzar el trabajo.",
        "choices": ["antes"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Red social", "rightId": 1 },
            "right": { "word": "Software for browsing online", "rightId": 4 }
          },
          {
            "left": { "word": "Correo electrónico", "rightId": 2 },
            "right": { "word": "Call through the internet", "rightId": 3 }
          },
          {
            "left": { "word": "Videollamada", "rightId": 3 },
            "right": { "word": "Network for sharing images", "rightId": 1 }
          },
          {
            "left": { "word": "Navegador web", "rightId": 4 },
            "right": { "word": "Platform for text communication", "rightId": 5 }
          },
          {
            "left": { "word": "Aplicación móvil", "rightId": 5 },
            "right": { "word": "Application for sending and receiving emails", "rightId": 2 }
          },
        ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Enlace", "rightId": 1 },
            "right": { "word": "Personal website with regular posts", "rightId": 3 }
          },
          {
            "left": { "word": "Pantalla táctil", "rightId": 2 },
            "right": { "word": "Code to protect access", "rightId": 5 }
          },
          {
            "left": { "word": "Blog", "rightId": 3 },
            "right": { "word": "URL to access a web page", "rightId": 1 }
          },
          {
            "left": { "word": "Actualizar", "rightId": 4 },
            "right": { "word": "Feature of modern devices", "rightId": 2 }
          },
          {
            "left": { "word": "Contraseña", "rightId": 5 },
            "right": { "word": "Change to the latest version", "rightId": 4 }
          }
        ]
      }
      
    ]
  },
  {
    quiz: '16',
    name: 'Spanish Exercise - 16 (A2)',
    level: 'Easy',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs
      {
        "question": "¿Cuál de las siguientes películas fue dirigida por Pedro Almodóvar?",
        "choices": ["El Laberinto del Fauno", "La Casa de Papel", "El Secreto de Sus Ojos", "Volver"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "¿Qué tipo de medio es un periódico?",
        "choices": ["Impreso", "Radio", "Internet", "Televisión"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿Quién escribió el libro Cien años de soledad?",
        "choices": [ "Pablo Neruda", "Gabriel García Márquez", "Isabel Allende", "Juan Rulfo"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "¿Qué es una serie de televisión?",
        "choices": [ "Un tipo de película corta", "Un programa televisivo dividido en episodios", "Un libro de capítulos", "Un género de música"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "¿Qué significa 'relación' en gramática?",
        "choices": ["Un tipo de cláusula que conecta ideas", "Una conversación entre personas", "Un verbo de acción", "Un sustantivo"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿Qué es un actor?",
        "choices": [ "Una persona que escribe libros", "Una persona que hace música", "Una persona que interpreta un personaje en una obra", "Una persona que edita películas"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "¿Cómo se llama el director de La Casa de Papel?",
        "choices": ["Álex Pina", "Alejandro González Iñárritu", "Guillermo del Toro", "Pedro Almodóvar"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿Qué es una novela?",
        "choices": [ "Una película corta", "Un tipo de revista", "Una obra escrita larga de ficción", "Una noticia en el periódico"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "¿En qué tipo de medio se escucha música principalmente?",
        "choices": ["Radio", "Periódico", "Libro", "Televisión"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿Qué tipo de literatura es Don Quijote de la Mancha?",
        "choices": [ "Ciencia ficción", "Drama", "Novela clásica", "Poesía"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      
      // 20 Fill in the Blanks

      {
        "question": "La película ______ (que/quien) vimos ayer fue muy interesante.",
        "choices": ["que"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "El libro ______ (que/quien) estoy leyendo es de Gabriel García Márquez.",
        "choices": ["que"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Necesito saber ______ (quién/quien) llamó esta mañana.",
        "choices": ["quién"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "La noticia ______ (que/quien) escuché fue muy preocupante.",
        "choices": ["que"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Me gusta mucho el cine ______ (que/quien) muestra historias de la vida real.",
        "choices": ["que"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "El director ______ (que/quien) hizo esta película es muy famoso en España.",
        "choices": ["quien"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "El autor ______ (quien/que) escribió 'Cien años de soledad' es colombiano.",
        "choices": ["quien"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "La película ______ (que/quien) ganó el premio fue vista por millones de personas.",
        "choices": ["que"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "La novela ______ (quien/que) estamos leyendo trata sobre la guerra civil.",
        "choices": ["que"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "El periódico ______ (que/quien) me suscribí es muy popular.",
        "choices": ["que"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Cine", "rightId": 1 },
            "right": { "word": "Something that is heard on the radio", "rightId": 4 }
          },
          {
            "left": { "word": "Periódico", "rightId": 2 },
            "right": { "word": "A form of written art", "rightId": 3 }
          },
          {
            "left": { "word": "Literatura", "rightId": 3 },
            "right": { "word": "Something that is seen on television or in the cinema", "rightId": 1 }
          },
          {
            "left": { "word": "Canción", "rightId": 4 },
            "right": { "word": "A person who directs a movie", "rightId": 5 }
          },
          {
            "left": { "word": "Director", "rightId": 5 },
            "right": { "word": "A medium of communication that informs about current events", "rightId": 2 }
          },
        ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Película", "rightId": 1 },
            "right": { "word": "A person who acts in a movie", "rightId": 3 }
          },
          {
            "left": { "word": "Autor", "rightId": 2 },
            "right": { "word": "A person who plays a role in a movie", "rightId": 5 }
          },
          {
            "left": { "word": "Actor", "rightId": 3 },
            "right": { "word": "A production of movies or television", "rightId": 1 }
          },
          {
            "left": { "word": "Libro", "rightId": 4 },
            "right": { "word": "A person who writes books", "rightId": 2 }
          },
          {
            "left": { "word": "Serie", "rightId": 5 },
            "right": { "word": "A written work that has many chapters", "rightId": 4 }
          }
        ]
      }
      
    ]
  },
  {
    quiz: '17',
    name: 'Spanish Exercise - 17 (A2)',
    level: 'Easy',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs
      {
        "question": "¿Qué significa 'voluntario' en español?",
        "choices": ["Volunteer", "Helper", "Citizen", "Teacher"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿Cuál de estas frases está en presente?",
        "choices": ["Está trabajando", "Estaba trabajando", "Trabajó", "Trabajará"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿Qué es la 'igualdad'?",
        "choices": [ "A system of unequal rights", "Equal rights for all", "A fight for rights", "The absence of justice"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "¿Cuál de los siguientes es un ejemplo de 'trabajo social'?",
        "choices": [ "Organizar eventos", "Voluntariado", "Hacer compras", "Enseñar en la escuela"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "¿Qué forma de verbo está en futuro?",
        "choices": [ "Ayudé", "Ayudando", "Ayudaré", "Ayudaba"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "¿Qué papel tiene la 'comunidad' en la sociedad?",
        "choices": [ "Resolver problemas individuales", "Vivir de manera independiente", "Vivir en armonía", "Decidir las leyes"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "¿Qué es la 'pobreza'?",
        "choices": [ "Tener mucho dinero", "Un tipo de comida", "Un cargo político", "La falta de necesidades básicas"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "¿Qué tenso se utiliza para expresar algo que sucede habitualmente?",
        "choices": [ "Futuro", "Presente", "Pretérito imperfecto", "Condicional"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Las ______ son un grupo que lucha por sus derechos en la sociedad.",
        "choices": [ "Niños", "Gente rica", "Ciudadanos", "Mujeres"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "Los jóvenes deben ______ en proyectos comunitarios.",
        "choices": [ "Ser ayudados", "Ayudar", "Ayudaron", "Ayudarían"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      
      // 20 Fill in the Blanks

      {
        "question": "La ______ (profesión) de mi hermano es médico.",
        "choices": ["profesión","profesion"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "En mi ______ (comunidad), hay muchas personas que ayudan a los demás.",
        "choices": ["comunidad"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ellos ______ (trabajar) en una organización sin ánimo de lucro para resolver problemas sociales.",
        "choices": ["trabajan"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "El gobierno está ______ (enfocar) su atención en la educación para mejorar la sociedad.",
        "choices": ["enfocando"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(mujeres) ______ luchan por la igualdad en muchos países.",
        "choices": ["Las mujeres"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Los voluntarios ______ (ayudar) en situaciones de emergencia.",
        "choices": ["ayudan"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "En nuestra sociedad, todos ______ (tener) derecho a la educación.",
        "choices": ["tienen"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Los ______ (joven) deben ser responsables y ayudar a su comunidad.",
        "choices": ["jóvenes"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Las personas ______ (vivir) en la pobreza necesitan más apoyo.",
        "choices": ["que viven"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "El gobierno ______ (trabajar) en una campaña para mejorar la salud pública.",
        "choices": ["trabaja"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Voluntario", "rightId": 1 },
            "right": { "word": "Laws or strategies created to help manage social issues.", "rightId": 4 }
          },
          {
            "left": { "word": "Igualdad", "rightId": 2 },
            "right": { "word": "A system of people working together in a community.", "rightId": 3 }
          },
          {
            "left": { "word": "Sociedad", "rightId": 3 },
            "right": { "word": "A job that directly helps people in need.", "rightId": 1 }
          },
          {
            "left": { "word": "Educación", "rightId": 4 },
            "right": { "word": "The absence of enough money to meet basic needs.", "rightId": 5 }
          },
          {
            "left": { "word": "Pobreza", "rightId": 5 },
            "right": { "word": "A state of equal rights and opportunities for all.", "rightId": 2 }
          },
        ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Trabajo social ", "rightId": 1 },
            "right": { "word": "Laws or strategies created to help manage social issues.", "rightId": 3 }
          },
          {
            "left": { "word": "Comunidad", "rightId": 2 },
            "right": { "word": "A young person actively involved in community activities.", "rightId": 5 }
          },
          {
            "left": { "word": "Política", "rightId": 3 },
            "right": { "word": "A job that directly helps people in need.", "rightId": 1 }
          },
          {
            "left": { "word": "Mujer", "rightId": 4 },
            "right": { "word": "A group of people living in a particular area with shared values.", "rightId": 2 }
          },
          {
            "left": { "word": "Joven", "rightId": 5 },
            "right": { "word": "A woman’s fight for equal rights.", "rightId": 4 }
          }
        ]
      }
      
    ]
  },
  {
    quiz: '18',
    name: 'Spanish Exercise - 18 (A2)',
    level: 'Easy',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs
      {
        "question": "¿Qué significa 'voluntario' en español?",
        "choices": ["Volunteer", "Helper", "Citizen", "Teacher"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿Cuál de estas frases está en presente?",
        "choices": ["Está trabajando", "Estaba trabajando", "Trabajó", "Trabajará"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿Qué es la 'igualdad'?",
        "choices": [ "A system of unequal rights", "Equal rights for all", "A fight for rights", "The absence of justice"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "¿Cuál de los siguientes es un ejemplo de 'trabajo social'?",
        "choices": [ "Organizar eventos", "Voluntariado", "Hacer compras", "Enseñar en la escuela"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "¿Qué forma de verbo está en futuro?",
        "choices": [ "Ayudé", "Ayudando", "Ayudaré", "Ayudaba"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "¿Qué papel tiene la 'comunidad' en la sociedad?",
        "choices": [ "Resolver problemas individuales", "Vivir de manera independiente", "Vivir en armonía", "Decidir las leyes"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "¿Qué es la 'pobreza'?",
        "choices": [ "Tener mucho dinero", "Un tipo de comida", "Un cargo político", "La falta de necesidades básicas"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "¿Qué tenso se utiliza para expresar algo que sucede habitualmente?",
        "choices": [ "Futuro", "Presente", "Pretérito imperfecto", "Condicional"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Las ______ son un grupo que lucha por sus derechos en la sociedad.",
        "choices": [ "Niños", "Gente rica", "Ciudadanos", "Mujeres"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "Los jóvenes deben ______ en proyectos comunitarios.",
        "choices": [ "Ser ayudados", "Ayudar", "Ayudaron", "Ayudarían"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      
      // 20 Fill in the Blanks

      {
        "question": "La ______ (profesión) de mi hermano es médico.",
        "choices": ["profesión","profesion"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "En mi ______ (comunidad), hay muchas personas que ayudan a los demás.",
        "choices": ["comunidad"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ellos ______ (trabajar) en una organización sin ánimo de lucro para resolver problemas sociales.",
        "choices": ["trabajan"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "El gobierno está ______ (enfocar) su atención en la educación para mejorar la sociedad.",
        "choices": ["enfocando"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(mujeres) ______ luchan por la igualdad en muchos países.",
        "choices": ["Las mujeres"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Los voluntarios ______ (ayudar) en situaciones de emergencia.",
        "choices": ["ayudan"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "En nuestra sociedad, todos ______ (tener) derecho a la educación.",
        "choices": ["tienen"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Los ______ (joven) deben ser responsables y ayudar a su comunidad.",
        "choices": ["jóvenes"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Las personas ______ (vivir) en la pobreza necesitan más apoyo.",
        "choices": ["que viven"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "El gobierno ______ (trabajar) en una campaña para mejorar la salud pública.",
        "choices": ["trabaja"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Voluntario", "rightId": 1 },
            "right": { "word": "Laws or strategies created to help manage social issues.", "rightId": 4 }
          },
          {
            "left": { "word": "Igualdad", "rightId": 2 },
            "right": { "word": "A system of people working together in a community.", "rightId": 3 }
          },
          {
            "left": { "word": "Sociedad", "rightId": 3 },
            "right": { "word": "A job that directly helps people in need.", "rightId": 1 }
          },
          {
            "left": { "word": "Educación", "rightId": 4 },
            "right": { "word": "The absence of enough money to meet basic needs.", "rightId": 5 }
          },
          {
            "left": { "word": "Pobreza", "rightId": 5 },
            "right": { "word": "A state of equal rights and opportunities for all.", "rightId": 2 }
          },
        ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "Trabajo social ", "rightId": 1 },
            "right": { "word": "Laws or strategies created to help manage social issues.", "rightId": 3 }
          },
          {
            "left": { "word": "Comunidad", "rightId": 2 },
            "right": { "word": "A young person actively involved in community activities.", "rightId": 5 }
          },
          {
            "left": { "word": "Política", "rightId": 3 },
            "right": { "word": "A job that directly helps people in need.", "rightId": 1 }
          },
          {
            "left": { "word": "Mujer", "rightId": 4 },
            "right": { "word": "A group of people living in a particular area with shared values.", "rightId": 2 }
          },
          {
            "left": { "word": "Joven", "rightId": 5 },
            "right": { "word": "A woman’s fight for equal rights.", "rightId": 4 }
          }
        ]
      }
      
    ]
  },
  {
    quiz: '19',
    name: 'Spanish Exercise - 19 (A2)',
    level: 'Easy',
    topic: 'Mixed',
    questions: [
      
      // 20 MCQs
      {
        "question": "¿__________ el supermercado más cercano?",
        "choices": ["Dónde", "Cómo", "Qué", "Cuándo"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿__________ prefieres, café o té?",
        "choices": ["Qué", "Dónde", "Cuándo", "Cómo"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "El __________ está al lado de la estación de tren.",
        "choices": ["cine", "restaurante", "supermercado", "banco"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "¿__________ vas de vacaciones?",
        "choices": ["Qué", "Cómo", "Cuándo", "Dónde"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "Yo __________ una pizza grande, por favor.",
        "choices": ["quiero", "quiero que", "querer", "querría"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿__________ está la tienda de ropa?",
        "choices": ["Dónde", "Cómo", "Qué", "Cuándo"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Nosotros __________ viajar a España el próximo verano.",
        "choices": ["vamos a", "vamos", "viajan", "viajamos"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Ellos __________ muy temprano al aeropuerto.",
        "choices": ["salen", "salieron", "sale", "salir"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿__________ me puedes traer la cuenta?",
        "choices": ["Cuando", "Dónde", "Qué", "Por favor"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "Yo __________ a la tienda a comprar pan.",
        "choices": ["voy", "va", "voy a", "fui"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿__________ puedo pagar con tarjeta de crédito?",
        "choices": ["Dónde", "Cómo", "Cuándo", "Qué"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "¿__________ es la playa más cercana?",
        "choices": ["Qué", "Dónde", "Cuándo", "Cómo"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Quiero comprar __________ en la tienda de ropa.",
        "choices": ["una camisa", "unas camisas", "un camisa", "unos camisas"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿__________ es tu restaurante favorito?",
        "choices": ["Qué", "Cuál", "Cómo", "Dónde"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "¿__________ vamos al cine o al restaurante?",
        "choices": ["Cuándo", "Cómo", "Qué", "Dónde"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "__________ de viajar a España en verano.",
        "choices": ["Estoy pensando", "Pensando", "Pienso", "Pensé"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "¿__________ hay un banco cerca de aquí?",
        "choices": ["Dónde", "Qué", "Cómo", "Cuándo"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Ellos __________ comer en un restaurante italiano.",
        "choices": ["prefieren", "preferir", "prefiera", "preferido"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "El taxi __________ aquí dentro de 10 minutos.",
        "choices": ["llegaba", "llegará", "llega", "llegó"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "¿__________ la estación de tren desde aquí?",
        "choices": ["Cómo llego", "Dónde llego", "Qué llego", "Cuándo llego"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      
      // 20 Fill in the Blanks

      {
        "question": "Yo __________ (go) al mercado para comprar frutas.",
        "choices": ["voy"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "¿(As) __________ estás? ¡Hace mucho calor!",
        "choices": ["Cómo"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ella __________ (like) mucho la comida española.",
        "choices": ["gusta"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nosotros __________ (travel) a Madrid el próximo mes.",
        "choices": ["viajamos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "El mes pasado, __________ (eat) en un restaurante mexicano.",
        "choices": ["comí"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Yo __________ (need) una botella de agua, por favor.",
        "choices": ["necesito"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "¿(Where) __________ está la estación de tren?",
        "choices": ["Dónde"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ellos __________ (talk) español y francés.",
        "choices": ["hablan"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "¿(How many) __________ años tienes?",
        "choices": ["Cuántos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nosotros __________ (can) ir de compras mañana.",
        "choices": ["podemos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Me __________ (love) los zapatos que llevas.",
        "choices": ["encantan"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nosotros __________ (have) que comprar un mapa para el viaje.",
        "choices": ["tenemos"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Quiero __________ (buy) una camiseta en esta tienda.",
        "choices": ["comprar"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "¿(That) __________ prefieres, la pizza o la pasta?",
        "choices": ["Qué"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "A mí __________ (like) mucho viajar a la playa.",
        "choices": ["gusta"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Yo __________ (need) cambiar dinero en el banco.",
        "choices": ["necesito"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ustedes __________ (take) un taxi para ir al restaurante.",
        "choices": ["toman"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(Is) __________ un buen restaurante, ¿verdad?",
        "choices": ["Es"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "¿(Where) __________ están los baños, por favor?",
        "choices": ["Dónde"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "La cuenta, __________ (please).",
        "choices": ["por favor"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "la tienda de ropa", "rightId": 1 },
            "right": { "word": "the beach", "rightId": 4 }
          },
          {
            "left": { "word": "el avión", "rightId": 2 },
            "right": { "word": "the train station", "rightId": 3 }
          },
          {
            "left": { "word": "la estación de tren", "rightId": 3 },
            "right": { "word": "the clothing store", "rightId": 1 }
          },
          {
            "left": { "word": "la playa", "rightId": 4 },
            "right": { "word": "the menu", "rightId": 5 }
          },
          {
            "left": { "word": "el menú", "rightId": 5 },
            "right": { "word": "the plane", "rightId": 2 }
          },
        ]
      },
      {
        "question": "Empareja las palabras singulares y plurales.",
        "type": "MatchTheFollowing",
        "pairs": [
          {
            "left": { "word": "el supermercado", "rightId": 1 },
            "right": { "word": "the passport", "rightId": 3 }
          },
          {
            "left": { "word": "el taxi", "rightId": 2 },
            "right": { "word": "the backpack", "rightId": 5 }
          },
          {
            "left": { "word": "el pasaporte", "rightId": 3 },
            "right": { "word": "the supermarket", "rightId": 1 }
          },
          {
            "left": { "word": "el restaurante", "rightId": 4 },
            "right": { "word": "the taxi", "rightId": 2 }
          },
          {
            "left": { "word": "la mochila", "rightId": 5 },
            "right": { "word": "the restaurant", "rightId": 4 }
          }
        ]
      }
      
    ]
  },

];
