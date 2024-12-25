import React from "react";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const product = JSON.parse(localStorage.getItem("productDetails"));

  if (!product) {
    return (
      <div className="text-center mt-5">
        <h2>Product not found</h2>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p>
            <strong>Price:</strong> ${product.price.toFixed(2)}
          </p>
          <p>
            <strong>Description:</strong>
            <br></br>
            Discover the perfect blend of quality, functionality, and style with
            our carefully curated collection. Each product is designed to meet
            the highest standards, ensuring you get the best value for your
            money. Whether you're looking for something practical, trendy, or
            unique, our store offers a wide range of options to suit every need
            and preference. Made from durable, high-quality materials, this
            product is built to last and deliver exceptional performance.
            Experience convenience, satisfaction, and a touch of elegance with
            every purchase. Elevate your lifestyle with our top-notch products,
            designed to make your life easier and more enjoyable.
          </p>
          <button
            className="btn btn-success"
            onClick={() => alert(`${product.name} added to cart!`)}
          >
            Add to Cart
          </button>
          <Link to="/" className="btn btn-secondary ms-3">
            Back to Home
          </Link>
          <div className="mt-4">
            <h4>Guaranteed Safe Checkout</h4>
            <div className="d-flex align-items-center mt-3">
              <div className="payment-button amex">AMEX</div>
              <div className="payment-button apple-pay">Apple Pay</div>
              <div className="payment-button mastercard">Mastercard</div>
              <div className="payment-button shop">Shop</div>
              <div className="payment-button visa">Visa</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
