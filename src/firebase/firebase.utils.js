import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const config = {
    apiKey: "AIzaSyCK4zNp39dsJZx_6M3QfcRkA6XPBU8acXc",
    authDomain: "crwn-db-43d48.firebaseapp.com",
    databaseURL: "https://crwn-db-43d48.firebaseio.com",
    projectId: "crwn-db-43d48",
    storageBucket: "crwn-db-43d48.appspot.com",
    messagingSenderId: "35473358173",
    appId: "1:35473358173:web:f7fd4ae4463acb30043cb4",
    measurementId: "G-RQ50P7FDJ8"
  };
  
  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
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
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
  

  export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;