import { useRouter } from "next/router";
import { getStage5ActivityById } from "../../../../../Data/Reasoning/stage5Activities";
import { STAGE5_MODULES } from "../../../../../Data/Reasoning/stage5Modules";
import { ReasoningModulePage } from "../../../../../components/Reasoning/ReasoningStageViews";
export default function Stage5VerbalModule(){const router=useRouter();return <ReasoningModulePage levelId="L1" stageNumber={5} track="verbal" modules={STAGE5_MODULES.verbal} activitiesById={getStage5ActivityById} moduleId={Array.isArray(router.query.moduleId)?router.query.moduleId[0]:router.query.moduleId} stagePath="/Reasoning/Verbal/Dashboard/Stage5" activityBasePath="/Reasoning/Stage5Activity/" />;}