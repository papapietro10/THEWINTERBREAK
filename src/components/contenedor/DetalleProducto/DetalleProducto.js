import { useState,useEffect } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import { ItemCount } from '../ControlAgregarCarrito/ControlAgregarCarrito';
import './DetalleProducto.css';
import {Link} from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";


export const ItemDetail = ({item})=>{
    const {addProduct} = useContext(CartContext);
    const [quantity, setQuantity] = useState(0);
    const [previewImg, setPreviewImg] = useState(item.pictureUrl);
    const onAdd = (count)=>{
        addProduct(item,count);
        setQuantity(count);
    }
  
   
    useEffect(() => {
        setPreviewImg(item.pictureUrl);
      }, [item]);
    
      useEffect(() => {
        window.scrollTo(0, 0);
      }, [item]);
    return(
      <section>
      
        <Container className="container-detalle-general" >
          <Row >
            <Col lg="2" md="2">
              <div className="product__images " >
                
                <div className="img__item mb-3 imagen-mas" onClick={() => setPreviewImg(item.pictureUrl)}>
                  <img   src={item.pictureUrl} alt="" className="w-50 imagen-detalle" />
                </div>
                
                <div className="img__item mb-3 imagen-mas" onClick={() => setPreviewImg(item.pictureUrl1)}>
                  <img  src={item.pictureUrl1} alt="" className="w-50 imagen-detalle" />
                </div>

                <div className="img__item imagen-mas" onClick={() => setPreviewImg(item.pictureUrl2)}>
                  <img   src={item.pictureUrl2} alt="" className="w-50 imagen-detalle" />
                </div>
      
              </div>

            </Col>

            <Col lg="4" md="4">
              <div className="product__main-img">
                <img  src={previewImg} alt="" className=" imagen-detalle imagenPrincipal" />
              </div>
            </Col>

            <Col   className="detalles-title-desc detalleTamano" >
              <h2 className="titulo-detalle-producto">{item.title}</h2>
              <div className='detalles-container tamaño-detalle'>
          
                  <p> {item.desc}</p>
                  <h5>$ {item.price}</h5>
              </div>
              <div className='detalles-control'>
              <ItemCount initial={1} stock={((""))} onAdd={onAdd}/>
              {
                quantity>0 &&
                <Link to="/cart">
                    <button className='btn btn-secondary  mas-menos'>Ir al carrito</button>
                </Link>
              }
                <Link to="/carta">
                  <button className='btn btn-secondary seguir-comprando'>Seguir comprando</button>
                </Link>
                </div>
            </Col>
            
          </Row>
        </Container>
       
      </section>
    )
}