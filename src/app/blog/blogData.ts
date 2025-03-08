export interface BlogPost {
  slug: string;
  title: string;
  description?: string;
  content: string;
  image: string;
  date?: string;
  author?: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  // ... mevcut blog içerikleri ...
  {
    slug: "ambar-hizmetleri",
    title: "Ambar Hizmetleri",
    description: "Güvenli ve organize ambar hizmetlerimiz hakkında detaylı bilgi",
    content: `
      <p>Ambar hizmetlerimiz, eşyalarınızın güvenli bir şekilde depolanması ve taşınması için profesyonel çözümler sunar. Modern ve güvenlikli tesislerimizde, her türlü ticari ve kişisel eşyanız için ideal depolama koşulları sağlıyoruz.</p>
      
      <h3>Sunduğumuz Ambar Hizmetleri</h3>
      <ul>
        <li>Kısa ve uzun süreli depolama</li>
        <li>Klimatik kontrollü depolama alanları</li>
        <li>7/24 güvenlik sistemi</li>
        <li>Profesyonel paketleme hizmeti</li>
        <li>Sigortalı depolama</li>
      </ul>

      <h3>Neden Bizi Tercih Etmelisiniz?</h3>
      <p>20 yılı aşkın tecrübemiz ve profesyonel ekibimizle, eşyalarınızın güvenliği bizim için en önemli öncelik. Modern depolama tesislerimiz ve gelişmiş güvenlik sistemlerimizle, size en iyi hizmeti sunuyoruz.</p>
    `,
    image: "https://images.unsplash.com/photo-1577705998148-6da4f3963bc8",
    date: "2024-03-15",
    author: "Nakliyat Ekibi",
    category: "Hizmetler"
  },
  // ... diğer blog içerikleri ...
]; 