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
    <section id="about" className="relative py-20 sm:py-28 lg:py-36 z-40 bg-transparent overflow-hidden">
      <div className="relative z-10 section-divider mb-14 sm:mb-20 opacity-50" />

      <Container ref={ref} className="relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20 xl:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <SectionHeader
              badge={siteConfig.aboutHeader.badge}
              title={siteConfig.aboutHeader.title}
              highlight={siteConfig.aboutHeader.highlight}
              description={siteConfig.aboutHeader.description}
              align="left"
              animated={false}
              theme="light"
            />
            <p className="mt-8 text-base leading-[1.8] text-black/80 sm:text-lg">
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
                  <div className="group relative h-full min-h-[320px] rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)] hover:-translate-y-2">
                    {/* Image Background */}
                    <div className="absolute inset-0 z-0 bg-[#1a1a1a]">
                      <Image 
                        src={item.image} 
                        alt={item.title} 
                        fill 
                        className="object-cover object-center opacity-80 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100" 
                      />
                    </div>
                    
                    {/* Dark Gradient Overlay for text readability */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                    
                    {/* Icon - Top Left */}
                    <div className="absolute top-6 left-6 z-20 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white transition-all duration-500 group-hover:bg-white group-hover:text-black">
                      <Icon className="size-5" />
                    </div>

                    {/* Content - Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 z-20 p-8 flex flex-col justify-end">
                      <h4 className="mb-3 font-[Plus_Jakarta_Sans] text-2xl font-bold text-white">
                        {item.title}
                      </h4>
                      <p className="text-sm leading-[1.8] text-white/80">
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
