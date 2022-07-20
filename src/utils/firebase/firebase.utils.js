// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getAuth,
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDecaQ74SePJVy_5F9p0K36jGW7gDRcmhg",
  authDomain: "kris-clothing.firebaseapp.com",
  projectId: "kris-clothing",
  storageBucket: "kris-clothing.appspot.com",
  messagingSenderId: "283741035553",
  appId: "1:283741035553:web:2f93b9a0be4d0541015760"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt:'select_account'
})

export const auth = getAuth();
export const signInwithGooglePopup = () => signInWithPopup(auth, provider)

// DB = Data Base
export const db = getFirestore()

// creating the data in firebase from google:
export const createUserDocumentFromAuth = async ( userAuth, addicionalInfo = {} ) => {
    if( !userAuth ) return;
    const userDocRef = doc(db, 'users', userAuth.uid );

    const userSnapshot = await getDoc(userDocRef)
    // pega as informações do google e joga no firebase:
    if (!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...addicionalInfo,
            });
        } catch (error) {
            console.log('error creating the user', error.message)
        }
    }
    return userDocRef
}

// creating data in firebase from email and password:
export const createAuthUserWithEmailAndPassword = async ( email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailandPassword = async (email, password) => {
    if(!email || !password) return;
    
    return  await signInWithEmailAndPassword(auth, email, password)
}