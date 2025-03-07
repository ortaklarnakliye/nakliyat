import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return [
    { slug: 'istanbul-izmir-nakliyat' },
    { slug: 'istanbul-antalya-nakliyat' },
    { slug: 'istanbul-bodrum-nakliyat' },
    { slug: 'izmir-istanbul-nakliyat' },
    { slug: 'antalya-istanbul-nakliyat' },
    { slug: 'bodrum-istanbul-nakliyat' },
    { slug: 'istanbul-izmir-ambar' },
    { slug: 'istanbul-antalya-ambar' },
    { slug: 'istanbul-bodrum-ambar' },
    { slug: 'istanbul-izmir-parca-tasima' },
    { slug: 'istanbul-antalya-parca-tasima' },
    { slug: 'istanbul-bodrum-parca-tasima' }
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Blog - ${params.slug} | Şehirlerarası Nakliyat`,
    description: `${params.slug} hakkında detaylı bilgi ve profesyonel nakliyat hizmetlerimiz.`,
    alternates: {
      canonical: `https://sehirlerarasinakliyat.vip/blog/${params.slug}`
    }
  };
}

export default async function BlogPost({ params }: Props) {
  if (!params.slug) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">{params.slug}</h1>
        <div className="prose max-w-none">
          {/* Blog içeriği buraya gelecek */}
          <p>Bu sayfa yapım aşamasındadır.</p>
        </div>
      </div>
    </article>
  );
} 