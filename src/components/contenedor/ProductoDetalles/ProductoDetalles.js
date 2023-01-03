import './ProductoDetalles.css';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Link } from 'react-router-dom';

export const Item = ({item})=>{
    return(
      <figure className="snip1195" data-aos="zoom-in-down">
        <h4>{item.title}</h4>
        <div className="image">
        <Link to={`/item/${item.id}`} className="link">
          <img src={item.pictureUrl} alt="" />
          </Link>
        </div>
   
        
        <figcaption>
        <Link to={`/item/${item.id}`} className="link">
          <p>{item.desc}</p>
        </Link>
          <div className="price">
            <s>$</s>$
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