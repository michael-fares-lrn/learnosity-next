'use server'

const Learnosity = require('learnosity-sdk-nodejs');
const config = require('../lib/config'); // Load consumer key & secret from config.js
const learnositySdk = new Learnosity(); // Instantiate the SDK

const domain = 'localhost';

export async function createReport(session_id) {
    const signedRequest = learnositySdk.init(
        'reports',                              
        {
            consumer_key: config.consumerKey, 
            domain: domain                  
        },
        config.consumerSecret,                
        {
            reports: [
                {
                    type: 'session-detail-by-item',
                    id: 'session-detail',
                    user_id: 'demos-user',
                    session_id: session_id
                }
            ]
        })
    return signedRequest;
}