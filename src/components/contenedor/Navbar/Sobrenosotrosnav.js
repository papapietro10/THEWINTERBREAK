
import {Link} from 'react-router-dom';

export const Sobrenosotrosnav= ()=>{


    return(
        <div>
            {
              
                <>
               
                <Link to="/Sobrenosotros" className="link">
                    <p className='nav-sobrenosotros'>SOBRE NOSOTROS</p>
                </Link>
                    
                </>
            }
        </div>
    )
}