import type { Config } from "tailwindcss";
import { createThemes } from "tw-colors";
// import themeLightImage from "@/app/ui/image/themeLight.png";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "theme-light": `url('${themeLightImage}')`,
      // },
      height: {
        inherit: "inherit",
      },
    },
  },
  plugins: [
    createThemes({
      dark: {
        100: "#f9f9f9",
        200: "#838383",
        300: "#bbbbbb",
        400: "#e0e0e0",
        900: "#202020",
      },
      green: {
        100: "#f4fbf6",
        200: "#c4e8d1",
        300: "#5bb98b",
        400: "#2b9a66",
        900: "#193b2d",
      },
      red: {
        100: "#fff7f7",
        200: "#FFcdce",
        300: "#eb3e90",
        400: "#dc3e42",
        900: "#641723",
      },
      blue: {
        100: "#f4faff",
        200: "#5eb1ef",
        300: "#0588f0",
        400: "#c2e5ff",
        900: "#113264",
      },
      light: {
        100: "#f4faff",
        200: "#5eb1ef",
        300: "#0588f0",
        400: "#c2e5ff",
        900: "#113264",
      },
      system: {
        100: "#f4faff",
        200: "#5eb1ef",
        300: "#0588f0",
        400: "#c2e5ff",
        900: "#113264",
      },
    }),
  ],
};

export default config;
