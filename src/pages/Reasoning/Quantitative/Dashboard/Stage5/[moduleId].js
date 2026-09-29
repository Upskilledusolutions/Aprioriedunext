import { useRouter } from "next/router";
import { getStage5ActivityById } from "../../../../../Data/Reasoning/stage5Activities";
import { STAGE5_MODULES } from "../../../../../Data/Reasoning/stage5Modules";
import { ReasoningModulePage } from "../../../../../components/Reasoning/ReasoningStageViews";
export default function Stage5QuantitativeModule(){const router=useRouter();return <ReasoningModulePage levelId="L1" stageNumber={5} track="quantitative" modules={STAGE5_MODULES.quantitative} activitiesById={getStage5ActivityById} moduleId={Array.isArray(router.query.moduleId)?router.query.moduleId[0]:router.query.moduleId} stagePath="/Reasoning/Quantitative/Dashboard/Stage5" activityBasePath="/Reasoning/Stage5Activity/" />;}