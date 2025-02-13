"use client";

import React, { useState } from "react";
import { useCart } from "@/components/cartProvider";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function Cart() {
  const { cartItems, updateQuantity, removeItem, clearCart } = useCart();
  const router = useRouter();

  const confirmAction = async (title, text, confirmText) => {
    const result = await MySwal.fire({
      title,
      text,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: confirmText,
      cancelButtonText: "Annuler",
      customClass: {
        popup: "bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 text-black",
      },
    });

    return result.isConfirmed;
  };

  const handleAction = async (action, message, title, text, confirmText) => {
    if (await confirmAction(title, text, confirmText)) {
      action();
      toast.info(message, {
        position: "bottom-center",
        autoClose: 2000,
        style: { background: "linear-gradient(to bottom right, #E9D5FF, #BFDBFE, #FBCFE8)", color: "black" },
        progressStyle: { backgroundColor: "black" },
        icon: "🚀",
      });
    }
  };

  const decreaseQuantity = async (id, size, quantity, title) => {
    quantity > 1 ? updateQuantity(id, size, quantity - 1) : handleAction(() => removeItem(id, size), `"${title}" retiré du panier.`, "Supprimer cet article ?", `Voulez-vous vraiment supprimer "${title}" ?`, "Oui, supprimer");
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 p-6 text-black">
        <h1 className="text-4xl font-extrabold mb-6 text-black text-center flex items-center justify-center gap-3">
          Panier
        </h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-black text-lg font-medium">Votre panier est vide.</p>
        ) : (
          <div className="max-w-4xl mx-auto grid gap-6">
            {cartItems.map((item) => (
              <div key={`${item.id}-${item.size}`} className="flex justify-between bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 p-4 rounded-xl shadow-md items-center text-black">
                <div className="flex items-center gap-4">
                  <img src={item.imgSource} alt={item.title} className="w-20 h-20 rounded-lg shadow-md" />
                  <div>
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="text-sm text-black">Taille : {item.size}</p>
                    <p className="font-bold text-black">CHF {item.price}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button onClick={() => decreaseQuantity(item.id, item.size, item.quantity, item.title)} className="bg-gray-300 hover:bg-gray-400 text-black px-3 py-1 rounded-lg">-</button>
                  <span className="text-lg font-semibold">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)} className="bg-gray-300 hover:bg-gray-400 text-black px-3 py-1 rounded-lg">+</button>
                  <button onClick={() => handleAction(() => removeItem(item.id, item.size), `"${item.title}" retiré.`, "Supprimer ?", `Voulez-vous supprimer "${item.title}" ?`, "Oui, supprimer")} className="text-black text-xl">🗑️</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {cartItems.length > 0 && (
          <div className="mt-8 text-center">
            <p className="text-2xl font-bold">Total: <span className="text-black">CHF {total}</span></p>
            <button onClick={() => handleAction(clearCart, "Panier vidé.", "Vider le panier ?", "Voulez-vous vraiment tout supprimer ?", "Oui, vider")} className="mt-4 bg-red-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-red-600 transition-all">
              Vider le panier
            </button>

            <div className="mt-6">
              <button onClick={() => router.push("/checkout")} className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all">
                Commander
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
