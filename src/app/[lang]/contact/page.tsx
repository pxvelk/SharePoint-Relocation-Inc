import Link from "next/link";
import { notFound } from "next/navigation";
import { content, primaryCities } from "@/lib/site-content";
import { isLanguage, toLocalizedPath } from "@/lib/i18n";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const t = content[lang];
  return (
    <div className="container-shell py-16 md:py-24">
      <h1 className="section-title">{lang === "en" ? "Contact" : "Contact"}</h1>
      <p className="mt-4 max-w-3xl text-[#516985]">
        {lang === "en"
          ? "For commercial relocation and renovation support, contact our bilingual Quebec team."
          : "Pour vos besoins en déménagement commercial, relocalisation de bureaux et soutien aux rénovations, contactez notre équipe bilingue au Québec."}
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-[#d6dde8] bg-white p-6">
          <h2 className="text-xl font-semibold text-[#0C1F39]">{lang === "en" ? "Direct Contact" : "Coordonnées directes"}</h2>
          <a href={`tel:${t.phone.replace(/[^\d+]/g, "")}`} className="mt-3 block text-lg font-semibold text-[#0C1F39]">
            {t.phone}
          </a>
          <a href="mailto:info@phasepointrelocation.ca" className="mt-2 block text-[#516985]">
            info@phasepointrelocation.ca
          </a>
          <p className="mt-4 text-sm text-[#516985]">
            {lang === "en"
              ? "A project specialist responds within 1 business day."
              : "Un spécialiste de projet vous répond dans un délai de 1 jour ouvrable."}
          </p>
        </div>
        <div className="rounded-2xl border border-[#d6dde8] bg-white p-6">
          <h2 className="text-xl font-semibold text-[#0C1F39]">{lang === "en" ? "Primary Markets" : "Marchés prioritaires"}</h2>
          <ul className="mt-4 space-y-2 text-[#516985]">
            {primaryCities.map((city) => (
              <li key={city}>{city}</li>
            ))}
            <li>{lang === "en" ? "Quebec-wide service coverage" : "Couverture de service partout au Québec"}</li>
          </ul>
        </div>
      </div>
      <div className="mt-10">
        <Link href={toLocalizedPath(lang, "quote")} className="btn-primary">
          {t.ctas.primary}
        </Link>
      </div>
    </div>
  );
}
