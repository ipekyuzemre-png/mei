"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Lightbulb, Rocket, Shield } from "lucide-react";
import Image from "next/image";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { siteConfig } from "@/config/site";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="about" className="relative py-20 sm:py-28 lg:py-36 z-40 bg-[#D97757] overflow-hidden rounded-t-[3rem] lg:rounded-t-[5rem] -mt-12 lg:-mt-20 shadow-[0_-20px_50px_rgba(0,0,0,0.3)] border-t border-white/10">
      {/* 3D Fluid Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/about_bg.webp" 
          alt="About Background" 
          fill 
          priority 
          className="object-cover object-center opacity-40 mix-blend-luminosity scale-105" 
        />
        {/* Soft overlay to ensure readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10 mix-blend-overlay" />
      </div>

      <div className="relative z-10 section-divider mb-14 sm:mb-20 opacity-50" />

      <Container ref={ref} className="relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20 xl:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <SectionHeader
              badge={siteConfig.aboutHeader.badge}
              title={siteConfig.aboutHeader.title}
              highlight={siteConfig.aboutHeader.highlight}
              description={siteConfig.aboutHeader.description}
              align="left"
              animated={false}
            />
            <p className="mt-8 text-base leading-[1.8] text-white sm:text-lg">
              {siteConfig.aboutText}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-6">
            {siteConfig.visionItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
                >
                  <div className="group h-full glass-panel rounded-3xl overflow-hidden transition-all duration-500 hover:glass-panel-hover hover:-translate-y-1">

                    {/* Image Banner */}
                    <div className="relative w-full overflow-hidden bg-black/20" style={{ height: "160px" }}>
                      <div className="absolute inset-0">
                        <Image 
                          src={item.image} 
                          alt={item.title} 
                          fill 
                          className="object-cover object-center opacity-80 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal" 
                        />
                      </div>
                      {/* Alt geçiş */}
                      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#D97757]/60 to-transparent z-10" />
                      {/* İkon - sol üst */}
                      <div className="absolute top-3 left-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-black/25 backdrop-blur-sm border border-white/20 text-white transition-all duration-500 group-hover:bg-black/35">
                        <Icon className="size-4" />
                      </div>
                    </div>

                    {/* İçerik */}
                    <div className="p-6">
                      <h4 className="mb-3 font-[Plus_Jakarta_Sans] text-lg font-bold text-white transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm leading-[1.8] text-white/90">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
