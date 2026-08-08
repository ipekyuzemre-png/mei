"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Send, User, Building2, Layers, FileText, CheckCircle } from "lucide-react";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { useRouter } from "next/navigation";

function FieldLabel({ icon: Icon, children }) {
  return (
    <label className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black/50">
      <Icon className="size-4 text-black/40" />
      {children}
    </label>
  );
}

export default function Contact() {
  const router = useRouter();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const [successOpen, setSuccessOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    service: "",
    details: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // WhatsApp metnini oluştur
    let text = `*Yeni Teklif Talebi*\n\n`;
    text += `*Ad Soyad:* ${formData.name}\n`;
    if (formData.company) text += `*Firma:* ${formData.company}\n`;
    if (formData.service) text += `*İstenen Hizmet:* ${formData.service}\n`;
    text += `*Proje Detayı:* ${formData.details}`;
    
    // Formu temizle
    setFormData({ name: "", company: "", service: "", details: "" });

    // Google Ads dönüşüm takibi için tasarladığımız sayfaya yönlendiriyoruz
    router.push(`/whatsapp-yonlendirme?text=${encodeURIComponent(text)}`);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 lg:py-36 z-50 overflow-hidden bg-transparent">
      <Container size="md" ref={ref} className="relative z-10">
        <div className="mb-14 sm:mb-20">
          <SectionHeader
            badge={siteConfig.contactHeader.badge}
            title={siteConfig.contactHeader.title}
            highlight={siteConfig.contactHeader.highlight}
            description={siteConfig.contactHeader.description}
            inView={isInView}
            theme="light"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="glass-panel-light rounded-[2.5rem] p-6 sm:p-10 lg:p-14 shadow-[0_40px_100px_rgba(0,0,0,0.05)] border border-white/40">
            <form onSubmit={handleSubmit} className="space-y-10 sm:space-y-12">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                  <FieldLabel icon={User}>Ad Soyad</FieldLabel>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Ad Soyad"
                    className="h-14 rounded-2xl border-black/5 bg-white/50 px-5 text-base text-black shadow-inner backdrop-blur-sm placeholder:text-black/30 focus-visible:ring-black/20"
                  />
                </div>

                <div>
                  <FieldLabel icon={Building2}>Firma</FieldLabel>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Firma Adı (Opsiyonel)"
                    className="h-14 rounded-2xl border-black/5 bg-white/50 px-5 text-base text-black shadow-inner backdrop-blur-sm placeholder:text-black/30 focus-visible:ring-black/20"
                  />
                </div>
              </div>

              <div>
                <FieldLabel icon={Layers}>İhtiyaç Duyulan Hizmet</FieldLabel>
                <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-4">
                  {siteConfig.serviceOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setFormData({ ...formData, service: opt })}
                      className={cn(
                        "rounded-2xl border px-4 py-4 text-sm font-semibold transition-all duration-300 backdrop-blur-sm",
                        formData.service === opt
                          ? "border-black/20 bg-black text-white shadow-xl scale-[1.02]"
                          : "border-black/5 bg-white/50 text-black/60 hover:border-black/10 hover:bg-white hover:text-black"
                      )}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <FieldLabel icon={FileText}>Proje Detayları</FieldLabel>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Projenizden kısaca bahsedin..."
                  className="w-full resize-none rounded-2xl border border-black/5 bg-white/50 px-5 py-4 text-base text-black shadow-inner backdrop-blur-sm outline-none transition-all placeholder:text-black/30 focus-visible:border-black/30 focus-visible:ring-4 focus-visible:ring-black/10"
                />
              </div>

              <Button variant="default-light" size="lg" type="submit" className="w-full rounded-2xl text-lg h-16 shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-all duration-300">
                <Send className="mr-2 size-5" />
                Ücretsiz Teklif Al
              </Button>

              <p className="text-center text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-black/30">
                Bilgileriniz güvende. Size 24 saat içinde dönüş yapacağız.
              </p>
            </form>
          </div>
        </motion.div>
      </Container>

      <Dialog open={successOpen} onOpenChange={setSuccessOpen}>
        <DialogContent className="border-white/10 bg-[#030014]/90 backdrop-blur-3xl text-center sm:max-w-md sm:rounded-[2rem] p-10">
          <DialogHeader className="items-center text-center">
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-[2rem] bg-white/10 text-white border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
              <CheckCircle className="size-12" />
            </div>
            <DialogTitle className="font-[Plus_Jakarta_Sans] text-3xl font-bold text-white mb-2">
              Talebiniz Alındı!
            </DialogTitle>
            <DialogDescription className="text-base text-white/50 leading-relaxed">
              İlginiz için teşekkürler. Uzman ekibimiz en kısa sürede sizinle iletişime geçecektir.
            </DialogDescription>
          </DialogHeader>
          <Button variant="default" size="lg" className="mt-6 w-full rounded-2xl" onClick={() => setSuccessOpen(false)}>
            Tamam
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  );
}
