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
        ink: "#0B0B0C",
        paper: "#FBFAF8",
        line: "#E7E3DC",
        muted: "#6D6B67",
        orange: {
          50: "#FFF3EC",
          100: "#FFE3D2",
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
        grid: "linear-gradient(to right, #ECE8E0 1px, transparent 1px), linear-gradient(to bottom, #ECE8E0 1px, transparent 1px)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        fadeUp: "fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
