import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBGoMlxlk_fZgPhje03T5KGypLRS5T0Bng",
  authDomain: "crwn-db-13751.firebaseapp.com",
  databaseURL: "https://crwn-db-13751.firebaseio.com",
  projectId: "crwn-db-13751",
  storageBucket: "crwn-db-13751.appspot.com",
  messagingSenderId: "729318643053",
  appId: "1:729318643053:web:f3c47260d87443980f7664",
  measurementId: "G-DWJSHX1ZYL"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
