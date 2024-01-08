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
    { name: "Light", value: "light", img: LightTheme },
    { name: "Dark", value: "dark", img: DarkTheme },
    { name: "System", value: "system", img: LightTheme },
  ];

  const colorsAvailable = [
    { name: "vert", value: "green" },
    { name: "rouge", value: "red" },
    { name: "bleu", value: "blue" },
  ];

  return (
    <div className="flex flex-col gap-10">
      <div className="flex gap-5">
        {themes.map((t) => {
          return (
            <label
              key={t.name}
              className="flex flex-col flex-auto h-[106px] w-[206px] justify-around border border-solid rounded group"
            >
              <div className="group-hover:bg-gray-200 bg-gray-100 h-inherit flex items-center justify-center">
                <Image src={t.img} alt="theme" width={50} height={50} />
              </div>
              <div className="relative before:absolute before:inset-x-0 before:bottom--10 before:border-b before:border-black"></div>
              <div className="flex justify-start m-3">
                <input
                  key={t.name}
                  type="radio"
                  value={t.value}
                  checked={theme === t.value}
                  onChange={(e) => setTheme(e.target.value)}
                  className="mr-2"
                />
                {t.name}
              </div>
            </label>
          );
        })}
      </div>
      <div className="flex gap-5">
        {theme !== "dark" &&
          colorsAvailable.map((color) => {
            return (
              <label key={color.name} className="flex flex-col flex-auto">
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
    </div>
  );
};

export default ThemeToggler;
