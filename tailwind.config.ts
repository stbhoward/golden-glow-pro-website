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
        ink: "#14110d",
        ivory: "#f8f4ed",
        pearl: "#eee6da",
        champagne: "#b89048",
        bronze: "#7a5b2f",
        porcelain: "#fffdf8",
        "soft-gold": "#ddc184"
      },
      fontFamily: {
        sans: [
          "Avenir Next",
          "Inter",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ],
        serif: [
          "Avenir Next",
          "Inter",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ]
      },
      boxShadow: {
        glow: "0 28px 90px rgba(20, 17, 13, 0.16)",
        soft: "0 18px 48px rgba(20, 17, 13, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
