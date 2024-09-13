import React from 'react';
import products from './products.json';  // Adjust the path to the location of your JSON file

function ProductList() {
  return (
    <div className="product-list">
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        products.map((product) => (
          <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price} ฿</p>
          </div>
        ))
      )}
    </div>
  );
}

export default ProductList;
