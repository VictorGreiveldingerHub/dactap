// Fenetre affichant les parametres de l'application

import React from "react";
import ThemeToggler from "@/app/src/theme/ThemeToggler";
import FontToggler from "@/app/src/theme/FontToggler";

const Parametre: React.FC = () => {
  return (
    <div className="absolute flex flex-col top-90 w-auto h-auto right-2 mt-8 red:bg-red-900 blue:bg-blue-900 green:bg-green-400 rounded shadow-lg p-4">
      <ThemeToggler />
      <FontToggler />
    </div>
  );
};

export default Parametre;
