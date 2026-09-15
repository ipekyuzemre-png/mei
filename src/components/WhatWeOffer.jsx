"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";

const features = [
  { label: "Mobil uyumlu (responsive)" },
  { label: "İhtiyaca özel sayfa tasarımları" },
  { label: "Gelişmiş SEO altyapısı" },
  { label: "1 Yıllık domain" },
  { label: "1 Senelik hosting" },
  { label: "SSL Sertifikası ve güvenlik" },
  { label: "Türkçe web sitesi içeriği" },
  { label: "WhatsApp entegrasyonu" },
  { label: "İletişim formu entegrasyonu" },
  { label: "Özel Yönetim Paneli", highlight: true },
  { label: "Google Analytics kurulumu" },
  { label: "Search Console kurulumu" },
  { label: "KVKK uyumlu çerez barı" },
  { label: "Sosyal medya profil linkleri" },
  { label: "E-posta gönderim entegrasyonu" },
  { label: "Pop-up banner özelliği" },
  { label: "2 Aylık ücretsiz destek" },
  { label: "LLMo (Yapay Zeka Arama Optimizasyonu)", highlight: true },
];

export default function WhatWeOffer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="ne-sunuyoruz"
      className="relative py-20 sm:py-28 lg:py-36 z-20 bg-transparent overflow-hidden"
    >
      <div className="relative z-10 section-divider mb-14 sm:mb-20 opacity-50" />

      <Container ref={ref} className="relative z-10">
        <div className="mb-14 sm:mb-20 flex flex-col items-center">
          <SectionHeader
            badge="Paket İçeriği"
            title="Her Pakette"
            highlight="Ne Sunuyoruz?"
            description="Web sitenizi profesyonel bir şekilde hayata geçirmek için ihtiyacınız olan her şey tek çatı altında."
            theme="light"
            animated={false}
          />
          <div className="mt-8 flex flex-col md:flex-row items-stretch justify-center gap-6 w-full max-w-4xl mx-auto">
            {/* Web Tasarım Paketi */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
              className="relative group flex-1"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#788C5D]/20 to-[#788C5D]/20 blur-xl transition-all duration-500 group-hover:blur-2xl opacity-0 group-hover:opacity-100" />
              <div className="relative flex flex-col h-full items-center text-center gap-2 rounded-3xl border border-black/5 bg-white/50 backdrop-blur-xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-[#788C5D]/20">
                <span className="text-sm font-bold tracking-widest text-black/50 uppercase">
                  Premium Web Tasarım
                </span>
                <div className="flex items-baseline gap-1.5 mt-2">
                  <span className="text-5xl font-extrabold tracking-tighter text-black/80">20.000</span>
                  <span className="text-2xl font-bold text-[#788C5D]">₺</span>
                </div>
                <p className="text-sm text-black/60 mt-3 leading-relaxed">
                  Kurumsal kimliğinizi yansıtan, aşağıdaki tüm özelliklere sahip anahtar teslim premium web sitesi.
                </p>
              </div>
            </motion.div>

            {/* Özel Yazılım Paketi */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.3 }}
              className="relative group flex-1"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#788C5D]/30 to-[#788C5D]/10 blur-xl transition-all duration-500 group-hover:blur-2xl opacity-0 group-hover:opacity-100" />
              <div className="relative flex flex-col h-full items-center text-center gap-2 rounded-3xl border border-[#788C5D]/20 bg-gradient-to-b from-white/80 to-[#788C5D]/5 backdrop-blur-xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] hover:border-[#788C5D]/40">
                <span className="text-sm font-bold tracking-widest text-[#788C5D] uppercase">
                  Özel Yazılım & Otomasyon
                </span>
                <div className="flex items-baseline gap-1.5 mt-2">
                  <span className="text-5xl font-extrabold tracking-tighter text-black/90">40.000</span>
                  <span className="text-2xl font-bold text-[#788C5D]">₺</span>
                  <span className="text-xs font-semibold text-black/40 ml-1 -translate-y-2">'den başlayan</span>
                </div>
                <p className="text-sm text-black/60 mt-3 leading-relaxed">
                  Klinikler, avukatlık büroları ve işletmelere özel süreç yönetim sistemleri (SaaS). İş akışı otomasyonları, özel müşteri panelleri, randevu ve veri entegrasyonları.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className={`flex items-center gap-4 rounded-2xl border px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
                feature.highlight
                  ? "bg-[#788C5D]/10 border-[#788C5D]/30 hover:border-[#788C5D]/60"
                  : "bg-white/40 border-black/5 hover:border-black/15"
              }`}
            >
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                  feature.highlight
                    ? "bg-[#788C5D] text-white"
                    : "bg-black/[0.08] text-black"
                }`}
              >
                <Check className="size-3.5" strokeWidth={3} />
              </span>
              <span
                className={`text-sm font-semibold leading-snug ${
                  feature.highlight ? "text-[#788C5D]" : "text-black/80"
                }`}
              >
                {feature.label}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-10 text-center text-sm text-black/40 font-medium"
        >
          Tüm özellikler projelerimizin{" "}
          <span className="text-black/60">standart paketi</span> kapsamında
          sunulmaktadır.
        </motion.p>
      </Container>
    </section>
  );
}