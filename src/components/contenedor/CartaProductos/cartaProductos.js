import { useEffect, useState } from "react";
import {Destinosnavlist} from "../Destinos-navlist/Destinos-navlist"
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../Utils/firebase";
import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import { Barradestinos } from "../Barradestinos/Barradestinos";
import "../CartaProductos/cartaProductos.css"

export const CartaProductos = ()=>{
    const {categoria} = useParams();

    const [productos, setProductos] = useState([]);

    useEffect(()=>{
        const getData = async()=>{
            try {
                let queryRef = !categoria ? collection(db,"items") :query(collection(db,"items"),where("categoria","==",categoria));
                const response = await getDocs(queryRef);
                const datos = response.docs.map(doc=>{
                    const newDoc = {
                        ...doc.data(),
                        id:doc.id
                    }
                    return newDoc;
                });
                setProductos(datos)
            } catch (error) {
                console.log(error);
            }
        }
        getData();
        
    },[categoria])
    return(
    
       <div className="contenedor-destinos-carta">
        <Barradestinos />
        <h2>Cada destino es único y tiene distintas actitvidades y niveles de fiesta, cultura y actividades. Conocé cual es la ideal para vos! </h2>
        <div className="container-puntos">
            <div className="container-puntos-contenido">
                <h4>SKI</h4>
                <p>Pistas de todos los niveles, los mejores fuera de pista del sur, hasta el centro de ski más autral del planeta.</p>
            </div>
            <div  className="container-puntos-contenido">
                <h4>EXPERIENCIA Y ACTIVIDADES</h4>
                <p>Vida de montaña, música, gastronomía y diversión</p>
            </div>
            <div className="container-puntos-contenido">
                <h4>FIESTA</h4>
                <p>Nuestros dj locales no van a para de alegrar cada after ski, vas a bailar como nunca. Argentina, un país especialistas en el tema!</p>
            </div>
            <div className="container-puntos-contenido">
                <h4>CULTURA</h4>
                <p>Conocer la cultura de cada destino es conocer aún más la historia Argentina</p>
            </div>

        </div>
        <div className="container-puntos-dos">
            <h6>🟢 Beginners </h6>
            <h6>🔵 🔴 Intermediante</h6>
            <h6>⚫ Expert</h6>
        </div>
        <Destinosnavlist items={productos}/>
            
        
        </div>
          
      
    
    )
}