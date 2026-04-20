import Link from "next/link";
import { notFound } from "next/navigation";
import { content } from "@/lib/site-content";
import { isLanguage, toLocalizedPath } from "@/lib/i18n";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const t = content[lang];

  return (
    <div className="container-shell py-16 md:py-24">
      <h1 className="section-title">{lang === "en" ? "About PhasePoint Relocation" : "À propos de PhasePoint Relocation"}</h1>
      <p className="mt-5 max-w-4xl text-[#516985]">
        {lang === "en"
          ? "Our mission is to help Quebec organizations complete workplace transitions with precision, continuity, and confidence. We specialize in commercial relocation and renovation support where operational disruption must remain minimal."
          : "Notre mission est d'aider les organisations du Québec à réussir leurs transitions d'espaces de travail avec rigueur, continuité et fiabilité. Nous sommes spécialisés en relocalisation de bureaux, en déménagement commercial et en soutien aux rénovations."}
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {(lang === "en"
          ? [
              "Commercial-focused operating model",
              "Renovation support specialization",
              "Department-phased move planning",
              "Quebec-wide bilingual service readiness",
              "Secure handling of furniture, files, and equipment",
              "Structured communication with building management",
            ]
          : [
              "Modèle d'intervention conçu pour les milieux commerciaux",
              "Expertise en soutien aux rénovations de bureaux",
              "Planification par phases selon vos unités d'affaires",
              "Capacité bilingue partout au Québec",
              "Traitement sécuritaire du mobilier, des dossiers et des équipements",
              "Coordination claire avec la gestion et les accès d'immeuble",
            ]).map((point) => (
          <p key={point} className="rounded-xl border border-[#d6dde8] bg-white px-5 py-4 text-[#516985]">
            {point}
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
