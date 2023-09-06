import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { toast } from "react-hot-toast";

export default function Cart({ setCartItems, cartItems }) {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [cartLength, setCartLength] = useState(0);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setItems(storedItems);
    calculateTotal(storedItems);
    setCartLength(storedItems.length);
  }, []);

  const updateCartItem = (index, newItem) => {
    const updatedItems = [...items];
    updatedItems[index] = newItem;
    setItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
    calculateTotal(updatedItems);
    setCartLength(updatedItems.length);
  };

  const removeCartItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
    calculateTotal(updatedItems);
    setCartLength(updatedItems.length);

    toast.success(`Fish Removed to Cart`, {
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

  const calculateTotal = (cart) => {
    const totalPrice = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setTotal(totalPrice);
  };

  return (
    <div className="w-full min-h-screen max-h-auto py-5 bg  grid grid-cols-1 md:grid-cols-2">
      <div className="flex justify-center">
        <div className="w-11/12 sm:w-9/12 ">
          <div className="text-center w-full">
            <h1 className="text-2xl my-4">Your Cart</h1>
          </div>
          {items && items.length > 0 ? (
            items.map((item, index) => (
              <CartItem
                key={index}
                item={item}
                index={index}
                updateCartItem={updateCartItem}
                removeCartItem={removeCartItem}
              />
            ))
          ) : (
            <p className="text-center my-5">Your cart is Empty</p>
          )}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-6/12">
          <div className="text-black font-semibold">
            <h4 className="text-xl my-3">Order Summary</h4>
            <hr />
            <div>
              <div className="my-4">
                <p className="my-2">
                  Subtotal: <span className="text-md">{cartLength} items</span>
                </p>
                <p>
                  Est. total: <span className="">$ {total.toFixed(2)}</span>
                </p>
              </div>
              <hr />
              <button
                id="checkout_btn"
                className="text-center w-full glass p-2 rounded-md my-5 text-black"
              >
                Check out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
