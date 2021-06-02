const fs = require('fs');
const path = require('path');
const globby = require('globby');
const chalk = require('chalk');

const sitemapUtils = require('./utils');

/* _________________ Script starts from here ______________________________ */

console.log(chalk.cyan('Preparing the common sitemap for static pages'));

console.log(chalk.blue('Setting the current ISO date....'));

const currentDate = new Date().toISOString();

const domain = 'https://www.sellgo.com';

console.log(chalk.yellow(`Setting domain name to: ${domain}....`));

console.log(chalk.magenta('Sitemap generation begins.....'));

const getPagesAndPrepareSitemap = async () => {
	try {
		const pages = await globby([
			// include
			'pages/*.tsx',
			'pages/**/*.tsx',
			// exclude _document.tsx and _app.tsx
			'!pages/_*.tsx',
			// exclude error pages
			'!pages/404.tsx',
			'!pages/500.tsx',
			// exclude as they are handled seperately on server sitemap page component
			'!pages/blogs/blog'
		]);

		const pagesSitemap = `${pages
			.map((page) => {
				const path = page
					.replace('pages', '')
					.replace('.tsx', '')
					.replace(/\/index/g, '');

				const routePath = path === 'index' ? '' : path;

				return `<url>
            <loc>${domain}${routePath}</loc>
            <lastmod>${currentDate}</lastmod>
						<changefreq>${sitemapUtils.getPageFrequency(routePath)}</changefreq>
						<priority>${sitemapUtils.getPagePriority(routePath)}</priority>
          </url>`;
			})
			.join('')}`;

		console.log(
			chalk.blue('Updating the sitemap changefreq and priority value')
		);

		const generatedSitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
			http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    >
      ${pagesSitemap}
    </urlset>
  `;

		const formattedSitemap = [sitemapUtils.formatSitemap(generatedSitemap)];

		fs.writeFileSync(
			path.resolve(__dirname, '../public/sitemap-common.xml'),
			formattedSitemap,
			'utf-8'
		);

		console.log(
			chalk.green('Job finished. Common Sitemap written on the public folder.')
		);
	} catch (err) {
		console.log(chalk.red('Error generating the common sitemap'), err);
	}
};

getPagesAndPrepareSitemap();
