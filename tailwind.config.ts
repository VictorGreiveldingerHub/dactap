import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2x1": "1400px"
      }
    },
    extend: {
      colors: {
        // DarkMode
        gray: {
          100: "#f9f9f9",
          200: "#838383",
          300: "#bbbbbb",
          400: "#e0e0e0",
          900: "#202020"
        },
        blue: {
          100: "#f4faff",
          200: "#5eb1ef",
          300: "#0588f0",
          400: "#c2e5ff",
          900: "#113264"
        },
        red: {
          100: "#fff7f7",
          200: "#FFcdce",
          300: "#eb3e90",
          400: "#dc3e42",
          900: "#641723"
        },
        green: {
          100: "#f4fbf6",
          200: "#c4e8d1",
          300: "#5bb98b",
          400: "#2b9a66",
          900: "#193b2d"
        }
      },
    },
  },
  plugins: [],
};

export default config;
