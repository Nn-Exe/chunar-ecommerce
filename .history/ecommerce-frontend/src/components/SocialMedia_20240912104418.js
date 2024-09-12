import React, { useState } from 'react';

// Social Media Component
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
    backgroundColor: '#fbd3e9', // light pink background color
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
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    // maxWidth: '400px',
    padding: '15px',
    backgroundColor: '#f99ac2', // Pink color for the block
    color: '#000',
    fontSize: '1.5rem',
    textDecoration: 'none',
    borderRadius: '30px', // Rounded corners
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s, transform 0.3s',
  },
  linkBlockHover: {
    backgroundColor: '#f77ab6', // Darker pink on hover
    transform: 'scale(1.02)',
  },
};

export default SocialMedia;
