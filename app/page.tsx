import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ValueProps } from "./components/ValueProps";
import { HardwareShowcase } from "./components/HardwareShowcase";
import { StatsStrip } from "./components/StatsStrip";
import { Testimonial } from "./components/Testimonial";
import { ComingSoon } from "./components/ComingSoon";
import { ContactPanel } from "./components/ContactPanel";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { WhatWeDo } from "./components/WhatWeDo";

export default function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Orange POS AI",
    description:
      "Modern POS system for retail and hospitality with hardware, payments, and inventory tools.",
    url: "https://orangepos.ch",
    brand: {
      "@type": "Brand",
      name: "Orange POS AI"
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "CHF",
      availability: "https://schema.org/PreOrder"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+41783355577",
      contactType: "sales",
      email: "info@orangepos.ch"
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <Hero />
      <StatsStrip />
      <ValueProps />
      <WhatWeDo />
      <HardwareShowcase />
      <Testimonial />
      <ComingSoon />
      <CTASection />
      <ContactPanel />
      <Footer />
    </main>
  );
}

