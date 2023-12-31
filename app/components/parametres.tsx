// Fenetre affichant les paramètres de l'application
import React from "react";
import ThemeToggler from "@/app/src/theme/ThemeToggler";
import FontToggler from "@/app/src/theme/FontToggler";

const Parametre: React.FC = () => {
  return (
    <div className="absolute flex bg-white dark:bg-dark-900 flex-col top-20 w-auto h-auto right-2 mt-8 rounded shadow-lg p-4">
      <h2>💡 Ici, tu peux modifier l'apparence du site.</h2>
      <div>
        <h3 className="font-signika">Thème </h3>
        <ThemeToggler />
      </div>
      <div>
        <h3>Police</h3>
        <FontToggler />
      </div>
    </div>
  );
};

export default Parametre;
