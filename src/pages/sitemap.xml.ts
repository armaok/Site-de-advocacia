import { getCollection } from 'astro:content';

export async function GET({ site }: { site: URL }) {
  const posts = await getCollection('blog');
  const baseUrl = 'https://toadvocacia.com.br';
  const hoje = new Date().toISOString().split('T')[0];

  const paginas = [
    { url: '/', prioridade: '1.0', frequencia: 'weekly', data: hoje },
    { url: '/blog/', prioridade: '0.9', frequencia: 'weekly', data: hoje },
    { url: '/contato/', prioridade: '0.7', frequencia: 'monthly', data: hoje },
  ];

  const postUrls = posts.map(post => {
    const data = new Date(post.data.date).toISOString().split('T')[0];
    return `  <url>
    <loc>${baseUrl}/blog/${post.slug}/</loc>
    <lastmod>${data}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
  }).join('\n');

  const paginaUrls = paginas.map(p => `  <url>
    <loc>${baseUrl}${p.url}</loc>
    <lastmod>${p.data}</lastmod>
    <changefreq>${p.frequencia}</changefreq>
    <priority>${p.prioridade}</priority>
  </url>`).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paginaUrls}
${postUrls}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
