import React, { useState, useEffect } from 'react';
import './App.css';

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
        <nav>
          <ul>
            <li><a href="#">iPhone Cases</a></li>
            <li><a href="#">iPad Cases</a></li>
            <li><a href="#">Cases for Samsung</a></li>
            <li><a href="#">Collections</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <img src="https://via.placeholder.com/1500x400" alt="Banner" className="hero-banner" />
        <div className="hero-text">
          <h2>Three things cannot be long hidden: The Sun, The Moon, and The Truth.</h2>
        </div>
      </section>

      <section className="products">
        <h2>Boundless Store</h2>
        <div className="product-list">
          {products.length === 0 ? (
            <p>Loading products...</p>
          ) : (
            products.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>${product.price}</p>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}

export default App;
