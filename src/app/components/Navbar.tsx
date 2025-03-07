import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Ortaklar Nakliyat
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
              Ana Sayfa
            </Link>
            <Link href="/hizmetler" className="text-gray-600 hover:text-blue-600 transition-colors">
              Hizmetler
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">
              Blog
            </Link>
            <Link href="/hakkimizda" className="text-gray-600 hover:text-blue-600 transition-colors">
              Hakkımızda
            </Link>
            <Link href="/iletisim" className="text-gray-600 hover:text-blue-600 transition-colors">
              İletişim
            </Link>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="tel:+905456564020"
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
            >
              <span className="mr-2">📞</span>
              <span>0545 656 40 20</span>
            </Link>
            <Link
              href="/iletisim"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Teklif Al
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-600 hover:text-blue-600 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Hidden by default) */}
      <div className="hidden md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            href="/"
            className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            Ana Sayfa
          </Link>
          <Link
            href="/hizmetler"
            className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            Hizmetler
          </Link>
          <Link
            href="/blog"
            className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/hakkimizda"
            className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            Hakkımızda
          </Link>
          <Link
            href="/iletisim"
            className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            İletişim
          </Link>
          <Link
            href="tel:+905456564020"
            className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            📞 0545 656 40 20
          </Link>
        </div>
      </div>
    </nav>
  );
} 