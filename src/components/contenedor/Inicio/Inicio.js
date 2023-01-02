import { useEffect, useState } from "react";
import './Inicio.css';
import { ItemList } from "../Carta/Carta";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../Utils/firebase";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Video} from "../Videoinicio/Video"
import {Anto} from "../Anto/Anto"
import "../Footer/footer.css";
import {Categorias} from "../Categorias/Categorias"
import {Footer} from "../Footer/Footer"


export const Inicio = ()=>{
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
        <div>

<Video/> 
<section>
       
      </section>
        <div className="Contenedor-inicio">
        </div>
            <section className="container-sombra">
           
            </section>
            <ItemList items={productos}/>
            <div className="Contenedor-inicio">
        </div>
   
        
        <div className="footer-container">
          
        </div>
        </div>
    )
}