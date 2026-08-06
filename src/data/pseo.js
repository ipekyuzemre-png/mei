export const seoLocations = [
  { id: "kayapinar", name: "Kayapınar", prefix: "Diyarbakır Kayapınar" },
  { id: "sur", name: "Sur", prefix: "Diyarbakır Sur" },
  { id: "diclekent", name: "Diclekent", prefix: "Diclekent" }, // Semt ama popüler
  { id: "bismil", name: "Bismil", prefix: "Diyarbakır Bismil" },
  { id: "yenisehir", name: "Yenişehir", prefix: "Diyarbakır Yenişehir" },
  { id: "baglar", name: "Bağlar", prefix: "Diyarbakır Bağlar" },
  { id: "ergani", name: "Ergani", prefix: "Diyarbakır Ergani" },
  { id: "silvan", name: "Silvan", prefix: "Diyarbakır Silvan" },
  { id: "cinar", name: "Çınar", prefix: "Diyarbakır Çınar" },
  { id: "hani", name: "Hani", prefix: "Diyarbakır Hani" },
  { id: "lice", name: "Lice", prefix: "Diyarbakır Lice" },
  { id: "egil", name: "Eğil", prefix: "Diyarbakır Eğil" },
  { id: "kulp", name: "Kulp", prefix: "Diyarbakır Kulp" },
  { id: "cermik", name: "Çermik", prefix: "Diyarbakır Çermik" },
  { id: "dicle", name: "Dicle", prefix: "Diyarbakır Dicle" },
  { id: "cungus", name: "Çüngüş", prefix: "Diyarbakır Çüngüş" },
  { id: "hazro", name: "Hazro", prefix: "Diyarbakır Hazro" },
  { id: "kocakoy", name: "Kocaköy", prefix: "Diyarbakır Kocaköy" }
];

export const seoProfessions = [
  {
    id: "avukat",
    name: "Avukat",
    titleSuffix: "Hukuk Büroları İçin Web Sitesi ve Otomasyon",
    description: "{location} bölgesindeki hukuk büronuz için özel tasarlanmış web sitesi ve dava/dilekçe yönetim otomasyonu ile müvekkillerinize profesyonel hizmet sunun.",
    benefits: [
      "Kurumsal ve güven veren modern web tasarımı",
      "Müvekkilleriniz için online randevu modülü",
      "Dilekçe ve ihtarname oluşturma otomasyonu",
      "Yerel SEO ile {location} aramalarında üst sıralar"
    ],
    automationTitle: "Dilekçe ve İhtarname Otomasyonu",
    automationDesc: "Standart evrak işleriyle vakit kaybetmeyin. Özel geliştirdiğimiz modül sayesinde müvekkilleriniz veya asistanlarınız şablonları kullanarak 10 saniyede PDF dilekçeler üretebilir.",
    icon: "Scale",
    image: "/demos/avukat.webp"
  },
  {
    id: "guzellik-merkezi",
    name: "Güzellik Merkezi",
    titleSuffix: "Güzellik Merkezleri İçin Web Sitesi ve Randevu Sistemi",
    description: "{location} bölgesindeki güzellik merkeziniz için estetik web tasarımı ve 7/24 online randevu otomasyonu. Instagram DM'lerinden kurtulun, profesyonelleşin.",
    benefits: [
      "Estetik ve mobil uyumlu modern arayüz",
      "Müşteriler için online randevu ve saat seçimi",
      "Lazer, cilt bakımı gibi paket/seans yönetim modülü",
      "Otomatik SMS randevu hatırlatıcı entegrasyonu"
    ],
    automationTitle: "Akıllı Randevu ve Paket Yönetim Sistemi",
    automationDesc: "Müşterileriniz boş saatleri görsün, istediği hizmeti seçsin ve anında randevu alsın. Siz sadece onaylayın, sistem müşteriye SMS ile otomatik hatırlatma yapsın.",
    icon: "Sparkles",
    image: "/demos/guzellik-merkezi.webp"
  },
  {
    id: "cafe-restoran",
    name: "Cafe & Restoran",
    titleSuffix: "Cafe ve Restoranlar İçin Web Tasarım ve QR Menü",
    description: "{location} bölgesinin en popüler mekanı siz olun. Dinamik web siteniz ve masaya özel QR menü/sipariş entegrasyonunuz ile müşteri deneyimini zirveye taşıyın.",
    benefits: [
      "Mekanın atmosferini yansıtan iştah açıcı tasarım",
      "Fiyatların anında güncellenebildiği Dijital QR Menü",
      "Masa bazlı online sipariş ve ödeme altyapısı",
      "Google Haritalar ve yerel SEO optimizasyonu"
    ],
    automationTitle: "Dinamik QR Menü ve Paket Sipariş Ağı",
    automationDesc: "Matbaaya para ödemeyi bırakın. Fiyatlarınızı tek tıkla güncelleyin, ürünlerinize video/fotoğraf ekleyin ve dilerseniz müşterilerinizin masadan kendi telefonlarıyla sipariş vermesini sağlayın.",
    icon: "Coffee",
    image: "/demos/cafe-restoran.webp"
  },
  {
    id: "oto-yikama",
    name: "Oto Yıkama",
    titleSuffix: "Oto Yıkama ve Detaylı Temizlik İçin Yazılım",
    description: "{location} bölgesinde aracına değer veren müşterileri yakalayın. Araç segmentine göre otomatik fiyatlama ve randevu sistemiyle kârınızı artırın.",
    benefits: [
      "Hizmetleri ve paketleri sergileyen hızlı web sitesi",
      "Araç tipi (Sedan, SUV) bazlı dinamik fiyatlama",
      "Plaka kaydı ve müşteri takip otomasyonu",
      "Araç hazır olduğunda otomatik SMS bildirimi"
    ],
    automationTitle: "Araç Segmentli Randevu ve Takip Modülü",
    automationDesc: "Müşteri web sitenize girer, aracının modelini seçer ve fiyatı otomatik görür. Yıkama bittiğinde tek tuşla müşterinizin telefonuna 'Aracınız teslimata hazırdır' mesajı gitsin.",
    icon: "Car",
    image: "/demos/oto-yikama.webp"
  },
  {
    id: "emlak",
    name: "Emlak",
    titleSuffix: "Emlak Ofisleri İçin Web Sitesi ve İlan Sistemi",
    description: "{location} bölgesindeki emlak portföyünüzü en iyi şekilde sergileyin. Sahibinden'e bağımlı kalmadan kendi otoritenizi kurun.",
    benefits: [
      "Gelişmiş filtreleme ve harita entegrasyonu",
      "Sınırsız ilan ve portföy ekleme kapasitesi",
      "Danışman profilleri ve performans takibi",
      "WhatsApp üzerinden hızlı teklif/iletişim"
    ],
    automationTitle: "Akıllı İlan ve Harita Yönetim Paneli",
    automationDesc: "İlanlarınızı kolayca ekleyin, konumlarını haritada işaretleyin ve 360 derece sanal tur linklerinizi entegre edin. Müşterileriniz aradıkları evi filtreleyerek anında bulsun.",
    icon: "Building2",
    image: "/demos/emlak.webp"
  },
  {
    id: "dis-hekimi",
    name: "Diş Hekimi",
    titleSuffix: "Diş Klinikleri İçin Web Sitesi ve Hasta Takip",
    description: "{location} bölgesinde gülüş tasarımı, implant ve diş tedavisi arayan hastaların ilk tercihi olun. Kliniğinize prestij katacak dijital çözümler.",
    benefits: [
      "Klinik güvenilirliğini artıran temiz ve profesyonel tasarım",
      "Tedavi öncesi/sonrası (Before/After) galeri modülü",
      "KVKK uyumlu hasta ön kayıt ve randevu formu",
      "Yerel aramalarda (implant, zirkonyum) SEO optimizasyonu"
    ],
    automationTitle: "Online Hasta Randevu ve Hatırlatma Sistemi",
    automationDesc: "Asistanınızın telefon trafiğini yarı yarıya düşürün. Hastalarınız web sitenizden müsait saatleri seçip randevu alsın, sistem randevudan 1 gün önce WhatsApp'tan otomatik hatırlatma mesajı atsın.",
    icon: "Sparkles", // We can reuse Sparkles or add a new icon in PseoTemplate
    image: "/demos/dis-hekimi.webp"
  },
  {
    id: "diyetisyen",
    name: "Diyetisyen",
    titleSuffix: "Diyetisyenler İçin Web Sitesi ve Danışan Paneli",
    description: "{location} bölgesinde sağlıklı yaşam arayan danışanlarınıza dijital ortamda da koçluk yapın. Kendi markanızı güvenle büyütün.",
    benefits: [
      "Kişisel markanızı öne çıkaran zarif ve mobil uyumlu tasarım",
      "Online danışmanlık paketleri satışı ve kredi kartı entegrasyonu",
      "Danışan yorumları ve başarı hikayeleri bölümü",
      "Blog içerikleri ile SEO'da otorite olma imkanı"
    ],
    automationTitle: "Danışan Takip Paneli ve Dijital Liste",
    automationDesc: "WhatsApp'tan PDF veya fotoğraf atmaya son. Sitenize kuracağımız portal ile danışanlarınız kendi şifreleriyle girip haftalık diyet listelerini, boy/kilo grafiklerini ve su tüketimlerini telefonlarından takip etsinler.",
    icon: "Scale", // We can reuse Scale
    image: "/demos/diyetisyen.webp"
  },
  {
    id: "rent-a-car",
    name: "Rent A Car",
    titleSuffix: "Araç Kiralama Firmaları İçin Rezervasyon Yazılımı",
    description: "{location} bölgesinde araç kiralamak isteyen müşterilere komisyon ödemeden, doğrudan kendi siteniz üzerinden ulaşın.",
    benefits: [
      "Araç filosunu sergileyen dinamik vitrin tasarımı",
      "Lokasyon bazlı teslimat ve iade seçenekleri",
      "Kredi kartı ile kaparo veya tam ödeme altyapısı",
      "Araç özelliklerine göre detaylı filtreleme"
    ],
    automationTitle: "Dinamik Araç Müsaitlik ve Rezervasyon Modülü",
    automationDesc: "Müşterileriniz alış ve iade tarihlerini seçtiğinde sadece o tarihlerde 'boşta' olan araçlar listelensin. Araç kiralandığı an takvimden düşsün, çifte rezervasyon (overbooking) riskini sıfıra indirin.",
    icon: "Car",
    image: "/demos/rent-a-car.webp"
  },
  {
    id: "dugun-salonu",
    name: "Düğün Salonu",
    titleSuffix: "Düğün Salonları İçin Web Sitesi ve Takvim Yönetimi",
    description: "{location} bölgesinde evlenecek çiftlere salonunuzun ihtişamını dijitalde yaşatın. Randevu ve takvim karmaşasına son verin.",
    benefits: [
      "Salonun 360 derece fotoğraflarını ve videolarını sergileme",
      "Paket içeriklerini (yemekli, yemeksiz) net sunan menüler",
      "Gelin ve damat adayları için online teklif alma formu",
      "Referanslar ve geçmiş organizasyon galerisi"
    ],
    automationTitle: "Canlı Müsaitlik Takvimi ve Kaparo Takibi",
    automationDesc: "Çiftler sitenize girip 'Eylül ayındaki boş hafta sonlarını' anında görsün. Boş bir tarih için ön rezervasyon yapıp kaparoyu online ödesinler. Sizin takviminiz de otomatik olarak 'Dolu' olarak güncellensin.",
    icon: "Building2",
    image: "/demos/dugun-salonu.webp"
  },
  {
    id: "hali-yikama",
    name: "Halı Yıkama",
    titleSuffix: "Halı Yıkama Firmaları İçin Sipariş ve Takip Sistemi",
    description: "{location} bölgesindeki halı yıkama operasyonunuzu dijitalleştirin. Müşterileriniz halısının nerede olduğunu anlık görsün, güven kazanın.",
    benefits: [
      "Metrekare ve halı türüne (Makine, Yün vb.) göre dinamik fiyatlama",
      "Müşteri adres bilgisi ve konum entegrasyonu",
      "Sipariş durumu (Alındı, Yıkanıyor, Teslimatta) SMS bildirimleri",
      "Müşteri veri tabanı ve sadakat yönetimi"
    ],
    automationTitle: "m² Hesaplamalı Online Sipariş ve Rota Modülü",
    automationDesc: "Müşteri sitenize girer, 3 adet yün, 2 adet makine halısı seçer ve anında toplam tutarı görür. Siparişi onayladığında adres bilgisi direkt sizin şoförünüzün teslimat rotası (Harita) ekranına düşer.",
    icon: "Sparkles", // Lucide doesn't have a carpet, Sparkles fits cleaning
    image: "/demos/hali-yikama.webp"
  },
  {
    id: "nakliyat",
    name: "Evden Eve Nakliyat",
    titleSuffix: "Nakliye Firmaları İçin Web Sitesi ve Teklif Botu",
    description: "{location} içi ve şehirler arası taşımacılıkta rakiplerinizden sıyrılın. Kurumsal kimliğiniz ve anında teklif veren sisteminizle işleri bağlayın.",
    benefits: [
      "Asansörlü, sigortalı taşıma hizmetlerini anlatan profesyonel arayüz",
      "Oda sayısı ve mesafe bazlı otomatik fiyat algoritması",
      "Müşteri yorumları ve başarılı taşıma referansları",
      "WhatsApp üzerinden konum ve resim alma entegrasyonu"
    ],
    automationTitle: "Yapay Zeka Destekli Hacim ve Fiyat Teklif Botu",
    automationDesc: "Telefonla yarım saat eşya listesi dinlemeye son. Müşteri sitenizdeki forma '3+1 ev', '4. kat asansörlü', '{location} kalkışlı' bilgilerini girer; sistem otomatik bir fiyat aralığı çıkarıp müşterinin SMS'ine teklif olarak atar.",
    icon: "Rocket", // Truck icon alternative
    image: "/demos/nakliyat.webp"
  },
  {
    id: "tesisatci",
    name: "Tesisat & Elektrik",
    titleSuffix: "Acil Servis ve Tesisatçılar İçin Mobil Uyumlu Site",
    description: "{location} bölgesinde su patlağı veya elektrik arızası arayan müşterilerin karşısına ilk siz çıkın. 'Acil Usta Çağır' butonuyla işleri kapın.",
    benefits: [
      "Mobil odaklı, saniyede açılan ultra hızlı web sitesi",
      "Tek tıkla 'Acil Ara' ve 'WhatsApp'tan Konum At' özellikleri",
      "Hizmet bölgeleri ve servis ücretleri tablosu",
      "Lokal SEO ile 'yakınımdaki tesisatçı' aramalarında dominasyon"
    ],
    automationTitle: "Konum Bazlı Acil Servis Talep Sistemi",
    automationDesc: "Müşteri panik anında sitenize girer, tek tuşla WhatsApp üzerinden anlık konumunu ve arızanın fotoğrafını gönderir. Sistem, adresi algılayıp en yakındaki usta ekibinize otomatik iş emri açar.",
    icon: "Settings2", // Wrench/Tool alternative
    image: "/demos/tesisatci.webp"
  },
  {
    id: "veteriner",
    name: "Veteriner Kliniği",
    titleSuffix: "Veterinerler İçin Dijital Karne ve Randevu Sistemi",
    description: "{location} bölgesindeki evcil hayvan sahiplerinin güven duyacağı, profesyonel klinik arayüzü ve modern hasta takip sistemi.",
    benefits: [
      "Kliniğinizi ve hekimlerinizi tanıtan sıcak, güven veren tasarım",
      "Aşı takvimi ve parazit uygulamaları bilgi bankası",
      "Acil durum nöbetçi veteriner bildirim çubuğu",
      "Pet kuaför ve klinik muayene için ayrı randevu modülleri"
    ],
    automationTitle: "Aşı Hatırlatıcı ve Dijital Pet Karne Modülü",
    automationDesc: "Müşterileriniz sitenize şifreleriyle girerek patili dostlarının aşı geçmişini görebilir. Kuduz veya karma aşı vakti geldiğinde, sistem hastaya 'Boncuk'un aşı vakti geldi' şeklinde otomatik WhatsApp mesajı atar.",
    icon: "ShieldCheck", // Shield/Cross alternative
    image: "/demos/veteriner.webp"
  },
  {
    id: "spor-salonu",
    name: "Spor Salonu & Fitness",
    titleSuffix: "Spor Salonları İçin Web Sitesi ve Üyelik Paneli",
    description: "{location} bölgesinin en trend spor salonu olun. Üyelik satışlarınızı web üzerinden yapın, kapıdaki yığılmayı önleyin.",
    benefits: [
      "Salonun ekipmanlarını ve atmosferini gösteren dinamik arayüz",
      "Online üyelik satın alma (Kredi kartı/Taksit entegrasyonu)",
      "Özel ders (PT) eğitmen profilleri ve randevu alma",
      "Grup dersleri (Spinning, Pilates) için haftalık program tablosu"
    ],
    automationTitle: "Online Üyelik ve QR Kod Geçiş Entegrasyonu",
    automationDesc: "Yeni üyeler web sitenizden 6 aylık paket satın alır, sözleşmeyi dijital imzalar. Sistem anında telefona bir QR kod gönderir. Üye, salonun turnikesinden bu QR kod ile (personele ihtiyaç duymadan) geçiş yapar.",
    icon: "Zap", // Activity/Energy
    image: "/demos/spor-salonu.webp"
  },
  {
    id: "mimar",
    name: "Mimarlık & İç Mimarlık",
    titleSuffix: "Mimarlar İçin Portfolyo ve Proje Takip Yazılımı",
    description: "{location} bölgesindeki prestijli projelerinizi sergileyin. Müşterilerinize sadece çizim değil, dijital bir deneyim sunun.",
    benefits: [
      "Tam ekran, yüksek çözünürlüklü lüks portfolyo tasarımı",
      "3D render ve VR (Sanal Gerçeklik) tur linkleri entegrasyonu",
      "Hizmet kalemleri (Anahtar teslim, danışmanlık) detay sayfaları",
      "Online ücretsiz keşif talebi formu"
    ],
    automationTitle: "Müşteri Proje İlerleme ve Onay Paneli",
    automationDesc: "Devam eden projelerde 'Şu an ne aşamadayız?' telefonlarından kurtulun. Müşterinize bir şifre verin; siteye girip projesinin % kaçının bittiğini, güncel şantiye fotoğraflarını görsün ve malzeme seçimlerini sistemden onaylasın.",
    icon: "Building2",
    image: "/demos/mimar.webp"
  },
  {
    id: "psikolog",
    name: "Psikolog & Terapist",
    titleSuffix: "Psikologlar İçin Gizlilik Odaklı Web Sitesi",
    description: "{location} bölgesinde terapi arayan danışanlarınıza, güven ve gizlilik veren huzurlu bir dijital ortam sunun.",
    benefits: [
      "Klinik psikoloji etik kurallarına ve KVKK'ya tam uyumlu altyapı",
      "Soft, huzur veren ve uzmanlığınızı vurgulayan UI/UX tasarımı",
      "Blog modülü (Kaygı, Depresyon yazıları ile organik SEO)",
      "Online terapi (Zoom/Google Meet) link entegrasyonu"
    ],
    automationTitle: "Gizli Kodlu Randevu ve Tele-Terapi Sistemi",
    automationDesc: "Danışanlar isim vermeden 'Rumuz' ile online randevu alıp ödeme yapabilir. Randevu saati yaklaştığında sistem otomatik olarak tek kullanımlık güvenli video görüşme (Tele-terapi) linkini SMS olarak iletir.",
    icon: "ShieldCheck",
    image: "/demos/psikolog.webp"
  },
  {
    id: "mali-musavir",
    name: "Mali Müşavir & Muhasebe",
    titleSuffix: "Mali Müşavirler İçin B2B Portal ve Web Sitesi",
    description: "{location} bölgesindeki işletmelerin finansal çözüm ortağı olun. Mükelleflerinizle evrak alışverişini dijitalleştirin.",
    benefits: [
      "Kurumsal, güvenilir ve mevzuata hakim kimlik tasarımı",
      "Güncel vergi takvimi, SGK oranları ve mevzuat sirküleri alanı",
      "Şirket kuruluşu, teşvikler gibi hizmetlerin SEO uyumlu detayları",
      "Yeni mükellefler için online teklif/iletişim formu"
    ],
    automationTitle: "Mükellef Evrak Yönetim ve Bildirim Portalı (B2B)",
    automationDesc: "Mükellefleriniz her ay faturayı kargolamak yerine web sitenizdeki panele giriş yapıp PDF'leri yükler. Vergi/KDV ödeme günü geldiğinde sistem tüm mükelleflerinize otomatik 'Ödeme Hatırlatma' SMS'i atar. İş yükünüz %80 azalır.",
    icon: "Scale",
    image: "/demos/mali-musavir.webp"
  },
  {
    id: "kurs",
    name: "Kurs & Eğitim Merkezi",
    titleSuffix: "Kurslar İçin Web Sitesi ve Öğrenci Bilgi Sistemi",
    description: "{location} bölgesindeki en iyi eğitim kurumu imajını çizin. Veli ve öğrencilere kurumsal bir dijital altyapı sunun.",
    benefits: [
      "Eğitim kadrosunu ve başarı tablolarını sergileyen dinamik yapı",
      "Online deneme sınavı başvuru ve sonuç sorgulama",
      "Branşlara (LGS, YKS, Dil) özel SEO uyumlu program sayfaları",
      "Erken kayıt indirimleri için geri sayım (Countdown) modülü"
    ],
    automationTitle: "Öğrenci/Veli Bilgi ve Yoklama Otomasyonu",
    automationDesc: "Öğretmenler derste tabletten yoklama aldığında, derse girmeyen öğrencinin velisine web sitenizin altyapısı üzerinden anında 'Öğrencimiz derse katılmamıştır' SMS'i gider. Deneme netleri panele girildiğinde veli grafikleri inceler.",
    icon: "Rocket",
    image: "/demos/kurs.webp"
  },
  {
    id: "anaokulu",
    name: "Anaokulu & Kreş",
    titleSuffix: "Anaokulları İçin Web Sitesi ve Veli İletişim Paneli",
    description: "{location} bölgesindeki velilerin en çok önem verdiği şey 'Güven'dir. Şeffaf ve profesyonel sitenizle kayıtları artırın.",
    benefits: [
      "Çocukların dünyasını yansıtan neşeli ama kurumsal tasarım",
      "Aylık yemek menüsü ve etkinlik takvimi panosu",
      "Okulun fiziksel imkanlarını gösteren sanal tur ve galeri",
      "Yeni dönem kayıtları için online bilgi talep formu"
    ],
    automationTitle: "Günlük Veli Bilgilendirme Raporu Modülü",
    automationDesc: "Öğretmenler gün sonunda sistemden 'Yemeğini yedi, 2 saat uyudu, etkinlikte resim yaptı' şıklarını işaretler. Bu rapor, velilerin web sitesindeki özel panellerine veya doğrudan WhatsApp'larına günlük bülten olarak düşer.",
    icon: "Sparkles",
    image: "/demos/anaokulu.webp"
  },
  {
    id: "temizlik",
    name: "Temizlik Şirketi",
    titleSuffix: "Temizlik Şirketleri İçin Dinamik Fiyatlı Web Sitesi",
    description: "{location} bölgesinde ofis ve ev temizliği hizmetlerinizi profesyonelce sunun. Fiyat sorma trafiğini otomatikleştirin.",
    benefits: [
      "Hizmetleri (İnşaat sonrası, ofis, dış cephe) net anlatan sayfalar",
      "Kullanılan çevre dostu kimyasalları anlatan güven sekmesi",
      "Öncesi/Sonrası (Before/After) referans kaydırıcısı (Slider)",
      "Kurumsal şirketler için B2B temizlik ihaleleri iletişim formu"
    ],
    automationTitle: "m² ve Oda Bazlı Dinamik Fiyat/Randevu Motoru",
    automationDesc: "Müşteri '3+1 Ev', 'İnşaat Sonrası', 'Camlar Dahil' seçeneklerini işaretlediğinde algoritma anında bir fiyat çıkarır ve sepete atar. Ödeme yapıldığında temizlik personelinize iş emri ve konum SMS ile iletilir.",
    icon: "Sparkles",
    image: "/demos/temizlik.webp"
  },
  {
    id: "oto-tamir",
    name: "Oto Servis & Tamir",
    titleSuffix: "Oto Sanayi ve Servisler İçin Randevu Yazılımı",
    description: "{location} bölgesindeki araç sahiplerinin güvenle tercih edeceği, profesyonel ve şeffaf dijital oto servis platformu.",
    benefits: [
      "Periyodik bakım, kaporta, boya gibi hizmetlerin detaylı sunumu",
      "Araç marka ve modeline göre filtrelemeli servis seçenekleri",
      "Müşteri yorumları ve güven veren servis galerisi",
      "Yol yardım veya acil çekici çağrı butonu"
    ],
    automationTitle: "Araç Durum Takip ve Bakım Hatırlatma Paneli",
    automationDesc: "Müşteri aracını bıraktığında sistemden 'Aracınız liftte', 'Parça bekleniyor', 'Hazır' durumlarını canlı görür. Bakım üzerinden 1 yıl geçtiğinde sistem müşteriye 'Yıllık bakım vaktiniz geldi' diye otomatik SMS atar.",
    icon: "Settings2",
    image: "/demos/oto-tamir.webp"
  },
  {
    id: "cicekci",
    name: "Çiçekçi & Organizasyon",
    titleSuffix: "Çiçekçiler İçin Online Sipariş ve Teslimat Sistemi",
    description: "{location} bölgesinde en özel anların mimarı olun. Yemeksepeti veya Çiçeksepeti komisyonlarından kurtulup kendi markanızı büyütün.",
    benefits: [
      "Aranjmanları ön plana çıkaran büyük ve estetik fotoğraf galerisi",
      "Kredi kartı ile güvenli ve hızlı online ödeme altyapısı",
      "Teslimat bölgesi (İlçe/Mahalle) bazlı kargo ücreti belirleme",
      "Özel not ekleme ve hediye kartı modülü"
    ],
    automationTitle: "Saatli Teslimat ve Kurye Takip Otomasyonu",
    automationDesc: "Müşteri 'Bugün 13:00 - 15:00 arası teslim edilsin' seçeneğiyle sipariş verir. Sipariş kuryenizin paneline düşer, çiçek teslim edildiği an göndericiye 'Siparişiniz başarıyla ulaştı' SMS'i otomatik gider.",
    icon: "Sparkles",
    image: "/demos/cicekci.webp"
  },
  {
    id: "kuyumcu",
    name: "Kuyumcu & Mücevherat",
    titleSuffix: "Kuyumcular İçin Canlı Kurlu Dijital Vitrin",
    description: "{location} bölgesindeki müşterilerinize mağazanıza gelmeden önce pırlanta ve altın koleksiyonlarınızı lüks bir deneyimle sunun.",
    benefits: [
      "Mücevherlerin ışıltısını yansıtan dark-mode (koyu) lüks tasarım",
      "Altın, pırlanta, saat kategorilerine ayrılmış sanal vitrin",
      "VIP müşteriler için özel koleksiyon görüntüleme",
      "Mağaza içi randevu (Özel tasarım yüzük vs. için) formu"
    ],
    automationTitle: "Canlı Döviz/Altın Kuru ve Fiyat Güncelleme Botu",
    automationDesc: "Gram altın fiyatı değiştiğinde web sitenizdeki fiyatları tek tek elle değiştirmezsiniz. Sistem canlı kurları Merkez Bankası veya serbest piyasadan çeker, vitrindeki tüm ürünlerin fiyatı anlık olarak otomatik güncellenir.",
    icon: "Building2",
    image: "/demos/kuyumcu.webp"
  },
  {
    id: "poliklinik",
    name: "Tıp Merkezi & Poliklinik",
    titleSuffix: "Sağlık Merkezleri İçin Hasta Portalı",
    description: "{location} bölgesinde sağlık hizmeti arayanlara kurumsal, şeffaf ve güven veren bir sağlık platformu sunun.",
    benefits: [
      "Doktor kadrosu, uzmanlık alanları ve özgeçmiş sayfaları",
      "Anlaşmalı kurumlar (SGK, Özel Sigortalar) bilgi bankası",
      "KVKK'ya tam uyumlu altyapı ve sunucu mimarisi",
      "Tıbbi birimlerin (Dahiliye, Cildiye vb.) SEO uyumlu tanıtımı"
    ],
    automationTitle: "E-Sonuç Sorgulama ve Doktor Takvimi Modülü",
    automationDesc: "Hastalar kan veya röntgen sonucu için kliniğe gelmez; web sitenizdeki E-Sonuç paneline TC kimlikleriyle girip sonuçlarını PDF olarak alırlar. Doktorların izin veya dolu günleri sistemde otomatik kapanır.",
    icon: "ShieldCheck",
    image: "/demos/poliklinik.webp"
  },
  {
    id: "fotografci",
    name: "Fotoğraf & Stüdyo",
    titleSuffix: "Fotoğrafçılar İçin Albüm ve Rezervasyon Paneli",
    description: "{location} bölgesinde düğün, nişan veya ürün çekimi arayanlara vizyonunuzu en iyi kalitede gösterin.",
    benefits: [
      "Fotoğrafları kalite kaybı olmadan süper hızlı yükleyen özel galeri",
      "Düğün, dış çekim, yenidoğan gibi konsept bazlı portfolyo",
      "Paket fiyatlandırma tabloları (Standart, Premium, VIP)",
      "Instagram feed entegrasyonu ile otomatik içerik akışı"
    ],
    automationTitle: "Şifreli Müşteri Albüm Seçim Portalı",
    automationDesc: "Çekim sonrası müşteriye flash bellek veya WeTransfer atma devri bitti. Müşteri sitenize şifresiyle girer, 1000 fotoğraf arasından basılmasını istediği 50 fotoğrafı kalp ikonuna tıklayarak seçer. Seçim bittiğinde listeniz size otomatik mail gelir.",
    icon: "Sparkles",
    image: "/demos/fotografci.webp"
  },
  {
    id: "matbaa",
    name: "Matbaa & Reklam Ajansı",
    titleSuffix: "Matbaalar İçin Online Teklif ve Dosya Modülü",
    description: "{location} bölgesindeki kurumsal firmaların baskı ihtiyaçlarını dijital ortamda toplayın, iş yükünüzü hafifletin.",
    benefits: [
      "Kartvizit, broşür, promosyon gibi yüzlerce ürün sergileme",
      "Kurumsal şirketler için B2B toplu sipariş altyapısı",
      "Geçmiş siparişleri ve faturaları görüntüleme alanı",
      "Referanslar ve tamamlanan projeler galerisi"
    ],
    automationTitle: "Dinamik Baskı Fiyatı Hesaplama ve Dosya Yükleme",
    automationDesc: "Müşteri '1000 adet', '350gr Kuşe', 'Parlak Selefon' seçtiği an fiyat otomatik hesaplanır. Siparişi geçerken tasarım PDF'sini direkt sitenize yükler. Mail trafiği ve 'dosya boyutu büyük' hataları tarih olur.",
    icon: "Settings2",
    image: "/demos/matbaa.webp"
  },
  {
    id: "surucu-kursu",
    name: "Sürücü Kursu",
    titleSuffix: "Sürücü Kursları İçin Web Sitesi ve Sınav Modülü",
    description: "{location} bölgesinde ehliyet almak isteyen adayları profesyonel altyapınızla ikna edin.",
    benefits: [
      "Ehliyet sınıfları (B, A2 vb.) ve başvuru şartları sayfaları",
      "Gerekli evraklar ve sağlık raporu süreçleri hakkında bilgi",
      "Eğitmen kadrosu ve araç filosunun (Manuel/Otomatik) tanıtımı",
      "Canlı destek modülü ile adayların sorularına anında cevap"
    ],
    automationTitle: "Direksiyon Randevu ve E-Sınav Deneme Portalı",
    automationDesc: "Adaylar sitenize girip Milli Eğitim'in E-Sınav formatıyla birebir aynı ekranda deneme testi çözerler. Direksiyon dersleri için ise eğitmenlerin boş saatlerini görüp sistemden online ders randevusu alırlar.",
    icon: "Car",
    image: "/demos/surucu-kursu.webp"
  },
  {
    id: "kuru-temizleme",
    name: "Kuru Temizleme & Ütü",
    titleSuffix: "Kuru Temizlemeler İçin Kurye ve Takip Sistemi",
    description: "{location} bölgesinde yoğun çalışan profesyonellerin bir numaralı tercihi olun. Evden al, eve bırak modelini dijitalleştirin.",
    benefits: [
      "Takım elbise, gömlek, yorgan gibi ürünlere özel fiyat tablosu",
      "Leke çıkarma ve özel bakım hizmetleri tanıtımı",
      "Aylık abonelik paketleri satışı (Örn: Aylık 10 gömlek ütü)",
      "Google Haritalar ile mağaza konum entegrasyonu"
    ],
    automationTitle: "Kapıdan Alım Kurye Botu ve Barkod Takibi",
    automationDesc: "Müşteri 'Yarın sabah 09:00'da evimden alınsın' der. Ürünler araca alındığında bir barkod basılır. Müşteri web sitenizden sipariş kodunu girerek kıyafetinin yıkamada mı, ütüde mi yoksa yolda mı olduğunu Domino's Pizza siparişi gibi izler.",
    icon: "Sparkles",
    image: "/demos/kuru-temizleme.webp"
  },
  {
    id: "lojistik",
    name: "Gümrük & Lojistik",
    titleSuffix: "Lojistik Firmaları İçin Web Sitesi ve Yük Takip",
    description: "{location} bölgesinden tüm dünyaya açılan B2B operasyonlarınız için kurumsal, uluslararası standartlarda bir yüz.",
    benefits: [
      "Karayolu, Denizyolu, Havayolu hizmetlerinin kurumsal sunumu",
      "Çoklu dil (İngilizce, Arapça, Rusça vs.) altyapısı",
      "Incoterms ve gümrük mevzuatı bilgi bankası",
      "Uluslararası taşımacılık belgeleri indirme merkezi"
    ],
    automationTitle: "Desi/Hacim Hesaplama ve Online Konşimento Takibi",
    automationDesc: "İhracatçı firma en, boy, yükseklik girerek tahmini navlun (taşıma) bedelini hesaplar. Yük yola çıktığında, sitenizdeki 'Kargo Takip' bölümüne Konşimento numarasını yazarak tırın veya geminin anlık konumunu haritada görür.",
    icon: "Rocket",
    image: "/demos/lojistik.webp"
  },
  {
    id: "cigerci",
    name: "Ciğerci & Kebapçı",
    titleSuffix: "Ciğer ve Kebap Salonları İçin QR Menü",
    description: "{location} bölgesinin en meşhur lezzet durağı siz olun. Paket sipariş komisyonlarından kurtulup kendi müşterinize doğrudan ulaşın.",
    benefits: [
      "İştah açıcı ve yöresel lezzetleri öne çıkaran vitrin tasarımı",
      "Masalara özel QR kod ile dijital menü entegrasyonu",
      "Yemeksepeti/Getir komisyonu olmadan kendi paket sipariş sisteminiz",
      "Google Haritalar'da (En İyi Ciğerci vb.) üst sıralara çıkma"
    ],
    automationTitle: "Komisyonsuz Paket Servis ve WhatsApp Sipariş Botu",
    automationDesc: "Müşterileriniz web sitenize girip sipariş sepetini oluşturur. Sipariş tamamlandığında otomatik olarak işletmenizin WhatsApp hattına veya mutfak ekranına '2 Porsiyon Ciğer, 1 Ayran - Adres: ...' şeklinde anında ve hatasız düşer.",
    icon: "Coffee",
    image: "/demos/cigerci.webp"
  },
  {
    id: "donerci",
    name: "Dönerci & Fast Food",
    titleSuffix: "Dönerciler İçin Hızlı Sipariş Web Sitesi",
    description: "{location} bölgesindeki en hızlı ve sıcak paket servisi siz yapın. Akıllı web altyapınızla öğle arası yoğunluğunu fırsata çevirin.",
    benefits: [
      "Saniyede açılan mobil odaklı 'Hızlı Sipariş' ekranı",
      "Menü, dürüm ve porsiyon seçeneklerini kolay seçtiren altyapı",
      "Müşteri sadakat programı (10 Siparişe 1 Dürüm Bedava vb.)",
      "Bölgesel (Mahalle bazlı) minimum paket tutarı ayarlama"
    ],
    automationTitle: "Zaman Ayarlı Ön Sipariş ve Gel-Al Otomasyonu",
    automationDesc: "Özellikle öğle tatilindeki plaza çalışanları veya öğrenciler için harika bir modül. Müşteri sitenizden 'Saat 12:30'da gelip alacağım' diyerek siparişini ve ödemesini önden yapar, dükkanda sıra beklemez.",
    icon: "Zap",
    image: "/demos/donerci.webp"
  },
  {
    id: "otel-apart",
    name: "Otel, Apart & Pansiyon",
    titleSuffix: "Oteller İçin Komisyonsuz Rezervasyon Yazılımı",
    description: "{location} bölgesine gelen turist ve misafirleri Booking veya ETS komisyonu ödemeden doğrudan sitenizden ağırlayın.",
    benefits: [
      "Odaları, manzarayı ve otel imkanlarını gösteren lüks tasarım",
      "Kredi kartı entegrasyonu ile kaparolu veya tam ödeme altyapısı",
      "Çoklu dil seçeneği (İngilizce, Arapça, Rusça)",
      "Bölgesel turistik rehber blogu ile organik SEO trafiği"
    ],
    automationTitle: "Canlı Oda Müsaitlik ve Kanal Yöneticisi (Channel Manager)",
    automationDesc: "Ziyaretçi sitenizde giriş-çıkış tarihi seçtiğinde sadece boş odaları görür. Sitenizden bir oda satıldığında, sistem otomatik olarak Booking.com, Airbnb ve ETS'deki müsaitlik takviminizi de günceller (Çifte rezervasyonu önler).",
    icon: "Building2",
    image: "/demos/otel-apart.webp"
  },
  {
    id: "mobilya",
    name: "Mobilya & Dekorasyon",
    titleSuffix: "Mobilyacılar İçin Sanal Showroom ve Web Katalog",
    description: "{location} bölgesindeki yeni evlenenlerin veya evini yenileyenlerin ilk uğradığı mağaza siz olun. Ürünlerinizi dijitalde konuşturun.",
    benefits: [
      "Koltuk takımları, yatak odaları için geniş ekran, şık ürün vitrini",
      "Ürün detay sayfalarında renk ve kumaş (kartela) seçenekleri",
      "Mimar ve kurumsal müşteriler için B2B toptan satış/teklif formu",
      "Instagram mağazası (Shop) ile tam ürün senkronizasyonu"
    ],
    automationTitle: "Özel Ölçü Fiyat Hesaplama ve Sanal Sepet",
    automationDesc: "Müşteri beğendiği köşe koltuğun boyutlarını (Örn: 300x250) ve kumaş türünü (Keten, Kadife) seçtiği anda sistem fiyata ne kadar fark ekleneceğini otomatik hesaplar. WhatsApp'a tek tıkla 'Bu özelliklerde ürün istiyorum' mesajı atar.",
    icon: "Sparkles",
    image: "/demos/mobilya.webp"
  },
  {
    id: "turizm-acente",
    name: "Turizm & Seyahat Acentesi",
    titleSuffix: "Acenteler İçin Tur Satış ve Biletleme Yazılımı",
    description: "{location} kalkışlı yerel ve yurtdışı turlarınızı tüm Türkiye'ye satın. Güvenilir ve kurumsal dijital acente kimliğine kavuşun.",
    benefits: [
      "Tur programını gün gün anlatan detaylı ve görsel sayfalar",
      "Uçak, otobüs bileti ve vize danışmanlık hizmetleri tanıtımı",
      "Müşteri yorumları (TripAdvisor entegrasyonu) ve referanslar",
      "Kredi kartı ile taksitli tur paketi satış altyapısı"
    ],
    automationTitle: "Otobüs/Uçak Koltuk Seçimi ve Online Biletleme",
    automationDesc: "Müşteri Karadeniz Turu paketini seçer, açılan otobüs krokisi üzerinden '23 ve 24 numaralı cam kenarı' koltukları rezerve eder. Sistem online ödemeyi alıp müşteriye otomatik olarak biletini/tur sözleşmesini PDF olarak SMS ile gönderir.",
    icon: "Rocket",
    image: "/demos/turizm-acente.webp"
  },
  {
    id: "sigorta-acente",
    name: "Sigorta Acentesi",
    titleSuffix: "Sigorta Acenteleri İçin Online Teklif Botu",
    description: "{location} bölgesinde kasko, trafik, DASK veya tamamlayıcı sağlık sigortası arayanlara saniyeler içinde dönüş yapın.",
    benefits: [
      "Acentenin anlaşmalı olduğu (Allianz, Anadolu vb.) markaların sergilenmesi",
      "Hasar anında 'Ne yapmalıyım?' hızlı erişim asistanı sayfaları",
      "Güven veren, kurumsal ve mobil odaklı modern tasarım",
      "Organik müşteri çekmek için sigorta terimleri rehberi (Blog)"
    ],
    automationTitle: "TC Kimlik ile Otomatik Teklif Toplama Botu",
    automationDesc: "Müşteri sitenizdeki forma TC kimlik, Plaka ve Telefon numarasını girer. Bu bilgiler size SMS veya WhatsApp ile anında düşer. Siz kendi ekranınızdan poliçe teklifini çıkardığınızda, tek tuşla müşteriye teklif linkini (PDF) atabilirsiniz.",
    icon: "ShieldCheck",
    image: "/demos/sigorta-acente.webp"
  },
  {
    id: "berber-kuafor",
    name: "Berber & Erkek Kuaförü",
    titleSuffix: "Erkek Kuaförleri İçin VIP Randevu Sistemi",
    description: "{location} bölgesinin en trend kuaförü siz olun. 'Beklemek yok, sıra yok' diyerek müşteri memnuniyetini zirveye taşıyın.",
    benefits: [
      "Saç kesim, sakal tasarımı, cilt bakımı gibi hizmet fiyat listeleri",
      "Salonun atmosferini ve tarz kesimleri yansıtan dinamik galeri",
      "VIP müşteriler ve damat tıraşı için özel rezervasyon paketleri",
      "Google Benim İşletmem ve Haritalar yorum entegrasyonu"
    ],
    automationTitle: "Personel (Kalfa/Usta) Seçimli Online Randevu",
    automationDesc: "Müşterileriniz web sitenize girer, tıraş olmak istediği ustayı (Örn: Ahmet Usta veya Mehmet Kalfa) seçer ve sadece onun boş saatlerini görüp randevusunu alır. Dükkandaki 'Senin koltuğuna mı oturacaktı?' kargaşası biter.",
    icon: "Settings2", // Scissors/Comb alternative
    image: "/demos/berber-kuafor.webp"
  },
  {
    id: "pastane",
    name: "Fırın & Pastane",
    titleSuffix: "Pastaneler İçin Özel Pasta Tasarım Modülü",
    description: "{location} bölgesinde doğum günü, nişan veya düğün pastası denilince ilk akla gelen butik marka olun.",
    benefits: [
      "Tatlıların, çikolataların ve pastaların iştah kabartan fotoğraf düzeni",
      "Günlük taze çıkan ürünler (Sıcak ekmek, simit) için canlı vitrin (Story)",
      "Cafe konsepti varsa mekanın tanıtımı ve menü sunumu",
      "Kurumsal firmalar için toplantı/ikramlık B2B sipariş sayfası"
    ],
    automationTitle: "3 Adımda Butik Pasta Sipariş ve Tasarım Botu",
    automationDesc: "Müşteri sitede pastanın kaç kişilik olacağını, pandispanya/krema aromasını (Çikolatalı, Meyveli) seçer ve üzerine yazılacak yazıyı girer. Varsa referans bir fotoğraf yükler. Sistem ona toplam tutarı ve teslimat saatini hesaplayıp siparişi mutfağa düşürür.",
    icon: "Coffee", // Cake/Dessert alternative
    image: "/demos/pastane.webp"
  },
  {
    id: "pet-shop",
    name: "Pet Shop & Pet Kuaför",
    titleSuffix: "Pet Shoplar İçin E-Ticaret ve Abonelik Yazılımı",
    description: "{location} bölgesindeki tüm patili dostların ihtiyaç merkezi olun. İnternetten satış yapıp cironuzu katlayın.",
    benefits: [
      "Kedi, köpek, kuş kategorilerine özel kolay ürün bulma altyapısı",
      "Trendyol'a komisyon vermek yerine doğrudan satış imkanı (E-Ticaret)",
      "Pet kuaför ve bakım hizmetleri için randevu sistemi",
      "Yeni sahiplenme veya kayıp ilanları için sosyal duyuru panosu"
    ],
    automationTitle: "Aylık Mama Aboneliği ve Stok Hatırlatıcı",
    automationDesc: "Müşteri sitenizden '15 KG ProPlan Kedi Maması - Her Ay Gönder' aboneliği başlatır. Kredi kartından her ay düzenli ödeme çekilir ve sipariş otomatik oluşur. Stoklarınız azaldığında sistem sizi uyarır.",
    icon: "Sparkles",
    image: "/demos/pet-shop.webp"
  },
  {
    id: "danisman",
    name: "Danışmanlık & Yaşam Koçu",
    titleSuffix: "Danışmanlar İçin Kişisel Marka ve Randevu Sitesi",
    description: "{location} bölgesinde İK, Yönetim veya Yaşam Koçluğu arayan profesyonellere vizyonunuzu ve değerinizi en üst düzeyde gösterin.",
    benefits: [
      "Kişisel markanızı (Ad-Soyad) ön plana çıkaran, Premium Minimalist tasarım",
      "Kitap satışı, e-kitap indirme veya eğitim video satışı altyapısı",
      "Kurumsal şirket referansları ve vaka analizleri (Case Studies) alanı",
      "SEO odaklı ve otorite inşası için gelişmiş makale (Blog) yapısı"
    ],
    automationTitle: "Online Seans Satışı ve Zoom/Takvim Entegrasyonu",
    automationDesc: "Danışanlar sitenizden 45 dakikalık 'Birebir Görüşme' paketi satın alır. Sistem ödemeyi onayladığı an, müşterinin ve sizin Google Takviminize etkinliği ekler, Zoom linkini otomatik oluşturup her iki tarafa da mail atar.",
    icon: "ShieldCheck",
    image: "/demos/danisman.webp"
  },
  {
    id: "insaat-muteahhit",
    name: "İnşaat & Müteahhitlik",
    titleSuffix: "İnşaat Firmaları İçin Proje Sunum ve Satış Paneli",
    description: "{location} bölgesindeki prestijli konut ve ticari projelerinizi dijitalde en görkemli haliyle sergileyin.",
    benefits: [
      "Devam eden ve tamamlanan projeler için ayrı portfolyo yapısı",
      "Kat planları (3+1, 4+1) ve 360° sanal tur entegrasyonu",
      "Kurumsal geçmiş, vizyon ve kalite belgeleri (ISO vb.) sunumu",
      "Yatırımcılar için VIP proje tanıtım dosyası indirme alanı"
    ],
    automationTitle: "Proje İlerleme Durumu ve Daire Ön Talep Botu",
    automationDesc: "Ziyaretçiler web sitenizdeki inşaatın '%75 Tamamlandı' çubuğunu canlı görür. İlgilendikleri projenin B-Blok 3. katındaki daire için 'Ön Talep Formu' doldurduklarında, satış ekibinizin CRM paneline bütçe bilgisiyle beraber düşer.",
    icon: "Building2",
    image: "/demos/insaat-muteahhit.webp"
  },
  {
    id: "kimya-sanayi",
    name: "Kimya & Sanayi Şirketi",
    titleSuffix: "Sanayi Firmaları İçin B2B Katalog ve Sipariş Ağı",
    description: "{location} OSB (Organize Sanayi Bölgesi) ve çevresindeki üretim gücünüzü global vizyonla dijitale taşıyın.",
    benefits: [
      "Üretim bandı, tesis kapasitesi ve Ar-Ge laboratuvarı tanıtımı",
      "Çoklu dil (İngilizce, Almanca, Arapça) ile ihracat odaklı altyapı",
      "Distribütörler/Bayiler için gizli fiyatları gösteren B2B portalı",
      "ISO, TSE kalite belgeleri ve teknik döküman arşivi"
    ],
    automationTitle: "Dinamik MSDS (Güvenlik Formu) ve Toptan Sipariş",
    automationDesc: "Müşterileriniz her ürünün teknik veri sayfasını (TDS) ve güvenlik formunu (MSDS) sistemden PDF olarak çeker. Bayileriniz kendilerine özel şifreyle girip stok durumunu canlı görerek tonajlı toptan sipariş oluşturur.",
    icon: "Settings2", // Industry alternative
    image: "/demos/kimya-sanayi.webp"
  },
  {
    id: "bar-meyhane",
    name: "Bar, Meyhane & Gece Kulübü",
    titleSuffix: "Eğlence Mekanları İçin Rezervasyon ve VIP Yönetimi",
    description: "{location} gece hayatının nabzını tutan mekanınızı, kapıdaki müşteri seçimi ve rezervasyon kargaşasından kurtarın.",
    benefits: [
      "Karanlık (Dark-Mode), premium ve eğlenceyi yansıtan lüks tasarım",
      "DJ programı, canlı müzik veya fix menü etkinlik takvimi",
      "Kokteyl, şarap ve alkollü içecek menüsünün zarif sunumu",
      "Mekanın atmosferini gösteren video arka planlar (Hero Video)"
    ],
    automationTitle: "Loca/Masa Seçimli Kaparolu Rezervasyon Sistemi",
    automationDesc: "Müşteriler cuma gecesi programı için sitenize girer. Sahne önü, VIP Loca veya Balkon seçeneklerinden birini seçip kredi kartıyla %20 kaparo öder. Kapıdaki 'İsmim yazıyordu' tartışmaları tamamen biter, geliriniz garantilenir.",
    icon: "Sparkles", // Glass/Music alternative
    image: "/demos/bar-meyhane.webp"
  },
  {
    id: "taksi-duragi",
    name: "Taksi Durağı & Transfer",
    titleSuffix: "Taksi Durakları İçin Dijital Çağrı ve Transfer Botu",
    description: "{location} bölgesinin en güvenilir ve hızlı taksi durağı olun. Uber ve korsan taşımacılığa karşı dijitalleşerek savaş açın.",
    benefits: [
      "Mobil cihazlarda anında açılan 'Tek Tıkla Taksi Çağır' butonu",
      "Duraktaki araç filosu (VIP, Doblo, Sedan) ve şoför tanıtımı",
      "Havalimanı, Otogar veya çevre illere sabit fiyat tarifesi",
      "Müşteri güveni için şoför puanlama ve yorum sistemi"
    ],
    automationTitle: "Mesafe Bazlı Ücret Hesaplama ve Konum Gönderme",
    automationDesc: "Müşteri 'Bulunduğum Konumu Al' butonuna basar ve gideceği yeri (Örn: Havalimanı) seçer. Sistem ortalama taksimetre tutarını gösterir. Onayladığı an şoförün ekranına veya durağın WhatsApp grubuna Google Haritalar linki olarak düşer.",
    icon: "Car",
    image: "/demos/taksi-duragi.webp"
  },
  {
    id: "hali-saha",
    name: "Halı Saha & Spor Tesisleri",
    titleSuffix: "Halı Sahalar İçin Online Abonelik ve Kaparo Sistemi",
    description: "{location} bölgesindeki futbol tutkunlarının boş saat aramak için defalarca aramak yerine sitenizden kiralama yapmasını sağlayın.",
    benefits: [
      "Tesis imkanları (Duş, otopark, krampon kiralama, cafe) sunumu",
      "Turnuva düzenleme ve puan durumu yayınlama sayfaları",
      "Drone ile çekilmiş saha fotoğrafları ve tanıtım videosu",
      "Oyuncu arayan takımlar için 'Maç İlanı' (Eksik oyuncu bulma) panosu"
    ],
    automationTitle: "Canlı Saat Takvimi ve Online Kaparo Modülü",
    automationDesc: "Müşteri sitenize girer, örneğin 'Çarşamba 21:00-22:00' arasının boş olduğunu görüp seçer. Kredi kartıyla 200 TL kaparo ödeyerek o saati kendi adına kapatır. İptallerden doğan zararınız sıfıra iner, maç saati yaklaşınca SMS ile hatırlatma gider.",
    icon: "Target", // Football alternative
    image: "/demos/hali-saha.webp"
  },
  {
    id: "oto-galeri",
    name: "Oto Galeri & Araç Alım Satım",
    titleSuffix: "Galericiler İçin Sanal Showroom ve Kredi Botu",
    description: "{location} bölgesinde lüks veya 2. el araç arayan müşterilere, Sarı Site (Sahibinden) dışındaki kendi prestijli vitrininizi sunun.",
    benefits: [
      "Sarı Site'den bağımsız, komisyonsuz ve prestijli kurumsal vitrin",
      "Araçları marka, model, yıl, kilometre ve yakıt türüne göre filtreleme",
      "Araç ekspertiz raporlarını (PDF) ve Tramer sorgularını şeffafça sunma",
      "Değerinde araç alım (Nakit alım) için 'Aracımı Satmak İstiyorum' formu"
    ],
    automationTitle: "Banka Kredisi Hesaplama ve 360° Araç İçi İnceleme",
    automationDesc: "Müşteri beğendiği aracın sayfasındayken peşinat tutarını girer, sistem güncel banka faiz oranlarıyla (Örn: 24 Ay, 36 Ay) aylık taksitleri otomatik hesaplar. Satış temsilcisine 'Bu araç için %30 peşinatla kredi başvurusu' şeklinde detaylı lead (talep) düşer.",
    icon: "Car",
    image: "/demos/oto-galeri.webp"
  },
  {
    id: "ozel-okul",
    name: "Özel Okul & Kolej",
    titleSuffix: "Eğitim Kurumları İçin Veli Portalı ve Kayıt Sistemi",
    description: "{location} bölgesindeki velilere eğitim kalitenizi, teknolojik altyapınızla kanıtlayın. Kayıt dönemlerini otomatize edin.",
    benefits: [
      "Anaokulu, İlkokul, Ortaokul kademelerine özel akademik vizyon sayfaları",
      "Kampüs turu, laboratuvar, spor salonu ve yemekhane tanıtımları",
      "Eğitmen kadrosunun (Öğretmenlerin) detaylı akademik geçmişleri",
      "Okul kulüpleri, robotik kodlama ve yurt dışı eğitim (Erasmus) programları"
    ],
    automationTitle: "Bursluluk Sınavı Kayıt ve Veli Randevu Sistemi",
    automationDesc: "Veliler 'Bursluluk Sınavı' için çocuğu adına sisteme kayıt olur ve sınav giriş belgesini (QR Kodlu) anında PDF olarak alır. Ayrıca, okul müdürü veya rehberlik öğretmeni ile görüşmek için sistem üzerinden online gün/saat seçerek randevu oluştururlar.",
    icon: "Award", // School alternative
    image: "/demos/ozel-okul.webp"
  },
  {
    id: "tarim-ziraat",
    name: "Tarım, Ziraat & Hayvancılık",
    titleSuffix: "Zirai Firmalar İçin B2B İlaç ve Gübre Sipariş Ağı",
    description: "{location} ovasındaki çiftçilere ve bayilere tohum, gübre, ilaç tedarikini modern bir e-ticaret altyapısıyla sunun.",
    benefits: [
      "Bitki koruma (Böcek/Mantar ilaçları) ve bitki besleme (Gübre) kategorileri",
      "Hangi ilacın hangi ekin/ağaç türünde kullanılacağını anlatan rehber (Blog)",
      "Tarım fuarları, saha günleri ve etkinlik duyuruları",
      "Dron ile ilaçlama gibi yeni nesil teknolojik hizmetlerin tanıtımı"
    ],
    automationTitle: "Hasat Zamanı Hatırlatıcı ve Bayi Toptan Sipariş Portalı",
    automationDesc: "Bölgenizdeki zirai bayiler, kendilerine atanan iskonto oranlarıyla sisteme girip palet bazında toptan gübre/ilaç siparişi verirler. Sistem, buğday veya pamuk hasat mevsimi yaklaştığında çiftçilere 'Sürme ilacı zamanı geldi' diye otomatik SMS atar.",
    icon: "Globe", // Farm/Tractor alternative
    image: "/demos/tarim-ziraat.webp"
  },
  {
    id: "tercume-burosu",
    name: "Tercüme & Çeviri Bürosu",
    titleSuffix: "Tercüme Büroları İçin Otomatik Fiyatlama Botu",
    description: "{location} bölgesindeki kurumsal şirketlere, hastanelere ve akademisyenlere profesyonel yeminli tercüme hizmeti sunun.",
    benefits: [
      "İngilizce, Almanca, Rusça vb. dil bazlı profesyonel hizmet sayfaları",
      "Tıbbi, Hukuki, Akademik ve Teknik çeviri uzmanlık alanları tanıtımı",
      "Noter yeminli tercüme ve Apostil onay süreçleri hakkında bilgi",
      "Acil çeviri (24 saat içinde teslim) hizmet seçenekleri"
    ],
    automationTitle: "Kelime Sayısına Göre Otomatik Fiyat ve Dosya Yükleme",
    automationDesc: "Müşteri çevrilecek belgeyi (Word veya PDF) sitenize yükler, hedef dili seçer. Sistem dosyadaki kelime sayısını analiz edip anında bir fiyat (Örn: 2500 Kelime İngilizce Çeviri = 1500 TL) ve teslim süresi çıkarır. Müşteri online öder, iş direkt tercümana düşer.",
    icon: "MessageCircle", // Language/Translation alternative
    image: "/demos/tercume-burosu.webp"
  }
];

export function generatePseoData() {
  const data = [];
  
  seoLocations.forEach(location => {
    seoProfessions.forEach(profession => {
      const slug = `diyarbakir-${location.id}-${profession.id}-web-sitesi-yapimi`;
      
      data.push({
        slug,
        location,
        profession,
        // Replace {location} placeholders with actual prefix
        resolvedDescription: profession.description.replace(/{location}/g, location.prefix),
        resolvedBenefits: profession.benefits.map(b => b.replace(/{location}/g, location.prefix)),
        title: `${location.prefix} ${profession.name} Web Sitesi ve Otomasyonu`
      });
    });
  });
  
  return data;
}

export function getPseoBySlug(slug) {
  const allData = generatePseoData();
  return allData.find(item => item.slug === slug);
}
