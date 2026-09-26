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
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
