// Cart.jsx
import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import "../styles/Cart.css"; // Import your Cart CSS

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  if (cartItems.length === 0) {
    return <div className="empty-cart">Your cart is empty.</div>;
  }

  return (
    <div id="cart-container">
      <h2>Your Cart</h2>
      <div id="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="cart-item-details">
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div id="cart-summary">
        <p>Total: ${calculateTotal().toFixed(2)}</p>
        <button>Checkout</button> {/* Checkout button */}
      </div>
    </div>
  );
}

export default Cart;
