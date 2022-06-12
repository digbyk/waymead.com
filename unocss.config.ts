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
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
    presetWebFonts({
      provider: "google", // default provider
      fonts: {
        sans: "Inter",
        inter: [
          {
            name: "Inter",
            weights: ["100", "300", "500"],
            italic: true,
          },
        ],
      },
    }),
  ],
});
