"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, CalendarDays, UtensilsCrossed } from "lucide-react";

export default function NoirDemo() {
  return (
    <main className="relative min-h-screen w-full bg-[#0a0a0a] overflow-hidden selection:bg-[#B8860B]/30 text-white font-serif">
      
      {/* Return to Portfolio Button */}
      <div className="absolute top-8 left-8 z-50">
        <Link href="/#portfolio">
          <button className="flex items-center gap-2 text-white/50 hover:text-[#D4AF37] transition-colors text-sm font-sans tracking-widest uppercase">
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </button>
        </Link>
      </div>

      {/* CSS Radial Glow Background (Since image quota was exhausted, this looks just as premium) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[#B8860B]/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none mix-blend-overlay" />
      </div>

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-40 pt-12 pb-6">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="hidden sm:flex flex-col text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-sans">
            <span>Est. 2024</span>
            <span>Istanbul</span>
          </div>
          
          <div className="text-center flex-1">
            <h1 className="text-3xl sm:text-4xl tracking-[0.3em] text-white">
              NOIR
            </h1>
          </div>
          
          <div className="hidden sm:flex items-center gap-8 text-white/70 text-xs font-sans uppercase tracking-widest">
            <span className="hover:text-[#D4AF37] cursor-pointer transition-colors">Menu</span>
            <span className="hover:text-[#D4AF37] cursor-pointer transition-colors">Experience</span>
            <span className="hover:text-[#D4AF37] cursor-pointer transition-colors">Private Dining</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen px-4">
        
        {/* Subtle decorative line */}
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: 80 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-[1px] bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent mb-8 hidden sm:block"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="block mb-8 text-xs sm:text-sm font-sans uppercase tracking-[0.5em] text-[#D4AF37]">
            A Gastronomic Journey
          </span>
          <h2 className="text-5xl sm:text-7xl lg:text-8xl text-white leading-tight mb-10 tracking-wide">
            Taste the <span className="italic text-white/80 font-light">Shadows.</span>
          </h2>
          <p className="text-white/50 text-base sm:text-lg font-sans font-light max-w-lg mx-auto leading-relaxed mb-16">
            An avant-garde dining experience where light meets darkness, and traditional flavors are reimagined through modern culinary alchemy.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 font-sans">
            <button className="w-full sm:w-auto flex items-center justify-center gap-3 border border-[#D4AF37] text-[#D4AF37] px-8 py-4 uppercase tracking-[0.2em] text-xs hover:bg-[#D4AF37] hover:text-black transition-all duration-500">
              <CalendarDays className="w-4 h-4" />
              Book a Table
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-3 text-white/70 px-8 py-4 uppercase tracking-[0.2em] text-xs hover:text-white transition-all duration-500">
              <UtensilsCrossed className="w-4 h-4" />
              View Menu
            </button>
          </div>
        </motion.div>
      </div>

    </main>
  );
}
