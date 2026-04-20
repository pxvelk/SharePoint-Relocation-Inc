import Link from "next/link";
import { notFound } from "next/navigation";
import { content } from "@/lib/site-content";
import { isLanguage, toLocalizedPath } from "@/lib/i18n";

export default async function ThankYouPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const t = content[lang];

  return (
    <div className="container-shell py-16 md:py-24">
      <div className="rounded-3xl border border-[#d6dde8] bg-white p-10">
        <p className="inline-flex rounded-full bg-[#dcf6f8] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#0a6f79]">
          {lang === "en" ? "Request Received" : "Demande reçue"}
        </p>
        <h1 className="mt-5 text-3xl font-semibold text-[#0C1F39]">
          {lang === "en" ? "Thank you. Your quote request has been submitted." : "Merci. Votre demande de soumission a bien été transmise."}
        </h1>
        <p className="mt-4 text-[#516985]">
          {lang === "en"
            ? "A confirmation email has been sent, and our team has been notified internally. A project specialist will reply within 1 business day."
            : "Un courriel de confirmation vous a été envoyé et notre équipe a reçu la notification interne. Un spécialiste vous répondra sous 1 jour ouvrable."}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={toLocalizedPath(lang)} className="btn-secondary">
            {lang === "en" ? "Back to homepage" : "Retour à l'accueil"}
          </Link>
          <a href={`tel:${t.phone.replace(/[^\d+]/g, "")}`} className="btn-primary">
            {t.ctas.secondary}
          </a>
        </div>
      </div>
    </div>
  );
}
