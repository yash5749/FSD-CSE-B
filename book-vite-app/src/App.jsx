import React, { useState } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Book from './component/book';

const App = () => {
  const [cart, setCart] = useState([]);

  const books = [
    { id: 1, title: 'Physics', price: 671, image: 'https://via.placeholder.com/200' },
    { id: 2, title: 'Chemistry', price: 550, image: 'https://via.placeholder.com/200' },
    { id: 3, title: 'Mathematics', price: 450, image: 'https://via.placeholder.com/200' },
    { id: 4, title: 'Biology', price: 600, image: 'https://via.placeholder.com/200' },
  ];

  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  return (
    <div>
      <Header />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {books.map(book => (
          <Book
            key={book.id}
            title={book.title}
            price={book.price}
            image={book.image}
            onAddToCart={() => addToCart(book)}
          />
        ))}
      </div>
      <div className="cart">
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.title} - ₹{item.price}</li>
            ))}
          </ul>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
