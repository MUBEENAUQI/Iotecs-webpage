import firebase from "firebase/compat/app";
import "firebase/compat/database";



const firebaseConfig = {
    apiKey: "AIzaSyBYu9n1QnkgT94RSjTRoeEHDPHdl7Y6s8s",
    authDomain: "fir-iotecs.firebaseapp.com",
    projectId: "fir-iotecs",
    storageBucket: "fir-iotecs.appspot.com",
    messagingSenderId: "938852244026",
    appId: "1:938852244026:web:4f03c6a93eef95459cb303",
    measurementId: "G-BWVE3NNKQH"
};

const app = firebase.initializeApp(firebaseConfig);
export const db = app.database(); //import database and do named export

//initiliase the app and pass in the site data
export default app;
