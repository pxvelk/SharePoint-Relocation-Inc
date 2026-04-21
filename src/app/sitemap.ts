import { MetadataRoute } from "next";

const baseUrl = "https://phasepointrelocation.ca";
const pages = [
  "",
  "/services",
  "/services/commercial-relocation",
  "/services/renovation-support",
  "/services/internal-office-moves",
  "/services/swing-space-moves",
  "/services/post-renovation-reinstalls",
  "/services/office-decommissioning",
  "/services/sustainability-asset-disposition",
  "/services/cleaning-repairs-handover-support",
  "/industries",
  "/about",
  "/quote",
  "/quote/thank-you",
  "/faq",
  "/contact",
  "/cities",
];
const cityPages = [
  "/cities/montreal",
  "/cities/laval",
  "/cities/longueuil",
  "/cities/quebec-city",
  "/cities/gatineau",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ["en", "fr"].flatMap((lang) =>
    [...pages, ...cityPages].map((page) => ({
      url: `${baseUrl}/${lang}${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: page === "" ? 1 : page.startsWith("/cities/") ? 0.75 : 0.8,
    })),
  );
}
