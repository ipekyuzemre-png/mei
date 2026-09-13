"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export default function AnniversaryPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show only once per session to avoid annoying users
    const hasSeenPopup = sessionStorage.getItem("anniversary_popup_seen");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    sessionStorage.setItem("anniversary_popup_seen", "true");
  };

  if (!isOpen) return null;

  const waLink = `https://wa.me/${siteConfig.contactInfo.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Merhaba, 1. yıla özel %17 indirim kampanyasından yararlanmak istiyorum.")}`;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 transition-opacity">
      <div className="relative w-full max-w-md bg-[#F4F3EE] rounded-2xl shadow-2xl p-6 md:p-8 text-center border border-black/10 animate-in zoom-in-95 duration-300">
        <button 
          onClick={closePopup}
          className="absolute right-4 top-4 rounded-full p-2 bg-black/5 hover:bg-black/10 transition-colors text-black/60"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="mt-2 mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#788C5D]/10 text-[#788C5D] text-3xl">
          🎉
        </div>
        
        <h2 className="text-2xl font-bold text-black mb-3 font-['Plus_Jakarta_Sans']">1. Yılımızı Kutluyoruz!</h2>
        <p className="text-black/70 mb-6 leading-relaxed">
          Rengin Yazılım olarak 1. yılımıza özel, tüm web tasarım ve yazılım hizmetlerimizde <strong className="text-[#788C5D] text-lg block mt-1">%17 Net İndirim</strong> fırsatı sunuyoruz.
        </p>
        
        <div className="flex flex-col gap-3">
          <Button 
            className="w-full rounded-xl bg-[#788C5D] hover:bg-[#63754b] text-white py-6 text-lg font-semibold transition-colors"
            render={<a href={waLink} target="_blank" rel="noopener noreferrer" onClick={closePopup} />}
          >
            Fırsatı Yakala
          </Button>
          <button 
            onClick={closePopup}
            className="text-black/50 hover:text-black/80 font-medium text-sm transition-colors py-2"
          >
            Belki Daha Sonra
          </button>
        </div>
      </div>
    </div>
  );
}
