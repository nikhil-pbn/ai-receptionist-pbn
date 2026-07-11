// src/fonts/cera.ts

import localFont from "next/font/local";

export const CeraPro = localFont({
  src: [
    {
      path: "./CeraPro-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./CeraPro-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./CeraPro-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./CeraPro-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./CeraPro-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./CeraPro-Black.otf",
      weight: "900",
      style: "normal",
    },

    // Italic variants
    {
      path: "./CeraPro-Thin-Italic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "./CeraPro-Light-Italic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./CeraPro-Regular-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./CeraPro-Medium-Italic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./CeraPro-Bold-Italic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./CeraPro-Black-Italic.otf",
      weight: "900",
      style: "italic",
    },
  ],
  display: "swap",
  preload: true,
});