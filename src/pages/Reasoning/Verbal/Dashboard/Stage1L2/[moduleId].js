import { useRouter } from "next/router";
import { getLevel2Stage1ActivityById } from "../../../../../Data/Reasoning/level2Stage1Activities";
import { LEVEL2_STAGE1_MODULES } from "../../../../../Data/Reasoning/level2Stage1Modules";
import { ReasoningModulePage } from "../../../../../components/Reasoning/ReasoningStageViews";
export default function Level2VerbalModule(){const router=useRouter();return <ReasoningModulePage levelId="L2" stageNumber={1} track="verbal" modules={LEVEL2_STAGE1_MODULES.verbal} activitiesById={getLevel2Stage1ActivityById} moduleId={Array.isArray(router.query.moduleId)?router.query.moduleId[0]:router.query.moduleId} stagePath="/Reasoning/Verbal/Dashboard/Stage1L2" activityBasePath="/Reasoning/Activity/" />;}