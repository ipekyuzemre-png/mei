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
        <div className="mb-14 sm:mb-20">
          <SectionHeader
            badge="Paket İçeriği"
            title="Her Pakette"
            highlight="Ne Sunuyoruz?"
            description="Web sitenizi profesyonel bir şekilde hayata geçirmek için ihtiyacınız olan her şey tek çatı altında."
            theme="light"
            animated={false}
          />
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