import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBEChDP7cbp_R-5QnToeaMA4lXYoRMufdo",
  authDomain: "portfolio-22463.firebaseapp.com",
  databaseURL:
    "https://portfolio-22463-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "portfolio-22463",
  storageBucket: "portfolio-22463.appspot.com",
  messagingSenderId: "642032039553",
  appId: "1:642032039553:web:4706fc250965a90ac6ff80",
  measurementId: "G-4YQ4XSG671",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);
