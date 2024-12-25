import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
// import "./ProductCard.css";
import { addToCart } from "../utils/localStorage";

const ProductCard = ({ product }) => {
  const navigate = useNavigate(); // Use useNavigate hook

  const viewDetails = () => {
    navigate(`/product/${product.id}`); // Replace history.push with navigate
  };

  const handleAddToCart = () => {
    addToCart(product); // This function will save the product in localStorage
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button onClick={viewDetails}>Product Details</button>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
