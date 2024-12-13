import React from 'react'
import { Card, CardContent, CardFooter } from './ui/card'
import { Link } from 'lucide-react'

interface porductsCardProps {
    title: string;
    imgSource: string; 
    price: number;
}

function ProductsCard({title, imgSource, price}:porductsCardProps) {
  return (
   
      <Card className="bg-bleu h-[100px] w-[200px] flex flex-col justify-between items-center shadow-lg border-0">
          <CardContent className="text-center p-0 flex-1">
            <img 
              src={imgSource}
              className="h-full w-full object-cover rounded-t-md"
            />
          </CardContent>
          <CardFooter className="w-full text-center bg-blanc p-4">
            <p className="text-xl w-full font-semibold flex justify-center items-center">{title}</p>
            <p className="text-xl w-full font-semibold flex justify-center items-center">{price}</p>
          </CardFooter>
        </Card>
  )
}

export default ProductsCard