import Image from "next/image";
import Link from "next/link";

export default function Iletisim() {
  const hizmetBolgeleri = [
    { il: "İstanbul", lat: 41.0082, lng: 28.9784 },
    { il: "İzmir", lat: 38.4237, lng: 27.1428 },
    { il: "Antalya", lat: 36.8969, lng: 30.7133 },
    { il: "Bodrum", lat: 37.0344, lng: 27.4305 },
    { il: "Bursa", lat: 40.1885, lng: 29.0610 },
    { il: "Balıkesir", lat: 39.6484, lng: 27.8826 },
    { il: "Çanakkale", lat: 40.1553, lng: 26.4142 },
    { il: "Manisa", lat: 38.6191, lng: 27.4289 }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070"
          alt="İletişim Hero"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent">
          <div className="container mx-auto px-4 h-full flex flex-col items-start justify-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">İletişim</h1>
            <p className="text-xl md:text-2xl max-w-2xl">
              7/24 kesintisiz hizmet için bize ulaşın
            </p>
          </div>
        </div>
      </section>

      {/* İletişim Bilgileri */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">İletişim Bilgileri</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">📞</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Telefon</h3>
                    <p className="text-gray-600">
                      <Link href="tel:+905456564020" className="hover:text-blue-600">0545 656 40 20</Link>
                    </p>
                    <p className="text-gray-600">
                      <Link href="tel:+905457696165" className="hover:text-blue-600">0545 769 61 65</Link>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-3xl">🕒</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Çalışma Saatleri</h3>
                    <p className="text-gray-600">7/24 Kesintisiz Hizmet</p>
                    <p className="text-gray-600">Her Zaman Açık</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-3xl">📍</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Hizmet Bölgelerimiz</h3>
                    <p className="text-gray-600">
                      İstanbul, İzmir, Antalya, Bodrum, Bursa, Balıkesir, Çanakkale, Manisa ve çevre iller
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Hizmet Bölgelerimiz</h2>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {hizmetBolgeleri.map((bolge, index) => (
                    <div key={index} className="text-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                      <div className="text-3xl mb-2">🚛</div>
                      <h3 className="font-semibold text-lg">{bolge.il}</h3>
                      <p className="text-sm text-gray-600">7/24 Hizmet</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center text-gray-600">
                  <p>Ve çevre illere düzenli seferlerimiz bulunmaktadır.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Profesyonel Nakliyat Hizmeti
            </h2>
            <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
              Güvenli ve profesyonel nakliyat hizmeti için hemen arayın
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="tel:+905456564020"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all"
              >
                0545 656 40 20
              </Link>
              <Link
                href="tel:+905457696165"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all"
              >
                0545 769 61 65
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed İletişim Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.1)] p-4 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-4">
            <Link
              href="tel:+905456564020"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all"
            >
              <span className="text-xl">📞</span>
              <span>Hemen Ara</span>
            </Link>
            <Link
              href="https://wa.me/905456564020"
              target="_blank"
              className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-all"
            >
              <span className="text-xl">💬</span>
              <span>WhatsApp</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 