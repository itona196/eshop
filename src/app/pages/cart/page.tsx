"use client";

import React from "react";
import { useCart } from "@/components/cartProvider";
import { useRouter } from "next/navigation";
import { showToast } from "@/utils/toastUtils"; // ✅ Import des notifications centralisées
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function Cart() {
  const { cartItems, updateQuantity, removeItem, clearCart } = useCart();
  const router = useRouter();

  // ✅ Fonction simple de confirmation avec SweetAlert
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
        popup: "bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 text-black",
      },
    });
    return result.isConfirmed;
  };

  // ✅ Action avec confirmation et toast
  const handleAction = async (
    action: () => void,
    message: string,
    confirmTitle: string,
    confirmText: string,
    confirmButton: string
  ) => {
    if (await confirmAction(confirmTitle, confirmText, confirmButton)) {
      action();
      showToast(message, "success");
    }
  };

  // ✅ Gestion de la diminution de quantité
  const decreaseQuantity = async (id: string, size: string, quantity: number, title: string) => {
    if (quantity > 1) {
      updateQuantity(id, size, quantity - 1);
      showToast(`Quantité de "${title}" mise à jour.`, "info");
    } else {
      handleAction(
        () => removeItem(id, size),
        `"${title}" retiré du panier.`,
        "Supprimer cet article ?",
        `Voulez-vous vraiment supprimer "${title}" ?`,
        "Oui, supprimer"
      );
    }
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 p-6 text-black">
      <h1 className="text-4xl font-extrabold mb-6 text-center">Panier</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-lg font-medium">Votre panier est vide.</p>
      ) : (
        <div className="max-w-4xl mx-auto grid gap-6">
          {cartItems.map((item) => (
            <div
              key={`${item.id}-${item.size}`}
              className="flex justify-between p-4 rounded-xl shadow-md items-center bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100"
            >
              <div className="flex items-center gap-4">
                <img src={item.imgSource} alt={item.title} className="w-20 h-20 rounded-lg" />
                <div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-sm">Taille : {item.size}</p>
                  <p className="font-bold">CHF {item.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => decreaseQuantity(item.id, item.size, item.quantity, item.title)}
                  className="bg-gray-300 hover:bg-gray-400 text-black px-3 py-1 rounded-lg"
                >
                  -
                </button>
                <span className="text-lg font-semibold">{item.quantity}</span>
                <button
                  onClick={() => {
                    updateQuantity(item.id, item.size, item.quantity + 1);
                    showToast(`Quantité de "${item.title}" augmentée.`, "info");
                  }}
                  className="bg-gray-300 hover:bg-gray-400 text-black px-3 py-1 rounded-lg"
                >
                  +
                </button>
                <button
                  onClick={() =>
                    handleAction(
                      () => removeItem(item.id, item.size),
                      `"${item.title}" retiré.`,
                      "Supprimer ?",
                      `Voulez-vous supprimer "${item.title}" ?`,
                      "Oui, supprimer"
                    )
                  }
                  className="text-xl"
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
          <p className="text-2xl font-bold">Total : CHF {total}</p>
          <button
            onClick={() =>
              handleAction(
                clearCart,
                "Panier vidé.",
                "Vider le panier ?",
                "Voulez-vous vraiment tout supprimer ?",
                "Oui, vider"
              )
            }
            className="mt-4 bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600"
          >
            🗑️ Vider le panier
          </button>

          <button
            onClick={() => {
              router.push("/checkout");
              showToast("Redirection vers le paiement...", "info");
            }}
            className="mt-4 ml-4 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700"
          >
            ✅ Commander
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
