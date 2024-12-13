"use client";
import Link from "next/link";
import { AlignCenter, User, Search } from "lucide-react";
import { useState, useRef } from "react";

interface NavbarProps {
  children?: React.ReactNode;
}

function Navbar({ children }: NavbarProps) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div>
    
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-64 bg-bleu text-black transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <button
          onClick={toggleSidebar}
          className="p-4 text-noir hover:text-blanc"
        >
          
        </button>
        {/* Sidebar links */}
        <nav className="p-4 space-y-4">
          <Link href="/" className="block py-2 px-4 text-noir hover:text-blanc cursor-pointer">
            Accueil
          </Link>
          <Link href="/pages/products" className="block py-2 px-4 ttext-noir hover:text-blanc cursor-pointer">
            Produits
          </Link>
          <Link href="/pages/cart" className="block py-2 px-4 ttext-noir hover:text-blanc cursor-pointer">
            Panier
          </Link>
          <Link href="/pages/login" className="block py-2 px-4 text-noir hover:text-blanc cursor-pointer">
            Connexion
          </Link>
        </nav>
      </div>

      {/* Backdrop */}
      <div
        ref={backdropRef}
        className={`fixed inset-0 bg-black bg-opacity-50 ${
          isSidebarOpen ? "block" : "hidden"
        } z-40`}
        onClick={toggleSidebar}
      ></div>

      {/* Navbar */}
      <div className="bg-bleu w-full h-28 flex justify-between items-center px-4">
        <button onClick={toggleSidebar}>
          <AlignCenter className="w-8 h-8 text-noir hover:text-white cursor-pointer" />
        </button>
        <div className="relative w-1/2 max-w-lg">
          {children}
          <input
            type="text"
            placeholder="Rechercher un produit..."
            className="w-full px-4 py-2 text-noir border border-noir rounded-lg focus:outline-none focus:ring-2 focus:ring-noir"
          />
          <button className="absolute top-1/2 right-3 transform -translate-y-1/2 text-noir hover:text-noir">
            <Search />
          </button>
        </div>
        <Link href="/pages/login">
          <User className="w-8 h-8 text-noir hover:text-white cursor-pointer" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
