import React from 'react';
import { GetServerSideProps } from 'next';
import globby from 'globby';

/* Apollo */
// import client from '../../apollo';

/* Graphql */
// import {  } from '../../graphql/cms';

/* App Config */
import AppConfig from '../../config';

/* Utils */
import { getPageFrequency, getPagePriority } from '../../utils/Sitemap';
import client from '../../apollo';
import {
	GET_BLOGS_DATA_FOR_SITEMAP,
	GET_TOTAL_BLOGS_COUNT
} from '../../graphql/cms';

interface Props {}

const Sitemap: React.FC<Props> = () => {
	return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
	// generate sitenmap for static pages first
	const staticPages = await globby([
		// include
		'pages/*.tsx',
		'pages/**/*.tsx',
		// exclude _document.tsx and _app.tsx
		'!pages/_*.tsx',
		// exclude error pages
		'!pages/404.tsx',
		'!pages/500.tsx',
		// exclude as they are handled seperately on server sitemap page component
		'!pages/blogs/blog',
		'!pages/sitemap.xml'
	]);

	const staticPagesSitemap = `${staticPages
		.map((page) => {
			const path = page
				.replace('pages', '')
				.replace('.tsx', '')
				.replace(/\/index/g, '');

			const routePath = path === 'index' ? '' : path;

			return `<url>
            <loc>${AppConfig.WEB_URL}${routePath}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
						<changefreq>${getPageFrequency(routePath)}</changefreq>
						<priority>${getPagePriority(routePath)}</priority>
          </url>`;
		})
		.join('')}`;

	// Generate the sitemap for dynamic pages (blogs/blog/[slug])

	const { data: totalBlogsCount } = await client.query({
		query: GET_TOTAL_BLOGS_COUNT
	});

	const totalCount = totalBlogsCount.posts.pageInfo.total;

	const { data: getBlogsSiteMapInfo } = await client.query({
		query: GET_BLOGS_DATA_FOR_SITEMAP,
		variables: { size: totalCount }
	});

	const sitemapInfo = getBlogsSiteMapInfo.posts.nodes;

	const blogsSitemap = `${sitemapInfo
		.map((blogSitemapData: any) => {
			return `<url>
            <loc>${AppConfig.WEB_URL}/blogs/${blogSitemapData.slug}</loc>
            <lastmod>${new Date(blogSitemapData.date).toISOString()}</lastmod>
          </url>`;
		})
		.join('')}`;

	// combine the sitemaps
	const staticPageGeneratedSitemap = `
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
			http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    >
      ${staticPagesSitemap}
			${blogsSitemap}
    </urlset>
  `;
	// send xml response and end the request
	res.setHeader('Content-Type', 'text/xml');
	res.write(staticPageGeneratedSitemap);
	res.end();

	return {
		props: {}
	};
};

export default Sitemap;
