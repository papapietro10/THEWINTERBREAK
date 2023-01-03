import './ProductoDetalles.css';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


import React from 'react';

export const Item = ({item})=>{
    return(
      <figure className="snip1195">
      <h4>{item.title}</h4>
      <div className="image">
        <img src={item.pictureUrl} alt="" />
      </div>
      <div className="rating">
     
          <i className="ion-ios-star" />
          <i className="ion-ios-star" />
          <i className="ion-ios-star-outline" />
          <i className="ion-ios-star-outline" />
        
      </div>
      <figcaption>
        <p>dgdgfgdgdgdf</p>
        <div className="price">
          <s>$</s>$
        </div>
      </figcaption>
      <Button href="#" className="add-to-cart" >
        Add to Cart
      </Button>
    </figure>
       
     
    )
}