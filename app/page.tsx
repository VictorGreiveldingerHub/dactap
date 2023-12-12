// Page d'accueil
"use client";

import Image from "next/image";
import { signika } from "@/app/ui/fonts";
import HeroImage from "@/app/ui/image/Hero_section_ordinateur.png";
import ContactErgo from "@/app/ui/image/Contact_ergo_bannière.png";
import {
  ArrowDown,
  Rocket,
  BarChart3,
  Gamepad2,
  GraduationCap,
  Mail,
} from "lucide-react";

const cards = [
  // <div
  //   id="card"
  //   className="flex-1 w-64 rounded-lg shadow-lg blue:bg-secondary text-primary"
  // >
  //   <Rocket />
  //   <h2>Leçons intéractives</h2>
  //   <span>
  //     Améliorez vos compétences tout en vous amusant avec nos jeux
  //     conçus pour renforcer vos capacités de frappe.
  //   </span>
  // </div>
  {
    title: "Leçons intéractives",
    description:
      "Améliorez vos compétences tout en vous amusant avec nos jeux conçus pour renforcer vos capacités de frappe.",
    icon: <Rocket />,
  },
  {
    title: "Jeux stimulants",
    description:
      "Devenez le meilleur dans la discipline de la frappe au clavier grâce à un système de classement.",
    icon: <Gamepad2 />,
  },
  {
    title: "Suivi de progression",
    description:
      "Visualisez vos progrès au fil du temps, identifiez vos forces et concentrez-vous sur les domaines à améliorer.",
    icon: <BarChart3 />,
  },
  {
    title: "Exercices personnalisables",
    description:
      "Donner et modifier à votre guise un exercice à une ou plusieurs personne affiliée à votre profil.",
    icon: <GraduationCap />,
  },
];
const HomePage = () => {
  return (
    <main>
      <div className={`${signika.className} antialiased flex flex-col`}>
        {/* Page d'accueil - Hero Header */}
        <div className="mx-auto flex flex-wrap items-center">
          <div>
            <h1>Bienvenue sur Dactap_</h1>
            <h4>
              Substituez l'écriture manuscrite à l'art de la frappe au clavier
              (Dactylographie).
            </h4>
          </div>
          <Image
            src={HeroImage}
            alt="un gros ordinateur avec un clavier"
            priority={true}
          />
          <ArrowDown className="animate-bounce" />
        </div>
        {/* Fin page d'accueil - Hero Header */}
        {/* Page d'accueil - Présentation */}
        <div
          id="cards"
          className="flex flex-wrap items-center p-8 blue:bg-solidColor text-secondary green:bg-solidColor text-secondary red:bg-solidColor text-secondary dark:bg-solidColor"
        >
          {cards.map((card) => (
            <div
              id="card"
              className="flex-1 w-64 rounded-lg shadow-lg blue:bg-secondary text-primary"
            >
              {card.icon}
              <h2>{card.title}</h2>
              <span>{card.description}</span>
            </div>
          ))}
        </div>
        {/* Fin page d'accueil - Présentation */}
        {/* Page d'accueil - Ergothérapeute ? */}
        <div>
          <h2>
            Vous êtes ergothérapeute et travaillez avec des logiciels de
            dactylographie ?
          </h2>
          <span>Nous serions ravi d'avoir vos retours.</span>

          <div>
            <p>
              Dans une démarche d'amélioration de notre solution, aidez nous à
              cibler correctement les types d'exercices, la gestion des affiliés
              et bien plus encore
            </p>
            <p>Merci d'avance de la part de l'équipe Dactap.</p>
            <button>
              <Mail />
              Nous contacter
            </button>
            <Image
              src={ContactErgo}
              width={150}
              className="rounded-md"
              alt="Une main tenant un stylo par duquel des formes sont projetées"
            />
          </div>
        </div>
        {/* Page d'accueil - Fin ergothérapeute ? */}
      </div>
    </main>
  );
};

export default HomePage;
