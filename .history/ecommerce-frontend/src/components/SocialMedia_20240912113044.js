import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLine, faTiktok } from '@fortawesome/free-brands-svg-icons';

function SocialMedia() {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Follow Us on Social Media</h1>
      <div style={styles.linksContainer}>
        {/* Shopee */}
        <a
          href="https://shopee.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...styles.linkBlock,
            ...(hovered === 0 && styles.linkBlockHover),
          }}
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopee_logo.svg" // Placeholder image
            alt="Shopee"
            style={styles.iconImage}
          />
          Shopee
        </a>

        {/* TikTok */}
        <a
          href="https://www.tiktok.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...styles.linkBlock,
            ...(hovered === 1 && styles.linkBlockHover),
          }}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          <FontAwesomeIcon icon={faTiktok} style={styles.icon} />
          TikTok
        </a>

        {/* Line OA */}
        <a
          href="https://line.me/en/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...styles.linkBlock,
            ...(hovered === 2 && styles.linkBlockHover),
          }}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        >
          <FontAwesomeIcon icon={faLine} style={styles.icon} />
          Line OA
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...styles.linkBlock,
            ...(hovered === 3 && styles.linkBlockHover),
          }}
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
        >
          <FontAwesomeIcon icon={faFacebook} style={styles.icon} />
          Facebook
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...styles.linkBlock,
            ...(hovered === 4 && styles.linkBlockHover),
          }}
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={handleMouseLeave}
        >
          <FontAwesomeIcon icon={faInstagram} style={styles.icon} />
          Instagram
        </a>
      </div>
    </div>
  );
}

// Styling for the social media blocks
const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
  },
  header: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '40px',
  },
  linksContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px', // Gap between the social media blocks
  },
  linkBlock: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '80%',
    padding: '15px',
    backgroundColor: '#e89ea1', // Pink color for the block
    color: '#000',
    fontSize: '1.5rem',
    textDecoration: 'none',
    borderRadius: '30px', // Rounded corners
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s, transform 0.3s',
  },
  linkBlockHover: {
    backgroundColor: '#f06d73', // Darker pink on hover
    transform: 'scale(1.02)',
  },
  icon: {
    marginRight: '10px',
    fontSize: '1.8rem',
  },
  iconImage: {
    width: '32px',
    height: '32px',
    marginRight: '10px',
  },
};

export default SocialMedia;
