"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Settings } from "lucide-react";
import DactapSvg from "@/app/ui/utils/SvgComponents/DactapSvg";
import ThemeToggler from "@/app/src/theme/ThemeToggler";

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
  const [isLogged, SetLogged] = useState(false);

  return (
    <header className="flex mx-10 my-5 font-bold">
      <nav className="flex basis-1/2 justify-between items-end">
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
      <div className="flex basis-1/2 justify-center items-end">
        {isLogged ? (
          <button>Déconnexion</button>
        ) : (
          <>
            <button>
              <Link href="/signin">Connexion</Link>
            </button>
            <button className="px-3 shadow-md border border-blue-900 rounded-full hover:bg-blue-900 hover:text-blue-100">
              <Link href="/signup">Inscription</Link>
            </button>
          </>
        )}
      </div>

      <button>
        <Settings />
      </button>
      <ThemeToggler />
    </header>
  );
};

export default Header;
