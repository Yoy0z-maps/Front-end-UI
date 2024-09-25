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
        "skin-shadow": "linear-gradient(rgba(0,0,0,0.1),transparent)",
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
        eyebackground: "#edf8ff",
        eyered: "#fb6971",
        eyeblue: "#6192a1",
        skin: "#fdece2",
        eyeblack: "#111",
        mouth: "#ff4e57",
        statusbackground: "#363636",
        statusborder: "#4d4c51",
      },
      boxShadow: {
        "iso-last-child": "1 -120px 120px 20px rgba(0, 0, 0, 0.25)",
        threedslider: "0 0 50px rgba(0, 0, 0, 0.5)",
        "eyes-shadow": "25px 25px 0 rgba(0,0,0,0.05)",
        "indicator-before": "1px -10px 0 0 #222327",
        "indicator-after": "-1px -10px 0 0 #222327",
        "indicator2-before": "15px 18px #fff",
        "indicator2-after": "-15px 18px #fff",
        "eye-shadow": "0 0 0 5px #3d5d89",
        eyebrush: "0 -3px 0 #111",
        "mouth-shadow": "inset 0 10px 0 rgba(0,0,0,0.2)",
        "circle-shadow":
          "inset 0 5px 10px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.75), 0 -2px 2px rgba(255,255,255,0.5), inset 0 4px 2px rgba(0,0,0,0.25), inset 0 -2px 2px rgba(255,255,255,0.5)",
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
