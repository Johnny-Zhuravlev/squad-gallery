import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjxEdMViI9c3uo5kGAVq4ckq3jG4rRSoA",
  authDomain: "squad-gallery.firebaseapp.com",
  projectId: "squad-gallery",
  storageBucket: "squad-gallery.appspot.com",
  messagingSenderId: "816465210076",
  appId: "1:816465210076:web:1138e417ee3bdc5b9e2219"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };