src/components/Cart.js
import React, { useEffect, useState } from "react";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
} from "../utils/localStorage";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Function to fetch cart items from localStorage when the component mounts
  useEffect(() => {
    const savedItems = getFromLocalStorage("cartItems");
    if (savedItems) {
      setCartItems(savedItems);
    }
  }, []);

  // Function to remove an item from the cart
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    // Update the cart in localStorage
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  // Render cart items
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} width="50" />
              <h4>{item.name}</h4>
              <p>{item.price} PKR</p>
              <button onClick={() => removeFromCart(item.id)}>
                Remove from Cart
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="total-price">
        <h3>
          Total: {cartItems.reduce((total, item) => total + item.price, 0)} PKR
        </h3>
        <button onClick={() => alert("Proceed to Checkout")}>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
