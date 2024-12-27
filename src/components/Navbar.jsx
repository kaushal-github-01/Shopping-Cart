import { Link } from "react-router-dom";

import "../styles/Navbar.css";

function Navbar() {
  return (
    <>
      <div id="navbar-container">
        <h1>Virtual Vogue</h1>
        <nav id="navbar-links">
          <ul>
            <li>
              <Link to="">Home</Link>
              <Link to="">Shop</Link>
              <Link to="">Cart</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
