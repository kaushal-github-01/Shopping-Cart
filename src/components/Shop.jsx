import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import "../styles/Shop.css";
import { CartContext } from "./CartContext"; // Import CartContext

function Shop() {
  const { addToCart } = useContext(CartContext); // Access addToCart function

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [itemQuantities, setItemQuantities] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products"); // Example API
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChangeQuantity = (itemId, newQuantity) => {
    // Validate and limit quantity before updating state
    const limitedQuantity = Math.min(Math.max(0, newQuantity), 999); // Ensure quantity is between 0 and 999

    setItemQuantities({ ...itemQuantities, [itemId]: limitedQuantity });
  };

  const handleDecrement = (itemId) => {
    const currentQuantity = itemQuantities[itemId] || 0;
    const newQuantity = Math.max(0, currentQuantity - 1);
    handleChangeQuantity(itemId, newQuantity);
  };

  const handleIncrement = (itemId) => {
    const currentQuantity = itemQuantities[itemId] || 0;
    const newQuantity = currentQuantity + 1;
    handleChangeQuantity(itemId, newQuantity);
  };

  if (isLoading) {
    return <div className="loading">Loading items...</div>;
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }

  const addToCartHandler = (item) => {
    const quantity = itemQuantities[item.id] || 0;
    if (quantity > 0) {
      if (quantity > 999) {
        alert("Warehouse limit exceeded! Maximum quantity is 999.");
      } else {
        addToCart({ ...item, quantity }); // Pass item with quantity to context
      }
    } else {
      alert("Please select a quantity before adding to cart.");
    }
  };

  return (
    <div id="shop-container">
      {items.map((item) => (
        <div className="shop-item" key={item.id}>
          <img src={item.image} alt={item.title} />
          <div className="shop-item-details">
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <div className="quantity-control">
              <button onClick={() => handleDecrement(item.id)}>-</button>
              <input
                type="number"
                min={0}
                value={itemQuantities[item.id] || 0} // Default to 0 if no quantity set
                onChange={(e) =>
                  handleChangeQuantity(item.id, parseInt(e.target.value))
                }
              />
              <button onClick={() => handleIncrement(item.id)}>+</button>
            </div>
            <button onClick={() => addToCartHandler(item)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Shop;
