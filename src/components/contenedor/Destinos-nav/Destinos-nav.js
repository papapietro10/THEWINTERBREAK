import "../Destinos-nav/destinos-nav.css"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import { Link } from 'react-router-dom';

export const DestinosNav = ({item}) =>{

    return(
    
      <figure className="snip1224">
      <h4>{item.titulo}</h4>
      <div className="image">
      
        <img alt="" src={item.imagen1} />
        
      </div>
      <div className="price">
              <s>{item.precio2}</s>${item.precio1}
            </div>
      <div className="rating">
       {item.calificacion}
      </div>
    
      <figcaption>
     
      <div className="tipos-actividades">
          <p>FIESTA:  {item.fiesta}</p>
          <p>CULTURA:  {item.fiesta}</p> 
          <p>ACTIVIDADES:  {item.fiesta}</p>
          <p>SOL:  {item.fiesta}</p>
          <p>SKI LEVEL: {item.ski2}</p>
        </div>
      </figcaption>
      <Link to={`/item/${item.id}`} className="link">
            <Button  className="add-to-cart"  variant="secondary" >
             VER MAS
            </Button>
          </Link>
    </figure>
        
    )
}