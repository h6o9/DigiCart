import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { addToCart, getCartItems } from "../utils/localStorage";
import slider1 from "../assets/images/slider1.jpg";
import slider2 from "../assets/images/slider2.jpg";
import slider3 from "../assets/images/slider3.jpg";
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

const Home = () => {
  const navigate = useNavigate(); // Initialize the navigate function

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

  // Define the handleNavigation function
  const handleNavigation = (path) => {
    navigate(path); // Navigate to the given path
  };

  return (
    <div>
      {/* Carousel Section */}
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active banner-slider">
            <img
              src={slider1}
              className="d-block w-100 img-fluid"
              alt="Slider 1"
            />
            <div className="carousel-caption d-none d-md-block banner-content">
              <p>Winter Sale 2025</p>
              <h1>New Arrival Collection</h1>
              <button type="button" className="btn btn-dark">
                <a
                  href="#"
                  className="nav-link font-weight-bold"
                  onClick={() => handleNavigation("/shop")}
                >
                  Shop Now
                </a>
              </button>
            </div>
          </div>
          <div className="carousel-item banner-slider">
            <img
              src={slider2}
              className="d-block w-100 img-fluid"
              alt="Slider 2"
            />
            <div className="carousel-caption d-none d-md-block banner-content">
              <p>Summer Collection</p>
              <h1>Trendy & Stylish</h1>
            </div>
          </div>
          <div className="carousel-item banner-slider">
            <img
              src={slider3}
              className="d-block w-100 img-fluid"
              alt="Slider 3"
            />
            <div className="carousel-caption d-none d-md-block banner-content">
              <p>Exclusive Deals</p>
              <h1>Shop Now!</h1>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Featured Products */}
      <div className="featured-products mt-5 container">
        <h2 className="text-center pb-4">Featured Products</h2>
        <div className="row">
          {products.map((product) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4 pb-5"
              key={product.id}
            >
              <div className="card product-card">
                <img
                  src={product.image}
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
                      onClick={() =>
                        localStorage.setItem(
                          "productDetails",
                          JSON.stringify(product)
                        )
                      }
                    >
                      More Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
