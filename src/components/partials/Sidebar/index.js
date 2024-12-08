import {
  Calendar,
  House,
  LayoutDashboard,
  LibraryBig,
  MessageCircleMore,
  MessagesSquare,
  Users,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-64 border-r border-gray-500">
      <nav className="h-full">
        <ul>
          <li>
            <Link
              href="#"
              className="flex items-center gap-2 p-4 hover:bg-gray-200"
            >
              <LayoutDashboard size={16} />
              Tableau de bord
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center gap-2 p-4 hover:bg-gray-200"
            >
              <House size={16} />
              Catalogue
            </Link>
            <ul className="pl-4">
              <li>
                <Link
                  href="/catalog/users"
                  className="flex items-center gap-2 p-4 hover:bg-gray-200"
                >
                  <Users size={16} />
                  Utilisateurs
                </Link>
              </li>
              <li>
                <Link
                  href="/catalog/libraries"
                  className="flex items-center gap-2 p-4 hover:bg-gray-200"
                >
                  <LibraryBig size={16} />
                  Bibliothèques
                </Link>
              </li>
              <li>
                <Link
                  href="/catalog/events"
                  className="flex items-center gap-2 p-4 hover:bg-gray-200"
                >
                  <Calendar size={16} />
                  Événements
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center gap-2 p-4 hover:bg-gray-200"
            >
              <MessagesSquare size={16} />
              Modération
            </Link>
            <ul className="pl-4">
              <li>
                <Link
                  href="/moderation/reviews"
                  className="flex items-center gap-2 p-4 hover:bg-gray-200"
                >
                  <MessageCircleMore size={16} />
                  Avis
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
