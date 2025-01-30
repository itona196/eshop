import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 p-6">
     <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
  Découvrez nos collections
</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
        <Link href="/pages/products">
          <Card className="h-[400px] w-full max-w-xs md:max-w-md flex flex-col rounded-lg overflow-hidden shadow-xl bg-white transition-transform transform hover:scale-105 hover:shadow-2xl">
            <CardContent className="flex-1 p-0">
              <img
                src="/keagan-henman-Won79_9oUEk-unsplash.jpg"
                alt="Hommes"
                className="h-full w-full object-cover"
              />
            </CardContent>
            <CardFooter className="bg-gradient-to-r from-blue-300 via-[#6fbff7] to-[#9f9ff5] p-4">
              <p className="text-xl font-semibold text-gray-800 text-center">
                Hommes
              </p>
            </CardFooter>
          </Card>
        </Link>

       
        <Link href="/pages/products">
          <Card className="h-[400px] w-full max-w-xs md:max-w-md flex flex-col rounded-lg overflow-hidden shadow-xl bg-white transition-transform transform hover:scale-105 hover:shadow-2xl">
            <CardContent className="flex-1 p-0">
              <img
                src="/priscilla-du-preez-dlxLGIy-2VU-unsplash.jpg"
                alt="Femmes"
                className="h-full w-full object-cover"
              />
            </CardContent>
            <CardFooter className="bg-gradient-to-r from-[#9f9ff5] via-purple-300 to-[#d8b4fe] p-4">
              <p className="text-xl font-semibold text-gray-800 text-center">
                Femmes
              </p>
            </CardFooter>
          </Card>
        </Link>

       
        <Link href="/pages/products">
          <Card className="h-[400px] w-full max-w-xs md:max-w-md flex flex-col rounded-lg overflow-hidden shadow-xl bg-white transition-transform transform hover:scale-105 hover:shadow-2xl">
            <CardContent className="flex-1 p-0">
              <img
                src="/markus-spiske-TXvCcWl3nEI-unsplash.jpg"
                alt="Enfants"
                className="h-full w-full object-cover"
              />
            </CardContent>
            <CardFooter className="bg-gradient-to-r from-[#d8b4fe] via-[#f7c8d9] to-pink-300 p-4">
              <p className="text-xl font-semibold text-gray-800 text-center">
                Enfants
              </p>
            </CardFooter>
          </Card>
        </Link>
      </div>
    </div>
  );
}
