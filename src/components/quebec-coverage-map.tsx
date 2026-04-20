"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Language } from "@/lib/site-content";

type QuebecCoverageMapProps = {
  lang: Language;
};

const hubs = [
  { key: "montreal", name: "Montreal", x: 401, y: 208 },
  { key: "laval", name: "Laval", x: 394, y: 196 },
  { key: "longueuil", name: "Longueuil", x: 409, y: 218 },
  { key: "quebec-city", name: "Quebec City", x: 455, y: 194 },
  { key: "gatineau", name: "Gatineau", x: 362, y: 196 },
] as const;

export function QuebecCoverageMap({ lang }: QuebecCoverageMapProps) {
  const [activeHub, setActiveHub] = useState<(typeof hubs)[number]["key"]>("montreal");
  const activeHubData = useMemo(
    () => hubs.find((hub) => hub.key === activeHub) ?? hubs[0],
    [activeHub],
  );

  return (
    <div className="rounded-xl border border-[#d6dde8] bg-[#3c444f] p-4 shadow-[0_12px_24px_rgba(12,31,57,0.12)]">
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/65">
        {lang === "en" ? "Coverage Map" : "Carte de couverture"}
      </p>
      <h3 className="mt-1 text-base font-semibold text-white">
        {lang === "en" ? "Canada Coverage with Quebec Main Hubs" : "Couverture au Canada et pôles principaux au Québec"}
      </h3>

      <div className="mt-3">
        <svg viewBox="0 0 620 280" className="w-full">
          <rect x="0" y="0" width="620" height="280" rx="12" fill="#343c47" />
          <path
            d="M58 188 L86 176 L112 170 L140 161 L164 150 L182 140 L209 131 L238 125 L267 119 L292 111 L316 99 L340 92 L369 88 L395 92 L422 99 L451 101 L478 108 L505 116 L530 126 L549 136 L562 148 L569 165 L560 179 L542 191 L521 201 L494 211 L464 219 L435 224 L404 229 L371 236 L338 242 L304 249 L270 256 L239 262 L209 267 L180 271 L154 268 L128 258 L105 247 L83 231 L66 213 Z"
            fill="#6e7681"
            stroke="#8993a0"
            strokeWidth="1.8"
          />
          <path
            d="M250 126 L268 117 L292 111 L316 99 L340 92 L369 88"
            fill="none"
            stroke="#5a6370"
            strokeWidth="2"
            strokeDasharray="6 4"
          />
          <path
            d="M352 109 L372 104 L392 106 L415 112 L434 121 L445 134 L447 149 L440 162 L421 171 L399 173 L378 170 L362 162 L354 149 L349 134 Z"
            fill="#5f86ad"
            stroke="#9ed0ff"
            strokeWidth="1.6"
          />
          {hubs.map((hub, index) => {
            const isActive = hub.key === activeHub;
            return (
              <g key={hub.key}>
                <motion.circle
                  cx={hub.x}
                  cy={hub.y}
                  r={isActive ? 8 : 6}
                  fill={isActive ? "#ff7b2f" : "#ff6a13"}
                  stroke="#ffffff"
                  strokeWidth={1.5}
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    delay: index * 0.14,
                    ease: "easeInOut",
                  }}
                  style={{ cursor: "pointer" }}
                  onMouseEnter={() => setActiveHub(hub.key)}
                  onClick={() => setActiveHub(hub.key)}
                />
                <circle
                  cx={hub.x}
                  cy={hub.y}
                  r={13}
                  fill="transparent"
                  style={{ cursor: "pointer" }}
                  onMouseEnter={() => setActiveHub(hub.key)}
                  onClick={() => setActiveHub(hub.key)}
                />
              </g>
            );
          })}
          <g>
            <rect x="20" y="18" width="190" height="56" rx="8" fill="#2f3743" stroke="#566173" />
            <text x="32" y="38" fill="#a6b7cc" fontSize="10" fontWeight="600" fontFamily="var(--font-manrope), sans-serif">
              {lang === "en" ? "Active Hub" : "Pôle actif"}
            </text>
            <text x="32" y="58" fill="#ffffff" fontSize="16" fontWeight="700" fontFamily="var(--font-manrope), sans-serif">
              {activeHubData.name}
            </text>
          </g>
        </svg>
      </div>

      <div className="mt-2 flex flex-wrap gap-1.5">
        {hubs.map((hub) => {
          const active = hub.key === activeHub;
          return (
            <button
              key={hub.key}
              type="button"
              className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold transition ${
                active
                  ? "border-[#ff7b2f] bg-[#ff7b2f]/20 text-white"
                  : "border-white/25 bg-white/8 text-white/80 hover:border-[#ff7b2f]/70 hover:text-white"
              }`}
              onMouseEnter={() => setActiveHub(hub.key)}
              onFocus={() => setActiveHub(hub.key)}
              onClick={() => setActiveHub(hub.key)}
            >
              {hub.name}
            </button>
          );
        })}
      </div>

      <p className="mt-2 text-[11px] text-white/70">
        {lang === "en"
          ? "Canada-wide map context with highlighted Quebec hub cluster. Interactive markers focus on Montreal, Laval, Longueuil, Quebec City, and Gatineau."
          : "Vue d'ensemble canadienne avec concentration des pôles au Québec. Les points interactifs mettent en évidence Montréal, Laval, Longueuil, Québec et Gatineau."}
      </p>
    </div>
  );
}
