import './carrito.css';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';

export const CartWidget = ()=>{
    const {getTotalProducts} = useContext(CartContext);

    return(
        <div>
            {
              
                <div className='container-carrito'>
                
                    <Link to="/cart" className='link'>
                    <h5 className="bi bi-cart3 carrito" >RESERVAS</h5>
                    
                    </Link>
                    <span className='cantidad-carrito'>
                        {getTotalProducts()}
                    </span>
                </div>
            }
        </div>
    )
}