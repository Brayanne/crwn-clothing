import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBZ9F-YWByMZ0ftT-y_zmj615ksvAcX-5o",
    authDomain: "crwn-db-e5f51.firebaseapp.com",
    databaseURL: "https://crwn-db-e5f51.firebaseio.com",
    projectId: "crwn-db-e5f51",
    storageBucket: "crwn-db-e5f51.appspot.com",
    messagingSenderId: "992568784190",
    appId: "1:992568784190:web:e3e27224f746d03ad0e86f",
    measurementId: "G-7N13WDZPY2"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
