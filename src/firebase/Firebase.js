import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCKjQl6LVZiKyGbFCvd1yIVcfe87_xIyg",
  authDomain: "rosarionotes-1462a.firebaseapp.com",
  projectId: "rosarionotes-1462a",
  storageBucket: "rosarionotes-1462a.appspot.com",
  messagingSenderId: "984236289597",
  appId: "1:984236289597:web:3d769ea5ecc55a1a714454"
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirestore() {
  return firebase.firestore(app);
}
