import './App.css';
import React from 'react';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import { Inicio } from './components/contenedor/Inicio/Inicio';
import { ItemDetailContainer } from './components/contenedor/containerDetalle/containerDetalle';
import { CartContainer } from './components/contenedor/Carroordenform/CarroOrdenForm';
import { CartProvider } from './context/CartContext';
import {Anto} from './components/contenedor/Anto/Anto';
//import {EnviarMensaje} from './components/contenedor/Formulario/Formulario'
import {NavBar} from './components/contenedor/Navbar/Navbar'

import {CartaProductos} from './components/contenedor/CartaProductos/cartaProductos'
function App() {

  return (
    
    <CartProvider>
 
      <BrowserRouter>
      <NavBar />
        <div className="App">

           
          
            
                <Routes>
                 
                  <Route path="/productos/:categoria" element={<Inicio />}/>
                  <Route path="/item/:productId" element={<ItemDetailContainer/>}/>
                  <Route path="/cart" element={<CartContainer/>}/>
                  <Route path="/anto" element={<Anto/>}/>
                  <Route path='*' element={<Inicio/>}/>       
                  <Route path='/carta' element={<CartaProductos/>}/>     
                  <Route path='/producto/:categoria' element={<CartaProductos/>}/> 
                </Routes>
        
           
        </div>
      </BrowserRouter>
      
    </CartProvider>
  );
}

export default App;
