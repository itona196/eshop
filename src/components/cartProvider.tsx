"use client";

import { createContext, useContext, useState, ReactNode } from "react";

const CartContext = createContext(null);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item) => setCartItems((prev) => [...prev, { ...item, quantity: 1 }]);
  const removeItem = (id) => setCartItems((prev) => prev.filter((item) => item.id !== id));
  const updateQuantity = (id, quantity) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };
  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
