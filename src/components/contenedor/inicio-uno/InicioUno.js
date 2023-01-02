
import './InicioUno.css';
import React from "react";
import { Container, Row, Col } from "reactstrap";



export const InicioUno = ()=>{
    

  
    return(
    
        <Container className="containerInicio">
          <Row className='inicioUnoContainer'>
            <Col lg="6" md="6" className="hero__contentBajo">
             
              <div className='logo-inicio'>               
                 <img data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="1000" src="https://firebasestorage.googleapis.com/v0/b/fazio-df8ba.appspot.com/o/Final_Anto-04.png?alt=media&token=f52b60bb-e20b-4887-9724-c9599158e52e" alt="hero-img" className="img-inicio-logo" />
               </div>

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 hero__contentd ">
                
                      <span>  
                        <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram instagram-logo" viewBox="0 0 16 16">
                           <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                        </svg>
                      </span>
                      <a className='instagramp' href="https://instagram.com/fazioreposteria?igshid=YmMyMTA2M2Y=" >Fazioreposteria</a>
                      <p className=" d-flex align-items-center gap-2 ">
                        Pedidos: 72hs de anticipación
                      </p>
                      
                </div>
             
            </Col>

            <Col lg="6" md="6" >
              <div className="hero__img">
              <img data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="1000" src="https://firebasestorage.googleapis.com/v0/b/fazio-df8ba.appspot.com/o/Captura%20de%20Pantalla%202022-09-24%20a%20la(s)%2020.40.46.png?alt=media&token=c1ae4b19-91c2-4f00-ac50-e7a90096afd0" alt="hero-img" className="img-inicio" />
              </div>
            </Col>
          </Row>
        </Container>
      
    )
}