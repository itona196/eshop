import Navbar from "@/components/ui/navbar";
import "./globals.css"
import NavbarFooter from "@/components/ui/navbarFooter"
import { useState } from "react";




export default function RootLayout({ children }: { children: React.ReactNode }) {



  return (
    
  
    <html lang="en">
      
     
      
      <body className="bg-blanc">
         
      <header className="fixed top-0 w-full z-10">
    <Navbar />
  </header>
        
  <main className="flex min-h-screen flex-col">
  {children}
</main>
  

  <footer className="fixed bottom-0 w-full z-10">
    <NavbarFooter />
  </footer>
        
      </body>
      
     
    </html>
    
  );
}
