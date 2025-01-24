"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@/components/ui/button";

function Cart() {
  const cartItems = [
    {
      id: 1,
      title: "Cheetah Torn Denim (Coal)",
      price: 100.0,
      size: "30x30",
      quantity: 1,
      imgSource: "/tshirt-blanc.png", // Remplace avec ton image
    },
  ];

  const handleClearCart = () => {
    toast.error("Le panier a été vidé.", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };

  const handleCheckout = () => {
    toast.success("Redirection vers la caisse.", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };

  const updateQuantity = (id, newQuantity) => {
    console.log(`Produit ${id} mis à jour à ${newQuantity}`);
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">YOUR CART</h1>

      <div className="w-full flex justify-between border-b border-gray-700 pb-4 mb-6">
        <p className="text-sm uppercase text-gray-400">Product</p>
        <p className="text-sm uppercase text-gray-400">Quantity</p>
        <p className="text-sm uppercase text-gray-400">Total</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between bg-gray-800 p-4 rounded-md">
            <div className="flex items-center gap-4">
              <img
                src={item.imgSource}
                alt={item.title}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-400">CHF {item.price.toFixed(2)}</p>
                <p className="text-sm text-gray-400">Size: {item.size}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-gray-600 rounded-md">
                <button
                  className="px-4 py-2 text-white bg-gray-700"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span className="px-4 py-2 text-white">{item.quantity}</span>
                <button
                  className="px-4 py-2 text-white bg-gray-700"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <button className="text-red-500 hover:underline">🗑️</button>
              <p className="text-lg font-semibold text-white">CHF {(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-gray-900 p-6 rounded-md flex flex-col gap-4">
        <div className="flex justify-between text-lg">
          <p className="font-semibold">Estimated Total</p>
          <p className="font-semibold">CHF 100.00</p>
        </div>
        <p className="text-sm text-gray-400">Taxes, discounts, and shipping calculated at checkout.</p>

        <Button
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded"
          onClick={handleClearCart}
        >
          Clear Cart
        </Button>
        <Button
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded"
          onClick={handleCheckout}
        >
          Checkout
        </Button>

        <div className="flex justify-between gap-4">
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded">
            Shop Pay
          </button>
          <button className="w-full bg-gray-600 hover:bg-gray-700 text-white py-3 rounded">
            G Pay
          </button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Cart;
