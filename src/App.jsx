import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { CartProvider } from "./components/CartContext";

function App() {
  return (
    <CartProvider>
      <>
        <Navbar />
        <Outlet />
      </>
    </CartProvider>
  );
}

export default App;
