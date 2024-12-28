import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Shop.css";

function Shop() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // State for item quantities (map item IDs to quantities)
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
    setItemQuantities({ ...itemQuantities, [itemId]: newQuantity });
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

  return (
    <div id="shop-container">
      {items.map((item) => (
        <div className="shop-item" key={item.id}>
          <img src={item.image} alt={item.title} />
          <div className="item-details">
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
            <button>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Shop;
