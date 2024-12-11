import { Cog, UserCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center border-b border-gray-500 px-4 h-12">
      <Link href="/" className="flex items-center">
        <Image
          src="/logo-text.png"
          alt="BiblioCorner logo"
          width={100}
          height={100}
        />
      </Link>
      <ul className="flex items-center space-x-4">
        <li>
          <Link href="#">
            <UserCircle />
          </Link>
        </li>
        <li>
          <Link href="#">
            <Cog />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
