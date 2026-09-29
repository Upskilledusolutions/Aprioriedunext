import { useRouter } from "next/router";
import { getStage4ActivityById } from "../../../../../Data/Reasoning/stage4Activities";
import { STAGE4_MODULES } from "../../../../../Data/Reasoning/stage4Modules";
import { ReasoningModulePage } from "../../../../../components/Reasoning/ReasoningStageViews";
export default function Stage4QuantitativeModule(){const router=useRouter();return <ReasoningModulePage levelId="L1" stageNumber={4} track="quantitative" modules={STAGE4_MODULES.quantitative} activitiesById={getStage4ActivityById} moduleId={Array.isArray(router.query.moduleId)?router.query.moduleId[0]:router.query.moduleId} stagePath="/Reasoning/Quantitative/Dashboard/Stage4" activityBasePath="/Reasoning/Stage4Activity/" />;}