// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCylC0TJJsbEC1fcvxey3IgQTYCVGTB41o",
   authDomain: "facebook-clone-22bfb.firebaseapp.com",
    databaseURL: "https://facebook-clone-22bfb.firebaseio.com",
    projectId: "facebook-clone-22bfb",
    storageBucket: "facebook-clone-22bfb.appspot.com",
    messagingSenderId: "617847399174",
    appId: "1:617847399174:web:47d6d548ef90de09a8f487"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;

// import firebase from "firebase";
// const firebaseConfig = {
//     apiKey: "AIzaSyCylC0TJJsbEC1fcvxey3IgQTYCVGTB41o",
//     authDomain: "facebook-clone-22bfb.firebaseapp.com",
//     databaseURL: "https://facebook-clone-22bfb.firebaseio.com",
//     projectId: "facebook-clone-22bfb",
//     storageBucket: "facebook-clone-22bfb.appspot.com",
//     messagingSenderId: "617847399174",
//     appId: "1:617847399174:web:47d6d548ef90de09a8f487"
//   };
//   const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// export { auth , provider };
// export default db;