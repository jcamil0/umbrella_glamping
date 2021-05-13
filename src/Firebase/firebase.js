import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyC9fdBoMoZeFb8jqKdiHjm4iyLCpzllL6g",
  authDomain: "dpow-4c98e.firebaseapp.com",
  databaseURL: "https://dpow-4c98e-default-rtdb.firebaseio.com",
  projectId: "dpow-4c98e",
  storageBucket: "dpow-4c98e.appspot.com",
  messagingSenderId: "985255365057",
  appId: "1:985255365057:web:8af2560ad58d2ce29a8740",
  measurementId: "G-QX28B43LLP",
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;
