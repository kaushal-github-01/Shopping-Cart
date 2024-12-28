import { Outlet } from "react-router-dom"; //Import outlet

import "./App.css";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* Outlet renders the child route */}
    </>
  );
}

export default App;
