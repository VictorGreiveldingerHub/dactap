// Page d'accueil 
import Image from 'next/image';
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

import SvgComponent from "@/app/ui/utils/SvgComponent";


const HomePage = () => {
  return (
    <main>
      <div className={`${signika.className} antialiased flex flex-col`}>
        {/* Page d'accueil - Hero Header */}
        <div className="container mx-auto flex flex-wrap items-center">
          <SvgComponent />
          <div>
            <h1>Bienvenue sur Dactap_</h1>
            <h4>Substituez l'écriture manuscrite à l'art de la frappe au clavier (Dactylographie).</h4>
          </div>
          <Image src={HeroImage} alt="un gros ordinateur avec un clavier" />
          <ArrowDown className="animate-bounce"/>
        </div>
        {/* Fin page d'accueil - Hero Header */}
        {/* Page d'accueil - Présentation */}
        <div id="cards" className="flex flex-wrap items-center text-red-100 bg-red-400 p-8">
          <div id="card" className="flex-1 w-64 rounded-lg bg-red-900 shadow-lg">
            <Rocket />
            <h2>Leçons intéractives</h2>
            <span>Améliorez vos compétences tout en vous amusant avec nos jeux conçus pour renforcer vos capacités de frappe.</span>
          </div>
          <div id="card" className="flex-1 w-64 rounded-lg bg-red-900 shadow-lg">
            <Gamepad2 />
            <h2>Jeux stimulants</h2>
            <span>Devenez le meilleur dans la discipline de la frappe au clavier grâce à un système de classement.</span>
          </div>
          <div id="card" className="p-4 rounded-lg bg-red-900 shadow-lg">
            <BarChart3 />
            <h2>Suivi de progression</h2>
            <span>Visualisez vos progrès au fil du temps, identifiez vos forces et concentrez-vous sur les domaines à améliorer.</span>
          </div>
          <div id="card" className="p-4 rounded-lg bg-red-900 shadow-lg">
            <GraduationCap />
            <h2>Exercices personnalisables</h2>
            <span>Donner et modifier à votre guise un exercice à une ou plusieurs personne affiliée à votre profil.</span>
          </div>
        </div>
        {/* Fin page d'accueil - Présentation */}
        {/* Page d'accueil - Ergothérapeute ? */}
        <div>
          <h2>Vous êtes ergothérapeute et travaillez avec des logiciels de dactylographie ?</h2>
          <span>Nous serions ravi d'avoir vos retours.</span>

          <div>
            <p>Dans une démarche d'amélioration de notre solution, aidez nous à cibler correctement les types d'exercices, la gestion des affiliés et bien plus encore</p>
            <p>Merci d'avance de la part de l'équipe Dactap.</p>
            <button><Mail />Nous contacter</button>
            <Image src={ContactErgo} width={150} className="rounded-md" alt="Une main tenant un stylo par duquel des formes sont projetées" />
          </div>
        </div>
        {/* Page d'accueil - Fin ergothérapeute ? */}
      </div>
    </main>
  );
};

export default HomePage;
