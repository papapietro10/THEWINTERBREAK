import './Anto.css';
import React from "react";
import { Container, Row, Col } from "reactstrap";



export  const Anto = ()=>{
    
    return(
    
        <Container>
          <div className="container-anto" >
            <div className='anto' data-aos="fade-up" >
              <img   src="https://firebasestorage.googleapis.com/v0/b/fazio-df8ba.appspot.com/o/Anto.jpg?alt=media&token=c5e5fa04-af97-4644-9cb4-3c54d305069e"  data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="1000" alt="why-tasty-treat" className="anto"  />
            </div>
              <div className="tilte-anto">
                <h2>Antonella</h2>
              </div>
              <div className='descri-anto'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum, minus. Tempora reprehenderit a corporis velit,
                  laboriosam vitae ullam, repellat illo sequi odio esse iste
                  fugiat dolor, optio incidunt eligendi deleniti!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum, minus. Tempora reprehenderit a corporis velit,
                  laboriosam vitae ullam, repellat illo sequi odio esse iste
                  fugiat dolor, optio incidunt eligendi deleniti!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum, minus. Tempora reprehenderit a corporis velit,
                  laboriosam vitae ullam, repellat illo sequi odio esse iste
                  fugiat dolor, optio incidunt eligendi deleniti!
                </p>
              </div>
          </div> 
        </Container>
    )
}