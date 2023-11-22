import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="container">
            <div className="flex ">
                <Link href="/">Dactap</Link>
                <ol>
                    <h3>Ressources</h3>
                    <li>
                        <Link href="#">Lien 1</Link>
                    </li>
                    <li>
                        <Link href="#">Lien 2</Link>
                    </li>
                    <li>
                        <Link href="#">Lien 3</Link>
                    </li>
                    <li>
                        <Link href="#">Lien 4</Link>
                    </li>
                </ol>
                <ol>
                    <h3>L'équipe</h3>
                    <li>
                        <Link href="/about-us">A propos</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ol>
            </div>
            <div>
                <Link href="/mentions-legales">Mentions légales</Link>
                <Link href="/mentions-legales">Contact</Link>
                <Link href="/mentions-legales">Condition générales d'utilisation</Link>
                <Link href="/mentions-legales">Foire aux question</Link>
            </div>
            <div>
            ©Dactap, tous droits réservés. Projet de fin d'étude, fait avec 
            </div>
        </footer>
    );
};

export default Footer;
