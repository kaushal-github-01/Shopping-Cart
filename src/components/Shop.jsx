import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Shop.css";

function Shop() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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
          <img src={item.image} alt={item.title} />{" "}
          {/* Use item.title for alt text */}
          <div className="item-details">
            <h3>{item.title}</h3> {/* Use item.title */}
            <p>{item.description}</p>
            <p>${item.price}</p> {/* Display price */}
            <button>Buy Now</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Shop;
