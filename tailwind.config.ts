import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand background: deep pine/forest green (matches the design)
        forest: {
          50: "#eef7f2",
          100: "#d4ece0",
          200: "#a9d8c1",
          300: "#76bd9d",
          400: "#479c78",
          500: "#2c805d",
          600: "#1e6749",
          700: "#1a5740",
          800: "#15543f",
          900: "#0e3a2c",
          950: "#072018",
        },
        // Primary academic navy
        navy: {
          50: "#f1f5fb",
          100: "#e2eaf6",
          200: "#c0d2ec",
          300: "#93b1dc",
          400: "#5e87c7",
          500: "#3a66ac",
          600: "#2b4f8e",
          700: "#243f72",
          800: "#21375f",
          900: "#0f2444",
          950: "#0a1830",
        },
        // Single accent: refined academic gold
        accent: {
          50: "#fbf7ec",
          100: "#f5ebca",
          200: "#ebd692",
          300: "#e0bf57",
          400: "#d4a82f",
          500: "#bb8c20",
          600: "#97691b",
          700: "#744f1a",
          800: "#5f4019",
          900: "#523818",
          950: "#2f1e0a",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 1px 2px 0 rgb(15 36 68 / 0.04), 0 8px 24px -12px rgb(15 36 68 / 0.12)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out both",
        "fade-in": "fade-in 0.2s ease-out both",
        "scale-in": "scale-in 0.25s ease-out both",
        float: "float 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
