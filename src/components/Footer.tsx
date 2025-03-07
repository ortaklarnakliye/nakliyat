import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Nakliyat</h3>
            <p className="text-gray-400">
              Güvenilir ve hızlı şehirler arası nakliyat hizmeti ile eşyalarınızı güvenle taşıyoruz.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/hizmetler" className="text-gray-400 hover:text-white transition-colors">
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="text-gray-400 hover:text-white transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-gray-400 hover:text-white transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">İletişim</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Adres: İstanbul, Türkiye</li>
              <li>Telefon: +90 (555) 123 45 67</li>
              <li>E-posta: info@nakliyat.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Çalışma Saatleri</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Pazartesi - Cuma: 09:00 - 18:00</li>
              <li>Cumartesi: 09:00 - 14:00</li>
              <li>Pazar: Kapalı</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Nakliyat. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
} 