// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWwgl2mNAZIL-NOY6I6DVO_lJlqmY5_6s",
  authDomain: "freeshop-9bfaf.firebaseapp.com",
  projectId: "freeshop-9bfaf",
  storageBucket: "freeshop-9bfaf.appspot.com",
  messagingSenderId: "963732445263",
  appId: "1:963732445263:web:9db8b9fba2ae02197f723a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
