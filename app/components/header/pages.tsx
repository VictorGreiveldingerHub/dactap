"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Settings } from "lucide-react";
import DactapSvg from "@/app/ui/utils/SvgComponents/DactapSvg";
import Parametre from "../parametres";

const navLinks = [
  {
    key: "dactap",
    name: <DactapSvg />,
    href: "/",
  },
  {
    key: "jeux",
    name: "Jeux",
    href: "/games",
  },
  {
    key: "profil",
    name: "Profil",
    href: "/profil",
  },
  {
    key: "statistiques",
    name: "Statistiques",
    href: "/dashboard",
  },
];

const Header = () => {
  const pathname = usePathname();
  const [isLogged, setLogged] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);

  return (
    <header className="flex mx-10 my-5 font-bold">
      <nav className="flex basis-1/2 justify-between items-center">
        {navLinks.map((link) => {
          const isActive = pathname.startsWith(link.href);
          return (
            <Link
              key={link.key}
              href={link.href}
              className={isActive ? "underline underline-offset-4" : ""}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
      <div className="flex basis-1/2 justify-center items-center">
        {isLogged ? (
          <button>Déconnexion</button>
        ) : (
          <>
            <button>
              <Link className="px-3" href="/signin">
                Connexion
              </Link>
            </button>
            <button className="px-3 shadow-md border rounded-full blue:border-blue-900 blue:hover:bg-blue-900 blue:hover:text-blue-100 red:border-red-900 red:hover:bg-red-900 red:hover:text-red-100 green:border-green-900 green:hover:bg-green-900 green:hover:text-green-100 dark:border-dark-900 dark:hover:bg-dark-100 dark:hover:text-dark-900">
              <Link href="/signup">Inscription</Link>
            </button>
          </>
        )}
      </div>

      <button>
        <Settings onClick={() => setOpenSettings(!openSettings)} />
        {openSettings && <Parametre />}
      </button>
    </header>
  );
};

export default Header;
