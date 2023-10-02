// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDUgPV6LTr8Rksk8xcfBvjbKkQyCDTxzU",
  authDomain: "labm5-b73cc.firebaseapp.com",
  projectId: "labm5-b73cc",
  storageBucket: "labm5-b73cc.appspot.com",
  messagingSenderId: "857002022708",
  appId: "1:857002022708:web:e80306bb6b26f93b97b761",
  measurementId: "G-TKC09BGH6X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const Storage = getStorage(app)