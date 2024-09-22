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
      perspective: {
        "500": "500px",
      },
      transformStyle: {
        "preserve-3d": "preserve-3d",
      },
      colors: {
        isobg: "#33a3ee",
        isohoverbefore: "#1f5378",
        isohoverafter: "#2982b9",
        clr: "#222327",
        indicator: "#29fd53",
        tbackground: "#222",
        pbackground: "#333",
        pchildbackground: "#694bd1",
        fbackground: "#3586ff",
      },
      boxShadow: {
        "iso-last-child": "1 -120px 120px 20px rgba(0, 0, 0, 0.25)",
        threedslider: "0 0 50px rgba(0, 0, 0, 0.5)",
      },
      fontFamily: {
        pop: ["Poppins"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        ".transform-preserve-3d": {
          "transform-style": "preserve-3d",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
    function ({ addUtilities }: any) {
      const newUtilities = {
        ".perspective-none": {
          perspective: "none",
        },
        ".perspective-500": {
          perspective: "500px",
        },
        ".perspective-1000": {
          perspective: "1000px",
        },
        ".perspective-1500": {
          perspective: "1500px",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
    function ({ addUtilities }: any) {
      const newUtilities = {
        ".custom-top": {
          top: "calc(50% - 150px)",
        },
        ".custom-left": {
          left: "calc(50% - 100px)",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
    function ({ addUtilities }: any) {
      const newUtilities = {
        ".reflect-below": {
          "-webkit-box-reflect":
            "below 1px linear-gradient(transparent, transparent, #0002)",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
export default config;
