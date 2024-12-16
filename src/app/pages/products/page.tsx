import React from 'react'
import ProductsCard from '@/components/productsCard'

const productsItems = [
    {
        title: "pantalon",
        price: 30,
        imgSource: "/markus-spiske-TXvCcWl3nEI-unsplash.jpg"
    },
    {
        title: "t-shirt",
        price: 25,
        imgSource: "/markus-spiske-TXvCcWl3nEI-unsplash.jpg"
    },
    {
        title: "veste",
        price: 50,
        imgSource: "/markus-spiske-TXvCcWl3nEI-unsplash.jpg"
    },
    {
        title: "short",
        price: 30,
        imgSource: "/markus-spiske-TXvCcWl3nEI-unsplash.jpg"
    },
    {
        title: "chaussettes",
        price: 10,
        imgSource: "/markus-spiske-TXvCcWl3nEI-unsplash.jpg"
    },
    {
        title: "chaussures",
        price: 50,
        imgSource: "/markus-spiske-TXvCcWl3nEI-unsplash.jpg"
    }

]

function Products() {

    return (

        <div className='flex flex-row justify-center items-center'>
            {productsItems.map((item, index) => (<ProductsCard key={index} title={item.title} price={item.price} imgSource={item.imgSource}>
            </ProductsCard>))}

        </div>
    )
}

export default Products