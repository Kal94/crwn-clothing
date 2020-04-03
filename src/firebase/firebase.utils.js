import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBYN3wR5yRY4_79ACcXSFDIc4t0Z4LnD84",
    authDomain: "crwn-db-14f00.firebaseapp.com",
    databaseURL: "https://crwn-db-14f00.firebaseio.com",
    projectId: "crwn-db-14f00",
    storageBucket: "crwn-db-14f00.appspot.com",
    messagingSenderId: "272826129219",
    appId: "1:272826129219:web:f394b3c2ef9238cdc5adf6",
    measurementId: "G-XLSHYDBK62"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if(!snapshot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch {
        console.log('error')
      }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;