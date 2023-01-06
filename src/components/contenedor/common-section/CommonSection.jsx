

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
                src="https://firebasestorage.googleapis.com/v0/b/thewinterbreack.appspot.com/o/THE.mp4?alt=media&token=c706ab1c-1525-4148-a2b5-d19e5e8caa31"
                ref={videoEl}
   
              />
              
         
        
    </div>
  );
};

