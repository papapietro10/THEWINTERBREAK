import {useState} from 'react';
import './ControlAgregarCarrito.css';
import Swal from 'sweetalert2'
export const ItemCount = ({stock, initial, onAdd})=>{
    const [count, setCount] = useState(initial);

    const decrementar = ()=>{
        if(count>0){
            setCount(count-1)
        }
    }

    const incrementar = ()=>{
        if(count<10){
            setCount(count+1)
        }
    }
    const mostrarAlerta=()=>{
        Swal.fire({
          icon: 'success',
          title: 'Se agrego correctamente',
          toast: true,
          position: 'center',
          showConfirmButton: false,
          timer: 1000,
          color: '#303636',
  width:'100%',
  backdrop: `
  #30363674
  `
        })
      

      }
    return(
        <div className='estilosContador'>
            <p>{stock}</p>
            <div className='contenedorControles'>
                <button disabled={stock===0} onClick={decrementar} className='btn btn-light mas-menos'>-</button>
                <p>{count}</p>
                <button disabled={stock===0} onClick={incrementar} className='btn btn-light mas-menos'>+</button>
            </div>
            <div onClick={mostrarAlerta} >
            <button disabled={stock === 0} className='btn btn-light mas-menos' onClick={()=>onAdd(count)}>Agregar al carrito</button>
            </div>
            
        </div>
    )
}