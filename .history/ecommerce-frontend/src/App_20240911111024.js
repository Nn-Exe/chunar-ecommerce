import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductList from './components/ProductList';


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from backend API
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Boundless Commerce</h1>
        <Navbar />
      </header>

      <HeroSection />

      <section className="products">
        <h2>Boundless Store</h2>
        <ProductList products={products} />
      </section>
    </div>
  );
}

export default App;
