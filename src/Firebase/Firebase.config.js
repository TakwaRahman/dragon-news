// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA1LPQYcji4yh8mBpHIH4Zi0eUeV4bIHE",
  authDomain: "dragon-news-979d0.firebaseapp.com",
  projectId: "dragon-news-979d0",
  storageBucket: "dragon-news-979d0.firebasestorage.app",
  messagingSenderId: "150028771925",
  appId: "1:150028771925:web:85711f2b5f18802a722adc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app