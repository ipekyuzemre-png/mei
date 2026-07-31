"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LuxResortDemo() {
  return (
    <main className="relative min-h-screen w-full bg-[#0F1110] overflow-hidden selection:bg-[#D4AF37]/30">
      
      {/* Return to Portfolio Button */}
      <div className="absolute top-8 left-8 z-50">
        <Link href="/#portfolio">
          <Button variant="glass" className="rounded-full bg-white/5 border-white/10 text-white hover:bg-white/10 backdrop-blur-md px-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </Link>
      </div>

      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/demos/lux_hero.webp"
          alt="Lux Resort Infinity Pool"
          fill
          priority
          className="object-cover object-center animate-[kenburns_30s_ease-in-out_infinite_alternate]"
        />
        {/* Cinematic Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#0F1110]" />
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
      </div>

      {/* Floating Header */}
      <header className="absolute top-0 left-0 right-0 z-40 pt-10 pb-6">
        <div className="container mx-auto px-6 flex items-center justify-center sm:justify-between">
          <div className="hidden sm:block text-white/70 text-xs font-bold uppercase tracking-[0.3em]">
            Est. 1998
          </div>
          <div className="text-center">
            <h1 className="font-[Plus_Jakarta_Sans] text-2xl sm:text-3xl font-light tracking-[0.2em] text-white">
              LUX RESORT <span className="font-serif italic text-[#D4AF37]">& Spa</span>
            </h1>
          </div>
          <div className="hidden sm:flex items-center gap-8 text-white/80 text-sm font-medium uppercase tracking-widest">
            <span className="hover:text-white cursor-pointer transition-colors">Villas</span>
            <span className="hover:text-white cursor-pointer transition-colors">Dining</span>
            <span className="hover:text-white cursor-pointer transition-colors">Wellness</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="text-center max-w-5xl mx-auto"
        >
          <span className="block mb-6 text-sm sm:text-base font-semibold uppercase tracking-[0.4em] text-[#D4AF37]">
            Sanctuary of Serenity
          </span>
          <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-light text-white leading-tight mb-8">
            Uncompromising <br className="hidden sm:block" />
            <span className="italic opacity-90">Luxury</span> in Nature
          </h2>
          <p className="text-white/60 text-lg sm:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Discover a world where the boundary between architecture and the horizon dissolves. Your private paradise awaits.
          </p>
        </motion.div>

        {/* Floating Booking Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="absolute bottom-12 sm:bottom-20 left-4 right-4 sm:left-1/2 sm:-translate-x-1/2 sm:w-max"
        >
          <div className="glass-panel overflow-hidden rounded-[2rem] border border-white/10 bg-[#0F1110]/40 backdrop-blur-2xl shadow-[0_40px_80px_rgba(0,0,0,0.8)] p-2">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 px-6 py-4">
              
              <div className="flex items-center gap-4 w-full sm:w-auto px-4 py-2 hover:bg-white/5 rounded-2xl transition-colors cursor-pointer border-b border-white/5 sm:border-none">
                <Calendar className="w-5 h-5 text-[#D4AF37]" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Check-in / Check-out</span>
                  <span className="text-sm font-medium text-white">Aug 12 - Aug 18</span>
                </div>
              </div>

              <div className="hidden sm:block w-[1px] h-10 bg-white/10" />

              <div className="flex items-center gap-4 w-full sm:w-auto px-4 py-2 hover:bg-white/5 rounded-2xl transition-colors cursor-pointer border-b border-white/5 sm:border-none">
                <User className="w-5 h-5 text-[#D4AF37]" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Guests</span>
                  <span className="text-sm font-medium text-white">2 Adults, 1 Villa</span>
                </div>
              </div>

              <Button className="w-full sm:w-auto mt-4 sm:mt-0 ml-0 sm:ml-4 rounded-xl sm:rounded-full bg-[#D4AF37] text-black hover:bg-[#F3E5AB] px-8 py-6 font-bold uppercase tracking-wider text-sm transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                <Search className="w-4 h-4 mr-2" />
                Book Now
              </Button>

            </div>
          </div>
        </motion.div>
      </div>

    </main>
  );
}
