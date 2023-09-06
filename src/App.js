// App.js
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Cart from "./components/Products/Cart";
import Products from "./components/Products/Products";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";

import { Toaster } from "react-hot-toast";

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedItems);
  }, []);

  return (
    <Router>
      <div className="">
        <Toaster />
        <Routes>
          <Route
            path="/"
            element={<Home cartItems={cartItems} setCartItems={setCartItems} />}
          />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
