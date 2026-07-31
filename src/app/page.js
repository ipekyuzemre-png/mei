import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Image from "next/image";
import Script from "next/script";
import { siteConfig } from "@/config/site";
export default function Home() {
  return (
    <main className="bg-[#F4F3EE]">
      <Script id="json-ld-localbusiness" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": siteConfig.name,
          "image": "https://meiyazilim.com/og-image.webp",
          "@id": "https://meiyazilim.com",
          "url": "https://meiyazilim.com",
          "telephone": siteConfig.contactInfo.phone,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Merkez",
            "addressLocality": "Diyarbakır",
            "addressRegion": "Diyarbakır",
            "postalCode": "21000",
            "addressCountry": "TR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 37.9144,
            "longitude": 40.2306
          },
          "sameAs": [
            "https://instagram.com",
            "https://linkedin.com"
          ]
        })}
      </Script>
      <Navbar />
      
      <div className="relative w-full overflow-hidden">
        {/* Shared Background Image for Hero and Stats */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image 
            src="/hero_bg.webp" 
            alt="Background" 
            fill 
            priority 
            className="object-cover object-top opacity-60 mix-blend-luminosity scale-105 animate-[pulse_20s_ease-in-out_infinite]" 
          />
        </div>
        
        <div className="relative z-10">
          <Hero />
          <Stats />
        </div>
      </div>

      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
