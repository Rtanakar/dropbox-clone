import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAxZHjAtHkLBSgfWbVqqL7o5yT8HJv-MD8",
  authDomain: "dropbox-clone-33e51.firebaseapp.com",
  projectId: "dropbox-clone-33e51",
  storageBucket: "dropbox-clone-33e51.appspot.com",
  messagingSenderId: "980037928099",
  appId: "1:980037928099:web:750a44cc6efeabacae2b16",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
