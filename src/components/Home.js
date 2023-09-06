import React from "react";
import Header from "./Header";
import Products from "./Products/Products";
import Footer from "./Footer";

export default function Home({ cartItems, setCartItems }) {
  return (
    <div>
      <Header />
      <Products cartItems={cartItems} setCartItems={setCartItems} />
      <Footer/>
    </div>
  );
}
