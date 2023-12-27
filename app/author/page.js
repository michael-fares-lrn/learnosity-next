import Author from "../ui/author/author";
import { getAuthoring } from "../lib/data";



export default async function AuthoringPage() {
    const signedRequest = await getAuthoring();
    console.log("the signed Authoring request ON THE SERVER is", JSON.stringify(signedRequest, null, 2))
    return (
        <>
            <p>Author the your own Assessment here with Author API. When you are happy with the results, press "Save" and then you will be able to take the assessment as a student would by clicking the "Take this Assessment" button.</p>
            <Author signedRequest={signedRequest}/>
        </>   
    )
} 

