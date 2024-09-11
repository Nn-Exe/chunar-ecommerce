import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Importing React Router
import Navbar from './components/Navbar';  // Correct way to import default export
import HeroSection from './components/HeroSection';  // Correct way to import default export
import ProductList from './components/ProductList';  // Correct way to import default export
import Faq from './components/Faq';  // Import the Faq component from the components folder
import TestimonialCarousel from './components/TestimonialCarousel'; 


// Home page component (the default view)
function Home({ products }) {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-container">
        <HeroSection />
      </div>

      {/* Featured Products Section */}
      <section className="products-section">
        <div className="section-header">
          <h2>Featured Products</h2>
        </div>
        
        <div className="product-grid">
          <ProductList products={products} />
        </div>
      </section>

      <br />

      {/* FAQ Section */}

      <TestimonialCarousel />
      <Faq />  {/* Using the imported Faq component */}

      {/* Add more sections here */}

      <br />

      <section className="about-section">
        <div className="about-content">
          <h3>About Us</h3>
          <p>Learn more about our company and our mission.</p>
        </div>
      </section>
    </div>
  );
}

// Other page components
function Live() {
  return <h2>Live Page</h2>;
}

function Contacts() {
  return <h2>Contacts Page</h2>;
}

function SocialMedia() {
  // External link can be opened using an anchor tag, so no need for a separate page.
  window.location.href = "https://linktr.ee/chunar.co";  // Redirect to external social media page
  return null;
}

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Chunar.Co</h1>
          <Navbar />
        </header>

        <Routes>
          {/* Home page route */}
          <Route path="/" element={<Home products={products} />} />
          
          {/* Other pages */}
          <Route path="/live" element={<Live />} />
          <Route path="/contacts" element={<Contacts />} />
          
          {/* Redirect to external social media link */}
          <Route path="/social-media" element={<SocialMedia />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
