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
import NavbarFooter from "@/components/ui/navbarFooter";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Link } from "lucide-react";

function Login() {
  return (
    <div className="relative min-h-screen flex flex-col">
    
      <main className="flex-grow flex items-center justify-center">
        <Tabs defaultValue="Login" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="Login">Se connecter</TabsTrigger>
            <TabsTrigger value="Register">S'enregistrer</TabsTrigger>
          </TabsList>
          <TabsContent value="Login">
            <Card>
              <CardHeader>
                <CardTitle>Se connecter</CardTitle>
                <CardDescription>
                
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="username">Nom d'utilisateur / Email</Label>
                  <Input id="username"/>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Mot de passe</Label>
                  <Input id="password" type="password" />
                </div>
              </CardContent>
              <CardFooter>
            <Link href="/pages/cart">
         <Button>
         Se connecter
        </Button>
        </Link>


                
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="Register">
            <Card>
              <CardHeader>
                <CardTitle>S'enregistrer</CardTitle>
                <CardDescription>
                
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Prénom</Label>
                  <Input id="name" type="string" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="surname">Nom de famille</Label>
                  <Input id="surname" type="string" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="birthday">Date de naissance</Label>
                  <Input id="birthday" type="date" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="mail">Adresse éléctronique</Label>
                  <Input id="mail" type="mail" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Mot de passe</Label>
                  <Input id="password" type="password" />
                </div>

              </CardContent>
              <CardFooter>
                <Button>S'enregistrer</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="fixed bottom-0 left-0 w-full text-white py-4">

      </footer>
    </div>
  );
}

export default Login;
