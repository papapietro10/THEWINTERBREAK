
import {Link} from 'react-router-dom';

export const Faq = ()=>{


    return(
        <div>
            {
              
                <>
               
                <Link to="/Preguntasfrecuentes" className="link">
                    <p className='nav-faq'>FAQ</p>
                </Link>
                    
                </>
            }
        </div>
    )
}