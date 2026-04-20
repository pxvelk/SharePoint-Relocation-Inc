"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { content, Language } from "@/lib/site-content";
import { toLocalizedPath } from "@/lib/i18n";

type SiteHeaderProps = {
  lang: Language;
};

export function SiteHeader({ lang }: SiteHeaderProps) {
  const t = content[lang];
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const otherLang: Language = lang === "en" ? "fr" : "en";
  const swappedPath = pathname.replace(`/${lang}`, `/${otherLang}`);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/90 backdrop-blur transition-all duration-300 ${
        isScrolled
          ? "border-[#c8d4e4] shadow-[0_8px_24px_rgba(12,31,57,0.10)]"
          : "border-[#d6dde8]"
      }`}
    >
      <div
        className={`container-shell flex items-center justify-between gap-4 transition-all duration-300 ${
          isScrolled ? "h-14" : "h-16"
        }`}
      >
        <Link href={toLocalizedPath(lang)} className="flex items-center">
          <Image
            src="/brand/phasepoint-logo-transparent-v2.png"
            alt="PhasePoint Relocation"
            width={230}
            height={56}
            priority
            className={`h-auto transition-all duration-300 ${isScrolled ? "w-[190px]" : "w-[230px]"}`}
          />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-6 xl:flex">
          {t.nav.map(([slug, label]) => (
            <Link key={slug} href={toLocalizedPath(lang, slug)} className="interactive-nav-link">
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <Link href={toLocalizedPath(lang, "quote")} className="btn-primary">
            {t.ctas.primary}
          </Link>
          <Link href={swappedPath} className="rounded-full border border-[#d6dde8] px-3 py-2 text-xs font-semibold text-[#0C1F39]">
            {lang.toUpperCase()} | {otherLang.toUpperCase()}
          </Link>
        </div>

        <button
          type="button"
          className="rounded-md border border-[#d6dde8] px-3 py-2 text-sm font-medium xl:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {lang === "en" ? "Menu" : "Navigation"}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-[#d6dde8] bg-white xl:hidden"
          >
            <div className="container-shell flex flex-col gap-4 py-4">
              {t.nav.map(([slug, label]) => (
                <Link key={slug} href={toLocalizedPath(lang, slug)} onClick={() => setIsOpen(false)} className="py-1 text-base font-medium text-[#0C1F39]">
                  {label}
                </Link>
              ))}
              <Link href={toLocalizedPath(lang, "quote")} onClick={() => setIsOpen(false)} className="btn-primary">
                {t.ctas.primary}
              </Link>
              <Link href={swappedPath} onClick={() => setIsOpen(false)} className="rounded-full border border-[#d6dde8] px-3 py-2 text-center text-sm font-semibold text-[#0C1F39]">
                {lang.toUpperCase()} | {otherLang.toUpperCase()}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
