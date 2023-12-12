import React from "react";
import Link from "next/link";
import { ArrowUp, CircleDashed } from "lucide-react";
import DactapSvg from "@/app/ui/utils/SvgComponents/DactapSvg";

const Footer = () => {
  return (
    <footer className="container">
      <div className="flex ">
        <Link href="/">
          <DactapSvg />
        </Link>
        <h3>Ressources</h3>
        <ul className="list-none">
          <li className="hover:bg-red-200 rounded p-2 m-2">
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
        </ul>
        <h3>L'équipe</h3>
        <ol>
          <li>
            <Link href="/about-us">A propos</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ol>
        <div>
          <CircleDashed
            size={40}
            strokeWidth={1}
            className="absolute animate-[spin_5s_linear_infinite] hover:animate-none"
          />
          <ArrowUp size={40} className="absolute p-2 hover:animate-pulse" />
        </div>
      </div>
      <div>
        <Link href="/mentions-legales">Mentions légales</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/mentions-legales">Condition générales d'utilisation</Link>
        <Link href="/faq">Foire aux question</Link>
      </div>
      <div>
        © Dactap, tous droits réservés. Projet de fin d'étude, fait avec{" "}
        <span className="text-red-500">♥</span>
      </div>
    </footer>
  );
};

export default Footer;
