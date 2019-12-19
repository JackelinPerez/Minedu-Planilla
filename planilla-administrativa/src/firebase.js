import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-database'

const firebaseConfig = {
    apiKey: "AIzaSyCEYKDUQcKc4ruuSL-BJOeGiTaN2t69wxo",
    authDomain: "pruebas-onp.firebaseapp.com",
    databaseURL: "https://pruebas-onp.firebaseio.com",
    projectId: "pruebas-onp",
    storageBucket: "pruebas-onp.appspot.com",
    messagingSenderId: "388875480802",
    appId: "1:388875480802:web:adcc81491902c0f361f8bb",
    measurementId: "G-CBGGP1GN2F"
  };

firebase.initializeApp(firebaseConfig);
export default firebase