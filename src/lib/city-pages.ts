import { languages } from "@/lib/site-content";

export const citySlugs = [
  "montreal",
  "laval",
  "longueuil",
  "quebec-city",
  "gatineau",
] as const;

export type CitySlug = (typeof citySlugs)[number];

export const cityPageContent: Record<
  CitySlug,
  {
    city: string;
    en: {
      intro: string;
      relevance: string;
      useCases: string[];
      industries: string[];
    };
    fr: {
      intro: string;
      relevance: string;
      useCases: string[];
      industries: string[];
    };
  }
> = {
  montreal: {
    city: "Montreal",
    en: {
      intro:
        "Montreal teams rely on precise relocation timing to maintain operations in dense multi-tenant office environments.",
      relevance:
        "Our Montreal projects emphasize strict building access rules, elevator booking windows, and phased departmental continuity.",
      useCases: [
        "Downtown tower floor restacks",
        "Renovation swing-space coordination in occupied offices",
        "Weekend relocations for professional service firms",
      ],
      industries: ["Corporate HQ teams", "Financial services", "Legal and consulting offices"],
    },
    fr: {
      intro:
        "À Montréal, les entreprises recherchent une relocalisation de bureaux rigoureuse pour maintenir leurs opérations dans des immeubles à forte densité.",
      relevance:
        "Nos mandats montréalais intègrent la coordination avec la gestion immobilière, les plages d'ascenseur et des déménagements commerciaux planifiés par département.",
      useCases: [
        "Réaménagement d'étages dans les tours du centre-ville",
        "Transitions vers espaces temporaires pendant des rénovations de bureaux",
        "Interventions de fin de semaine pour cabinets professionnels",
      ],
      industries: ["Sièges sociaux", "Services financiers", "Cabinets juridiques et-conseil"],
    },
  },
  laval: {
    city: "Laval",
    en: {
      intro:
        "Laval organizations often require fast commercial transitions between growth stages and workspace upgrades.",
      relevance:
        "We help Laval businesses execute structured moves with secure handling and minimal downtime for administrative and technical teams.",
      useCases: [
        "Internal office reconfiguration after team expansion",
        "Short-term storage during phased upgrades",
        "After-hours relocations for operational continuity",
      ],
      industries: ["Healthcare administration", "Professional offices", "Education support teams"],
    },
    fr: {
      intro:
        "À Laval, les cycles de croissance exigent souvent un déménagement commercial rapide, sans compromettre la continuité des équipes.",
      relevance:
        "Nous accompagnons les entreprises lavalloises avec une exécution structurée, une manutention sécurisée et des fenêtres d'intervention adaptées aux activités en cours.",
      useCases: [
        "Déplacements internes de bureaux après expansion d'équipes",
        "Entreposage temporaire pendant une modernisation en phases",
        "Relocalisation d'entreprise hors heures ouvrables",
      ],
      industries: ["Administration en santé", "Bureaux professionnels", "Organismes du milieu éducatif"],
    },
  },
  longueuil: {
    city: "Longueuil",
    en: {
      intro:
        "Longueuil workspaces frequently need coordinated transitions tied to renovation and consolidation timelines.",
      relevance:
        "PhasePoint supports Longueuil clients with floor-plan-based reinstalls and disciplined project sequencing.",
      useCases: [
        "Inter-department phased moves",
        "Temporary swing-space transitions during construction",
        "Secure file and carton relocation for admin teams",
      ],
      industries: ["Municipal and administrative offices", "Professional services", "Non-profit organizations"],
    },
    fr: {
      intro:
        "Les milieux de travail de Longueuil demandent des transitions d'espaces de travail bien orchestrées, surtout lors de consolidations et de rénovations.",
      relevance:
        "PhasePoint livre à Longueuil des plans de relocalisation commerciale en séquences claires, avec réinstallation finale selon plans d'étage.",
      useCases: [
        "Déménagements internes de bureaux par service",
        "Passage temporaire vers des espaces transitoires en chantier",
        "Gestion sécurisée des dossiers et boîtes d'archives",
      ],
      industries: ["Bureaux municipaux et administratifs", "Services professionnels", "Organismes sans but lucratif"],
    },
  },
  "quebec-city": {
    city: "Quebec City",
    en: {
      intro:
        "Quebec City organizations prioritize structured relocation execution across distributed teams and service units.",
      relevance:
        "Our Quebec City delivery model focuses on bilingual planning communication, access management, and post-renovation precision.",
      useCases: [
        "Multi-phase office transitions with low disruption",
        "Renovation re-entry and workstation reinstalls",
        "Building-coordinated moves for occupied commercial spaces",
      ],
      industries: ["Government-adjacent offices", "Professional services", "Healthcare administration"],
    },
    fr: {
      intro:
        "À Québec, les organisations recherchent un partenaire capable de gérer une relocalisation d'entreprise structurée entre plusieurs équipes et unités de service.",
      relevance:
        "Notre approche à Québec privilégie une planification bilingue, la gestion des accès d'immeuble et un soutien aux rénovations de bureaux orienté précision.",
      useCases: [
        "Transitions de bureaux en plusieurs phases à faible perturbation",
        "Retour en locaux rénovés et remise en place des postes",
        "Déménagement commercial coordonné avec l'immeuble occupé",
      ],
      industries: ["Bureaux para-publics", "Services professionnels", "Administration de la santé"],
    },
  },
  gatineau: {
    city: "Gatineau",
    en: {
      intro:
        "Gatineau teams often require dependable commercial movers who can protect continuity across compliance-driven workplaces.",
      relevance:
        "We execute structured workplace moves in Gatineau with clear accountability, secure handling, and disciplined sequencing.",
      useCases: [
        "After-hours departmental relocations",
        "Reinstallation aligned with approved floor plans",
        "Temporary staging support during renovations",
      ],
      industries: ["Administrative offices", "Contractor-supported projects", "Professional and financial teams"],
    },
    fr: {
      intro:
        "À Gatineau, plusieurs organisations ont besoin d'un déménagement commercial fiable pour préserver la continuité dans des environnements encadrés.",
      relevance:
        "Nous réalisons des projets de relocalisation de bureaux à Gatineau avec responsabilités claires, manutention sécurisée et déroulement maîtrisé.",
      useCases: [
        "Déplacements internes de bureaux en soirée",
        "Réinstallation selon plans approuvés après travaux",
        "Soutien temporaire pendant les phases de rénovation",
      ],
      industries: ["Bureaux administratifs", "Projets appuyés par entrepreneurs généraux", "Équipes professionnelles et financières"],
    },
  },
};

export function getCityStaticParams() {
  return languages.flatMap((lang) => citySlugs.map((city) => ({ lang, city })));
}
