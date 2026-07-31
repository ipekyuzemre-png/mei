import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Gizlilik Politikası | MEI Yazılım",
  description: "Gizliliğinizi ve kişisel verilerinizi koruma taahhüdümüz.",
};

export default function PrivacyPolicy() {
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
          Gizlilik Politikası
        </h1>
        <p className="text-black/50 text-sm mb-12">Son güncelleme: 1 Ağustos 2026</p>

        <div className="space-y-10 text-black/70 leading-[1.9] text-[15px]">
          <section>
            <h2 className="font-[Plus_Jakarta_Sans] text-xl font-bold text-black mb-4">1. Topladığımız Bilgiler</h2>
            <p>Bizimle doğrudan paylaştığınız bilgileri (örneğin iletişim formu doldurduğunuzda, fiyat teklifi istediğinizde veya bizimle e-posta yoluyla iletişime geçtiğinizde) topluyoruz. Bu bilgiler arasında adınız, e-posta adresiniz, telefon numaranız, şirket adınız ve proje detaylarınız bulunabilir.</p>
          </section>

          <section>
            <h2 className="font-[Plus_Jakarta_Sans] text-xl font-bold text-black mb-4">2. Bilgilerinizi Nasıl Kullanıyoruz</h2>
            <p>Topladığımız bilgileri; sorularınıza yanıt vermek, hizmetlerimizi sunmak, proje güncellemeleri göndermek, web sitemizi ve hizmetlerimizi geliştirmek ve yasal yükümlülüklere uymak amacıyla kullanırız. Kişisel bilgilerinizi asla üçüncü şahıslara satmaz, kiralama veya takas yoluyla devretmeyiz.</p>
          </section>

          <section>
            <h2 className="font-[Plus_Jakarta_Sans] text-xl font-bold text-black mb-4">3. Çerezler (Cookies) ve İzleme</h2>
            <p>Web sitemiz, tarama deneyiminizi geliştirmek için çerezler ve benzer izleme teknolojileri kullanabilir. Çerezler, cihazınızda saklanan küçük veri dosyalarıdır. Çerez tercihlerinizi tarayıcı ayarlarınızdan kontrol edebilirsiniz. Analitik çerezlerini, ziyaretçilerin web sitemizle nasıl etkileşime girdiğini anlamak ve içeriklerimizi geliştirmek için kullanıyoruz.</p>
          </section>

          <section>
            <h2 className="font-[Plus_Jakarta_Sans] text-xl font-bold text-black mb-4">4. Veri Güvenliği</h2>
            <p>Kişisel verilerinizi yetkisiz erişime, değiştirilmeye, ifşa edilmeye veya yok edilmeye karşı korumak için uygun teknik ve idari güvenlik önlemlerini alıyoruz. Ancak, internet üzerinden yapılan hiçbir veri aktarımı veya elektronik depolama yöntemi %100 güvenli değildir.</p>
          </section>

          <section>
            <h2 className="font-[Plus_Jakarta_Sans] text-xl font-bold text-black mb-4">5. Üçüncü Taraf Hizmetleri</h2>
            <p>Web sitemiz, üçüncü taraf web sitelerine veya hizmetlerine bağlantılar içerebilir. Bu harici sitelerin gizlilik uygulamalarından sorumlu değiliz. Ziyaret ettiğiniz üçüncü taraf hizmetlerinin gizlilik politikalarını incelemenizi öneririz.</p>
          </section>

          <section>
            <h2 className="font-[Plus_Jakarta_Sans] text-xl font-bold text-black mb-4">6. Haklarınız</h2>
            <p>Kişisel verilerinize erişme, düzeltme veya silme hakkına sahipsiniz. Ayrıca, belirli işleme faaliyetlerine itiraz edebilir veya bunları kısıtlayabilirsiniz. Bu haklarınızı kullanmak için lütfen iletişim sayfamızdaki bilgileri kullanarak bizimle iletişime geçin.</p>
          </section>

          <section>
            <h2 className="font-[Plus_Jakarta_Sans] text-xl font-bold text-black mb-4">7. Politikadaki Değişiklikler</h2>
            <p>Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Herhangi bir değişiklik, güncellenmiş revizyon tarihiyle birlikte bu sayfada yayınlanacaktır. Bu politikayı düzenli olarak gözden geçirmenizi öneririz.</p>
          </section>

          <section>
            <h2 className="font-[Plus_Jakarta_Sans] text-xl font-bold text-black mb-4">8. Bize Ulaşın</h2>
            <p>Bu Gizlilik Politikası veya veri uygulamalarımız hakkında herhangi bir sorunuz varsa, lütfen web sitemizdeki iletişim formu aracılığıyla veya ana sayfamızda belirtilen e-posta adresinden bizimle iletişime geçin.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
