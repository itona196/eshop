"use client";

import React from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "./ui/button";

function Cart() {
  const cartItems = [
    {
      id: 1,
      title: "Cheetah Torn Denim (Coal)",
      price: 100.0,
      size: "30x30",
      quantity: 1,
      imgSource: "https://via.placeholder.com/100", // Remplace avec ton image
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
    // Logique pour mettre à jour la quantité
    console.log(`Produit ${id} mis à jour à ${newQuantity}`);
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="grid grid-cols-1 gap-6">
        {cartItems.map((item) => (
          <Card key={item.id} className="flex items-center justify-between p-4 bg-gray-800">
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
              <div className="flex items-center gap-2">
                <button
                  className="px-2 py-1 bg-gray-700 text-white rounded"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="px-2 py-1 bg-gray-700 text-white rounded"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <button className="text-red-500 hover:underline">🗑️</button>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-6 bg-gray-900 p-6 rounded-md">
        <h2 className="text-xl font-bold mb-4">Estimated Total</h2>
        <p className="text-lg font-semibold">CHF 100.00</p>
        <p className="text-sm text-gray-400">
          Taxes, discounts, and shipping calculated at checkout.
        </p>

        <div className="mt-6 flex flex-col gap-4">
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
      </div>

      <ToastContainer />
    </div>
  );
}

export default Cart;
