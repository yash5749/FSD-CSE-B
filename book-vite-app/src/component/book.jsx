import React from "react";

const Book = ({ title, price, image, onAddToCart }) => {
  return (
    <div className="card">
        <img src={image} alt={title} width="200" height="200" />
        <h3>Title: {title}</h3>
        <h4>Price: ₹{price}</h4>
        <button onClick={onAddToCart}>Add to cart</button>
    </div>
    );
};

export default Book;
