import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGozeSY0PNbMpCOWE9JUraYOO_kdbhJTQ",
  authDomain: "web-american.firebaseapp.com",
  projectId: "web-american",
  storageBucket: "web-american.appspot.com",
  messagingSenderId: "234672166311",
  appId: "1:234672166311:web:9e3009344088e0c6289282",
  measurementId: "G-KE0C97ZR1D",
};
// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}

export const firestore = firebase.firestore();
export const toFirebaseTimestamp = (date) =>
  firebase.firestore.Timestamp.fromDate(date);
