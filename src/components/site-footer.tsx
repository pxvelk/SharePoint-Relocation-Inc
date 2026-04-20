import Image from "next/image";
import Link from "next/link";
import { Language, content, primaryCities } from "@/lib/site-content";
import { toLocalizedPath } from "@/lib/i18n";

type SiteFooterProps = {
  lang: Language;
};

export function SiteFooter({ lang }: SiteFooterProps) {
  const t = content[lang];
  return (
    <footer className="mt-20 border-t border-[#d6dde8] bg-[#0C1F39] py-14 text-white">
      <div className="container-shell grid gap-10 md:grid-cols-4">
        <div>
          <Image
            src="/brand/phasepoint-logo-transparent-v2.png"
            alt="PhasePoint Relocation"
            width={250}
            height={60}
            className="h-auto w-[250px] brightness-0 invert"
          />
          <p className="mt-2 text-sm text-white/75">{t.descriptor}</p>
          <p className="mt-2 text-sm text-white/75">{t.slogan}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/90">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/75">
            {t.nav.map(([slug, label]) => (
              <li key={slug}>
                <Link href={toLocalizedPath(lang, slug)}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/90">Service Area</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/75">
            {primaryCities.map((city) => (
              <li key={city}>{city}</li>
            ))}
            <li>Quebec-wide coverage</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/90">Contact</h4>
          <div className="mt-3 space-y-2 text-sm text-white/75">
            <a className="block" href={`tel:${t.phone.replace(/[^\d+]/g, "")}`}>
              {t.phone}
            </a>
            <a className="block" href="mailto:projects@phasepointrelocation.ca">
              projects@phasepointrelocation.ca
            </a>
            <Link href={toLocalizedPath(lang, "quote")} className="btn-primary mt-3 !bg-[#0c9ead] hover:!bg-[#17aebb]">
              {t.ctas.primary}
            </Link>
          </div>
        </div>
      </div>
      <div className="container-shell mt-10 border-t border-white/15 pt-5 text-xs text-white/60">
        <p>© {new Date().getFullYear()} PhasePoint Relocation. All rights reserved.</p>
      </div>
    </footer>
  );
}
