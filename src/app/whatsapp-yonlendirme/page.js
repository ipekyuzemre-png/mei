"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { siteConfig } from "@/config/site";

function RedirectContent() {
  const searchParams = useSearchParams();
  const text = searchParams.get("text");

  // Config dosyasından numarayı çekip sadece rakamları alıyoruz
  const rawNumber = siteConfig.contactInfo.phone.replace(/[^0-9]/g, "");
  // Eğer +90 varsa 90, 0530 ise vs.. replace sonrası temiz bir numara kalır. 
  const WHATSAPP_NUMBER = rawNumber;
  
  useEffect(() => {
    // Kullanıcının mesajı okuması için 2 saniye bekliyoruz
    const timer = setTimeout(() => {
      // Yönlendirme işlemi
      let waUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
      if (text) {
        waUrl += `?text=${encodeURIComponent(text)}`;
      }
      
      // Mevcut sekmede yönlendiriyoruz (Google Ads için ideal)
      window.location.href = waUrl;
    }, 2000);

    return () => clearTimeout(timer);
  }, [text, WHATSAPP_NUMBER]);

  return (
    <div className="max-w-md w-full glass-panel rounded-[2rem] p-8 md:p-12 text-center flex flex-col items-center justify-center shadow-2xl transition-all duration-700 ease-out transform translate-y-0 opacity-100 relative z-10 mx-4">
      
      {/* Onay İkonu */}
      <div className="flex items-center justify-center h-20 w-20 md:h-24 md:w-24 rounded-full bg-white/10 mb-8 backdrop-blur-md border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.15)]">
        <svg 
          className="h-10 w-10 md:h-12 md:w-12 text-white animate-bounce" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2.5" 
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
      </div>
      
      {/* Başlık */}
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight uppercase">
        Talebiniz Alındı!
      </h1>
      
      {/* Mesaj */}
      <p className="text-white/80 text-base md:text-lg mb-10 leading-relaxed font-medium">
        İlginiz için teşekkürler. Uzman ekibimiz en kısa sürede sizinle iletişime geçecektir.
      </p>

      {/* Yükleniyor animasyonu / Yönlendiriliyor mesajı */}
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="w-8 h-8 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
        <span className="text-xs md:text-sm text-white/60 font-bold tracking-[0.2em] uppercase">
          WhatsApp'a Yönlendiriliyorsunuz...
        </span>
      </div>
      
    </div>
  );
}

export default function WhatsAppRedirectPage() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#788C5D]">
      {/* Arka plan parlama efektleri */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-[100px] pointer-events-none"></div>

      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
        </div>
      }>
        <RedirectContent />
      </Suspense>
    </div>
  );
}
