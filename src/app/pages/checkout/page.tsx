"use client";

import React, { useState, useEffect } from "react";
import { useCart } from "@/components/cartProvider";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PayPalScriptProvider, PayPalButtons, FUNDING } from "@paypal/react-paypal-js";
import { FaShippingFast } from "react-icons/fa";

function Checkout() {
  const { cartItems, updateQuantity, removeItem, clearCart } = useCart();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [step, setStep] = useState(1);
  const [address, setAddress] = useState({ name: "", street: "", city: "", zip: "", country: "" });
  const [deliveryMethod, setDeliveryMethod] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
      setIsLoggedIn(!!storedUser);
    }
  }, []);

  const handleNextStep = () => {
    if (step === 1 && !isLoggedIn) {
      router.push("/login");
      return;
    }
    if (step === 2 && (!address.name || !address.street || !address.city || !address.zip || !address.country)) {
      toast.error("Veuillez remplir toutes les informations d'adresse.");
      return;
    }
    if (step === 3 && !deliveryMethod) {
      toast.error("Veuillez choisir un mode de livraison.");
      return;
    }
    setStep(step + 1);
  };

  const handlePayment = () => {
    setShowPayment(true);
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen p-8 flex flex-col items-center">
        <h1 className="text-5xl font-extrabold mb-8 text-center text-gray-900">Votre Panier</h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-lg text-gray-700">Votre panier est vide.</p>
        ) : (
          <div className="w-full max-w-4xl bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 p-8 rounded-xl shadow-2xl ">
            {step === 1 && (
              <div className="text-center">
                {!isLoggedIn && (
                  <>
                    <p className="mb-6 text-gray-700 text-lg">Veuillez vous connecter ou continuer en tant qu'invité.</p>
                    <button onClick={() => router.push("loginn")} className="btn-primary mb-3 w-full">Se connecter</button>
                    <button onClick={() => setStep(2)} className="btn-secondary w-full">Continuer en tant qu'invité</button>
                  </>
                )}
                {isLoggedIn && <button onClick={handleNextStep} className="btn-primary w-full">Suivant</button>}
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900">Adresse de livraison et facturation</h2>
                <input className="input-field" type="text" placeholder="Nom complet" onChange={(e) => setAddress({ ...address, name: e.target.value })} />
                <input className="input-field" type="text" placeholder="Rue" onChange={(e) => setAddress({ ...address, street: e.target.value })} />
                <input className="input-field" type="text" placeholder="Ville" onChange={(e) => setAddress({ ...address, city: e.target.value })} />
                <input className="input-field" type="text" placeholder="Code postal" onChange={(e) => setAddress({ ...address, zip: e.target.value })} />
                <input className="input-field" type="text" placeholder="Pays" onChange={(e) => setAddress({ ...address, country: e.target.value })} />
                <button onClick={handleNextStep} className="btn-primary w-full">Suivant</button>
              </div>
            )}

            {step === 3 && (
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-gray-900">Choisissez un mode de livraison</h2>
                <div className="flex justify-center gap-6 mt-6">
                  <button onClick={() => setDeliveryMethod("Poste")} className="btn-secondary">📮 Poste</button>
                  <button onClick={() => setDeliveryMethod("UPS")} className="btn-secondary">🚚 UPS</button>
                  <button onClick={() => setDeliveryMethod("DPD")} className="btn-secondary">📦 DPD</button>
                </div>
                <button onClick={handleNextStep} className="btn-primary w-full mt-6">Suivant</button>
              </div>
            )}

            {step === 4 && (
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-gray-900">Résumé de la commande</h2>
                <p className="text-gray-700 text-lg">Adresse: {address.street}, {address.city}, {address.zip}, {address.country}</p>
                <p className="text-gray-700 text-lg">Mode de livraison: {deliveryMethod}</p>
                <p className="text-gray-900 font-bold text-xl">Total: CHF {total}</p>
                <button onClick={handlePayment} className="btn-primary w-full mt-6">Payer maintenant</button>
              </div>
            )}

            {showPayment && (
              <div className="mt-8">
                <PayPalScriptProvider options={{ "client-id": "test", currency: "CHF" }}>
                  <PayPalButtons fundingSource={FUNDING.PAYPAL} />
                  <PayPalButtons fundingSource={FUNDING.CARD} />
                </PayPalScriptProvider>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Checkout;
