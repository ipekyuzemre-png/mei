import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/shared/Container";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { seoLocations, seoProfessions } from "@/data/pseo";

export const metadata = {
  title: "Bölgesel ve Sektörel Çözümlerimiz | Rengin Yazılım",
  description: "Diyarbakır'ın tüm ilçeleri ve meslek grupları için hazırladığımız özel web tasarım ve otomasyon yazılımlarını inceleyin.",
};

export default function SektorelCozumlerList() {
  return (
    <div className="bg-[#F4F3EE] min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/hero_bg.webp" 
          alt="Background" 
          fill 
          priority 
          className="object-cover object-center opacity-40 mix-blend-luminosity" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F4F3EE] via-transparent to-[#F4F3EE]/50" />
      </div>

      <Navbar />
      
      <main className="relative z-10 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <Container size="xl">
          <header className="mb-16 text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6 leading-tight">
              Bölgesel ve Sektörel <br />
              <span className="text-black/60">Özel Çözümlerimiz</span>
            </h1>
            <p className="text-lg text-black/70">
              İşletmenizin bulunduğu bölgeye ve sektörünüzün ihtiyaçlarına %100 uyumlu web siteleri ve otomasyon araçları geliştiriyoruz. Sektörünüzü seçin ve çözümlerimizi inceleyin.
            </p>
          </header>

          {/* Grid of Professions */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {seoProfessions.map((profession) => (
              <div key={profession.id} className="group relative flex flex-col rounded-3xl bg-black/5 border border-black/10 overflow-hidden hover:bg-white/40 hover:shadow-lg hover:border-black/20 backdrop-blur-sm transition-all duration-300">
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={profession.image || "/hero_bg.webp"}
                    alt={profession.name}
                    fill
                    className="object-cover object-center opacity-80 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#F4F3EE] to-transparent opacity-80" />
                </div>
                
                <div className="flex flex-col flex-1 p-6 z-10 relative">
                  <div className="flex items-center gap-3 text-xs text-black/40 mb-4 font-semibold uppercase tracking-wider">
                    <span>{profession.name} Çözümleri</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-black mb-3 leading-tight group-hover:text-[#D97757] transition-colors">
                    {profession.automationTitle}
                  </h2>
                  
                  <p className="text-sm text-black/60 mb-6 flex-1">
                    {profession.titleSuffix} için özel geliştirilmiş otomasyon ve web altyapısı.
                  </p>
                  
                  <div className="mt-auto">
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-3">Hizmet Bölgelerini Seçin</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {seoLocations.map((location) => {
                        const slug = `diyarbakir-${location.id}-${profession.id}-web-sitesi-yapimi`;
                        return (
                          <Link 
                            key={location.id} 
                            href={`/cozumler/${slug}`}
                            className="text-[10px] font-semibold bg-white/60 px-2 py-1 rounded-md border border-black/5 hover:border-black/20 hover:bg-black hover:text-white transition-all text-black/60"
                          >
                            {location.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </Container>
      </main>

      <Footer />
    </div>
  );
}
