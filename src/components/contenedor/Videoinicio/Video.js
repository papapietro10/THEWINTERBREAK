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
          src="https://firebasestorage.googleapis.com/v0/b/prueba-a3c56.appspot.com/o/video.mov?alt=media&token=4b782b58-b3c1-492b-8377-b0cd2836f084"
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