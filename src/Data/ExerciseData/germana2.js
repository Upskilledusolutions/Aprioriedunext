export const quiz = [
  {
    quiz: '1',
    name: 'German Exercise - 1 (A2)',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      // 20 MCQs
      {
        "question": "Which reflexive pronoun is used with 'we'?",
        "choices": ["mich", "uns", "dich", "sich"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What does 'sich beeilen' mean?",
        "choices": ["To relax", "To get dressed", "To hurry", "To wake up"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "How do you say 'He shaves himself' in German?",
        "choices": ["Er rasiert sich.", "Er rasiert ihn.", "Er rasiert dich.", "Er rasiert uns."],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Choose the correct form: 'Ich __________ mich jeden Morgen.'",
        "choices": ["wasche", "wäschst", "waschen", "wäscht"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which verb is used for 'to get dressed'?",
        "choices": ["sich waschen", "sich ausruhen", "sich anziehen", "sich beeilen"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Which translation is correct for 'We relax in the evening'?",
        "choices": ["Wir beeilen uns am Abend.", "Wir waschen uns am Abend.", "Wir ziehen uns am Abend an.", "Wir ruhen uns am Abend aus."],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "Which reflexive pronoun is used with 'she' (singular)?",
        "choices": ["sich", "uns", "euch", "mich"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "How do you say 'You (informal) hurry' in German?",
        "choices": ["Du beeilst dich.", "Sie beeilen sich.", "Du beeilst uns.", "Ihr beeilt euch."],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which word fits? 'Ich __________ mich abends auf dem Sofa aus.'",
        "choices": ["kämme", "wasche", "ruhe", "rasieren"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Choose the correct translation for 'She washes herself every morning':",
        "choices": ["Sie waschen sich jeden Morgen.", "Sie wäscht sich jeden Morgen.", "Sie wascht sie jeden Morgen.", "Sie wäscht sie jeden Morgen."],
        "type": "MCQs",
        "correctAnswer": 2
      },

      // 20 Fill in the Blanks
      {
        "question": "Jeden Morgen ______ (wash me) ich das Gesicht.",
        "choices": ["wasche mich", "putze mir die Zähne", "bereiten uns vor", "legt sich hin"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Wir ______ (let's hurry up), um pünktlich zur Arbeit zu kommen.",
        "choices": ["beeilen uns", "konzentrierst dich", "zieht euch an", "ruhst dich aus"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ihr ______ (get dressed) warm, wenn es kalt ist.",
        "choices": ["zieht euch an", "duscht sich", "rasiert sich", "bereiten uns vor"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nach dem Training ______ (takes a shower) sie.",
        "choices": ["duscht sich", "konzentrierst dich", "beeilen uns", "wasche mich"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Am Abend ______ (rest) du auf dem Sofa.",
        "choices": ["ruhst dich aus", "zieht euch an", "putze mir die Zähne", "beeilen uns"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Er ______ (shaves) jeden zweiten Tag.",
        "choices": ["rasiert sich", "legt sich hin", "konzentrierst dich", "duscht sich"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Wir ______ (prepare ourselves) auf den großen Test.",
        "choices": ["bereiten uns vor", "ruhst dich aus", "zieht euch an", "konzentrierst dich"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Du ______ (concentrate) während des Unterrichts.",
        "choices": ["konzentrierst dich", "rasiert sich", "putze mir die Zähne", "legt sich hin"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Sie ______ (lies down) früh, weil sie morgen früh aufstehen muss.",
        "choices": ["legt sich hin", "duscht sich", "konzentrierst dich", "ruhst dich aus"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Nach dem Frühstück ______ (brush my teeth) ich.",
        "choices": ["putze mir die Zähne", "beeilen uns", "wasche mich", "konzentrierst dich"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
  "question": "Ordne die Singular- und Pluralwörter zu.",
  "type": "MatchTheFollowing",
"pairs": [
    {
      "left": { "word": "Ich wasche mich.", "rightId": 1 },
      "right": { "word": "I wake up.", "rightId": 7 }

    },
    {
      "left": { "word": "Du ziehst dich an.", "rightId": 2 },
      "right": { "word": "They brush their teeth.", "rightId": 10 }

    },
    {
      "left": { "word": "Er rasiert sich.", "rightId": 3 },
      "right": { "word": "She rests.", "rightId": 8 }
      
    },
    {
      "left": { "word": "Wir bereiten uns vor.", "rightId": 4 },
      "right": { "word": "You comb your hair.", "rightId": 9 }
      
    },
    {
      "left": { "word": "Ihr freut euch auf den Tag.", "rightId": 5 },
      "right": { "word": "You look forward to the day.", "rightId": 5 }

    },
    {
      "left": { "word": "Sie legt sich schlafen.", "rightId": 6 },
      "right": { "word": "She goes to sleep.", "rightId": 6 }
      
    },
    {
      "left": { "word": "Ich wache auf.", "rightId": 7 },
      "right": { "word": "We prepare ourselves.", "rightId": 4 }
      
    },
    {
      "left": { "word": "Sie ruht sich aus.", "rightId": 8 },
      "right": { "word": "He shaves.", "rightId": 3 }
      
    },
    {
      "left": { "word": "Du kämmst dich.", "rightId": 9 },
      "right": { "word": "You get dressed.", "rightId": 2 }
      
    },
    {
      "left": { "word": "Sie putzen sich die Zähne.", "rightId": 10 },
      "right": { "word": "I wash myself.", "rightId": 1 }
      
    }
  ]
}
    ]
  },
  {
    quiz: '2',
    name: 'German Exercise - 2 (A2)',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      // 20 MCQs
      {
        "question": "Which word correctly completes the sentence? \"Der Berg ist __________ als der Hügel.\"",
        "choices": ["hoher", "höher", "höchst", "hochster"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the superlative form of \"schnell\"?",
        "choices": ["schneller", "schnelles", "am schnellsten", "schnellere"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Which is the correct form? \"Die Möbel sind __________ als vorher.\"",
        "choices": ["bequemer", "bequemsten", "bequem", "bequemes"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "The correct sentence is:",
        "choices": ["Ich bin am klugste.", "Ich bin klüger.", "Ich bin klügster.", "Ich bin klügest."],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which is the correct superlative form? \"Er ist der __________ von allen.\"",
        "choices": ["besser", "besten", "gute", "bester"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "The sentence \"Das Auto ist schneller\" means:",
        "choices": ["The car is the fastest.", "The car is fast.", "The car is faster.", "The car runs the fastest."],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "\"Das Wasser hier ist __________ als dort.\"",
        "choices": ["kalt", "kälter", "am kältsten", "kälte"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the comparative form of \"gut\"?",
        "choices": ["guter", "besser", "besten", "gutest"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "The correct sentence is:",
        "choices": ["Das Essen ist leckerster.", "Das Essen ist am leckersten.", "Das Essen ist leckerste.", "Das Essen ist leckere."],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "\"Er liest __________ als sie.\"",
        "choices": ["am meisten", "schnell", "schneller", "schnelle"],
        "type": "MCQs",
        "correctAnswer": 3
      },

      // 20 Fill in the Blanks
      {
        "question": "Mein Bruder ist ______ (younger) als ich.",
        "choices": ["jünger","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Diese Prüfung ist ______ (more difficult) als die letzte.",
        "choices": ["schwieriger","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ich finde Sommer ______ (more beautiful) als Winter.",
        "choices": ["schöner","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Das ist der ______ (best) Film, den ich je gesehen habe.",
        "choices": ["beste","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Der Rhein ist ______ (longer) als die Elbe.",
        "choices": ["länger","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Er spricht ______ (faster) als seine Schwester.",
        "choices": ["schneller","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Dieses Buch ist ______ (more interesting) als das andere.",
        "choices": ["interessanter","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Das Wetter heute ist ______ (warmer) als gestern.",
        "choices": ["wärmer","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Sie ist die ______ (smartest) in der Klasse.",
        "choices": ["klügste","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ich habe das ______ (most expensive) Auto in der Stadt gesehen.",
        "choices": ["teuerste","1","2","3"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
  "question": "Ordne die Singular- und Pluralwörter zu.",
  "type": "MatchTheFollowing",
"pairs": [
    {
      "left": { "word": "Er ist größer als ich.", "rightId": 1 },
      "right": { "word": "The food tastes the best.", "rightId": 9 }

    },
    {
      "left": { "word": "Die Aufgabe ist schwieriger.", "rightId": 2 },
      "right": { "word": "The weather is warmer.", "rightId": 6 }

    },
    {
      "left": { "word": "Diese Stadt ist größer als Berlin.", "rightId": 3 },
      "right": { "word": "The dog runs faster.", "rightId": 7 }
      
    },
    {
      "left": { "word": "Sie ist die klügste Schülerin.", "rightId": 4 },
      "right": { "word": "He speaks louder than me.", "rightId": 8 }
      
    },
    {
      "left": { "word": "Der Film ist am besten.", "rightId": 5 },
      "right": { "word": "The book is more interesting.", "rightId": 10 }

    },
    {
      "left": { "word": "Das Wetter ist wärmer.", "rightId": 6 },
      "right": { "word": "He is taller than me.", "rightId": 1 }
      
    },
    {
      "left": { "word": "Der Hund läuft schneller.", "rightId": 7 },
      "right": { "word": "The task is more difficult.", "rightId": 2 }
      
    },
    {
      "left": { "word": "Er spricht lauter als ich.", "rightId": 8 },
      "right": { "word": "This city is bigger than Berlin.", "rightId": 3 }
      
    },
    {
      "left": { "word": "Das Essen schmeckt am besten.", "rightId": 9 },
      "right": { "word": "She is the smartest student.", "rightId": 4 }
      
    },
    {
      "left": { "word": "Das Buch ist interessanter.", "rightId": 10 },
      "right": { "word": "The movie is the best.", "rightId": 5 }
      
    }
  ]
}
    ]
  },
  {
    quiz: '3',
    name: 'German Exercise - 3 (A2)',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      // 20 MCQs
      {
        "question": "Was bedeutet \"Wenn ich mehr Zeit hätte, würde ich mehr reisen\"?",
        "choices": [
          "I have more time to travel.",
          "I will travel if I have time.",
          "I would travel if I had more time.",
          "I had time to travel."
        ],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Wie lautet die korrekte Form des Verbs in diesem Satz: \"Wenn er mehr Geld ______, würde er ein Auto kaufen.\"",
        "choices": ["hat", "hätte", "haben", "hatte"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Welche Antwort zeigt den richtigen Gebrauch des Konditionals?",
        "choices": [
          "Wenn ich du wäre, würde ich ihn anrufen.",
          "Wenn ich du wäre, ich rufe ihn an.",
          "Wenn ich du, würde ich ihn rufen.",
          "Wenn ich bin, würde ich anrufen."
        ],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Wie würdest du höflich bitten, etwas zu tun?",
        "choices": [
          "Könnte ich bitte das Fenster öffnen?",
          "Kann ich das Fenster öffnen?",
          "Ich öffne das Fenster.",
          "Mach das Fenster auf."
        ],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Was ist der Unterschied zwischen \"würde\" und \"konnte\" in hypothetischen Aussagen?",
        "choices": [
          "\"Würde\" ist für höfliche Bitten, \"konnte\" für fähige Handlungen.",
          "\"Würde\" drückt eine Möglichkeit aus, \"konnte\" eine Fähigkeit.",
          "\"Würde\" ist für Fakten, \"konnte\" für Wünsche.",
          "\"Würde\" ist für die Zukunft, \"konnte\" für die Vergangenheit."
        ],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Wie lautet die richtige Antwort für die Situation: \"Wenn ich mehr Zeit _______ (haben), würde ich mehr lesen.\"",
        "choices": ["hatte", "hätte", "habe", "hat"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Welches Verb ist im richtigen Konditional: \"Wenn sie mehr über das Thema _______ (wissen), würden sie die Diskussion besser verstehen.\"",
        "choices": ["wissen", "gewusst", "hätte gewusst", "wüssten"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "Wie fragt man höflich nach etwas im Konditional?",
        "choices": [
          "Würde es Ihnen etwas ausmachen, mir zu helfen?",
          "Helf mir!",
          "Du musst mir helfen.",
          "Kannst du mir helfen?"
        ],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Wie endet der Satz: \"Wenn wir uns beeilen _______ (wir) den Zug noch erwischen?\"",
        "choices": ["könnten", "können", "würden", "hätten"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Was ist die richtige Antwort auf die Frage: \"Was würdest du tun, wenn du im Lotto gewinnen würdest?\"",
        "choices": [
          "Ich würde eine Weltreise machen.",
          "Ich mache eine Weltreise.",
          "Ich habe eine Weltreise gemacht.",
          "Ich bin auf einer Weltreise."
        ],
        "type": "MCQs",
        "correctAnswer": 1
      },

      // 20 Fill in the Blanks
      {
        "question": "Wenn ich mehr Zeit hätte, ______ (would) ich Deutsch besser.",
        "choices": ["würde", "lernen", "könnte", "wäre"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Sie ______ (would) ein neues Auto, wenn sie mehr Geld hätten.",
        "choices": ["würden", "kaufen", "haben", "hätten"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Wenn du mir das Buch geben ______ (could), würde ich es dir zurückbringen.",
        "choices": ["könntest", "geben", "könnten", "wären"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ich ______ (would) nach Deutschland, wenn ich genug Geld hätte.",
        "choices": ["würde", "reisen", "könnte", "wäre"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Wenn es morgen regnen ______ (would), bleiben wir zu Hause.",
        "choices": ["würde", "werden", "wird", "hätte"],
        "type": "FillInTheBlanks",
        "correctAnswer": 2
      },
      {
        "question": "Du ______ (would) mir, wenn du wüsstest, wie wichtig es ist.",
        "choices": ["würdest", "helfen", "könntest", "hättest"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Wenn er schneller laufen ______ (could), würde er den Wettkampf gewinnen.",
        "choices": ["könnte", "laufen", "würde", "könnten"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Wir ______ (would) in diesem Restaurant, wenn es nicht so teuer wäre.",
        "choices": ["würden", "essen", "könnten", "wären"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Du ______ (would) mir Bescheid, wenn du etwas hörst.",
        "choices": ["würdest", "sagen", "könntest", "hättest"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Wenn ihr mehr üben ______ (could), würdet ihr die Prüfung bestehen.",
        "choices": ["könntet", "üben", "könnten", "würden"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },

      {
  "question": "Ordne die Singular- und Pluralwörter zu.",
  "type": "MatchTheFollowing",
"pairs": [
    {
      "left": { "word": "Wenn ich mehr Zeit hätte,", "rightId": 1 },
      "right": { "word": "If she had a better job,", "rightId": 3 }

    },
    {
      "left": { "word": "Wenn er das Angebot hätte,", "rightId": 2 },
      "right": { "word": "If you gave me more information,", "rightId": 4 }

    },
    {
      "left": { "word": "Wenn sie einen besseren Job hätte,", "rightId": 3 },
      "right": { "word": "If I had more time,", "rightId": 1 }
      
    },
    {
      "left": { "word": "Wenn du mir mehr Informationen gäbest,", "rightId": 4 },
      "right": { "word": "If we had arrived earlier,", "rightId": 5 }
      
    },
    {
      "left": { "word": "Wenn wir früher angekommen wären,", "rightId": 5 },
      "right": { "word": "If he had the offer,", "rightId": 2 }

    },
  ]
},

{
  "question": "Ordne die Singular- und Pluralwörter zu.",
  "type": "MatchTheFollowing",
"pairs": [
    {
      "left": { "word": "Wenn du höflicher wärest,", "rightId": 1 },
      "right": { "word": "If he had more experience,", "rightId": 4 }

    },
    {
      "left": { "word": "Wenn ich an deiner Stelle wäre,", "rightId": 2 },
      "right": { "word": "If you could judge the weather better,", "rightId": 3 }

    },
    {
      "left": { "word": "Wenn du das Wetter besser einschätzen könntest,", "rightId": 3 },
      "right": { "word": "If she would practice more,", "rightId": 5 }
      
    },
    {
      "left": { "word": "Wenn er mehr Erfahrung hätte,", "rightId": 4 },
      "right": { "word": "If I were in your place,", "rightId": 2 }
      
    },
    {
      "left": { "word": "Wenn sie mehr üben würde,", "rightId": 5 },
      "right": { "word": "If you were more polite,", "rightId": 1 }

    },
  ]
}
    ]
  },
  {
    quiz: '4',
    name: 'German Exercise - 4 (A2)',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      // 20 MCQs
      {
        "question": "Was würdest du machen, wenn du im Lotto gewinnen würdest?",
        "choices": ["Ich gehe arbeiten.", "Ich kaufe ein Auto.", "Ich würde reisen.", "Ich bleibe zu Hause."],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Meiner Meinung nach ist es wichtig, _______.",
        "choices": ["zu reisen.", "viel Geld zu haben.", "eine Fremdsprache zu lernen.", "immer zu arbeiten."],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Wenn ich mehr Freizeit hätte, _______.",
        "choices": ["ich würde mehr lesen.", "ich arbeite mehr.", "ich gehe ins Fitnessstudio.", "ich bleibe zu Hause."],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Was denkst du über das Leben in Deutschland?",
        "choices": ["Es ist sehr langweilig.", "Es könnte interessant sein.", "Es ist schlecht.", "Es ist nur für Deutsche geeignet."],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Würdest du in einem anderen Land leben?",
        "choices": ["Ja, ich würde gerne.", "Nein, ich bleibe hier.", "Vielleicht, wenn es notwendig ist.", "Niemals."],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Wenn du mehr Geld hättest, _______.",
        "choices": ["würdest du eine Wohnung kaufen.", "gehst du einkaufen.", "machst du nichts.", "bleibst du zu Hause."],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Was wäre deine Meinung zu einem Auslandssemester?",
        "choices": ["Es ist zu schwierig.", "Es ist eine gute Idee.", "Es ist zu teuer.", "Es ist langweilig."],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Wie würdest du reagieren, wenn du einen Fehler gemacht hättest?",
        "choices": ["Ich ignoriere ihn.", "Ich entschuldige mich.", "Ich mache nichts.", "Ich wiederhole den Fehler."],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Warum ist es wichtig, Meinungen auszudrücken?",
        "choices": ["Um Konflikte zu vermeiden.", "Um sich auszudrücken.", "Um Freunde zu beeindrucken.", "Um Diskussionen zu vermeiden."],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Was würde passieren, wenn du nicht für die Prüfung lernst?",
        "choices": ["Ich bestehe die Prüfung.", "Ich falle durch.", "Ich mache weiter.", "Ich wiederhole nichts."],
        "type": "MCQs",
        "correctAnswer": 2
      },    

      // 20 Fill in the Blanks
      {
        "question": "Ich denke, dass ______ (the) Wetter heute schön ist.",
        "choices": ["das", "der", "die", "ein"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Wenn ich mehr Zeit hätte, ______ (would) ich Deutsch schneller lernen.",
        "choices": ["würde", "könnte", "wäre", "hätte"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Meiner Meinung nach ist es ______ (very) wichtig, Fremdsprachen zu lernen.",
        "choices": ["sehr", "viel", "wenig", "kaum"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ich ______ (would) gern in Deutschland leben, wenn ich die Möglichkeit hätte.",
        "choices": ["würde", "kann", "möchte", "habe"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Glaubst du, dass er ______ (the) Prüfung besteht?",
        "choices": ["die", "das", "eine", "eine"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Wenn ich ein Auto hätte, ______ (could) ich dich abholen.",
        "choices": ["könnte", "möchte", "wollte", "wäre"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Es ______ (were) besser, wenn wir früher ankommen würden.",
        "choices": ["wäre", "möchte", "könnte", "wollte"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ich finde es ______ (very) interessant, neue Kulturen zu entdecken.",
        "choices": ["sehr", "viel", "kaum", "wenig"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Hättest du Zeit, wenn ich dich ______ (at) helfe?",
        "choices": ["bei", "an", "für", "mit"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Wenn wir mehr Übung machen würden, ______ (could) wir besser sprechen.",
        "choices": ["könnten", "würden", "möchten", "hätten"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },

      {
  "question": "Ordne die Singular- und Pluralwörter zu.",
  "type": "MatchTheFollowing",
"pairs": [
    {
      "left": { "word": "Ich denke, dass...", "rightId": 1 },
      "right": { "word": "I don't believe that...", "rightId": 5 }

    },
    {
      "left": { "word": "Es könnte sein, dass...", "rightId": 2 },
      "right": { "word": "If I were you, I would...", "rightId": 4 }

    },
    {
      "left": { "word": "Ich bin der Meinung, dass...", "rightId": 3 },
      "right": { "word": "I think that...", "rightId": 1 }
      
    },
    {
      "left": { "word": "Wenn ich du wäre, würde ich...", "rightId": 4 },
      "right": { "word": "I am of the opinion that...", "rightId": 3 }
      
    },
    {
      "left": { "word": "Ich glaube nicht, dass...", "rightId": 5 },
      "right": { "word": "It could be that...", "rightId": 2 }

    },
  ]
},

{
  "question": "Ordne die Singular- und Pluralwörter zu.",
  "type": "MatchTheFollowing",
"pairs": [
    {
      "left": { "word": "Vielleicht sollten wir...", "rightId": 1 },
      "right": { "word": "I suggest that...", "rightId": 4 }

    },
    {
      "left": { "word": "Ich bin mir nicht sicher, ob...", "rightId": 2 },
      "right": { "word": "It would be better if...", "rightId": 3 }

    },
    {
      "left": { "word": "Es wäre besser, wenn...", "rightId": 3 },
      "right": { "word": "In my opinion...", "rightId": 5 }
      
    },
    {
      "left": { "word": "Ich schlage vor, dass...", "rightId": 4 },
      "right": { "word": "I'm not sure if...", "rightId": 2 }
      
    },
    {
      "left": { "word": "Meiner Meinung nach...", "rightId": 5 },
      "right": { "word": "Maybe we should...", "rightId": 1 }

    },
  ]
}
    ]
  },
  {
    quiz: '5',
    name: 'German Exercise - 5 (A2)',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      // 20 MCQs
      {
        "question": "Wie spät ist es?",
        "choices": ["Es ist Montag", "Es ist fünf Uhr", "Es regnet", "Es ist warm"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Was machst du am Wochenende?",
        "choices": ["Ich lerne für die Prüfung", "Ich esse ein Buch", "Ich tanze das Fenster", "Ich schlafe die Straße"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Welche Aktivität ist dein Hobby?",
        "choices": ["tanzen", "frühling", "arbeiten", "regen"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Was möchten Sie trinken?",
        "choices": ["Ein Buch lesen", "Wasser bitte", "Einen Film schauen", "Es ist kalt"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Wann beginnt der Unterricht?",
        "choices": ["Um neun Uhr", "Mit dem Zug", "In der Küche", "Ich spiele Fußball"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Wie oft trainierst du?",
        "choices": ["Jeden Tag", "Am Tisch", "Mit der Katze", "Der Baum ist groß"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Wenn ich mehr Zeit hätte, ...",
        "choices": ["lerne ich Klavier", "hätte ich gelernt Klavier", "würde ich Klavier lernen", "lerne Klavier ich"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Könnten Sie mir sagen, wo ...",
        "choices": ["die Bibliothek ist?", "einen Film schauen?", "das Wetter ist warm?", "der Tisch liest?"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Was machst du, wenn es regnet?",
        "choices": ["Ich spiele draußen", "Ich bleibe zu Hause", "Ich klettere die Sonne", "Ich fahre das Meer"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Wann sind die Ferien?",
        "choices": ["Im Sommer", "Bei der Post", "Neben der Lampe", "Mit dem Wasser"],
        "type": "MCQs",
        "correctAnswer": 1
      },

      // 20 Fill in the Blanks
      {
        "question": "Ich denke, dass ______ (the) Wetter heute schön ist.",
        "choices": ["das", "der", "die", "ein"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ich ______ (gehen) jeden Morgen joggen. (I go jogging every morning.)",
        "choices": ["gehe"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Wenn ich Zeit hätte, ______ (lernen) ich gerne eine neue Sprache. (If I had time, I would like to learn a new language.)",
        "choices": ["würde lernen"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Du ______ (spielen) Fußball nach der Schule, oder? (You play football after school, right?)",
        "choices": ["spielst"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Wir ______ (möchten) nächstes Jahr nach Deutschland reisen. (We would like to travel to Germany next year.)",
        "choices": ["möchten"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Er ______ (lesen) jeden Abend ein Buch. (He reads a book every evening.)",
        "choices": ["liest"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Sie ______ (können) das Fenster öffnen, bitte? (Could you open the window, please?)",
        "choices": ["könnten"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ich ______ (haben) gerne mehr Freizeit für meine Hobbys. (I would like to have more free time for my hobbies.)",
        "choices": ["hätte"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Wann ______ (beginnen) der Deutschkurs? (When does the German course start?)",
        "choices": ["beginnt"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Könnten Sie mir bitte ______ (zeigen), wo das Museum ist? (Could you please show me where the museum is?)",
        "choices": ["zeigen"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Am Wochenende ______ (treffen) wir unsere Freunde im Park. (On the weekend, we meet our friends in the park.)",
        "choices": ["treffen"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },

      {
  "question": "Ordne die Singular- und Pluralwörter zu.",
  "type": "MatchTheFollowing",
"pairs": [
    {
      "left": { "word": "Bücher lesen", "rightId": 1 },
      "right": { "word": "Watching a movie", "rightId": 4 }

    },
    {
      "left": { "word": "Einen Ausflug machen", "rightId": 2 },
      "right": { "word": "At 7 o’clock in the morning", "rightId": 5 }

    },
    {
      "left": { "word": "Es tut mir leid", "rightId": 3 },
      "right": { "word": "Reading books", "rightId": 1 }
      
    },
    {
      "left": { "word": "Einen Film schauen", "rightId": 4 },
      "right": { "word": "I am sorry", "rightId": 3 }
      
    },
    {
      "left": { "word": "Um 7 Uhr morgens", "rightId": 5 },
      "right": { "word": "Going on a trip", "rightId": 2 }

    },
  ]
},

{
  "question": "Ordne die Singular- und Pluralwörter zu.",
  "type": "MatchTheFollowing",
"pairs": [
    {
      "left": { "word": "Fahrrad fahren", "rightId": 1 },
      "right": { "word": "In the afternoon", "rightId": 4 }

    },
    {
      "left": { "word": "Könnten Sie bitte helfen?", "rightId": 2 },
      "right": { "word": "Finding a hobby", "rightId": 3 }

    },
    {
      "left": { "word": "Ein Hobby finden", "rightId": 3 },
      "right": { "word": "Thank you very much", "rightId": 5 }
      
    },
    {
      "left": { "word": "Nachmittags", "rightId": 4 },
      "right": { "word": "Could you please help?", "rightId": 2 }
      
    },
    {
      "left": { "word": "Vielen Dank", "rightId": 5 },
      "right": { "word": "Riding a bicycle", "rightId": 1 }

    },
  ]
}
    ]
  },
  {
    quiz: '6',
    name: 'German Exercise - 6 (A2)',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      // 20 MCQs
      {
        "question": "Welches Verkehrsmittel fliegt?",
        "choices": ["Der Zug", "Das Flugzeug", "Die Straßenbahn", "Das Taxi"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Was findet man am Bahnhof?",
        "choices": ["Das Flugzeug", "Der Fahrplan", "Die Kreuzfahrt", "Der Reisepass"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Welches Verkehrsmittel hat keinen Fahrer?",
        "choices": ["Das Taxi", "Der Zug", "Das Flugzeug", "Die Straßenbahn"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Womit reist man auf dem Wasser?",
        "choices": ["Die Straßenbahn", "Der Bus", "Die Kreuzfahrt", "Der Zug"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Wo checkt man ein, bevor man fliegt?",
        "choices": ["Am Bahnhof", "An der Bushaltestelle", "Am Flughafen", "Im Taxi"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Welches Verkehrsmittel braucht einen Fahrplan?",
        "choices": ["Der Zug", "Der Reisepass", "Die Kreuzfahrt", "Das Gepäck"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Was braucht man, um in ein anderes Land zu reisen?",
        "choices": ["Der Fahrplan", "Der Reisepass", "Der Bahnhof", "Der Bus"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Was ist ein Gepäckstück?",
        "choices": ["Der Fahrplan", "Der Reisepass", "Das Gepäck", "Die Straßenbahn"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Welches Verkehrsmittel hat Reifen und fährt auf der Straße?",
        "choices": ["Der Zug", "Das Taxi", "Das Flugzeug", "Die Kreuzfahrt"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Was benutzt man, um Informationen über Zugzeiten zu finden?",
        "choices": ["Der Bahnhof", "Der Reisepass", "Der Fahrplan", "Das Gepäck"],
        "type": "MCQs",
        "correctAnswer": 3
      },

      // 20 Fill in the Blanks
      {
        "question": "Morgen ______ wir mit dem Zug nach Berlin fahren. (Hint: werden)",
        "choices": ["werden"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ich ______ ein Auto mieten, um die Stadt zu erkunden. (Hint: werden)",
        "choices": ["werde"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Du ______ am Flughafen auf mich warten. (Hint: werden)",
        "choices": ["wirst"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Wir ______ pünktlich an der Bushaltestelle sein. (Hint: werden)",
        "choices": ["werden"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Meine Eltern ______ nächstes Jahr nach Europa reisen. (Hint: werden)",
        "choices": ["werden"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Sie ______ ihr Gepäck am Schalter abgeben. (Hint: werden)",
        "choices": ["werden"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Wir ______ eine Kreuzfahrt nach Norwegen machen. (Hint: werden)",
        "choices": ["werden"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ihr ______ im Hotel einchecken, sobald ihr ankommt. (Hint: werden)",
        "choices": ["werdet"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ich ______ ein Ticket für den Nachtzug kaufen. (Hint: werden)",
        "choices": ["werde"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Du ______ den Fahrplan überprüfen, bevor du gehst. (Hint: werden)",
        "choices": ["wirst"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },

      {
  "question": "Ordne die Singular- und Pluralwörter zu.",
  "type": "MatchTheFollowing",
"pairs": [
    {
      "left": { "word": "der Zug", "rightId": 1 },
      "right": { "word": "the train station", "rightId": 5 }

    },
    {
      "left": { "word": "die Bushaltestelle", "rightId": 2 },
      "right": { "word": "the luggage", "rightId": 4 }

    },
    {
      "left": { "word": "das Flugzeug", "rightId": 3 },
      "right": { "word": "the train", "rightId": 1 }
      
    },
    {
      "left": { "word": "das Gepäck", "rightId": 4 },
      "right": { "word": "the airplane", "rightId": 3 }
      
    },
    {
      "left": { "word": "der Bahnhof", "rightId": 5 },
      "right": { "word": "the bus stop", "rightId": 2 }

    },
  ]
},

{
  "question": "Ordne die Singular- und Pluralwörter zu.",
  "type": "MatchTheFollowing",
"pairs": [
    {
      "left": { "word": "die Straßenbahn", "rightId": 1 },
      "right": { "word": "the timetable", "rightId": 4 }

    },
    {
      "left": { "word": "das Taxi", "rightId": 2 },
      "right": { "word": "the cruise", "rightId": 3 }

    },
    {
      "left": { "word": "die Kreuzfahrt", "rightId": 3 },
      "right": { "word": "the passport", "rightId": 5 }
      
    },
    {
      "left": { "word": "der Fahrplan", "rightId": 4 },
      "right": { "word": "the taxi", "rightId": 2 }
      
    },
    {
      "left": { "word": "der Reisepass", "rightId": 5 },
      "right": { "word": "the tram", "rightId": 1 }

    },
  ]
}
    ]
  },
  {
    quiz: '7',
    name: 'German Exercise - 7 (A2)',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      // 20 MCQs
      {
        "question": "Was bedeutet \"Kleider\" auf Englisch?",
        "choices": [ "Shoes", "Clothes", "Jacket", "T-shirt"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Welches Adjektiv passt zu \"Hose\"?",
        "choices": [ "Großer", "Große", "Großen", "Große"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "Wie sagt man \"I want to buy clothes\" auf Deutsch?",
        "choices": [ "Ich will kaufen Kleidung", "Ich kaufe Kleidung", "Ich mag Kleidung kaufen", "Ich möchte Kleidung kaufen"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "Was ist der Plural von \"Pullover\"?",
        "choices": [ "Pullovers", "Pullover", "Pulloveren", "Pulloves"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Wie nennt man die \"Umkleidekabine\" auf Englisch?",
        "choices": ["Fitting room", "Dressing room", "Locker room", "Shop"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Welches Wort passt zu \"schön\"?",
        "choices": ["Der Mantel", "Das T-Shirt", "Die Hose", "Der Pullover"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Wie viel kostet der Mantel?",
        "choices": [ "40 Euro", "30 Euro", "50 Euro", "25 Euro"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Was ist die richtige Endung für \"schön\" im Dativ Singular für das Wort \"Kleid\"?",
        "choices": [ "Schöner", "Schönem", "Schönen", "Schöneren"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Wie fragt man nach der Größe eines Kleidungsstücks?",
        "choices": ["Was ist deine Größe?", "Welche Größe hast du?", "Welche Größe möchtest du?", "Welche Größe ist das?"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Was bedeutet \"Preis\" auf Englisch?",
        "choices": ["Price", "Store", "Size", "Discount"],
        "type": "MCQs",
        "correctAnswer": 1
      },

      // 20 Fill in the Blanks
      {
        "question": "Ich möchte ein ______ (jacket) kaufen.",
        "choices": ["Jacke", "Kleidung", "Kleid", "Schuhe"],
        "type": "FillInTheBlanks",
        "correctAnswer": 0
      },
      {
        "question": "Hast du ______ (clothes) für den Sommer gekauft?",
        "choices": ["Kleider", "Kleid", "Hosen", "Schuhe"],
        "type": "FillInTheBlanks",
        "correctAnswer": 0
      },
      {
        "question": "Der ______ (dress) ist zu teuer für mich.",
        "choices": ["Kleid", "Jacke", "T-Shirt", "Pullover"],
        "type": "FillInTheBlanks",
        "correctAnswer": 0
      },
      {
        "question": "Ich brauche noch ______ (shoes) für die Party.",
        "choices": ["Schuhe", "Kleidung", "Socken", "Mantel"],
        "type": "FillInTheBlanks",
        "correctAnswer": 0
      },
      {
        "question": "Welche ______ (shirt) gefällt dir am besten?",
        "choices": ["Hemd", "Kleid", "Pullover", "T-Shirt"],
        "type": "FillInTheBlanks",
        "correctAnswer": 0
      },
      {
        "question": "Die ______ (jeans) passen mir nicht.",
        "choices": ["Jeans", "Kleidung", "Hose", "Jacke"],
        "type": "FillInTheBlanks",
        "correctAnswer": 0
      },
      {
        "question": "Wir gehen ______ (shopping) im Zentrum.",
        "choices": ["Einkaufen", "Reisen", "Arbeiten", "Essen"],
        "type": "FillInTheBlanks",
        "correctAnswer": 0
      },
      {
        "question": "Ich habe keine ______ (money) mehr für neue Kleidung.",
        "choices": ["Geld", "Kleider", "Schuhe", "Taschen"],
        "type": "FillInTheBlanks",
        "correctAnswer": 0
      },
      {
        "question": "______ (where) kann ich das kaufen?",
        "choices": ["Wo", "Wie", "Was", "Warum"],
        "type": "FillInTheBlanks",
        "correctAnswer": 0
      },
      {
        "question": "Das ______ (coat) ist warm genug für den Winter.",
        "choices": ["Mantel", "Hemd", "Pullover", "T-Shirt"],
        "type": "FillInTheBlanks",
        "correctAnswer": 0
      },

      {
  "question": "Ordne die Singular- und Pluralwörter zu.",
  "type": "MatchTheFollowing",
"pairs": [
    {
      "left": { "word": "Der Pullover ist zu groß.", "rightId": 1 },
      "right": { "word": "The salesman helps me.", "rightId": 5 }

    },
    {
      "left": { "word": "Ich habe keine Hose.", "rightId": 2 },
      "right": { "word": "The T-shirt costs 20 euros.", "rightId": 4 }

    },
    {
      "left": { "word": "Wo ist die Umkleidekabine?", "rightId": 3 },
      "right": { "word": "The sweater is too big.", "rightId": 1 }
      
    },
    {
      "left": { "word": "Das T-Shirt kostet 20 Euro.", "rightId": 4 },
      "right": { "word": "Where is the fitting room?", "rightId": 3 }
      
    },
    {
      "left": { "word": "Der Verkäufer hilft mir.", "rightId": 5 },
      "right": { "word": "I have the wrong size.", "rightId": 2 }

    },
  ]
},

{
  "question": "Ordne die Singular- und Pluralwörter zu.",
  "type": "MatchTheFollowing",
"pairs": [
    {
      "left": { "word": "Ich habe die falsche Größe.", "rightId": 1 },
      "right": { "word": "I would like to try on the coat.", "rightId": 4 }

    },
    {
      "left": { "word": "Diese Schuhe sind sehr bequem.", "rightId": 2 },
      "right": { "word": "How much does it cost?", "rightId": 3 }

    },
    {
      "left": { "word": "Wie viel kostet das? ", "rightId": 3 },
      "right": { "word": "These jeans are made of cotton.", "rightId": 5 }
      
    },
    {
      "left": { "word": "Ich möchte den Mantel anprobieren.", "rightId": 4 },
      "right": { "word": "These shoes are very comfortable.", "rightId": 2 }
      
    },
    {
      "left": { "word": "Diese Jeans sind aus Baumwolle.", "rightId": 5 },
      "right": { "word": "I have the wrong size.", "rightId": 1 }

    },
  ]
}
    ]
  },
  {
    quiz: '8',
    name: 'German Exercise - 8 (A2)',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      // 20 MCQs
      {
        "question": "Was ist deine Lieblingsaktivität in deiner Freizeit?",
        "choices": ["schwimmen", "kochen", "wandern", "lesen"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Was bedeutet „spielen“ auf Englisch?",
        "choices": ["to swim", "to cook", "to play", "to read"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Welche Tätigkeit macht man in den Bergen?",
        "choices": ["singen", "wandern", "reiten", "tanzen"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Wie nennt man es, wenn man mit einem Pinsel Bilder malt?",
        "choices": ["zeichnen", "singen", "tanzen", "kochen"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Wie sagt man auf Deutsch: 'I like to sing'?",
        "choices": ["Ich singe gern.", "Ich tanze gern.", "Ich lese gern.", "Ich koche gern."],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Welche der folgenden Aktivitäten ist kein Hobby?",
        "choices": ["wandern", "schwimmen", "arbeiten", "reiten"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Was bedeutet „wandern“ auf Englisch?",
        "choices": ["to hike", "to dance", "to swim", "to read"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Was tun die meisten Menschen, um sich zu entspannen?",
        "choices": ["wandern", "schach spielen", "tanzen", "lesen"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "Was ist der korrekte Satz?",
        "choices": ["Ich spielen Fußball.", "Ich spielt Fußball.", "Ich spiele Fußball.", "Ich spiele Fußballe."],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Welche der folgenden Aktivitäten ist am besten für die Fitness?",
        "choices": ["tanzen", "schach spielen", "lesen", "kochen"],
        "type": "MCQs",
        "correctAnswer": 1
      },

      // 20 Fill in the Blanks
      {
        "question": "Ich ______ (spielen) jeden Tag Fußball mit meinen Freunden.",
        "choices": ["spiele", "spielen", "spielst", "spielt"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Wir ______ (wandern) gerne in den Bergen.",
        "choices": ["wandern", "wandere", "wandert", "wanderst"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Mein Bruder ______ (kochen) sehr gut und macht oft leckere Gerichte.",
        "choices": ["kocht", "koche", "kochen", "kochst"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Du ______ (schwimmen) oft im Schwimmbad?",
        "choices": ["schwimmst", "schwimmen", "schwimmt", "schwimme"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Maria und Paul ______ (tanzen) jedes Wochenende zusammen.",
        "choices": ["tanzen", "tanzst", "tanze", "tanzt"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ihr ______ (lesen) Bücher über Geschichte und Kultur.",
        "choices": ["lest", "lesen", "liest", "lese"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ich ______ (singen) im Chor, weil ich Musik liebe.",
        "choices": ["singe", "singst", "singen", "singt"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Wir ______ (essen) oft in einem Restaurant nach der Arbeit.",
        "choices": ["essen", "esst", "isst", "esse"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ich ______ (reiten) gern, besonders an sonnigen Tagen.",
        "choices": ["reite", "reiten", "reitest", "reitet"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ihr ______ (reparieren) Autos als Hobby.",
        "choices": ["repariert", "reparieren", "reparierst", "repariertest"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },

      {
  "question": "Ordne die Singular- und Pluralwörter zu.",
  "type": "MatchTheFollowing",
"pairs": [
    {
      "left": { "word": "schwimmen", "rightId": 1 },
      "right": { "word": "Dancing at a club", "rightId": 3 }

    },
    {
      "left": { "word": "kochen", "rightId": 2 },
      "right": { "word": "Hiking in nature", "rightId": 4 }

    },
    {
      "left": { "word": "tanzen", "rightId": 3 },
      "right": { "word": "Swimming in a pool", "rightId": 1 }
      
    },
    {
      "left": { "word": "wandern", "rightId": 4 },
      "right": { "word": "Singing in a choir", "rightId": 5 }
      
    },
    {
      "left": { "word": "singen", "rightId": 5 },
      "right": { "word": "Cooking dishes", "rightId": 2 }

    },
  ]
},

{
  "question": "Ordne die Singular- und Pluralwörter zu.",
  "type": "MatchTheFollowing",
"pairs": [
    {
      "left": { "word": "lesen", "rightId": 1 },
      "right": { "word": "Riding horses", "rightId": 2 }

    },
    {
      "left": { "word": "reiten", "rightId": 2 },
      "right": { "word": "Playing football", "rightId": 3 }

    },
    {
      "left": { "word": "Fußball spielen", "rightId": 3 },
      "right": { "word": "Drawing pictures", "rightId": 5 }
      
    },
    {
      "left": { "word": "Schach spielen", "rightId": 4 },
      "right": { "word": "Reading books", "rightId": 1 }
      
    },
    {
      "left": { "word": "zeichnen", "rightId": 5 },
      "right": { "word": "Playing chess", "rightId": 4 }

    },
  ]
}
    ]
  },
  {
    quiz: '9',
    name: 'German Exercise - 9 (A2)',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      // 20 MCQs
      {
        "question": "Which modal verb is used to express obligation?",
        "choices": ["können", "müssen", "dürfen", "sollen"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Translate: 'I can speak German.'",
        "choices": ["Ich muss Deutsch sprechen.", "Ich darf Deutsch sprechen.", "Ich kann Deutsch sprechen.", "Ich soll Deutsch sprechen."],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What does 'der Magen' mean?",
        "choices": ["Stomach", "Heart", "Liver", "Lung"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "How do you say 'teeth' in German?",
        "choices": ["der Mund", "die Zähne", "die Hände", "die Augen"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the correct form of müssen for er?",
        "choices": ["musst", "müsst", "müssen", "muss"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "Which of these body parts is die Nase?",
        "choices": ["Eye", "Nose", "Ear", "Mouth"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say 'I must go to the doctor'?",
        "choices": ["Ich kann zum Arzt gehen.", "Ich darf zum Arzt gehen.", "Ich muss zum Arzt gehen.", "Ich soll zum Arzt gehen."],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What does 'der Rücken' mean?",
        "choices": ["Chest", "Back", "Shoulder", "Neck"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What is the correct plural form of 'das Bein'?",
        "choices": ["die Beine", "die Beinen", "der Beine", "den Beinen"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What does 'Ich muss schlafen' mean?",
        "choices": ["I can sleep.", "I must sleep.", "I may sleep.", "I should sleep."],
        "type": "MCQs",
        "correctAnswer": 2
      },

      // 20 Fill in the Blanks
      {
        "question": "Ich habe Kopfschmerzen. Ich ______ (müssen) zum Arzt gehen.",
        "choices": ["müssen"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Du ______ (können) viel Wasser trinken, um gesund zu bleiben.",
        "choices": ["kannst"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Wenn du Zahnschmerzen hast, ______ (müssen) du zum Zahnarzt gehen.",
        "choices": ["musst"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Wir ______ (können) heute nicht joggen, weil es regnet.",
        "choices": ["können"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Meine Mutter ______ (müssen) jeden Tag Medikamente einnehmen.",
        "choices": ["muss"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Der Patient ______ (können) seinen Arm nicht bewegen.",
        "choices": ["kann"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ich ______ (müssen) mehr schlafen, weil ich müde bin.",
        "choices": ["muss"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Kinder ______ (können) draußen spielen, wenn das Wetter schön ist.",
        "choices": ["können"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Er ______ (müssen) zur Arbeit gehen, obwohl er sich nicht gut fühlt.",
        "choices": ["muss"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Du ______ (können) Deutsch sprechen, um mit dem Arzt zu kommunizieren.",
        "choices": ["kannst"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },

      {
  "question": "Ordne die Singular- und Pluralwörter zu.",
  "type": "MatchTheFollowing",
"pairs": [
    {
      "left": { "word": "der Kopf", "rightId": 1 },
      "right": { "word": "Back", "rightId": 3 }

    },
    {
      "left": { "word": "die Hand ", "rightId": 2 },
      "right": { "word": "Stomach", "rightId": 4 }

    },
    {
      "left": { "word": "der Rücken", "rightId": 3 },
      "right": { "word": "Head", "rightId": 1 }
      
    },
    {
      "left": { "word": "der Magen", "rightId": 4 },
      "right": { "word": "Arm", "rightId": 5 }
      
    },
    {
      "left": { "word": "der Arm", "rightId": 5 },
      "right": { "word": "Hand", "rightId": 2 }

    },
  ]
},

{
  "question": "Ordne die Singular- und Pluralwörter zu.",
  "type": "MatchTheFollowing",
"pairs": [
    {
      "left": { "word": "der Arzt", "rightId": 1 },
      "right": { "word": "Leg", "rightId": 2 }

    },
    {
      "left": { "word": "das Bein", "rightId": 2 },
      "right": { "word": "Foot", "rightId": 3 }

    },
    {
      "left": { "word": "der Fuß ", "rightId": 3 },
      "right": { "word": "Nose", "rightId": 5 }
      
    },
    {
      "left": { "word": "die Zähne", "rightId": 4 },
      "right": { "word": "Doctor", "rightId": 1 }
      
    },
    {
      "left": { "word": "die Nase", "rightId": 5 },
      "right": { "word": "Teeth", "rightId": 4 }

    },
  ]
}
    ]
  },
  {
    quiz: '10',
    name: 'German Exercise - 10 (A2)',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      // 20 MCQs
      {
        "question": "What does 'Es ist Viertel vor fünf' mean?",
        "choices": ["It is 5:45", "It is 4:15", "It is 4:45", "It is 5:15"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "How do you say 'I went to the supermarket' in German?",
        "choices": ["Ich habe ins Kino gegangen.", "Ich bin zum Supermarkt gegangen.", "Ich habe den Supermarkt gegangen.", "Ich bin ins Kino gegangen."],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which sentence is correct in the perfect tense?",
        "choices": ["Er hat gestern gearbeitet.", "Er haben gestern gearbeitet.", "Er hat gestern arbeiteten.", "Er gearbeitet hat gestern."],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What does 'Wann hast du Deutsch gelernt?' mean?",
        "choices": ["When did you learn German?", "Why did you learn German?", "What are you learning in German?", "How did you learn German?"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "How would you ask someone what time it is in German?",
        "choices": ["Was ist die Uhr?", "Was ist Uhrzeit?", "Wie viel Uhr ist es?", "Was Uhr ist jetzt?"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What is the correct translation for 'We played football'?",
        "choices": ["Wir spielen Fußball.", "Wir haben Fußball gespielt.", "Wir spielen Fußball haben.", "Wir haben gespielt Fußball."],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Choose the correct form: 'He drove to Berlin yesterday.'",
        "choices": ["Er hat gestern nach Berlin gefahren.", "Er ist gestern nach Berlin gefahren.", "Er ist gestern Berlin fahren.", "Er hat gestern Berlin gefahren."],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What does 'Die Schule beginnt um acht Uhr' mean?",
        "choices": ["School ends at 8 o'clock.", "School starts at 8 o'clock.", "The school is at 8 o'clock.", "The school ends in 8 minutes."],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say 'We had breakfast at 7:30'?",
        "choices": ["Wir haben um sieben Uhr dreißig gefrühstückt.", "Wir haben Frühstück gehabt um sieben Uhr dreißig.", "Wir haben sieben dreißig Frühstück gegessen.", "Wir hatten Frühstück um sieben Uhr."],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which of the following is a valid sentence in the perfect tense?",
        "choices": ["Ich habe ein Buch gelesen.", "Ich lese ein Buch.", "Ich hatte ein Buch lesen.", "Ich haben gelesen ein Buch."],
        "type": "MCQs",
        "correctAnswer": 1
      },

      // 20 Fill in the Blanks

      {
        "question": "Es ist fünf Uhr. Ich ______ (gehen) gestern ins Kino.",
        "choices": ["gegangen"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Um wie viel Uhr ______ (haben) du heute Mittag gegessen?",
        "choices": ["hast"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Gestern habe ______ (arbeiten) ich von 9 Uhr bis 18 Uhr.",
        "choices": ["gearbeitet"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Wir haben ______ (spielen) letzte Woche Fußball.",
        "choices": ["gespielt"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Sie sind ______ (fahren) mit dem Zug nach München.",
        "choices": ["gefahren"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Wann hast ______ (essen) du gestern Abend?",
        "choices": ["gegessen"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ich habe ______ (lernen) Deutsch um zehn Uhr morgens.",
        "choices": ["gelernt"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Meine Freunde haben ______ (besuchen) mich gestern um drei Uhr.",
        "choices": ["besucht"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Er hat ______ (haben) um elf Uhr einen Termin beim Arzt.",
        "choices": ["gehabt"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Um wie viel Uhr seid ______ (gehen) ihr ins Bett?",
        "choices": ["gegangen"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },

      {
  "question": "Ordne die Singular- und Pluralwörter zu.",
  "type": "MatchTheFollowing",
"pairs": [
    {
      "left": { "word": "Es ist halb drei.", "rightId": 1 },
      "right": { "word": "I worked on Saturday.", "rightId": 5 }

    },
    {
      "left": { "word": "Ich bin um acht Uhr aufgestanden.", "rightId": 2 },
      "right": { "word": "The train arrives at 5:00.", "rightId": 4 }

    },
    {
      "left": { "word": "Wir haben zu Mittag gegessen.", "rightId": 3 },
      "right": { "word": "It is 2:30.", "rightId": 1 }
      
    },
    {
      "left": { "word": "Der Zug kommt um fünf Uhr an.", "rightId": 4 },
      "right": { "word": "We ate lunch.", "rightId": 3 }
      
    },
    {
      "left": { "word": "Ich habe am Samstag gearbeitet.", "rightId": 5 },
      "right": { "word": "I woke up at 8:00.", "rightId": 2 }

    },
  ]
},

{
  "question": "Ordne die Singular- und Pluralwörter zu.",
  "type": "MatchTheFollowing",
"pairs": [
    {
      "left": { "word": "Er hat gestern Fußball gespielt.", "rightId": 1 },
      "right": { "word": "When did you have breakfast?", "rightId": 2 }

    },
    {
      "left": { "word": "Wann hast du gefrühstückt?", "rightId": 2 },
      "right": { "word": "She received a call at 10:00.", "rightId": 3 }

    },
    {
      "left": { "word": "Sie hat um zehn Uhr einen Anruf bekommen.", "rightId": 3 },
      "right": { "word": "It is 12:15.", "rightId": 5 }
      
    },
    {
      "left": { "word": "Um wie viel Uhr geht die Schule los?", "rightId": 4 },
      "right": { "word": "He played football yesterday.", "rightId": 1 }
      
    },
    {
      "left": { "word": "Es ist Viertel nach zwölf.", "rightId": 5 },
      "right": { "word": "At what time does school start?", "rightId": 4 }

    },
  ]
}
    ]
  },
  {
    quiz: '11',
    name: 'German Exercise - 11 (A2)',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      // 20 MCQs
      {
        "question": "Which composer wrote the famous opera The Magic Flute?",
        "choices": ["Ludwig van Beethoven", "Johann Sebastian Bach", "Wolfgang Amadeus Mozart", "Richard Wagner"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Who is famous for the Brandenburg Concertos?",
        "choices": ["Franz Schubert", "Johann Sebastian Bach", "Richard Wagner", "Ludwig van Beethoven"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Where was Beethoven born?",
        "choices": ["Vienna, Austria", "Bonn, Germany", "Munich, Germany", "Paris, France"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which of the following was a famous conductor of the Berlin Philharmonic?",
        "choices": ["Herbert von Karajan", "Wolfgang Amadeus Mozart", "Carl Orff", "Johannes Brahms"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "What does the word 'Konzert' mean in English?",
        "choices": ["Museum", "Gallery", "Concert", "Symphony"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Who is the composer of the German Requiem?",
        "choices": ["Franz Schubert", "Johannes Brahms", "Richard Wagner", "Ludwig van Beethoven"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "In which city is the famous Semperoper located?",
        "choices": ["Berlin", "Dresden", "Munich", "Hamburg"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Who composed The Ring Cycle?",
        "choices": ["Wolfgang Amadeus Mozart", "Johann Sebastian Bach", "Richard Wagner", "Franz Schubert"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Which of these is a famous German opera house?",
        "choices": ["Scala Opera House", "Vienna Opera House", "Semper Opera House", "Paris Opera House"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What is the most famous composition by Beethoven?",
        "choices": ["The Magic Flute", "Symphony No. 9", "Brandenburg Concerto", "Requiem"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "What type of musical instrument is a 'Geige' in German?",
        "choices": ["Piano", "Violin", "Trumpet", "Flute"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Who wrote Eine kleine Nachtmusik?",
        "choices": ["Richard Wagner", "Franz Schubert", "Ludwig van Beethoven", "Wolfgang Amadeus Mozart"],
        "type": "MCQs",
        "correctAnswer": 4
      },
      {
        "question": "Which famous composer is known for his Requiem mass?",
        "choices": ["Ludwig van Beethoven", "Franz Schubert", "Wolfgang Amadeus Mozart", "Johannes Brahms"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Which of the following is a common feature of classical music?",
        "choices": ["Rock drums", "Strong rhythm and heavy bass", "Strings and orchestras", "Electronic beats"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Who is considered the founder of modern classical music in Germany?",
        "choices": ["Johann Sebastian Bach", "Richard Wagner", "Ludwig van Beethoven", "Wolfgang Amadeus Mozart"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "What is the German word for 'opera'?",
        "choices": ["Theater", "Konzert", "Oper", "Galerie"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Which of these composers was known for his operas?",
        "choices": ["Johann Sebastian Bach", "Franz Schubert", "Richard Wagner", "Beethoven"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Which of the following is the name of a famous German music festival?",
        "choices": ["Bayreuth Festival", "Edinburgh Festival", "Salzburg Festival", "Paris Jazz Festival"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Which of the following is a famous German composer known for his symphonies?",
        "choices": ["Richard Wagner", "Johannes Brahms", "Franz Schubert", "Wolfgang Amadeus Mozart"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Which composer is known for the Pastoral Symphony?",
        "choices": ["Johann Sebastian Bach", "Ludwig van Beethoven", "Richard Wagner", "Franz Schubert"],
        "type": "MCQs",
        "correctAnswer": 2
      },

      // 20 Fill in the Blanks

      {
        "question": "Der ______ (composer) ist sehr bekannt für seine Opern. ",
        "choices": ["Komponist"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Wir gehen heute Abend ins ______ (concert).",
        "choices": ["Konzert"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Der ______ (symphony) von Beethoven ist weltberühmt. ",
        "choices": ["Symphonie"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "In der Kunstgalerie gibt es viele ______ (paintings) von Picasso. ",
        "choices": ["Gemälde"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Die ______ (conductor) des Berliner Orchesters ist sehr talentiert. ",
        "choices": ["Dirigent"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Es ist wichtig, die Musik ______ (language) in einem Konzert zu verstehen. ",
        "choices": ["Sprache"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ich ______ (can't) das Konzert nicht hören. ",
        "choices": ["Kann"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "In Deutschland gibt es viele ______ (books) über Musikgeschichte. ",
        "choices": ["Bücher"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Der ______ (Requiem) von Mozart gilt als eines der größten Werke der Musikgeschichte. ",
        "choices": ["Requiem"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "(Can) ______ du mir bitte das Programm für das Konzert geben? ",
        "choices": ["Kann"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Dieser ______ (composer) gehört zu den berühmtesten Musikern der Welt. ",
        "choices": ["Komponist"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Beethoven hatte viele ______ (struggles) in seinem Leben. ",
        "choices": ["Schwierigkeiten"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Die ______ (performance) der deutschen Philharmonie ist bekannt. ",
        "choices": ["Aufführung"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Viele Menschen gehen regelmäßig ins ______ (theater) für die klassische Musik. ",
        "choices": ["Theater"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ich werde das ______ (composition) von Bach studieren. ",
        "choices": ["Komposition"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Der ______ (orchestra) gibt heute ein Konzert im Stadtpark. ",
        "choices": ["Orchester"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Das ______ (opera house) in Wien ist ein berühmtes Konzerthaus. ",
        "choices": ["Opernhaus"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Die ______ (piano) ist eine der bekanntesten Instrumente in der Musikgeschichte. ",
        "choices": ["Klavier"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Der ______ (setting) der Oper ist beeindruckend. ",
        "choices": ["Schauplatz"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Beethoven ist ______ (truly) ein echter Genie. ",
        "choices": ["wirklich"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },

      {
  "question": "Ordne die Singular- und Pluralwörter zu.",
  "type": "MatchTheFollowing",
"pairs": [
    {
      "left": { "word": "Wolfgang Amadeus Mozart", "rightId": 1 },
      "right": { "word": "I worked on Saturday.", "rightId": 4 }

    },
    {
      "left": { "word": "Johann Sebastian Bach", "rightId": 2 },
      "right": { "word": "Concerto for Violin", "rightId": 5 }

    },
    {
      "left": { "word": "Ludwig van Beethoven", "rightId": 3 },
      "right": { "word": "It is 2:30.", "rightId": 1 }
      
    },
    {
      "left": { "word": "Richard Wagner", "rightId": 4 },
      "right": { "word": "We ate lunch.", "rightId": 3 }
      
    },
    {
      "left": { "word": "Franz Schubert", "rightId": 5 },
      "right": { "word": "I woke up at 8:00.", "rightId": 2 }

    },
  ]
},

{
  "question": "Ordne die Singular- und Pluralwörter zu.",
  "type": "MatchTheFollowing",
"pairs": [
    {
      "left": { "word": "Er hat gestern Fußball gespielt.", "rightId": 1 },
      "right": { "word": "When did you have breakfast?", "rightId": 2 }

    },
    {
      "left": { "word": "Wann hast du gefrühstückt?", "rightId": 2 },
      "right": { "word": "She received a call at 10:00.", "rightId": 3 }

    },
    {
      "left": { "word": "Sie hat um zehn Uhr einen Anruf bekommen.", "rightId": 3 },
      "right": { "word": "It is 12:15.", "rightId": 5 }
      
    },
    {
      "left": { "word": "Um wie viel Uhr geht die Schule los?", "rightId": 4 },
      "right": { "word": "He played football yesterday.", "rightId": 1 }
      
    },
    {
      "left": { "word": "Es ist Viertel nach zwölf.", "rightId": 5 },
      "right": { "word": "At what time does school start?", "rightId": 4 }

    },
  ]
}
    ]
  },
  {
    quiz: '12',
    name: 'German Exercise - 12 (A2)',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      // 20 MCQs
      {
        "question": "Was isst man oft auf dem Oktoberfest?",
        "choices": ["Pizza", "Curry", "Schweinshaxe", "Pommes"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Welches Getränk ist auf dem Oktoberfest am beliebtesten?",
        "choices": ["Tee", "Bier", "Wein", "Wasser"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Ein Zelt auf dem Oktoberfest ist oft __________ als ein normales Restaurant.",
        "choices": ["kleiner", "größer", "schöner", "lauter"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Die Brezel schmeckt __________ mit Butter.",
        "choices": ["besser", "gut", "schön", "toll"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Wann begann das erste Oktoberfest?",
        "choices": ["1800", "1810", "1900", "2000"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Welche Stadt ist weltweit bekannt für das Oktoberfest?",
        "choices": ["Berlin", "Hamburg", "München", "Frankfurt"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Welcher Nachtisch ist typisch für Weihnachten in Deutschland?",
        "choices": ["Stollen", "Sachertorte", "Croissant", "Eis"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Was bedeutet „Guten Rutsch“?",
        "choices": ["Frohe Ostern", "Frohes neues Jahr", "Herzlichen Glückwunsch", "Guten Appetit"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Welche Suppe isst man oft in Bayern?",
        "choices": ["Gulaschsuppe", "Kürbissuppe", "Leberknödelsuppe", "Zwiebelsuppe"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Welches Getränk trinkt man traditionell im Winter?",
        "choices": ["Glühwein", "Apfelsaft", "Bier", "Kaffee"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Der Weihnachtsmarkt in Köln ist __________ als der in Nürnberg.",
        "choices": ["am kleinsten", "größer", "moderner", "weniger interessant"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Der beste Kuchen ist der, der __________ schmeckt.",
        "choices": ["gut", "besser", "am besten", "schlecht"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Heutzutage feiern Menschen __________ als früher.",
        "choices": ["traditioneller", "moderner", "stiller", "schneller"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Glühwein ist im Winter __________ als kalter Saft.",
        "choices": ["beliebter", "weniger beliebt", "teuer", "altmodisch"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Wie viele Tage dauert das Oktoberfest normalerweise?",
        "choices": ["10", "16-18", "5", "20"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Warum begann das erste Oktoberfest im Jahr 1810?",
        "choices": ["Zur Feier der Hochzeit des Kronprinzen", "Zur Feier eines Kriegsgewinns", "Zur Gründung von München", "Wegen eines Sportfestes"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Welches Tier war ein Teil der ersten Oktoberfestfeier?",
        "choices": ["Pferde", "Kühe", "Schafe", "Schweine"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Wie viele Besucher kommen jedes Jahr zum Oktoberfest?",
        "choices": ["1 Million", "3 Millionen", "6 Millionen", "10 Millionen"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Welches Getränk hat auf dem Oktoberfest einen besonderen Preis?",
        "choices": ["Kaffee", "Bier", "Wasser", "Wein"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "How do you say the number 'seventeen' in German?",
        "choices": ["Fünfzehn", "Sechzehn", "Siebzehn", "Achtzehn"],
        "type": "MCQs",
        "correctAnswer": 3
      },

      // 20 Fill in the Blanks

      {
        "question": "Der ______ (composer) ist sehr bekannt für seine Opern. ",
        "choices": ["Komponist"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ich liebe es, ______ (Plätzchen / Kuchen) zu Weihnachten zu backen.",
        "choices": ["Plätzchen"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Zum Geburtstag bekomme ich immer viele ______ (Geschenke / Briefe).",
        "choices": ["Geschenke"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Oktoberfest findet jedes Jahr in ______ (München / Hamburg) statt.",
        "choices": ["München"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Die Brezel ist ein typisches ______ (Brot / Kuchen) aus Bayern.",
        "choices": ["Brot"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Während der Feiertage besuche ich meine ______ (Familie / Kollegen).",
        "choices": ["Familie"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Auf dem Markt gibt es die besten ______ (Würste / Bücher).",
        "choices": ["Würste"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "______ (Älter / Jünger) als mein Bruder ist meine Schwester.",
        "choices": ["Älter"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ein Dirndl ist ______ (schöner / lang) als eine Lederhose.",
        "choices": ["schöner"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Heute ist das Wetter ______ (besser / am besten) als gestern.",
        "choices": ["besser"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Zum Oktoberfest trägt man oft ______ (traditionelle / moderne) Kleidung.",
        "choices": ["traditionelle"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "In Deutschland isst man zu Weihnachten oft ______ (Weihnachtsgans / Pasta).",
        "choices": ["Weihnachtsgans"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Die Geschichte von Oktoberfest begann ______ (1810 / 1900).",
        "choices": ["1810"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Dieses Bier ist ______ (größer / stärker) als das andere.",
        "choices": ["stärker"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ein festlicher Abend ist ______ (teurer / am teuersten) mit Familie.",
        "choices": ["teurer"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Die Blaskapelle spielt immer ______ (laut / lauter) als die anderen Musiker.",
        "choices": ["lauter"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Zum Fasching tragen Kinder oft ______ (Kostüme / Hüte).",
        "choices": ["Kostüme"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Man sagt, dass deutsche Traditionen ______ (älter / jünger) als moderne Trends sind.",
        "choices": ["älter"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "______ (Bayerisch / Schwäbisch) ist ein deutscher Dialekt, den viele in Bayern sprechen.",
        "choices": ["Bayerisch"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Der Weihnachtsbaum ist in Deutschland ______ (wichtiger / am wichtigsten) für die Dekoration.",
        "choices": ["wichtiger"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Es gibt ______ (mehr / weniger) Bier auf dem Oktoberfest als in einer normalen Bar.",
        "choices": ["mehr"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },

      {
  "question": "Ordne die Singular- und Pluralwörter zu.",
  "type": "MatchTheFollowing",
"pairs": [
    {
      "left": { "word": "Brezel", "rightId": 1 },
      "right": { "word": "Traditional Bavarian Dress", "rightId": 2 }

    },
    {
      "left": { "word": "Dirndl", "rightId": 2 },
      "right": { "word": "Traditional Pants", "rightId": 5 }

    },
    {
      "left": { "word": "Weihnachtsgans", "rightId": 3 },
      "right": { "word": "Pretzel", "rightId": 1 }
      
    },
    {
      "left": { "word": "Blaskapelle", "rightId": 4 },
      "right": { "word": "Christmas Goose", "rightId": 3 }
      
    },
    {
      "left": { "word": "Lederhose", "rightId": 5 },
      "right": { "word": "Brass Band", "rightId": 4 }

    },
  ]
},

{
  "question": "Ordne die Singular- und Pluralwörter zu.",
  "type": "MatchTheFollowing",
"pairs": [
    {
      "left": { "word": "Biergarten", "rightId": 1 },
      "right": { "word": "Carnival Costume", "rightId": 2 }

    },
    {
      "left": { "word": "Fasching Kostüm", "rightId": 2 },
      "right": { "word": "Beer Tent", "rightId": 3 }

    },
    {
      "left": { "word": "Traditionelle Musik", "rightId": 3 },
      "right": { "word": "Christmas Tree", "rightId": 5 }
      
    },
    {
      "left": { "word": "München", "rightId": 4 },
      "right": { "word": "Beer Garden", "rightId": 1 }
      
    },
    {
      "left": { "word": "Weihnachtsbaum", "rightId": 5 },
      "right": { "word": "Munich", "rightId": 4 }

    },
  ]
}
    ]
  },
  {
    quiz: '13',
    name: 'German Exercise - 13 (A2)',
    level: 'Intermediate',
    topic: 'Mixed',
    questions: [
      // 20 MCQs
      {
        "question": "Was bedeutet \"Klimawandel\"?",
        "choices": ["Climate change", "Recycling", "Air pollution", "Forest protection"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Welcher Begriff bedeutet \"renewable energy\"?",
        "choices": ["fossile Energie", "erneuerbare Energie", "nicht erneuerbare Energie", "Energieverlust"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Was ist der \"Treibhauseffekt\"?",
        "choices": ["The melting of ice caps", "The ozone layer", "The greenhouse effect", "The recycling system"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Wie sagt man \"forest\" auf Deutsch?",
        "choices": ["Wüste", "Wald", "Baum", "Strauch"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Was kann man tun, um die Umwelt zu schützen?",
        "choices": ["Mehr Abfall produzieren", "Strom sparen", "Treibhausgase freisetzen", "Bäume fällen"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Was ist eine erneuerbare Energiequelle?",
        "choices": ["Kohle", "Öl", "Wind", "Erdgas"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Was bedeutet \"Abholzung\"?",
        "choices": ["Conservation", "Deforestation", "Forestation", "Air pollution"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Welches der folgenden ist ein Effekt des Klimawandels?",
        "choices": ["Saubereres Wasser", "Mehr Bäume", "Anstieg des Meeresspiegels", "Weniger CO2"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Wie können wir Wasser sparen?",
        "choices": ["Indem wir lange duschen", "Indem wir weniger Plastik benutzen", "Indem wir den Wasserhahn schließen", "Indem wir Müll trennen"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Was bedeutet \"Umweltschutz\"?",
        "choices": ["Nature pollution", "Environmental protection", "Climate change", "Air pollution"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Wie sagt man \"global warming\" auf Deutsch?",
        "choices": ["Ozonloch", "Treibhauseffekt", "Erderwärmung", "Klimaanlage"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Was ist eine Konsequenz des Treibhauseffekts?",
        "choices": ["Weniger Plastik", "Schmelzende Gletscher", "Mehr fossile Brennstoffe", "Weniger Windenergie"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Was bedeutet \"Recycling\"?",
        "choices": ["Wiederverwertung", "Mülltrennung", "Abfall", "Verschmutzung"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Was ist \"Luftverschmutzung\"?",
        "choices": ["Air pollution", "Noise pollution", "Renewable energy", "Deforestation"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Wie kann man den Treibhauseffekt reduzieren?",
        "choices": ["Mehr fossile Brennstoffe nutzen", "Weniger CO2 ausstoßen", "Mehr Bäume fällen", "Plastik ins Meer werfen"],
        "type": "MCQs",
        "correctAnswer": 2
      },
      {
        "question": "Wie sagt man \"ozone layer\" auf Deutsch?",
        "choices": ["Wald", "Ozonloch", "Ozonschicht", "Klimawandel"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Was ist eine erneuerbare Energiequelle?",
        "choices": ["Kohle", "Erdgas", "Solarenergie", "Plastik"],
        "type": "MCQs",
        "correctAnswer": 3
      },
      {
        "question": "Was ist ein Synonym für \"Mülltrennung\"?",
        "choices": ["Recycling", "Luftverschmutzung", "Ozonloch", "Erderwärmung"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Was bedeutet \"Windkraft\"?",
        "choices": ["Wind power", "Wind forest", "Wind layer", "Wind pollution"],
        "type": "MCQs",
        "correctAnswer": 1
      },
      {
        "question": "Wie können wir unseren CO2-Fußabdruck reduzieren?",
        "choices": ["Mehr mit dem Auto fahren", "Weniger Plastik verwenden", "Mehr Öl verbrauchen", "Kohleenergie nutzen"],
        "type": "MCQs",
        "correctAnswer": 2
      },

      // 20 Fill in the Blanks

      {
        "question": "Die ______ (forest) ist voller Bäume und Tiere.",
        "choices": ["Wald"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Wenn wir die Umwelt schützen wollen, sollten wir ______ (recycle).",
        "choices": ["recyceln"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Der ______ (climate change) hat große Auswirkungen auf die Natur.",
        "choices": ["Klimawandel"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Wenn wir weniger Fleisch essen, ______ (save) wir die Umwelt.",
        "choices": ["sparen"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Viele Tiere sterben, weil ihre ______ (habitat) zerstört wird.",
        "choices": ["Lebensraum"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Wenn die Luftverschmutzung weiter steigt, wird es ______ (difficult) zu atmen.",
        "choices": ["schwierig"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Wir müssen mehr ______ (solar energy) nutzen, um Energie zu sparen.",
        "choices": ["Solarenergie"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Wenn wir ______ (less plastic) verwenden, wird die Umwelt sauberer.",
        "choices": ["weniger Plastik"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Der ______ (rain) ist notwendig für die Landwirtschaft.",
        "choices": ["Regen"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ohne sauberes ______ (water) können Menschen und Tiere nicht leben.",
        "choices": ["Wasser"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Die Regierung plant ein Gesetz, um den ______ (greenhouse effect) zu reduzieren.",
        "choices": ["Treibhauseffekt"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Wenn wir mehr ______ (trees) pflanzen, wird die Erde grüner.",
        "choices": ["Bäume"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Wir sollten den Müll in ______ (different bins) trennen.",
        "choices": ["verschiedene Tonnen"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Der ______ (storm) hat viele Häuser beschädigt.",
        "choices": ["Sturm"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Es ist wichtig, den ______ (ozone layer) zu schützen.",
        "choices": ["Ozonschicht"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Wenn jeder seinen Teil beiträgt, ______ (can) die Umwelt gerettet werden.",
        "choices": ["kann"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Die ______ (nature conservation) ist ein wichtiges Thema.",
        "choices": ["Naturschutz"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "______ (wind energy) wird oft in Küstenregionen genutzt.",
        "choices": ["Windenergie"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Wir sollten immer die ______ (environmental protection laws) beachten.",
        "choices": ["Umweltschutzgesetze"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },
      {
        "question": "Ein kleiner Schritt kann einen großen ______ (impact) haben.",
        "choices": ["Einfluss"],
        "type": "FillInTheBlanks",
        "correctAnswer": 1
      },

      {
  "question": "Ordne die Singular- und Pluralwörter zu.",
  "type": "MatchTheFollowing",
"pairs": [
    {
      "left": { "word": "Umweltverschmutzung", "rightId": 1 },
      "right": { "word": "Global warming", "rightId": 2 }

    },
    {
      "left": { "word": "Erderwärmung", "rightId": 2 },
      "right": { "word": "Renewable energy", "rightId": 5 }

    },
    {
      "left": { "word": "Mülltrennung", "rightId": 3 },
      "right": { "word": "Pollution", "rightId": 1 }
      
    },
    {
      "left": { "word": "erneuerbare Energie", "rightId": 4 },
      "right": { "word": "Waste separation", "rightId": 3 }
      
    },
    {
      "left": { "word": "Abfall", "rightId": 5 },
      "right": { "word": "Brass Band", "rightId": 4 }

    },
  ]
},

{
  "question": "Ordne die Singular- und Pluralwörter zu.",
  "type": "MatchTheFollowing",
"pairs": [
    {
      "left": { "word": "Klimawandel", "rightId": 1 },
      "right": { "word": "Deforestation", "rightId": 2 }

    },
    {
      "left": { "word": "Abholzung", "rightId": 2 },
      "right": { "word": "Wind energy", "rightId": 3 }

    },
    {
      "left": { "word": "Windkraft", "rightId": 3 },
      "right": { "word": "Greenhouse effect", "rightId": 5 }
      
    },
    {
      "left": { "word": "Sonnenenergie", "rightId": 4 },
      "right": { "word": "Global warming", "rightId": 1 }
      
    },
    {
      "left": { "word": "Treibhauseffekt", "rightId": 5 },
      "right": { "word": "Solar energy", "rightId": 4 }

    },
  ]
}
    ]
  },
];
