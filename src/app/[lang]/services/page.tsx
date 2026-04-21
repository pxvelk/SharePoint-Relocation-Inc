import Link from "next/link";
import { notFound } from "next/navigation";
import { content } from "@/lib/site-content";
import { isLanguage, toLocalizedPath } from "@/lib/i18n";

const serviceSlugs = [
  {
    slug: "commercial-relocation",
    en: "Commercial Relocation",
    fr: "Déménagement commercial",
  },
  {
    slug: "renovation-support",
    en: "Renovation Support",
    fr: "Soutien aux rénovations de bureaux",
  },
  {
    slug: "internal-office-moves",
    en: "Internal Office Moves",
    fr: "Déplacements internes de bureaux",
  },
  {
    slug: "swing-space-moves",
    en: "Swing-Space Moves",
    fr: "Transitions vers espaces temporaires",
  },
  {
    slug: "post-renovation-reinstalls",
    en: "Post-Renovation Reinstalls",
    fr: "Réinstallations post-rénovation",
  },
  {
    slug: "office-decommissioning",
    en: "Office Decommissioning",
    fr: "Décommissionnement de bureaux",
  },
  {
    slug: "sustainability-asset-disposition",
    en: "Sustainability & Asset Disposition",
    fr: "Durabilité et disposition des actifs",
  },
  {
    slug: "cleaning-repairs-handover-support",
    en: "Cleaning, Repairs & Handover Support",
    fr: "Nettoyage, réparations et soutien à la remise",
  },
] as const;

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const t = content[lang];
  return (
    <div className="container-shell py-16 md:py-24">
      <h1 className="section-title">{lang === "en" ? "Services" : "Services"}</h1>
      <p className="mt-4 max-w-3xl text-[#516985]">
        {lang === "en"
          ? "Commercial-focused relocation, decommissioning, and sustainability closeout services designed for precision, continuity, and responsible handover."
          : "Nos services de relocalisation commerciale, de décommissionnement et de fermeture durable sont conçus pour la continuité opérationnelle et une remise responsable."}
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {serviceSlugs.map(({ slug, en, fr }) => (
          <article key={slug} className="interactive-card rounded-2xl border border-[#d6dde8] bg-white p-6">
            <h2 className="text-xl font-semibold text-[#0C1F39]">{lang === "en" ? en : fr}</h2>
            <p className="mt-2 text-[#516985]">
              {lang === "en"
                ? "Structured execution, low-disruption scheduling, and accountable closeout reporting."
                : "Exécution structurée, échéanciers à faible perturbation et documentation claire de fermeture."}
            </p>
            <Link href={toLocalizedPath(lang, `services/${slug}`)} className="mt-4 inline-block text-sm font-semibold text-[#0c9ead]">
              {lang === "en" ? "View service" : "Consulter ce service"}
            </Link>
          </article>
        ))}
      </div>
      <section className="interactive-card mt-14 rounded-2xl border border-[#d6dde8] bg-[#f8fbff] p-6">
        <h3 className="text-lg font-semibold text-[#0C1F39]">{lang === "en" ? "Supporting Services" : "Services complémentaires"}</h3>
        <p className="mt-3 text-[#516985]">
          {lang === "en"
            ? "Short-term storage, furniture disassembly/reassembly, secure file handling, donation/recycling coordination, sustainability reporting, and landlord handover readiness."
            : "Entreposage à court terme, démontage/remontage, manutention sécurisée, coordination don/recyclage, reporting de durabilité et préparation à la remise locative."}
        </p>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <article className="interactive-card rounded-2xl border border-[#d6dde8] bg-white p-6">
          <h3 className="text-lg font-semibold text-[#0C1F39]">
            {lang === "en"
              ? "Office Decommissioning & Sustainability Closeout"
              : "Décommissionnement de bureaux et fermeture durable"}
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-[#516985]">
            {(lang === "en"
              ? [
                  "Furniture inventory and disposition planning",
                  "Reuse, donation, recycling, and resale coordination",
                  "Asset destination tracking and diversion reporting",
                  "Landlord/property-manager ready decommissioning summaries",
                ]
              : [
                  "Inventaire du mobilier et planification de disposition",
                  "Coordination réemploi, don, recyclage et revente",
                  "Traçabilité des actifs et rapports de diversion",
                  "Rapports de décommissionnement prêts pour bailleurs et gestionnaires",
                ]).map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>

        <article className="interactive-card rounded-2xl border border-[#d6dde8] bg-white p-6">
          <h3 className="text-lg font-semibold text-[#0C1F39]">
            {lang === "en"
              ? "Cleaning, Repairs & Handover Support"
              : "Nettoyage, réparations et soutien à la remise"}
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-[#516985]">
            {(lang === "en"
              ? [
                  "Minor patching, touch-ups, and remedial coordination",
                  "Move-out cleaning and final wipe-down support",
                  "Handover condition readiness before turnover",
                  "Documented closeout records for internal and external stakeholders",
                ]
              : [
                  "Retouches mineures, correctifs et coordination des remises en état",
                  "Nettoyage de sortie et préparation finale des espaces",
                  "Préparation des lieux avant remise aux parties prenantes",
                  "Dossiers de clôture documentés pour équipes internes et externes",
                ]).map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>
      </section>
      <div className="mt-12">
        <Link href={toLocalizedPath(lang, "quote")} className="btn-primary">
          {t.ctas.primary}
        </Link>
      </div>
    </div>
  );
}
