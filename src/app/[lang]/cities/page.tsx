import Link from "next/link";
import { notFound } from "next/navigation";
import { cityPageContent, citySlugs } from "@/lib/city-pages";
import { content } from "@/lib/site-content";
import { isLanguage, toLocalizedPath } from "@/lib/i18n";

export default async function CitiesIndexPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const t = content[lang];

  return (
    <div className="container-shell py-16 md:py-24">
      <h1 className="section-title">{lang === "en" ? "Quebec Service Markets" : "Marchés desservis au Québec"}</h1>
      <p className="mt-4 max-w-3xl text-[#516985]">
        {lang === "en"
          ? "Dedicated city pages for our top commercial markets across Quebec."
          : "Pages locales conçues pour nos cinq marchés prioritaires en relocalisation commerciale au Québec."}
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {citySlugs.map((slug) => (
          <article key={slug} className="interactive-card rounded-2xl border border-[#d6dde8] bg-white p-6">
            <h2 className="text-xl font-semibold text-[#0C1F39]">{cityPageContent[slug].city}</h2>
            <p className="mt-2 text-[#516985]">
              {lang === "en" ? cityPageContent[slug].en.intro : cityPageContent[slug].fr.intro}
            </p>
            <Link href={toLocalizedPath(lang, `cities/${slug}`)} className="mt-4 inline-block text-sm font-semibold text-[#0c9ead]">
              {lang === "en" ? "View city page" : "Voir la page de votre ville"}
            </Link>
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
