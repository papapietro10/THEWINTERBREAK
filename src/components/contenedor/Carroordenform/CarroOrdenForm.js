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
      let numero= 5491176370334;
 
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
                    ¡Envía tu número de orden y estate atentx al WhatsApp para continuar con tu compra! 
                    <h5>Importante:</h5>Este formulario no representa un pedido. La confirmación y reserva solo aplica una vez hecho el pago y enviado el comprobante. 
                  </div>      
                </div>
              </div>
            </div>        
          </Form>
          
          
          </div>
          </>
          :

         <div className='carrito-vacio'>
         <img src="https://firebasestorage.googleapis.com/v0/b/fazio-df8ba.appspot.com/o/Captura%20de%20Pantalla%202022-09-28%20a%20la(s)%2013.10.52.png?alt=media&token=d68e2d3b-135f-46d0-8e8e-98739f1931b3" alt="hero-img" className="img-carrito-logo" />
         <h2>No has agregado productos </h2>
         <p>Tu carrito se encuentra en {getTotalPrice()}</p>
         </div>
          
          
        }
      </div>
    </div>
  )
}