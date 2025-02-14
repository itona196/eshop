"use client";

import React from "react";
import { useWishlist } from "@/components/ui/wishlistProvider";
import { useCart } from "@/components/cartProvider";
import { showToast } from "@/utils/toastUtils";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

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

  const handleAction = async (action, message, confirmTitle, confirmText, confirmButton) => {
    if (await confirmAction(confirmTitle, confirmText, confirmButton)) {
      action();
      showToast(message);
    }
  };

  // ✅ Modal de choix de taille
  const selectSize = async () => {
    const { value: size } = await MySwal.fire({
      title: "Choisir une taille",
      input: "select",
      inputOptions: {
        S: "S",
        M: "M",
        L: "L",
        XL: "XL",
      },
      inputPlaceholder: "Sélectionnez une taille",
      showCancelButton: true,
      confirmButtonText: "Confirmer",
      cancelButtonText: "Annuler",
      customClass: {
        popup: "bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 text-black",
      },
    });
    return size;
  };

  const moveToCart = async (item) => {
    const size = await selectSize();
    if (!size) {
      showToast("⚠️ Taille non sélectionnée !");
      return;
    }

    handleAction(
      () => {
        addToCart({ ...item, size });
        removeFromWishlist(item.id);
        showToast(`✅ ${item.title} (Taille: ${size}) ajouté au panier et retiré de la wishlist!`);
      },
      `${item.title} ajouté au panier!`,
      "Ajouter au panier ?",
      `Voulez-vous ajouter "${item.title}" (Taille: ${size}) au panier ?`,
      "Oui, ajouter"
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 p-6 text-black">
      <h1 className="text-4xl font-extrabold mb-6 text-center">Ma Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <p className="text-center text-lg font-medium">Votre wishlist est vide.</p>
      ) : (
        <div className="max-w-4xl mx-auto grid gap-6">
          {wishlistItems.map((item) => (
            <div key={item.id} className="flex justify-between p-4 rounded-xl shadow-md bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100">
              <div className="flex items-center gap-4">
                <img src={item.imgSource} alt={item.title} className="w-20 h-20 rounded-lg" />
                <div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="font-bold text-blue-600">CHF {item.price}</p>
                  
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => moveToCart(item)}
                  className="bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 hover:bg-green-600 text-black border border-black px-3 py-1 rounded-lg"
                >
                  🛒 Ajouter au Panier
                </button>
                <button
                  onClick={() =>
                    handleAction(
                      () => {
                        removeFromWishlist(item.id);
                        showToast(`❌ ${item.title} retiré.`);
                      },
                      `${item.title} retiré.`,
                      "Supprimer ?",
                      `Voulez-vous retirer "${item.title}" ?`,
                      "Oui, retirer"
                    )
                  }
                  className="text-red-500 hover:text-red-700 text-xl"
                >
                  ❌
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
