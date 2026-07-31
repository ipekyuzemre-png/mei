"use client";

import { useEffect, useState, useRef } from "react";
import { Menu, ChevronRight, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/shared/Container";
import Magnetic from "@/components/shared/Magnetic";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

import { siteConfig } from "@/config/site";

const sectionStyles = {
  hero: { bg: "bg-[#F4F3EE] md:bg-[#F4F3EE]/50 border-black/5", theme: "light" },
  services: { bg: "bg-[#F4F3EE] md:bg-[#F4F3EE]/50 border-black/5", theme: "light" },
  about: { bg: "bg-[#F4F3EE] md:bg-[#F4F3EE]/50 border-black/5", theme: "light" },
  portfolio: { bg: "bg-[#F4F3EE] md:bg-[#F4F3EE]/50 border-black/5", theme: "light" },
  contact: { bg: "bg-[#F4F3EE] md:bg-[#F4F3EE]/50 border-black/5", theme: "light" },
  footer: { bg: "bg-[#F4F3EE] md:bg-[#F4F3EE]/50 border-black/5", theme: "light" },
};

function Logo({ compact = false, isLight = false, forceText = false }) {
  return (
    <Magnetic strength={15}>
      <a href="/" className="group flex items-center gap-3">
        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all group-hover:scale-105 group-hover:shadow-lg ${isLight ? 'glass-panel-light text-black' : 'glass-panel text-white'}`}>
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full p-1 transition-transform duration-700 group-hover:scale-110">
            <defs>
              <linearGradient id="exo-m-nav" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.3" className="animate-[spin_20s_linear_infinite]" />
            <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="1" opacity="0.15" />
            <path d="M 25 75 C 25 20, 42 20, 50 50" stroke="url(#exo-m-nav)" strokeWidth="8" strokeLinecap="round" />
            <path d="M 75 75 C 75 20, 58 20, 50 50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
            <path d="M 50 40 L 54 50 L 50 60 L 46 50 Z" fill="currentColor" className="animate-pulse" />
          </svg>
        </div>
        {!compact && (
          <div className={forceText ? "flex flex-col" : "hidden min-[380px]:flex flex-col"}>
            <span className={`font-[Plus_Jakarta_Sans] text-sm font-bold tracking-widest transition-colors ${isLight ? 'text-black' : 'text-white'}`}>
              MEI YAZILIM
            </span>
          </div>
        )}
      </a>
    </Magnetic>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  
  const waLink = `https://wa.me/${siteConfig.contactInfo.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Merhaba! Web sitenizden ulaşıyorum, detaylı bilgi almak istiyorum.")}`;

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    // 1. Scroll listener for just the background change
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    // 2. IntersectionObserver for active section (much better performance than querySelectorAll on scroll)
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Trigger when section is in the top/middle part of the viewport
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("section[id], footer[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const currentStyle = sectionStyles[activeSection] || sectionStyles.hero;
  const isLight = currentStyle.theme === "light";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 md:backdrop-blur-md saturate-150 ${
          isScrolled
            ? `border-b ${currentStyle.bg} py-3 shadow-[0_4px_30px_rgba(0,0,0,0.1)]`
            : "border-b border-transparent bg-transparent py-5 shadow-none"
        }`}
      >
        <Container size="xl" className="flex items-center justify-between gap-4">
          <Logo isLight={isLight && isScrolled} />

          <nav className={`hidden items-center gap-2 rounded-full border px-2 py-1 backdrop-blur-md lg:flex transition-colors duration-500 ${isLight && isScrolled ? 'border-black/5 bg-black/[0.02]' : 'border-white/20 bg-white/[0.05]'}`} aria-label="Main menu">
            {siteConfig.navLinks.map((link) => {
              const isHashLink = link.href.includes('#');
              const href = (isHomePage && isHashLink) ? link.href.substring(link.href.indexOf('#')) : link.href;
              
              if (isHomePage && isHashLink) {
                return (
                  <a
                    key={link.name}
                    href={href}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-500 ${isLight && isScrolled ? 'text-black/80 hover:bg-black/10 hover:text-black' : 'text-white hover:bg-white/20 hover:text-white'}`}
                  >
                    {link.name}
                  </a>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-500 ${isLight && isScrolled ? 'text-black/80 hover:bg-black/10 hover:text-black' : 'text-white hover:bg-white/20 hover:text-white'}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Magnetic strength={20}>
              <Button variant={isLight && isScrolled ? "default-light" : "default"} className="hidden lg:inline-flex rounded-full transition-colors duration-500" render={<a href={waLink} target="_blank" rel="noopener noreferrer" />}>
                Teklif Al
              </Button>
            </Magnetic>

            <Magnetic strength={30}>
              <Button
                variant={isLight && isScrolled ? "outline-light" : "outline"}
                size="icon"
                className={`lg:hidden rounded-full backdrop-blur-md transition-colors duration-500 ${isLight && isScrolled ? 'border-black/10 bg-black/5 text-black' : 'border-white/10 bg-white/5 text-white'}`}
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </Button>
            </Magnetic>
          </div>
        </Container>
      </header>

      <Dialog open={mobileOpen} onOpenChange={setMobileOpen}>
        <DialogContent showCloseButton={false} data-lenis-prevent className={`flex h-[100dvh] max-h-[100dvh] w-full max-w-full flex-col overflow-y-auto overscroll-contain rounded-none border-none ${isLight ? 'bg-[#F4F3EE] text-black' : 'bg-[#1a1a1a] text-white'} sm:max-w-md sm:rounded-2xl sm:h-auto sm:max-h-[90vh]`}>
          <DialogClose className={`absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-500 hover:scale-110 hover:rotate-90 active:scale-95 focus:outline-none z-50 ${isLight ? 'bg-black/5 border-black/10 text-black/60 hover:bg-black/10 hover:text-black' : 'bg-white/10 border-white/20 text-white/70 hover:bg-white/20 hover:text-white'}`}>
            <X className="h-6 w-6" strokeWidth={1.5} />
            <span className="sr-only">Kapat</span>
          </DialogClose>

          <DialogHeader className="text-left">
            <DialogTitle className="flex items-center">
              <Logo isLight={isLight} forceText={true} />
            </DialogTitle>
            <DialogDescription className="sr-only">
              Site navigation menu
            </DialogDescription>
          </DialogHeader>

          <nav className="flex flex-1 flex-col justify-center gap-2 py-8" aria-label="Mobile menu">
            {siteConfig.navLinks.map((link) => {
              const isHashLink = link.href.includes('#');
              const href = (isHomePage && isHashLink) ? link.href.substring(link.href.indexOf('#')) : link.href;

              if (isHomePage && isHashLink) {
                return (
                  <a
                    key={link.name}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`rounded-2xl px-4 py-4 font-[Plus_Jakarta_Sans] text-2xl font-bold transition-colors hover:pl-6 sm:text-3xl ${isLight ? 'text-black/60 hover:bg-black/5 hover:text-black' : 'text-white/60 hover:bg-white/5 hover:text-white'}`}
                  >
                    {link.name}
                  </a>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-2xl px-4 py-4 font-[Plus_Jakarta_Sans] text-2xl font-bold transition-colors hover:pl-6 sm:text-3xl ${isLight ? 'text-black/60 hover:bg-black/5 hover:text-black' : 'text-white/60 hover:bg-white/5 hover:text-white'}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <Button variant={isLight ? "default-light" : "default"} size="lg" className="w-full rounded-full transition-colors" render={<a href={waLink} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)} />}>
            Teklif Al
            <ChevronRight className="ml-1 size-5" />
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
