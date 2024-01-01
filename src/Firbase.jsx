import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBXLICFRZ08S-f111IclKe34niBW8q9cvo",
  authDomain: "mood-journal-f96c2.firebaseapp.com",
  projectId: "mood-journal-f96c2",
  storageBucket: "mood-journal-f96c2.appspot.com",
  messagingSenderId: "533137822650",
  appId: "1:533137822650:web:b6e0dee9c3d25994184383",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
