

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
                src="https://firebasestorage.googleapis.com/v0/b/thewinterbreack.appspot.com/o/destinos-videos.mp4?alt=media&token=3563ea1d-4bab-470d-9234-ed97dc7c633f"
                ref={videoEl}
   
              />
              
         
        
    </div>
  );
};

