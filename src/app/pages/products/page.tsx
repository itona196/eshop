import React from 'react'
import ProductsCard from '@/components/productsCard'
import { Link } from 'lucide-react'
import { DialogHeader } from '@/components/ui/dialog'
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from '@radix-ui/react-dialog'

const productsItems = [
    {
        title: "pantalon",
        price: 30,
        imgSource: "/pexels-apunto-group-agencia-de-publicidad-53086916-7752793.jpg"
    },
    {
        title: "t-shirt",
        price: 25,
        imgSource: "/pexels-apunto-group-agencia-de-publicidad-53086916-7752793.jpg"
    },
    {
        title: "veste",
        price: 50,
        imgSource: "/pexels-apunto-group-agencia-de-publicidad-53086916-7752793.jpg"
    },
    {
        title: "short",
        price: 30,
        imgSource: "/pexels-apunto-group-agencia-de-publicidad-53086916-7752793.jpg"
    },
    {
        title: "chaussettes",
        price: 10,
        imgSource: "/pexels-apunto-group-agencia-de-publicidad-53086916-7752793.jpg"
    },
    {
        title: "chaussures",
        price: 50,
        imgSource: "/pexels-apunto-group-agencia-de-publicidad-53086916-7752793.jpg"
    },
    {
        title: "pantalon",
        price: 30,
        imgSource: "/pexels-apunto-group-agencia-de-publicidad-53086916-7752793.jpg"
    },
    {
        title: "pantalon",
        price: 30,
        imgSource: "/pexels-apunto-group-agencia-de-publicidad-53086916-7752793.jpg"
    },
    {
        title: "pantalon",
        price: 30,
        imgSource: "/pexels-apunto-group-agencia-de-publicidad-53086916-7752793.jpg"
    },
    {
        title: "pantalon",
        price: 30,
        imgSource: "/pexels-apunto-group-agencia-de-publicidad-53086916-7752793.jpg"
    }, 
    {
        title: "pantalon",
        price: 30,
        imgSource: "/pexels-apunto-group-agencia-de-publicidad-53086916-7752793.jpg"
    },
    {
        title: "pantalon",
        price: 30,
        imgSource: "/pexels-apunto-group-agencia-de-publicidad-53086916-7752793.jpg"
    },
    {
        title: "pantalon",
        price: 30,
        imgSource: "/pexels-apunto-group-agencia-de-publicidad-53086916-7752793.jpg"
    },
    {
        title: "pantalon",
        price: 30,
        imgSource: "/pexels-apunto-group-agencia-de-publicidad-53086916-7752793.jpg"
    },
    {
        title: "pantalon",
        price: 30,
        imgSource: "/pexels-apunto-group-agencia-de-publicidad-53086916-7752793.jpg"
    },
    {
        title: "pantalon",
        price: 30,
        imgSource: "/pexels-apunto-group-agencia-de-publicidad-53086916-7752793.jpg"
    },
    {
        title: "pantalon",
        price: 30,
        imgSource: "/pexels-apunto-group-agencia-de-publicidad-53086916-7752793.jpg"
    },
    {
        title: "pantalon",
        price: 30,
        imgSource: "/pexels-apunto-group-agencia-de-publicidad-53086916-7752793.jpg"
    },
   

]

function Products() {

    return (
        
        <div className='flex justify-center p-4'>
             <Dialog>
               <DialogContent className='w-max-w-screen h-screen '>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription className='text-violet'>
            coucou les amis
            </DialogDescription>
    </DialogHeader>
  </DialogContent>
              
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 max-w-screen-lg w-full">

        
       
        {productsItems.map((item, index) => (
                        <DialogTrigger key={index}>
                            <ProductsCard title={item.title} price={item.price} imgSource={item.imgSource} />
                        </DialogTrigger>
            ))}
            

  
        </div>
        
        </Dialog>
        </div>
       
    )
}

export default Products