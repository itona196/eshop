"use client";
import Link from "next/link";
import { AlignCenter, User, ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/components/cartProvider";
import { useWishlist } from "./wishlistProvider";

function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();

  const totalCartItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalWishlistItems = wishlistItems.length;

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const toggleProductsSubMenu = () => {
    setIsProductsOpen((prev) => !prev);
  };

  return (
    <div>
      <div
        className={`fixed top-0 left-0 h-full w-48 bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 p-6 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50 shadow-lg`}>
    
        <div className="p-4 flex justify-between items-center">
          <h2 className="text-lg font-extrabold">Menu</h2>
          <button
            onClick={toggleSidebar}
            className="text-gray-700 hover:text-black">
            ✖
          </button>
        </div>

        <nav className="flex flex-col space-y-6 mt-6 px-4">
          <Link
            href="/"
            className="py-2 px-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            onClick={toggleSidebar}
          >
            Accueil
          </Link>

          <div className="flex flex-col">
            <button
              onClick={toggleProductsSubMenu}
              className="py-2 px-3 rounded-lg text-left font-semibold text-gray-800 hover:bg-gray-100 transition"
            >
              Produits
            </button>

            {isProductsOpen && (
              <div className="ml-4 flex flex-col space-y-2 mt-2">
                <Link
                  href="/pages/products"
                  className="block py-1 px-3 rounded-lg text-gray-800 hover:bg-gray-100 transition"
                  onClick={() => {
                    toggleSidebar();
                    setIsProductsOpen(false);
                  }}
                >
                  Homme
                </Link>
                <Link
                  href="/pages/productsWomen"
                  className="block py-1 px-3 rounded-lg text-gray-800 hover:bg-gray-100 transition"
                  onClick={() => {
                    toggleSidebar();
                    setIsProductsOpen(false);
                  }}
                >
                  Femme
                </Link>
                <Link
                  href="/pages/productsKid"
                  className="block py-1 px-3 rounded-lg text-gray-800 hover:bg-gray-100 transition"
                  onClick={() => {
                    toggleSidebar();
                    setIsProductsOpen(false);
                  }}
                >
                  Enfant
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/pages/cart"
            className="py-2 px-3 rounded-lg text-gray-800 font-semibold hover:bg-gray-100 transition"
            onClick={toggleSidebar}
          >
            Panier
          </Link>
          <Link
            href="/pages/wishlist"
            className="py-2 px-3 rounded-lg text-gray-800 font-semibold hover:bg-gray-100 transition"
            onClick={toggleSidebar}
          >
            Liste de souhaits
          </Link>
          <Link
            href="/pages/login"
            className="py-2 px-3 rounded-lg text-gray-800 font-semibold hover:bg-gray-100 transition"
            onClick={toggleSidebar}
          >
            Mon compte
          </Link>
        </nav>
      </div>

      <div className="bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 w-full h-16 grid grid-cols-3 items-center px-4 shadow-md fixed top-0 left-0 z-40">
        <div className="flex items-center">
          <button onClick={toggleSidebar} className="text-gray-700 hover:text-black">
            <AlignCenter className="w-5 h-5" />
          </button>
        </div>

        <div className="flex justify-center items-center">
          <Link
            href="/"
            className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:scale-105 transform transition duration-300"
          >
            Loop
          </Link>
        </div>
        
        <div className="flex justify-end space-x-4 items-center">
          <Link href="/pages/cart" className="relative">
            <ShoppingCart className="w-5 h-5 text-gray-700 hover:text-black" />
            {totalCartItems > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                {totalCartItems}
              </span>
            )}
          </Link>
          <Link href="/pages/wishlist" className="relative">
            <Heart className="w-5 h-5 text-gray-700 hover:text-black" />
            {totalWishlistItems > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                {totalWishlistItems}
              </span>
            )}
          </Link>
          <Link href="/pages/login">
            <User className="w-5 h-5 text-gray-700 hover:text-black" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
