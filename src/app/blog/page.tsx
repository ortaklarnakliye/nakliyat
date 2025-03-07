import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Şehirlerarası Nakliyat ve Ambar Hizmetleri",
  description: "Şehirlerarası nakliyat, ambar hizmetleri, parça eşya taşıma ve tüm nakliye rotalarımız hakkında detaylı bilgiler. Profesyonel nakliyat çözümleri için blog yazılarımızı inceleyin.",
  keywords: "nakliyat blog, şehirlerarası nakliyat, ambar hizmetleri, parça eşya taşıma, evden eve nakliyat, istanbul izmir nakliyat, istanbul antalya nakliyat, istanbul bodrum nakliyat",
  alternates: {
    canonical: "https://sehirlerarasinakliyat.vip/blog"
  },
  openGraph: {
    title: "Blog | Şehirlerarası Nakliyat ve Ambar Hizmetleri",
    description: "Şehirlerarası nakliyat, ambar hizmetleri ve parça eşya taşıma hakkında detaylı bilgiler",
    url: "https://sehirlerarasinakliyat.vip/blog",
    type: "website"
  }
};

export interface BlogPost {
  slug: string;
  title: string;
  description?: string;
  content: string;
  image: string;
  date?: string;
  author?: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ambar-hizmetleri",
    title: "Ambar Hizmetleri",
    description: "Güvenli ve organize ambar hizmetlerimiz hakkında detaylı bilgi",
    content: `
      <p>Ambar hizmetlerimiz, eşyalarınızın güvenli bir şekilde depolanması ve taşınması için profesyonel çözümler sunar. Modern ve güvenlikli tesislerimizde, her türlü ticari ve kişisel eşyanız için ideal depolama koşulları sağlıyoruz.</p>
      
      <h3>Sunduğumuz Ambar Hizmetleri</h3>
      <ul>
        <li>Kısa ve uzun süreli depolama</li>
        <li>Klimatik kontrollü depolama alanları</li>
        <li>7/24 güvenlik sistemi</li>
        <li>Profesyonel paketleme hizmeti</li>
        <li>Sigortalı depolama</li>
      </ul>

      <h3>Neden Bizi Tercih Etmelisiniz?</h3>
      <p>20 yılı aşkın tecrübemiz ve profesyonel ekibimizle, eşyalarınızın güvenliği bizim için en önemli öncelik. Modern depolama tesislerimiz ve gelişmiş güvenlik sistemlerimizle, size en iyi hizmeti sunuyoruz.</p>
    `,
    image: "https://images.unsplash.com/photo-1577705998148-6da4f3963bc8",
    date: "2024-03-15",
    author: "Nakliyat Ekibi",
    category: "Hizmetler"
  },
  {
    slug: "nakliye-hizmetleri",
    title: "Nakliye Hizmetleri",
    description: "Profesyonel nakliye hizmetlerimiz hakkında detaylı bilgi",
    content: `
      <p>Şehirler arası nakliye hizmetlerimiz, eşyalarınızın güvenli ve hızlı bir şekilde taşınmasını sağlar. Modern araç filomuz ve uzman ekibimizle, Türkiye'nin her noktasına profesyonel nakliye hizmeti sunuyoruz.</p>

      <h3>Nakliye Hizmetlerimiz</h3>
      <ul>
        <li>Şehirler arası nakliyat</li>
        <li>Evden eve nakliyat</li>
        <li>Ofis taşıma</li>
        <li>Parsiyel yük taşıma</li>
        <li>Özel eşya taşıma</li>
      </ul>

      <h3>Taşıma Sürecimiz</h3>
      <p>Profesyonel ekibimiz, eşyalarınızın güvenli bir şekilde paketlenmesi, yüklenmesi ve taşınması sürecini titizlikle yönetir. Her aşamada sigorta güvencesi ve modern ekipmanlarla çalışıyoruz.</p>
    `,
    image: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b",
    date: "2024-03-14",
    author: "Nakliyat Ekibi",
    category: "Hizmetler"
  },
  {
    slug: "istanbul-izmir-nakliyat",
    title: "İstanbul - İzmir Nakliyat",
    description: "İstanbul - İzmir arası güvenli ve hızlı nakliyat hizmeti",
    content: `
      <h2>İstanbul - İzmir Arası Profesyonel Nakliyat</h2>
      <p>İstanbul ve İzmir arasında düzenli nakliyat hizmeti sunuyoruz. Her gün karşılıklı seferlerimizle eşyalarınızı güvenle taşıyoruz.</p>

      <h3>Güzergah Bilgisi</h3>
      <ul>
        <li>İstanbul - Bursa - Balıkesir - İzmir</li>
        <li>Günlük karşılıklı seferler</li>
        <li>Ara noktalara teslimat</li>
        <li>Express taşıma seçeneği</li>
      </ul>

      <h3>Hizmet Bölgelerimiz</h3>
      <p>İstanbul ve İzmir'in tüm ilçelerine hizmet veriyoruz. Güzergah üzerindeki Bursa, Balıkesir gibi şehirlere de teslimat yapıyoruz.</p>
    `,
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3",
    date: "2024-03-13",
    author: "Nakliyat Ekibi",
    category: "Rotalar"
  },
  {
    slug: "istanbul-antalya-nakliyat",
    title: "İstanbul - Antalya Nakliyat",
    description: "İstanbul - Antalya arası güvenli ve konforlu nakliyat",
    content: `
      <h2>İstanbul - Antalya Arası Güvenli Nakliyat</h2>
      <p>İstanbul ve Antalya arasında düzenli ve güvenli nakliyat hizmeti sunuyoruz. Modern araç filomuz ve deneyimli ekibimizle eşyalarınızı özenle taşıyoruz.</p>

      <h3>Hizmet Detayları</h3>
      <ul>
        <li>Haftalık düzenli seferler</li>
        <li>Parsiyel taşıma imkanı</li>
        <li>Sigortalı taşımacılık</li>
        <li>Online takip sistemi</li>
      </ul>

      <h3>Güzergah ve Teslimat</h3>
      <p>İstanbul'dan Antalya'ya uzanan güzergahta ara noktalara da teslimat yapıyoruz. Kapıdan kapıya hizmet sunuyoruz.</p>
    `,
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59",
    date: "2024-03-12",
    author: "Nakliyat Ekibi",
    category: "Rotalar"
  },
  {
    slug: "parca-tasimacilik",
    title: "Parça Taşımacılık",
    description: "Tek parça veya birkaç parça eşyanızı güvenle taşıyoruz",
    content: `
      <h2>Parça Eşya Taşıma Hizmeti</h2>
      <p>Tek parça veya birkaç parça eşyanızı güvenle taşıyoruz. Özel paketleme ve sigortalı taşıma hizmetimizle eşyalarınız güvende.</p>

      <h3>Parça Taşıma Avantajları</h3>
      <ul>
        <li>Ekonomik fiyatlar</li>
        <li>Hızlı teslimat</li>
        <li>Özel paketleme</li>
        <li>Sigortalı taşıma</li>
        <li>Kapıdan kapıya hizmet</li>
      </ul>

      <h3>Neleri Taşıyoruz?</h3>
      <p>Beyaz eşya, mobilya, elektronik eşya, antika, sanat eseri ve benzeri her türlü parça eşyanızı özenle taşıyoruz.</p>
    `,
    image: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b",
    date: "2024-03-11",
    author: "Nakliyat Ekibi",
    category: "Hizmetler"
  },
  {
    slug: "parsiyel-tasima",
    title: "Parsiyel Taşıma",
    description: "Ekonomik parsiyel taşıma çözümleri",
    content: `
      <h2>Ekonomik Parsiyel Taşıma</h2>
      <p>Parsiyel taşıma hizmetimizle, küçük hacimli yüklerinizi ekonomik ve güvenli bir şekilde taşıyoruz. Aynı yöne giden farklı müşterilerimizin yüklerini birleştirerek maliyet avantajı sağlıyoruz.</p>

      <h3>Parsiyel Taşıma Avantajları</h3>
      <ul>
        <li>Uygun fiyatlar</li>
        <li>Düzenli sevkiyat</li>
        <li>Güvenli taşıma</li>
        <li>Hızlı teslimat</li>
        <li>Online takip</li>
      </ul>

      <h3>Parsiyel Taşıma Bölgelerimiz</h3>
      <p>Türkiye'nin tüm büyük şehirlerine düzenli parsiyel taşıma hizmeti sunuyoruz. Özellikle İstanbul, Ankara, İzmir, Antalya hatlarında sık sık sefer düzenliyoruz.</p>
    `,
    image: "https://images.unsplash.com/photo-1616432043562-3671ea2e5242",
    date: "2024-03-10",
    author: "Nakliyat Ekibi",
    category: "Hizmetler"
  },
  {
    slug: "evden-eve-tasima",
    title: "Evden Eve Taşıma",
    description: "Profesyonel evden eve nakliyat hizmetleri",
    content: `
      <h2>Profesyonel Evden Eve Nakliyat</h2>
      <p>Ev eşyalarınızı profesyonel ekibimiz ve modern araçlarımızla güvenle taşıyoruz. Paketlemeden yerleştirmeye kadar tüm süreci biz yönetiyoruz.</p>

      <h3>Evden Eve Nakliyat Hizmetlerimiz</h3>
      <ul>
        <li>Profesyonel paketleme</li>
        <li>Demontaj-montaj hizmeti</li>
        <li>Asansörlü taşıma</li>
        <li>Sigortalı taşıma</li>
        <li>Yerinde ekspertiz</li>
      </ul>

      <h3>Taşıma Süreci</h3>
      <p>Ücretsiz ekspertiz sonrası size özel plan oluşturuyor, eşyalarınızı özenle paketliyor ve yeni evinize güvenle taşıyoruz. Montaj işlemlerini yapıp, eşyalarınızı yerleştiriyoruz.</p>
    `,
    image: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b",
    date: "2024-03-09",
    author: "Nakliyat Ekibi",
    category: "Hizmetler"
  },
  {
    slug: "paletli-tasimacilik",
    title: "Paletli Taşımacılık",
    description: "Endüstriyel ürünleriniz için paletli taşıma çözümleri",
    content: `
      <h2>Endüstriyel Paletli Taşımacılık</h2>
      <p>Endüstriyel ürünlerinizi ve ticari mallarınızı paletli taşıma sistemiyle güvenle taşıyoruz. Modern ekipmanlarımız ve deneyimli personelimizle hızlı ve güvenli hizmet sunuyoruz.</p>

      <h3>Paletli Taşıma Avantajları</h3>
      <ul>
        <li>Güvenli yükleme-boşaltma</li>
        <li>Hızlı elleçleme</li>
        <li>Depolama kolaylığı</li>
        <li>Hasarsız taşıma</li>
        <li>Maliyet avantajı</li>
      </ul>

      <h3>Ekipmanlarımız</h3>
      <p>Forklift, transpalet ve liftli araçlarımızla her türlü paletli yükünüzü profesyonelce taşıyoruz. Özel paletleme hizmeti de sunuyoruz.</p>

      <h3>Hizmet Bölgelerimiz</h3>
      <p>Türkiye'nin tüm organize sanayi bölgelerine paletli taşıma hizmeti sunuyoruz. Fabrikadan fabrikaya güvenli teslimat yapıyoruz.</p>
    `,
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866",
    date: "2024-03-15",
    author: "Nakliyat Ekibi",
    category: "Hizmetler"
  },
  {
    slug: "istanbul-bodrum-nakliyat",
    title: "İstanbul - Bodrum Nakliyat",
    description: "İstanbul - Bodrum arası özel nakliyat hizmeti",
    content: `
      <h2>İstanbul - Bodrum Özel Nakliyat</h2>
      <p>İstanbul ve Bodrum arasında özel nakliyat hizmeti sunuyoruz. Yaz-kış demeden düzenli seferlerimizle eşyalarınızı güvenle taşıyoruz.</p>

      <h3>Nakliyat Hizmetlerimiz</h3>
      <ul>
        <li>Ev eşyası taşıma</li>
        <li>Yazlık eşya taşıma</li>
        <li>Parça eşya taşıma</li>
        <li>Sezonluk eşya depolama</li>
      </ul>

      <h3>Bodrum ve Çevresi</h3>
      <p>Bodrum'un tüm mahallelerine hizmet veriyoruz. Ayrıca Muğla'nın diğer turistik bölgelerine de nakliyat hizmeti sunuyoruz.</p>
    `,
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59",
    date: "2024-03-08",
    author: "Nakliyat Ekibi",
    category: "Rotalar"
  },
  {
    slug: "istanbul-bursa-nakliyat",
    title: "İstanbul - Bursa Nakliyat",
    description: "İstanbul - Bursa arası hızlı ve güvenli nakliyat",
    content: `
      <h2>İstanbul - Bursa Arası Düzenli Nakliyat</h2>
      <p>İstanbul ve Bursa arasında her gün düzenli nakliyat seferleri düzenliyoruz. Yakın mesafe avantajıyla aynı gün teslimat imkanı sunuyoruz.</p>

      <h3>Hizmet Özellikleri</h3>
      <ul>
        <li>Günlük karşılıklı seferler</li>
        <li>Aynı gün teslimat</li>
        <li>Ekspres taşıma</li>
        <li>Ekonomik fiyatlar</li>
      </ul>

      <h3>Bursa Bölgesi</h3>
      <p>Bursa'nın tüm ilçelerine hizmet veriyoruz. Organize sanayi bölgeleri ve şehir merkezi arasında düzenli taşımacılık yapıyoruz.</p>
    `,
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070",
    date: "2024-03-07",
    author: "Nakliyat Ekibi",
    category: "Rotalar"
  },
  {
    slug: "istanbul-balikesir-nakliyat",
    title: "İstanbul - Balıkesir Nakliyat",
    description: "İstanbul - Balıkesir arası profesyonel nakliyat",
    content: `
      <h2>İstanbul - Balıkesir Güvenli Nakliyat</h2>
      <p>İstanbul ve Balıkesir arasında güvenli ve hızlı nakliyat hizmeti sunuyoruz. Bandırma, Edremit, Ayvalık gibi tüm ilçelere hizmet veriyoruz.</p>

      <h3>Hizmet Kapsamı</h3>
      <ul>
        <li>Düzenli seferler</li>
        <li>Tüm ilçelere teslimat</li>
        <li>Yaz-kış kesintisiz hizmet</li>
        <li>Tatil bölgelerine özel hizmet</li>
      </ul>

      <h3>Balıkesir ve Çevresi</h3>
      <p>Balıkesir'in tüm ilçelerine ve tatil bölgelerine özel nakliyat hizmeti sunuyoruz. Yaz sezonunda artan talepler için ek seferler düzenliyoruz.</p>
    `,
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2070",
    date: "2024-03-06",
    author: "Nakliyat Ekibi",
    category: "Rotalar"
  },
  {
    slug: "istanbul-canakkale-nakliyat",
    title: "İstanbul - Çanakkale Nakliyat",
    description: "İstanbul - Çanakkale arası özel nakliyat çözümleri",
    content: `
      <h2>İstanbul - Çanakkale Özel Nakliyat</h2>
      <p>İstanbul ve Çanakkale arasında özel nakliyat çözümleri sunuyoruz. Gelibolu, Biga, Çan gibi tüm ilçelere hizmet veriyoruz.</p>

      <h3>Nakliyat Hizmetleri</h3>
      <ul>
        <li>Haftalık düzenli seferler</li>
        <li>Özel eşya taşıma</li>
        <li>Yaz sezonu ek seferler</li>
        <li>Adalar dahil tüm bölgeler</li>
      </ul>

      <h3>Çanakkale Bölgesi</h3>
      <p>Çanakkale'nin tarihi ve turistik bölgelerine özel nakliyat hizmeti sunuyoruz. Bozcaada ve Gökçeada'ya da düzenli seferler düzenliyoruz.</p>
    `,
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070",
    date: "2024-03-05",
    author: "Nakliyat Ekibi",
    category: "Rotalar"
  },
  {
    slug: "istanbul-manisa-nakliyat",
    title: "İstanbul - Manisa Nakliyat",
    description: "İstanbul - Manisa arası profesyonel nakliyat hizmeti",
    content: `
      <h2>İstanbul - Manisa Profesyonel Nakliyat</h2>
      <p>İstanbul ve Manisa arasında profesyonel nakliyat hizmeti sunuyoruz. Organize sanayi bölgeleri ve şehir merkezi arasında düzenli taşımacılık yapıyoruz.</p>

      <h3>Hizmet Detayları</h3>
      <ul>
        <li>Düzenli seferler</li>
        <li>Sanayi taşımacılığı</li>
        <li>Ev eşyası taşıma</li>
        <li>Parsiyel yük taşıma</li>
      </ul>

      <h3>Manisa ve Çevresi</h3>
      <p>Manisa'nın tüm ilçelerine ve organize sanayi bölgelerine özel nakliyat hizmeti sunuyoruz. İzmir'e yakınlık avantajıyla hızlı teslimat yapıyoruz.</p>
    `,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070",
    date: "2024-03-04",
    author: "Nakliyat Ekibi",
    category: "Rotalar"
  },
  {
    slug: "izmir-istanbul-nakliyat",
    title: "İzmir - İstanbul Nakliyat",
    description: "İzmir - İstanbul arası güvenli ve hızlı nakliyat hizmeti",
    content: `
      <h2>İzmir - İstanbul Arası Profesyonel Nakliyat</h2>
      <p>İzmir ve İstanbul arasında düzenli nakliyat hizmeti sunuyoruz. Her gün karşılıklı seferlerimizle eşyalarınızı güvenle taşıyoruz.</p>

      <h3>Güzergah Bilgisi</h3>
      <ul>
        <li>İzmir - Balıkesir - Bursa - İstanbul</li>
        <li>Günlük karşılıklı seferler</li>
        <li>Ara noktalara teslimat</li>
        <li>Express taşıma seçeneği</li>
      </ul>

      <h3>Hizmet Bölgelerimiz</h3>
      <p>İzmir ve İstanbul'un tüm ilçelerine hizmet veriyoruz. Güzergah üzerindeki Balıkesir, Bursa gibi şehirlere de teslimat yapıyoruz.</p>
    `,
    image: "https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?q=80&w=2070",
    date: "2024-03-15",
    author: "Nakliyat Ekibi",
    category: "Rotalar"
  },
  {
    slug: "antalya-istanbul-nakliyat",
    title: "Antalya - İstanbul Nakliyat",
    description: "Antalya - İstanbul arası güvenli ve konforlu nakliyat",
    content: `
      <h2>Antalya - İstanbul Arası Güvenli Nakliyat</h2>
      <p>Antalya ve İstanbul arasında düzenli ve güvenli nakliyat hizmeti sunuyoruz. Modern araç filomuz ve deneyimli ekibimizle eşyalarınızı özenle taşıyoruz.</p>

      <h3>Hizmet Detayları</h3>
      <ul>
        <li>Haftalık düzenli seferler</li>
        <li>Parsiyel taşıma imkanı</li>
        <li>Sigortalı taşımacılık</li>
        <li>Online takip sistemi</li>
      </ul>

      <h3>Güzergah ve Teslimat</h3>
      <p>Antalya'dan İstanbul'a uzanan güzergahta ara noktalara da teslimat yapıyoruz. Kapıdan kapıya hizmet sunuyoruz.</p>
    `,
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3",
    date: "2024-03-15",
    author: "Nakliyat Ekibi",
    category: "Rotalar"
  },
  {
    slug: "bodrum-istanbul-nakliyat",
    title: "Bodrum - İstanbul Nakliyat",
    description: "Bodrum - İstanbul arası özel nakliyat hizmeti",
    content: `
      <h2>Bodrum - İstanbul Özel Nakliyat</h2>
      <p>Bodrum ve İstanbul arasında özel nakliyat hizmeti sunuyoruz. Yaz-kış demeden düzenli seferlerimizle eşyalarınızı güvenle taşıyoruz.</p>

      <h3>Nakliyat Hizmetlerimiz</h3>
      <ul>
        <li>Ev eşyası taşıma</li>
        <li>Yazlık eşya taşıma</li>
        <li>Parça eşya taşıma</li>
        <li>Sezonluk eşya depolama</li>
      </ul>

      <h3>Bodrum ve Çevresi</h3>
      <p>Bodrum'dan İstanbul'un tüm ilçelerine hizmet veriyoruz. Muğla'nın diğer turistik bölgelerinden de nakliyat hizmeti sunuyoruz.</p>
    `,
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59",
    date: "2024-03-15",
    author: "Nakliyat Ekibi",
    category: "Rotalar"
  },
  {
    slug: "bursa-istanbul-nakliyat",
    title: "Bursa - İstanbul Nakliyat",
    description: "Bursa - İstanbul arası hızlı ve güvenli nakliyat",
    content: `
      <h2>Bursa - İstanbul Arası Düzenli Nakliyat</h2>
      <p>Bursa ve İstanbul arasında her gün düzenli nakliyat seferleri düzenliyoruz. Yakın mesafe avantajıyla aynı gün teslimat imkanı sunuyoruz.</p>

      <h3>Hizmet Özellikleri</h3>
      <ul>
        <li>Günlük karşılıklı seferler</li>
        <li>Aynı gün teslimat</li>
        <li>Ekspres taşıma</li>
        <li>Ekonomik fiyatlar</li>
      </ul>

      <h3>Bursa Bölgesi</h3>
      <p>Bursa'nın tüm ilçelerinden İstanbul'a hizmet veriyoruz. Organize sanayi bölgeleri ve şehir merkezi arasında düzenli taşımacılık yapıyoruz.</p>
    `,
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070",
    date: "2024-03-15",
    author: "Nakliyat Ekibi",
    category: "Rotalar"
  },
  {
    slug: "balikesir-istanbul-nakliyat",
    title: "Balıkesir - İstanbul Nakliyat",
    description: "Balıkesir - İstanbul arası profesyonel nakliyat",
    content: `
      <h2>Balıkesir - İstanbul Güvenli Nakliyat</h2>
      <p>Balıkesir ve İstanbul arasında güvenli ve hızlı nakliyat hizmeti sunuyoruz. Bandırma, Edremit, Ayvalık gibi tüm ilçelerden hizmet veriyoruz.</p>

      <h3>Hizmet Kapsamı</h3>
      <ul>
        <li>Düzenli seferler</li>
        <li>Tüm ilçelerden teslimat</li>
        <li>Yaz-kış kesintisiz hizmet</li>
        <li>Tatil bölgelerinden özel hizmet</li>
      </ul>

      <h3>Balıkesir ve Çevresi</h3>
      <p>Balıkesir'in tüm ilçelerinden ve tatil bölgelerinden özel nakliyat hizmeti sunuyoruz. Yaz sezonunda artan talepler için ek seferler düzenliyoruz.</p>
    `,
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2070",
    date: "2024-03-15",
    author: "Nakliyat Ekibi",
    category: "Rotalar"
  },
  {
    slug: "canakkale-istanbul-nakliyat",
    title: "Çanakkale - İstanbul Nakliyat",
    description: "Çanakkale - İstanbul arası özel nakliyat çözümleri",
    content: `
      <h2>Çanakkale - İstanbul Özel Nakliyat</h2>
      <p>Çanakkale ve İstanbul arasında özel nakliyat çözümleri sunuyoruz. Gelibolu, Biga, Çan gibi tüm ilçelerden hizmet veriyoruz.</p>

      <h3>Nakliyat Hizmetleri</h3>
      <ul>
        <li>Haftalık düzenli seferler</li>
        <li>Özel eşya taşıma</li>
        <li>Yaz sezonu ek seferler</li>
        <li>Adalar dahil tüm bölgeler</li>
      </ul>

      <h3>Çanakkale Bölgesi</h3>
      <p>Çanakkale'nin tarihi ve turistik bölgelerinden özel nakliyat hizmeti sunuyoruz. Bozcaada ve Gökçeada'dan da düzenli seferler düzenliyoruz.</p>
    `,
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070",
    date: "2024-03-15",
    author: "Nakliyat Ekibi",
    category: "Rotalar"
  },
  {
    slug: "manisa-istanbul-nakliyat",
    title: "Manisa - İstanbul Nakliyat",
    description: "Manisa - İstanbul arası profesyonel nakliyat hizmeti",
    content: `
      <h2>Manisa - İstanbul Profesyonel Nakliyat</h2>
      <p>Manisa ve İstanbul arasında profesyonel nakliyat hizmeti sunuyoruz. Organize sanayi bölgeleri ve şehir merkezi arasında düzenli taşımacılık yapıyoruz.</p>

      <h3>Hizmet Detayları</h3>
      <ul>
        <li>Düzenli seferler</li>
        <li>Sanayi taşımacılığı</li>
        <li>Ev eşyası taşıma</li>
        <li>Parsiyel yük taşıma</li>
      </ul>

      <h3>Manisa ve Çevresi</h3>
      <p>Manisa'nın tüm ilçelerine ve organize sanayi bölgelerine özel nakliyat hizmeti sunuyoruz. İzmir'e yakınlık avantajıyla hızlı teslimat yapıyoruz.</p>
    `,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070",
    date: "2024-03-15",
    author: "Nakliyat Ekibi",
    category: "Rotalar"
  },
  {
    slug: "istanbul-izmir-ambar",
    title: "İstanbul - İzmir Ambar Hizmetleri",
    description: "İstanbul - İzmir arası düzenli ambar ve depolama hizmetleri",
    content: `
      <h2>İstanbul - İzmir Ambar Hizmetleri</h2>
      <p>İstanbul ve İzmir arasında düzenli ambar hizmetleri sunuyoruz. Modern ve güvenli depolama tesislerimizle eşyalarınız güvende.</p>

      <h3>Ambar Hizmetlerimiz</h3>
      <ul>
        <li>Günlük karşılıklı sevkiyat</li>
        <li>Klimatik kontrollü depolama</li>
        <li>7/24 güvenlik sistemi</li>
        <li>Profesyonel paketleme</li>
        <li>Sigortalı depolama</li>
      </ul>

      <h3>Neden Bizi Tercih Etmelisiniz?</h3>
      <p>20 yılı aşkın tecrübemiz ve profesyonel ekibimizle, İstanbul - İzmir hattında güvenilir ambar hizmeti sunuyoruz. Modern depolama tesislerimiz ve gelişmiş güvenlik sistemlerimizle eşyalarınız daima güvende.</p>
    `,
    image: "https://images.unsplash.com/photo-1577705998148-6da4f3963bc8",
    date: "2024-03-20",
    author: "Nakliyat Ekibi",
    category: "Hizmetler"
  },
  {
    slug: "izmir-istanbul-ambar",
    title: "İzmir - İstanbul Ambar Hizmetleri",
    description: "İzmir - İstanbul arası düzenli ambar ve depolama hizmetleri",
    content: `
      <h2>İzmir - İstanbul Ambar Hizmetleri</h2>
      <p>İzmir ve İstanbul arasında düzenli ambar hizmetleri sunuyoruz. Modern ve güvenli depolama tesislerimizle eşyalarınız güvende.</p>

      <h3>Ambar Hizmetlerimiz</h3>
      <ul>
        <li>Günlük karşılıklı sevkiyat</li>
        <li>Klimatik kontrollü depolama</li>
        <li>7/24 güvenlik sistemi</li>
        <li>Profesyonel paketleme</li>
        <li>Sigortalı depolama</li>
      </ul>

      <h3>Neden Bizi Tercih Etmelisiniz?</h3>
      <p>20 yılı aşkın tecrübemiz ve profesyonel ekibimizle, İzmir - İstanbul hattında güvenilir ambar hizmeti sunuyoruz. Modern depolama tesislerimiz ve gelişmiş güvenlik sistemlerimizle eşyalarınız daima güvende.</p>
    `,
    image: "https://images.unsplash.com/photo-1577705998148-6da4f3963bc8",
    date: "2024-03-20",
    author: "Nakliyat Ekibi",
    category: "Hizmetler"
  },
  {
    slug: "istanbul-izmir-parca-tasima",
    title: "İstanbul - İzmir Parça Eşya Taşıma",
    description: "İstanbul - İzmir arası parça eşya ve koli taşıma hizmeti",
    content: `
      <h2>İstanbul - İzmir Parça Eşya Taşıma</h2>
      <p>İstanbul ve İzmir arasında parça eşya ve koli taşıma hizmeti sunuyoruz. Tek parça veya birkaç parça eşyanızı güvenle taşıyoruz.</p>

      <h3>Parça Taşıma Avantajları</h3>
      <ul>
        <li>Ekonomik fiyatlar</li>
        <li>Hızlı teslimat</li>
        <li>Özel paketleme</li>
        <li>Sigortalı taşıma</li>
        <li>Kapıdan kapıya hizmet</li>
      </ul>

      <h3>Neleri Taşıyoruz?</h3>
      <p>Beyaz eşya, mobilya, elektronik eşya, antika, sanat eseri ve benzeri her türlü parça eşyanızı özenle taşıyoruz. İstanbul - İzmir hattında düzenli seferlerimizle hızlı teslimat yapıyoruz.</p>
    `,
    image: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b",
    date: "2024-03-20",
    author: "Nakliyat Ekibi",
    category: "Hizmetler"
  },
  {
    slug: "izmir-istanbul-parca-tasima",
    title: "İzmir - İstanbul Parça Eşya Taşıma",
    description: "İzmir - İstanbul arası parça eşya ve koli taşıma hizmeti",
    content: `
      <h2>İzmir - İstanbul Parça Eşya Taşıma</h2>
      <p>İzmir ve İstanbul arasında parça eşya ve koli taşıma hizmeti sunuyoruz. Tek parça veya birkaç parça eşyanızı güvenle taşıyoruz.</p>

      <h3>Parça Taşıma Avantajları</h3>
      <ul>
        <li>Ekonomik fiyatlar</li>
        <li>Hızlı teslimat</li>
        <li>Özel paketleme</li>
        <li>Sigortalı taşıma</li>
        <li>Kapıdan kapıya hizmet</li>
      </ul>

      <h3>Neleri Taşıyoruz?</h3>
      <p>Beyaz eşya, mobilya, elektronik eşya, antika, sanat eseri ve benzeri her türlü parça eşyanızı özenle taşıyoruz. İzmir - İstanbul hattında düzenli seferlerimizle hızlı teslimat yapıyoruz.</p>
    `,
    image: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b",
    date: "2024-03-20",
    author: "Nakliyat Ekibi",
    category: "Hizmetler"
  },
  {
    slug: "istanbul-antalya-ambar",
    title: "İstanbul - Antalya Ambar Hizmetleri",
    description: "İstanbul - Antalya arası düzenli ambar ve depolama hizmetleri",
    content: `
      <h2>İstanbul - Antalya Ambar Hizmetleri</h2>
      <p>İstanbul ve Antalya arasında düzenli ambar hizmetleri sunuyoruz. Modern ve güvenli depolama tesislerimizle eşyalarınız güvende.</p>

      <h3>Ambar Hizmetlerimiz</h3>
      <ul>
        <li>Günlük karşılıklı sevkiyat</li>
        <li>Klimatik kontrollü depolama</li>
        <li>7/24 güvenlik sistemi</li>
        <li>Profesyonel paketleme</li>
        <li>Sigortalı depolama</li>
      </ul>
    `,
    image: "https://images.unsplash.com/photo-1577705998148-6da4f3963bc8",
    date: "2024-03-20",
    author: "Nakliyat Ekibi",
    category: "Hizmetler"
  },
  {
    slug: "antalya-istanbul-ambar",
    title: "Antalya - İstanbul Ambar Hizmetleri",
    description: "Antalya - İstanbul arası düzenli ambar ve depolama hizmetleri",
    content: `
      <h2>Antalya - İstanbul Ambar Hizmetleri</h2>
      <p>Antalya ve İstanbul arasında düzenli ambar hizmetleri sunuyoruz. Modern ve güvenli depolama tesislerimizle eşyalarınız güvende.</p>

      <h3>Ambar Hizmetlerimiz</h3>
      <ul>
        <li>Günlük karşılıklı sevkiyat</li>
        <li>Klimatik kontrollü depolama</li>
        <li>7/24 güvenlik sistemi</li>
        <li>Profesyonel paketleme</li>
        <li>Sigortalı depolama</li>
      </ul>
    `,
    image: "https://images.unsplash.com/photo-1577705998148-6da4f3963bc8",
    date: "2024-03-20",
    author: "Nakliyat Ekibi",
    category: "Hizmetler"
  },
  {
    slug: "istanbul-bodrum-ambar",
    title: "İstanbul - Bodrum Ambar Hizmetleri",
    description: "İstanbul - Bodrum arası düzenli ambar ve depolama hizmetleri",
    content: `
      <h2>İstanbul - Bodrum Ambar Hizmetleri</h2>
      <p>İstanbul ve Bodrum arasında düzenli ambar hizmetleri sunuyoruz. Modern ve güvenli depolama tesislerimizle eşyalarınız güvende.</p>

      <h3>Ambar Hizmetlerimiz</h3>
      <ul>
        <li>Günlük karşılıklı sevkiyat</li>
        <li>Klimatik kontrollü depolama</li>
        <li>7/24 güvenlik sistemi</li>
        <li>Profesyonel paketleme</li>
        <li>Sigortalı depolama</li>
      </ul>
    `,
    image: "https://images.unsplash.com/photo-1577705998148-6da4f3963bc8",
    date: "2024-03-20",
    author: "Nakliyat Ekibi",
    category: "Hizmetler"
  },
  {
    slug: "bodrum-istanbul-ambar",
    title: "Bodrum - İstanbul Ambar Hizmetleri",
    description: "Bodrum - İstanbul arası düzenli ambar ve depolama hizmetleri",
    content: `
      <h2>Bodrum - İstanbul Ambar Hizmetleri</h2>
      <p>Bodrum ve İstanbul arasında düzenli ambar hizmetleri sunuyoruz. Modern ve güvenli depolama tesislerimizle eşyalarınız güvende.</p>

      <h3>Ambar Hizmetlerimiz</h3>
      <ul>
        <li>Günlük karşılıklı sevkiyat</li>
        <li>Klimatik kontrollü depolama</li>
        <li>7/24 güvenlik sistemi</li>
        <li>Profesyonel paketleme</li>
        <li>Sigortalı depolama</li>
      </ul>
    `,
    image: "https://images.unsplash.com/photo-1577705998148-6da4f3963bc8",
    date: "2024-03-20",
    author: "Nakliyat Ekibi",
    category: "Hizmetler"
  },
  {
    slug: "istanbul-antalya-parca-tasima",
    title: "İstanbul - Antalya Parça Eşya Taşıma",
    description: "İstanbul - Antalya arası parça eşya ve koli taşıma hizmeti",
    content: `
      <h2>İstanbul - Antalya Parça Eşya Taşıma</h2>
      <p>İstanbul ve Antalya arasında parça eşya ve koli taşıma hizmeti sunuyoruz. Tek parça veya birkaç parça eşyanızı güvenle taşıyoruz.</p>

      <h3>Parça Taşıma Avantajları</h3>
      <ul>
        <li>Ekonomik fiyatlar</li>
        <li>Hızlı teslimat</li>
        <li>Özel paketleme</li>
        <li>Sigortalı taşıma</li>
        <li>Kapıdan kapıya hizmet</li>
      </ul>
    `,
    image: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b",
    date: "2024-03-20",
    author: "Nakliyat Ekibi",
    category: "Hizmetler"
  },
  {
    slug: "antalya-istanbul-parca-tasima",
    title: "Antalya - İstanbul Parça Eşya Taşıma",
    description: "Antalya - İstanbul arası parça eşya ve koli taşıma hizmeti",
    content: `
      <h2>Antalya - İstanbul Parça Eşya Taşıma</h2>
      <p>Antalya ve İstanbul arasında parça eşya ve koli taşıma hizmeti sunuyoruz. Tek parça veya birkaç parça eşyanızı güvenle taşıyoruz.</p>

      <h3>Parça Taşıma Avantajları</h3>
      <ul>
        <li>Ekonomik fiyatlar</li>
        <li>Hızlı teslimat</li>
        <li>Özel paketleme</li>
        <li>Sigortalı taşıma</li>
        <li>Kapıdan kapıya hizmet</li>
      </ul>
    `,
    image: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b",
    date: "2024-03-20",
    author: "Nakliyat Ekibi",
    category: "Hizmetler"
  },
  {
    slug: "istanbul-bodrum-parca-tasima",
    title: "İstanbul - Bodrum Parça Eşya Taşıma",
    description: "İstanbul - Bodrum arası parça eşya ve koli taşıma hizmeti",
    content: `
      <h2>İstanbul - Bodrum Parça Eşya Taşıma</h2>
      <p>İstanbul ve Bodrum arasında parça eşya ve koli taşıma hizmeti sunuyoruz. Tek parça veya birkaç parça eşyanızı güvenle taşıyoruz.</p>

      <h3>Parça Taşıma Avantajları</h3>
      <ul>
        <li>Ekonomik fiyatlar</li>
        <li>Hızlı teslimat</li>
        <li>Özel paketleme</li>
        <li>Sigortalı taşıma</li>
        <li>Kapıdan kapıya hizmet</li>
      </ul>
    `,
    image: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b",
    date: "2024-03-20",
    author: "Nakliyat Ekibi",
    category: "Hizmetler"
  },
  {
    slug: "bodrum-istanbul-parca-tasima",
    title: "Bodrum - İstanbul Parça Eşya Taşıma",
    description: "Bodrum - İstanbul arası parça eşya ve koli taşıma hizmeti",
    content: `
      <h2>Bodrum - İstanbul Parça Eşya Taşıma</h2>
      <p>Bodrum ve İstanbul arasında parça eşya ve koli taşıma hizmeti sunuyoruz. Tek parça veya birkaç parça eşyanızı güvenle taşıyoruz.</p>

      <h3>Parça Taşıma Avantajları</h3>
      <ul>
        <li>Ekonomik fiyatlar</li>
        <li>Hızlı teslimat</li>
        <li>Özel paketleme</li>
        <li>Sigortalı taşıma</li>
        <li>Kapıdan kapıya hizmet</li>
      </ul>
    `,
    image: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b",
    date: "2024-03-20",
    author: "Nakliyat Ekibi",
    category: "Hizmetler"
  }
];

export default function Blog() {
  const categories = ["Hizmetler", "Rotalar"];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px]">
        <Image
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070"
          alt="Blog Hero"
          fill
          className="object-cover brightness-[0.3]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
          <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Blog</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
              Nakliyat hizmetlerimiz ve rotalarımız hakkında detaylı bilgiler
            </p>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <div className="container mx-auto px-4 -mt-8 mb-16 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-4 flex justify-center gap-4 flex-wrap">
          <button className="px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold transition-all hover:bg-blue-700 hover:shadow-lg">
            Tüm Yazılar
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className="px-8 py-4 rounded-xl text-gray-600 font-semibold hover:bg-gray-100 transition-all hover:shadow-lg"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="relative h-56">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                    {post.date && (
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString('tr-TR', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                      </div>
                    )}
                    {post.author && (
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span>{post.author}</span>
                      </div>
                    )}
                  </div>
                  <h2 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 line-clamp-3 mb-6">
                    {post.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                    <span>Devamını Oku</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-12 text-white text-center transform hover:scale-[1.02] transition-all duration-300">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Profesyonel Nakliyat Hizmeti Almak İster misiniz?
          </h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Hemen bizimle iletişime geçin, size en uygun çözümü sunalım
          </p>
          <Link
            href="/iletisim"
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all hover:shadow-lg"
          >
            İletişime Geçin
          </Link>
        </div>
      </section>
    </div>
  );
} 