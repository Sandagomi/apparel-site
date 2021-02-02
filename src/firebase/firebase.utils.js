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


export const  createUserProfileDocument =  async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if(!snapShot.exists) {

        const {displayName,email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch (error) {
            console.log('error creating the user',error.message);

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