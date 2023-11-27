"use client";
import React from "react";
import Link from "next/link";
import { Settings } from "lucide-react";
import { useRouter } from "next/navigation";

const Header = () => {
    const router = useRouter();
    console.log(router);
    return (
        <header className="flex mx-10 my-5 font-bold">
            <nav className="flex basis-1/2 justify-between items-center">
                <Link href="/" className="text-4xl">Dactap</Link>
                <Link href="/games" className={`mr-4 my-auto hover:text-indigo-600 font-normal font-serif text-xl`}>Jeux</Link>
                <Link href="/profil">Profil</Link>
                <Link href="/dashboard">Statistiques</Link>
            </nav>
            <div className="flex basis-1/2 justify-center">
                <button>Connexion</button>
                <button className="mx-2 py-1 px-3 border border-blue-900 rounded-full hover:bg-blue-900 hover:text-blue-100 hover:text-lg">Inscription</button>
                {/* <button>Déconnexion</button> */}
            </div>

            <button>
                <Settings />
            </button>
        </header>
    );
};

export default Header;
