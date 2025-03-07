import Image from "next/image";

export default function Hakkimizda() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] mb-16">
        <Image
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070"
          alt="Hakkımızda Hero"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent">
          <div className="container mx-auto px-4 h-full flex flex-col items-start justify-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Hakkımızda</h1>
            <p className="text-xl max-w-2xl">
              20 yılı aşkın tecrübemizle Türkiye&apos;nin güvenilir nakliyat firması
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?q=80&w=2070"
              alt="Ofisimiz"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Biz Kimiz?</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              2000 yılından bu yana, şehirler arası nakliyat sektöründe güvenilir ve profesyonel hizmet sunuyoruz. Modern araç filomuz ve uzman ekibimizle, müşterilerimizin tüm nakliyat ihtiyaçlarını en yüksek kalitede karşılıyoruz.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Türkiye&apos;nin dört bir yanına düzenli seferler düzenliyor, parsiyel taşımacılıktan evden eve nakliyata, kurumsal taşımacılıktan depolama hizmetlerine kadar geniş bir yelpazede çözümler sunuyoruz.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">20+</div>
                <div className="text-sm text-gray-600">Yıllık Tecrübe</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Araç Filosu</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">10K+</div>
                <div className="text-sm text-gray-600">Mutlu Müşteri</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold mb-4">Misyonumuz</h3>
            <p className="text-gray-600 leading-relaxed">
              Müşterilerimize en kaliteli, güvenilir ve ekonomik nakliyat hizmetini sunmak. Modern teknolojiler ve profesyonel ekibimizle sektörde öncü olmaya devam etmek.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">👁️</div>
            <h3 className="text-2xl font-bold mb-4">Vizyonumuz</h3>
            <p className="text-gray-600 leading-relaxed">
              Türkiye&apos;nin en güvenilir ve tercih edilen nakliyat firması olmak. Sürekli gelişen hizmet kalitemizle müşteri memnuniyetini en üst düzeyde tutmak.
            </p>
          </div>
        </div>

        {/* Values */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Değerlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">🤝</div>
              <h3 className="text-xl font-semibold mb-3">Güvenilirlik</h3>
              <p className="text-gray-600">
                Müşterilerimizin güvenini en değerli varlığımız olarak görüyoruz.
              </p>
            </div>
            <div className="text-center group">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Hız</h3>
              <p className="text-gray-600">
                Zamanında ve hızlı teslimat için sürekli çalışıyoruz.
              </p>
            </div>
            <div className="text-center group">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">⭐</div>
              <h3 className="text-xl font-semibold mb-3">Kalite</h3>
              <p className="text-gray-600">
                Her işimizde en yüksek kalite standartlarını hedefliyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
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