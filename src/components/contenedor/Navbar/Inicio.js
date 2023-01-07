
import {Link} from 'react-router-dom';

export const Inicionav = ()=>{


    return(
        <div>
            {
              
                <>
               
                <Link to="/" className="link">
                    <p className='nav-comofunciona'>INICIO</p>
                </Link>
                    
                </>
            }
        </div>
    )
}