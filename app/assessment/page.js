import Assessment from "../ui/assessment/assessment";
import { getAssessment } from "../lib/data";

export default async function AssessmentPage({ searchParams }) {
    const activity_template_id =
        searchParams.activity_template_id || "demo-activity-1";
    const signedRequest = await getAssessment(activity_template_id);
    console.log(
        "the signed Assessment request is",
        JSON.stringify(signedRequest, null, 2)
    );
    return (
        <>
            {searchParams.activity_template_id ? (
                <p>
                    Take the assessment you just authored in the previous step
                    here, using the Items API.
                </p>
            ) : (
                <p>
                    The assessment shown here is an example assessment from our{" "}
                    <a
                        className="text-blue-800"
                        href="https://demos.learnosity.com/assessment/activities.php"
                        target="_blank"
                    >
                        demos page here.
                    </a>
                    <br/><br/>
                    You can also author your own assessment by visiting the <a className="text-blue-800" href="/author">Authoring page</a> above, and when finished, return here to take that one!
                </p>
            )}
            <Assessment signedRequest={signedRequest} />
        </>
    );
}
