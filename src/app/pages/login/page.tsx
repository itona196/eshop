"use client"; 
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/ui/navbar";
import {Tabs, TabsContent, TabsList, TabsTrigger,} from "@/components/ui/tabs";


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
        alert("Cet email est déjà utilisé !");
        return;
      }
      users.push({ username, email, password });
      localStorage.setItem("users", JSON.stringify(users));
      
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
        
      } else {
        alert("Email ou mot de passe incorrect.");
      }
    }
  };

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("loggedInUser");
      setIsLoggedIn(false);
      alert("Déconnexion réussie !");
    }
  };

  const fetchProfile = () => {
    if (typeof window !== "undefined") {
      const user = JSON.parse(localStorage.getItem("loggedInUser"));
      return user ? `Bienvenue, ${user.username}` : "Non connecté";
    }
    return "Non connecté";
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <Navbar />
      </header>

      <main className="flex-grow flex items-center justify-center mt-20">
        {!isLoggedIn ? (
          <Tabs defaultValue="Login" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="Login" className="border border-noir data-[state=active]:bg-bleu data-[state=active]:text-blanc">Se connecter</TabsTrigger>
              <TabsTrigger value="Register" className="border border-noir data-[state=active]:bg-bleu data-[state=active]:text-blanc">S'enregistrer</TabsTrigger>
            </TabsList>

            <TabsContent value="Login">
              
              <Card className="">
                <CardHeader>
                  <CardTitle>Se connecter</CardTitle>
                  <CardDescription>Accédez à votre compte</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="password">Mot de passe</Label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="hover:bg-bleu hover:text-blanc" onClick={handleLogin}>
                    Se connecter
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="Register">
              <Card>
                <CardHeader>
                  <CardTitle>S'enregistrer</CardTitle>
                  <CardDescription>
                    Créez un compte
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="username">Nom d'utilisateur</Label>
                    <Input
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="password">Mot de passe</Label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="hover:bg-bleu hover:text-blanc" onClick={handleRegister}>
                    S'enregistrer
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        ) : (
          <div className="text-center ">
            <h1 className="text-2xl font-bold">{fetchProfile()}</h1>
          
            <div className="flex space-x-4 justify-center">
            <Button className="w-40 h-12 border border-black mt-4 hover:bg-bleu hover:text-blanc hover:border-black-700 rounded-full" onClick={() => router.push("/")} >
              Accueil
            </Button>
            
            <Button className="w-40 h-12 border border-black mt-4 hover:bg-bleu hover:text-blanc rounded-full" onClick={() =>router.push("/pages/cart")}>
              Panier
            </Button>

            <Button className="w-40 h-12 border border-black mt-4 hover:bg-bleu hover:text-blanc rounded-full" onClick={handleLogout}>
              Donées personnelles
            </Button>

            <Button className="w-40 h-12 border border-black mt-4 hover:bg-bleu hover:text-blanc rounded-full" onClick={() => router.push('/pages/products')}>
              Liste de souhaits
            </Button>

            <Button className="w-40 h-12 border border-black mt-4 hover:bg-bleu hover:text-blanc rounded-full" onClick={handleLogout}>
              Se déconnecter
            </Button>
          </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Login;
