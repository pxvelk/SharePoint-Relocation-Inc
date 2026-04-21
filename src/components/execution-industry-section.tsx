import Link from "next/link";
import { Language } from "@/lib/site-content";
import { toLocalizedPath } from "@/lib/i18n";

type ExecutionIndustrySectionProps = {
  lang: Language;
};

export function ExecutionIndustrySection({ lang }: ExecutionIndustrySectionProps) {
  const executionPoints =
    lang === "en"
      ? [
          "Low-disruption transition planning aligned with live business operations",
          "Phased execution by department to protect continuity at every stage",
          "Building coordination for loading docks, elevators, access windows, and site rules",
          "After-hours and weekend deployment when operational uptime is critical",
          "Secure handling of furniture, files, cartons, and workplace equipment",
          "Floor-plan-based reinstallation for accurate post-renovation placement",
          "Asset destination tracking and decommissioning reporting",
          "Reuse, donation, recycling, and diversion-first disposition planning",
        ]
      : [
          "Planification à faible perturbation alignée sur les opérations actives",
          "Exécution en phases par département pour préserver la continuité",
          "Coordination des accès d'immeuble, quais, ascenseurs et fenêtres d'intervention",
          "Interventions de soir et de fin de semaine lorsque la disponibilité est critique",
          "Manutention sécurisée du mobilier, des dossiers, des boîtes et des équipements",
          "Réinstallation selon plans d'étage pour une remise en place post-rénovation précise",
          "Traçabilité des destinations d'actifs et rapports de décommissionnement",
          "Réemploi, don, recyclage et planification de diversion en priorité",
        ];

  const industries =
    lang === "en"
      ? [
          "Corporate Offices",
          "Financial & Professional Services",
          "Healthcare & Administrative Offices",
          "Education & Non-Profit",
          "Property Management",
          "General Contractors & Renovation Firms",
        ]
      : [
          "Bureaux corporatifs",
          "Services financiers et professionnels",
          "Bureaux administratifs en santé",
          "Éducation et organismes à but non lucratif",
          "Gestion immobilière",
          "Entrepreneurs généraux et firmes de rénovation",
        ];

  return (
    <section className="border-y border-[#d6dde8] bg-gradient-to-b from-white to-[#f5f8fd] py-14 md:py-16">
      <div className="container-shell">
        <div className="max-w-4xl">
          <p className="inline-flex rounded-full border border-[#d6dde8] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#5f7390]">
            {lang === "en" ? "Execution Confidence" : "Confiance d'exécution"}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0C1F39] md:text-5xl">
            {lang === "en"
              ? "Commercial Transitions That Protect Business Continuity"
              : "Des transitions commerciales qui protègent la continuité des opérations"}
          </h2>
          <p className="mt-4 text-lg text-[#4f6580]">
            {lang === "en"
              ? "PhasePoint Relocation delivers structured workplace transitions, decommissioning, and sustainability closeout across Quebec. Every project is designed around minimal disruption, accountable execution, and practical waste reduction."
              : "PhasePoint Relocation réalise des transitions de milieux de travail, du décommissionnement et des fermetures durables partout au Québec. Chaque mandat vise une perturbation minimale, une exécution responsable et une réduction concrète des déchets."}
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_1fr]">
          <article className="interactive-card rounded-2xl border border-[#d6dde8] bg-[#0C1F39] p-6 text-white md:p-7">
            <div className="mb-5 flex items-center justify-between border-b border-white/15 pb-4">
              <h3 className="text-xl font-semibold">
                {lang === "en" ? "How We Execute Low-Disruption Moves" : "Comment nous exécutons des transitions à faible perturbation"}
              </h3>
              <span className="rounded-full border border-[#7de3ed]/40 bg-[#7de3ed]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#7de3ed]">
                {lang === "en" ? "B2B" : "Commercial"}
              </span>
            </div>
            <ul className="space-y-3">
              {executionPoints.map((point) => (
                <li
                  key={point}
                  className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white/90 transition duration-300 hover:border-[#7de3ed]/50 hover:bg-white/10"
                >
                  {point}
                </li>
              ))}
            </ul>
          </article>

          <article className="interactive-card rounded-2xl border border-[#d6dde8] bg-white p-6 md:p-7">
            <div className="mb-5 border-b border-[#e3eaf4] pb-4">
              <h3 className="text-xl font-semibold text-[#0C1F39]">
                {lang === "en" ? "Industries We Support Across Quebec" : "Secteurs que nous accompagnons partout au Québec"}
              </h3>
              <p className="mt-2 text-sm text-[#58708c]">
                {lang === "en"
                  ? "Best fit for organizations with strict continuity, reporting, sustainability, and handover requirements."
                  : "Alignement optimal pour les organisations ayant des exigences élevées en continuité, reddition, durabilité et remise des lieux."}
              </p>
            </div>
            <div className="grid gap-2.5">
              {industries.map((industry) => (
                <div
                  key={industry}
                  className="interactive-card rounded-xl border border-[#d6dde8] bg-[#f8fbff] px-4 py-3"
                >
                  <p className="text-sm font-semibold text-[#0C1F39]">{industry}</p>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-8 rounded-2xl border border-[#d6dde8] bg-white px-6 py-5 md:flex md:items-center md:justify-between">
          <p className="max-w-3xl text-sm text-[#4f6580]">
            {lang === "en"
              ? "Trusted by teams that need structured planning, secure handling, responsible decommissioning, and documented closeout outcomes."
              : "Apprécié par les équipes qui exigent planification structurée, manutention sécurisée, décommissionnement responsable et preuves de clôture documentées."}
          </p>
          <div className="mt-4 md:mt-0 md:ml-6">
            <Link href={toLocalizedPath(lang, "quote")} className="btn-primary">
              {lang === "en" ? "Request a Commercial Quote" : "Demander une soumission commerciale"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
