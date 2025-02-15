"use client";

import React from "react";
import Navbar from "@/components/ui/navbar";
import NavbarFooter from "@/components/ui/navbarFooter";
import { CartProvider } from "@/components/cartProvider";
import { WishlistProvider } from "@/components/ui/wishlistProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 flex flex-col">
        
        {/* ✅ Ajoute ici `ToastContainer` (GLOBAL) */}
        <ToastContainer
          position="bottom-center"
          autoClose={2500}
          hideProgressBar={false}
          draggable
          pauseOnHover
          theme="light"
        />

        <CartProvider>
          <WishlistProvider>
            <header className="fixed top-0 w-full h-16">
              <Navbar />
            </header>

            <main className="mt-12">{children}</main>

            <footer className="w-full">
              <NavbarFooter />
            </footer>
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
