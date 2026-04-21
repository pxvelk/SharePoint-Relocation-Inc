import { notFound } from "next/navigation";
import { isLanguage } from "@/lib/i18n";

export default async function FaqPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();

  const faqs =
    lang === "en"
      ? [
          ["Do you offer after-hours or weekend moves?", "Yes. We regularly schedule evenings and weekends to protect business continuity."],
          ["Do you handle sensitive files and equipment?", "Yes. We use secure labeling and controlled handling workflows for files, technology, and workstations."],
          ["Can you support phased office renovations?", "Yes. We coordinate staged transitions, swing spaces, and reinstalls throughout renovation timelines."],
          ["Do you provide office decommissioning support?", "Yes. We provide decommissioning planning, asset disposition pathways, and closeout reporting for landlords and stakeholders."],
          ["Can you report what was reused, donated, recycled, or discarded?", "Yes. We provide destination tracking and diversion summaries to support accountability and sustainability reporting."],
          ["Do you provide storage?", "Yes. We provide short-term storage options when project phasing requires temporary holding."],
          ["Do you handle cleaning and minor handover repairs?", "Yes. We coordinate move-out cleaning, minor touch-ups, and handover condition readiness where required."],
          ["Do you reassemble furniture and place it according to a floor plan?", "Yes. We reinstall desks, furniture, and equipment according to approved floor plans."],
          ["How far in advance should we book?", "We recommend booking at least 3-6 weeks in advance for best scheduling availability."],
        ]
      : [
          ["Offrez-vous des déménagements de soir ou de fin de semaine?", "Oui. Nous planifions régulièrement des interventions hors heures ouvrables pour réduire les interruptions en entreprise."],
          ["Prenez-vous en charge des dossiers sensibles et des équipements spécialisés?", "Oui. Notre protocole de manutention sécurisée couvre les dossiers, les équipements informatiques et les postes de travail."],
          ["Pouvez-vous soutenir une rénovation de bureaux en plusieurs phases?", "Oui. Nous gérons les transitions vers espaces temporaires, les retours en zone rénovée et la relocalisation de bureaux par séquence."],
          ["Offrez-vous un service de décommissionnement de bureaux?", "Oui. Nous offrons la planification de décommissionnement, la disposition des actifs et les rapports de fermeture pour bailleurs et parties prenantes."],
          ["Pouvez-vous documenter ce qui a été réemployé, donné, recyclé ou éliminé?", "Oui. Nous fournissons des suivis de destination et des sommaires de diversion pour soutenir la reddition et la durabilité."],
          ["Proposez-vous de l'entreposage temporaire?", "Oui. Nous offrons des solutions d'entreposage à court terme selon les besoins du chantier et du calendrier."],
          ["Gérez-vous le nettoyage et les réparations mineures avant remise?", "Oui. Nous coordonnons le nettoyage de sortie, les retouches mineures et la préparation à la remise des lieux."],
          ["Réinstallez-vous le mobilier selon un plan d'étage?", "Oui. Nous effectuons la réinstallation post-rénovation selon les plans approuvés et les priorités opérationnelles."],
          ["Quel délai de réservation recommandez-vous?", "Idéalement entre 3 et 6 semaines à l'avance pour confirmer les ressources et la fenêtre d'exécution."],
        ];

  return (
    <div className="container-shell py-16 md:py-24">
      <h1 className="section-title">FAQ</h1>
      <div className="mt-10 space-y-4">
        {faqs.map(([q, a]) => (
          <details key={q} className="rounded-2xl border border-[#d6dde8] bg-white p-6">
            <summary className="cursor-pointer text-lg font-semibold text-[#0C1F39]">{q}</summary>
            <p className="mt-3 text-[#516985]">{a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
