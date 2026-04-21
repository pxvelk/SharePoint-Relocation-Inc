import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cityPageContent, citySlugs, getCityStaticParams, type CitySlug } from "@/lib/city-pages";
import { content } from "@/lib/site-content";
import { isLanguage, toLocalizedPath } from "@/lib/i18n";

export function generateStaticParams() {
  return getCityStaticParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; city: string }>;
}): Promise<Metadata> {
  const { lang, city } = await params;
  if (!isLanguage(lang) || !citySlugs.includes(city as CitySlug)) {
    return {};
  }
  const cityData = cityPageContent[city as CitySlug];
  return {
    title:
      lang === "en"
        ? `${cityData.city} Commercial Relocation`
        : `${cityData.city} Relocalisation commerciale`,
    description:
      lang === "en"
        ? `Commercial relocation and renovation support in ${cityData.city}. Phased moves, after-hours capability, and floor-plan-based reinstalls.`
        : `Relocalisation commerciale et soutien aux rénovations de bureaux à ${cityData.city}. Déplacements internes, interventions hors heures ouvrables et réinstallation selon plans d'étage.`,
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ lang: string; city: string }>;
}) {
  const { lang, city } = await params;
  if (!isLanguage(lang)) notFound();
  if (!citySlugs.includes(city as CitySlug)) notFound();

  const cityData = cityPageContent[city as CitySlug];
  const localized = lang === "en" ? cityData.en : cityData.fr;
  const t = content[lang];

  return (
    <div className="container-shell py-16 md:py-24">
      <h1 className="section-title">
        {cityData.city} {lang === "en" ? "Commercial Relocation Services" : "Services de relocalisation commerciale"}
      </h1>
      <p className="mt-4 max-w-4xl text-[#516985]">{localized.intro}</p>

      <section className="mt-10 rounded-2xl border border-[#d6dde8] bg-white p-7">
        <h2 className="text-xl font-semibold text-[#0C1F39]">{lang === "en" ? "Why this city matters" : "Pourquoi cette ville est stratégique"}</h2>
        <p className="mt-3 text-[#516985]">{localized.relevance}</p>
      </section>

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-[#d6dde8] bg-white p-6">
          <h2 className="text-xl font-semibold text-[#0C1F39]">{lang === "en" ? "Common Use Cases" : "Cas d'usage fréquents"}</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[#516985]">
            {localized.useCases.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="rounded-2xl border border-[#d6dde8] bg-white p-6">
          <h2 className="text-xl font-semibold text-[#0C1F39]">{lang === "en" ? "Industries Served" : "Secteurs desservis"}</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[#516985]">
            {localized.industries.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mt-8 rounded-2xl border border-[#d6dde8] bg-[#f8fbff] p-6">
        <h2 className="text-xl font-semibold text-[#0C1F39]">{lang === "en" ? "Commercial Move Support in Practice" : "Notre soutien opérationnel sur le terrain"}</h2>
        <p className="mt-3 text-[#516985]">
          {lang === "en"
            ? `PhasePoint delivers structured commercial moves in ${cityData.city} with phased planning, secure handling, weekend/night execution, and floor-plan-based reinstalls.`
            : `À ${cityData.city}, PhasePoint prend en charge la relocalisation d'entreprise avec une méthode structurée : planification par étapes, déménagement commercial en horaires adaptés, manutention sécurisée et remise en place selon plans d'étage.`}
        </p>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
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
