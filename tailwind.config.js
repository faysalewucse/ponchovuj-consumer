/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/keep-react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("keep-react/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#726EED",
        primary2: "#eef2ff",
        secondary: "#000000",
        dark1: "#2B2A3F",
        star: "#E17B21",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
