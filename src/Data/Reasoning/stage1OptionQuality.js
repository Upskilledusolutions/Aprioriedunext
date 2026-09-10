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

const hash=(text)=>String(text||"").split("").reduce((n,c)=>(n*31+c.charCodeAt(0))>>>0,7);
const seededShuffle=(items,seed)=>{
  const result=[...items]; let state=hash(seed);
  for(let i=result.length-1;i>0;i-=1){state=(state*1664525+1013904223)>>>0;const j=state%(i+1);[result[i],result[j]]=[result[j],result[i]];}
  return result;
};

export function prepareStage1VerbalQuestion(question){
  if(!question||!Array.isArray(question.options)||question.options.length<2)return question;
  const normalized=sameCase(question.options);
  const options=seededShuffle(normalized,`${question.id}:${Date.now()}`);
  const answerIndex=normalized.findIndex((option)=>option===stripPunctuation(question.answer));
  const normalizedAnswer=answerIndex>=0?normalized[answerIndex]:stripPunctuation(question.answer);
  const lengthRisk=normalized.some((option,index)=>{
    const length=option.length;
    const lengths=normalized.map((item)=>item.length);
    const max=Math.max(...lengths); const min=Math.min(...lengths);
    return index===answerIndex&&((length===max&&lengths.filter((x)=>x===max).length===1)||(length===min&&lengths.filter((x)=>x===min).length===1));
  });
  if(lengthRisk&&typeof window!=="undefined"&&process.env.NODE_ENV!=="production")console.warn(`[Reasoning option-quality] ${question.id}: correct answer has a unique length extreme; re-author the option set before production release.`);
  return {...question,options,answer:normalizedAnswer,optionQuality:{caseNormalized:true,punctuationNormalized:true,positionRandomized:true,lengthCueFlagged:lengthRisk}};
}
