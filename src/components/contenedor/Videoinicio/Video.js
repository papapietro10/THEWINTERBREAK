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
          src="https://firebasestorage.googleapis.com/v0/b/thewinterbreack.appspot.com/o/videoinicio%20(1).mov?alt=media&token=b48ccfe6-4e5c-4f90-af08-00be8f40efc3"
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