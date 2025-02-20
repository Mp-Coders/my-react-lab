import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import ThankYouPage from "./components/ThankYouPage";
import "./styles/App.css"; 

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <Navbar cart={cart} />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />}
          />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
