import {
  Globe,
  ArrowUpRight,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Share2,
  Link2,
} from "lucide-react";
import Image from "next/image";
import Container from "@/components/shared/Container";
import Magnetic from "@/components/shared/Magnetic";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer id="footer" className="relative overflow-hidden z-[60] bg-transparent">
      <div className="relative z-10 border-t border-black/5">
        <Container size="xl" className="py-16 sm:py-20 lg:py-24">
          <div className="mb-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4">
              <Magnetic strength={15}>
                <a href="/" className="group mb-8 inline-flex items-center gap-4 w-fit">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl glass-panel-light text-black transition-all group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(0,0,0,0.1)]">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full p-1 transition-transform duration-700 group-hover:scale-110">
                      <defs>
                        <linearGradient id="exo-m-foot" x1="0%" y1="100%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
                          <stop offset="100%" stopColor="currentColor" stopOpacity="0.6" />
                        </linearGradient>
                      </defs>
                      <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.3" className="animate-[spin_20s_linear_infinite]" />
                      <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="1" opacity="0.15" />
                      <path d="M 25 75 C 25 20, 42 20, 50 50" stroke="url(#exo-m-foot)" strokeWidth="8" strokeLinecap="round" />
                      <path d="M 75 75 C 75 20, 58 20, 50 50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
                      <path d="M 50 40 L 54 50 L 50 60 L 46 50 Z" fill="currentColor" className="animate-pulse" />
                    </svg>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-[Plus_Jakarta_Sans] text-lg font-bold text-black tracking-wide uppercase">
                      {siteConfig.name}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-black/60">
                      Premium Web Ajansı
                    </span>
                  </div>
                </a>
              </Magnetic>

              <p className="mb-8 max-w-xs text-sm leading-[1.8] text-black/60 sm:text-base">
                {siteConfig.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {siteConfig.socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Magnetic key={social.label} strength={30}>
                      <a
                        href={social.href}
                        aria-label={social.label}
                        className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-black/5 text-black/60 transition-all duration-300 hover:-translate-y-1 hover:border-black/20 hover:bg-black/10 hover:text-black"
                      >
                        <Icon size={18} />
                      </a>
                    </Magnetic>
                  );
                })}
              </div>
            </div>

            {siteConfig.footerLinks.map((group) => (
              <div key={group.title} className="lg:col-span-2">
                <h4 className="mb-6 font-[Plus_Jakarta_Sans] text-sm font-bold uppercase tracking-widest text-black/90">
                  {group.title}
                </h4>
                <ul className="space-y-4">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="group/link flex items-center gap-2 text-sm font-medium text-black/60 transition-colors hover:text-black"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="lg:col-span-2">
              <h4 className="mb-6 font-[Plus_Jakarta_Sans] text-sm font-bold uppercase tracking-widest text-black/90">
                İletişim
              </h4>
              <div className="space-y-5">
                <a
                  href={`mailto:${siteConfig.contactInfo.email}`}
                  className="group/contact flex items-center gap-3 text-sm font-medium text-black/60 transition-colors hover:text-black"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-black/10 bg-black/5 transition-colors group-hover/contact:border-black/20 group-hover/contact:bg-black/10">
                    <Mail size={16} className="text-black/60 group-hover/contact:text-black" />
                  </div>
                  <span>{siteConfig.contactInfo.email}</span>
                </a>

                <a
                  href={`tel:${siteConfig.contactInfo.phone.replace(/[^0-9+]/g, '')}`}
                  className="group/contact flex items-center gap-3 text-sm font-medium text-black/60 transition-colors hover:text-black"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-black/10 bg-black/5 transition-colors group-hover/contact:border-black/20 group-hover/contact:bg-black/10">
                    <Phone size={16} className="text-black/60 group-hover/contact:text-black" />
                  </div>
                  {siteConfig.contactInfo.phone}
                </a>

                <div className="flex items-center gap-3 text-sm font-medium text-black/60">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-black/10 bg-black/5">
                    <MapPin size={16} />
                  </div>
                  {siteConfig.contactInfo.address}
                </div>
              </div>
            </div>
          </div>

          <div className="relative mb-8 h-px w-full bg-black/10" />

          <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
            <p className="text-sm font-medium text-black/50">
              © {new Date().getFullYear()}{" "}
              <span className="font-bold text-black/80">{siteConfig.name}</span>. Tüm Hakları Saklıdır.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
              <a href="/privacy" className="text-sm font-medium text-black/50 transition-colors hover:text-black">
                Gizlilik
              </a>
              <a href="/terms" className="text-sm font-medium text-black/50 transition-colors hover:text-black">
                Şartlar
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
