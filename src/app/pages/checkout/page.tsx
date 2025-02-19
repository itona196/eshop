"use client";

import React, { useState, useEffect } from "react";
import { useCart } from "@/components/cartProvider";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  PayPalScriptProvider,
  PayPalButtons,
  FUNDING,
} from "@paypal/react-paypal-js";

function Checkout() {
  const { cartItems } = useCart();
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [step, setStep] = useState(1);

  const [address, setAddress] = useState({
    name: "",
    street: "",
    city: "",
    zip: "",
    country: "",
  });
  const [deliveryMethod, setDeliveryMethod] = useState(null);
  const shippingOptions = [
    {
      id: "poste",
      name: "La Poste",
      cost: 10,
      deliveryTime: "10-14 jours ouvrables",
      icon: "📮",
    },
    {
      id: "ups",
      name: "UPS",
      cost: 15,
      deliveryTime: "5-7 jours ouvrables",
      icon: "🚚",
    },
    {
      id: "dpd",
      name: "DPD",
      cost: 20,
      deliveryTime: "2-4 jours ouvrables",
      icon: "📦",
    },
  ];

  const validateAddress = (addr) => {
    if (
      !addr.name.trim() ||
      !addr.street.trim() ||
      !addr.city.trim() ||
      !addr.zip.trim() ||
      !addr.country.trim()
    ) {
      toast.error("Veuillez remplir toutes les informations d'adresse.");
      return false;
    }
    if (!/^\d+$/.test(addr.zip)) {
      toast.error("Le code postal doit contenir uniquement des chiffres.");
      return false;
    }
    return true;
  };

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
      setIsLoggedIn(!!storedUser);
    }
  }, []);

  const handleNextStep = () => {
    if (step === 1 && !isLoggedIn) {
      router.push("/pages/login?next=/checkout?step=2");
      return;
    }

    if (step === 2) {
      if (!validateAddress(address)) return;
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

  const itemsTotal = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  const shippingCost = deliveryMethod ? deliveryMethod.cost : 0;
  const grandTotal = (parseFloat(itemsTotal) + shippingCost).toFixed(2);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const stepParam = urlParams.get("step");
      if (stepParam) {
        setStep(parseInt(stepParam, 10));
      }
    }
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen py-8 px-4 flex flex-col items-center">
        <div className="flex items-center justify-evenly max-w-md w-full mb-8">
          {["Connexion", "Adresse", "Livraison", "Paiement"].map((label, idx) => {
            const circleStep = idx + 1;
            const isActive = step >= circleStep;
            return (
              <div key={label} className="flex flex-col items-center">
                <div
                  className={`
                    rounded-full w-10 h-10 flex items-center justify-center 
                    transition-colors border border-black 
                    bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100
                  `}
                >
                  {circleStep}
                </div>
                <p
                  className={`mt-2 text-sm ${
                    isActive ? "text-blue-700 font-medium" : "text-gray-500"
                  }`}
                >
                  {label}
                </p>
              </div>
            );
          })}
        </div>

        {cartItems.length === 0 ? (
          <p className="text-center text-lg text-gray-700">
            Votre panier est vide.
          </p>
        ) : (
          <div className="w-full max-w-4xl bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 p-8 rounded-xl shadow-xl">
            {step === 1 && (
              <div className="text-center space-y-6">
                {!isLoggedIn ? (
                  <>
                    <p className="text-gray-700 text-lg">
                      Veuillez vous connecter ou continuer en tant qu'invité.
                    </p>
                    <button
                      onClick={() =>
                        router.push("/pages/login?next=/checkout?step=2")
                      }
                      className="btn-primary w-full"
                    >
                      Se connecter
                    </button>
                    <button
                      onClick={() => setStep(2)}
                      className="btn-secondary w-full"
                    >
                      Continuer en tant qu'invité
                    </button>
                  </>
                ) : (
                  <button onClick={handleNextStep} className="btn-primary w-full">
                    Suivant
                  </button>
                )}
              </div>
            )}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Adresse de livraison et facturation
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    className="input-field bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 border border-black"
                    type="text"
                    placeholder="Nom complet"
                    value={address.name}
                    onChange={(e) =>
                      setAddress({ ...address, name: e.target.value })
                    }
                  />
                  <input
                    className="input-field bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 border border-black"
                    type="text"
                    placeholder="Rue"
                    value={address.street}
                    onChange={(e) =>
                      setAddress({ ...address, street: e.target.value })
                    }
                  />
                  <input
                    className="input-field bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 border border-black"
                    type="text"
                    placeholder="Ville"
                    value={address.city}
                    onChange={(e) =>
                      setAddress({ ...address, city: e.target.value })
                    }
                  />
                  <input
                    className="input-field bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 border border-black"
                    type="text"
                    placeholder="Code postal"
                    value={address.zip}
                    onChange={(e) =>
                      setAddress({ ...address, zip: e.target.value })
                    }
                  />
                  <input
                    className="input-field bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 border border-black"
                    type="text"
                    placeholder="Pays"
                    value={address.country}
                    onChange={(e) =>
                      setAddress({ ...address, country: e.target.value })
                    }
                  />
                </div>
                <div className="flex justify-between">
                  {step > 1 && (
                    <button
                      onClick={handlePreviousStep}
                      className="btn-secondary"
                    >
                      Précédent
                    </button>
                  )}
                  <button onClick={handleNextStep} className="btn-primary">
                    Suivant
                  </button>
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="text-center space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Choisissez un mode de livraison
                </h2>
                <div className="flex justify-center gap-6 flex-wrap">
                  {shippingOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setDeliveryMethod(option)}
                      className={`btn-secondary transition-colors ${
                        deliveryMethod?.id === option.id ? "border border-black" : ""
                      }`}
                    >
                      {option.icon} {option.name} 
                      {" ("}{option.deliveryTime}{") - "}
                      CHF {option.cost}
                    </button>
                  ))}
                </div>
                <div className="flex justify-between">
                  {step > 1 && (
                    <button
                      onClick={handlePreviousStep}
                      className="btn-secondary"
                    >
                      Précédent
                    </button>
                  )}
                  <button onClick={handleNextStep} className="btn-primary">
                    Suivant
                  </button>
                </div>
              </div>
            )}
            {step === 4 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Résumé de la commande
                </h2>

                <div className="bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 p-4 rounded-lg">
                  <p className="text-gray-700 text-sm md:text-base">
                    <span className="font-medium">Adresse:</span>{" "}
                    {address.name}, {address.street}, {address.city}, {address.zip},{" "}
                    {address.country}
                  </p>
                  <p className="text-gray-700 text-sm md:text-base mt-1">
                    <span className="font-medium">Mode de livraison:</span>{" "}
                    {deliveryMethod?.name} ({deliveryMethod?.deliveryTime})
                  </p>
                  <p className="text-gray-700 text-sm md:text-base">
                    <span className="font-medium">Frais de livraison:</span> CHF{" "}
                    {deliveryMethod?.cost}
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full text-left bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100">
                    <thead className="border-b">
                      <tr>
                        <th className="px-4 py-2 text-gray-600">Produit</th>
                        <th className="px-4 py-2 text-gray-600">Quantité</th>
                        <th className="px-4 py-2 text-gray-600">Prix unitaire</th>
                        <th className="px-4 py-2 text-gray-600">Total article</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item, idx) => {
                        const itemTotal = (item.price * item.quantity).toFixed(2);
                        return (
                          <tr className="border-b" key={idx}>
                            <td className="px-4 py-2 text-gray-700">
                              <div className="flex items-center space-x-2">
                                <img
                                  src={item.imgSource}
                                  alt={item.title}
                                  className="w-12 h-12 object-cover border border-gray-300 rounded"
                                />
                                <span>{item.title}</span>
                              </div>
                            </td>
                            <td className="px-4 py-2 text-gray-700">
                              {item.quantity}
                            </td>
                            <td className="px-4 py-2 text-gray-700">
                              CHF {item.price.toFixed(2)}
                            </td>
                            <td className="px-4 py-2 text-gray-700">
                              CHF {itemTotal}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                <div className="text-right space-y-1">
                  <p className="text-gray-800">
                    <strong>Sous-total articles :</strong> CHF {itemsTotal}
                  </p>
                  <p className="text-gray-800">
                    <strong>Frais de livraison :</strong> CHF {shippingCost}
                  </p>
                  <p className="text-gray-900 font-bold text-xl">
                    Total: CHF {grandTotal}
                  </p>
                </div>

                <div className="flex justify-between">
                  {step > 1 && (
                    <button
                      onClick={handlePreviousStep}
                      className="btn-secondary"
                    >
                      Précédent
                    </button>
                  )}
                  <button onClick={handlePayment} className="btn-primary">
                    Payer maintenant
                  </button>
                </div>
                
                {showPayment && (
                  <div className="flex justify-center mt-8">
                    <PayPalScriptProvider
                      options={{
                        "client-id":
                          process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "test",
                        currency: "CHF",
                      }}
                    >
                      <div className="space-y-4">
                        <PayPalButtons
                          fundingSource={FUNDING.PAYPAL}
                          style={{ layout: "vertical" }}
                        />
                        <PayPalButtons
                          fundingSource={FUNDING.CARD}
                          style={{ layout: "vertical" }}
                        />
                      </div>
                    </PayPalScriptProvider>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Checkout;
