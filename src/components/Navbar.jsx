import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext"; // Import CartContext
import "../styles/Navbar.css";

function Navbar() {
  const { cartItems } = useContext(CartContext); // Access cart items
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div id="navbar-container">
      <div id="navbar-heading-and-button">
        <h1>Virtual Vogue</h1>
        <button id="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span>&#9776;</span> {/* Hamburger icon */}
        </button>
      </div>

      <nav
        id="navbar-links"
        className={isMobileMenuOpen ? "mobile-menu-open" : ""}
      >
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/cart">
              Cart {cartItemCount > 0 ? `(${cartItemCount})` : ""}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
