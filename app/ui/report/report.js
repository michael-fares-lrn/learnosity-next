"use client";
import { useEffect } from "react";
export default function Report({ signedRequest }) {
    useEffect(() => {
        const callbacks = {
            errorListener: function (e) {
                // Adds a listener to all error codes.
                console.log("Error Code ", e.code);
                console.log("Error Message ", e.msg);
                console.log("Error Detail ", e.detail);
            },
            readyListener: function () {
                console.log("Learnosity Reports API is ready");
                console.log("reportsApp", reportsApp);
            },
        };

        const reportsApp = LearnosityReports.init(signedRequest, callbacks);

        return () => {};
    }, []);

    return (
        <div className="shadow-xl p-3">
            <div id="session-detail"></div>
        </div>
    );
}
