"use client";

import React from "react"; 
import Navbar from "@/components/ui/navbar";
import NavbarFooter from "@/components/ui/navbarFooter";
import { CartProvider } from "@/components/cartProvider";
import "./globals.css";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white flex flex-col">
        <CartProvider>
          <header className="fixed top-0 w-full h-16">
            <Navbar />
          </header>

          <main className="mt-12">{children}</main>

          <footer className="w-full">
            <NavbarFooter />
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
