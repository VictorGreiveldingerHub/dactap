// Page d'accueil 
import Image from 'next/image';
import { signika } from "@/app/ui/fonts";
import HeroImage from "@/app/ui/image/Hero_section_ordinateur.png";
import { 
  ArrowDown,
  Rocket,
  BarChart3,
  Gamepad2,
  GraduationCap,
} from "lucide-react";


const HomePage = () => {
  return (
    <main>
      <div className={`${signika.className} antialiased flex flex-col container mx-auto`}>
        {/* Page d'accueil - Hero Header */}
        <div className="container mx-auto flex flex-wrap items-center">
       
          <div>
            <h1>Bienvenue sur Dactap_</h1>
            <h4>Substituez l'écriture manuscrite à l'art de la frappe au clavier (Dactylographie).</h4>
          </div>
          <Image src={HeroImage} alt="un gros ordinateur avec un clavier" />
          <ArrowDown />
        </div>
        {/* Fin page d'accueil - Hero Header */}
        {/* Page d'accueil - Présentation */}
        <div id="cards" className="flex h-full">
          <div id="card" className="container mx-auto w-80 text-center">
            <Rocket />
            <h2>Leçons intéractives</h2>
            <span>Améliorez vos compétences tout en vous amusant avec nos jeux conçus pour renforcer vos capacités de frappe.</span>
          </div>
          <div id="card" className="container mx-auto w-80 text-center">
            <Gamepad2 />
            <h2>Jeux stimulants</h2>
            <span>Devenez le meilleur dans la discipline de la frappe au clavier grâce à un système de classement.</span>
          </div>
          <div id="card" className="container mx-auto w-80 text-center">
            <BarChart3 />
            <h2>Suivi de progression</h2>
            <span>Visualisez vos progrès au fil du temps, identifiez vos forces et concentrez-vous sur les domaines à améliorer.</span>
          </div>
          <div id="card" className="container mx-auto w-80 text-center">
            <GraduationCap />
            <h2>Exercices personnalisables</h2>
            <span>Donner et modifier à votre guise un exercice à une ou plusieurs personne affiliée à votre profil.</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
