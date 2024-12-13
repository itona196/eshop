"use client";

import Link from "next/link";
import { AlignCenter, User } from "lucide-react";

function NavbarFooter() {
  return (

<div className="bg-bleu w-full h-28 flex justify-between items-center px-4">
<Link href="/pages/cart">
<h1 className=" text-noir hover:text-blanc cursor-pointer">Aide & Contact</h1>
</Link>
<Link href="/pages/cart">
<h1 className="text-noir hover:text-blanc cursor-pointer">À propos de nous</h1>
</Link>
<Link href="/pages/cart">
<h1 className="text-noir hover:text-blanc cursor-pointer">Conditions générales</h1>
</Link>
</div>


  );
}

export default NavbarFooter;
