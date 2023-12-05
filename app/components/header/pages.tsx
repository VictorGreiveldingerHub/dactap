"use client";

import React, {useState} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Settings } from "lucide-react";
import DactapSvg from "@/app/ui/utils/SvgComponents/DactapSvg"

const navLinks = [
    {
        key: "dactap",
        name: <DactapSvg />,
        href: "/"
    },
    {
        key: "jeux",
        name: "Jeux",
        href: "/games"
    },
    {
        key: "profil",
        name: "Profil",
        href: "/profil"
    },
    {
        key: "statistiques",
        name: "Statistiques",
        href: "/dashboard"
    },
]

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

                    )
                    })
                }
            <nav className="flex basis-1/2 justify-between items-center">
                <Link href="/" className="text-4xl">Dactap</Link>
                <Link href="/games" className={`mr-4 my-auto hover:text-indigo-600 font-normal font-serif text-xl`}>Jeux</Link>
                <Link href="/profil">Profil</Link>
                <Link href="/dashboard">Statistiques</Link>
                <Link href="/connection">Connexion</Link>
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

            <button >
                <Settings />
            </button>
        </header>
    );
};

export default Header;
