"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { Language, moveTypes, moveTypesFr, primaryCities } from "@/lib/site-content";

type QuoteFormProps = {
  lang: Language;
};

export function QuoteForm({ lang }: QuoteFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const moveOptions = lang === "en" ? moveTypes : moveTypesFr;

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("lang", lang);
    const response = await fetch("/api/quote", { method: "POST", body: formData });
    setLoading(false);
    if (!response.ok) {
      setError(lang === "en" ? "Unable to submit. Please try again." : "Impossible d'envoyer la demande. Veuillez réessayer.");
      return;
    }
    form.reset();
    router.push(`/${lang}/quote/thank-you`);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 md:grid-cols-2">
      {[
        ["companyName", lang === "en" ? "Company name" : "Nom de l'entreprise"],
        ["contactName", lang === "en" ? "Contact name" : "Nom du contact"],
        ["phone", lang === "en" ? "Phone" : "Téléphone"],
        ["email", "Email"],
        ["currentLocation", lang === "en" ? "Current office location" : "Adresse actuelle des bureaux"],
        ["destination", lang === "en" ? "Destination or temporary location" : "Destination ou emplacement temporaire"],
        ["officeSize", lang === "en" ? "Approximate office size" : "Superficie approximative des bureaux"],
        ["targetDate", lang === "en" ? "Target date" : "Date cible"],
      ].map(([name, label]) => (
        <label key={name} className="flex flex-col gap-1 text-sm font-medium text-[#0C1F39]">
          {label}
          <input required className="rounded-xl border border-[#d6dde8] bg-white px-4 py-3 outline-none focus:border-[#0c9ead]" name={name} />
        </label>
      ))}

      <label className="flex flex-col gap-1 text-sm font-medium text-[#0C1F39]">
        {lang === "en" ? "City" : "Ville"}
        <select name="city" required className="rounded-xl border border-[#d6dde8] bg-white px-4 py-3 outline-none focus:border-[#0c9ead]">
          {primaryCities.map((city) => (
            <option key={city}>{city}</option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-1 text-sm font-medium text-[#0C1F39]">
        {lang === "en" ? "Move type" : "Type de projet"}
        <select name="moveType" required className="rounded-xl border border-[#d6dde8] bg-white px-4 py-3 outline-none focus:border-[#0c9ead]">
          {moveOptions.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-1 text-sm font-medium text-[#0C1F39]">
        {lang === "en" ? "Storage needed?" : "Entreposage requis?"}
        <select name="storageNeeded" className="rounded-xl border border-[#d6dde8] bg-white px-4 py-3 outline-none focus:border-[#0c9ead]">
          <option>{lang === "en" ? "No" : "Non"}</option>
          <option>{lang === "en" ? "Yes" : "Oui"}</option>
        </select>
      </label>

      <label className="flex flex-col gap-1 text-sm font-medium text-[#0C1F39]">
        {lang === "en" ? "Weekend/night move needed?" : "Intervention de soir ou fin de semaine?"}
        <select name="offHoursNeeded" className="rounded-xl border border-[#d6dde8] bg-white px-4 py-3 outline-none focus:border-[#0c9ead]">
          <option>{lang === "en" ? "No" : "Non"}</option>
          <option>{lang === "en" ? "Yes" : "Oui"}</option>
        </select>
      </label>

      <label className="flex flex-col gap-1 text-sm font-medium text-[#0C1F39] md:col-span-2">
        {lang === "en" ? "Floor plan available?" : "Plan d'étage disponible?"}
        <select name="floorPlanAvailable" className="rounded-xl border border-[#d6dde8] bg-white px-4 py-3 outline-none focus:border-[#0c9ead]">
          <option>{lang === "en" ? "No" : "Non"}</option>
          <option>{lang === "en" ? "Yes" : "Oui"}</option>
        </select>
      </label>

      <label className="flex flex-col gap-1 text-sm font-medium text-[#0C1F39] md:col-span-2">
        {lang === "en" ? "Project notes" : "Précisions sur le projet"}
        <textarea name="projectNotes" rows={5} className="rounded-xl border border-[#d6dde8] bg-white px-4 py-3 outline-none focus:border-[#0c9ead]" />
      </label>

      <div className="md:col-span-2">
        <button disabled={loading} type="submit" className="btn-primary disabled:opacity-70">
          {loading
            ? lang === "en"
              ? "Submitting..."
              : "Envoi en cours..."
            : lang === "en"
              ? "Request a Commercial Quote"
              : "Demander une soumission commerciale"}
        </button>
        {error ? <p className="mt-2 text-sm text-red-600">{error}</p> : null}
      </div>
    </form>
  );
}
