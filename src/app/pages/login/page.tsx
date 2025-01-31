"use client";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/ui/navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, XCircle } from "lucide-react";


function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loggedInUser = localStorage.getItem("loggedInUser");
      setIsLoggedIn(!!loggedInUser);
    }
  }, []);

  const handleRegister = () => {
    if (typeof window !== "undefined") {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      if (users.some((user) => user.email === email)) {
        toast.error("Cet email est déjà utilisé !", { position: "bottom-center",
          icon: <CheckCircle size={24} color="white" />, 
          progressClassName: "custom-progress-bar",
          className: "custom-toast",})
          
        return;
      }
      users.push({ username, email, password });
      localStorage.setItem("users", JSON.stringify(users));
      toast.success("Inscription réussie !", { position: "bottom-center",
        icon: <CheckCircle size={24} color="white" />, 
        progressClassName: "custom-progress-bar",
        className: "custom-toast", });
    }
  };

  const handleLogin = () => {
    if (typeof window !== "undefined") {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        setIsLoggedIn(true);
        toast.success("Connexion réussie !", {
          position: "bottom-center",
          icon: <CheckCircle size={24} color="white" />, 
          progressClassName: "custom-progress-bar",
          className: "custom-toast",
        });
             
      } else {
        toast.error("Email ou mot de passe incorrect.", {position: "bottom-center",
          icon: <XCircle size={24} color="white" />, 
          progressClassName: "custom-progress-bar",
          className: "custom-toast", });
      }
    }
  };

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("loggedInUser");
      setIsLoggedIn(false);
      toast.success("Déconnexion réussie !", { position: "bottom-center",
        icon: <CheckCircle size={24} color="white" />, 
        progressClassName: "custom-progress-bar",
        className: "custom-toast", });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100">
      <ToastContainer />
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <Navbar />
      </header>

      <main className="flex-grow flex items-center justify-center mt-20">
        {!isLoggedIn ? (
          <Tabs defaultValue="Login" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="Login">Se connecter</TabsTrigger>
              <TabsTrigger value="Register">S'enregistrer</TabsTrigger>
            </TabsList>

            <TabsContent value="Login">
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>Se connecter</CardTitle>
                  <CardDescription>Accédez à votre compte</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 flex-grow">
                  <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="password">Mot de passe</Label>
                    <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full text-black hover:bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 border border-black" onClick={handleLogin}>Se connecter</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="Register">
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>S'enregistrer</CardTitle>
                  <CardDescription>Créez un compte</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 flex-grow">
                  <div className="space-y-1">
                    <Label htmlFor="username">Nom d'utilisateur</Label>
                    <Input id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="password">Mot de passe</Label>
                    <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full text-black hover:bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 border border-black" onClick={handleRegister}>S'enregistrer</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        ) : (
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Bienvenue</h1>
            <Button onClick={handleLogout}>Se déconnecter</Button>
          </div>
        )}
      </main>
    </div>
  );
}

export default Login;