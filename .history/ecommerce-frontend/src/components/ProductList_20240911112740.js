import React from 'react';

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}     // Use the image URL provided in the backend response
              alt={product.name}       // Use the product name as alt text for the image
              style={{ width: '200px', height: '200px' }}  // Adjust the size as necessary
            />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default ProductList;
