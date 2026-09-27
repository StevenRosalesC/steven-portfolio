import React from "react";
import { projects } from "@/data/projects";

interface JsonLdProps {
  siteUrl?: string;
}

export function JsonLd({
  siteUrl = (
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.stevenrocaiche.space"
  )
    .trim()
    .replace(/\/+$/, ""),
}: JsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Steven Rosales",
        alternateName: "StevenRosalesC",
        givenName: "Steven",
        familyName: "Rosales",
        jobTitle: "Full Stack Developer & Software Architect",
        description:
          "Full Stack Developer and Software Architect specializing in Next.js, React 19, TypeScript, Node.js, NestJS, and PostgreSQL.",
        url: siteUrl,
        image: `${siteUrl}/opengraph-image`,
        logo: `${siteUrl}/sr-logo.svg`,
        sameAs: [
          "https://github.com/StevenRosalesC",
          "https://www.linkedin.com/in/steven-rosales-dev/",
        ],
        email: "mailto:stevenrosales31@gmail.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Santa Elena",
          addressRegion: "Santa Elena",
          addressCountry: "EC",
        },
        knowsAbout: [
          "Full Stack Web Development",
          "Software Architecture",
          "Next.js",
          "React 19",
          "TypeScript",
          "Node.js",
          "NestJS",
          "PostgreSQL",
          "Tailwind CSS",
          "Docker",
          "REST APIs",
          "Cloud Computing",
          "Database Modeling",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Steven Rosales | Full Stack Developer & Software Architect",
        description:
          "Futuristic Bento Portfolio of Steven Rosales showcasing scalable web architectures, full stack platforms, and telemetry HUD.",
        publisher: {
          "@id": `${siteUrl}/#person`,
        },
        image: `${siteUrl}/sr-logo.svg`,
        inLanguage: ["es-EC", "en-US"],
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profilepage`,
        url: siteUrl,
        name: "Steven Rosales Portfolio & Profile",
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        mainEntity: {
          "@id": `${siteUrl}/#person`,
        },
        datePublished: "2024-01-01T00:00:00Z",
        dateModified: new Date().toISOString(),
      },
      {
        "@type": "ItemList",
        "@id": `${siteUrl}/#projects`,
        name: "Featured Software Projects",
        description: "Portfolio of selected full-stack engineering and architecture projects built by Steven Rosales.",
        itemListElement: projects.slice(0, 6).map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "SoftwareApplication",
            name: typeof project.title === "string" ? project.title : project.title.es || project.title.en,
            description:
              typeof project.description === "string"
                ? project.description
                : project.description.es || project.description.en,
            applicationCategory: project.category,
            operatingSystem: "Web",
            author: {
              "@id": `${siteUrl}/#person`,
            },
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            ...(project.liveUrl ? { url: project.liveUrl } : {}),
            ...(project.githubUrl ? { codeRepository: project.githubUrl } : {}),
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
