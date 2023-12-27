import { getReport } from "../lib/data";


import Report from "../ui/report/report";
export default async function ReportsPage({ searchParams }) {
    console.log("searchParams", searchParams);
    const session_id =
        searchParams.session_id || "8c393c87-77b6-4c14-8da7-75d39243e642";
    console.log("session_id", session_id);
    const signedRequest = await getReport(session_id);
    return (
        <>
            {searchParams.session_id ? (
                <p>Let's see how you did on that assessment! Here is the session-detail-by-item report for the assessment you just completed.</p>
            ) : (
                <p>
                    View a Reports for your completed assessment with Reports API
                    here. The report shown here is an example report from <a className="text-blue-800" href="https://demos.learnosity.com/analytics/student-centric-reporting.php#session-detail-report" target="_blank">demos page here.</a>
                    <br/>
                    <br/>
                    Complete an assessment on the assesment page and then you will see a report for it here after you submit it!
                </p>
            )}
            <Report signedRequest={signedRequest} />
        </>
    );
}
