import firebase from 'firebase'
import 'firebase/firestore'

// Initialize Firebase
let config = {
  apiKey: "AIzaSyCMbaGvG_sTDa9GctxhBVvG_N_Cdb37olw",
  authDomain: "receptia.firebaseapp.com",
  databaseURL: "https://receptia.firebaseio.com",
  projectId: "receptia",
  storageBucket: "receptia.appspot.com",
  messagingSenderId: "711695168330"
};
let myFirebase = firebase.initializeApp(config);
const db = myFirebase.firestore();

db.settings({
  timestampsInSnapshots: true
});

const auth = firebase.auth()
const currentUser = auth.currentUser

export {
  db,
  auth,
  currentUser
}