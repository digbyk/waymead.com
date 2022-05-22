import { defineConfig } from "windicss/helpers";
import colors from "windicss/colors";
//import plugin from "windicss/plugin";

export default defineConfig({
  darkMode: "media", // or 'class'
  plugins: [
    require("windicss/plugin/typography"),
    // ...
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        white: colors.white,
        blue: colors.sky,
        red: colors.rose,
        pink: colors.fuchsia,
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
});
