import Link from "next/link";
import { FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-24">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Kurumsal */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kurumsal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/hakkimizda" className="text-gray-400 hover:text-white transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-gray-400 hover:text-white transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Hizmetler */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hizmetler</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog/ambar-hizmetleri" className="text-gray-400 hover:text-white transition-colors">
                  Ambar Hizmetleri
                </Link>
              </li>
              <li>
                <Link href="/blog/parca-tasimacilik" className="text-gray-400 hover:text-white transition-colors">
                  Parça Taşımacılık
                </Link>
              </li>
              <li>
                <Link href="/blog/parsiyel-tasima" className="text-gray-400 hover:text-white transition-colors">
                  Parsiyel Taşıma
                </Link>
              </li>
              <li>
                <Link href="/blog/evden-eve-tasima" className="text-gray-400 hover:text-white transition-colors">
                  Evden Eve Taşıma
                </Link>
              </li>
              <li>
                <Link href="/blog/paletli-tasimacilik" className="text-gray-400 hover:text-white transition-colors">
                  Paletli Taşımacılık
                </Link>
              </li>
            </ul>
          </div>

          {/* Rotalar */}
          <div>
            <h3 className="text-xl font-bold mb-4">Rotalar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog/istanbul-izmir-nakliyat" className="text-gray-400 hover:text-white transition-colors">
                  İstanbul - İzmir
                </Link>
              </li>
              <li>
                <Link href="/blog/izmir-istanbul-nakliyat" className="text-gray-400 hover:text-white transition-colors">
                  İzmir - İstanbul
                </Link>
              </li>
              <li>
                <Link href="/blog/istanbul-antalya-nakliyat" className="text-gray-400 hover:text-white transition-colors">
                  İstanbul - Antalya
                </Link>
              </li>
              <li>
                <Link href="/blog/antalya-istanbul-nakliyat" className="text-gray-400 hover:text-white transition-colors">
                  Antalya - İstanbul
                </Link>
              </li>
              <li>
                <Link href="/blog/istanbul-bodrum-nakliyat" className="text-gray-400 hover:text-white transition-colors">
                  İstanbul - Bodrum
                </Link>
              </li>
              <li>
                <Link href="/blog/bodrum-istanbul-nakliyat" className="text-gray-400 hover:text-white transition-colors">
                  Bodrum - İstanbul
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-xl font-bold mb-4">İletişim</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <FaPhone className="text-gray-400" />
                <Link href="tel:+905456564020" className="text-gray-400 hover:text-white transition-colors">
                  0545 656 40 20
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone className="text-gray-400" />
                <Link href="tel:+905457696165" className="text-gray-400 hover:text-white transition-colors">
                  0545 769 61 65
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-gray-400" />
                <Link href="mailto:ortaklarkargovekurye@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  ortaklarkargovekurye@gmail.com
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <FaClock className="text-gray-400" />
                <span className="text-gray-400">7/24 Kesintisiz Hizmet</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Ortaklar Nakliyat. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
} 