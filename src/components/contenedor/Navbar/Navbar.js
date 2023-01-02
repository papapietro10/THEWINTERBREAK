import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {CartWidget} from '../CarritoNav/Carrito'
import "../Navbar/nav.css"
export const NavBar = ()=>{
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Container>
          <img  src="https://firebasestorage.googleapis.com/v0/b/prueba-a3c56.appspot.com/o/LOGO%20THE%20WINTER%20BREAK-01.webp?alt=media&token=9a465ec7-5c0c-4c59-b78a-3f2d8b0b0040" alt="" className="logo" />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="nav" href="/Montanas">COMO FUNCIONA</Nav.Link>
              <Nav.Link  className="nav" href="#link">SOBRE NOSOTROS</Nav.Link>
              <NavDropdown  title="DESTINOS" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">CERRO CHAPELCO</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">LAS LEÑAS</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">CERRO CATEDRAL</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">CERRO CASTOR</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              
            <CartWidget  className="cart" />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
 }