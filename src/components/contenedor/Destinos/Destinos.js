import "../Destinos/destinos.css"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Link } from 'react-router-dom';
export const Destinos = ({item}) =>{

    return(
    
          <figure className="snip1278">
            <h4>{item.title}</h4>

            <div className="image">
              <img src={item.pictureUrl} alt="item" />
            </div>

            <div className="rating">{item.calificacion} </div>

            <figcaption>
              <p>{item.desc}</p>
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
        
    )
}