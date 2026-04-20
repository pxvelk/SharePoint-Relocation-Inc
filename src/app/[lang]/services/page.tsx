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
          ? "Commercial-focused relocation and renovation support services designed for precision and continuity."
          : "Nos services de relocalisation commerciale et de soutien aux rénovations de bureaux sont conçus pour maintenir la continuité opérationnelle."}
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {serviceSlugs.map(({ slug, en, fr }) => (
          <article key={slug} className="interactive-card rounded-2xl border border-[#d6dde8] bg-white p-6">
            <h2 className="text-xl font-semibold text-[#0C1F39]">{lang === "en" ? en : fr}</h2>
            <p className="mt-2 text-[#516985]">
              {lang === "en"
                ? "Structured execution, floor-plan alignment, and low-disruption timelines."
                : "Exécution structurée, relocalisation de bureaux basée sur vos plans et échéanciers à faible perturbation."}
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
            ? "Short-term storage, furniture disassembly/reassembly, secure file handling, weekend/night moves, and building coordination."
            : "Entreposage à court terme, démontage/remontage de mobilier, manutention sécurisée des dossiers, interventions de nuit et coordination d'immeuble."}
        </p>
      </section>
      <div className="mt-12">
        <Link href={toLocalizedPath(lang, "quote")} className="btn-primary">
          {t.ctas.primary}
        </Link>
      </div>
    </div>
  );
}
