import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCf43ag2102JnALOzMJYw0t4CHr0bgdnVo",
  authDomain: "mcg-g-946e6.firebaseapp.com",
  projectId: "mcg-g-946e6",
  storageBucket: "mcg-g-946e6.firebasestorage.app",
  messagingSenderId: "913614247124",
  appId: "1:913614247124:web:23496f40b77df3fb88d741"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };