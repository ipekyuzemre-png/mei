import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Container from "@/components/shared/Container";
import Magnetic from "@/components/shared/Magnetic";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-40 pb-4 sm:pt-52 sm:pb-8 bg-transparent"
    >

      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-white/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <Container size="md" className="relative z-10 text-center">
        <div className="mx-auto max-w-5xl">
          {/* Heading */}
          <h1 className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150 fill-mode-both mb-6 font-[Plus_Jakarta_Sans] text-[clamp(2.5rem,5vw,5.5rem)] font-bold leading-[1.1] tracking-tighter text-black sm:mb-8">
            {siteConfig.hero.titleLine1} <br />
            <span className="bg-gradient-to-r from-black via-black/80 to-black/40 bg-clip-text text-transparent italic font-light pr-4">
              {siteConfig.hero.titleLine2}
            </span>
          </h1>

          {/* Description */}
          <p className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both mx-auto mb-10 max-w-2xl text-base leading-[1.8] text-black/60 sm:text-lg font-light tracking-wide">
            {siteConfig.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
            <Magnetic strength={20}>
              <a href={siteConfig.hero.primaryButtonHref} className="group relative flex h-14 items-center justify-center overflow-hidden rounded-full bg-black px-10 text-base font-bold text-[#b0c1c2] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,0,0,0.3)]">
                <span className="relative z-10 flex items-center gap-2">
                  {siteConfig.hero.primaryButtonText}
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 z-0 h-full w-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full transition-transform duration-700 group-hover:translate-x-full" />
              </a>
            </Magnetic>
            <Magnetic strength={20}>
              <a href={siteConfig.hero.secondaryButtonHref} className="group flex items-center gap-4 text-sm font-bold uppercase tracking-[0.2em] text-black/60 hover:text-black transition-all duration-300">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-black/20 bg-black/5 transition-all duration-500 group-hover:bg-black/10 group-hover:border-black/40 group-hover:shadow-[0_0_30px_rgba(0,0,0,0.1)]">
                  <ArrowRight className="size-5 -rotate-45 transition-all duration-500 group-hover:rotate-0 group-hover:scale-110" />
                </span>
                {siteConfig.hero.secondaryButtonText}
              </a>
            </Magnetic>
          </div>

        </div>
      </Container>
    </section>
  );
}
