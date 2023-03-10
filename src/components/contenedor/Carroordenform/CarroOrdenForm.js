import React, { useState} from 'react';
import { useContext } from 'react';
import { CartContext} from '../../../context/CartContext';
import { CartItem } from '../CarroDetalle/CarroDetalle';
import { db } from '../Utils/firebase';
import {collection, addDoc} from "firebase/firestore";
import {  Button, Form} from "reactstrap";
import "./formulario.css"
import Swal from 'sweetalert2'
import {Link} from 'react-router-dom';
import {ImputForm} from '../Input/Imputs'
import {TfiAngleDoubleRight}from "react-icons/tfi";

export const CartContainer = () => {

  const {productCartList, clearProductCartList, getTotalPrice} = useContext(CartContext);
  console.log(productCartList)
  const [idOrder, setIdOrder] = useState("");
  console.log(idOrder)
  const sendOrder = (e)=>{
    e.preventDefault();
    const order = {
      buyer: {
        name: e.target[0].value,
        apellido:e.target[1].value,
       
      },
      items: productCartList,
      total: getTotalPrice()
     
    }
 
    const queryRef = collection(db,"orders");
    //agregamos el documento
    addDoc(queryRef, order).then(respuesta=>setIdOrder(respuesta.id))
  
    console.log(order)
    
    
  }
 
    const EnviarFormulario = () => {
      let orden = [idOrder]
      let nombre = document.getElementById('nombre').value;
      let apellido = document.getElementById('telefono').value;
      //let email = document.getElementById('email').value;
      let numero= 5491138150584;
 
      window.open(`https://wa.me/${numero}?text=Hola! mi nombre es ${nombre}
      %20${apellido}, Muchas gracias por tu compra tu numero de orden es:${orden}`,'_blank');       
}

const mostrar = () => {
  document.getElementById('enviarOrden').style.display = 'block';
}
const Alerta =()=>{
  
    Swal.fire({
      icon: 'success',
      title: 'Tu orden se a creado correctamente',
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 1500,
      color: '#303636',
  width:'100%',
  backdrop: `
  #30363674
  `
    })
    
 }

  return (
    <div>
      <div className="orden">
        {
          productCartList.length>0 ?
          <>
            {
              productCartList.map(item=>(
                <CartItem key={item.id} item={item}/>
              ))
            }
            <hr/>
       
            <Link to="/carta">
                  <button className='btn btn-secondary seguir-comprando-form'>Seguir comprando</button>
                </Link>
            <Button onClick={clearProductCartList}>Vaciar el carrito</Button>
            <div className="orden"> 
            <br></br>
          
            <br></br>
              <p className='preciototal'>Precio total: {getTotalPrice()}</p>
            </div>
         
          <div className='formulario'>
          
          <Form className='formulario-datos' onSubmit={sendOrder} >
          
            <div className='formulario-carga'>
              <h2>Complenta y envia tu pedido </h2>
              <ImputForm />
                
              <div onClick={Alerta} >
                <Button className="generarOrden" id="mostrar" onClick={mostrar}  type="submi">Genera tu orden </Button>   
              </div>
              
              <div className="containerButton">
              
                <div  id="enviarOrden" className='' >
                
                  <Button className='' onClick={EnviarFormulario}  type="submi">Enviar orden </Button> 
                  
                  <div className="alert alert-success alertaConfirmacion" role="alert">
                    ??Env??a tu n??mero de orden y estate atentx al WhatsApp para continuar con tu compra! 
                    <h5>Importante:</h5>Este formulario no representa un pedido. La confirmaci??n y reserva solo aplica una vez hecho el pago y enviado el comprobante. 
                  </div>      
                </div>
              </div>
            </div>        
          </Form>
          
          
          </div>
          </>
          :

         <div className='carrito-vacio'>
         
          <h2>A??n no has elegido un destino</h2>
          <p >RESERVAS <span className='span-icon'><TfiAngleDoubleRight/></span> {getTotalPrice()}</p>

        
          <Link to="/CartaProductos" className="link">
            <Button variant="dark">Ver destinos</Button>
          </Link>
         </div>
          
          
        }
      </div>
    </div>
  )
}