import { Language, content } from "@/lib/site-content";

type TrustExecutionStripProps = {
  lang: Language;
};

export function TrustExecutionStrip({ lang }: TrustExecutionStripProps) {
  const t = content[lang];

  const executionItems =
    lang === "en"
      ? [
          {
            title: "Department Phasing",
            body: "Department phasing and schedule alignment to protect daily continuity.",
          },
          {
            title: "Building Coordination",
            body: "Building access and management coordination for controlled move windows.",
          },
          {
            title: "Floor-Plan Reinstallation",
            body: "Floor-plan-based reinstallation after renovation for accurate placement.",
          },
          {
            title: "Secure Handling",
            body: "Secure handling of files, equipment, and furniture throughout execution.",
          },
          {
            title: "After-Hours Delivery",
            body: "Weekend and night execution capability when uptime is critical.",
          },
        ]
      : [
          {
            title: "Phasage par Département",
            body: "Phasage des départements et alignement des échéanciers pour préserver la continuité.",
          },
          {
            title: "Coordination d'Immeuble",
            body: "Coordination des accès et de la gestion immobilière pour des fenêtres maîtrisées.",
          },
          {
            title: "Réinstallation sur Plan",
            body: "Réinstallation post-rénovation selon plans d'étage pour un placement précis.",
          },
          {
            title: "Manutention Sécurisée",
            body: "Traitement sécurisé des dossiers, équipements et mobiliers pendant l'exécution.",
          },
          {
            title: "Interventions Hors Heures",
            body: "Capacité d'exécution de soir et de fin de semaine lorsque nécessaire.",
          },
        ];

  return (
    <section className="border-b border-[#d6dde8] bg-[#f9fbff] py-7">
      <div className="container-shell">
        <div className="rounded-2xl border border-[#dbe3ef] bg-white px-4 py-4 md:px-6 md:py-5">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#4f6684]">
              {lang === "en" ? "Built for Operational Continuity" : "Conçu pour la continuité opérationnelle"}
            </p>
            <h3 className="mt-1.5 text-xl font-semibold text-[#0C1F39] md:text-2xl">
              {lang === "en"
                ? "Operational Trust Built into Every Transition"
                : "Une confiance opérationnelle intégrée à chaque transition"}
            </h3>
            <p className="mt-2 text-sm text-[#58708c]">
              {lang === "en"
                ? "Clear trust signals up front, then the execution standards that keep disruption low."
                : "Des signaux de confiance clairs, puis des standards d'exécution qui limitent les perturbations."}
            </p>
          </div>

          <div className="mt-3 grid gap-2 md:grid-cols-3 lg:grid-cols-6">
            {t.trustStrip.map((item) => (
              <article
                key={item}
                className="flex min-h-[48px] items-start rounded-lg border border-[#dbe3ef] bg-[#f8fbff] px-3 py-2 text-left text-xs font-semibold text-[#153154]"
              >
                <div className="grid grid-cols-[8px_1fr] items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0c9ead]" />
                  <span className="leading-4">{item}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-4 border-t border-[#e6edf6] pt-3">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#34557a]">
              {lang === "en" ? "Execution Standards" : "Standards d'exécution"}
            </p>
            <div className="mt-2.5 grid gap-2 md:grid-cols-2 lg:grid-cols-5">
              {executionItems.map((item) => (
                <article
                  key={item.title}
                  className="flex min-h-[116px] flex-col rounded-xl border border-[#dbe3ef] bg-[#f8fbff] px-3 py-2 text-left lg:min-h-[142px]"
                >
                  <div className="mb-1.5 h-1.5 w-8 rounded-full bg-[#0c9ead]" />
                  <h4 className="text-sm font-semibold text-[#0C1F39]">{item.title}</h4>
                  <p className="mt-1 text-xs leading-5 text-[#506987]">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
