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
        // // Blue tint
        // 'blue-bg': '#f4faff', // Background
        // 'blue-at': '#113264', // Accessible text
        // 'blue-ic': '#5eb1ef', // Interactive component
        // 'blue-bs': '#0588f0', // Borders and separators
        // 'blue-sc': '#c2e5ff', // Solid color
        // // Red tint 
        // 'red-bg': '#fff7f7',
        // 'red-at': '#641723',
        // 'red-ic': '#FFcdce',
        // 'red-bs': '#eb3e90',
        // 'red-sc': '#dc3e42',
        // // Green tint
        // 'green-bg': '#f4fbf6',
        // 'green-at': '#193b2d',
        // 'green-ic': '#c4e8d1',
        // 'green-bs': '#5bb98b',
        // 'green-sc': '#2b9a66',
        // // Dark tint
        // 'dark-bg': '#f9f9f9',
        // 'dark-at': '#202020',
        // 'dark-ic': '#838383',
        // 'dark-bs': '#bbbbbb',
        // 'dark-sc': '#e0e0e0',
        bg: "(var(--color-bg) / <alpha-value>)"
      },
    },
  },
  plugins: [],
};

export default config;
