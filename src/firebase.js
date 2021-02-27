import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATams8xXZ8bymIqQ2O3DU2rXDTRtCcVqQ",
  authDomain: "facebook-clone-461d6.firebaseapp.com",
  projectId: "facebook-clone-461d6",
  storageBucket: "facebook-clone-461d6.appspot.com",
  messagingSenderId: "1078386888681",
  appId: "1:1078386888681:web:0c1305e587a11da4ac0578",
  measurementId: "G-QM6YQ8ZKLG"
};
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore();
const auth= firebase.auth();
const provider= new firebase.auth.GoogleAuthProvider();
export{auth,provider};
export default db;