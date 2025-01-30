import Link from "next/link";

function NavbarFooter() {
  return (
    <div className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 w-full h-20 flex justify-center items-center px-6 shadow-lg">
      <div className="flex space-x-8">
        <Link href="/pages/aideContact">
          <h1 className="text-gray-800 text-lg font-semibold hover:text-black transition duration-300 cursor-pointer">
            Aide & Contact
          </h1>
        </Link>
        <Link href="/pages/aPropos">
          <h1 className="text-gray-800 text-lg font-semibold hover:text-black transition duration-300 cursor-pointer">
            À propos de nous
          </h1>
        </Link>
        <Link href="/pages/conditions">
          <h1 className="text-gray-800 text-lg font-semibold hover:text-black transition duration-300 cursor-pointer">
            Conditions générales
          </h1>
        </Link>
      </div>
    </div>
  );
}

export default NavbarFooter;
