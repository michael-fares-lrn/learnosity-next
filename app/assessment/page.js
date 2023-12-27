import Assessment from "../ui/assessment/assessment";
import { getAssessment } from "../lib/data";

export default async function AssessmentPage() {
    const signedRequest = await getAssessment();
    console.log("the signed Assessment request is", JSON.stringify(signedRequest, null, 2))
    return (
        <>
            <p>Take the Assessment here with Items API</p>
            <Assessment signedRequest={signedRequest}/>
        </>   
    )
} 