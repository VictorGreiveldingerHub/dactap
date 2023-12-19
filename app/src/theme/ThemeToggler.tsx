"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import LightTheme from "../../ui/image/themeLight.png";

const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // Penser à mettre le theme de préférence dans un state, voir si on peut stocker ça dans la BDD
    if (theme === "system") {
      const userPrefersLight =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: light)").matches;

      if (userPrefersLight) {
        setTheme("red"); // valeur en dure pour le moment, à changer
      } else {
        setTheme("dark");
      }
    }
    if (theme === "light") {
      setTheme("green"); // valeur en dure pour le moment, à changer
    }
    setMounted(true);
  }, [theme]);

  if (!mounted) {
    return null;
  }

  const themes = [
    { name: "light", value: "light" },
    { name: "dark", value: "dark" },
    { name: "system", value: "system" },
    { name: "vert", value: "green" },
    { name: "rouge", value: "red" },
    { name: "bleu", value: "blue" },
  ];

  return (
    <div className="flex">
      {themes.map((t) => {
        return (
          <label
            key={t.name}
            className="m-10 p-5 border border-solid rounded red:border-red-900 blue:border-blue-900 green:border-green-900"
          >
            <Image
              src={LightTheme}
              alt="theme"
              className="w-10 h-10"
              priority={true}
            />
            <input
              key={t.name}
              type="radio"
              value={t.value}
              checked={theme === t.value}
              onChange={(e) => setTheme(e.target.value)}
            />
            {t.name}
          </label>
        );
      })}
    </div>
  );
};

export default ThemeToggler;
