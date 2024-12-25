// utils/localStorage.js

export const getCartItems = () => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  return cartItems ? cartItems : [];
};

export const addToCart = (product) => {
  const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];
  existingCart.push(product);
  localStorage.setItem("cartItems", JSON.stringify(existingCart));
};

export const removeFromCart = (productId) => {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  // Filter out the product with the given productId
  cartItems = cartItems.filter(item => item.id !== productId);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};


