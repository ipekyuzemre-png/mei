"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { siteConfig } from "@/config/site";

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="portfolio" className="relative overflow-hidden py-20 sm:py-28 lg:py-36 z-30 bg-transparent">
      <Container size="xl" ref={ref} className="relative z-10">
        <div className="mb-12 sm:mb-20 max-w-3xl">
          <SectionHeader
            badge={siteConfig.portfolioHeader.badge}
            title={siteConfig.portfolioHeader.title}
            highlight={siteConfig.portfolioHeader.highlight}
            inView={isInView}
            theme="light"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-black/60 font-medium leading-relaxed"
          >
            Sadece bir web sitesi değil, markanızın dijital dünyadaki prestijini yansıtan pürüzsüz sanat eserleri üretiyoruz.
          </motion.p>
        </div>

        {/* Thumbnails Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {siteConfig.projects.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-500 text-left bg-black"
            >
              <Link href={item.demoUrl || "#"} className="block w-full h-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center opacity-80 transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-60"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500" />
                
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                  <span className="text-xs font-bold text-white/70 uppercase tracking-wider mb-2 transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                    {item.category}
                  </span>
                  <p className="text-2xl font-[Plus_Jakarta_Sans] font-bold text-white leading-tight transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                    {item.title}
                  </p>
                </div>

                {/* View Button Overlay on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transform translate-y-8 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  <div className="rounded-full bg-white text-black px-6 py-3 text-sm font-bold shadow-[0_8px_32px_rgba(0,0,0,0.2)] flex items-center gap-2">
                    Projeyi İncele
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
