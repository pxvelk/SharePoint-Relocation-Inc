import Link from "next/link";
import { notFound } from "next/navigation";
import { content, languages } from "@/lib/site-content";
import { isLanguage, toLocalizedPath } from "@/lib/i18n";

const details = {
  "commercial-relocation": {
    en: {
      title: "Commercial Relocation",
      summary: "End-to-end business relocation planning for occupied workplaces with continuity safeguards.",
    },
    fr: {
      title: "Déménagement commercial",
      summary: "Planification complète de relocalisation d'entreprise pour des bureaux occupés, avec continuité des opérations.",
    },
  },
  "renovation-support": {
    en: {
      title: "Renovation Support",
      summary: "Move sequencing and temporary transition planning during office renovations.",
    },
    fr: {
      title: "Soutien aux rénovations de bureaux",
      summary: "Séquençage des déplacements et coordination des phases de chantier pour limiter l'impact sur les équipes.",
    },
  },
  "internal-office-moves": {
    en: {
      title: "Internal Office Moves",
      summary: "Department-by-department internal moves coordinated around daily operations.",
    },
    fr: {
      title: "Déplacements internes de bureaux",
      summary: "Réorganisation des espaces par département, alignée sur vos opérations quotidiennes.",
    },
  },
  "swing-space-moves": {
    en: {
      title: "Swing-Space Moves",
      summary: "Structured temporary migrations to swing spaces during staging and construction.",
    },
    fr: {
      title: "Transitions vers espaces temporaires",
      summary: "Déploiement contrôlé vers des zones temporaires pendant les travaux ou les réaménagements.",
    },
  },
  "post-renovation-reinstalls": {
    en: {
      title: "Post-Renovation Reinstalls",
      summary: "Precise furniture, equipment, and team reinstalls using updated floor plans.",
    },
    fr: {
      title: "Réinstallations post-rénovation",
      summary: "Remise en place précise des postes et équipements selon plans d'étage mis à jour.",
    },
  },
  "office-decommissioning": {
    en: {
      title: "Office Decommissioning",
      summary:
        "End-of-lease and workplace closure delivery with structured handover readiness and minimal operational risk.",
    },
    fr: {
      title: "Décommissionnement de bureaux",
      summary:
        "Gestion de fin de bail et fermeture de site avec préparation structurée à la remise des lieux.",
    },
  },
  "sustainability-asset-disposition": {
    en: {
      title: "Sustainability & Asset Disposition",
      summary:
        "Responsible reuse, donation, recycling, and asset tracking programs designed to reduce landfill and improve reporting accountability.",
    },
    fr: {
      title: "Durabilité et disposition des actifs",
      summary:
        "Programmes de réemploi, don, recyclage et traçabilité des actifs pour réduire l'enfouissement et améliorer la reddition.",
    },
  },
  "cleaning-repairs-handover-support": {
    en: {
      title: "Cleaning, Repairs & Handover Support",
      summary:
        "Practical closeout support including minor touch-ups, cleaning coordination, and handover condition readiness.",
    },
    fr: {
      title: "Nettoyage, réparations et soutien à la remise",
      summary:
        "Soutien de fermeture incluant retouches mineures, coordination du nettoyage et préparation de l'état de remise.",
    },
  },
} as const;

type ServiceSlug = keyof typeof details;

export function generateStaticParams() {
  const slugs = Object.keys(details);
  return languages.flatMap((lang) => slugs.map((slug) => ({ lang, slug })));
}

export default async function ServiceDetailsPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isLanguage(lang)) notFound();
  const service = details[slug as ServiceSlug]?.[lang];
  if (!service) notFound();
  const t = content[lang];

  return (
    <div className="container-shell py-16 md:py-24">
      <h1 className="section-title">{service.title}</h1>
      <p className="mt-4 max-w-3xl text-[#516985]">{service.summary}</p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {(lang === "en"
          ? [
              "Structured planning workshop",
              "Operational risk mapping",
              "Building-management coordination",
              "Secure handling of files and equipment",
              "After-hours and weekend execution",
              "Floor-plan-based final placement",
              "Asset destination tracking and reporting",
              "Reuse, donation, recycling, and diversion pathways",
              "Minor repairs, cleaning, and handover readiness",
            ]
          : [
              "Atelier de cadrage et planification structurée",
              "Cartographie des risques opérationnels",
              "Coordination avec la gestion immobilière",
              "Manutention sécurisée des dossiers et équipements",
              "Exécution en soirée et fin de semaine",
              "Remise en place finale selon plans d'étage",
              "Traçabilité des actifs et rapports de destination",
              "Parcours de réemploi, don, recyclage et diversion",
              "Retouches mineures, nettoyage et préparation à la remise",
            ]).map((item) => (
          <p key={item} className="rounded-xl border border-[#d6dde8] bg-white px-5 py-4 text-[#516985]">
            {item}
          </p>
        ))}
      </div>
      <div className="mt-12 flex flex-wrap gap-3">
        <Link href={toLocalizedPath(lang, "quote")} className="btn-primary">
          {t.ctas.primary}
        </Link>
        <a href={`tel:${t.phone.replace(/[^\d+]/g, "")}`} className="btn-secondary">
          {t.ctas.secondary}
        </a>
      </div>
    </div>
  );
}
