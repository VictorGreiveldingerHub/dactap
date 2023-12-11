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

  return (
    <select value={theme} onChange={(e) => setTheme(e.target.value)}>
      <option value="system">System</option>
      <option value="dark">Dark</option>
      <option value="red">Rouge</option>
      <option value="green">Vert</option>
      <option value="blue">Bleu</option>
    </select>
  );
};

export default ThemeToggler;
