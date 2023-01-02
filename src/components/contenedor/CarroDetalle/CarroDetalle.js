import React, { useContext } from 'react'
import { CartContext } from '../../../context/CartContext';
import './CarroDetalle.css';
import {Button} from "reactstrap";
import {Link} from 'react-router-dom';
export const CartItem = ({item}) => {
    const {removeProduct} = useContext(CartContext);

    return (
       
        <div className='cart-item-container'>
            <div className='cart-img-container'>
                <img src={item.pictureUrl} alt={item.title}/>
            </div>
            <div className='cart-info-container'>
                <h2>{item.title}</h2>
                <div className="categoria-detalle">
                    <h5>{item.categoria}</h5>
                </div>
               <h4>cantidad: {item.quantity}</h4>
                <h3>Precio total: {item.totalPrice}</h3>
                <Button className="eliminar-producto" onClick={()=>removeProduct(item.id)}>Eliminar </Button>
                <Link to={`/item/${item.id}`}>
            <Button className="button-detalle-carrito" variant="secondary">Detalles </Button>
            </Link>
            </div>
        </div>
        
    )
}
