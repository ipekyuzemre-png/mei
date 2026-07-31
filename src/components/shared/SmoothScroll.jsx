"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    // Envato onayında ve müşterilerde %100 sorunsuz mobil deneyim garantisi için:
    // Dokunmatik cihazlarda ve mobil ekranlarda yapay kaydırmayı (Lenis) TAMAMEN kapat.
    // Böylece telefonun kendi donanımsal kaydırma sistemi (native scroll) devreye girer.
    const isMobile = window.innerWidth < 768 || 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (isMobile) {
      return; // Hiçbir şey yapma, donanıma bırak.
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Çok pürüzsüz bir eğri
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
