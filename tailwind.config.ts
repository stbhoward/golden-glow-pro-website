import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#11100e",
        ivory: "#fbfaf7",
        pearl: "#f3eee6",
        champagne: "#c5a354",
        "soft-gold": "#e7d19a"
      },
      fontFamily: {
        sans: [
          "Inter",
          "Avenir Next",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ],
        serif: ["Cormorant Garamond", "Georgia", "Times New Roman", "serif"]
      },
      boxShadow: {
        glow: "0 24px 80px rgba(17, 16, 14, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
