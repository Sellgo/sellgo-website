const fs = require('fs');
const path = require('path');
const globby = require('globby');

const sitemapUtils = require('./utils');

const combineSitemap = async () => {
	const domain = 'https://www.sellgo.com';
	const getDate = new Date().toISOString();

	const pages = await globby(['public/*.xml']);

	const sitemapIndex = `
    ${pages
			.map((page) => {
				const path = page.replace('public', '');
				return `
          <sitemap>
            <loc>${`${domain}${path}`}</loc>
            <lastmod>${getDate}</lastmod>
          </sitemap>`;
			})
			.join('')}`;

	const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemapIndex}
    </sitemapindex>
  `;

	const formattedSitemap = [sitemapUtils.formatSitemap(sitemap)];
	fs.writeFileSync(
		path.resolve(__dirname, '../public/sitemap.xml'),
		formattedSitemap,
		'utf8'
	);
};

combineSitemap();
