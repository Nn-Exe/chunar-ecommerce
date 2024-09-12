import React from 'react';

const VideoGrid = () => {
  return (
    <div className="grid-container">
      {/* Large video on the left */}
      <div className="large-item">
        <iframe
          className="grid-video"
          src="https://www.youtube.com/embed/gpQ33hhB2Lg?autoplay=1&mute=1&loop=1&playlist=gpQ33hhB2Lg"
          title="Large YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Two smaller videos on the right */}
      <div className="small-items">
        <div className="small-item">
          <iframe
            className="grid-video"
            src="https://www.youtube.com/embed/YuU2rPDTYNY?autoplay=1&mute=1&loop=1&playlist=YuU2rPDTYNY"
            title="Small YouTube video 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="small-item">
          <iframe
            className="grid-video"
            src="https://www.youtube.com/embed/YOUR_SMALL_VIDEO2_ID?autoplay=1&mute=1&loop=1&playlist=YOUR_SMALL_VIDEO2_ID"
            title="Small YouTube video 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoGrid;
