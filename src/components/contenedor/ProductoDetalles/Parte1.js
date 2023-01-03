import React from 'react';
import './ProductoDetalles.css';

export const ReservaFechas = () =>{
    return(
        <div className="container-fechas-reservas">
        <div className='parte1'>
            <h4> FECHAS DE RESERVA PARA EL 2023</h4>
            <p>Reserve con anticipación para obtener las mejores tarifas, los precios aumentarán con cada lanzamiento.</p>
        </div>
        <div className="container-fechas-reservas-tipos">
        
            <div className="early">
            <h4>EARLY BIRD</h4>
           <p>desde el 1 de Marzo al 31 de Mayo.Hay 75 lugares divididos en tres etapas de 25 tickets cada una. Comprando en early bird se aseguran las mejores habitaciones o departamentos.</p>
            </div>


            <div className="admission">
            <h4>GENERAL ADMISSION</h4>
            <p>a partir del 1 de Junio. Los precios estándar de 2023 hasta que se agoten los lugares.</p>
            </div>
        </div>
    </div>

    )
}