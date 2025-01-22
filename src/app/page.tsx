import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex justify-between items-center h-screen p-6">
    
      <Link href="/pages/products">
      <Card className=" h-[500px] w-[500px] flex flex-col justify-between items-center shadow-lg border-0 bg-blanc">
          <CardContent className="text-center p-0 flex-1">
            <img
              src="/keagan-henman-Won79_9oUEk-unsplash.jpg"
              alt="Hommes"
              className="h-full w-full object-cover rounded-t-lg"
            />
          </CardContent>
          <CardFooter className="w-full text-center bg-blanc p-4 rounded-b-lg68
          ">
            <p className="text-xl w-full font-semibold flex justify-center items-center">Hommes</p> 
          </CardFooter>
        </Card>
      </Link>

      <Link href="/pages/products">
      <Card className="h-[500px] w-[500px] flex flex-col justify-between items-center shadow-lg border-0">
          <CardContent className="text-center p-0 flex-1">
            <img
              src="/priscilla-du-preez-dlxLGIy-2VU-unsplash.jpg"
              alt="Femmes"
              className="h-full w-full object-cover"
            />
          </CardContent>
          <CardFooter className="w-full text-center bg-blanc p-4">
            <p className="text-xl w-full font-semibold flex justify-center items-center">Femmes</p> 
          </CardFooter>
        </Card>
      </Link>

      <Link href="/pages/products">
      <Card className="h-[500px] w-[500px] flex flex-col justify-between items-center shadow-lg border-0">
          <CardContent className="text-center p-0 flex-1">
            <img
              src="/markus-spiske-TXvCcWl3nEI-unsplash.jpg"
              alt="Enfants"
              className="h-full w-full object-cover"
            />
          </CardContent>
          <CardFooter className="w-full text-center bg-blanc p-4">
            <p className="text-xl w-full font-semibold flex justify-center items-center">Enfants</p> 
          </CardFooter>
        </Card>
      </Link>
    </div>
  );
}
