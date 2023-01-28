import localFont from "@next/font/local";

export const gothamPro = localFont({
  src: [
    {
      path: "./gotham_pro/GothamPro-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./gotham_pro/GothamPro-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
    {
      path: "./gotham_pro/GothamPro-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./gotham_pro/GothamPro-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "./gotham_pro/GothamProNarrow-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./gotham_pro/GothamPro-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./gotham_pro/GothamPro-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./gotham_pro/GothamProNarrow-Medium.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./gotham_pro/GothamPro.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./gotham_pro/GothamPro-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./gotham_pro/GothamPro-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./gotham_pro/GothamPro-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
  ],
  variable: "--gotham-pro",
  fallback: ["system-ui", "helvetica", "sans-serif"],
});
