// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRWXTQzns5kI0Tg4IO8WcAvnkl3AIt1bI",
  authDomain: "netflixgpt-9b9c8.firebaseapp.com",
  projectId: "netflixgpt-9b9c8",
  storageBucket: "netflixgpt-9b9c8.appspot.com",
  messagingSenderId: "533764908449",
  appId: "1:533764908449:web:88ff6a5816e03f4df957e0",
  measurementId: "G-6MTTC14TRY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth(app)