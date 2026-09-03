import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Gratia brand — deep emerald surface, bright mint/emerald accent (matches gogratia.com)
        surface: {
          950: "#04120F",
          900: "#0A2621",
          800: "#0F332C",
          700: "#153F37",
          600: "#1C4C42",
          500: "#2A6355",
        },
        paper: {
          50: "#FFFFFF",
          100: "#EAF5F1",
        },
        brand: {
          300: "#8CF0C2",
          400: "#5EEBAA",
          500: "#34D399",
          600: "#1FB781",
          700: "#149267",
        },
        signal: {
          success: "#34D399",
          danger: "#FB7A6B",
          info: "#5AA9E6",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 1px 2px rgba(0,0,0,0.35), 0 8px 24px -8px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
