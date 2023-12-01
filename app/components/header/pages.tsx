import React from "react";
import Link from "next/link";

const Header = () => {
    return (
        <header className="flex mx-10 my-5 font-bold">
            <nav className="flex basis-1/2 justify-between items-center">
                <Link href="/" className="text-4xl">Dactap</Link>
                <Link href="/games">Jeux</Link>
                <Link href="/profil">Profil</Link>
                <Link href="/dashboard">Statistiques</Link>
                <Link href="/connection">Connexion</Link>
            </nav>
            <div className="flex basis-1/2 justify-center">
                <button>Connexion</button>
                <button>Inscription</button>
                {/* <button>Déconnexion</button> */}
            </div>

            <button>Param</button>
        </header>
    );
};

export default Header;
