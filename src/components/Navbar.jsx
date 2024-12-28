import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { useState } from "react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div id="navbar-container">
      <h1>Virtual Vogue</h1>
      <button id="mobile-menu-toggle" onClick={toggleMobileMenu}>
        {/* You can use an icon here (e.g., hamburger icon) */}
        <span>&#9776;</span> {/* Hamburger icon */}
      </button>
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
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
