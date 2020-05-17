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
  measurementId: "G-DWJSHX1ZYL",
};

firebase.initializeApp(config);

export const updateCartItemsForSignedInUser = async (
  currentUser,
  cartItems
) => {
  const userRef = firestore.doc(`users/${currentUser.id}`);
  const snapShot = await userRef.get();

  if (snapShot.exists) {
    try {
      await userRef.set({
        ...currentUser,
        cartItems,
      });
    } catch (error) {
      console.log("error updating items!", error);
    }
  }
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

// export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
//   const collectionRef = firestore.collection(collectionKey);
//   console.log(collectionRef);

//   const batch = firestore.batch();

//   objectToAdd.forEach(obj => {
//     const newDocRef = collectionRef.doc();
//     batch.set(newDocRef, obj);
//   });

//   return await batch.commit();
// };

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export default firebase;
