import './App.css';
import React from 'react';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import { Inicio } from './components/contenedor/Inicio/Inicio';
import { ItemDetailContainer } from './components/contenedor/containerDetalle/containerDetalle';
import { CartContainer } from './components/contenedor/Carroordenform/CarroOrdenForm';
import { CartProvider } from './context/CartContext';
import {Sobrenosotros} from './components/contenedor/Sobrenosotros/Sobrenosotros.js';
import { NavBar } from './components/contenedor/Navbar/Navbar';
//import {EnviarMensaje} from './components/contenedor/Formulario/Formulario'
import {ItemDetail} from "./components/contenedor/DetalleProducto/DetalleProducto"
import {CartaProductos} from './components/contenedor/CartaProductos/cartaProductos'
import { Comofunciona } from './components/contenedor/Comofunciona/Comofunciona';
import { Preguntasfrecuentes } from './components/contenedor/Preguntasfrecuentes/Preguntasfrecuentes';
import { Carruseluno } from './components/contenedor/Carrusel-uno/Carruseluno';
import { Footer } from './components/contenedor/Footer/Footer';
import { ScrollButton } from './components/contenedor/ScrollButton/ScrollButton';
import { Inicionav } from './components/contenedor/Navbar/Inicio';
function App() {

  return (
    
    <CartProvider>
 
      <BrowserRouter>
     
        <div className="App">
        <NavBar/>  
           
           <ScrollButton/>
            
                <Routes>
                 
                  <Route path="/productos/:categoria" element={<Inicio />}/>
                  <Route path="/item/:productId" element={<ItemDetailContainer/>}/>
                  <Route path="/cart" element={<CartContainer/>}/>
                  <Route path="/Sobrenosotros" element={<Sobrenosotros/>}/>
                  <Route path='*' element={<Inicio/>}/>       
                  <Route path='/CartaProductos' element={<CartaProductos/>}/>     
                  <Route path='/producto/:categoria' element={<CartaProductos/>}/> 
                  <Route path='/detalle' element={<ItemDetail/>}/> 
                  <Route path='/Comofunciona' element={ <Comofunciona/>}/> 
                  <Route path='/Preguntasfrecuentes' element={ <Preguntasfrecuentes/>}/> 
                  <Route path='/Carruseluno' element={ <Carruseluno/>}/>  
                  <Route path='/Inicionav' element={ <Inicionav/>}/> 
               </Routes>
               <ScrollButton/>
               <Footer/>
        </div>
        
      </BrowserRouter>
  
    </CartProvider>
  );
}

export default App;
