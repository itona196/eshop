"use client";

import React, { useState } from "react";
import { useCart } from "@/components/cartProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { PayPalScriptProvider, PayPalButtons, FUNDING } from "@paypal/react-paypal-js";
import { FaShoppingBag } from "react-icons/fa";

const MySwal = withReactContent(Swal);

function Cart() {
  const { cartItems, updateQuantity, removeItem, clearCart } = useCart();
  const [showPayment, setShowPayment] = useState(false);

  const confirmAction = async (title: string, text: string, confirmText: string) => {
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
        popup: "bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100",
      },
    });

    return result.isConfirmed;
  };

  const handleAction = async (action: () => void, message: string, title: string, text: string, confirmText: string) => {
    if (await confirmAction(title, text, confirmText)) {
      action();
      toast.info(message, { position: "bottom-center", autoClose: 2000 });
    }
  };

  const decreaseQuantity = async (id: string, size: string, quantity: number, title: string) => {
    quantity > 1 ? updateQuantity(id, size, quantity - 1) : handleAction(() => removeItem(id, size), `"${title}" retiré du panier.`, "Supprimer cet article ?", `Voulez-vous vraiment supprimer "${title}" ?`, "Oui, supprimer");
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-6">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-900 text-center flex items-center justify-center gap-3">
        Votre Panier
        </h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-700 text-lg font-medium">Votre panier est vide.</p>
        ) : (
          <div className="max-w-4xl mx-auto grid gap-6">
            {cartItems.map((item) => (
              <div key={`${item.id}-${item.size}`} className="flex justify-between bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100- p-4 rounded-xl shadow-md items-center">
                <div className="flex items-center gap-4">
                  <img src={item.imgSource} alt={item.title} className="w-20 h-20 rounded-lg shadow-md" />
                  <div>
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="text-sm text-gray-600">Taille : {item.size}</p>
                    <p className="font-bold text-gray-900">CHF {item.price}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button onClick={() => decreaseQuantity(item.id, item.size, item.quantity, item.title)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-3 py-1 rounded-lg">-</button>
                  <span className="text-lg font-semibold">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-3 py-1 rounded-lg">+</button>
                  <button onClick={() => handleAction(() => removeItem(item.id, item.size), `"${item.title}" retiré.`, "Supprimer ?", `Voulez-vous supprimer "${item.title}" ?`, "Oui, supprimer")} className="text-red-500 hover:text-red-700 text-xl">🗑️</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {cartItems.length > 0 && (
          <div className="mt-8 text-center">
            <p className="text-2xl font-bold">Total: <span className="text-blue-600">CHF {total}</span></p>
            <button onClick={() => handleAction(clearCart, "Panier vidé.", "Vider le panier ?", "Voulez-vous vraiment tout supprimer ?", "Oui, vider")} className="mt-4 bg-red-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-red-600 transition-all">
              Vider le panier
            </button>

            <div className="mt-6">
              <button onClick={() => setShowPayment(!showPayment)} className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all">
                🛍️ Payer maintenant
              </button>
            </div>

            {showPayment && (
              <div className="mt-6 flex flex-col items-center gap-4 animate-fade-in">
                <PayPalScriptProvider options={{ "client-id": "test", currency: "CHF" }}>
                  <div className="w-[350px] max-w-[90%]">
                    <PayPalButtons fundingSource={FUNDING.PAYPAL} />
                  </div>
                  <div className="w-[350px] max-w-[90%]">
                    <PayPalButtons fundingSource={FUNDING.CARD} />
                  </div>
                </PayPalScriptProvider>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
