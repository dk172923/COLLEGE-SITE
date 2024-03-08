// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARsR3HNoES_cXRd5QaQXNEvJ5l0Gye-JY",
  authDomain: "college-website-1729.firebaseapp.com",
  projectId: "college-website-1729",
  storageBucket: "college-website-1729.appspot.com",
  messagingSenderId: "247979085021",
  appId: "1:247979085021:web:f4ff4860d89f8be87e5f34",
  measurementId: "G-T1640TYP4E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);