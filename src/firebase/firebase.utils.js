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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  else {
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        alert("error creating user", error.message);
      }
    }
    return userRef;
  }
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      title,
      items,
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id
    };
  });
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

//THIS FUNCTION IS TO AVOID MANUAL ADDING OF COLLECTIONS AND ITEMS TO FIREBASE(firestore)

// export const addCollectionAndDocuments = async (
//   collectionKey,
//   objectsToAdd
// ) => {
//   const collectionRef = firestore.collection(collectionKey);
//   console.log(collectionRef);
//   const batch = firestore.batch();
//   objectsToAdd.forEach(obj => {
//     const newDocRef = collectionRef.doc();
//     batch.set(newDocRef, obj);
//   });
//   return await batch.commit();
// };

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
