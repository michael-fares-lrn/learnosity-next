"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
export default function Author({ signedRequest }) {
    const [isSaved, setIsSaved] = useState(false);
    const [actvityTemplateId, setActivityTemplateId] = useState("");

    useEffect(() => {
        console.log("The signed request on the CLIENT is", signedRequest);
        const script = document.createElement("script");
        script.src = "https://authorapi.learnosity.com";
        script.async = true;
        script.onload = () => {
            const callbacks = {
                errorListener: function (e) {
                    // Adds a listener to all error codes.
                    console.log("Error Code ", e.code);
                    console.log("Error Message ", e.msg);
                    console.log("Error Detail ", e.detail);
                },
                readyListener: function () {
                    console.log("Learnosity Author API is ready");
                    console.log("authorApp", authorApp);

                    // prevent save if no items:
                    authorApp.on("save:activity", function (e) {
                        const noItems =
                            authorApp.getActivity().data.items.length ===
                            0;
                        if (noItems) {
                            alert(
                                "Please add items before you save the activity!"
                            );
                            e.preventDefault();
                            setIsSaved(false);
                        }
                    });

                    authorApp.on("save:activity:success", () => {
                        console.log("the activity was saved!!");
                        setIsSaved(true);
                        setActivityTemplateId(
                            authorApp.getActivity().reference
                        );
                    });
                },
            };

            const authorApp = LearnosityAuthor.init(signedRequest, callbacks);
        };
        document.body.appendChild(script);

        return () => {
            console.log("AUTHOR CLEANUP!!!!!!");

            document.body.removeChild(script);
        };
    });

    return (
        <div>
           
            <div className="flex justify-center">
                { isSaved ? <Link
                    className="text-white bg-blue-500 hover:bg-blue-600 active:bg-blue:700 rounded-lg p-3 my-3 mt-5"
                    href={`/assessment?activity_template_id=${actvityTemplateId}`}
                >
                    Take this Assessment!
                </Link> : <button disabled className="cursor-not-allowed disabled:opacity-40 text-white bg-blue-500 active:bg-blue:700 rounded-lg p-3 my-3 mt-5">Take this Assessment!</button>}
            </div>
            <div className="shadow-xl p-3">
                <div id="learnosity-author"></div>
            </div>
        </div>
    );
}
