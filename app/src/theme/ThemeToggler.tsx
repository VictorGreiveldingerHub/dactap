"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

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
        setTheme("red");
      } else {
        setTheme("dark");
      }
    }
    if (theme === "light") {
      setTheme("green");
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
          <label key={t.name} className="m-2 p-1">
            <input
              key={t.name}
              type="radio"
              value={t.value}
              checked={theme === t.value}
              onChange={(e) => setTheme(e.target.value)}
              className="border rounded"
            />
            {t.name}
          </label>
        );
      })}
    </div>
  );
};

export default ThemeToggler;
