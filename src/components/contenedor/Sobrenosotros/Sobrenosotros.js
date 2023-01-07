import './Sobrenosotros.css';
import React from "react";
import { Videonosotros } from '../Videonosotros/Videonosotros';


export  const Sobrenosotros= ()=>{
    
    return(
    
      <div className='contenedor-sobrenosotros'>
        <div className='sobre-nosotros-vision'>
          <h4>NUESTRA VISION</h4>
          <p>Crear experiencias extraordinarias que propaguen alegría, generen aprecio por nuestro planeta e inspiren a las personas curiosas a formar parte de nuestra familia.</p>
          
       
            <Videonosotros/>
      
        </div>
          <div className="container-sobrenosotros" >
            
              <div className="tilte-nosotros">
                <h4>NUESTRA HISTORIA</h4>
              </div>
              <div className='descri-nosotros'>
                <p>
                TWB tiene sus raíces allá por el año 2010 durante un viaje de amigos. 
                De una excusa perfecta para asegurarse la visita a la montaña una vez al año a organizar un viaje de esquí único.
                Una comunidad única de nuevos y viejos amantes de la montaña.
                A través de los años la idea de “la mejor experiencia de esquí” fue tomando forma y luego de muchos años de trabajo se consolida The Winter Break como una empresa independiente creadora de eventos con raíces en el esquí y snowboard que visita distintos pueblos de montaña de la República Argentina.
                Actualmente cada evento tiene su particularidad y está adaptada para poder disfrutarla viajando solo, con amigos o en pareja.
                A los programas de TWB no solo se suman nuestros fieles amigos de Argentina sino también de Brasil, Uruguay, Perú, Chile, Ecuador, México, Estados Unidos, Paraguay, entre otras nacionalidades.
                Sumate! 
                </p>
              </div>

              <div className='sobre-imagen'  >
              <img  src="https://firebasestorage.googleapis.com/v0/b/thewinterbreack.appspot.com/o/nuestrahistoria.png?alt=media&token=fdd6cb10-0e08-4df2-b1df-8ee96b7d6cb5"  alt="why-tasty-treat"  className="anto"  />
            </div>
          </div> 
        </div>
    )
}