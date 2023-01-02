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
import { NavBar } from "../Navbar/Navbar";
import {InicioUno } from "../inicio-uno/InicioUno"
import { Barra } from "../Barra/Barra";
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
          
            <ItemList items={productos}/>
            
      
        </div>
    )
}