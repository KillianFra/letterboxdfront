import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xsm': '0.830rem'
      },
      colors: {
        background: "#14181C",
        foreground: "var(--foreground)",
        default: '#d8e0e8',
        lbgreen: '#00ac1c',
        lbgreenhover: '#009D1A',
      },
      boxShadow: {
        bottom: "inset 0px -30px 120px 100px rgba(20, 24, 28, 1)",
      },
      fontFamily: {
        graphik: ["Graphik", "sans-serif"],
        graphikRegular: ["Graphik Regular", "sans-serif"],
        tiempos: ["Tiempos", "serif"],
        tiemposTitle: ["Tiempos Headline", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
