import './ProductoDetalles.css';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

import React, {useState} from 'https://cdn.skypack.dev/react';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';
import {TiChevronLeftOutline, TiChevronRightOutline} from 'https://cdn.skypack.dev/react-icons/ti';

export const Item = ({item})=>{
    return(
      <figure className="snip1195">
      <h4>{item.TiChevronRightOutline}</h4>
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
      <a href="#" className="add-to-cart">
        Add to Cart
      </a>
    </figure>
       
     
    )
}