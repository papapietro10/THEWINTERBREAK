import { Input, Button, Form} from "reactstrap";

import "./estilos.css"


export const EnviarMensaje = () =>{
  
    const enviarFormulario =() => {
            let nombre = document.getElementById('nombre').value;
            let apellido = document.getElementById('telefono').value;
            let mensaje = document.getElementById('email').value;
            let numero= 5491138150584;
    window.open(`https://wa.me/${numero}?text=Hola%20mi%20nombre%20es%20${nombre}
    %20${apellido}, Asunto:%20${mensaje}`,'_blank');       
    }
   


return (
    <Form className='formulario-datos'>
              <Input type="text" id="nombre" placeholder='nombre'/>
              <Input type="text" id="telefono" placeholder='telefono'/>
              <Input type="email" id="email" placeholder='email'/>

              <div >
              <Button id="send" onClick={enviarFormulario} type="submi">Enviar orden </Button>      
                </div>
            </Form>
)
}