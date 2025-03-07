import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ortaklar Nakliyat - Şehirlerarası Nakliyat ve Ambar Hizmetleri",
  description: "İstanbul, İzmir, Antalya, Bodrum ve tüm Türkiye'ye güvenilir şehirlerarası nakliyat, ambar, parça eşya taşıma ve depolama hizmetleri. 20 yıllık tecrübe, profesyonel ekip.",
  keywords: "şehirlerarası nakliyat, istanbul izmir nakliyat, ambar, parça eşya taşıma, evden eve nakliyat, depolama, istanbul antalya nakliyat, istanbul bodrum nakliyat",
  authors: [{ name: "Ortaklar Nakliyat" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://sehirlerarasinakliyat.vip"
  },
  openGraph: {
    title: "Ortaklar Nakliyat - Şehirlerarası Nakliyat ve Ambar Hizmetleri",
    description: "İstanbul, İzmir, Antalya, Bodrum ve tüm Türkiye'ye güvenilir şehirlerarası nakliyat, ambar, parça eşya taşıma ve depolama hizmetleri.",
    url: "https://sehirlerarasinakliyat.vip",
    siteName: "Ortaklar Nakliyat",
    locale: "tr_TR",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        {/* Fixed İletişim Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.1)] p-4 z-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-center gap-4">
              <Link
                href="tel:+905456564020"
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all"
              >
                <FaPhone className="text-xl" />
                <span>Hemen Ara</span>
              </Link>
              <Link
                href="https://wa.me/905456564020"
                target="_blank"
                className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-all"
              >
                <FaWhatsapp className="text-xl" />
                <span>WhatsApp</span>
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
