import React from "react";
import { toast } from "react-hot-toast";

export default function ProductItem({ product, cartItems, setCartItems }) {
  const addCart = () => {
    const existingProductIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingProductIndex].quantity += 1;
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    } else {
      const newCartItems = [...cartItems, { ...product, quantity: 1 }];
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    }

    toast.success(` ${product.name} Added to Cart`, {
      position: "bottom-center",
      duration: 2000,
      style: {
        border: "1px solid white",
        background: "rgba(255, 255, 255, 0.08)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(10px)",
        color: "black",
      },
    });
  };

  return (
    <article className="glass p-4 rounded-md shadow-md">
      <div className="flex items-center justify-center my-5">
        <img
          src={product.image}
          alt="fish_image"
          className="h-[200px] glass p-1 rounded-md"
        />
      </div>
      <div className="flex items-center">
        <div>
          <p className="font-bold text-lg text-white">{product.name}</p>
          <p className=" text-stone-800">{product.description}</p>
        </div>
      </div>
      <div className="flex items-center justify-between px-5 my-3">
        <p className="text-white font-bold">$ {product.price}</p>
        <button
          onClick={addCart}
          className="glass text-stone-700 py-1 px-3 font-bold rounded-sm hover:cursor-pointer hover:scale-105 transition-all duration-150"
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
}
