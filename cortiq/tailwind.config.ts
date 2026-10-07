import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      colors: {
        void: "#111111",
        bg: "#FFFFFF",
        surface: "#FAFAF8",
        surface2: "#F3F2EF",
        line: "#E5E5E5",
        fg: "#111111",
        muted: "#6B6B6B",
        orange: {
          50: "#FFF4EE",
          100: "#FFE8DC",
          200: "#FFC6A3",
          300: "#FF9E66",
          400: "#FF7A38",
          500: "#FF5A1F",
          600: "#EA4507",
          700: "#C13703",
          800: "#8F2A05",
          900: "#5F1D06",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "Liberation Mono",
          "monospace",
        ],
      },
      letterSpacing: {
        tightest: "-0.045em",
        tighter: "-0.03em",
      },
      maxWidth: {
        content: "1180px",
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(17,17,17,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,17,17,0.045) 1px, transparent 1px)",
        glow: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(255,90,31,0.10), transparent)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        pulseSoft: "pulseSoft 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
