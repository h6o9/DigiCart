  import React from "react";
  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  import Navbar from "./components/Navbar"; // Adjust path
  import Home from "./pages/Home"; // Adjust path
  import Shop from "./pages/Shop"; // Adjust path
  import CategoryPage from "./pages/CategoryPage"; // Adjust path
  import CartPage from "./pages/CartPage"; // Adjust path
  import ContactUs from "./pages/ContactUs"; // Adjust path
  import Footer from "./components/Footer"; // Adjust path
  import ProductDetails from "./pages/ProductDetails"; // Adjust path

  const App = () => {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </Router>
    );
  };

  export default App;
