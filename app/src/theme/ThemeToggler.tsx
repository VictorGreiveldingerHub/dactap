"use client";

import Image, { StaticImageData } from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import LightTheme from "@/app/ui/image/themeLight.png";
import DarkTheme from "@/app/ui/image/themeDark.png";

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

  interface Theme {
    name: string;
    value: string;
    img: StaticImageData;
  }

  const themes: Theme[] = [
    { name: "light", value: "light", img: LightTheme },
    { name: "dark", value: "dark", img: DarkTheme },
    { name: "system", value: "system", img: LightTheme },
  ];

  const colorsAvailable = [
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
            className="m-15 p-10 border border-solid flex flex-col rounded red:border-red-900 blue:border-blue-900 green:border-green-900"
          >
            <div>
              <Image src={t.img} alt="theme" width={50} height={50} />
            </div>
            <div>
              <input
                key={t.name}
                type="radio"
                value={t.value}
                checked={theme === t.value}
                onChange={(e) => setTheme(e.target.value)}
              />
              {t.name}
            </div>
          </label>
        );
      })}
      {theme !== "dark" &&
        colorsAvailable.map((color) => {
          return (
            <label
              key={color.name}
              className="m-15 p-10 border border-solid flex flex-col rounded red:border-red-900 blue:border-blue-900 green:border-green-900"
            >
              <div>
                <input
                  key={color.name}
                  type="radio"
                  value={color.value}
                  checked={theme === color.value}
                  onChange={(e) => setTheme(e.target.value)}
                />
                {color.name}
              </div>
            </label>
          );
        })}
    </div>
  );
};

export default ThemeToggler;
