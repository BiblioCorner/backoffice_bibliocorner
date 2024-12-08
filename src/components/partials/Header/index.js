import { Book, Cog, UserCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center border-b border-gray-500 px-4 h-12">
      <Link href="/" className="flex items-center">
        <Book />
        <h1 className="text-2xl font-bold">Back Office</h1>
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
