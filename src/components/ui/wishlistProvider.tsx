"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface WishlistItem {
  id: string;
  title: string;
  imgSource: string;
  price: number;
  size?: string;
}

interface WishlistContextType {
  wishlistItems: WishlistItem[];
  addToWishlist: (item: Omit<WishlistItem, "id">) => void;
  removeFromWishlist: (id: string) => void;
  clearWishlist: () => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist doit être utilisé avec WishlistProvider.");
  }
  return context;
}

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);

  // Chargement initial depuis localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("wishlist");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setWishlistItems(parsed);
        }
      }
    } catch (error) {
      console.error("Erreur lors du chargement de la wishlist :", error);
    }
  }, []);

  // Sauvegarde automatique dans localStorage
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToWishlist = (item: Omit<WishlistItem, "id">) => {
    setWishlistItems((prev) => {
      const exists = prev.some(
        (p) => p.title === item.title && p.size === item.size
      );
      if (exists) return prev;

      const newItem = {
        ...item,
        id: `${item.title}-${item.size || "default"}`,
      };
      return [...prev, newItem];
    });
  };

  const removeFromWishlist = (id: string) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearWishlist = () => {
    setWishlistItems([]);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
