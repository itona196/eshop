"use client"
import Navbar from "@/components/ui/navbar";
import "./globals.css";
import NavbarFooter from "@/components/ui/navbarFooter";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white flex flex-col">
        <header className="fixed top-0 w-full h-16">
          <Navbar />
        </header>

      
        <main className="mt-12">
          {children}
        </main>

        <footer className="w-full">
          <NavbarFooter />
        </footer>
      </body>
    </html>
  );
}
