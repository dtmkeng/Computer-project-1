import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyDCi-3V7lRDIsluMZ9fIHVt4oRDKQnxsfU",
    authDomain: "react-firebase-68392.firebaseapp.com",
    databaseURL: "https://react-firebase-68392.firebaseio.com",
    projectId: "react-firebase-68392",
    storageBucket: "react-firebase-68392.appspot.com",
    messagingSenderId: "557312298092"
  };
  firebase.initializeApp(config);
  export const ref = firebase.database().ref()
  export const firebaseAuth = firebase.auth