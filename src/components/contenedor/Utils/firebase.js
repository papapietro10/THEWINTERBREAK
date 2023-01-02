

import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDJRq49ZtLPGS6CdD0nCI1gJcAKaNem2ec",
    authDomain: "prueba-a3c56.firebaseapp.com",
    projectId: "prueba-a3c56",
    storageBucket: "prueba-a3c56.appspot.com",
    messagingSenderId: "138172230292",
    appId: "1:138172230292:web:ba9a69ced6b9cbd66ea281"
};

//inciamos la conexion del proyecto react con firebase.
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);