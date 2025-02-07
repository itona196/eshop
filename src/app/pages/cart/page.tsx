"use client";

import React, { useState } from "react";
import { useCart } from "@/components/cartProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// PayPal
import {
  PayPalScriptProvider,
  PayPalButtons,
  FUNDING,
} from "@paypal/react-paypal-js";

// Importation de l'icône FontAwesome
import { FaShoppingBag } from "react-icons/fa";

const MySwal = withReactContent(Swal);

function Cart() {
  const { cartItems, updateQuantity, removeItem, clearCart } = useCart();
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);

  // Confirmation pour vider le panier
  const handleClearCart = async () => {
    const result = await MySwal.fire({
      title: "Vider le panier ?",
      text: "Êtes-vous sûr de vouloir supprimer tous les articles de votre panier ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Oui, vider",
      cancelButtonText: "Annuler",
      customClass: {
        popup: "bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100",
      },
    });

    if (result.isConfirmed) {
      clearCart();
      toast.error("Le panier a été vidé.", {
        position: "bottom-center",
        autoClose: 3000,
      });
    }
  };

  // Confirmation pour supprimer un article
  const handleRemoveItem = async (id: string, size: string, title: string) => {
    const result = await MySwal.fire({
      title: "Supprimer cet article ?",
      text: `Voulez-vous vraiment supprimer "${title}" de votre panier ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Oui, supprimer",
      cancelButtonText: "Annuler",
      customClass: {
        popup: "bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100",
      },
    });

    if (result.isConfirmed) {
      removeItem(id, size);
      toast.info(`"${title}" a été supprimé du panier.`, {
        position: "bottom-center",
        autoClose: 2000,
      });
    }
  };

  // Baisse la quantité (ou supprime si on arrive à 0)
  const handleDecreaseQuantity = async (
    id: string,
    size: string,
    quantity: number,
    title: string
  ) => {
    if (quantity > 1) {
      updateQuantity(id, size, quantity - 1);
    } else {
      await handleRemoveItem(id, size, title);
    }
  };

  // Calcul du total
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Afficher / masquer la section paiement
  const handleTogglePaymentOptions = () => {
    setShowPaymentOptions((prev) => !prev);
  };

  return (
    <>
      <ToastContainer />

      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-6">
        {/* Icône Panier avec FontAwesome */}
        <h1 className="text-4xl font-extrabold mb-6 text-gray-900 text-center flex items-center justify-center gap-3">
        Votre Panier
        </h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-700 text-lg font-medium">Votre panier est vide.</p>
        ) : (
          <div className="grid gap-6 max-w-4xl mx-auto">
            {cartItems.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="flex justify-between bg-white p-4 rounded-xl shadow-md items-center"
              >
                <div className="flex items-center gap-4">
                  <img src={item.imgSource} alt={item.title} className="w-20 h-20 rounded-lg shadow-md" />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">{item.title}</h2>
                    <p className="text-sm text-gray-600">Taille : {item.size}</p>
                    <p className="text-md font-bold text-gray-900">CHF {item.price}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleDecreaseQuantity(item.id, item.size, item.quantity, item.title)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-3 py-1 rounded-lg"
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-3 py-1 rounded-lg"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemoveItem(item.id, item.size, item.title)}
                    className="text-red-500 hover:text-red-700 text-xl"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {cartItems.length > 0 && (
          <div className="mt-8 text-center">
            <p className="text-2xl font-bold text-gray-900">
              Total: <span className="text-blue-600">CHF {totalPrice.toFixed(2)}</span>
            </p>
            <button
              onClick={handleClearCart}
              className="mt-4 bg-red-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-red-600 transition-all"
            >
              Vider le panier
            </button>

            {/* Section de paiement */}
            <div className="mt-6">
              <button
                onClick={handleTogglePaymentOptions}
                className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all"
              >
                🛍️ Payer maintenant
              </button>
            </div>

            {showPaymentOptions && (
              <div className="mt-6 flex flex-col items-center gap-4 animate-fade-in">
                <PayPalScriptProvider
                  options={{
                    "client-id": "test", // simulation
                    currency: "CHF",
                  }}
                >
                  {/* Bouton PayPal */}
                  <div className="w-[350px] max-w-[90%]">
                    <PayPalButtons fundingSource={FUNDING.PAYPAL} />
                  </div>

                  {/* Bouton CB */}
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
