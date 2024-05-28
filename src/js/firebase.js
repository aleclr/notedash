import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBo7KY1X7JRvP_n4MdodjwJwH7pnttA-PE",
  authDomain: "notedash-ef165.firebaseapp.com",
  projectId: "notedash-ef165",
  storageBucket: "notedash-ef165.appspot.com",
  messagingSenderId: "246272537563",
  appId: "1:246272537563:web:0ab45b48798c7244d22dfe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {
    db
};