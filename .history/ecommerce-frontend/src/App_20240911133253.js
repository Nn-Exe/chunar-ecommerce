import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Importing React Router
import Navbar from './components/Navbar';  // Correct way to import default export
import HeroSection from './components/HeroSection';  // Correct way to import default export
import ProductList from './components/ProductList';  // Correct way to import default export


// FAQ Component
function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2>Frequently asked questions</h2>

      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFaq(0)}>
          <span>What is Jubilee?</span>
          <span className="icon">{activeIndex === 0 ? '-' : '+'}</span>
        </div>
        {activeIndex === 0 && (
          <div className="faq-answer">
            <p>Jubilee is a dropshipping marketplace that lets you build your own cosmetic and skincare line with minimal upfront costs. You can find high-quality beauty products with customizable attributes like logos and branded invoicing.</p>
          </div>
        )}
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFaq(1)}>
          <span>What is private label dropshipping?</span>
          <span className="icon">{activeIndex === 1 ? '-' : '+'}</span>
        </div>
        {activeIndex === 1 && (
          <div className="faq-answer">
            <p>Private label dropshipping allows you to sell products from suppliers with your own branding. It’s a great way to promote your brand with minimal effort.</p>
          </div>
        )}
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFaq(2)}>
          <span>How can I customize my package?</span>
          <span className="icon">{activeIndex === 2 ? '-' : '+'}</span>
        </div>
        {activeIndex === 2 && (
          <div className="faq-answer">
            <p>Private labeling is a great way to showcase your brand! As a retailer, you have the power to control how the packaging of the products will look that will be directly delivered to your customers.</p>
          </div>
        )}
      </div>
    </div>
  );
}

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
      <Faq />

      {/* Add more sections here */}
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
          <h1>Boundless Commerce</h1>
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
