import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Kullanım Koşulları | MEI Yazılım",
  description: "Hizmetlerimizin kullanımını düzenleyen şartlar ve koşullar.",
};

export default function TermsOfService() {
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
          Kullanım Koşulları
        </h1>
        <p className="text-black/50 text-sm mb-12">Son güncelleme: 1 Ağustos 2026</p>

        <div className="space-y-10 text-black/70 leading-[1.9] text-[15px]">
          <section>
            <h2 className="font-[Plus_Jakarta_Sans] text-xl font-bold text-black mb-4">1. Koşulların Kabulü</h2>
            <p>Web sitemize erişerek ve hizmetlerimizi kullanarak bu Kullanım Koşullarına bağlı kalmayı kabul etmiş olursunuz. Bu koşulları kabul etmiyorsanız lütfen hizmetlerimizi kullanmayın. Bu koşullar tüm ziyaretçiler, kullanıcılar ve ajansımızın müşterileri için geçerlidir.</p>
          </section>

          <section>
            <h2 className="font-[Plus_Jakarta_Sans] text-xl font-bold text-black mb-4">2. Hizmetlerimiz</h2>
            <p>Web tasarım, web yazılım, kullanıcı deneyimi (UI/UX) tasarımı, e-ticaret çözümleri ve kurumsal kimlik gibi (bunlarla sınırlı olmamak kaydıyla) dijital tasarım ve geliştirme hizmetleri sunuyoruz. Her projenin özel iş kapsamı ayrı bir proje sözleşmesi veya teklifinde belirtilir.</p>
          </section>

          <section>
            <h2 className="font-[Plus_Jakarta_Sans] text-xl font-bold text-black mb-4">3. Fikri Mülkiyet</h2>
            <p>Bu web sitesindeki metinler, grafikler, logolar, görseller ve yazılımlar dahil olmak üzere tüm içerik ajansımızın mülkiyetindedir ve fikri mülkiyet yasaları tarafından korunmaktadır. Ödemenin tamamlanmasının ardından müşteriler, proje sözleşmelerinde belirtildiği üzere teslim edilen ürünlerin mülkiyet haklarını alırlar.</p>
          </section>

          <section>
            <h2 className="font-[Plus_Jakarta_Sans] text-xl font-bold text-black mb-4">4. Müşteri Sorumlulukları</h2>
            <p>Müşteriler, proje gereksinimlerini doğru bir şekilde iletmekten, zamanında geri bildirimde bulunmaktan ve metin, görsel, marka materyalleri gibi gerekli içerikleri sağlamaktan sorumludur. Bu materyallerin sağlanmasındaki gecikmeler, proje takvimini ve teslim tarihlerini etkileyebilir.</p>
          </section>

          <section>
            <h2 className="font-[Plus_Jakarta_Sans] text-xl font-bold text-black mb-4">5. Ödeme Koşulları</h2>
            <p>Ödeme koşulları proje teklifinde veya sözleşmede belirtilecektir. Aksi belirtilmedikçe, çalışmaya başlamadan önce bir ön ödeme talep edilir. Kalan bakiye, proje tamamlandığında ve kaynak dosyalar teslim edilmeden önce ödenmelidir.</p>
          </section>

          <section>
            <h2 className="font-[Plus_Jakarta_Sans] text-xl font-bold text-black mb-4">6. Sorumluluğun Sınırlandırılması</h2>
            <p>Ajansımız, hizmetlerimizin veya web sitemizin kullanımından doğabilecek dolaylı, arızi, özel veya sonuç olarak ortaya çıkan zararlardan sorumlu tutulamaz. Toplam yükümlülüğümüz, müşterinin söz konusu hizmet için ödediği tutarı aşamaz.</p>
          </section>

          <section>
            <h2 className="font-[Plus_Jakarta_Sans] text-xl font-bold text-black mb-4">7. Fesih</h2>
            <p>Taraflardan herhangi biri, proje sözleşmesini yazılı bir bildirimle feshedebilir. Fesih durumunda müşteri, fesih tarihine kadar tamamlanmış tüm çalışmaların bedelini ödemekle yükümlüdür. Tam ödeme alınana kadar tüm çalışmaları elimizde tutma hakkını saklı tutarız.</p>
          </section>

          <section>
            <h2 className="font-[Plus_Jakarta_Sans] text-xl font-bold text-black mb-4">8. Koşullardaki Değişiklikler</h2>
            <p>Bu Kullanım Koşullarını dilediğimiz zaman değiştirme hakkını saklı tutarız. Değişiklikler bu sayfada yayınlandığı anda yürürlüğe girer. Hizmetlerimizi kullanmaya devam etmeniz, değiştirilmiş koşulları kabul ettiğiniz anlamına gelir.</p>
          </section>
        </div>
      </div>

    </main>
  );
}
