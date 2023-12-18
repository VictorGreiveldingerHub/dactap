"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    console.log(localStorage.getItem("theme"));
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
    <div className="flex flex-col h-5 red:text-red-100 blue:text-blue-100 green:text-green-100">
      {themes.map((t) => {
        return (
          <label key={t.name} className="m-2 p-1 border rounded">
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
