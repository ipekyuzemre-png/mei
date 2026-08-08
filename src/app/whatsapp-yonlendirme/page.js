"use client";

import { useEffect } from "react";

export default function WhatsAppRedirectPage() {
  // Kurumsal WhatsApp numaranızı buraya yazın (Örn: 905551234567 - başında '+' olmadan)
  const WHATSAPP_NUMBER = "905551234567";
  
  useEffect(() => {
    // Kullanıcının mesajı okuması için 2 saniye bekliyoruz
    const timer = setTimeout(() => {
      // Yönlendirme işlemi
      // Not: Google Ads "Form Başarı URL'si" dönüşüm takibi için 
      // mevcut sayfada (window.location.href) yönlendirmek en sağlıklı yöntemdir.
      window.location.href = `https://wa.me/${WHATSAPP_NUMBER}`;
      
      /* 
        Eğer yeni sekmede açmak ve mevcut sekmeyi ana sayfaya döndürmek isterseniz, 
        yukarıdaki kodu yorum satırı yapıp aşağıdaki kodları açabilirsiniz:
        
        window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
        window.location.href = '/'; 
      */
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 z-50">
      
      {/* Arka plan parlama efektleri (Sitenizin global tasarımına uyumlu glassmorphism arkası) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      {/* Ana Kart (Sitenizdeki globals.css içerisindeki glass-panel class'ını kullanıyoruz) */}
      <div className="max-w-md w-full glass-panel rounded-[2rem] p-8 md:p-12 text-center flex flex-col items-center justify-center shadow-2xl transition-all duration-700 ease-out transform translate-y-0 opacity-100">
        
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
    </div>
  );
}
