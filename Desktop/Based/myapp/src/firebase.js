// Import the functions you need from the SDKs you need
// import firebase from './firebase';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzVWuNy7y-R7okbIidRTefeDKYJev4Q3s",
  authDomain: "based-1f254.firebaseapp.com",
  projectId: "based-1f254",
  storageBucket: "based-1f254.appspot.com",
  messagingSenderId: "574462578484",
  appId: "1:574462578484:web:cf381ce31660766db79f61",
  measurementId: "G-08JNGNGLT9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const Storage = getStorage(app)
