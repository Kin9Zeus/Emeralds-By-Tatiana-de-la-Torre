import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          deep: "#0A3B24",
          dark: "#062117",
          medium: "#116B3E",
          light: "#1A8F54",
          subtle: "#2AAF6A",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E8D48B",
          dark: "#B8960C",
          muted: "#C4A44A",
        },
        pearl: "#F5F0E8",
        cream: "#FEFCF7",
        charcoal: "#1A1A1A",
        obsidian: "#0D0D0D",
      },
      fontFamily: {
        cinzel: ["var(--font-cinzel)", "serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #D4AF37 0%, #E8D48B 50%, #D4AF37 100%)",
        "gold-gradient-horizontal":
          "linear-gradient(90deg, transparent 0%, #D4AF37 50%, transparent 100%)",
        "emerald-gradient":
          "linear-gradient(180deg, #062117 0%, #0A3B24 50%, #062117 100%)",
        "dark-fade":
          "linear-gradient(180deg, transparent 0%, #0D0D0D 100%)",
        "dark-fade-up":
          "linear-gradient(0deg, transparent 0%, #0D0D0D 100%)",
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out forwards",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "blur-focus": "blurFocus 1.5s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
        "scroll-hint": "scrollHint 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blurFocus: {
          "0%": { opacity: "0", filter: "blur(20px)" },
          "100%": { opacity: "1", filter: "blur(0px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        pulseGold: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        scrollHint: {
          "0%, 100%": { opacity: "0.4", transform: "translateY(0)" },
          "50%": { opacity: "1", transform: "translateY(8px)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      letterSpacing: {
        luxury: "0.3em",
        ultra: "0.5em",
      },
    },
  },
  plugins: [],
};
export default config;
