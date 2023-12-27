'use client'
import { useEffect } from "react";
export default function Author({signedRequest}) {
            
    useEffect(() => {
        console.log("The signed request on the CLIENT is", signedRequest)
        const script = document.createElement("script")
        script.src ="https://authorapi.learnosity.com"
        script.async = true
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
                    console.log("authorApp", authorApp)
                },
            };
           
           window.authorApp = LearnosityAuthor.init(
                signedRequest,
                callbacks
            );
        }
        document.body.appendChild(script)

        return () => {
            console.log("AUTHOR CLEANUP!!!!!!")
            console.log("window.authorApp inside cleanup funciton",window.authorApp)
            document.body.removeChild(script)
        }
    
    });

    return (
        <div>
             <div id="learnosity-author"></div>
        </div>
       
    )
}