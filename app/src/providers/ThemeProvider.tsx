"use client";

import React from "react";
import { ThemeProviderProps } from "next-themes/dist/types";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  ...props
}) => {
  return (
    <NextThemesProvider
      themes={["green", "red", "blue", "light", "dark"]}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
};

export default ThemeProvider;
