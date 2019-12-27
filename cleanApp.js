const express =require('express');
const bodyParser =require('body-parser');
const firebase = require('firebase-admin');
const app = express();

app.post('/createTopic', bodyParser.json(), (req, res, net) => {
  console.log(req.body)

// Please do not forget write firebase database url
const FIREBASE_DB_URL = 'database url here';

// Please do not forget write credentials for firebase json file
const serviceAccountIusedFromFirebase = require('credentials for firebase json file here');

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccountIusedFromFirebase),
  databaseURL: FIREBASE_DB_URL
});

// These registration tokens come from the client FCM SDKs.
  const registrationTokens = [
    'device token 1',
    'device token 2'
  ];
  const topic = req.body.postId;
  // Subscribe the devices corresponding to the registration tokens to the
  // topic.

  firebase.messaging().subscribeToTopic(registrationTokens, topic)
    .then(function(response) {
      console.log('Successfully subscribed to topic:', response);
    })
    .catch(function(error) {
      console.log('Error subscribing to topic:', error);
    });

    res.json(req.body.postId)
});

app.listen(3001, () => console.log('Server is listening on port 3001'));

module.exports = app;
