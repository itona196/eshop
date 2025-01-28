"use client";

import React from "react";
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
      imgSource: "/tshirt-blanc.png",
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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-800 text-center">
        Your Cart
      </h1>

      <div className="w-full flex justify-between border-b border-gray-300 pb-4 mb-6">
        <p className="text-sm uppercase text-gray-600">Product</p>
        <p className="text-sm uppercase text-gray-600">Quantity</p>
        <p className="text-sm uppercase text-gray-600">Total</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-md shadow-md">
            <div className="flex items-center gap-4">
              <img
                src={item.imgSource}
                alt={item.title}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
                <p className="text-sm text-gray-600">CHF {item.price.toFixed(2)}</p>
                <p className="text-sm text-gray-600">Size: {item.size}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-gray-300 rounded-md">
                <button
                  className="px-4 py-2 text-gray-800 bg-gray-100 hover:bg-gray-200"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span className="px-4 py-2 text-gray-800">{item.quantity}</span>
                <button
                  className="px-4 py-2 text-gray-800 bg-gray-100 hover:bg-gray-200"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <button className="text-red-600 hover:underline">🗑️</button>
              <p className="text-lg font-semibold text-gray-800">CHF {(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <div className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 p-6 rounded-md text-white shadow-lg flex flex-col gap-4">
          <div className="flex justify-between text-lg">
            <p className="font-semibold">Estimated Total</p>
            <p className="font-semibold">CHF 100.00</p>
          </div>
          <p className="text-sm text-gray-200">
            Taxes, discounts, and shipping calculated at checkout.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <Button
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-md shadow-lg"
            onClick={handleClearCart}
          >
            Clear Cart
          </Button>
          <Button
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-md shadow-lg"
            onClick={handleCheckout}
          >
            Checkout
          </Button>

          <div className="flex justify-between gap-4 mt-4">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md shadow-lg">
              Shop Pay
            </button>
            <button className="w-full bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-md shadow-lg">
              G Pay
            </button>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Cart;
