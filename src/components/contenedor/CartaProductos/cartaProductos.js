import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ItemList } from "../Carta/Carta";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../Utils/firebase";
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';
import React from "react";
import {CommonSection} from '../common-section/CommonSection'
import {Footer} from "../Footer/Footer"

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
    
       <div>
        <CommonSection />
        <Navbar collapseOnSelect expand="" bg="dark" variant="dark">
         <Container>
         <h2 className="categoria-title">Categorías</h2>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
         
            <Nav>
      
            <NavLink className= {({isActive})=>isActive ? "claseActive": "claseInactive"}
                        to="/carta"><h2 className="categoria-h2" type="submit">Todos</h2>
                    </NavLink>
                    <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                        to="/producto/Cheesecake" > <h2 variant="secondary" className="categoria-h2" type="submit">Cheesecake</h2>
                    </NavLink>
                    <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                        to="/producto/Tartaletas" > <h2 variant="secondary" className="categoria-h2" type="submit">Tartaletas</h2>
                    </NavLink>
                    <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                        to="/producto/Layer Cakes"><h2 className="categoria-h2" type="submit">Layer Cakes</h2>
                    </NavLink>
                    <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                        to="/producto/Cookies"><h2 className="categoria-h2" type="submit">Cookies</h2>
                    </NavLink>
                
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            <ItemList items={productos}/>
            
            <Footer />
        </div>
          
      
    
    )
}