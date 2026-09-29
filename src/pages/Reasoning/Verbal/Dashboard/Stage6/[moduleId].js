import { useRouter } from "next/router";
import { getStage6ActivityById } from "../../../../../Data/Reasoning/stage6Activities";
import { STAGE6_MODULES } from "../../../../../Data/Reasoning/stage6Modules";
import { ReasoningModulePage } from "../../../../../components/Reasoning/ReasoningStageViews";
export default function Stage6VerbalModule(){const router=useRouter();return <ReasoningModulePage levelId="L1" stageNumber={6} track="verbal" modules={STAGE6_MODULES.verbal} activitiesById={getStage6ActivityById} moduleId={Array.isArray(router.query.moduleId)?router.query.moduleId[0]:router.query.moduleId} stagePath="/Reasoning/Verbal/Dashboard/Stage6" activityBasePath="/Reasoning/Stage6Activity/" />;}