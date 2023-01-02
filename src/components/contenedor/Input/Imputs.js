import { Input} from "reactstrap";
import "./Input.css"

export  const ImputForm = () => {

    return(
       
        <div className='formulario-imput'>
           
            <h5>Nombre</h5>
            <Input type="text" id="nombre" placeholder='nombre'/>
            <div className="apellido">
                <h5>Apellido</h5>
                <Input type="text" id="telefono" placeholder='telefono'/>
            </div>

        </div>
      
    )
}