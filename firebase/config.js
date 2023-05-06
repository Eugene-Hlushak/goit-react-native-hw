// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBHbc4AeiOu1MgfQ7kvJWrLlcPBXUA6MwI",
  authDomain: "goit-react-native-hw-8525a.firebaseapp.com",
  databaseURL:
    "https://goit-react-native-hw-8525a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "goit-react-native-hw-8525a",
  storageBucket: "goit-react-native-hw-8525a.appspot.com",
  messagingSenderId: "569169432433",
  appId: "1:569169432433:web:723f202853cef5f3e670d0",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
