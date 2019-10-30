import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDjgt9f-liJoM_WtiPhp4lpwT7mTQM4_VY',
  authDomain: 'crwn-db-81a38.firebaseapp.com',
  databaseURL: 'https://crwn-db-81a38.firebaseio.com',
  projectId: 'crwn-db-81a38',
  storageBucket: 'crwn-db-81a38.appspot.com',
  messagingSenderId: '574499003792',
  appId: '1:574499003792:web:7bcd29a07e1dffaa046715',
  measurementId: 'G-YDXEENHMJQ',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
