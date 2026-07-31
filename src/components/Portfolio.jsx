"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Eye, ChevronUp, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export default function Portfolio() {
  const ref = useRef(null);
  const activeContainerRef = useRef(null);
  const caseStudyRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);

  const project = siteConfig.projects[activeIndex];

  const toggleCaseStudy = () => {
    if (!caseStudyOpen) {
      setCaseStudyOpen(true);
    } else {
      setCaseStudyOpen(false);
    }
  };

  return (
    <section id="portfolio" className="relative overflow-hidden py-20 sm:py-28 lg:py-36 z-30 bg-[#F4F3EE] rounded-t-[3rem] lg:rounded-t-[5rem] -mt-12 lg:-mt-20 shadow-[0_-30px_50px_rgba(0,0,0,0.1)] border-t border-black/5">
      {/* 3D Fluid Wave Background (Matching Hero) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/hero_bg.webp" 
          alt="Portfolio Background" 
          fill 
          priority 
          className="object-cover object-center opacity-60 mix-blend-luminosity scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F4F3EE] via-transparent to-[#F4F3EE]/50" />
      </div>

      <Container size="xl" ref={ref} className="relative z-10">
        <div className="mb-14 sm:mb-20">
          <SectionHeader
            badge={siteConfig.portfolioHeader.badge}
            title={siteConfig.portfolioHeader.title}
            highlight={siteConfig.portfolioHeader.highlight}
            description={siteConfig.portfolioHeader.description}
            inView={isInView}
            theme="light"
          />
        </div>

        <motion.div
          ref={activeContainerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mb-8 sm:mb-12 scroll-mt-24 lg:scroll-mt-32"
        >
          {/* Active Project Glass Container */}
          <div className="glass-panel-light overflow-hidden rounded-[2.5rem] border border-black/10 bg-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.1)] backdrop-blur-md transition-colors duration-700">
            <div className="grid lg:grid-cols-12 gap-0 overflow-hidden bg-transparent">
              
              {/* Text Side */}
              <div className="flex flex-col justify-center px-6 py-10 sm:px-12 sm:py-16 lg:col-span-5 lg:px-16 lg:py-20 relative z-10">
                <span className="mb-3 sm:mb-4 text-xs font-bold uppercase tracking-widest text-black/50">
                  {project.category}
                </span>
                <h3 className="mb-6 font-[Plus_Jakarta_Sans] text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                  {project.title}
                </h3>
                <p className="mb-10 text-base leading-[1.8] text-black/70 sm:text-lg">
                  {project.description}
                </p>

                <div className="mb-10 sm:mb-12 flex flex-wrap gap-2 sm:gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-black/10 bg-white/50 px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-semibold tracking-wide text-black/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button
                  variant="default"
                  size="lg"
                  className="w-full sm:w-fit rounded-full bg-transparent text-black border border-black/20 hover:border-black hover:bg-black hover:text-white shadow-none hover:shadow-[0_8px_30px_rgb(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300 h-14 sm:h-12 group"
                  onClick={toggleCaseStudy}
                >
                  {caseStudyOpen ? (
                    <>
                      <ChevronUp className="mr-2 size-5 transition-transform duration-300 group-hover:-translate-y-1" />
                      Close Case Study
                    </>
                  ) : (
                    <>
                      <ExternalLink className="mr-2 size-5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                      View Case Study
                    </>
                  )}
                </Button>
              </div>

              {/* CSS Device Mockup for Image Side */}
              <div className="relative overflow-hidden lg:col-span-7 bg-transparent p-6 sm:p-10 lg:p-16 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent mix-blend-overlay pointer-events-none" />
                
                {/* Macbook-style inner frame */}
                <div className="relative w-full aspect-[16/10] max-w-3xl rounded-[1rem] sm:rounded-[1.5rem] border border-white/10 bg-black shadow-2xl overflow-hidden transition-transform duration-700 lg:hover:scale-[1.02]">
                   <div className="absolute top-0 left-0 w-full h-6 sm:h-8 bg-[#1A1A1A] border-b border-white/10 z-20 flex items-center px-3 sm:px-4 gap-1.5">
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white/20" />
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white/20" />
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white/20" />
                   </div>
                   <div className="absolute top-6 sm:top-8 left-0 right-0 bottom-0">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                   </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* Inline Case Study - Expands Below Active Project */}
        <AnimatePresence>
          {caseStudyOpen && (
            <motion.div
              ref={caseStudyRef}
              initial={{ height: 0, opacity: 0, marginBottom: 0 }}
              animate={{ height: "auto", opacity: 1, marginBottom: "2rem" }}
              exit={{ height: 0, opacity: 0, marginBottom: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden scroll-mt-24 lg:scroll-mt-32"
            >
          <div className="pt-4">
              <div className="rounded-[2rem] sm:rounded-[2.5rem] border border-black/10 bg-white/40 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden">
                
                {/* Case Study Header with Project Image */}
                <div className="relative h-48 sm:h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-[#F4F3EE]" />
                  <div className="absolute bottom-6 left-6 sm:left-10 right-6 sm:right-10">
                    <span className="inline-block mb-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/80 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                      Case Study
                    </span>
                    <h3 className="font-[Plus_Jakarta_Sans] text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Case Study Content */}
                <div className="p-6 sm:p-10">
                  {/* Long Description */}
                  <p className="text-base sm:text-lg leading-relaxed text-black/70 mb-8 sm:mb-10">
                    {project.longDescription}
                  </p>

                  {/* Challenge & Result Cards */}
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
                    <div className="p-5 sm:p-6 rounded-2xl bg-white/70 border border-black/5 shadow-sm">
                      <h4 className="text-black/90 font-bold mb-3 flex items-center gap-2 font-[Plus_Jakarta_Sans]">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#D97757]" />
                        The Challenge
                      </h4>
                      <p className="text-sm leading-relaxed text-black/60">
                        {project.challenge}
                      </p>
                    </div>
                    <div className="p-5 sm:p-6 rounded-2xl bg-white/70 border border-black/5 shadow-sm">
                      <h4 className="text-black/90 font-bold mb-3 flex items-center gap-2 font-[Plus_Jakarta_Sans]">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#788C5D]" />
                        The Result
                      </h4>
                      <p className="text-sm leading-relaxed text-black/60">
                        {project.result}
                      </p>
                    </div>
                  </div>

                  {/* Tags + CTA */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 pt-6 border-t border-black/10">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-black/10 bg-white/60 px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-semibold tracking-wide text-black/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {project.demoUrl ? (
                      <Link href={project.demoUrl} className="w-full sm:w-auto">
                        <Button variant="default" className="w-full sm:w-auto rounded-full bg-black text-white hover:bg-black/90 shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300 h-14 sm:h-12 gap-2 group">
                          View Live Site
                          <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Button>
                      </Link>
                    ) : (
                      <Button variant="default" className="w-full sm:w-auto rounded-full bg-black/5 text-black/40 cursor-not-allowed shadow-none border border-black/5 h-14 sm:h-12 gap-2">
                        Coming Soon
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Thumbnails Grid (Portrait Cards) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {siteConfig.projects.map((item, i) => (
            <motion.button
              key={item.title}
              type="button"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              onClick={() => {
                setActiveIndex(i);
                setCaseStudyOpen(false);
              }}
              className={`group relative aspect-[3/4] overflow-hidden rounded-[2rem] transition-[transform,opacity,box-shadow,border] duration-500 text-left ${
                i === activeIndex
                  ? "ring-2 ring-black/50 ring-offset-4 ring-offset-[#F4F3EE] shadow-[0_0_40px_rgba(0,0,0,0.15)] scale-[1.03]"
                  : "opacity-60 lg:hover:opacity-100 lg:hover:scale-[1.02]"
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-center transition-transform duration-1000 lg:group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/20 transition-colors duration-500 lg:group-hover:bg-black/10" />
              
              <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end bg-gradient-to-t from-[#0F1110]/90 via-[#0F1110]/40 to-transparent">
                <span className="text-[10px] sm:text-xs font-bold text-white/70 uppercase tracking-wider mb-1 sm:mb-2 transform translate-y-4 opacity-0 transition-all duration-500 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                  {item.category}
                </span>
                <p className="text-sm sm:text-lg font-[Plus_Jakarta_Sans] font-bold text-white leading-tight">
                  {item.title}
                </p>
              </div>

              {/* View Icon Overlay on Hover */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 flex items-center justify-center opacity-0 transform scale-50 transition-all duration-500 lg:group-hover:opacity-100 lg:group-hover:scale-100 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
                 <Eye className="w-5 h-5 text-white drop-shadow-md" />
              </div>
            </motion.button>
          ))}
        </div>
      </Container>
    </section>
  );
}
