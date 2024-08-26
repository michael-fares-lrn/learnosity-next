"use client";
import { useEffect } from "react";

export default function Assessment({ signedRequest }) {
    useEffect(() => {
        const callbacks = {
            errorListener: function (e) {
                // Adds a listener to all error codes.
                console.log("Error Code ", e.code);
                console.log("Error Message ", e.msg);
                console.log("Error Detail ", e.detail);
            },
            readyListener: function () {
                console.log("Learnosity Items API is ready");
                console.log("itemsApp", itemsApp);
                const sessionId = itemsApp.getActivity().session_id;
                itemsApp.on("test:submit:success", function () {
                    console.log(
                        "test:submit:success Fired for session_id",
                        sessionId
                    );
                });
            },
        };

        const itemsApp = LearnosityItems.init(signedRequest, callbacks);

        return () => {
            itemsApp.reset()
        };
    }, []);

    return (
        <div className="shadow-xl p-3">
            <div id="learnosity_assess"></div>
        </div>
    );
}
