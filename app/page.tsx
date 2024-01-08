// Page d'accueil
'use client'

import Image from 'next/image'

import { signika } from '@/app/ui/fonts'
import HeroImage from '@/app/ui/image/Hero_section_ordinateur.png'
import ContactErgo from '@/app/ui/image/Contact_ergo_bannière.png'
import Contact from './app/ui/image/Contact_ergo_bannière.png'
import {
  ArrowDown,
  Rocket,
  BarChart3,
  Gamepad2,
  GraduationCap,
  Mail,
} from 'lucide-react'
import React from 'react'

let cards = [
  {
    id: 1,
    title: 'Leçons intéractives',
    description:
      'Améliorez vos compétences tout en vous amusant avec nos jeux conçus pour renforcer vos capacités de frappe.',
    icon: <Rocket />,
  },
  {
    id: 2,
    title: 'Jeux stimulants',
    description:
      'Devenez le meilleur dans la discipline de la frappe au clavier grâce à un système de classement.',
    icon: <Gamepad2 />,
  },
  {
    id: 3,
    title: 'Suivi de progression',
    description:
      'Visualisez vos progrès au fil du temps, identifiez vos forces et concentrez-vous sur les domaines à améliorer.',
    icon: <BarChart3 />,
  },
  {
    id: 4,
    title: 'Exercices personnalisables',
    description:
      'Donner et modifier à votre guise un exercice à une ou plusieurs personne affiliée à votre profil.',
    icon: <GraduationCap />,
  },
]

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
          className="flex flex-wrap justify-center items-center p-8 blue:bg-300 text-100 green:bg-300 text-100 red:bg-300 text-100 dark:bg-300 text-100"
        >
          {cards.map((card) => (
            <div
              id="card"
              key={card.id}
              className="flex flex-col items-center justify-center p-5 m-3 w-1/3 rounded-lg shadow-lg text-center blue:bg-900 text-100 green:bg-900 text-100 red:bg-900 text-100 dark:bg-900"
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
  )
}

export default HomePage
