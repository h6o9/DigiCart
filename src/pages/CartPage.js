import React, { useState, useEffect } from "react";
import { getCartItems, removeFromCart } from "../utils/localStorage"; // Import removeFromCart

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(getCartItems());
  }, []);

  const handleRemove = (productId) => {
    removeFromCart(productId);
    setCart(getCartItems());
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in your cart</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.name} width="100" />
              <h3>{item.name}</h3>
              <p>{item.price} PKR</p>
              <button
                className="btn btn-danger"
                onClick={() => handleRemove(item.id)} // Pass the product ID to handleRemove
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
