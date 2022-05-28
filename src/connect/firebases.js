import firebase from "firebase/compat/app";
import "firebase/compat/database";



const firebaseConfig = {
    apiKey: "AIzaSyAotDNmrUmu-azH9ZzrvYpCdKMPOWunxR8",
    authDomain: "iotecs-for-emt.firebaseapp.com",
    databaseURL: "https://iotecs-for-emt-default-rtdb.firebaseio.com",
    projectId: "iotecs-for-emt",
    storageBucket: "iotecs-for-emt.appspot.com",
    messagingSenderId: "697683786158",
    appId: "1:697683786158:web:c64f5e97dfd1ee6d8a703f",
    measurementId: "G-18WYPLKPFV"
};

const app = firebase.initializeApp(firebaseConfig);
export const db = app.database(); //import database and do named export

//initiliase the app and pass in the site data
export default app;
