import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#F4F3EE]">
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
