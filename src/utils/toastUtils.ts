"use client";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ✅ Icônes selon le type
const icons: Record<"success" | "info" | "error", string> = {
  success: "✅",
  info: "ℹ️",
  error: "❌",
};

// ✅ Fonction centralisée de notifications
export const showToast = (
  message: string,
  type: "success" | "info" | "error" = "info"
) => {
  console.log("🟢 Toast lancé :", message, type); // ✅ Debug : voir si la fonction est appelée

  if (!toast) {
    console.error("Toastify non chargé !");
    return;
  }

  toast(`${icons[type]} ${message}`, {
    position: "bottom-center",
    autoClose: 2500,
    hideProgressBar: false,
    draggable: true,
    closeOnClick: true,
    pauseOnHover: true,
    style: {
      background: "linear-gradient(to bottom right, #E9D5FF, #BFDBFE, #FBCFE8)",
      color: "black",
      fontSize: "14px",
      fontWeight: "bold",
      borderRadius: "8px",
    },
  });
};
