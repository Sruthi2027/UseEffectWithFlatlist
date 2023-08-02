
import firebase from "firebase/compat/app";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
  
        apiKey: "AIzaSyAXB-3No0XLu0kzP8IdwMJjJwWSRsG_2Ck",
        authDomain: "formwithfirebase3.firebaseapp.com",
        databaseURL: "https://formwithfirebase3-default-rtdb.firebaseio.com",
        projectId: "formwithfirebase3",
        storageBucket: "formwithfirebase3.appspot.com",
        messagingSenderId: "690430791965",
        appId: "1:690430791965:web:0e264e9c0917718cca51f4",
        measurementId: "G-38RR758MHC"

  };

  if (firebase.apps.length == 0) {
    firebase.initializeApp(firebaseConfig);
  } 
  
  const fire = getDatabase();

  export {fire};














