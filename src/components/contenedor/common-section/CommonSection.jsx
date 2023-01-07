

import "./common-section.css";
import React, { useEffect, useRef } from "react";
export const CommonSection = (props) => {
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
                src="https://firebasestorage.googleapis.com/v0/b/thewinterbreack.appspot.com/o/VIDEODESTINOS.mp4?alt=media&token=f9f103e4-dcba-4c34-8958-38da04f893bd"
                ref={videoEl}
   
              />
              
         
        
    </div>
  );
};

