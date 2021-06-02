const {
	ApolloClient,
	HttpLink,
	InMemoryCache,
	gql
} = require('@apollo/client');
const fetch = require('cross-fetch');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const sitemapUtils = require('./utils');

/* Define an Apollo Client */
const client = new ApolloClient({
	link: new HttpLink({
		uri: 'https://wordpress.sellgo-dev.com/graphql',
		fetch
	}),
	cache: new InMemoryCache()
});

const GET_TOTAL_BLOGS = gql`
	query getTotalBlogs {
		posts {
			pageInfo {
				total
			}
		}
	}
`;

const GET_ALL_SLUGS = gql`
	query getAllSlugs($size: Int!) {
		posts(
			where: {
				orderby: { field: DATE, order: DESC }
				offsetPagination: { offset: 0, size: $size }
			}
		) {
			nodes {
				slug
			}
		}
	}
`;

/* _________________ Script starts from here ______________________________ */
console.log(chalk.cyan('Preparing the blogs sitemap'));

console.log(chalk.blue('Setting the current ISO date....'));

const currentDate = new Date().toISOString();

const domain = 'https://www.sellgo.com/blogs';

console.log(chalk.yellow(`Setting domain name to: ${domain}....`));

console.log(chalk.magenta('Sitemap generation begins.....'));

const getBlogSlugAndGenerateSitemap = async () => {
	try {
		const { data: totalBlogs } = await client.query({ query: GET_TOTAL_BLOGS });

		const totalBlogsCount = totalBlogs.posts.pageInfo.total;

		const { data: getAllBlogSlugs } = await client.query({
			query: GET_ALL_SLUGS,
			variables: { size: totalBlogsCount }
		});

		const pageSlugs = getAllBlogSlugs.posts.nodes;

		const pagesSitemap = `${pageSlugs
			.map(({ slug }) => {
				return `<url>
            <loc>${domain}/${slug}</loc>
            <lastmod>${currentDate}</lastmod>
						<priority>0.8</priority>
          </url>`;
			})
			.join('')}`;

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
			path.resolve(__dirname, '../public/sitemap-blogs.xml'),
			formattedSitemap,
			'utf-8'
		);

		console.log(
			chalk.green('Job finished. Common Sitemap written on the public folder.')
		);
	} catch (err) {
		console.log(chalk.red('Error generating sitemap for dynamic blogs'), err);
	}
};

getBlogSlugAndGenerateSitemap();
