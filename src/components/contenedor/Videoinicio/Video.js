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
  
    <video
     
          playsInline
          loop
          muted
          alt="All the devices"
          src="https://firebasestorage.googleapis.com/v0/b/thewinterbreack.appspot.com/o/video2.mov?alt=media&token=ba190dbb-50e6-4cb8-998b-baacdcb58ab6"
          ref={videoEl}
        />
    <div className="content">
    <h1 data-aos="fade-right" data-aos-duration="1000">THE</h1>
            <h2 data-aos="fade-right" data-aos-duration="800">WINTER</h2>
            <h2 data-aos="fade-right" data-aos-duration="800">BREAK</h2>
    </div>
</div>
   

    
    )
}