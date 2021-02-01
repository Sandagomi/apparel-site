import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCnk6vJUKbOAQw7TG2woE4-YGc8h-vCjuU",
    authDomain: "apparel-db-6d235.firebaseapp.com",
    projectId: "apparel-db-6d235",
    storageBucket: "apparel-db-6d235.appspot.com",
    messagingSenderId: "191248628165",
    appId: "1:191248628165:web:1a474aa7636006d025b3ac",
    measurementId: "G-DLRH708E6J"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;