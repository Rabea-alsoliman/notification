/* eslint-disable max-len */
const firebase = require('firebase-admin');
const FIREBASE_DB_URL = '';
const serviceAccountIusedFromFirebase = require('');

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: FIREBASE_DB_URL
  });

// These registration tokens come from the client FCM SDKs.
const registrationTokens = [
    'YOUR_REGISTRATION_TOKEN_1',
    // ...
    'YOUR_REGISTRATION_TOKEN_n'
  ];

  // Subscribe the devices corresponding to the registration tokens to the
  // topic.
  admin.messaging().subscribeToTopic(registrationTokens, topic)
    .then(function(response) {
      // See the MessagingTopicManagementResponse reference documentation
      // for the contents of response.
      console.log('Successfully subscribed to topic:', response);
    })
    .catch(function(error) {
      console.log('Error subscribing to topic:', error);
    });


// Initialize the default app
const app = firebase.initializeApp();

