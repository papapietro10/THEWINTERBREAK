import React, { useEffect, useRef } from "react";
import "../Videonosotros/Videonosotros.css"
export const Videonosotros = ()=>{
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);
  return (
    
    <div className='main-destinos'>
    <div className="overlay"></div>
        <video className="video-destinos"
              playsInline
              loop
              muted
              alt="All the devices"
              src="https://firebasestorage.googleapis.com/v0/b/thewinterbreack.appspot.com/o/video-somosfinal.mov?alt=media&token=abf41e74-bfb1-48a8-973b-8e004983c3dd"
              ref={videoEl}
 
            />
            
       
      
  </div>
   

    
    )
}