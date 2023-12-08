import Assessment from "../ui/assessment/assessment";
import { getAssessment } from "../lib/data";

export default async function AssessmentPage() {
    const signedRequest = await getAssessment();
    return (
        <>
            <p>Take the Assessment here with Items API</p>
            <Assessment signedRequest={signedRequest}/>
        </>   
    )
} 