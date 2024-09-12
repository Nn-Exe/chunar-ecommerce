import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>  {/* Links to the home page */}
        <li><Link to="/SocialMedia">Live</Link></li>  {/* Links to the live page */}
        {/* <li><a href="https://linktr.ee/chunar.co" target="_blank" rel="noopener noreferrer">Social Media</a></li> Opens external link in new tab */}
        <li><Link to="/contacts">Contacts</Link></li>  {/* Links to the contacts page */}
      </ul>
    </nav>
  );
}

export default Navbar;
