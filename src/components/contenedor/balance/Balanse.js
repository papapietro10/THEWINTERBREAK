import { Preguntasfrecuentes } from "../Preguntasfrecuentes/Preguntasfrecuentes"
import "../balance/balance.css"

export const Balance = () =>{
    return(
    <div className="contenedor-dos-como">
            
        <div className="contenedor-dos-genero">
            
            <img className="curva-balance"src="https://firebasestorage.googleapis.com/v0/b/thewinterbreack.appspot.com/o/BARRA.jpg?alt=media&token=749a2af8-8c42-4fc8-b11e-67feec9986bc" alt="" />
            <div className="contenido-dos-genero">  
                <img src="https://firebasestorage.googleapis.com/v0/b/thewinterbreack.appspot.com/o/pngwing.com.png?alt=media&token=057c2133-4c12-4006-89e0-bad16735251f" alt="" />
                <div className="contenido-dos-genero-comntenido">
                    <h4>Balance de género</h4>
                    <p>Aspiramos a un equilibrio, ¡todos tienen lugar en nuestros viajes!</p>
                    <p>Seamos sinceros, la variedad es la clave de la vida.</p>
                    <p>La idea es un balance en cada uno de los viajes</p>
                    <h5 className="texto-genero">Cada una de nuestras experiencias tiene cupos reservados una vez que se llenan se ponen a disposición los cupos neutros los cuales puede ser vendidos a cualquier pasajero sin importar el sexo.</h5>
                </div>
            </div>

            <img className="curva-balance" src="https://firebasestorage.googleapis.com/v0/b/thewinterbreack.appspot.com/o/BARRA-DOS.jpg?alt=media&token=53a36c88-ab17-4078-b650-c79831d6dcae" alt=""/>
       
        </div>

        <div className="faq">
            <h4>FAQ | THE WINTER BREAK</h4>
            <Preguntasfrecuentes/>
        </div>

    </div>
    )
}