import Link from "next/link";
import { notFound } from "next/navigation";
import { content } from "@/lib/site-content";
import { isLanguage, toLocalizedPath } from "@/lib/i18n";

export default async function IndustriesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const t = content[lang];

  const industries =
    lang === "en"
      ? [
          "Corporate Offices",
          "Financial & Professional Services",
          "Healthcare & Administrative Offices",
          "Education & Non-Profit",
          "Property Management & Contractor Support",
        ]
      : [
          "Bureaux corporatifs",
          "Services financiers et professionnels",
          "Bureaux administratifs en santé",
          "Éducation et organismes à but non lucratif",
          "Gestion immobilière et soutien aux entrepreneurs",
        ];

  return (
    <div className="container-shell py-16 md:py-24">
      <h1 className="section-title">{lang === "en" ? "Industries" : "Secteurs"}</h1>
      <p className="mt-4 max-w-3xl text-[#516985]">
        {lang === "en"
          ? "We support organizations with high operational demands, strict timelines, and sensitive workplace continuity requirements."
          : "Nous accompagnons les organisations qui doivent maintenir une forte continuité opérationnelle, respecter des échéanciers serrés et sécuriser leurs environnements de travail."}
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {industries.map((industry) => (
          <article key={industry} className="interactive-card rounded-2xl border border-[#d6dde8] bg-white p-6">
            <h2 className="text-xl font-semibold text-[#0C1F39]">{industry}</h2>
            <p className="mt-2 text-[#516985]">
              {lang === "en"
                ? "Dedicated move planning, after-hours capability, and renovation-phase coordination."
                : "Planification dédiée, relocalisation commerciale en horaires adaptés et coordination étroite des phases de rénovation."}
            </p>
          </article>
        ))}
      </div>
      <div className="mt-12">
        <Link href={toLocalizedPath(lang, "quote")} className="btn-primary">
          {t.ctas.primary}
        </Link>
      </div>
    </div>
  );
}
