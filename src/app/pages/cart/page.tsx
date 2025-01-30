"use client";

import React from "react";
import { useCart } from "@/components/cartProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cart() {
  const { cartItems, updateQuantity, removeItem, clearCart } = useCart();

  const handleClearCart = () => {
    clearCart();
    toast.error("Le panier a été vidé.", {
      position: "bottom-center",
      autoClose: 3000,
    });
  };

  const handleRemoveItem = (id, title) => {
    removeItem(id);
    toast.info(`"${title}" a été supprimé du panier.`, {
      position: "bottom-center",
      autoClose: 2000,
    });
  };


  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-800 text-center">Your Cart</h1>
      
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Votre panier est vide.</p>
      ) : (
        <div className="grid gap-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between bg-white p-4 rounded-md shadow-md">
              <div className="flex items-center gap-4">
                <img src={item.imgSource} alt={item.title} className="w-20 h-20 rounded-md" />
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
                  <p className="text-sm text-gray-600">CHF {item.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  className={`px-2 py-1 bg-gray-200 rounded transition-all duration-200 ${
                    item.quantity === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-300"
                  }`}
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded transition-all duration-200"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button
                  className="text-red-600 hover:underline transition-all duration-200"
                  onClick={() => handleRemoveItem(item.id, item.title)}
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="mt-6 text-center">
          <p className="text-lg font-semibold text-gray-800">Total: CHF {totalPrice.toFixed(2)}</p>
          <button
            onClick={handleClearCart}
            className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-all duration-200"
          >
            Vider le panier
          </button>
        </div>
      )}

      <ToastContainer />
    </div>
  );
}

export default Cart;
