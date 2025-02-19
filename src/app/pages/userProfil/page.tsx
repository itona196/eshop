"use client";

import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/ui/navbar";
import { FiUser, FiSave, FiTrash2, FiArrowLeft } from "react-icons/fi";

export default function UserProfile() {
  const router = useRouter();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    npa: "",
    phone: "",
    address: "",
    city: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedData = JSON.parse(localStorage.getItem("userProfile") || "null");
      if (storedData && typeof storedData === "object") {
        setUserData((prevData) => ({
          ...prevData,
          ...storedData,
        }));
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    localStorage.setItem("userProfile", JSON.stringify(userData));
    toast.success("Informations enregistrées avec succès !", { position: "bottom-center" });
  };

  const handleDelete = () => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer vos informations ?")) {
      localStorage.removeItem("userProfile");
      setUserData({
        firstName: "",
        lastName: "",
        npa: "",
        phone: "",
        address: "",
        city: "",
      });
      toast.success("Informations supprimées avec succès !", { position: "bottom-center" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <ToastContainer />
      <Navbar />
      <main className="flex-grow flex items-center justify-center p-6">
        <Card className="w-full max-w-2xl bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 shadow-xl rounded-xl">
          <CardHeader className="text-center px-6 pt-6">
            <CardTitle className="text-3xl font-bold text-gray-800 flex items-center justify-center gap-2">
              <FiUser /> Mes informations personnelles
            </CardTitle>
            <CardDescription className="text-gray-700 mt-2">
              Gérez et mettez à jour vos coordonnées.
            </CardDescription>
          </CardHeader>

          <CardContent className="px-6 pt-4 pb-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">Prénom</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={userData.firstName}
                  onChange={handleChange}
                  placeholder="Votre prénom"
                />
              </div>

              <div>
                <Label htmlFor="lastName">Nom</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={userData.lastName}
                  onChange={handleChange}
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <Label htmlFor="address">Adresse</Label>
                <Input
                  id="address"
                  name="address"
                  value={userData.address}
                  onChange={handleChange}
                  placeholder="Votre adresse"
                />
              </div>

              <div>
                <Label htmlFor="npa">NPA</Label>
                <Input
                  id="npa"
                  name="npa"
                  value={userData.npa}
                  onChange={handleChange}
                  placeholder="Votre NPA"
                />
              </div>

              <div>
                <Label htmlFor="city">Ville</Label>
                <Input
                  id="city"
                  name="city"
                  value={userData.city}
                  onChange={handleChange}
                  placeholder="Votre ville"
                />
              </div>

              <div>
                <Label htmlFor="phone">Téléphone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={userData.phone}
                  onChange={handleChange}
                  placeholder="Votre numéro de téléphone"
                />
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col md:flex-row gap-3 justify-between px-6 pb-6 mt-4">
            <Button
              onClick={handleSave}
              className="bg-green-500 text-black hover:bg-green-600 transition-colors flex items-center gap-2 border border-black"
            >
              <FiSave />
              Enregistrer
            </Button>
            <Button
              onClick={handleDelete}
              className="bg-red-500 text-black hover:bg-red-600 transition-colors flex items-center gap-2 border border-black"
            >
              <FiTrash2 />
              Supprimer
            </Button>
            <Button
              onClick={() => router.push("/pages/login")}
              className="bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 hover:from-purple-300 hover:via-blue-300 hover:to-pink-300 transition-opacity flex items-center gap-2 border border-black">
              <FiArrowLeft />
              Retour
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
