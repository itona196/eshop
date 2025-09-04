"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HomePage() {
  const categories = [
    {
      href: "/pages/products",
      img: "/keagan-henman-Won79_9oUEk-unsplash.jpg",
      label: "Hommes",
      width: 600,
      height: 900,
      footerBg: "bg-gradient-to-r from-blue-300 via-[#AFC8F8] to-[#C5C6F2]",
    },
    {
      href: "/pages/productsWomen",
      img: "/priscilla-du-preez-dlxLGIy-2VU-unsplash.jpg",
      label: "Femmes",
      width: 600,
      height: 900,
      footerBg: "bg-gradient-to-r from-[#C5C6F2] via-purple-300 to-[#E4B8F4]",
    },
    {
      href: "/pages/productsKid",
      img: "/markus-spiske-TXvCcWl3nEI-unsplash.jpg",
      label: "Enfants",
      width: 600,
      height: 900,
      footerBg: "bg-gradient-to-r from-[#E4B8F4] via-[#F3B8E2] to-pink-300",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 p-6">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Découvrez nos collections
      </motion.h1>

      <div className="bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <Link key={index} href={category.href}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}>
              <Card className="h-[400px] w-full max-w-xs md:max-w-md flex flex-col rounded-lg overflow-hidden shadow-xl bg-gradient-to-br 
              from-purple-100 via-blue-100 to-pink-100 transition-transform hover:shadow-2xl">
                <CardContent className="flex-1 p-0">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="h-full w-full">
                    <Image
                      src={category.img}
                      alt={category.label}
                      width={category.width}
                      height={category.height}
                      className="h-full w-full object-cover"
                      placeholder="blur"
                      blurDataURL={category.img}/>
                  </motion.div>
                </CardContent>
                <CardFooter className={`${category.footerBg} p-4`}>
                  <p className="text-xl font-semibold text-gray-800 text-center">
                    {category.label}
                  </p>
                </CardFooter>
              </Card>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
