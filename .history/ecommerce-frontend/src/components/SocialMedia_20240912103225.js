import React from 'react';

// Social Media Component
function SocialMedia() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Follow Us on Social Media</h1>
      <div style={styles.socialMediaIcons}>
        {/* Facebook */}
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
            alt="Facebook"
            style={styles.icon}
          />
          Facebook
        </a>

        {/* TikTok */}
        <a
          href="https://www.tiktok.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/3046/3046122.png"
            alt="TikTok"
            style={styles.icon}
          />
          TikTok
        </a>

        {/* Line */}
        <a
          href="https://line.me/en/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2111/2111468.png"
            alt="Line"
            style={styles.icon}
          />
          Line
        </a>
      </div>
    </div>
  );
}

// Simple styling for the component
const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  socialMediaIcons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    textAlign: 'center',
    fontSize: '1.2rem',
  },
  icon: {
    width: '50px',
    height: '50px',
    display: 'block',
    margin: '0 auto 10px',
  },
};

export default SocialMedia;
