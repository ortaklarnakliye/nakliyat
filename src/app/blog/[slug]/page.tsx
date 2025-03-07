import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: {
    slug: string;
  };
}

// Blog içerikleri
const blogContents: { [key: string]: { 
  title: string;
  description: string;
  content: string[];
  image: string;
  relatedLinks: { title: string; slug: string; }[];
} } = {
  'istanbul-izmir-nakliyat': {
    title: 'İstanbul İzmir Nakliyat Hizmeti',
    description: 'İstanbul İzmir arası profesyonel nakliyat ve taşımacılık hizmetleri. Güvenli, hızlı ve ekonomik çözümler.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d',
    content: [
      'İstanbul İzmir nakliyat hizmetimiz, iki büyük şehir arasında güvenli ve profesyonel taşımacılık çözümleri sunmaktadır.',
      'Deneyimli ekibimiz ve modern araç filomuzla eşyalarınızınızı özenle taşıyoruz.',
      'Düzenli seferlerimizle haftanın her günü hizmet vermekteyiz.',
      'Eşyalarınız sigortalı olarak taşınmaktadır.',
      'Paketleme ve ambalajlama hizmetleri profesyonel ekibimiz tarafından yapılmaktadır.',
      'İstanbul ve İzmir\'de geniş depolama alanlarımız mevcuttur.'
    ],
    relatedLinks: [
      { title: 'İstanbul İzmir Ambar', slug: 'istanbul-izmir-ambar' },
      { title: 'İstanbul İzmir Parça Taşıma', slug: 'istanbul-izmir-parca-tasima' },
      { title: 'İzmir İstanbul Nakliyat', slug: 'izmir-istanbul-nakliyat' }
    ]
  },
  'istanbul-antalya-nakliyat': {
    title: 'İstanbul Antalya Nakliyat Hizmeti',
    description: 'İstanbul Antalya arası güvenli ve profesyonel nakliyat hizmetleri. Hızlı ve ekonomik taşımacılık.',
    image: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b',
    content: [
      'İstanbul Antalya nakliyat hizmetimiz, iki şehir arasında güvenli ve profesyonel taşımacılık çözümleri sunar.',
      'Düzenli seferlerle hızlı teslimat',
      'Sigortalı taşımacılık garantisi',
      'Profesyonel paketleme ve ambalajlama',
      'Eşyalarınızın güvenli taşınması için özel ekipman',
      'Her türlü eşya için uygun taşıma çözümleri',
      'İstanbul ve Antalya\'da depolama imkanı'
    ],
    relatedLinks: [
      { title: 'İstanbul Antalya Ambar', slug: 'istanbul-antalya-ambar' },
      { title: 'İstanbul Antalya Parça Taşıma', slug: 'istanbul-antalya-parca-tasima' },
      { title: 'Antalya İstanbul Nakliyat', slug: 'antalya-istanbul-nakliyat' }
    ]
  },
  'istanbul-bodrum-nakliyat': {
    title: 'İstanbul Bodrum Nakliyat Hizmeti',
    description: 'İstanbul Bodrum arası özel nakliyat çözümleri. Güvenli ve profesyonel taşımacılık.',
    image: 'https://images.unsplash.com/photo-1616432043562-3671ea2e5242',
    content: [
      'İstanbul Bodrum nakliyat hizmetimiz, eşyalarınızın güvenli bir şekilde taşınmasını sağlar.',
      'Özel paketleme ve ambalajlama hizmeti',
      'Deneyimli personel ve modern araç filosu',
      'Sigortalı taşımacılık',
      'Düzenli sefer planlaması',
      'Bodrum\'da depolama imkanı',
      'Her türlü eşya için uygun taşıma çözümleri'
    ],
    relatedLinks: [
      { title: 'İstanbul Bodrum Ambar', slug: 'istanbul-bodrum-ambar' },
      { title: 'İstanbul Bodrum Parça Taşıma', slug: 'istanbul-bodrum-parca-tasima' },
      { title: 'Bodrum İstanbul Nakliyat', slug: 'bodrum-istanbul-nakliyat' }
    ]
  },
  'evden-eve-tasima': {
    title: 'Evden Eve Taşıma Hizmeti',
    description: 'Profesyonel evden eve nakliyat hizmeti. Eşyalarınız sigortalı ve güvende.',
    image: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b',
    content: [
      'Evden eve taşıma hizmetimiz, eşyalarınızın güvenli bir şekilde yeni adresinize ulaştırılmasını sağlar.',
      'Profesyonel paketleme ve ambalajlama hizmeti',
      'Demontaj ve montaj hizmetleri',
      'Asansörlü taşıma imkanı',
      'Sigortalı taşımacılık',
      'Uzman nakliye ekibi',
      'Şehir içi ve şehirlerarası evden eve nakliyat'
    ],
    relatedLinks: [
      { title: 'Şehirlerarası Evden Eve', slug: 'sehirlerarasi-evden-eve' },
      { title: 'Parsiyel Taşıma', slug: 'parsiyel-tasima' },
      { title: 'Nakliye Hizmetleri', slug: 'nakliye-hizmetleri' }
    ]
  },
  'parsiyel-tasima': {
    title: 'Parsiyel Taşıma Hizmeti',
    description: 'Ekonomik ve hızlı parsiyel taşıma çözümleri. Az miktarda eşyanız için ideal.',
    image: 'https://images.unsplash.com/photo-1616432043562-3671ea2e5242',
    content: [
      'Parsiyel taşıma hizmetimiz, az miktardaki eşyalarınızın ekonomik ve hızlı bir şekilde taşınmasını sağlar.',
      'Düzenli sefer planlaması ile hızlı teslimat',
      'Uygun fiyatlı taşıma seçenekleri',
      'Profesyonel paketleme hizmeti',
      'Online takip sistemi',
      'Sigortalı taşımacılık',
      'Şehirlerarası parsiyel taşıma imkanı'
    ],
    relatedLinks: [
      { title: 'Parça Taşımacılık', slug: 'parca-tasimacilik' },
      { title: 'Ambar Hizmetleri', slug: 'ambar-hizmetleri' },
      { title: 'Nakliye Hizmetleri', slug: 'nakliye-hizmetleri' }
    ]
  },
  'ambar-hizmetleri': {
    title: 'Ambar Hizmetleri',
    description: 'Güvenli ve organize ambar hizmetleri. Eşyalarınız profesyonel depolama alanlarımızda.',
    image: 'https://images.unsplash.com/photo-1577705998148-6da4f3963bc8',
    content: [
      'Ambar hizmetlerimiz, eşyalarınızın güvenli bir şekilde depolanmasını ve taşınmasını sağlar.',
      'Modern ve güvenli depolama alanları',
      'Profesyonel paketleme ve ambalajlama',
      'Düzenli sevkiyat hizmeti',
      'Online stok takip sistemi',
      'Sigortalı depolama',
      'Şehirlerarası ambar hizmetleri'
    ],
    relatedLinks: [
      { title: 'İstanbul İzmir Ambar', slug: 'istanbul-izmir-ambar' },
      { title: 'İstanbul Antalya Ambar', slug: 'istanbul-antalya-ambar' },
      { title: 'Parsiyel Taşıma', slug: 'parsiyel-tasima' }
    ]
  },
  'nakliye-hizmetleri': {
    title: 'Nakliye Hizmetleri',
    description: 'Profesyonel nakliye ve taşımacılık çözümleri. Türkiye\'nin her yerine güvenli taşıma.',
    image: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b',
    content: [
      'Nakliye hizmetlerimiz, her türlü eşyanızın güvenli bir şekilde taşınmasını sağlar.',
      'Şehirlerarası nakliyat hizmetleri',
      'Evden eve nakliyat',
      'Parsiyel taşıma',
      'Ambar hizmetleri',
      'Paletli taşımacılık',
      'Sigortalı taşımacılık',
      'Profesyonel ekip ve modern araç filosu'
    ],
    relatedLinks: [
      { title: 'Evden Eve Taşıma', slug: 'evden-eve-tasima' },
      { title: 'Parsiyel Taşıma', slug: 'parsiyel-tasima' },
      { title: 'Ambar Hizmetleri', slug: 'ambar-hizmetleri' }
    ]
  },
  'istanbul-izmir-ambar': {
    title: 'İstanbul İzmir Ambar Hizmeti',
    description: 'İstanbul İzmir arası düzenli ambar ve depolama hizmetleri. Güvenli ve ekonomik çözümler.',
    image: 'https://images.unsplash.com/photo-1577705998148-6da4f3963bc8',
    content: [
      'İstanbul İzmir ambar hizmetimiz, iki şehir arasında düzenli sevkiyat ve depolama imkanı sunar.',
      'Modern ve güvenli depolama alanları',
      'Düzenli sevkiyat planlaması',
      'Online stok ve sevkiyat takibi',
      'Profesyonel paketleme hizmeti',
      'Sigortalı depolama ve taşıma',
      'Her türlü eşya için uygun depolama çözümleri'
    ],
    relatedLinks: [
      { title: 'İstanbul İzmir Nakliyat', slug: 'istanbul-izmir-nakliyat' },
      { title: 'İstanbul İzmir Parça Taşıma', slug: 'istanbul-izmir-parca-tasima' },
      { title: 'Ambar Hizmetleri', slug: 'ambar-hizmetleri' }
    ]
  },
  'izmir-istanbul-nakliyat': {
    title: 'İzmir İstanbul Nakliyat Hizmeti',
    description: 'İzmir İstanbul arası profesyonel nakliyat hizmetleri. Güvenli ve hızlı taşımacılık.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d',
    content: [
      'İzmir İstanbul nakliyat hizmetimiz ile eşyalarınız güvenle taşınır.',
      'Profesyonel ekip ve modern araç filosu',
      'Düzenli sefer planlaması',
      'Sigortalı taşımacılık garantisi',
      'Özel paketleme ve ambalajlama hizmeti',
      'Her türlü eşya için uygun taşıma çözümleri',
      'İzmir ve İstanbul\'da depolama imkanı'
    ],
    relatedLinks: [
      { title: 'İzmir İstanbul Ambar', slug: 'izmir-istanbul-ambar' },
      { title: 'İzmir İstanbul Parça Taşıma', slug: 'izmir-istanbul-parca-tasima' },
      { title: 'İstanbul İzmir Nakliyat', slug: 'istanbul-izmir-nakliyat' }
    ]
  },
  'antalya-istanbul-nakliyat': {
    title: 'Antalya İstanbul Nakliyat Hizmeti',
    description: 'Antalya İstanbul arası güvenli ve profesyonel nakliyat hizmetleri.',
    image: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b',
    content: [
      'Antalya İstanbul nakliyat hizmetimiz ile eşyalarınız özenle taşınır.',
      'Deneyimli ekip ve modern araçlar',
      'Düzenli sefer planlaması',
      'Sigortalı taşımacılık',
      'Profesyonel paketleme hizmeti',
      'Her türlü eşya için uygun çözümler',
      'Antalya ve İstanbul\'da depolama imkanı'
    ],
    relatedLinks: [
      { title: 'Antalya İstanbul Ambar', slug: 'antalya-istanbul-ambar' },
      { title: 'Antalya İstanbul Parça Taşıma', slug: 'antalya-istanbul-parca-tasima' },
      { title: 'İstanbul Antalya Nakliyat', slug: 'istanbul-antalya-nakliyat' }
    ]
  },
  'bodrum-istanbul-nakliyat': {
    title: 'Bodrum İstanbul Nakliyat Hizmeti',
    description: 'Bodrum İstanbul arası özel nakliyat çözümleri. Güvenli ve profesyonel taşımacılık.',
    image: 'https://images.unsplash.com/photo-1616432043562-3671ea2e5242',
    content: [
      'Bodrum İstanbul nakliyat hizmetimiz ile eşyalarınız güvenle yeni adresine ulaşır.',
      'Uzman ekip ve modern araç filosu',
      'Düzenli sefer planlaması',
      'Sigortalı taşımacılık',
      'Özel paketleme hizmeti',
      'Her türlü eşya için uygun çözümler',
      'Bodrum ve İstanbul\'da depolama imkanı'
    ],
    relatedLinks: [
      { title: 'Bodrum İstanbul Ambar', slug: 'bodrum-istanbul-ambar' },
      { title: 'Bodrum İstanbul Parça Taşıma', slug: 'bodrum-istanbul-parca-tasima' },
      { title: 'İstanbul Bodrum Nakliyat', slug: 'istanbul-bodrum-nakliyat' }
    ]
  },
  'istanbul-manisa-nakliyat': {
    title: 'İstanbul Manisa Nakliyat Hizmeti',
    description: 'İstanbul Manisa arası profesyonel nakliyat hizmetleri. Güvenli ve ekonomik taşımacılık.',
    image: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b',
    content: [
      'İstanbul Manisa nakliyat hizmetimiz ile eşyalarınız güvenle taşınır.',
      'Profesyonel ekip ve modern araçlar',
      'Düzenli sefer planlaması',
      'Sigortalı taşımacılık',
      'Özel paketleme hizmeti',
      'Her türlü eşya için uygun çözümler',
      'İstanbul ve Manisa\'da depolama imkanı'
    ],
    relatedLinks: [
      { title: 'İstanbul İzmir Nakliyat', slug: 'istanbul-izmir-nakliyat' },
      { title: 'Parsiyel Taşıma', slug: 'parsiyel-tasima' },
      { title: 'Evden Eve Taşıma', slug: 'evden-eve-tasima' }
    ]
  },
  'manisa-istanbul-nakliyat': {
    title: 'Manisa İstanbul Nakliyat Hizmeti',
    description: 'Manisa İstanbul arası profesyonel nakliyat hizmetleri. Güvenli ve ekonomik taşımacılık.',
    image: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b',
    content: [
      'Manisa İstanbul nakliyat hizmetimiz ile eşyalarınız güvenle taşınır.',
      'Deneyimli ekip ve modern araç filosu',
      'Düzenli sefer planlaması',
      'Sigortalı taşımacılık',
      'Profesyonel paketleme hizmeti',
      'Her türlü eşya için uygun çözümler',
      'Manisa ve İstanbul\'da depolama imkanı'
    ],
    relatedLinks: [
      { title: 'İstanbul Manisa Nakliyat', slug: 'istanbul-manisa-nakliyat' },
      { title: 'Parsiyel Taşıma', slug: 'parsiyel-tasima' },
      { title: 'Evden Eve Taşıma', slug: 'evden-eve-tasima' }
    ]
  },
  'istanbul-bursa-nakliyat': {
    title: 'İstanbul Bursa Nakliyat Hizmeti',
    description: 'İstanbul Bursa arası hızlı ve güvenli nakliyat hizmetleri. Profesyonel taşımacılık.',
    image: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b',
    content: [
      'İstanbul Bursa nakliyat hizmetimiz ile eşyalarınız güvenle taşınır.',
      'Uzman ekip ve modern araçlar',
      'Günlük seferler',
      'Sigortalı taşımacılık',
      'Özel paketleme hizmeti',
      'Her türlü eşya için uygun çözümler',
      'İstanbul ve Bursa\'da depolama imkanı'
    ],
    relatedLinks: [
      { title: 'Bursa İstanbul Nakliyat', slug: 'bursa-istanbul-nakliyat' },
      { title: 'Parsiyel Taşıma', slug: 'parsiyel-tasima' },
      { title: 'Evden Eve Taşıma', slug: 'evden-eve-tasima' }
    ]
  },
  'bursa-istanbul-nakliyat': {
    title: 'Bursa İstanbul Nakliyat Hizmeti',
    description: 'Bursa İstanbul arası hızlı ve güvenli nakliyat hizmetleri. Profesyonel taşımacılık.',
    image: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b',
    content: [
      'Bursa İstanbul nakliyat hizmetimiz ile eşyalarınız güvenle taşınır.',
      'Profesyonel ekip ve modern araç filosu',
      'Günlük seferler',
      'Sigortalı taşımacılık',
      'Özel paketleme hizmeti',
      'Her türlü eşya için uygun çözümler',
      'Bursa ve İstanbul\'da depolama imkanı'
    ],
    relatedLinks: [
      { title: 'İstanbul Bursa Nakliyat', slug: 'istanbul-bursa-nakliyat' },
      { title: 'Parsiyel Taşıma', slug: 'parsiyel-tasima' },
      { title: 'Evden Eve Taşıma', slug: 'evden-eve-tasima' }
    ]
  },
  'istanbul-balikesir-nakliyat': {
    title: 'İstanbul Balıkesir Nakliyat Hizmeti',
    description: 'İstanbul Balıkesir arası profesyonel nakliyat hizmetleri. Güvenli ve ekonomik taşımacılık.',
    image: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b',
    content: [
      'İstanbul Balıkesir nakliyat hizmetimiz ile eşyalarınız güvenle taşınır.',
      'Deneyimli ekip ve modern araçlar',
      'Düzenli sefer planlaması',
      'Sigortalı taşımacılık',
      'Profesyonel paketleme hizmeti',
      'Her türlü eşya için uygun çözümler',
      'İstanbul ve Balıkesir\'de depolama imkanı'
    ],
    relatedLinks: [
      { title: 'Balıkesir İstanbul Nakliyat', slug: 'balikesir-istanbul-nakliyat' },
      { title: 'Parsiyel Taşıma', slug: 'parsiyel-tasima' },
      { title: 'Evden Eve Taşıma', slug: 'evden-eve-tasima' }
    ]
  },
  'balikesir-istanbul-nakliyat': {
    title: 'Balıkesir İstanbul Nakliyat Hizmeti',
    description: 'Balıkesir İstanbul arası profesyonel nakliyat hizmetleri. Güvenli ve ekonomik taşımacılık.',
    image: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b',
    content: [
      'Balıkesir İstanbul nakliyat hizmetimiz ile eşyalarınız güvenle taşınır.',
      'Uzman ekip ve modern araç filosu',
      'Düzenli sefer planlaması',
      'Sigortalı taşımacılık',
      'Özel paketleme hizmeti',
      'Her türlü eşya için uygun çözümler',
      'Balıkesir ve İstanbul\'da depolama imkanı'
    ],
    relatedLinks: [
      { title: 'İstanbul Balıkesir Nakliyat', slug: 'istanbul-balikesir-nakliyat' },
      { title: 'Parsiyel Taşıma', slug: 'parsiyel-tasima' },
      { title: 'Evden Eve Taşıma', slug: 'evden-eve-tasima' }
    ]
  },
  'istanbul-canakkale-nakliyat': {
    title: 'İstanbul Çanakkale Nakliyat Hizmeti',
    description: 'İstanbul Çanakkale arası özel nakliyat çözümleri. Güvenli ve profesyonel taşımacılık.',
    image: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b',
    content: [
      'İstanbul Çanakkale nakliyat hizmetimiz ile eşyalarınız güvenle taşınır.',
      'Profesyonel ekip ve modern araçlar',
      'Düzenli sefer planlaması',
      'Sigortalı taşımacılık',
      'Özel paketleme hizmeti',
      'Her türlü eşya için uygun çözümler',
      'İstanbul ve Çanakkale\'de depolama imkanı'
    ],
    relatedLinks: [
      { title: 'Çanakkale İstanbul Nakliyat', slug: 'canakkale-istanbul-nakliyat' },
      { title: 'Parsiyel Taşıma', slug: 'parsiyel-tasima' },
      { title: 'Evden Eve Taşıma', slug: 'evden-eve-tasima' }
    ]
  },
  'canakkale-istanbul-nakliyat': {
    title: 'Çanakkale İstanbul Nakliyat Hizmeti',
    description: 'Çanakkale İstanbul arası özel nakliyat çözümleri. Güvenli ve profesyonel taşımacılık.',
    image: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b',
    content: [
      'Çanakkale İstanbul nakliyat hizmetimiz ile eşyalarınız güvenle taşınır.',
      'Deneyimli ekip ve modern araç filosu',
      'Düzenli sefer planlaması',
      'Sigortalı taşımacılık',
      'Profesyonel paketleme hizmeti',
      'Her türlü eşya için uygun çözümler',
      'Çanakkale ve İstanbul\'da depolama imkanı'
    ],
    relatedLinks: [
      { title: 'İstanbul Çanakkale Nakliyat', slug: 'istanbul-canakkale-nakliyat' },
      { title: 'Parsiyel Taşıma', slug: 'parsiyel-tasima' },
      { title: 'Evden Eve Taşıma', slug: 'evden-eve-tasima' }
    ]
  },
  'sehirlerarasi-nakliyat': {
    title: 'Şehirlerarası Nakliyat Hizmetleri',
    description: 'Türkiye\'nin her noktasına profesyonel şehirlerarası nakliyat hizmetleri.',
    image: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b',
    content: [
      'Şehirlerarası nakliyat hizmetlerimiz ile eşyalarınız Türkiye\'nin her yerine güvenle taşınır.',
      'Profesyonel ekip ve modern araç filosu',
      'Tüm şehirlere düzenli seferler',
      'Sigortalı taşımacılık',
      'Özel paketleme hizmeti',
      'Her türlü eşya için uygun çözümler',
      'Şehirlerarası depolama imkanı'
    ],
    relatedLinks: [
      { title: 'Evden Eve Taşıma', slug: 'evden-eve-tasima' },
      { title: 'Parsiyel Taşıma', slug: 'parsiyel-tasima' },
      { title: 'Ambar Hizmetleri', slug: 'ambar-hizmetleri' }
    ]
  },
  'sehirlerarasi-tasima': {
    title: 'Şehirlerarası Taşıma Hizmetleri',
    description: 'Güvenli ve ekonomik şehirlerarası taşıma çözümleri.',
    image: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b',
    content: [
      'Şehirlerarası taşıma hizmetlerimiz ile her türlü eşyanız güvenle taşınır.',
      'Uzman ekip ve modern araç filosu',
      'Düzenli sefer planlaması',
      'Sigortalı taşımacılık',
      'Profesyonel paketleme hizmeti',
      'Her türlü eşya için uygun çözümler',
      'Şehirlerarası depolama imkanı'
    ],
    relatedLinks: [
      { title: 'Şehirlerarası Nakliyat', slug: 'sehirlerarasi-nakliyat' },
      { title: 'Parsiyel Taşıma', slug: 'parsiyel-tasima' },
      { title: 'Evden Eve Taşıma', slug: 'evden-eve-tasima' }
    ]
  },
  'sehirlerarasi-evden-eve': {
    title: 'Şehirlerarası Evden Eve Nakliyat',
    description: 'Şehirlerarası profesyonel evden eve nakliyat hizmetleri.',
    image: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b',
    content: [
      'Şehirlerarası evden eve nakliyat hizmetimiz ile eşyalarınız yeni evinize güvenle taşınır.',
      'Profesyonel paketleme ve ambalajlama',
      'Demontaj ve montaj hizmetleri',
      'Asansörlü taşıma imkanı',
      'Sigortalı taşımacılık',
      'Uzman nakliye ekibi',
      'Şehirlerarası depolama çözümleri'
    ],
    relatedLinks: [
      { title: 'Evden Eve Taşıma', slug: 'evden-eve-tasima' },
      { title: 'Şehirlerarası Nakliyat', slug: 'sehirlerarasi-nakliyat' },
      { title: 'Parsiyel Taşıma', slug: 'parsiyel-tasima' }
    ]
  },
  'sehirlerarasi-parsiyel': {
    title: 'Şehirlerarası Parsiyel Taşıma',
    description: 'Ekonomik şehirlerarası parsiyel taşıma hizmetleri.',
    image: 'https://images.unsplash.com/photo-1616432043562-3671ea2e5242',
    content: [
      'Şehirlerarası parsiyel taşıma hizmetimiz ile az miktardaki eşyalarınız ekonomik şekilde taşınır.',
      'Düzenli sefer planlaması',
      'Uygun fiyatlı taşıma seçenekleri',
      'Profesyonel paketleme hizmeti',
      'Online takip sistemi',
      'Sigortalı taşımacılık',
      'Tüm şehirlere parsiyel taşıma imkanı'
    ],
    relatedLinks: [
      { title: 'Parsiyel Taşıma', slug: 'parsiyel-tasima' },
      { title: 'Şehirlerarası Nakliyat', slug: 'sehirlerarasi-nakliyat' },
      { title: 'Ambar Hizmetleri', slug: 'ambar-hizmetleri' }
    ]
  },
  'parca-tasimacilik': {
    title: 'Parça Taşımacılık Hizmetleri',
    description: 'Profesyonel parça eşya taşıma hizmetleri. Tek parça eşyalarınız için ideal çözüm.',
    image: 'https://images.unsplash.com/photo-1616432043562-3671ea2e5242',
    content: [
      'Parça taşımacılık hizmetimiz ile tek parça eşyalarınız güvenle taşınır.',
      'Hızlı teslimat',
      'Ekonomik taşıma seçenekleri',
      'Profesyonel paketleme',
      'Online takip sistemi',
      'Sigortalı taşımacılık',
      'Tüm şehirlere parça eşya taşıma'
    ],
    relatedLinks: [
      { title: 'Parsiyel Taşıma', slug: 'parsiyel-tasima' },
      { title: 'Ambar Hizmetleri', slug: 'ambar-hizmetleri' },
      { title: 'Nakliye Hizmetleri', slug: 'nakliye-hizmetleri' }
    ]
  },
  'paletli-tasimacilik': {
    title: 'Paletli Taşımacılık Hizmetleri',
    description: 'Profesyonel paletli taşımacılık çözümleri. Endüstriyel ürünleriniz için güvenli taşıma.',
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866',
    content: [
      'Paletli taşımacılık hizmetimiz ile endüstriyel ürünleriniz güvenle taşınır.',
      'Forklift ve transpalet hizmeti',
      'Profesyonel paletleme',
      'Özel ambalajlama',
      'Sigortalı taşımacılık',
      'Online takip sistemi',
      'Tüm şehirlere paletli taşıma'
    ],
    relatedLinks: [
      { title: 'Parsiyel Taşıma', slug: 'parsiyel-tasima' },
      { title: 'Ambar Hizmetleri', slug: 'ambar-hizmetleri' },
      { title: 'Nakliye Hizmetleri', slug: 'nakliye-hizmetleri' }
    ]
  },
  'istanbul-antalya-ambar': {
    title: 'İstanbul Antalya Ambar Hizmeti',
    description: 'İstanbul Antalya arası düzenli ambar ve depolama hizmetleri. Güvenli ve ekonomik çözümler.',
    image: 'https://images.unsplash.com/photo-1577705998148-6da4f3963bc8',
    content: [
      'İstanbul Antalya ambar hizmetimiz ile eşyalarınız güvenle depolanır ve taşınır.',
      'Modern depolama alanları',
      'Düzenli sevkiyat planlaması',
      'Online stok takibi',
      'Profesyonel paketleme',
      'Sigortalı depolama',
      'Her türlü eşya için uygun çözümler'
    ],
    relatedLinks: [
      { title: 'İstanbul Antalya Nakliyat', slug: 'istanbul-antalya-nakliyat' },
      { title: 'İstanbul Antalya Parça Taşıma', slug: 'istanbul-antalya-parca-tasima' },
      { title: 'Ambar Hizmetleri', slug: 'ambar-hizmetleri' }
    ]
  },
  'istanbul-bodrum-ambar': {
    title: 'İstanbul Bodrum Ambar Hizmeti',
    description: 'İstanbul Bodrum arası düzenli ambar ve depolama hizmetleri. Güvenli ve ekonomik çözümler.',
    image: 'https://images.unsplash.com/photo-1577705998148-6da4f3963bc8',
    content: [
      'İstanbul Bodrum ambar hizmetimiz ile eşyalarınız güvenle depolanır ve taşınır.',
      'Modern depolama tesisleri',
      'Düzenli sevkiyat planlaması',
      'Online stok takibi',
      'Profesyonel paketleme',
      'Sigortalı depolama',
      'Her türlü eşya için uygun çözümler'
    ],
    relatedLinks: [
      { title: 'İstanbul Bodrum Nakliyat', slug: 'istanbul-bodrum-nakliyat' },
      { title: 'İstanbul Bodrum Parça Taşıma', slug: 'istanbul-bodrum-parca-tasima' },
      { title: 'Ambar Hizmetleri', slug: 'ambar-hizmetleri' }
    ]
  },
  'istanbul-izmir-parca-tasima': {
    title: 'İstanbul İzmir Parça Taşıma',
    description: 'İstanbul İzmir arası parça eşya ve koli taşıma hizmeti. Ekonomik ve hızlı çözümler.',
    image: 'https://images.unsplash.com/photo-1616432043562-3671ea2e5242',
    content: [
      'İstanbul İzmir parça taşıma hizmetimiz ile tek parça eşyalarınız güvenle taşınır.',
      'Hızlı teslimat',
      'Ekonomik taşıma seçenekleri',
      'Profesyonel paketleme',
      'Online takip sistemi',
      'Sigortalı taşımacılık',
      'Her türlü parça eşya için uygun çözümler'
    ],
    relatedLinks: [
      { title: 'İstanbul İzmir Nakliyat', slug: 'istanbul-izmir-nakliyat' },
      { title: 'İstanbul İzmir Ambar', slug: 'istanbul-izmir-ambar' },
      { title: 'Parsiyel Taşıma', slug: 'parsiyel-tasima' }
    ]
  },
  'istanbul-antalya-parca-tasima': {
    title: 'İstanbul Antalya Parça Taşıma',
    description: 'İstanbul Antalya arası parça eşya ve koli taşıma hizmeti. Ekonomik ve hızlı çözümler.',
    image: 'https://images.unsplash.com/photo-1616432043562-3671ea2e5242',
    content: [
      'İstanbul Antalya parça taşıma hizmetimiz ile tek parça eşyalarınız güvenle taşınır.',
      'Hızlı teslimat',
      'Ekonomik taşıma seçenekleri',
      'Profesyonel paketleme',
      'Online takip sistemi',
      'Sigortalı taşımacılık',
      'Her türlü parça eşya için uygun çözümler'
    ],
    relatedLinks: [
      { title: 'İstanbul Antalya Nakliyat', slug: 'istanbul-antalya-nakliyat' },
      { title: 'İstanbul Antalya Ambar', slug: 'istanbul-antalya-ambar' },
      { title: 'Parsiyel Taşıma', slug: 'parsiyel-tasima' }
    ]
  },
  'istanbul-bodrum-parca-tasima': {
    title: 'İstanbul Bodrum Parça Taşıma',
    description: 'İstanbul Bodrum arası parça eşya ve koli taşıma hizmeti. Ekonomik ve hızlı çözümler.',
    image: 'https://images.unsplash.com/photo-1616432043562-3671ea2e5242',
    content: [
      'İstanbul Bodrum parça taşıma hizmetimiz ile tek parça eşyalarınız güvenle taşınır.',
      'Hızlı teslimat',
      'Ekonomik taşıma seçenekleri',
      'Profesyonel paketleme',
      'Online takip sistemi',
      'Sigortalı taşımacılık',
      'Her türlü parça eşya için uygun çözümler'
    ],
    relatedLinks: [
      { title: 'İstanbul Bodrum Nakliyat', slug: 'istanbul-bodrum-nakliyat' },
      { title: 'İstanbul Bodrum Ambar', slug: 'istanbul-bodrum-ambar' },
      { title: 'Parsiyel Taşıma', slug: 'parsiyel-tasima' }
    ]
  },
  'izmir-istanbul-parca-tasima': {
    title: 'İzmir İstanbul Parça Taşıma',
    description: 'İzmir İstanbul arası parça eşya ve koli taşıma hizmeti. Ekonomik ve hızlı çözümler.',
    image: 'https://images.unsplash.com/photo-1616432043562-3671ea2e5242',
    content: [
      'İzmir İstanbul parça taşıma hizmetimiz ile tek parça eşyalarınız güvenle taşınır.',
      'Hızlı teslimat garantisi',
      'Ekonomik taşıma seçenekleri',
      'Profesyonel paketleme',
      'Online takip sistemi',
      'Sigortalı taşımacılık',
      'Her türlü parça eşya için uygun çözümler'
    ],
    relatedLinks: [
      { title: 'İzmir İstanbul Nakliyat', slug: 'izmir-istanbul-nakliyat' },
      { title: 'İzmir İstanbul Ambar', slug: 'izmir-istanbul-ambar' },
      { title: 'Parsiyel Taşıma', slug: 'parsiyel-tasima' }
    ]
  },
  'antalya-istanbul-parca-tasima': {
    title: 'Antalya İstanbul Parça Taşıma',
    description: 'Antalya İstanbul arası parça eşya ve koli taşıma hizmeti. Ekonomik ve hızlı çözümler.',
    image: 'https://images.unsplash.com/photo-1616432043562-3671ea2e5242',
    content: [
      'Antalya İstanbul parça taşıma hizmetimiz ile tek parça eşyalarınız güvenle taşınır.',
      'Hızlı teslimat garantisi',
      'Ekonomik taşıma seçenekleri',
      'Profesyonel paketleme',
      'Online takip sistemi',
      'Sigortalı taşımacılık',
      'Her türlü parça eşya için uygun çözümler'
    ],
    relatedLinks: [
      { title: 'Antalya İstanbul Nakliyat', slug: 'antalya-istanbul-nakliyat' },
      { title: 'Antalya İstanbul Ambar', slug: 'antalya-istanbul-ambar' },
      { title: 'Parsiyel Taşıma', slug: 'parsiyel-tasima' }
    ]
  },
  'bodrum-istanbul-parca-tasima': {
    title: 'Bodrum İstanbul Parça Taşıma',
    description: 'Bodrum İstanbul arası parça eşya ve koli taşıma hizmeti. Ekonomik ve hızlı çözümler.',
    image: 'https://images.unsplash.com/photo-1616432043562-3671ea2e5242',
    content: [
      'Bodrum İstanbul parça taşıma hizmetimiz ile tek parça eşyalarınız güvenle taşınır.',
      'Hızlı teslimat garantisi',
      'Ekonomik taşıma seçenekleri',
      'Profesyonel paketleme',
      'Online takip sistemi',
      'Sigortalı taşımacılık',
      'Her türlü parça eşya için uygun çözümler'
    ],
    relatedLinks: [
      { title: 'Bodrum İstanbul Nakliyat', slug: 'bodrum-istanbul-nakliyat' },
      { title: 'Bodrum İstanbul Ambar', slug: 'bodrum-istanbul-ambar' },
      { title: 'Parsiyel Taşıma', slug: 'parsiyel-tasima' }
    ]
  },
  'izmir-istanbul-ambar': {
    title: 'İzmir İstanbul Ambar Hizmeti',
    description: 'İzmir İstanbul arası düzenli ambar ve depolama hizmetleri. Güvenli ve ekonomik çözümler.',
    image: 'https://images.unsplash.com/photo-1577705998148-6da4f3963bc8',
    content: [
      'İzmir İstanbul ambar hizmetimiz ile eşyalarınız güvenle depolanır ve taşınır.',
      'Modern depolama tesisleri',
      'Düzenli sevkiyat planlaması',
      'Online stok takibi',
      'Profesyonel paketleme',
      'Sigortalı depolama',
      'Her türlü eşya için uygun çözümler'
    ],
    relatedLinks: [
      { title: 'İzmir İstanbul Nakliyat', slug: 'izmir-istanbul-nakliyat' },
      { title: 'İzmir İstanbul Parça Taşıma', slug: 'izmir-istanbul-parca-tasima' },
      { title: 'Ambar Hizmetleri', slug: 'ambar-hizmetleri' }
    ]
  },
  'antalya-istanbul-ambar': {
    title: 'Antalya İstanbul Ambar Hizmeti',
    description: 'Antalya İstanbul arası düzenli ambar ve depolama hizmetleri. Güvenli ve ekonomik çözümler.',
    image: 'https://images.unsplash.com/photo-1577705998148-6da4f3963bc8',
    content: [
      'Antalya İstanbul ambar hizmetimiz ile eşyalarınız güvenle depolanır ve taşınır.',
      'Modern depolama tesisleri',
      'Düzenli sevkiyat planlaması',
      'Online stok takibi',
      'Profesyonel paketleme',
      'Sigortalı depolama',
      'Her türlü eşya için uygun çözümler'
    ],
    relatedLinks: [
      { title: 'Antalya İstanbul Nakliyat', slug: 'antalya-istanbul-nakliyat' },
      { title: 'Antalya İstanbul Parça Taşıma', slug: 'antalya-istanbul-parca-tasima' },
      { title: 'Ambar Hizmetleri', slug: 'ambar-hizmetleri' }
    ]
  },
  'bodrum-istanbul-ambar': {
    title: 'Bodrum İstanbul Ambar Hizmeti',
    description: 'Bodrum İstanbul arası düzenli ambar ve depolama hizmetleri. Güvenli ve ekonomik çözümler.',
    image: 'https://images.unsplash.com/photo-1577705998148-6da4f3963bc8',
    content: [
      'Bodrum İstanbul ambar hizmetimiz ile eşyalarınız güvenle depolanır ve taşınır.',
      'Modern depolama tesisleri',
      'Düzenli sevkiyat planlaması',
      'Online stok takibi',
      'Profesyonel paketleme',
      'Sigortalı depolama',
      'Her türlü eşya için uygun çözümler'
    ],
    relatedLinks: [
      { title: 'Bodrum İstanbul Nakliyat', slug: 'bodrum-istanbul-nakliyat' },
      { title: 'Bodrum İstanbul Parça Taşıma', slug: 'bodrum-istanbul-parca-tasima' },
      { title: 'Ambar Hizmetleri', slug: 'ambar-hizmetleri' }
    ]
  }
};

export async function generateStaticParams() {
  return [
    // Şehirlerarası nakliyat rotaları
    { slug: 'istanbul-izmir-nakliyat' },
    { slug: 'istanbul-antalya-nakliyat' },
    { slug: 'istanbul-bodrum-nakliyat' },
    { slug: 'istanbul-manisa-nakliyat' },
    { slug: 'istanbul-bursa-nakliyat' },
    { slug: 'istanbul-balikesir-nakliyat' },
    { slug: 'istanbul-canakkale-nakliyat' },
    { slug: 'izmir-istanbul-nakliyat' },
    { slug: 'antalya-istanbul-nakliyat' },
    { slug: 'bodrum-istanbul-nakliyat' },
    { slug: 'manisa-istanbul-nakliyat' },
    { slug: 'bursa-istanbul-nakliyat' },
    { slug: 'balikesir-istanbul-nakliyat' },
    { slug: 'canakkale-istanbul-nakliyat' },
    
    // Ambar hizmetleri
    { slug: 'istanbul-izmir-ambar' },
    { slug: 'istanbul-antalya-ambar' },
    { slug: 'istanbul-bodrum-ambar' },
    { slug: 'izmir-istanbul-ambar' },
    { slug: 'antalya-istanbul-ambar' },
    { slug: 'bodrum-istanbul-ambar' },
    { slug: 'ambar-hizmetleri' },
    
    // Parça ve parsiyel taşıma hizmetleri
    { slug: 'istanbul-izmir-parca-tasima' },
    { slug: 'istanbul-antalya-parca-tasima' },
    { slug: 'istanbul-bodrum-parca-tasima' },
    { slug: 'izmir-istanbul-parca-tasima' },
    { slug: 'antalya-istanbul-parca-tasima' },
    { slug: 'bodrum-istanbul-parca-tasima' },
    { slug: 'parsiyel-tasima' },
    { slug: 'parca-tasimacilik' },
    
    // Genel hizmet sayfaları
    { slug: 'evden-eve-tasima' },
    { slug: 'sehirlerarasi-nakliyat' },
    { slug: 'sehirlerarasi-tasima' },
    { slug: 'sehirlerarasi-evden-eve' },
    { slug: 'sehirlerarasi-parsiyel' },
    { slug: 'nakliye-hizmetleri' },
    { slug: 'paletli-tasimacilik' }
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const content = blogContents[params.slug];
  
  if (!content) {
    return {
      title: `${params.slug} | Şehirlerarası Nakliyat`,
      description: `${params.slug} hakkında detaylı bilgi ve profesyonel nakliyat hizmetlerimiz.`,
      alternates: {
        canonical: `https://sehirlerarasinakliyat.vip/blog/${params.slug}`
      }
    };
  }

  return {
    title: `${content.title} | Şehirlerarası Nakliyat`,
    description: content.description,
    alternates: {
      canonical: `https://sehirlerarasinakliyat.vip/blog/${params.slug}`
    }
  };
}

export default async function BlogPost({ params }: Props) {
  if (!params.slug) {
    notFound();
  }

  const content = blogContents[params.slug];

  return (
    <article className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {content ? (
          <>
            {/* Hero Section */}
            <div className="relative h-[400px] mb-8 rounded-2xl overflow-hidden">
              <Image
                src={content.image}
                alt={content.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 p-8">
                  <h1 className="text-4xl font-bold text-white mb-4">{content.title}</h1>
                  <p className="text-lg text-gray-100">{content.description}</p>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="prose max-w-none">
                  {content.content.map((paragraph, index) => (
                    <p key={index} className="text-gray-700 mb-4">{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h2 className="text-xl font-semibold mb-4">İlgili Hizmetler</h2>
                  <div className="space-y-4">
                    {content.relatedLinks.map((link, index) => (
                      <Link
                        key={index}
                        href={`/blog/${link.slug}`}
                        className="block bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* CTA Box */}
                <div className="bg-blue-600 text-white rounded-xl p-6 mt-6">
                  <h3 className="text-xl font-semibold mb-4">Teklif Alın</h3>
                  <p className="mb-4">Profesyonel nakliyat hizmeti için hemen bizimle iletişime geçin.</p>
                  <Link
                    href="/iletisim"
                    className="block text-center bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    İletişime Geçin
                  </Link>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <h1 className="text-3xl font-bold mb-4">Bu Sayfa Hazırlanıyor</h1>
            <p className="text-gray-600 mb-8">
              İçerik en kısa sürede eklenecektir. Diğer hizmetlerimizi inceleyebilirsiniz.
            </p>
            <Link
              href="/blog"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Tüm Hizmetleri Görüntüle
            </Link>
          </div>
        )}
      </div>
    </article>
  );
} 