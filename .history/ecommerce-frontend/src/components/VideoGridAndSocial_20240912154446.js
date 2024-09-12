import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLine, faTiktok } from '@fortawesome/free-brands-svg-icons';


const VideoGridAndSocial = () => {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

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

      {/* Two smaller videos */}
      <div className="small-items">
        <div className="small-item">
          <iframe
            className="grid-video"
            src="https://www.youtube.com/embed/YuU2rPDTYNY?autoplay=1&mute=1&loop=1&playlist=Nqnu8MwCy8M"
            title="Small YouTube video 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="small-item">
          <iframe
            className="grid-video"
            src="https://www.youtube.com/embed/YOUR_SMALL_VIDEO2_ID?autoplay=1&mute=1&loop=1&playlist=YuU2rPDTYNY"
            title="Small YouTube video 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Images Grid */}
      <div className="images-grid">
        <div className="image-item">
          <img src="https://raw.githubusercontent.com/Nn-Exe/chunar-images/master/200*200/no2.jpg" alt="Image 1" className="grid-image" />
        </div>
        <div className="image-item">
          <img src="https://via.placeholder.com/200?text=Image+2" alt="Image 2" className="grid-image" />
        </div>
        <div className="image-item">
          <img src="https://via.placeholder.com/200?text=Image+2" alt="Image 3" className="grid-image" />
        </div>
      </div>



      {/* Social Media on the right */}
      <div className="social-media">
        <h1>Shop & Follow</h1>
        <div className="links-container">
          <a
            href="https://shopee.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-block"
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopee_logo.svg"
              alt="Shopee"
              className="icon-image"
            />
            Shopee
          </a>

          <a
            href="https://www.tiktok.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-block"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <FontAwesomeIcon icon={faTiktok} className="icon" />
            TikTok
          </a>

          <a
            href="https://line.me/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-block"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <FontAwesomeIcon icon={faLine} className="icon" />
            Line OA
          </a>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-block"
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <FontAwesomeIcon icon={faFacebook} className="icon" />
            Facebook
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-block"
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={handleMouseLeave}
          >
            <FontAwesomeIcon icon={faInstagram} className="icon" />
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoGridAndSocial;
