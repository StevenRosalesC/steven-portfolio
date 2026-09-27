import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Steven Rosales | Full Stack Developer & Software Architect",
    short_name: "Steven Rosales",
    description:
      "Minimalist futuristic bento portfolio of Steven Rosales. Full Stack Developer & Software Architect.",
    start_url: "/",
    display: "standalone",
    background_color: "#08090d",
    theme_color: "#08090d",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/sr-logo-icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/sr-logo.svg",
        sizes: "1000x1000",
        type: "image/svg+xml",
      },
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
