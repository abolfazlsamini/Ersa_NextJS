/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        creato_medium: "var(--font-creato_medium)",
        neueplaktext_regular: "var(--font-neueplaktext_regular)",
        t1korium: "var(--font-t1korium)",
        zau: "var(--font-zau)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        grayBLue: "#6f87a0eb",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(
      function ({ addVariant }) {
        addVariant("glow", ".glow-capture .glow-overlay &");
      },
      {
        theme: {
          extend: {
            colors: {
              // https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix
              glow: "color-mix(in srgb, var(--glow-color) calc(<alpha-value> * 100%), transparent)",
            },
          },
        },
      }
    ),
  ],
};
