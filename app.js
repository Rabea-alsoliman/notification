const express =require('express');
const bodyParser =require('body-parser');
const { Notification } = require('./services/notifications/Notification');


// Database

const { Pool, Client } = require('pg');
const connectionString = 'postgresql://postgres:123456@localhost:5432/notific';

// const pool = new Pool({
//   connectionString: connectionString,
// })
// pool.connect()
// pool.query('SELECT * From like', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })

// const client = new Client({
//   connectionString: connectionString,
// })

// client.connect()

// client.query('SELECT * From user', (err, res) => {
//   console.log(err, res);
//   client.end();
// })

// const {
//   User, UserDeviceToken
// } = require('./models');

const Notify = new Notification();
const app = express();

app.post('/createTopic', bodyParser.json(), (req, res, net) => {
  console.log(req.body)

  // Check device token for friend if exist
  // if (!toUser.UserDeviceTokens.length) {
  //   return { message: 'The request hasn\'t been send because the user has no device token set in database!', status: 404 };
  // }

  // const tokenList = toUser.UserDeviceTokens
  //   .map((token) => token.device_token);
  // const nullValue = tokenList.filter((t) => t === null);

  // Check if the device token contain value
  // if (nullValue.length) {
  //   return { message: 'The request hasn\'t been send because the user has nullable value for device token set in database!', status: 400 };
  // }

    // send notification
    // const tokenList = [
    //   '',
    //   ''
    // ];

    // const topic = req.body.postId;
    // Notify.subscribeToTopicByPostId(tokenList, topic)
    // Notify
    //   .SetPayload('Notification', 'test notification from my function');
    // Notify.sendNotificationToDevice(tokenList);

    /* eslint-disable max-len */
const firebase = require('firebase-admin');

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
      // See the MessagingTopicManagementResponse reference documentation
      // for the contents of response.
      console.log('Successfully subscribed to topic:', response);
    })
    .catch(function(error) {
      console.log('Error subscribing to topic:', error);
    });


    res.json(req.body.postId)
});

app.listen(3001, () => console.log('Server is listening on port 3001'));

module.exports = app;
