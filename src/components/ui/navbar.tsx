"use client";
import Link from "next/link";
import { AlignCenter, User, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/components/cartProvider";

function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { cartItems } = useCart();

  // Calcul du nombre total d'articles dans le panier
  const totalCartItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-48 bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 p-6 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50 shadow-lg`}
      >
        <div className="p-4 flex justify-between items-center">
          <h2 className="text-lg font-extrabold">Menu</h2>
          <button onClick={toggleSidebar} className="text-gray-700 hover:text-black">
            ✖
          </button>
        </div>
        <nav className="flex flex-col space-y-6 mt-6 px-4">
          <Link href="/" className="py-2 px-3 rounded-lg font-semibold hover:bg-gray-100 transition" onClick={toggleSidebar}>
            Accueil
          </Link>
          <Link href="/pages/products" className="py-2 px-3 rounded-lg text-gray-800 font-semibold hover:bg-gray-100 transition" onClick={toggleSidebar}>
            Produits
          </Link>
          <Link href="/pages/cart" className="py-2 px-3 rounded-lg text-gray-800 font-semibold hover:bg-gray-100 transition" onClick={toggleSidebar}>
            Panier
          </Link>
          <Link href="/pages/wishlist" className="py-2 px-3 rounded-lg text-gray-800 font-semibold hover:bg-gray-100 transition" onClick={toggleSidebar}>
            Liste de souhaits
          </Link>
          <Link href="/pages/login" className="py-2 px-3 rounded-lg text-gray-800 font-semibold hover:bg-gray-100 transition" onClick={toggleSidebar}>
            Mon compte
          </Link>
        </nav>
      </div>

      <div className="bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 p-6 w-full h-16 flex justify-between items-center px-6 shadow-md fixed top-0 left-0 z-40">
        
        {/* Bouton sidebar */}
        <button onClick={toggleSidebar} className="text-gray-700 hover:text-black">
          <AlignCenter className="w-6 h-6" />
        </button>

        {/* Logo */}
        <div className="flex items-center justify-center h-16">
          <Link href="/" className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:scale-105 transform transition duration-300">
            Loop
          </Link>
        </div>

        {/* Icônes à droite */}
        <div className="flex space-x-4 items-center">

          {/* Icône du panier avec le nombre dynamique d'articles */}
          <Link href="/pages/cart" className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-black" />
            {totalCartItems > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalCartItems}
              </span>
            )}
          </Link>

          {/* Icône utilisateur */}
          <Link href="/pages/login">
            <User className="w-6 h-6 text-gray-700 hover:text-black" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
