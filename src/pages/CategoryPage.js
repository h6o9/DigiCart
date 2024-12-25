import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";
// import "./CategoryPage.css";

const CategoryPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products based on category (for demo, using a static list)
    const fetchedProducts = [
      { id: 1, name: "Product 1", price: "$20", category: "men", image: "product1.jpg" },
      { id: 2, name: "Product 2", price: "$25", category: "women", image: "product2.jpg" },
      // Add more products here
    ];
    setProducts(fetchedProducts.filter((product) => product.category === category));
  }, [category]);

  return (
    <div className="category-page">
      <h2>{category} Collection</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
