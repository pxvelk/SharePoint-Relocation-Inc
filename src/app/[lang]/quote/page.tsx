import { notFound } from "next/navigation";
import { QuoteForm } from "@/components/quote-form";
import { content } from "@/lib/site-content";
import { isLanguage } from "@/lib/i18n";

export default async function QuotePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const t = content[lang];

  return (
    <div className="container-shell py-16 md:py-24">
      <h1 className="section-title">{t.ctas.primary}</h1>
      <p className="mt-4 max-w-3xl text-[#516985]">
        {lang === "en"
          ? "Share your project scope and timeline. Our team reviews your request and responds within 1 business day."
          : "Présentez l'ampleur du mandat, votre échéancier et vos contraintes. Notre équipe analyse chaque demande et vous répond sous 1 jour ouvrable."}
      </p>

      <div className="mt-10 rounded-3xl border border-[#d6dde8] bg-[#f8fbff] p-6 md:p-8">
        <QuoteForm lang={lang} />
      </div>

      <section className="mt-12 rounded-2xl border border-[#d6dde8] bg-white p-6">
        <h2 className="text-xl font-semibold text-[#0C1F39]">{lang === "en" ? "What Happens Next" : "Prochaines étapes"}</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-[#516985]">
          <li>{lang === "en" ? "You receive an immediate confirmation." : "Vous recevez immédiatement une confirmation de réception."}</li>
          <li>{lang === "en" ? "Our team reviews your project details." : "Nous analysons les détails de votre projet de relocalisation."}</li>
          <li>{lang === "en" ? "A project specialist contacts you within 1 business day." : "Un spécialiste vous contacte dans un délai de 1 jour ouvrable."}</li>
        </ol>
      </section>
    </div>
  );
}
