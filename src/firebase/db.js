//this is going to store Firebase realtime database API code
// import { db } from "./firebase";

// //##########3 user API

// //create an user and store it at users/id path (it's an asynchronous func)
// export const doCreateUser = (id, username, email) =>
//   db.ref(`users/${id}`).set({
//     username,
//     email,
//   });

// //returns all users from firebase realtime db
// export const onceGetUsers = () => db.ref("users").once("value");

// export const doGetAnUnser = (uid) => db.ref(`users/${uid}`).once("value");

// // other APIs could come below

import { db as firebase } from "./firebase";

const db = firebase.ref("/customers");
let customers = [];

class FirebaseService {
  addCustomer = (customer) => {
    db.push(customer);
  };

  getAll() {
    return db;
  }

  get(key) {
    return db.child(key);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }
}

export default new FirebaseService();
