export const languages = ["en", "fr"] as const;
export type Language = (typeof languages)[number];

export const primaryCities = [
  "Montreal",
  "Laval",
  "Longueuil",
  "Quebec City",
  "Gatineau",
] as const;

export const moveTypes = [
  "Commercial Relocation",
  "Renovation Support",
  "Internal Office Moves",
  "Swing-Space Moves",
  "Post-Renovation Reinstalls",
  "Office Decommissioning",
  "Sustainability & Asset Disposition",
  "Cleaning, Repairs & Handover Support",
] as const;

export const moveTypesFr = [
  "Déménagement commercial",
  "Soutien aux rénovations de bureaux",
  "Déménagements internes de bureaux",
  "Transitions vers des espaces temporaires",
  "Réinstallations post-rénovation",
  "Décommissionnement de bureaux",
  "Durabilité et disposition des actifs",
  "Nettoyage, réparations et soutien à la remise",
] as const;

export const content = {
  en: {
    localeLabel: "EN",
    phone: "+1 (514) 555-0182",
    slogan: "Move with minimal disruption",
    descriptor:
      "Commercial Relocation, Renovation Support & Office Decommissioning",
    nav: [
      ["services", "Services"],
      ["industries", "Industries"],
      ["about", "About"],
      ["faq", "FAQ"],
      ["contact", "Contact"],
    ] as const,
    ctas: {
      primary: "Request a Commercial Quote",
      secondary: "Call to Discuss Your Project",
      tertiary: "Explore Services",
    },
    trustStrip: [
      "Commercial-focused",
      "Structured project planning",
      "Minimal disruption approach",
      "After-hours capability",
      "Floor-plan-based reinstallation",
      "Responsible decommissioning support",
      "Furniture reuse and asset diversion",
      "Recycling-first closeout planning",
      "Reporting for handover and compliance",
      "Bilingual service across Quebec",
    ],
  },
  fr: {
    localeLabel: "FR",
    phone: "+1 (514) 555-0182",
    slogan: "Déménagez avec un minimum de perturbations",
    descriptor:
      "Relocalisation commerciale, soutien aux rénovations et décommissionnement",
    nav: [
      ["services", "Services"],
      ["industries", "Secteurs"],
      ["about", "À propos"],
      ["faq", "FAQ"],
      ["contact", "Contact"],
    ] as const,
    ctas: {
      primary: "Demander une soumission commerciale",
      secondary: "Appeler pour discuter de votre projet",
      tertiary: "Découvrir nos services",
    },
    trustStrip: [
      "Approche spécialisée en milieux commerciaux",
      "Planification de projet structurée",
      "Méthode de transition à faible perturbation",
      "Interventions de soir et de fin de semaine",
      "Réinstallation selon plans d'étage",
      "Soutien en décommissionnement responsable",
      "Réemploi du mobilier et diversion des actifs",
      "Planification de fermeture orientée recyclage",
      "Rapports de remise et de conformité",
      "Service bilingue partout au Québec",
    ],
  },
} as const;

export type LocalizedContent = (typeof content)[Language];
