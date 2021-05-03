import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC0mEjX3y25JZWdWAVWwJVva9J_H3r9NNw",
  authDomain: "weakly-de534.firebaseapp.com",
  projectId: "weakly-de534",
  storageBucket: "weakly-de534.appspot.com",
  messagingSenderId: "650784813492",
  appId: "1:650784813492:web:86ca71135e9cbd07c902e1",
  measurementId: "G-CFQ73055VM"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };


