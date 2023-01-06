import '../ProductoDetalles/ProductoDetalles.css';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Link } from 'react-router-dom';

export const Item = ({item})=>{
    return(
      <div className='contenedor-cards-prueba'>
        <figure className="snip1195" data-aos="zoom-in-down">
          <h4>{item.title}</h4>
          <div className="image">
          <Link to={`/item/${item.id}`} className="link">
            <img src={item.pictureUrl} alt="" />
            </Link>
          </div>
    
          <div className="rating">{item.calificacion}</div>
          <figcaption>
          <Link to={`/item/${item.id}`} className="link">
            <p>{item.desc}</p>
          </Link>
            <div className="price">
              <s>{item.price2}</s>{item.price}
            </div>
          </figcaption>
          <Link to={`/item/${item.id}`} className="link">
            <Button  className="add-to-cart"  variant="secondary" >
              VER MAS
            </Button>
          </Link>
      </figure>
    </div>
     
    )
}