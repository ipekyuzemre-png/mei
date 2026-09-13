"use client";
import React from "react";
import { siteConfig } from "@/config/site";

export default function AnnouncementBar() {
  const waLink = `https://wa.me/${siteConfig.contactInfo.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Merhaba, 1. yıla özel %17 indirim kampanyasından yararlanmak istiyorum.")}`;

  return (
    <a 
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full bg-black text-[#F4F3EE] text-sm py-2 overflow-hidden relative group"
    >
      <div className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center justify-center shrink-0 px-8 gap-4">
            <span className="font-semibold tracking-wide flex items-center gap-2">
              <span className="text-base">🎉</span>
              1. Yılımıza Özel %17 İndirim!
            </span>
            <span className="underline underline-offset-2 opacity-80 font-medium ml-2">Detaylı Bilgi</span>
          </div>
        ))}
      </div>
    </a>
  );
}
