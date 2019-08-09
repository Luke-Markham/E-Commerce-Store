import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBViptRJJLuPMn0ovSTMu2bIy2L5_DtX40",
  authDomain: "react-e-commerce-store.firebaseapp.com",
  databaseURL: "https://react-e-commerce-store.firebaseio.com",
  projectId: "react-e-commerce-store",
  storageBucket: "",
  messagingSenderId: "919030781919",
  appId: "1:919030781919:web:7613f99cf46ba9af"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
