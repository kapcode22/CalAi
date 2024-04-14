// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa522iX8-3OmhcF0csxkMAXPe-YcuPAFM",
  authDomain: "calai-40842.firebaseapp.com",
  projectId: "calai-40842",
  storageBucket: "calai-40842.appspot.com",
  messagingSenderId: "942346107166",
  appId: "1:942346107166:web:be2f5296f86bbab3f6b10f",
  measurementId: "G-NPRS6BRPB0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth();
const database = getDatabase(); 
const db = getFirestore(app);
const firestore=getFirestore(app)
export {app,auth,firestore};



// //init services
// const db=getFirestore()

// // collection ref
// const colRef=collection(db,'register_user')

// //get collection Data
// getDocs(colRef).then((snapshot)=>{
//    console.log(snapshot.docs)
// })