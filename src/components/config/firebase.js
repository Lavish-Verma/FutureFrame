import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBp36Mhg2HI46VStIyDYnzu4a2Tulfz9y8",
  authDomain: "future-frame-gs.firebaseapp.com",
  projectId: "future-frame-gs",
  storageBucket: "future-frame-gs.appspot.com",
  messagingSenderId: "522619348114",
  appId: "1:522619348114:web:adb85737576c0e01cf324b",
  databaseURL: "https://future-frame-gs-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);


export const signUp = async(email , password)=>{
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  return user;
}

export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};