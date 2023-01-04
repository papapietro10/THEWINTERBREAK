import "../Comofunciona/comofunciona.css"
import { Balance } from "../balance/Balanse"
import { Carruseluno } from "../Carrusel-uno/Carruseluno"
export const Comofunciona = () =>{
    return(
        <div className="contenedor-comofunciona">
            <div className="contenedor-comofunciona-titulo-imagen">
                <h4>COMO FUNCIONA </h4>
               
            </div>
            <div className="contenedor-comofunciona-pasos">
            
                <figure className="snip1345" data-aos="fade-up" >
                    <img src="https://firebasestorage.googleapis.com/v0/b/thewinterbreack.appspot.com/o/Encuentradestino%20copia.jpg?alt=media&token=1e9235ce-75dc-47c6-a85b-bba59810bb8f" alt="" />
                    <div className="inside">
                        <figcaption>
                            <h4>ENCUENTRA TU DESTINO IDEAL</h4>
                            <p>Elegí que destino va mejor con vos y el tipo de viaje que querés hacer!</p>
                        </figcaption>
                    </div>
                </figure>

                <figure className="snip1345" data-aos="fade-up">
                    <img src="https://firebasestorage.googleapis.com/v0/b/thewinterbreack.appspot.com/o/reserva.jpg?alt=media&token=676804a6-2477-473c-82d6-1d81a000850e" alt="" />
                    <div className="inside">
                        <figcaption>
                        <h4>RESERVA TU LUGAR</h4>
                        <p>Contactanos para reservar y tener tu lugar asegurado!</p>
                        </figcaption>
                    </div>
                </figure>

                <figure className="snip1345" data-aos="fade-up">
                    <img src="https://firebasestorage.googleapis.com/v0/b/thewinterbreack.appspot.com/o/cuenta.jpg?alt=media&token=cf0dfe80-c3c9-4acb-88e6-04db63d86379" alt="" />
                    <div className="inside">
                        <figcaption>
                        <h4>CUENTA REGRESIVA</h4>
                         <p>La parte más dificil: esperar el día de viaje! Vamos a estar contactándonos varios días antes para coordinar todo.</p>
                        </figcaption>
                    </div>
                </figure>

                <figure className="snip1345" data-aos="fade-up">
                    <img src="https://firebasestorage.googleapis.com/v0/b/thewinterbreack.appspot.com/o/Ayudanos.jpg?alt=media&token=6bed222c-7a69-4287-9d7f-4f3df9ae5724" alt="" />
                    <div className="inside">
                        <figcaption>
                        <h4>AYUDANOS A CRECER</h4>
                        <p>Si viviste la experiencia y te gusto, contalo, recomendanos a tus amigos Y sobre todo volve, volve siempre a los lugares donde fuiste feliz!</p>
                        </figcaption>
                    </div>
                </figure>
            </div>
            <Balance/>
            <Carruseluno/>
        </div>
    )
}