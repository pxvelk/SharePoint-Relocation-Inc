import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";
import { PageTransition } from "@/components/page-transition";
import { content, Language, languages } from "@/lib/site-content";
import { isLanguage } from "@/lib/i18n";
import { getLocalBusinessSchema, getServicesSchema } from "@/lib/structured-data";

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLanguage(lang)) return {};
  const t = content[lang];
  return {
    title: `PhasePoint Relocation - ${t.descriptor}`,
    description:
      lang === "en"
        ? `${t.slogan}. Commercial relocation and renovation transition support across Quebec.`
        : `${t.slogan}. Services de relocalisation commerciale, déménagement de bureaux et soutien aux rénovations partout au Québec.`,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();

  return (
    <>
      <JsonLd id="phasepoint-local-business" data={getLocalBusinessSchema()} />
      <JsonLd id="phasepoint-services" data={getServicesSchema()} />
      <SiteHeader lang={lang as Language} />
      <PageTransition>{children}</PageTransition>
      <SiteFooter lang={lang as Language} />
    </>
  );
}
