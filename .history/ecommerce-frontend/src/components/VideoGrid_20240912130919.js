import React from 'react';


const VideoGrid = () => {
  return (
    <div className="grid-container">
      {/* Large video on the left */}
      <div className="large-item">
        <video className="grid-video" controls>
          <source src="large-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dots */}
        {/* <div className="dot" style={{ top: '50%', left: '40%' }}></div>
        <div className="dot" style={{ top: '70%', left: '60%' }}></div>
        <div className="dot" style={{ top: '90%', left: '20%' }}></div> */}
      </div>

      {/* Two smaller videos on the right */}
      <div className="small-items">
        <div className="small-item">
          <video className="grid-video" controls>
            <source src="small-video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Dots */}
          {/* <div className="dot" style={{ top: '40%', left: '30%' }}></div>
          <div className="dot" style={{ top: '60%', left: '60%' }}></div> */}
        </div>

        <div className="small-item">
          <video className="grid-video" controls>
            <source src="small-video2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Dots */}
          {/* <div className="dot" style={{ top: '50%', left: '40%' }}></div>
          <div className="dot" style={{ top: '70%', left: '60%' }}></div> */}
        </div>
      </div>
    </div>
  );
};

export default VideoGrid;
