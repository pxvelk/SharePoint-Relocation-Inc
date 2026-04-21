import Link from "next/link";
import { notFound } from "next/navigation";
import { ExecutionIndustrySection } from "@/components/execution-industry-section";
import { SectionReveal } from "@/components/section-reveal";
import { TrustExecutionStrip } from "@/components/trust-execution-strip";
import { content, primaryCities } from "@/lib/site-content";
import { isLanguage, toLocalizedPath } from "@/lib/i18n";

export default async function LocaleHomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const t = content[lang];

  const services =
    lang === "en"
      ? [
          ["Commercial Relocation", "Phased business moves with strict continuity planning."],
          ["Renovation Support", "Coordinate swing-space transitions before and during renovation work."],
          ["Internal Office Moves", "Department-based internal reorganizations with clear labeling workflows."],
          ["Post-Renovation Reinstalls", "Floor-plan-based placement for desks, files, and equipment."],
          ["Office Decommissioning", "Managed closeout delivery with landlord-ready space handover support."],
          ["Sustainability & Asset Disposition", "Reuse, donation, recycling, and diversion tracking before disposal."],
        ]
      : [
          ["Déménagement commercial", "Relocalisation commerciale en phases, coordonnée pour préserver vos opérations."],
          ["Soutien aux rénovations de bureaux", "Gestion des transitions temporaires avant, pendant et après les travaux."],
          ["Déplacements internes de bureaux", "Réorganisation par équipe avec repérage clair des postes et équipements."],
          ["Réinstallations post-rénovation", "Remise en place complète selon plans d'étage et priorités métier."],
          ["Décommissionnement de bureaux", "Fermeture encadrée avec préparation des espaces pour la remise."],
          ["Durabilité et disposition des actifs", "Réemploi, don, recyclage et suivi de diversion avant l'élimination."],
        ];

  return (
    <div>
      <section className="relative min-h-[70vh] border-b border-[#d6dde8]">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2200&q=80')",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 z-0 bg-[#08162d]/52"
          aria-hidden
        />
        <div className="container-shell relative z-10 py-18 md:py-24">
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <p className="mb-4 inline-flex rounded-full border border-[#d6dde8] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#637286]">
              PhasePoint Relocation
            </p>
            <h1 className="text-4xl font-semibold leading-[1.08] text-white md:text-6xl">
              {lang === "en"
                ? "Commercial Moves Without Operational Disruption"
                : "Des déménagements commerciaux sans perturber vos opérations"}
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-base font-semibold text-[#b8cbe5] md:text-lg">
              {lang === "en"
                ? "Commercial Relocation, Renovation Support & Office Decommissioning for Quebec organizations."
                : "Relocalisation commerciale, soutien aux rénovations et décommissionnement de bureaux au Québec."}
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-base text-[#d8e2f0] md:text-lg">
              {lang === "en"
                ? "Structured execution, sustainability-minded closeout, and bilingual project control across Quebec."
                : "Exécution structurée, fermeture responsable orientée durabilité et coordination bilingue partout au Québec."}
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link href={toLocalizedPath(lang, "quote")} className="btn-primary">
                {t.ctas.primary}
              </Link>
              <a href={`tel:${t.phone.replace(/[^\d+]/g, "")}`} className="btn-secondary">
                {t.ctas.secondary}
              </a>
            </div>
            <Link href={toLocalizedPath(lang, "services")} className="mt-4 inline-flex text-sm font-semibold text-[#7de3ed] hover:text-white">
              {lang === "en" ? "Explore Services" : "Découvrir nos services"}
            </Link>
          </div>
        </div>
      </section>

      <TrustExecutionStrip lang={lang} />

      <SectionReveal className="container-shell py-14 md:py-16">
        <h2 className="section-title">{lang === "en" ? "Services Overview" : "Aperçu des services"}</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map(([title, desc]) => (
            <article key={title} className="interactive-card rounded-2xl border border-[#d6dde8] bg-white p-6">
              <h3 className="text-xl font-semibold text-[#0C1F39]">{title}</h3>
              <p className="mt-2 text-[#516985]">{desc}</p>
            </article>
          ))}
        </div>
      </SectionReveal>

      <SectionReveal className="bg-[#0C1F39] py-14 text-white md:py-16">
        <div className="container-shell">
          <h2 className="text-3xl font-semibold md:text-4xl">{lang === "en" ? "Our 5-Step Transition & Closeout Process" : "Notre méthode de transition et fermeture en 5 étapes"}</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-5">
            {(lang === "en" ? ["Assess", "Plan", "Execute", "Reinstall / Decommission", "Report & Close Out"] : ["Évaluer", "Planifier", "Exécuter", "Réinstaller / Décommissionner", "Rapporter et Clôturer"]).map((step, index) => (
              <div key={step} className="interactive-card rounded-2xl border border-white/20 bg-white/8 p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#7de3ed]">
                  {lang === "en" ? "Step" : "Étape"} {index + 1}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{step}</h3>
                <p className="mt-2 text-sm text-white/75">
                  {lang === "en"
                    ? "Structured coordination, sustainability checks, and accountable transition controls at each phase."
                    : "Coordination structurée, vérifications de durabilité et contrôle rigoureux de transition à chaque phase."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      <ExecutionIndustrySection lang={lang} />

      <SectionReveal className="container-shell py-16 md:py-24">
        <h2 className="section-title">{lang === "en" ? "Quebec Service Area" : "Territoire de service au Québec"}</h2>
        <p className="mt-4 text-[#516985]">
          {lang === "en"
            ? "Primary markets include Montreal, Laval, Longueuil, Quebec City, and Gatineau, with broader commercial support across Quebec."
            : "Nos marchés prioritaires couvrent Montréal, Laval, Longueuil, Québec et Gatineau, avec une capacité de relocalisation d'entreprise à l'échelle du Québec."}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {primaryCities.map((city) => (
            <Link
              key={city}
              href={toLocalizedPath(
                lang,
                `cities/${city.toLowerCase().replace(/\s+/g, "-")}`,
              )}
              className="interactive-chip rounded-full border border-[#d6dde8] px-4 py-2 text-sm font-semibold text-[#0C1F39]"
            >
              {city}
            </Link>
          ))}
        </div>
        <Link href={toLocalizedPath(lang, "cities")} className="mt-6 inline-block text-sm font-semibold text-[#0c9ead]">
          {lang === "en" ? "Explore all city service pages" : "Explorer l'ensemble de nos pages locales"}
        </Link>
      </SectionReveal>

      <SectionReveal className="border-y border-[#d6dde8] bg-[#f5f8fd] py-16">
        <div className="container-shell">
          <h2 className="section-title">{lang === "en" ? "Reporting & Case Study Snapshot" : "Aperçu rapports et études de cas"}</h2>
          <p className="mt-4 max-w-3xl text-[#516985]">
            {lang === "en"
              ? "Use this section for decommissioning reports, asset disposition summaries, diversion rates, and documented handover outcomes."
              : "Utilisez cette section pour les rapports de décommissionnement, résumés de disposition d'actifs, taux de diversion et preuves de remise des lieux."}
          </p>
          <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {(lang === "en"
              ? ["Furniture destination tracking", "Reuse vs disposal summaries", "Recycling and landfill diversion rates", "Handover-ready closeout documentation"]
              : ["Traçabilité des destinations du mobilier", "Synthèse réemploi versus élimination", "Taux de recyclage et diversion d'enfouissement", "Documentation de fermeture prête pour la remise"]).map((item) => (
              <p key={item} className="rounded-xl border border-[#d6dde8] bg-white px-4 py-3 text-sm font-medium text-[#274764]">
                {item}
              </p>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="container-shell py-16 md:py-20">
        <div className="rounded-3xl bg-[#0C1F39] p-10 text-white">
          <h2 className="text-3xl font-semibold">{lang === "en" ? "Ready to Plan Your Workplace Transition?" : "Prêt à planifier votre transition d'espaces de travail?"}</h2>
          <p className="mt-4 text-white/80">
            {lang === "en"
              ? "Tell us your timeline, constraints, and operational priorities. Our team responds within 1 business day."
              : "Partagez vos contraintes de calendrier et vos priorités opérationnelles. Notre équipe vous répond sous 1 jour ouvrable."}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href={toLocalizedPath(lang, "quote")} className="btn-primary !bg-[#0c9ead] hover:!bg-[#17aebb]">
              {t.ctas.primary}
            </Link>
            <a href={`tel:${t.phone.replace(/[^\d+]/g, "")}`} className="btn-secondary !border-white/35 !bg-transparent !text-white hover:!bg-white/10">
              {t.ctas.secondary}
            </a>
          </div>
        </div>
      </SectionReveal>
    </div>
  );
}
