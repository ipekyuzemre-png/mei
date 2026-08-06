import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Rocket, Settings2, ShieldCheck, Zap } from "lucide-react";
import Container from "@/components/shared/Container";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// We can map string names to actual Lucide components
const IconMap = {
  Scale: () => <ShieldCheck className="size-6 text-emerald-600" />,
  Sparkles: () => <Zap className="size-6 text-pink-500" />,
  Coffee: () => <Rocket className="size-6 text-amber-600" />,
  Car: () => <Settings2 className="size-6 text-blue-600" />,
  Building2: () => <ShieldCheck className="size-6 text-indigo-600" />
};

export default function PseoTemplate({ data }) {
  const { location, profession, title, resolvedDescription, resolvedBenefits } = data;
  
  const IconComponent = IconMap[profession.icon] || (() => <Settings2 className="size-6 text-black" />);

  return (
    <div className="bg-[#F4F3EE] min-h-screen relative overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/hero_bg.webp" 
          alt="Background" 
          fill 
          priority 
          className="object-cover object-center opacity-30 mix-blend-luminosity" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F4F3EE]/40 via-transparent to-[#F4F3EE]" />
      </div>

      <Navbar />
      
      <main className="relative z-10 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <Container size="lg">
          
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-black/5 text-sm font-semibold text-black/60 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                {location.name} İçin Özel Çözüm
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-[1.1]">
                {title}
              </h1>
              
              <p className="text-lg md:text-xl text-black/60 max-w-xl leading-relaxed">
                {resolvedDescription}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href={`https://wa.me/905308321395?text=Merhaba, web sitenizden ${encodeURIComponent(location.name + " " + profession.name + " paketi için teklif almak istiyorum.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white bg-black rounded-full hover:bg-black/80 transition-colors"
                >
                  Teklif İsteyin <ArrowRight className="ml-2 size-4" />
                </Link>
              </div>
            </div>
            
            <div className="relative aspect-square lg:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-white/20">
              {/* Use the dynamically generated AI image for this profession */}
              <div className="absolute inset-0 bg-black/10 mix-blend-multiply z-10" />
              <Image 
                src={profession.image || "/hero_bg.webp"} 
                alt={`${location.prefix} ${profession.name}`}
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-20 flex flex-col justify-end p-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                  <div className="flex items-center gap-4 mb-2 text-white">
                    <IconComponent />
                    <h3 className="font-bold text-xl">{profession.automationTitle}</h3>
                  </div>
                  <p className="text-white/80 text-sm line-clamp-3">{profession.automationDesc}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features / Benefits */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Neden Bizi Seçmelisiniz?</h2>
              <p className="text-black/60">İşletmenizi dijitalde bir adım öne taşıyacak avantajlar.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resolvedBenefits.map((benefit, idx) => (
                <div key={idx} className="bg-white/40 backdrop-blur-sm border border-black/5 p-6 rounded-2xl flex items-start gap-4">
                  <CheckCircle2 className="size-6 text-emerald-600 shrink-0 mt-1" />
                  <p className="text-lg font-medium text-black/80">{benefit}</p>
                </div>
              ))}
              
              {/* Added Automation Title as a benefit */}
              <div className="bg-emerald-50/80 backdrop-blur-sm border border-emerald-200 p-6 rounded-2xl flex items-start gap-4">
                <CheckCircle2 className="size-6 text-emerald-600 shrink-0 mt-1" />
                <p className="text-lg font-medium text-black/80">
                  <span className="font-bold text-emerald-800">Otomasyon Teknolojisi: </span>
                  {profession.automationTitle}
                </p>
              </div>

              {/* Added Automation Description as a benefit */}
              <div className="bg-emerald-50/80 backdrop-blur-sm border border-emerald-200 p-6 rounded-2xl flex items-start gap-4">
                <CheckCircle2 className="size-6 text-emerald-600 shrink-0 mt-1" />
                <p className="text-lg font-medium text-black/80">
                  <span className="font-bold text-emerald-800">Zaman ve Maliyet Avantajı: </span>
                  {profession.automationDesc}
                </p>
              </div>
            </div>
          </div>

          {/* The Automation Highlight */}
          <div className="bg-black text-white rounded-[3rem] p-12 lg:p-24 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                  Sadece Web Sitesi Değil, <br />
                  <span className="text-white/50">İşinizi Hafifleten Otomasyon.</span>
                </h2>
                <p className="text-lg text-white/70 mb-8 leading-relaxed">
                  {profession.automationDesc}
                </p>
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 border border-white/20">
                  <IconComponent />
                  <span className="font-semibold">{profession.automationTitle}</span>
                </div>
              </div>
              <div className="relative min-h-[450px] md:min-h-0 md:aspect-video lg:aspect-square flex items-center justify-center py-16 md:py-0 px-2 sm:px-8 lg:px-0">
                 {/* Futuristic Glowing Orbs */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-emerald-500/20 via-transparent to-blue-500/20 blur-[100px] rounded-full pointer-events-none" />
                 
                 {/* Main Glassmorphic Dashboard Card */}
                 <div className="relative w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl transform transition-transform duration-700 hover:scale-105 md:hover:-rotate-1 z-10">
                    {/* Mac OS Style Window Controls */}
                    <div className="flex gap-2.5 mb-6 sm:mb-8">
                      <div className="w-3.5 h-3.5 rounded-full bg-red-400/90 shadow-[0_0_12px_rgba(248,113,113,0.6)]" />
                      <div className="w-3.5 h-3.5 rounded-full bg-amber-400/90 shadow-[0_0_12px_rgba(251,191,36,0.6)]" />
                      <div className="w-3.5 h-3.5 rounded-full bg-emerald-400/90 shadow-[0_0_12px_rgba(52,211,153,0.6)]" />
                    </div>

                    {/* Header Area */}
                    <div className="flex items-center gap-4 sm:gap-5 mb-8 sm:mb-10">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30 shrink-0">
                        <IconComponent className="text-white size-6 sm:size-7" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg sm:text-xl tracking-wide">Akıllı Sistem Devrede</h4>
                        <p className="text-white/60 text-xs sm:text-sm mt-1">İş Süreçleri Optimize Ediliyor...</p>
                      </div>
                    </div>

                    {/* Animated Progress Bars representing Automation */}
                    <div className="space-y-5 sm:space-y-6 mb-8 sm:mb-12">
                      <div className="space-y-2">
                        <div className="flex justify-between text-[10px] sm:text-xs text-white/50 font-medium uppercase tracking-wider">
                          <span>Veri İşleme (Müşteri)</span>
                          <span className="text-emerald-400">%100</span>
                        </div>
                        <div className="h-2 sm:h-2.5 w-full bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 w-full rounded-full relative">
                            <div className="absolute inset-0 bg-white/20 animate-pulse" />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-[10px] sm:text-xs text-white/50 font-medium uppercase tracking-wider">
                          <span>Zaman Tasarrufu</span>
                          <span className="text-blue-400">%92</span>
                        </div>
                        <div className="h-2 sm:h-2.5 w-full bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-blue-600 to-blue-400 w-[92%] rounded-full relative">
                            <div className="absolute inset-0 bg-white/20 animate-pulse" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-[10px] sm:text-xs text-white/50 font-medium uppercase tracking-wider">
                          <span>Hata Oranı (Risk)</span>
                          <span className="text-red-400">%0</span>
                        </div>
                        <div className="h-2 sm:h-2.5 w-full bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-white/10 w-full rounded-full" />
                        </div>
                      </div>
                    </div>

                    {/* Floating Success Badge - Adjusted for mobile */}
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 w-[90%] sm:w-auto sm:left-auto sm:translate-x-0 sm:-right-8 sm:-bottom-8 bg-[#1A1A1A]/95 backdrop-blur-xl border border-white/10 p-4 sm:p-5 rounded-2xl flex items-center gap-3 sm:gap-4 shadow-2xl animate-bounce" style={{ animationDuration: '4s' }}>
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="size-5 sm:size-6 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-white text-sm sm:text-base font-bold">Otomasyon Aktif</p>
                        <p className="text-emerald-400/80 text-[10px] sm:text-xs mt-0.5">Sistem Kusursuz Çalışıyor</p>
                      </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>

        </Container>
      </main>

      <Footer />
    </div>
  );
}
