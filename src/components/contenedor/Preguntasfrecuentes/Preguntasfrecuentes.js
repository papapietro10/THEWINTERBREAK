import Accordion from 'react-bootstrap/Accordion';
import "../Preguntasfrecuentes/preguntas.css"
export const Preguntasfrecuentes = ()=>{
    return(
        <div className='container  preguntas-frecuentes'>
            <Accordion className='sombra-pregunta'>

                <Accordion.Item className='container-pregutas-frecuentes' eventKey="0">
                    <Accordion.Header className='container-pregutas-frecuentes' >¿Cuándo se abren las reservas?</Accordion.Header>
                    <Accordion.Body>
                    Las reservas para todos los destinos se abren el 7 de marzo de 2022 a las 5PM horario Argentino. 
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        ¿Cuáles son los destinos?
                    </Accordion.Header>
                    <Accordion.Body>
                        Para 2022, TWB irá al Cerro Chapelco en San Martin de los andes del 9 al 11 de Julio, a Las Leñas en Mendoza del 1 al 6 de Agosto, al Cerro Catedral en Bariloche del 20 al 27 de Agosto y al Cerro Castor en Ushuaia del 8 al 11 de septiembre.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                    ¿Cuándo recibiré mi itinerario?
                    </Accordion.Header>
                    <Accordion.Body>
                        Enviaremos un documento de llegada 20 días antes del inicio de la experiencia. Esto incluirá todo lo que necesita saber para prepararse para el viaje.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                    <Accordion.Header>
                        ¿Qué podemos esperar hacer durante la semana?
                    </Accordion.Header>
                    <Accordion.Body>
                        Cada una de nuestras experiencias tiene sus propias peculiaridades únicas y siempre presentamos algunas sorpresas en el camino. Teniendo  en cuenta que el clima es un factor decisivo para nuestros eventos, no siempre podemos garantizar qué eventos sucederán con más de unos días de anticipación. De cualquier manera, lo mejor es que te prepares para una experiencia inolvidable. Algunas de nuestras actividades favoritas son: bajadas grupales, cenas o almuerzos a las brazas en la montaña, nuestro propio y clásico día del montañes, heli-ski, caminatas fuera de pista y más. 
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                    <Accordion.Header>
                        ¿Cómo me registro en los eventos que sucederán en de TWB?
                    </Accordion.Header>
                    <Accordion.Body>
                        Muchas de las actividades tienen espacio para todos los pasajeros y no es necesario registrarse. Para aquellos que requieren que reserve, estarán disponibles para reservar a través de nuestra web y también serán ofrecidos personalmente a cada pasajero.
                        ¡Te enviaremos un correo electrónico con todos los detalles cuando estemos más cerca del evento!
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                    <Accordion.Header>
                        ¿Puedo reservar mi propio alojamiento y simplemente comprar una pulsera?
                    </Accordion.Header>
                    <Accordion.Body>
                        No, no podes. Para unirte a TWB, se debe reservar el paquete completo con nosotros. Siempre reservamos un edificio entero o similar y una gran parte de la experiencia es con todas las personas con las que compartís la semana. Si no te quedas con nosotros, no estás obteniendo la experiencia TWB completa.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6">
                    <Accordion.Header>
                        ¿Cómo puedo encontrar más personas para compartir departamento?
                    </Accordion.Header>
                    <Accordion.Body>
                        Simplemente avísanos al momento de contratar la experiencia, nosotros nos encargamos de armar departamentos a compartir. Todos los años se suman muchas chicas y chicos individuales.
                    </Accordion.Body>
                    </Accordion.Item>

                <Accordion.Item eventKey="7">
                    <Accordion.Header>
                    ¿Puedo unirme a las experiencias TWB incluso si estoy solo?
                    </Accordion.Header>
                    <Accordion.Body>
                    SI podes, no ofrecemos habitaciones o lugares individuales, pero si se arman departamentos a compartir, avísanos que sos un pasajero que viaja solo y te uniremos a los departamentos a compartir.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="8">
                    <Accordion.Header>
                    ¿Cuál es la edad promedio?
                    </Accordion.Header>
                    <Accordion.Body>
                        El año pasado, la edad promedio era de 25 años. No lo vamos a saber con exactitud, pero es probable que la edad promedio siga siendo la misma para la próxima temporada.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="9">
                    <Accordion.Header>
                        ¿Cuál es la edad mínima?
                    </Accordion.Header>
                    <Accordion.Body>
                        Requerimos que todos los pasajeros tengan al menos 20 años 
                        en el año de viaje. 
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="10">
                    <Accordion.Header>
                    ¿Puedo pagar en cuotas o tengo que pagar todo de una vez?
                    </Accordion.Header>
                    <Accordion.Body>
                        AGREGAR
                    </Accordion.Body>
                </Accordion.Item>
            
                <Accordion.Item eventKey="11">
                    <Accordion.Header>
                        ¿Cuánto tengo que pagar al reservar?
                    </Accordion.Header>
                    <Accordion.Body>
                        Al momento de contratar el paquete. Si no realiza el pago total o de la seña dentro de las 48hs no se hará la reserva ni se realizara la compra. 
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="12">
                    <Accordion.Header>
                        ¿Es posible hacer una transferencia bancaria?
                    </Accordion.Header>
                    <Accordion.Body>
                    Si es posible, pero únicamente para pasajeros de Argentina, Brasil y Uruguay. El resto de los países pueden pagar únicamente con tarjeta de crédito.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}