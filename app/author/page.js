import Author from "../ui/author/author";
import { getAuthoring } from "../lib/data";



export default async function AuthoringPage() {
    const signedRequest = await getAuthoring();
    console.log("the signed Authoring request ON THE SERVER is", JSON.stringify(signedRequest, null, 2))
    return (
        <>
            <p>Author the Assessment here with Author API</p>
            <Author signedRequest={signedRequest}/>
        </>   
    )
} 

