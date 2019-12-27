/* eslint-disable max-len */
const firebase = require('firebase-admin');



//const { logger } = require('../../config/logger');
const FIREBASE_DB_URL = '';
const serviceAccountIusedFromFirebase = require('');


/**
 *Create Instance and follow Documentation for each function
 *
 * @class Notification
 */
class Notification {
  /**
   *Creates an instance of Notification.
   * @memberof Notification
   */
  constructor() {
    this.payload = {
      notification: {
        title: '',
        body: '',
      },
    };
    this.options = {
      priority: 'high',
      timeToLive: 60 * 60 * 24,
    };
    this.firebase = firebase;
    this.serviceAccountIusedFromFirebase = serviceAccountIusedFromFirebase;
  }


  /**
   *
   *
   * @param {string} [databaseURL=FIREBASE_DB_URL]
   * @param {Object} [serviceAccount=this.serviceAccountIusedFromFirebase]
   * @memberof Notification
   */
  init(databaseURL = FIREBASE_DB_URL,
    serviceAccount = this.serviceAccountIusedFromFirebase) {
    this.firebase.initializeApp({
      credential: firebase.credential.cert(serviceAccount),
      databaseURL,
    });
    console.log('firebase has been intialized');
  }

  /**
   *
   *this method to set options for the notification
   * @param {string} [priority='high'] notification priority to be seen on the above all
   * notifications on the device
   * @param {number} [timeToLive=(60 * 60 * 24)] notification time to remain
   * @memberof Notification
   */
  setOptions(priority = 'high', timeToLive = (60 * 60 * 24)) {
    this.options = {
      priority,
      timeToLive,
    };
  }

  /**
   *
   *This method to set title and body for the notification
   * @param {string} [title=''] the notification title
   * @param {string} [body=''] the notification body
   * @memberof Notification
   */
  SetPayload(title = '', body = '') {
    this.payload = {
      notification: {
        title,
        body,
      },
    };
  }

  /**
   *
   *
   * @param {string} [] the device token
   * @param {this.payload} [payload=this.payload] the payload which will be sent
   * @param {this.options} [options=this.options] the options used to configure this notification
   * @returns
   * @memberof Notification
   */
  sendNotificationToDevice(
    deviceToken = '',
    payload = this.payload,
    options = this.options,
  ) {
    this.firebase.messaging().sendToDevice(deviceToken, payload, options)
    .then(function(response) {
      // See the MessagingTopicManagementResponse reference documentation
      // for the contents of response.
      console.log('The notification has beed sent', response);
    })
    .catch(function(error) {
      console.log('Error with notification sent:', error);
    });
  }


  subscribeToTopicByPostId(
    deviceToken = '',
    topic = '',
  ) {
    this.firebase.messaging().subscribeToTopic(deviceToken, topic)
    .then(function(response) {
      // See the MessagingTopicManagementResponse reference documentation
      // for the contents of response.
      console.log('Successfully subscribed to topic:', response);
    })
    .catch(function(error) {
      console.log('Error subscribing to topic:', error);
    });

  }
}

module.exports = {
  Notification,
};

