import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        isobg: "#33a3ee",
        isohoverbefore: "#1f5378",
        isohoverafter: "#2982b9",
        clr: "#222327",
        indicator: "#29fd53",
      },
      boxShadow: {
        "iso-last-child": "1 -120px 120px 20px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        pop: ["Poppins"],
      },
    },
  },
  plugins: [],
};
export default config;
