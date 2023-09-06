import React from "react";
import products from "../../data/products.js";
import ProductItem from "./ProductItem";

export default function Products({ setCartItems, cartItems }) {
  return (
    <div className="w-full h-auto bgc p-5 sm:p-10 md:p-20 flex items-center justify-center " >
      <div className="md:w-10/12 justify-center items-center h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {products.map((product) => {
          return (
            <ProductItem
              key={product.id}
              product={product}
              setCartItems={setCartItems}
              cartItems={cartItems}
            />
          );
        })}
      </div>
    </div>
  );
}
