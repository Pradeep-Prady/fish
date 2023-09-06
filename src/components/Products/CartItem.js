import React from "react";

export default function CartItem({
  item,
  index,
  updateCartItem,
  removeCartItem,
}) {
  const incrementQuantity = () => {
    updateCartItem(index, { ...item, quantity: item.quantity + 1 });
  };

  const decrementQuantity = () => {
    if (item.quantity > 1) {
      updateCartItem(index, { ...item, quantity: item.quantity - 1 });
    }
  };

  return (
    <div className="flex items-center justify-evenly glass my-5">
      <div className="">
        <img src={item.image} alt="fish_image" className="w-16 sm:w-24 p-2" />
      </div>
      <div className="flex gap-2 sm:gap-3">
        <p>{item.name}</p>
        <p>$ {(item.price * item.quantity).toFixed(2)}</p>
      </div>
      <div className="flex gap-2 sm:gap-5">
        <button onClick={incrementQuantity}>
          <i className="fa-solid fa-plus glass p-1 sm:p-3"></i>
        </button>
        <p className="p-1 sm:p-2 font-bold">{item.quantity}</p>
        <button onClick={decrementQuantity}>
          <i className="fa-solid fa-minus glass p-1 sm:p-3"></i>
        </button>
      </div>
      <div>
        <button onClick={() => removeCartItem(index)}>
          <i className="fa-solid fa-trash glass p-1 sm:p-3 text-red-600"></i>
        </button>
      </div>
    </div>
  );
}
