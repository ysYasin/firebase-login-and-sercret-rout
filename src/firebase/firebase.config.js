// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQJUiPkojot0b8DdOeXIAhW83rzfZxz6U",
    authDomain: "context-rout-tc.firebaseapp.com",
    projectId: "context-rout-tc",
    storageBucket: "context-rout-tc.appspot.com",
    messagingSenderId: "857425744927",
    appId: "1:857425744927:web:7be0e390d5f26bd7f1312a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;