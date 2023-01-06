import React from 'react';
import { Button } from 'react-bootstrap';
import { SiAcclaim } from "react-icons/si";
import "../ScrollButton/ScrollButton.css"
export function ScrollButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='contenedor-scrollbtn'> 
      <Button variant="secondary" className="scrollbtn" onClick={scrollToTop}>
        <SiAcclaim/>
      </Button>
    </div>
  );
}

export default ScrollButton;