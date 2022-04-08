import firebase from "./firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA_nh7In-GkQijRMmzGIdytfXxxfP8jOnQ",
  authDomain: "disney-plus-a637b.firebaseapp.com",
  projectId: "disney-plus-a637b",
  storageBucket: "disney-plus-a637b.appspot.com",
  messagingSenderId: "979832474434",
  appId: "1:979832474434:web:dc5e2fc4a67b00b27f96db",
  measurementId: "G-ZN5S0TK1X5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
