import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyC9fdBoMoZeFb8jqKdiHjm4iyLCpzllL6g",
  authDomain: "dpow-4c98e.firebaseapp.com",
  databaseURL: "https://dpow-4c98e-default-rtdb.firebaseio.com",
  projectId: "dpow-4c98e",
  storageBucket: "dpow-4c98e.appspot.com",
  messagingSenderId: "985255365057",
  appId: "1:985255365057:web:8af2560ad58d2ce29a8740",
  measurementId: "G-QX28B43LLP",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { db, auth, facebookProvider };
