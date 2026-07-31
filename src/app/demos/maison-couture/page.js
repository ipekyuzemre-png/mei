"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingBag, Search, Menu } from "lucide-react";

export default function MaisonCoutureDemo() {
  return (
    <main className="relative min-h-screen w-full bg-[#E5E1DA] overflow-hidden selection:bg-black selection:text-white">
      
      {/* Return to Portfolio Button */}
      <div className="absolute top-8 left-8 z-50">
        <Link href="/#portfolio">
          <button className="flex items-center gap-2 text-black/60 hover:text-black transition-colors text-sm font-semibold uppercase tracking-widest bg-white/50 backdrop-blur-md px-6 py-3 rounded-full border border-black/5">
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </button>
        </Link>
      </div>

      {/* Hero Background */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 z-0">
        <Image
          src="/demos/maison_bg.webp"
          alt="Maison Couture Editorial"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#E5E1DA] via-[#E5E1DA]/80 to-transparent lg:from-[#E5E1DA] lg:via-[#E5E1DA]/20 lg:to-transparent" />
      </div>

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-40 pt-10 pb-6">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="hidden sm:flex items-center gap-6 text-black text-sm uppercase tracking-widest font-medium">
            <span className="cursor-pointer hover:opacity-50">Shop</span>
            <span className="cursor-pointer hover:opacity-50">Collections</span>
            <span className="cursor-pointer hover:opacity-50">Atelier</span>
          </div>
          
          <div className="text-center flex-1 lg:flex-none">
            <h1 className="font-serif text-3xl sm:text-4xl text-black tracking-tight">
              Maison Couture.
            </h1>
          </div>
          
          <div className="flex items-center gap-6 text-black">
            <Search className="w-5 h-5 cursor-pointer hover:opacity-50" />
            <ShoppingBag className="w-5 h-5 cursor-pointer hover:opacity-50" />
            <Menu className="w-6 h-6 sm:hidden cursor-pointer" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex items-center h-screen container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="max-w-2xl pt-20"
        >
          <span className="block mb-4 text-xs font-bold uppercase tracking-[0.3em] text-black/50">
            Fall / Winter 2026
          </span>
          <h2 className="font-serif text-6xl sm:text-7xl lg:text-[100px] text-black leading-[0.9] mb-10">
            The Art of <br />
            <span className="italic opacity-80">Elegance.</span>
          </h2>
          <p className="text-black/60 text-lg max-w-md leading-relaxed mb-12">
            Discover the new collection. A symphony of delicate silks, sharp tailoring, and uncompromising quality.
          </p>
          
          <button className="bg-black text-white px-10 py-5 rounded-none uppercase tracking-widest text-sm font-semibold hover:bg-black/80 transition-colors">
            Explore Collection
          </button>
        </motion.div>
      </div>

    </main>
  );
}
