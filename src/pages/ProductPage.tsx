import React from 'react';
import './ProductPage.module.css';

const ProductPage: React.FC = () => {
  return (
    <div className="product-container">
      <h1 className="product-title">Product Name</h1>
      <img src="/path/to/product-image.jpg" alt="Product" className="product-image" />
      <p className="product-description">This is a detailed description of the product.</p>
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>
  );
};

export default ProductPage;
