const Learnosity = require('learnosity-sdk-nodejs');
const config = require('./config'); // Load consumer key & secret from config.js

const domain = 'localhost';
const uuid = require('uuid');    

export async function getMessage() {
    return {message: "this is the test message from the server async function"}
}

export async function getAssessment() {
    // Include server side Learnosity SDK, and set up variables related to user access.


    // Load the UUID library

// - - - - - - Learnosity server-side configuration - - - - - - //

// Generate the user ID and session ID as UUIDs, set the web server domain.
const user_id = 'demos-user';
const session_id = uuid.v4();



    const learnositySdk = new Learnosity(); // Instantiate the SDK
    // Items API configuration parameters.
    const signedRequest = learnositySdk.init(
        'items',                              // Select Items API
        // Consumer key and consumer secret are the public & private security keys required to access Learnosity APIs and data. These keys grant access to Learnosity's public demos account. Learnosity will provide keys for your own account.
        {
            consumer_key: config.consumerKey, // Load key from config.js
            domain: domain                   // Set the domain (from line 20)
        },
        config.consumerSecret,                // Load secret from config.js
        {
            // Unique student identifier, a UUID generated on line 18.
            user_id: user_id,
            // A reference of the Activity to retrieve from the Item bank, defining which Items will be served in this assessment.
            items: ["Demo3", "Demo4", "Demo8", "Demo9"],
            // Selects a rendering mode, `assess` type is a "standalone" mode (loading a complete assessment player for navigation, VS `inline`, for embedded).
            // Uniquely identifies this specific assessment attempt session for  save/resume, data retrieval and reporting purposes. A UUID generated on line 18.
            session_id: session_id,
            // Used in data retrieval and reporting to compare results with other users submitting the same assessment.
            activity_id: 'quickstart_examples_activity_001',
            // Selects a rendering mode, `assess` type is a "standalone" mode (loading a complete assessment player for navigation, VS `inline`, for embedded).
            rendering_type: 'assess',
            // Selects the context for the student response storage `submit_practice` mode means student response storage in the Learnosity cloud, for grading.
            type: 'submit_practice',
            // Human-friendly display name to be shown in reporting.
            name: 'Items API Quickstart',
            // Can be set to `initial, `resume` or `review`. Optional. Default = `initial`.
            state: 'initial'
        }
    );

    return signedRequest;

}