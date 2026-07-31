"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Monitor, Share2, Search, Palette, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { siteConfig } from "@/config/site";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="services" className="relative py-20 sm:py-28 lg:py-36 z-20 bg-[#788C5D] overflow-hidden rounded-t-[3rem] lg:rounded-t-[5rem] -mt-12 lg:-mt-20 shadow-[0_-20px_50px_rgba(0,0,0,0.2)] border-t border-white/10">
      {/* 3D Fluid Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/services_bg_v2.webp" 
          alt="Services Background" 
          fill 
          priority 
          className="object-cover object-center opacity-40 mix-blend-luminosity scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10 mix-blend-overlay" />
      </div>

      <Container ref={ref} className="relative">
        <div className="mb-14 sm:mb-20 lg:mb-24">
          <SectionHeader
            badge={siteConfig.servicesHeader.badge}
            title={siteConfig.servicesHeader.title}
            highlight={siteConfig.servicesHeader.highlight}
            description={siteConfig.servicesHeader.description}
            inView={isInView}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {siteConfig.services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 * i }}
              >
                <div className="group h-full glass-panel rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 relative flex flex-col hover:border-[#F4F3EE]/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]">

                  <div className="relative w-full overflow-hidden bg-black/20" style={{ height: "220px" }}>
                    <div className="absolute inset-0">
                      <Image 
                        src={service.image} 
                        alt={service.title} 
                        fill 
                        className="object-cover object-center opacity-80 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal" 
                      />
                    </div>
                    {/* Alt gradient geçişi — kartın geri kalanıyla kaynaşması için */}
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#788C5D]/40 to-transparent z-10" />

                    {/* İkon - sol üst */}
                    <div className="absolute top-4 left-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-black/30 backdrop-blur-sm border border-white/20 text-white transition-all duration-500 group-hover:bg-black/40 group-hover:border-white/30">
                      <Icon className="size-5" />
                    </div>

                    {/* Ok - sağ üst */}
                    <div className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-xl bg-black/30 backdrop-blur-sm border border-white/15 text-white/50 transition-all duration-500 group-hover:text-white group-hover:border-white/40">
                      <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </div>

                  {/* İçerik */}
                  <div className="p-7 sm:p-8 flex flex-col flex-grow">
                    <h3 className="mb-3 font-[Plus_Jakarta_Sans] text-xl font-bold leading-snug text-white transition-colors group-hover:text-[#F4F3EE]">
                      {service.title}
                    </h3>

                    <p className="mb-6 text-sm leading-[1.8] text-white/70 flex-grow">
                      {service.description}
                    </p>

                    <div className="mt-auto flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-white transition-colors group-hover:border-white/40 group-hover:bg-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
