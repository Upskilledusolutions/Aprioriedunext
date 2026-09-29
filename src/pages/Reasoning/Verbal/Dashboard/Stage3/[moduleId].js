import { useRouter } from "next/router";
import { getActivityById } from "../../../../../Data/Reasoning/activities";
import { STAGE3_MODULES } from "../../../../../Data/Reasoning/stage3Modules";
import { ReasoningModulePage } from "../../../../../components/Reasoning/ReasoningStageViews";
export default function Stage3VerbalModule(){const router=useRouter();return <ReasoningModulePage levelId="L1" stageNumber={3} track="verbal" modules={STAGE3_MODULES.verbal} activitiesById={getActivityById} moduleId={Array.isArray(router.query.moduleId)?router.query.moduleId[0]:router.query.moduleId} stagePath="/Reasoning/Verbal/Dashboard/Stage3" activityBasePath="/Reasoning/Activity/" />;}