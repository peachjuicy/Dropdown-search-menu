import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCMFuW_u1waJaE-Hh4-46bhawr7nbAr7Fw",
  authDomain: "kudemy-d4af4.firebaseapp.com",
  databaseURL: "https://kudemy-d4af4.firebaseio.com",
  projectId: "kudemy-d4af4",
  storageBucket: "kudemy-d4af4.appspot.com",
  messagingSenderId: "3558259121",
  appId: "1:3558259121:web:3f28aa5b704c77b7c76590",
  measurementId: "G-08XQKFF37C",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;
