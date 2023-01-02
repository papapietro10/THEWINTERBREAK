import React, { useEffect, useRef } from "react";
import "../Videoinicio/Video.css"
export const Video = ()=>{
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
    
    <div className='main'>
      <div className="overlay"></div>
          <video
                playsInline
                loop
                muted
                alt="All the devices"
                src="https://firebasestorage.googleapis.com/v0/b/thewinterbreack.appspot.com/o/THE%20(1).mp4?alt=media&token=84122dd1-cc9e-40b9-b998-4f3596361e71"
                ref={videoEl}
   
              />
              
         
        
    </div>
   

    
    )
}