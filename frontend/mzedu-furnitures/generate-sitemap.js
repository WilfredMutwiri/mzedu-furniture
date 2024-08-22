import fs from 'fs';
import path from 'path';

// List of URLs for the sitemap
const urls = [
  { loc: 'https://mzedu-furniture.vercel.app/', lastmod: '2024-08-22', changefreq: 'daily', priority: '1.0' },
  { loc: 'https://mzedu-furniture.vercel.app/featuredProducts', lastmod: '2024-08-20', changefreq: 'monthly', priority: '0.8' },
];

// Generate sitemap XML
const generateSitemap = (urls) => {
  const urlset = urls.map(url => `
    <url>
      <loc>${url.loc}</loc>
      <lastmod>${url.lastmod}</lastmod>
      <changefreq>${url.changefreq}</changefreq>
      <priority>${url.priority}</priority>
    </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urlset}
</urlset>`;
};

// Write sitemap to file
const sitemap = generateSitemap(urls);
const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');

fs.writeFileSync(sitemapPath, sitemap, 'utf8');

console.log('Sitemap generated at:', sitemapPath);
