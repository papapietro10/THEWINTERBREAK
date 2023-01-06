import { Destinos } from "../Destinos/Destinos"
import "../Destinoslist/destinoslist.css"
export const Destinoslist = ({items})=>{

    return(
        
        <div className="estilos-destinoslist ">
              
            <div style={{width:"100%"}}></div>
            {
                items.map(producto=>(
                    <Destinos key={producto.id} item={producto}/>
                ))
            }
        </div>
      
        
    )
}

