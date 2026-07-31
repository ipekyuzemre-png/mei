import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Sıkça Sorulan Sorular | MEI Yazılım",
  description: "Dijital ajans hizmetlerimiz hakkında sıkça sorulan sorular.",
};

export default function FAQ() {
  const faqs = [
    {
      question: "Hangi hizmetleri sunuyorsunuz?",
      answer: "Web tasarım, web yazılım, kullanıcı deneyimi (UI/UX) tasarımı, e-ticaret çözümleri, kurumsal kimlik, yerel SEO optimizasyonu ve satış sonrası teknik destek dahil olmak üzere kapsamlı dijital hizmetler sunuyoruz."
    },
    {
      question: "Ortalama bir projenin tamamlanma süresi nedir?",
      answer: "Proje süreleri, ihtiyaçların kapsamına ve karmaşıklığına göre değişir. Standart bir kurumsal web sitesi genellikle 4-6 hafta sürerken, daha karmaşık e-ticaret platformları veya özel yazılımlar 8-12 hafta sürebilir. İlk görüşmemizde size net bir takvim sunuyoruz."
    },
    {
      question: "Tasarım ve geliştirme süreciniz nasıl işliyor?",
      answer: "Sürecimiz dört temel aşamadan oluşur: Keşif (hedeflerinizi ve hedef kitlenizi anlama), Tasarım (kullanıcı arayüzü ve görsel konseptlerin oluşturulması), Geliştirme (temiz ve ölçeklenebilir kodlama) ve Lansman (test, yayına alma ve eğitim)."
    },
    {
      question: "Site yayınlandıktan sonra teknik destek sağlıyor musunuz?",
      answer: "Evet, web sitenizin her zaman güvenli, güncel ve hızlı çalışması için esnek bakım ve destek paketleri sunuyoruz. Bu paketler düzenli güncellemeleri, güvenlik izlemeyi ve performans optimizasyonlarını içerir."
    },
    {
      question: "Hangi teknolojileri kullanıyorsunuz?",
      answer: "Modern ve sektöre yön veren teknolojilerle (React, Next.js, Node.js vb.) çalışıyoruz. Hangi altyapının kullanılacağına tamamen projenizin ihtiyaçlarına ve büyüme hedeflerinize göre karar veriyoruz."
    },
    {
      question: "Web sitesi fiyatları ne kadar?",
      answer: "Her proje benzersizdir. Fiyatlandırma; sitenin özelliklerine, tasarım detaylarına ve teknik altyapısına göre belirlenir. İhtiyaçlarınızı dinlediğimiz ücretsiz bir keşif görüşmesinin ardından size şeffaf ve detaylı bir fiyat teklifi sunuyoruz."
    },
    {
      question: "Farklı şehirlerdeki müşterilerle çalışıyor musunuz?",
      answer: "Kesinlikle! Başta Diyarbakır, Gaziantep ve Mardin olmak üzere Türkiye'nin her yerindeki markalarla çalışıyoruz. Online toplantılar ve proje yönetim araçlarımız sayesinde iletişimimiz her zaman kesintisiz ve şeffaftır."
    },
    {
      question: "Mevcut web sitemi yenileyebilir misiniz?",
      answer: "Evet, web sitesi yenileme (redesign) uzmanlık alanlarımızdan biridir. Mevcut sitenizin performansını analiz eder, eksikliklerini belirler ve markanızı günümüzün modern dijital standartlarına taşıyan yepyeni bir altyapı kurarız."
    },
  ];

  return (
    <main className="min-h-screen bg-[#F4F3EE]">
      <div className="max-w-3xl mx-auto px-6 py-20 sm:py-28">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-black/50 hover:text-black transition-colors text-sm font-semibold uppercase tracking-widest mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Ana Sayfaya Dön
        </Link>

        <h1 className="font-[Plus_Jakarta_Sans] text-4xl sm:text-5xl font-bold text-black mb-4">
          Sıkça Sorulan Sorular
        </h1>
        <p className="text-black/50 text-base mb-12 leading-relaxed">
          Hizmetlerimiz, iş süreçlerimiz ve müşterilerimizle nasıl çalıştığımız hakkında en çok merak edilenleri burada derledik.
        </p>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="p-6 sm:p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-black/5 shadow-sm"
            >
              <h3 className="font-[Plus_Jakarta_Sans] text-lg font-bold text-black mb-3">
                {faq.question}
              </h3>
              <p className="text-black/60 leading-[1.8] text-[15px]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
