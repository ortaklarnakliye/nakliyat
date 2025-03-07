import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Şehirlerarası Nakliyat ve Ambar Hizmetleri | Profesyonel Taşımacılık",
  description: "İstanbul, İzmir, Antalya, Bodrum ve tüm Türkiye&apos;ye şehirlerarası nakliyat, ambar, parça eşya taşıma ve depolama hizmetleri. 20 yıllık tecrübe ve profesyonel ekip.",
  keywords: "şehirlerarası nakliyat, istanbul izmir nakliyat, istanbul antalya nakliyat, istanbul bodrum nakliyat, ambar hizmetleri, parça eşya taşıma, evden eve nakliyat, depolama",
  alternates: {
    canonical: "https://sehirlerarasinakliyat.vip"
  },
  openGraph: {
    title: "Şehirlerarası Nakliyat ve Ambar Hizmetleri",
    description: "Türkiye&apos;nin her yerine profesyonel nakliyat ve taşımacılık hizmetleri",
    url: "https://sehirlerarasinakliyat.vip",
    siteName: "Şehirlerarası Nakliyat",
    locale: "tr_TR",
    type: "website"
  }
};

export default function Home() {
  const hizmetler = [
    {
      title: "Ambar Hizmetleri",
      description: "Güvenli ve organize ambar hizmetlerimizle eşyalarınız güvende.",
      link: "/blog/ambar-hizmetleri",
      icon: "🏭"
    },
    {
      title: "Nakliye Hizmetleri",
      description: "Profesyonel nakliye çözümleriyle Türkiye&apos;nin her yerine hizmet.",
      link: "/blog/nakliye-hizmetleri",
      icon: "🚛"
    },
    {
      title: "Parça Taşımacılık",
      description: "Tek parça eşyalarınız için özel taşıma çözümleri.",
      link: "/blog/parca-tasimacilik",
      icon: "📦"
    },
    {
      title: "Parsiyel Taşıma",
      description: "Ekonomik ve hızlı parsiyel taşıma hizmetleri.",
      link: "/blog/parsiyel-tasima",
      icon: "🚚"
    },
    {
      title: "Evden Eve Taşıma",
      description: "Ev eşyalarınız için profesyonel taşıma ve paketleme hizmeti.",
      link: "/blog/evden-eve-tasima",
      icon: "🏠"
    },
    {
      title: "Paletli Taşımacılık",
      description: "Endüstriyel ürünleriniz için paletli taşıma çözümleri.",
      link: "/blog/paletli-tasimacilik",
      icon: "🏗️"
    }
  ];

  const rotalar = [
    {
      title: "İstanbul - İzmir Nakliyat",
      description: "İstanbul - İzmir arası güvenli ve hızlı nakliyat hizmeti",
      link: "/blog/istanbul-izmir-nakliyat",
      icon: "🚛"
    },
    {
      title: "İzmir - İstanbul Nakliyat",
      description: "İzmir - İstanbul arası güvenli ve hızlı nakliyat hizmeti",
      link: "/blog/izmir-istanbul-nakliyat",
      icon: "🚛"
    },
    {
      title: "İstanbul - Antalya Nakliyat",
      description: "İstanbul - Antalya arası güvenli ve konforlu nakliyat",
      link: "/blog/istanbul-antalya-nakliyat",
      icon: "🚛"
    },
    {
      title: "Antalya - İstanbul Nakliyat",
      description: "Antalya - İstanbul arası güvenli ve konforlu nakliyat",
      link: "/blog/antalya-istanbul-nakliyat",
      icon: "🚛"
    },
    {
      title: "İstanbul - Bodrum Nakliyat",
      description: "İstanbul - Bodrum arası özel nakliyat hizmeti",
      link: "/blog/istanbul-bodrum-nakliyat",
      icon: "🚛"
    },
    {
      title: "Bodrum - İstanbul Nakliyat",
      description: "Bodrum - İstanbul arası özel nakliyat hizmeti",
      link: "/blog/bodrum-istanbul-nakliyat",
      icon: "🚛"
    },
    {
      title: "İstanbul - Bursa Nakliyat",
      description: "İstanbul - Bursa arası hızlı ve güvenli nakliyat",
      link: "/blog/istanbul-bursa-nakliyat",
      icon: "🚛"
    },
    {
      title: "Bursa - İstanbul Nakliyat",
      description: "Bursa - İstanbul arası hızlı ve güvenli nakliyat",
      link: "/blog/bursa-istanbul-nakliyat",
      icon: "🚛"
    },
    {
      title: "İstanbul - Balıkesir Nakliyat",
      description: "İstanbul - Balıkesir arası profesyonel nakliyat",
      link: "/blog/istanbul-balikesir-nakliyat",
      icon: "🚛"
    },
    {
      title: "Balıkesir - İstanbul Nakliyat",
      description: "Balıkesir - İstanbul arası profesyonel nakliyat",
      link: "/blog/balikesir-istanbul-nakliyat",
      icon: "🚛"
    },
    {
      title: "İstanbul - Çanakkale Nakliyat",
      description: "İstanbul - Çanakkale arası özel nakliyat çözümleri",
      link: "/blog/istanbul-canakkale-nakliyat",
      icon: "🚛"
    },
    {
      title: "Çanakkale - İstanbul Nakliyat",
      description: "Çanakkale - İstanbul arası özel nakliyat çözümleri",
      link: "/blog/canakkale-istanbul-nakliyat",
      icon: "🚛"
    },
    {
      title: "İstanbul - Manisa Nakliyat",
      description: "İstanbul - Manisa arası profesyonel nakliyat hizmeti",
      link: "/blog/istanbul-manisa-nakliyat",
      icon: "🚛"
    },
    {
      title: "Manisa - İstanbul Nakliyat",
      description: "Manisa - İstanbul arası profesyonel nakliyat hizmeti",
      link: "/blog/manisa-istanbul-nakliyat",
      icon: "🚛"
    },
    {
      title: "İstanbul - İzmir Ambar",
      description: "İstanbul - İzmir arası düzenli ambar ve depolama hizmetleri",
      link: "/blog/istanbul-izmir-ambar",
      icon: "🏭"
    },
    {
      title: "İzmir - İstanbul Ambar",
      description: "İzmir - İstanbul arası düzenli ambar ve depolama hizmetleri",
      link: "/blog/izmir-istanbul-ambar",
      icon: "🏭"
    },
    {
      title: "İstanbul - İzmir Parça Taşıma",
      description: "İstanbul - İzmir arası parça eşya ve koli taşıma hizmeti",
      link: "/blog/istanbul-izmir-parca-tasima",
      icon: "📦"
    },
    {
      title: "İzmir - İstanbul Parça Taşıma",
      description: "İzmir - İstanbul arası parça eşya ve koli taşıma hizmeti",
      link: "/blog/izmir-istanbul-parca-tasima",
      icon: "📦"
    },
    {
      title: "İstanbul - Antalya Ambar",
      description: "İstanbul - Antalya arası düzenli ambar ve depolama hizmetleri",
      link: "/blog/istanbul-antalya-ambar",
      icon: "🏭"
    },
    {
      title: "Antalya - İstanbul Ambar",
      description: "Antalya - İstanbul arası düzenli ambar ve depolama hizmetleri",
      link: "/blog/antalya-istanbul-ambar",
      icon: "🏭"
    },
    {
      title: "İstanbul - Bodrum Ambar",
      description: "İstanbul - Bodrum arası düzenli ambar ve depolama hizmetleri",
      link: "/blog/istanbul-bodrum-ambar",
      icon: "🏭"
    },
    {
      title: "Bodrum - İstanbul Ambar",
      description: "Bodrum - İstanbul arası düzenli ambar ve depolama hizmetleri",
      link: "/blog/bodrum-istanbul-ambar",
      icon: "🏭"
    },
    {
      title: "İstanbul - Antalya Parça Taşıma",
      description: "İstanbul - Antalya arası parça eşya ve koli taşıma hizmeti",
      link: "/blog/istanbul-antalya-parca-tasima",
      icon: "📦"
    },
    {
      title: "Antalya - İstanbul Parça Taşıma",
      description: "Antalya - İstanbul arası parça eşya ve koli taşıma hizmeti",
      link: "/blog/antalya-istanbul-parca-tasima",
      icon: "📦"
    },
    {
      title: "İstanbul - Bodrum Parça Taşıma",
      description: "İstanbul - Bodrum arası parça eşya ve koli taşıma hizmeti",
      link: "/blog/istanbul-bodrum-parca-tasima",
      icon: "📦"
    },
    {
      title: "Bodrum - İstanbul Parça Taşıma",
      description: "Bodrum - İstanbul arası parça eşya ve koli taşıma hizmeti",
      link: "/blog/bodrum-istanbul-parca-tasima",
      icon: "📦"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[700px]">
        <Image
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070"
          alt="Nakliyat Hero"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent">
          <div className="container mx-auto px-4 h-full flex flex-col items-start justify-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight max-w-3xl">
              Güvenli ve Profesyonel Şehirler Arası Nakliyat
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Türkiye&apos;nin her noktasına güvenilir, hızlı ve profesyonel nakliyat hizmeti
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/iletisim"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 hover:shadow-lg"
              >
                Hemen Teklif Alın
              </Link>
              <Link
                href="/blog"
                className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 hover:shadow-lg"
              >
                Hizmetlerimiz
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hizmetler Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Hizmetlerimiz</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Profesyonel ekibimiz ve modern araç filomuzla tüm nakliyat ihtiyaçlarınız için yanınızdayız
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hizmetler.map((hizmet, index) => (
              <Link href={hizmet.link} key={index}>
                <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 p-8 group hover:-translate-y-2">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{hizmet.icon}</div>
                  <h3 className="text-2xl font-semibold mb-3">{hizmet.title}</h3>
                  <p className="text-gray-600">{hizmet.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Rotalar Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Rotalarımız</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Türkiye&apos;nin dört bir yanına düzenli seferlerimizle hizmetinizdeyiz
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rotalar.map((rota, index) => (
              <Link href={rota.link} key={index}>
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 p-8 border border-blue-100 hover:-translate-y-2">
                  <h3 className="text-2xl font-semibold mb-3">{rota.title}</h3>
                  <p className="text-gray-600">{rota.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Neden Biz Section */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Neden Bizi Seçmelisiniz?</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            20 yılı aşkın tecrübemizle fark yaratan hizmet anlayışımız
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">🌟</div>
              <h3 className="text-2xl font-semibold mb-3">Profesyonel Hizmet</h3>
              <p className="text-gray-600">20 yılı aşkın tecrübemizle profesyonel nakliyat hizmeti sunuyoruz.</p>
            </div>
            <div className="text-center group">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">🚛</div>
              <h3 className="text-2xl font-semibold mb-3">Modern Araç Filosu</h3>
              <p className="text-gray-600">Modern ve bakımlı araç filomuzla güvenli taşımacılık yapıyoruz.</p>
            </div>
            <div className="text-center group">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">🛡️</div>
              <h3 className="text-2xl font-semibold mb-3">Sigortalı Taşımacılık</h3>
              <p className="text-gray-600">Tüm eşyalarınız sigorta güvencesi altında taşınır.</p>
            </div>
          </div>
          <p className="text-gray-600 mb-4">
            Türkiye&apos;nin önde gelen şehirlerarası nakliyat firması olarak, güvenilir ve profesyonel hizmet sunuyoruz.
          </p>
          <p className="text-gray-600">
            Eşyalarınızın güvenliği bizim için önemlidir. Modern araç filomuz ve uzman ekibimizle hizmetinizdeyiz.
          </p>
        </div>
      </section>
    </main>
  );
}
