import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
} from "unocss";
import presetWebFonts from "@unocss/preset-web-fonts";
import presetIcons from "@unocss/preset-icons";

export default defineConfig({
  presets: [
    //  presetAttributify(), // required if using attributify mode
    presetUno(), // required
    presetTypography(),
    presetIcons({
      /* options */
    }),
    presetWebFonts({
      provider: "google", // default provider
      fonts: {
        // these will extend the default theme
        sans: "Inter",
        mono: ["Fira Code", "Fira Mono:400,700"],
        // custom ones
        lobster: "Lobster",
        inter: [
          {
            name: "Inter",
            weights: ["100", "300", "500"],
            italic: true,
          },
          {
            name: "sans-serif",
            provider: "none",
          },
        ],
      },
    }),
  ],
});
