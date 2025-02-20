import React from "react";
import "./../styles/Cart.css";

const Cart = ({ cart, removeFromCart, clearCart }) => {
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? <p>Cart is empty</p> : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price}
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
    </div>
  );
};

export default Cart;
