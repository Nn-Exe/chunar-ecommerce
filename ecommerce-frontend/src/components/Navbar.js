import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleScrollToSocial = (e) => {
    e.preventDefault(); // Prevent the link from navigating
    navigate('/');
    // Use setTimeout to ensure the page has fully navigated before attempting the scroll
    setTimeout(() => {
      const element = document.querySelector('.video-grid-section'); // Assuming this class is in your VideoGridAndSocial component
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 100); // Adjust the timeout if necessary to ensure smooth navigation
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/" onClick={scrollToTop}>
            Chunar.Co
          </Link>
        </li>
        <li>
          <button
            onClick={handleScrollToSocial}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}
          >
            Contacts
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
