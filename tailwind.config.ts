import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        abyss: "#050d12",
        deep: "#0a1a22",
        tide: "#123240",
        foam: "#9fd6e8",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slow-zoom": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        drift: {
          "0%": { transform: "translate3d(-2%, 0, 0)" },
          "100%": { transform: "translate3d(2%, 0, 0)" },
        },
        "bob-down": {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.5" },
          "50%": { transform: "translateY(6px)", opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s ease-out both",
        "slow-zoom": "slow-zoom 22s ease-in-out infinite alternate",
        shimmer: "shimmer 7s linear infinite",
        drift: "drift 24s ease-in-out infinite alternate",
        "bob-down": "bob-down 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
