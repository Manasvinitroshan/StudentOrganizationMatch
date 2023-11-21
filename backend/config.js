// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';
import 'firebase/firestore';
//const firebase = require('firebase');
const firebaseConfig = {
  apiKey: "AIzaSyDNUiFZ3VqtsSd4XRyPloWskmGV3wBVSOs",
  authDomain: "sample-project-1824d.firebaseapp.com",
  databaseURL: "https://sample-project-1824d-default-rtdb.firebaseio.com",
  projectId: "sample-project-1824d",
  storageBucket: "sample-project-1824d.appspot.com",
  messagingSenderId: "946347820341",
  appId: "1:946347820341:web:84a837f7662aefdc6cb87c",
  measurementId: "G-DG7KJ59X29"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = firebase.firestore();
const auth = firebase.auth();
const Clubs = db.collection("Clubs");

module.exports = Clubs;