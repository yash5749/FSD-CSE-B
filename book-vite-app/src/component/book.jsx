import React from 'react';

function Book({ image, title, price }) {

  const handleAddToCart = () => {
    alert(`Added to cart: ${title} — ₹${price}`);
  };

  return (
    <div className="book-card">
      <img src={image} alt={title} className="book-img" />
      <h2>{title}</h2>
      <p>Price: ₹{price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default Book;