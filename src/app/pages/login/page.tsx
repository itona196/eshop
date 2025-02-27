"use client";

import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/ui/navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, XCircle, User } from "lucide-react";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = JSON.parse(localStorage.getItem("loggedInUser") || "null");
      if (storedUser) {
        setIsLoggedIn(true);
        setLoggedInUser(storedUser);
      }
    }
  }, []);

  const handleRegister = () => {
    if (typeof window !== "undefined") {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      if (users.some((user: any) => user.email === email)) {
        toast.error("Cet email est déjà utilisé !", {
          position: "bottom-center",
          icon: <XCircle size={24} color="white" />,
        });
        return;
      }
      const newUser = { username, email, password };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      toast.success("Inscription réussie !", {
        position: "bottom-center",
        icon: <CheckCircle size={24} color="white" />,
      });
    }
  };

  const handleLogin = () => {
    if (typeof window !== "undefined") {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const user = users.find(
        (user: any) => user.email === email && user.password === password
      );
      if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        setIsLoggedIn(true);
        setLoggedInUser(user);
        toast.success("Connexion réussie !", {
          position: "bottom-center",
          icon: <CheckCircle size={24} color="white" />,
        });
      } else {
        toast.error("Email ou mot de passe incorrect.", {
          position: "bottom-center",
          icon: <XCircle size={24} color="white" />,
        });
      }
    }
  };

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("loggedInUser");
      setIsLoggedIn(false);
      setLoggedInUser(null);
      toast.success("Déconnexion réussie !", {
        position: "bottom-center",
        icon: <CheckCircle size={24} color="white" />,
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100">
      <ToastContainer />
      <Navbar />

      <main className="flex-grow flex items-center justify-center p-6">
        {!isLoggedIn ? (
          <Tabs defaultValue="Login" className="w-full max-w-md">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="Login">Se connecter</TabsTrigger>
              <TabsTrigger value="Register">S'enregistrer</TabsTrigger>
            </TabsList>

            <TabsContent value="Login">
              <Card className="w-full bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 shadow-lg rounded-xl p-6">
                <CardHeader>
                  <CardTitle className="text-center text-2xl font-bold">
                    Se connecter
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                    />
                    <Input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Mot de passe"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300
                               text-white border border-black 
                               hover:opacity-90 hover:text-black
                               rounded-full"
                    onClick={handleLogin}
                  >
                    Se connecter
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="Register">
              <Card className="w-full bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 shadow-lg rounded-xl p-6">
                <CardHeader>
                  <CardTitle className="text-center text-2xl font-bold">
                    Créer un compte
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Input
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Nom d'utilisateur"
                    />
                    <Input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                    />
                    <Input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Mot de passe"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300
                               text-white border border-black
                               hover:opacity-90 hover:text-black
                               rounded-full"
                    onClick={handleRegister}
                  >
                    S'enregistrer
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        ) : (
          <Card className="w-96 bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 shadow-lg rounded-xl p-6">
            <CardHeader>
              <User size={48} className="mx-auto text-blue-500" />
              <CardTitle className="text-center text-2xl font-bold">
                Mon compte
              </CardTitle>
              <CardDescription className="text-center">
                Bienvenue, {loggedInUser?.username} !
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                className="w-full bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 
                           text-black border border-black hover:opacity-90"
                onClick={() => router.push("/pages/userProfil")}
              >
                Informations personnelles
              </Button>
              <Button
                className="w-full bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 
                           text-black border border-black hover:opacity-90"
                onClick={() => router.push("/pages/orderHistory")}
              >
                Historique des commandes
              </Button>
              <Button
                className="w-full bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 
                           text-black border border-black hover:opacity-90"
                onClick={handleLogout}
              >
                Se déconnecter
              </Button>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}

export default Login;
