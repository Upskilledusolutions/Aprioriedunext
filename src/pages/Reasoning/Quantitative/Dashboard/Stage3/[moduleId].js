import { useRouter } from "next/router";
import { getActivityById } from "../../../../../Data/Reasoning/activities";
import { STAGE3_MODULES } from "../../../../../Data/Reasoning/stage3Modules";
import { ReasoningModulePage } from "../../../../../components/Reasoning/ReasoningStageViews";
export default function Stage3QuantitativeModule(){const router=useRouter();return <ReasoningModulePage levelId="L1" stageNumber={3} track="quantitative" modules={STAGE3_MODULES.quantitative} activitiesById={getActivityById} moduleId={Array.isArray(router.query.moduleId)?router.query.moduleId[0]:router.query.moduleId} stagePath="/Reasoning/Quantitative/Dashboard/Stage3" activityBasePath="/Reasoning/Activity/" />;}