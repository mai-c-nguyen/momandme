import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMuxG1vsCm8dxkAc2f7VuozWJFyytolpM",
  authDomain: "momandme-1bc14.firebaseapp.com",
  projectId: "momandme-1bc14",
  storageBucket: "momandme-1bc14.appspot.com",
  messagingSenderId: "732566032351",
  appId: "1:732566032351:web:d7431947554c6dffc2fe6a",
  measurementId: "G-E7G79LEHP0",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
