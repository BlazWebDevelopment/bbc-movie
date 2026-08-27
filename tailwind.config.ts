import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "cursive"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        sky: {
          light: "#bfe9ff",
          DEFAULT: "#5ec5f5",
          deep: "#2e9fe0",
        },
        sunshine: "#ffc72c",
        buttercup: "#ffe680",
        grass: "#7cc242",
        meadow: "#4f9c2a",
        berry: "#e85d9c",
        grape: "#9b6dd6",
        cream: "#fffdf5",
        ink: "#17395c",
      },
      boxShadow: {
        pop: "0 10px 0 0 rgba(23, 57, 92, 0.18)",
        card: "0 14px 30px -12px rgba(23, 57, 92, 0.35)",
      },
      keyframes: {
        "pop-in": {
          "0%": { opacity: "0", transform: "translateY(18px) scale(0.96)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(-1deg)" },
          "50%": { transform: "translateY(-14px) rotate(1deg)" },
        },
        bobble: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-9px)" },
        },
        "drift-slow": {
          "0%": { transform: "translateX(-4%)" },
          "100%": { transform: "translateX(4%)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(4deg)" },
        },
      },
      animation: {
        "pop-in": "pop-in 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) both",
        float: "float 6s ease-in-out infinite",
        bobble: "bobble 2.4s ease-in-out infinite",
        "drift-slow": "drift-slow 26s ease-in-out infinite alternate",
        wiggle: "wiggle 3.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
