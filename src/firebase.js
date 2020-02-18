import * as firebase from 'firebase'

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "fymt-4.firebaseapp.com",
    databaseURL: "https://fymt-4.firebaseio.com",
    projectId: "fymt-4",
    storageBucket: "fymt-4.appspot.com",
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId:  process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
}

firebase.initializeApp(config)
const databaseRef = firebase.database().ref()
export const affirmationRef = databaseRef.child("affirmation")

export const affirmationCategoryRef = databaseRef.child("affirmationCategory")

