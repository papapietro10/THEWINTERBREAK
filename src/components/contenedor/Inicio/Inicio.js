import { useEffect, useState } from "react";
import './Inicio.css';
import { ItemList } from "../Carta/Carta";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../Utils/firebase";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Video} from "../Videoinicio/Video"
import {Titulopaquetes} from "../ProductoDetalles/Parte2"
import "../Footer/footer.css";
import { ReservaFechas } from "../ProductoDetalles/Parte1";
import {InicioUno } from "../inicio-uno/InicioUno"

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
        <div className=" container-inicio">
        <Video/> 
            <InicioUno/>
            <ReservaFechas/>
          <Titulopaquetes/>
            <div className="contenedor-cards">
                <ItemList items={productos}/>
            </div>

        </div>
    )
}