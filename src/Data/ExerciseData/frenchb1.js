export const quiz = [
    {
      quiz: '1',
      name: 'French Exercise - 1',
      level: 'Intermediate',
      topic: 'Mixed',
      questions: [

        {
          "question": "Comment dit-on 'He wakes up early' en français ?",
          "choices": ["Il se promène tôt", "Il se réveille tôt", "Il se prépare tôt", "Il se repose tôt"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Quelle est la traduction de 'She is intelligent and kind'?",
          "choices": ["Elle est intelligente et gentille", "Elle est gentille et travailleuse", "Elle est sociable et sérieuse", "Elle est fatiguée et timide"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "Lequel de ces verbes est un verbe réfléchi ?",
          "choices": ["écouter", "se lever", "manger", "lire"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Choisissez l’adjectif qui décrit une personne 'timide' en français :",
          "choices": ["sociable", "sérieux", "réservé", "bavard"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "Comment exprimer 'I relax in the evening' ?",
          "choices": ["Je me réveille le soir", "Je me repose le soir", "Je m’habille le soir", "Je me prépare le soir"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Quel mot décrit une personne toujours prête à aider les autres ?",
          "choices": ["gentille", "timide", "bavarde", "fatiguée"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "Quel adjectif décrit une personne très sérieuse et organisée ?",
          "choices": ["travailleur", "sociable", "aimable", "paresseux"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "Comment dit-on 'They are interested in music'?",
          "choices": ["Ils se reposent en musique", "Ils s’intéressent à la musique", "Ils écoutent la musique", "Ils s’amusent avec la musique"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Quelle phrase est correcte pour décrire une femme aux cheveux longs ?",
          "choices": ["Elle a les cheveux courts", "Elle a les cheveux longs", "Elle a les cheveux bruns", "Elle a les cheveux roux"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Quel est le contraire de 'fatigué' ?",
          "choices": ["triste", "heureux", "énergique", "sérieux"],
          "type": "MCQs",
          "correctAnswer": 3
        },

            {
              "question": "Je ______ (se lever) à 7 heures du matin chaque jour.",
              "choices": ["me lève"],
              "type": "FillInTheBlanks",
              "correctAnswer": 1
            },
            {
              "question": "Elle ______ (s’appeler) Marie, et elle est très gentille.",
              "choices": ["s’appelle"],
              "type": "FillInTheBlanks",
              "correctAnswer": 1
            },
            {
              "question": "Nous ______ (se promener) dans le parc après le déjeuner.",
              "choices": ["nous promenons"],
              "type": "FillInTheBlanks",
              "correctAnswer": 1
            },
            {
              "question": "Ils ______ (se préparer) pour le dîner ce soir.",
              "choices": ["se préparent"],
              "type": "FillInTheBlanks",
              "correctAnswer": 1
            },
            {
              "question": "Vous ______ (se laver) les mains avant de manger, n’est-ce pas ?",
              "choices": ["vous lavez"],
              "type": "FillInTheBlanks",
              "correctAnswer": 1
            },
            {
              "question": "Paul ______ (être) un homme très travailleur et intelligent.",
              "choices": ["est"],
              "type": "FillInTheBlanks",
              "correctAnswer": 1
            },
            {
              "question": "Sophie est vraiment ______ (adorable), toujours prête à aider les autres.",
              "choices": ["adorable"],
              "type": "FillInTheBlanks",
              "correctAnswer": 1
            },
            {
              "question": "Mes amis ______ (avoir) beaucoup d’énergie et aiment les activités sportives.",
              "choices": ["ont"],
              "type": "FillInTheBlanks",
              "correctAnswer": 1
            },
            {
              "question": "Tu ______ (s’habiller) élégamment pour aller à la fête ?",
              "choices": ["t’habilles"],
              "type": "FillInTheBlanks",
              "correctAnswer": 1
            },
            {
              "question": "Il est grand et ______ (brun), avec des yeux verts magnifiques.",
              "choices": ["brun"],
              "type": "FillInTheBlanks",
              "correctAnswer": 1
            },

        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "se réveiller", "rightId": 1 },
              "right": { "word": "to describe oneself", "rightId": 5 }
            },
            {
              "left": { "word": "sociable", "rightId": 2 },
              "right": { "word": "To wake up", "rightId": 1 }
            },
            {
              "left": { "word": "sérieux/sérieuse", "rightId": 3 },
              "right": { "word": "friendly", "rightId": 2 }
            },
            {
              "left": { "word": "s’amuser", "rightId": 4 },
              "right": { "word": "serious", "rightId": 3 }
            },
            {
              "left": { "word": "se décrire", "rightId": 5 },
              "right": { "word": "to have fun", "rightId": 4 }
            },
          ],
        },

        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "timide", "rightId": 1 },
              "right": { "word": "to relax", "rightId": 4 }
            },
            {
              "left": { "word": "s’intéresser à", "rightId": 2 },
              "right": { "word": "tired", "rightId": 5 }
            },
            {
              "left": { "word": "bavard/bavarde", "rightId": 3 },
              "right": { "word": "shy", "rightId": 1 }
            },
            {
              "left": { "word": "se reposer", "rightId": 4 },
              "right": { "word": "to be interested in", "rightId": 2 }
            },
            {
              "left": { "word": "fatigué(e)", "rightId": 5 },
              "right": { "word": "talkative", "rightId": 3 }
            },
          ],
        },
  
      ],
    },
    {
      quiz: '2',
      name: 'French Exercise - 2',
      level: 'Intermediate',
      topic: 'Mixed',
      questions: [

        {
          "question": "Which of these is the correct imperfect form of 'aller' for 'nous'?",
          "choices": ["allons", "allions", "alliez", "allait"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Which of these words means 'vacuum cleaner'?",
          "choices": ["Aspirateur", "Balai", "Lave-linge", "Micro-ondes"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "Complete the sentence: Quand nous ______ (être) enfants, nous jouions dans le jardin.",
          "choices": ["sommes", "étions", "serions", "êtes"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What does 'faire la vaisselle' mean?",
          "choices": ["To vacuum", "To wash dishes", "To iron clothes", "To tidy the room"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Choose the correct imperfect form of 'faire' for 'ils':",
          "choices": ["faisaient", "faisions", "faisait", "faisiez"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "What is the French word for 'to mop'?",
          "choices": ["Balayer", "Passer la serpillière", "Nettoyer", "Repasser"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Which of the following phrases uses 'imparfait' correctly?",
          "choices": [
            "Je faisais mes devoirs hier soir.",
            "Je fais mes devoirs hier soir.",
            "Je ferais mes devoirs hier soir.",
            "Je faisa mes devoirs hier soir."
          ],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "Which of these is not a household chore?",
          "choices": ["Ranger la chambre", "Mettre la table", "Prendre un café", "Faire le ménage"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "Translate: 'They used to set the table every evening.'",
          "choices": [
            "Ils mettent la table chaque soir.",
            "Ils mettaient la table chaque soir.",
            "Ils mettront la table chaque soir.",
            "Ils mettiez la table chaque soir."
          ],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "What is the French word for 'to iron clothes'?",
          "choices": ["Ranger", "Étendre", "Repasser", "Nettoyer"],
          "type": "MCQs",
          "correctAnswer": 3
        },

            {
              "question": "Quand j'étais jeune, je ______ (jouer) au cricket tous les soirs.",
              "choices": ["jouais"],
              "type": "FillInTheBlanks",
              "correctAnswer": 1
            },
            {
              "question": "Elle ______ (lire) un livre pendant que son frère regardait la télé.",
              "choices": ["lisait"],
              "type": "FillInTheBlanks",
              "correctAnswer": 1
            },
            {
              "question": "Nous ______ (prendre) toujours le petit-déjeuner à 8 heures.",
              "choices": ["prenions"],
              "type": "FillInTheBlanks",
              "correctAnswer": 1
            },
            {
              "question": "Avant, tu ______ (se réveiller) plus tôt pour faire du yoga.",
              "choices": ["te réveillais"],
              "type": "FillInTheBlanks",
              "correctAnswer": 1
            },
            {
              "question": "Ils ______ (faire) leurs devoirs après l’école chaque jour.",
              "choices": ["faisaient"],
              "type": "FillInTheBlanks",
              "correctAnswer": 1
            },
            {
              "question": "Mon père ______ (préparer) le dîner pendant que je mettais la table.",
              "choices": ["préparait"],
              "type": "FillInTheBlanks",
              "correctAnswer": 1
            },
            {
              "question": "Pendant mon enfance, ma mère ______ (faire) la vaisselle chaque soir.",
              "choices": ["faisait"],
              "type": "FillInTheBlanks",
              "correctAnswer": 1
            },
            {
              "question": "Vous ______ (regarder) les informations après le dîner.",
              "choices": ["regardiez"],
              "type": "FillInTheBlanks",
              "correctAnswer": 1
            },
            {
              "question": "Je ______ (aimer) aller au marché chaque dimanche.",
              "choices": ["aimais"],
              "type": "FillInTheBlanks",
              "correctAnswer": 1
            },
            {
              "question": "Pendant les vacances, nous ______ (se promener) au bord de la mer.",
              "choices": ["nous promenions"],
              "type": "FillInTheBlanks",
              "correctAnswer": 1
            },

        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "faire le ménage", "rightId": 1 },
              "right": { "word": "to wash clothes", "rightId": 3 }
            },
            {
              "left": { "word": "passer l’aspirateur", "rightId": 2 },
              "right": { "word": "to do the cleaning", "rightId": 1 }
            },
            {
              "left": { "word": "laver les vêtements", "rightId": 3 },
              "right": { "word": "to vacuum", "rightId": 2 }
            },
            {
              "left": { "word": "préparer le dîner", "rightId": 4 },
              "right": { "word": "to tidy one’s room", "rightId": 5 }
            },
            {
              "left": { "word": "ranger sa chambre", "rightId": 5 },
              "right": { "word": "to prepare dinner", "rightId": 4 }
            },
          ],
        },

        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "faire la vaisselle", "rightId": 1 },
              "right": { "word": "to water the plants", "rightId": 2 }
            },
            {
              "left": { "word": "arroser les plantes", "rightId": 2 },
              "right": { "word": "to set the table", "rightId": 5 }
            },
            {
              "left": { "word": "repasser les vêtements", "rightId": 3 },
              "right": { "word": "to do the dishes", "rightId": 1 }
            },
            {
              "left": { "word": "étendre le linge", "rightId": 4 },
              "right": { "word": "to hang out the laundry", "rightId": 3 }
            },
            {
              "left": { "word": "mettre la table", "rightId": 5 },
              "right": { "word": "talkative", "rightId": 4 }
            },
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
          "question": "Quel temps est utilisé pour décrire une action terminée dans le passé ?",
          "choices": ["le futur", "l'imparfait", "le passé composé", "le conditionnel"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "Quel est l'auxiliaire utilisé dans le passé composé pour la plupart des verbes ?",
          "choices": ["être", "avoir", "faire", "aller"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Quand on parle de vacances passées, quel temps est généralement utilisé ?",
          "choices": ["le présent", "le futur", "l'imparfait", "le passé composé"],
          "type": "MCQs",
          "correctAnswer": 4
        },
        {
          "question": "Quelle phrase est au passé composé ?",
          "choices": [
            "Quand j'étais jeune, je voyageais souvent.",
            "Hier, j'ai visité Paris.",
            "L'été dernier, je partais toujours en voyage.",
            "Nous allions souvent à la plage quand nous étions petits."
          ],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Lequel des verbes suivants utilise 'être' comme auxiliaire au passé composé ?",
          "choices": ["manger", "finir", "arriver", "regarder"],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "Quel temps est utilisé pour décrire une situation qui était en cours dans le passé ?",
          "choices": ["le passé composé", "l'imparfait", "le futur proche", "le conditionnel"],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Quelle phrase est au passé composé ?",
          "choices": [
            "Je mangeais des croissants chaque matin.",
            "Nous avons visité le musée du Louvre.",
            "Ils faisaient du ski chaque hiver.",
            "Quand j'étais petit, je jouais dehors."
          ],
          "type": "MCQs",
          "correctAnswer": 2
        },
        {
          "question": "Quel est le temps qui exprime une action qui se répète régulièrement dans le passé ?",
          "choices": ["l'imparfait", "le passé composé", "le futur simple", "le conditionnel"],
          "type": "MCQs",
          "correctAnswer": 1
        },
        {
          "question": "En vacances, vous pouvez faire toutes ces choses sauf :",
          "choices": [
            "faire du camping",
            "passer du temps à la plage",
            "regarder un film à la maison",
            "visiter des monuments historiques"
          ],
          "type": "MCQs",
          "correctAnswer": 3
        },
        {
          "question": "Lequel des mots suivants décrit une action ponctuelle dans le passé ?",
          "choices": ["chaque année", "de temps en temps", "hier", "toujours"],
          "type": "MCQs",
          "correctAnswer": 3
        },

            {
              "question": "L'année dernière, je ______ (aller) en France pour mes vacances.",
              "choices": ["suis allé"],
              "type": "FillInTheBlanks",
              "correctAnswer": 1
            },
            {
              "question": "Quand j'étais jeune, je ______ (faire) souvent des randonnées dans les montagnes.",
              "choices": ["faisais"],
              "type": "FillInTheBlanks",
              "correctAnswer": 1
            },
            {
              "question": "Pendant mes vacances, j'______ (visiter) de nombreux musées.",
              "choices": ["ai visité"],
              "type": "FillInTheBlanks",
              "correctAnswer": 1
            },
            {
              "question": "Il ______ (pleuvoir) toute la journée pendant que nous faisions du camping.",
              "choices": ["pleuvait"],
              "type": "FillInTheBlanks",
              "correctAnswer": 1
            },
            {
              "question": "Hier, nous ______ (manger) dans un restaurant italien délicieux.",
              "choices": ["avons mangé"],
              "type": "FillInTheBlanks",
              "correctAnswer": 1
            },
            {
              "question": "Quand j'______ (arriver) à Paris, il était déjà tard.",
              "choices": ["suis arrivé"],
              "type": "FillInTheBlanks",
              "correctAnswer": 1
            },
            {
              "question": "Ils ______ (être) très heureux de leur voyage en Italie.",
              "choices": ["étaient"],
              "type": "FillInTheBlanks",
              "correctAnswer": 1
            },
            {
              "question": "En 2019, nous ______ (partir) en Espagne pendant l'été.",
              "choices": ["sommes partis"],
              "type": "FillInTheBlanks",
              "correctAnswer": 1
            },
            {
              "question": "Pendant notre séjour à la plage, il ______ (y avoir) beaucoup de vent.",
              "choices": ["y avait"],
              "type": "FillInTheBlanks",
              "correctAnswer": 1
            },
            {
              "question": "L'été dernier, nous ______ (passer) nos vacances en Provence.",
              "choices": ["avons passé"],
              "type": "FillInTheBlanks",
              "correctAnswer": 1
            },

        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "J'ai visité la tour Eiffel", "rightId": 1 },
              "right": { "word": "She used to ride a bike every morning", "rightId": 4 }
            },
            {
              "left": { "word": "Nous avons pris un avion", "rightId": 2 },
              "right": { "word": "It was raining when we left", "rightId": 5 }
            },
            {
              "left": { "word": "Ils ont mangé au restaurant", "rightId": 3 },
              "right": { "word": "We took a plane", "rightId": 2 }
            },
            {
              "left": { "word": "Elle faisait du vélo chaque matin", "rightId": 4 },
              "right": { "word": "I visited the Eiffel Tower", "rightId": 1 }
            },
            {
              "left": { "word": "Il pleuvait quand nous sommes partis", "rightId": 5 },
              "right": { "word": "They ate at the restaurant", "rightId": 3 }
            },
          ],
        },

        {
          "question": "Match the Words.",
          type: "MatchTheFollowing",
          "pairs": [
            {
              "left": { "word": "Je lisais un livre", "rightId": 1 },
              "right": { "word": "We went to the beach", "rightId": 2 }
            },
            {
              "left": { "word": "Nous sommes allés à la plage", "rightId": 2 },
              "right": { "word": "They were watching a movie", "rightId": 5 }
            },
            {
              "left": { "word": "J’ai acheté des souvenirs", "rightId": 3 },
              "right": { "word": "I was reading a book", "rightId": 1 }
            },
            {
              "left": { "word": "Vous aviez un chien", "rightId": 4 },
              "right": { "word": "I bought some souvenirs", "rightId": 3 }
            },
            {
              "left": { "word": "Ils regardaient un film", "rightId": 5 },
              "right": { "word": "You used to have a dog", "rightId": 4 }
            },
          ],
        },
  
      ],
    },
]