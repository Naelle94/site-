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
        void: "#360802",
        bg: "#FFFFFF",
        surface: "#FDEDEA",
        surface2: "#E7DCDB",
        line: "#E7DCDB",
        fg: "#360802",
        muted: "#8A6F6B",
        orange: {
          50: "#FFF1EE",
          100: "#FDEDEA",
          200: "#FBCFC5",
          300: "#FAA796",
          400: "#F87D5F",
          500: "#F73B20",
          600: "#E22E15",
          700: "#B82210",
          800: "#8A1A0C",
          900: "#5F1207",
        },
      },
      fontFamily: {
        sans: [
          "Manrope",
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
      boxShadow: {
        card: "0 -4px 16px 0 rgba(0,0,0,0.05)",
        glass: "0 8px 24px 0 rgba(247,59,32,0.1), 0 2px 8px 0 rgba(247,59,32,0.05)",
      },
      letterSpacing: {
        tightest: "-0.045em",
        tighter: "-0.03em",
      },
      maxWidth: {
        content: "1180px",
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(54,8,2,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(54,8,2,0.05) 1px, transparent 1px)",
        glow: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(247,59,32,0.10), transparent)",
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
