import React from 'react';
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nakliyat Hizmetlerimiz | Şehirlerarası Nakliyat",
  description: "Şehirlerarası nakliyat, ambar hizmetleri, parça eşya taşıma, evden eve nakliyat, parsiyel taşıma ve paletli taşımacılık hizmetlerimiz. Profesyonel ve güvenilir çözümler.",
  keywords: "şehirlerarası nakliyat, ambar hizmetleri, parça eşya taşıma, evden eve nakliyat, parsiyel taşıma, paletli taşımacılık, depolama hizmetleri, istanbul izmir nakliyat, istanbul antalya nakliyat",
  alternates: {
    canonical: "https://sehirlerarasinakliyat.vip/hizmetler"
  },
  openGraph: {
    title: "Nakliyat Hizmetlerimiz | Şehirlerarası Nakliyat",
    description: "Profesyonel nakliyat ve taşımacılık hizmetlerimiz hakkında detaylı bilgi alın",
    url: "https://sehirlerarasinakliyat.vip/hizmetler",
    type: "website"
  }
};

interface Service {
  title: string;
  description: string;
  image: string;
  link: string;
  icon: string;
}

export default function Hizmetler() {
  const services: Service[] = [
    {
      title: "Ambar Hizmetleri",
      description: "Güvenli ve organize depolama çözümleri",
      image: "https://images.unsplash.com/photo-1577705998148-6da4f3963bc8",
      link: "/blog/ambar-hizmetleri",
      icon: "🏭"
    },
    {
      title: "Nakliye Hizmetleri",
      description: "Şehirlerarası profesyonel nakliyat",
      image: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b",
      link: "/blog/nakliye-hizmetleri",
      icon: "🚛"
    },
    {
      title: "Parça Taşımacılık",
      description: "Tek parça eşya taşıma hizmeti",
      image: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b",
      link: "/blog/parca-tasimacilik",
      icon: "📦"
    },
    {
      title: "Parsiyel Taşıma",
      description: "Ekonomik parsiyel taşıma çözümleri",
      image: "https://images.unsplash.com/photo-1616432043562-3671ea2e5242",
      link: "/blog/parsiyel-tasima",
      icon: "🚚"
    },
    {
      title: "Evden Eve Taşıma",
      description: "Profesyonel evden eve nakliyat",
      image: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b",
      link: "/blog/evden-eve-tasima",
      icon: "🏠"
    },
    {
      title: "Paletli Taşımacılık",
      description: "Endüstriyel ürünler için paletli taşıma",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866",
      link: "/blog/paletli-tasimacilik",
      icon: "📦"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] mb-16">
        <Image
          src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b"
          alt="Hizmetler Hero"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent">
          <div className="container mx-auto px-4 h-full flex flex-col items-start justify-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Hizmetlerimiz</h1>
            <p className="text-xl max-w-2xl">
              Profesyonel ekibimiz ve modern araç filomuzla tüm nakliyat ihtiyaçlarınız için yanınızdayız
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group-hover:-translate-y-2">
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{service.icon}</span>
                    <h3 className="text-2xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 mt-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Profesyonel Nakliyat Hizmeti Almak İster misiniz?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Hemen bizimle iletişime geçin, size en uygun çözümü sunalım
          </p>
          <a
            href="/iletisim"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            İletişime Geçin
          </a>
        </div>
      </section>
    </div>
  );
} 