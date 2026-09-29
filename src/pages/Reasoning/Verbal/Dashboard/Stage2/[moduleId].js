import { useRouter } from "next/router";
import { getActivityById } from "../../../../../Data/Reasoning/activities";
import { STAGE2_MODULES } from "../../../../../Data/Reasoning/stage2Modules";
import { ReasoningModulePage } from "../../../../../components/Reasoning/ReasoningStageViews";
export default function Stage2VerbalModule(){const router=useRouter();return <ReasoningModulePage levelId="L1" stageNumber={2} track="verbal" modules={STAGE2_MODULES.verbal} activitiesById={getActivityById} moduleId={Array.isArray(router.query.moduleId)?router.query.moduleId[0]:router.query.moduleId} stagePath="/Reasoning/Verbal/Dashboard/Stage2" activityBasePath="/Reasoning/Activity/" />;}