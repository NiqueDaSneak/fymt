import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCDHwc5xIgy_85VilRSBx8MU7b6DhhnVEs",
    authDomain: "fymt-4.firebaseapp.com",
    databaseURL: "https://fymt-4.firebaseio.com",
    projectId: "fymt-4",
    storageBucket: "fymt-4.appspot.com",
    messagingSenderId: "127457857240",
    appId: "1:127457857240:web:f132d18db01b73f09d51ad",
    measurementId: "G-BVNB2B3KG5"
}

firebase.initializeApp(config)
const databaseRef = firebase.database().ref()
export const affirmationRef = databaseRef.child("affirmation")
export const affirmationCategoryRef = databaseRef.child("affirmationCategory")
