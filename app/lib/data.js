
const Learnosity = require('learnosity-sdk-nodejs');
const config = require('./config'); // Load consumer key & secret from config.js

const domain = 'localhost';
const uuid = require('uuid');
const learnositySdk = new Learnosity(); // Instantiate the SDK    

export async function getAuthoring() {

   
    // Author API configuration parameters.
    const signedRequest = learnositySdk.init(
        'author',                             
        {
            consumer_key: config.consumerKey, 
            domain: domain                  
        },
        config.consumerSecret,
        {
            "mode": "activity_edit",
            "reference": "fares_activity",
            "user": {
                  "id": "demos-site",
                  "firstname": "Demos",
                  "lastname": "User",
                  "email": "demos@learnosity.com"
              }
        }
    );

    return signedRequest;

}

export async function getAssessment(activity_template_id) {
  
    const user_id = "$ANONYMIZED_USER_ID";
    const session_id = uuid.v4();


    // Items API configuration parameters.
    const signedRequest = learnositySdk.init(
        'items',                              
        {
            consumer_key: config.consumerKey, 
            domain: domain                  
        },
        config.consumerSecret,                
        {

            user_id: user_id,
            activity_template_id: activity_template_id,
            session_id: session_id,
            activity_id: 'Demo Activity',
            rendering_type: 'assess',
            type: 'submit_practice',
            name: 'Items API Example',
            config:{
                regions: "main",
                configuration: {
                    onsubmit_redirect_url: `/reports/?session_id=${session_id}`
                }
            }
        }
    );

    return signedRequest;

}
export async function getReport(session_id) {
    const user_id = "$ANONYMIZED_USER_ID";


    // Items API configuration parameters.
    const signedRequest = learnositySdk.init(
        'reports',                              
        {
            consumer_key: config.consumerKey, 
            domain: domain                  
        },
        config.consumerSecret,                
        {
            // Reports array to specify the type(s) of the reports to load on the page. This example uses one report type for simplicity, but you can specify multiple report types.
            reports: [
                {
                    // type of the report you would like to request
                    type: 'session-detail-by-item',
                    // the id for the report which will match that of the html div element hook we want the report to render into
                    // (this div can be found on line 11 of docs/quickstart/views/reports.ejs)
                    id: 'session-detail',
                    // The unique student identifier that was generated for the student at the time of the assessment
                    user_id: user_id,
                    // session id of the assessment session we wish to report on. This one uses the id a completed session from our Demos.
                    session_id: session_id
                }
            ]
        }
    );

    return signedRequest;

}



