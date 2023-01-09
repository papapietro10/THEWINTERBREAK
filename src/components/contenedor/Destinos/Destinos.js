import "../Destinos/destinos.css"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Link } from 'react-router-dom';
export const Destinos = ({item}) =>{

    return(
    
          <figure className="snip1278">
            <h4>{item.titulo}</h4>

            <div className="image">
              <img src={item.imagen1} alt="item" />
            </div>

            <div className="rating">{item.calificacion} </div>

            <figcaption>
              <p>{item.descripcioncard}</p>
              <div className="price">
                <s>{item.precio2}</s>{item.precio1}
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