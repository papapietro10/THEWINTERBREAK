import { DestinosNav } from "../Destinos-nav/Destinos-nav"
import "../Destinos-navlist/destinos-navlist.css"
export const Destinosnavlist = ({items})=>{

    return(
        
        <div className="estilos-destinoslist ">
              
            <div style={{width:"100%"}}></div>
            {
                items.map(producto=>(
                    <DestinosNav key={producto.id} item={producto}/>
                ))
            }
        </div>
      
        
    )
}

