const stripPunctuation=(value)=>String(value||"").trim().replace(/[.!?]+$/g,"");
const firstAlpha=(value)=>String(value||"").match(/[A-Za-z]/)?.[0]||"";
const sameCase=(options)=>{
  const letters=options.map(firstAlpha).filter(Boolean);
  const upper=letters.filter((c)=>c===c.toUpperCase()).length;
  const lower=letters.length-upper;
  const preferUpper=upper>=lower;
  return options.map((value)=>{
    const text=stripPunctuation(value);
    if(!text)return text;
    const first=text.search(/[A-Za-z]/);
    if(first<0)return text;
    const char=text[first];
    const normalized=preferUpper?char.toUpperCase():char.toLowerCase();
    return text.slice(0,first)+normalized+text.slice(first+1);
  });
};

const STAGE1_VERBAL_LENGTH_REWRITES={
  "V-L1-Q-S1-REMED-main-idea-09": [
    [
      "Drawing helped reveal details that might otherwise be missed.",
      "Drawing revealed details adults missed."
    ]
  ],
  "V-L1-Q-S1-REMED-main-idea-10": [
    [
      "Teamwork and clear roles improved the team's play.",
      "Teamwork and clear roles improved play."
    ]
  ],
  "V-L1-Q-S1-REMED-evidence-and-claims-02": [
    [
      "A student says the walk gives her time to notice birds and trees.",
      "The walk lets her notice birds and trees."
    ],
    [
      "17 of 20 visitors said the route was easier after signs were added.",
      "17 visitors said the new route was easier."
    ]
  ],
  "V-L1-Q-S1-REMED-evidence-and-claims-03": [
    [
      "It collected 12 kg this month versus 5 kg last month.",
      "Recycling rose from 5 kg to 12 kg."
    ]
  ],
  "V-L1-Q-S1-REMED-evidence-and-claims-04": [
    [
      "More children can see the path clearly after sunset.",
      "The path is easier to see after sunset."
    ]
  ],
  "V-L1-Q-S1-REMED-evidence-and-claims-05": [
    [
      "Sam reads for 15 minutes and says he feels calmer afterward.",
      "Sam felt calmer after reading before bed."
    ],
    [
      "Students recorded bees and butterflies visiting flowers.",
      "Bees and butterflies were recorded."
    ]
  ],
  "V-L1-Q-S1-REMED-evidence-and-claims-06": [
    [
      "Students counted 18 in spring versus 6 in winter",
      "Spring had 18 visits versus 6 in winter."
    ],
    [
      "Walking times for old and new routes under similar conditions.",
      "Old and new route times were compared."
    ]
  ],
  "V-L1-Q-S1-REMED-evidence-and-claims-07": [
    [
      "One reusable bottle replaced daily disposable bottles.",
      "One bottle replaced daily ones"
    ]
  ],
  "V-L1-Q-S1-REMED-evidence-and-claims-09": [
    [
      "Voluntary borrowing of selected books increased over three months.",
      "Book borrowing increased over three months."
    ]
  ],
  "V-L1-Q-S1-REMED-evidence-and-claims-10": [
    [
      "Chapters use short explanations followed by simple examples and practice.",
      "It uses short explanations and examples."
    ],
    [
      "Whether the evidence actually relates to and supports the conclusion.",
      "Check whether the evidence supports the conclusion."
    ]
  ],
  "V-L1-Q-S1-REMED-basic-argument-08": [
    [
      "A survey shows 16 students struggle to concentrate when the room is noisy.",
      "A survey links noise and focus"
    ]
  ],
  "V-L1-Q-S1-REMED-perspectives-01": [
    [
      "Ravi focuses on food while Mei focuses on supporting pollinators.",
      "They prioritize food and pollinators."
    ]
  ],
  "V-L1-Q-S1-REMED-perspectives-05": [
    [
      "The farmer emphasizes speed while the resident emphasizes durability.",
      "They value speed and durability differently."
    ]
  ],
  "V-L1-Q-S1-REMED-perspectives-06": [
    [
      "They value interaction and quiet observation differently.",
      "They prefer different exhibit experiences."
    ]
  ],
  "V-L1-Q-S1-REMED-perspectives-07": [
    [
      "The coach prioritizes simplicity while the player prioritizes scoring opportunities.",
      "They prioritize different strategy benefits."
    ]
  ],
  "V-L1-Q-S1-REMED-perspectives-08": [
    [
      "The family emphasizes access while the librarian considers staffing needs.",
      "They weigh access and staffing differently."
    ]
  ],
  "V-L1-Q-S1-REMED-perspectives-10": [
    [
      "They interpret the same behavior differently based on what they emphasize.",
      "They interpret the same behavior differently."
    ]
  ],
  "V-L1-Q-S1-REMED-main-idea-04": [
    [
      "Testing and improving a design can solve a problem",
      "Testing improved the design"
    ]
  ],
  "V-L1-Q-S1-REMED-main-idea-07": [
    [
      "Clear signs can make a place easier to use",
      "Signs made the path easier"
    ]
  ],
  "V-L1-Q-S1-REMED-main-idea-08": [
    [
      "A shared checklist helped students remember assignments",
      "A checklist tracked homework"
    ]
  ],
  "V-L1-Q-S1-REMED-basic-argument-02": [
    [
      "Labels help students find materials faster",
      "Labels help find materials"
    ]
  ],
  "V-L1-Q-S1-REMED-basic-argument-03": [
    [
      "The unused space can be used for growing herbs",
      "The space is suitable for herbs"
    ]
  ],
  "V-L1-Q-S1-REMED-basic-argument-09": [
    [
      "Many students have books they already read",
      "Students have finished books"
    ]
  ],
  "V-L1-Q-S1-REMED-sequencing-10": [
    [
      "To decide which version better meets the goal",
      "To choose the better version"
    ]
  ],
  "V-L1-Q-S1-REMED-perspectives-02": [
    [
      "One values collaboration while the other values focused individual work",
      "They value group work or quiet work"
    ]
  ],
  "V-L1-Q-S1-REMED-perspectives-04": [
    [
      "They value different advantages of the same tool",
      "They value different benefits"
    ]
  ],
  "Q-L1-V-S1-EXT-ARG-001": [
    [
      "A class survey found that regular readers learned more new words.",
      "Regular readers learned more new words."
    ]
  ],
  "Q-L1-V-S1-EXT-ARG-002": [
    [
      "A shaded playground measured cooler temperatures than an unshaded area.",
      "Shaded play areas were cooler."
    ]
  ],
  "Q-L1-V-S1-EXT-ARG-003": [
    [
      "A class observation found fewer off-task behaviours during quiet reading time.",
      "Quiet reading had fewer off-task behaviours."
    ]
  ]
}

const hash=(text)=>String(text||"").split("").reduce((n,c)=>(n*31+c.charCodeAt(0))>>>0,7);
const seededShuffle=(items,seed)=>{
  const result=[...items]; let state=hash(seed);
  for(let i=result.length-1;i>0;i-=1){state=(state*1664525+1013904223)>>>0;const j=state%(i+1);[result[i],result[j]]=[result[j],result[i]];}
  return result;
};

export function prepareStage1VerbalQuestion(question){
  if(!question||!Array.isArray(question.options)||question.options.length<2)return question;
  const rewrite=STAGE1_VERBAL_LENGTH_REWRITES[question.id];
  let sourceOptions=[...question.options];
  let sourceAnswer=question.answer;
  if(rewrite){
    for(const [from,to] of rewrite){
      sourceOptions=sourceOptions.map((option)=>String(option||"").trim()===from?to:option);
      if(String(sourceAnswer||"").trim()===from)sourceAnswer=to;
    }
  }
  const normalized=sameCase(sourceOptions);
  const options=seededShuffle(normalized,`${question.id}:${Date.now()}`);
  const answerIndex=normalized.findIndex((option)=>stripPunctuation(option).toLowerCase()===stripPunctuation(sourceAnswer).toLowerCase());
  const normalizedAnswer=answerIndex>=0?normalized[answerIndex]:stripPunctuation(sourceAnswer);
  const LENGTH_CUE_MIN_GAP=18;
  const lengthRisk=normalized.some((option,index)=>{
    if(index!==answerIndex)return false;
    const lengths=normalized.map((item)=>item.length);
    const sorted=[...lengths].sort((a,b)=>a-b);
    const length=option.length;
    const max=Math.max(...lengths); const min=Math.min(...lengths);
    const maxUnique=length===max&&lengths.filter((value)=>value===max).length===1;
    const minUnique=length===min&&lengths.filter((value)=>value===min).length===1;
    const near=maxUnique?sorted[sorted.length-2]:sorted[1];
    return (maxUnique||minUnique)&&Math.abs(length-near)>=LENGTH_CUE_MIN_GAP&&Math.max(length,near)>=18;
  });
  if(lengthRisk&&typeof window!=="undefined"&&process.env.NODE_ENV!=="production")console.warn(`[Reasoning option-quality] ${question.id}: correct answer has a conspicuous length cue; rebalance the option set before production release.`);
  return {...question,options,answer:normalizedAnswer,optionQuality:{caseNormalized:true,punctuationNormalized:true,positionRandomized:true,lengthCueFlagged:lengthRisk}};
}
