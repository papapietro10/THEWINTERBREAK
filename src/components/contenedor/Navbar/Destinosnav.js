
import {Link} from 'react-router-dom';

export const Destinonav = ()=>{


    return(
        <div>
            {
              
                <>
               
                <Link to="/CartaProductos" className="link">
                    <p className='nav-estinos'>DESTINOS</p>
                </Link>
                    
                </>
            }
        </div>
    )
}