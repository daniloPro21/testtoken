// /src/firestore.js

import firebase from 'firebase'

//import 'firebase/firestore'


  var config = {//slectjs
     apiKey: "AIzaSyCKoaYEa6NhPrJAdsgvcc4dIMpr-dXGxF8",
      authDomain: "miqo-314210.firebaseapp.com",
      projectId: "miqo-314210",
      storageBucket: "miqo-314210.appspot.com",
      messagingSenderId: "177615631655",
      appId: "1:177615631655:web:2fbcc892378cbfdbed2502",
      measurementId: "G-YVDYED3E2H"
  };

firebase.initializeApp(config);
//firebase.initializeApp(config2,"secondary");
   const db = firebase.firestore();



export {firebase,db};
