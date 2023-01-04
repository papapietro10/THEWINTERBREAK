import './App.css';
import React from 'react';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import { Inicio } from './components/contenedor/Inicio/Inicio';
import { ItemDetailContainer } from './components/contenedor/containerDetalle/containerDetalle';
import { CartContainer } from './components/contenedor/Carroordenform/CarroOrdenForm';
import { CartProvider } from './context/CartContext';
import {Anto} from './components/contenedor/Anto/Anto';
import { NavBar } from './components/contenedor/Navbar/Navbar';
//import {EnviarMensaje} from './components/contenedor/Formulario/Formulario'
import {ItemDetail} from "./components/contenedor/DetalleProducto/DetalleProducto"
import {CartaProductos} from './components/contenedor/CartaProductos/cartaProductos'
import { Comofunciona } from './components/contenedor/Comofunciona/Comofunciona';
import { Preguntasfrecuentes } from './components/contenedor/Preguntasfrecuentes/Preguntasfrecuentes';
function App() {

  return (
    
    <CartProvider>
 
      <BrowserRouter>
     
        <div className="App">
        <NavBar/>  
           
          
            
                <Routes>
                 
                  <Route path="/productos/:categoria" element={<Inicio />}/>
                  <Route path="/item/:productId" element={<ItemDetailContainer/>}/>
                  <Route path="/cart" element={<CartContainer/>}/>
                  <Route path="/anto" element={<Anto/>}/>
                  <Route path='*' element={<Inicio/>}/>       
                  <Route path='/carta' element={<CartaProductos/>}/>     
                  <Route path='/producto/:categoria' element={<CartaProductos/>}/> 
                  <Route path='/detalle' element={<ItemDetail/>}/> 
                  <Route path='/Comofunciona' element={ <Comofunciona/>}/> 
                  <Route path='/Preguntasfrecuentes' element={ <Preguntasfrecuentes/>}/> 
                </Routes>
        
           
        </div>
      </BrowserRouter>
  
    </CartProvider>
  );
}

export default App;
