

import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
    
    apiKey: "AIzaSyA-4dbrm1RjjfAv7hwlcizee0HVXOmXupc",
    authDomain: "thewinterbreack.firebaseapp.com",
    projectId: "thewinterbreack",
    storageBucket: "thewinterbreack.appspot.com",
    messagingSenderId: "438569368014",
    appId: "1:438569368014:web:4b2383273fbff5ee74939f"
};

//inciamos la conexion del proyecto react con firebase.
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);