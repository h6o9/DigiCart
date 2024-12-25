import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { addToCart, getCartItems } from "../utils/localStorage";
import product1 from "../assets/images/product1.jpg";
import product2 from "../assets/images/product2.jpg";
import product3 from "../assets/images/product3.jpg";
import product4 from "../assets/images/product4.jpg";
import product5 from "../assets/images/product5.jpg";
import product6 from "../assets/images/product6.jpg";
import product7 from "../assets/images/product7.jpg";
import product8 from "../assets/images/product8.jpg";
import product9 from "../assets/images/product9.jpg";
import product10 from "../assets/images/product10.jpg";
import product11 from "../assets/images/product11.jpg";
import product12 from "../assets/images/product12.jpg";
import NProgress from "nprogress"; // Import NProgress
import "nprogress/nprogress.css"; // Import NProgress styles

// Sample product data (products array from Home.js)
const products = [
  {
    id: 1,
    name: "Track Suit for Men",
    price: 25,
    category: "Men",
    image: product1,
    description:
      "A men's track suit designed for comfort and style, perfect for workouts, casual wear, or lounging. Made from breathable and flexible fabric, it features a zip-up jacket with side pockets and matching elasticated pants. Ideal for active lifestyles, offering both functionality and a sleek, athletic look.",
  },
  {
    id: 2,
    name: "Ladies Bag Set Charles & Keith",
    price: 30,
    category: "Women",
    image: product2,
    description: "Description for Product 2",
  },
  {
    id: 3,
    name: "Kids Track Suit",
    price: 20,
    category: "Kids",
    image: product3,
    description: "Description for Product 3",
  },
  {
    id: 4,
    name: "Men's Rexene Joggers",
    price: 18,
    category: "Men",
    image: product4,
    description: "Description for Product 4",
  },
  {
    id: 5,
    name: "Bamber Chiffon (2-piece)",
    price: 35,
    category: "Women",
    image: product5,
    description: "Description for Product 5",
  },
  {
    id: 6,
    name: "2 Pcs Boys' Fleece Printed Sweatshirt Set",
    price: 22,
    category: "Kids",
    image: product6,
    description: "Description for Product 6",
  },
  {
    id: 7,
    name: "Men's USB Heated Jacket Winter Coat",
    price: 28,
    category: "Men",
    image: product7,
    description: "Description for Product 7",
  },
  {
    id: 8,
    name: "Glossy Finish Lip Balm- Pack Of 12",
    price: 40,
    category: "Women",
    image: product8,
    description: "Description for Product 8",
  },
  {
    id: 9,
    name: "2 Pcs Boys' Fleece Printed Tracksuit",
    price: 25,
    category: "Kids",
    image: product9,
    description: "Description for Product 9",
  },
  {
    id: 10,
    name: "Luxurious Wool Embroidered Shawl",
    price: 30,
    category: "Men",
    image: product10,
    description: "Description for Product 10",
  },
  {
    id: 11,
    name: "Blemish Control Cleanser Lotion, 236ml",
    price: 20,
    category: "Women",
    image: product11,
    description: "Description for Product 11",
  },
  {
    id: 12,
    name: "Baby Boy's Jersey Shirt And Trouser Set",
    price: 18,
    category: "Kids",
    image: product12,
    description: "Description for Product 12",
  },
];

const Shop = () => {
  const location = useLocation();
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get("category");

    // If a category is selected from the URL, filter the products
    if (category) {
      NProgress.start(); // Start the loading bar
      filterProducts(category);
      NProgress.done(); // Complete the loading bar
    } else {
      setFilteredProducts(products); // Show all products if no category is selected
    }
  }, [location.search]);

  const filterProducts = (category) => {
    NProgress.start(); // Start loading bar when filtering begins
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === category)
      );
    }
    NProgress.done(); // End loading bar when filtering is complete
  };

  const handleAddToCart = (product) => {
    const cartItems = getCartItems() || [];
    const isAlreadyInCart = cartItems.find((item) => item.id === product.id);

    if (!isAlreadyInCart) {
      addToCart(product);
      alert(`${product.name} added to cart!`);
    } else {
      alert(`${product.name} is already in the cart!`);
    }
  };

  return (
    <div className="shop-container cotainer">
      <h1 className="text-center py-4">Shop Our Products</h1>

      {/* Category Buttons */}
      <div className="category-buttons">
        <button onClick={() => filterProducts("All")}>All</button>
        <button onClick={() => filterProducts("Men")}>Men</button>
        <button onClick={() => filterProducts("Women")}>Women</button>
        <button onClick={() => filterProducts("Kids")}>Kids</button>
      </div>

      {/* Featured Products */}
      <div className="featured-products mt-5 mb-5 container">
        <h2 className="text-center pb-4">Featured Products</h2>
        <div className="row">
          {filteredProducts.length === 0 ? (
            <p className="text-center">
              No products available in this category.
            </p>
          ) : (
            filteredProducts.map((product) => (
              <div
                className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
                key={product.id}
              >
                <div className="card product-card">
                  <img
                    src={product.image} // Image displayed from imported path
                    alt={product.name}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">${product.price.toFixed(2)}</p>
                    <div className="d-flex justify-content-between">
                      <button
                        className="btn btn-success fst-italic"
                        onClick={() => handleAddToCart(product)}
                      >
                        Add to Cart
                      </button>
                      <Link
                        to={`/product/${product.id}`}
                        className="btn btn-primary fst-italic"
                      >
                        More Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
