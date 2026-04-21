export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "PhasePoint Relocation",
    description: "Commercial Relocation & Renovation Support",
    slogan: "Move with minimal disruption",
    url: "https://phasepointrelocation.ca",
    email: "info@phasepointrelocation.ca",
    telephone: "+1-514-971-6875",
    areaServed: [
      "Montreal",
      "Laval",
      "Longueuil",
      "Quebec City",
      "Gatineau",
      "Quebec",
    ],
    address: {
      "@type": "PostalAddress",
      addressRegion: "QC",
      addressCountry: "CA",
    },
    sameAs: [],
  };
}

export function getServicesSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Commercial relocation and renovation support",
    provider: {
      "@type": "Organization",
      name: "PhasePoint Relocation",
      url: "https://phasepointrelocation.ca",
      telephone: "+1-514-971-6875",
      email: "info@phasepointrelocation.ca",
    },
    areaServed: [
      "Montreal",
      "Laval",
      "Longueuil",
      "Quebec City",
      "Gatineau",
      "Quebec",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Commercial Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Relocation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Renovation Support" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Internal Office Moves" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Swing-Space Moves" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Post-Renovation Reinstalls" } },
      ],
    },
  };
}
