import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  doc,
  setDoc
} from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyB1Or775fgqlbBijv2kc5_7JUXLBTuGBPw",
    authDomain: "daemon-4f86b.firebaseapp.com",
    projectId: "daemon-4f86b",
    storageBucket: "daemon-4f86b.appspot.com",
    messagingSenderId: "78275376973",
    appId: "1:78275376973:web:67a1438ece5ef506302904",
    measurementId: "G-99ZPK110WS"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const storage = getStorage(app)
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const docRef = doc(db, 'users', user.uid)
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await setDoc(docRef, {
        uid: user.uid,
        profilePicture: user.photoURL,
        authProvider: "google",
        role: "Normal",
        email: user.email,
      }, { merge: true });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
  }
};
const registerWithEmailAndPassword = async (name, email, password, profilePicture) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password, profilePicture);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      profilePicture,
      name,
      authProvider: "local",
      email,
      role: "Normal"
    });
  } catch (err) {
    console.error(err);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  signOut(auth);};
export {
  auth,
  db,
  signInWithGoogle,
  storage,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  logout,
};