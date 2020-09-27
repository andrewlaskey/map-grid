// Get a RTDB instance
import firebase from 'firebase/app'
import 'firebase/database'

export const db = firebase
  .initializeApp({
    apiKey: "AIzaSyBBaShie0r0FM2X9EczWLdbN9nbkMAn4_s",
    authDomain: "fantasymap-af783.firebaseapp.com",
    databaseURL: "https://fantasymap-af783.firebaseio.com",
    projectId: "fantasymap-af783",
    storageBucket: "fantasymap-af783.appspot.com",
    messagingSenderId: "1031229829265",
    appId: "1:1031229829265:web:f4bddbf37c5b3b5d8bcf30"
  })
  .database()