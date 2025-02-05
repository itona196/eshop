"use client";

import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/ui/navbar";
import { useRouter } from "next/navigation";

function UserProfile() {
  const router = useRouter();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    npa: "",
    phone: "",
    address: "",
    city: ""
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedData = JSON.parse(localStorage.getItem("userProfile"));
      if (storedData && typeof storedData === "object") {
        setUserData((prevData) => ({
          ...prevData,
          ...storedData,
        }));
      }
    }
  }, []);

  const handleChange = (e) => {
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
      setUserData({ firstName: "", lastName: "", npa: "", phone: "", address: "", city: "" });
      toast.success("Informations supprimées avec succès !", { position: "bottom-center" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <ToastContainer />
      <Navbar />
      <main className="flex-grow flex items-center justify-center p-6">
        <Card className="w-full max-w-md bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 flex flex-col shadow-lg rounded-lg p-6">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">Mes informations personnelles</CardTitle>
           
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="firstName">Prénom</Label>
              <Input id="firstName" name="firstName" value={userData.firstName} onChange={handleChange} placeholder="Votre prénom" />
            </div>
            <div>
              <Label htmlFor="lastName">Nom</Label>
              <Input id="lastName" name="lastName" value={userData.lastName} onChange={handleChange} placeholder="Votre nom" />
            </div>
            <div>
              <Label htmlFor="address">Adresse</Label>
              <Input id="address" name="address" value={userData.address} onChange={handleChange} placeholder="Votre adresse" />
            </div>
            <div>
              <Label htmlFor="npa">NPA</Label>
              <Input id="npa" name="npa" value={userData.npa} onChange={handleChange} placeholder="Votre NPA" />
            </div>
            <div>
              <Label htmlFor="city">Ville</Label>
              <Input id="city" name="city" value={userData.city} onChange={handleChange} placeholder="Votre ville" />
            </div>
            <div>
              <Label htmlFor="phone">Téléphone</Label>
              <Input id="phone" name="phone" type="tel" value={userData.phone} onChange={handleChange} placeholder="Votre numéro de téléphone" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button className="bg-green-500 text-white hover:bg-green-500 hover:text-black" onClick={handleSave}>Enregistrer</Button>
            <Button className="bg-red-500 text-white hover:bg-red-500 hover:text-black" onClick={handleDelete}>Supprimer</Button>
            <Button className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 text-white hover:bg--500 hover:text-black" onClick={() => router.push("/pages/login")}>Retour</Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}

export default UserProfile;
