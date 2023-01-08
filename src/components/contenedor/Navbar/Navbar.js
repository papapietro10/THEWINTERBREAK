import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Sobrenosotrosnav } from "./Sobrenosotrosnav";
import {CartWidget} from '../CarritoNav/Carrito'
import "../Navbar/nav.css"
import { Link } from 'react-router-dom';
import {Navcomofunciona} from "../Navbar/Navcomofunciona"
import { Destinonav } from "./Destinosnav";
import { Inicionav } from "./Inicio";
import { Faq } from "./Faq";

export const NavBar = ()=>{
    return(
      <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" >
        <Container className="static">
        <Link to="/">
          <img  src="https://firebasestorage.googleapis.com/v0/b/thewinterbreack.appspot.com/o/LOGO%20THE%20WINTER%20BREAK-01.webp?alt=media&token=7823eaaa-d77b-4895-ae90-ff50b6717239" alt="" className="logo" />
        </Link>  
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto links-nav">
             <div>
             <Inicionav/>
             </div>
             <div>  
              <Navcomofunciona/>
            </div>

            <div>
              <Destinonav/>
            </div>

            <div>
            <Sobrenosotrosnav/>
            </div>

            <div>
            <Faq/>
            </div>
            </Nav>
            <Nav>
            <div className="cart" >
              <CartWidget  />
            </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
 }