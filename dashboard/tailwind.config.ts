import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0b0d12",
          900: "#12151c",
          800: "#191d27",
          700: "#232836",
          600: "#2f3646",
          500: "#454e63",
        },
        paper: {
          50: "#f7f5f0",
          100: "#efece3",
        },
        gold: {
          400: "#e8bf6a",
          500: "#d9a441",
          600: "#b98530",
        },
        signal: {
          success: "#4fae8a",
          danger: "#d9705c",
          info: "#5b8fd9",
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
        serif: ["Fraunces", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(0,0,0,0.3), 0 8px 24px -8px rgba(0,0,0,0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
