const { withPlaiceholder } = require("@plaiceholder/next");

/* eslint-disable max-len */
module.exports = withPlaiceholder({
	async redirects() {
		return [
			{
				source:
					'/post/the-quick-amazon-sellers-guide-to-black-friday-and-cyber-monday',
				destination: '/blogs/blog/guide-black-friday-and-cyber-monday-2020',
				permanent: true
			},
			{
				source:
					'/post/a-beginner-s-guide-to-selling-wholesale-products-on-amazon-how-to-find-winning-products',
				destination:
					'/blogs/blog/guide-selling-wholesale-products-on-amazon-find-winning-products',
				permanent: true
			},
			{
				source: '/post/profit-calculator-estimate-amazon-product-margin',
				destination:
					'/blogs/blog/profit-calculator-how-to-estimate-amazon-product-margin',
				permanent: true
			},
			{
				source: '/post/super-tracking-develop-your-own-superpower',
				destination:
					'/blogs/blog/super-tracking-amazon-top-sellers-products-to-sell-wholesale-suppliers',
				permanent: true
			},
			{
				source:
					'/post/a-guide-to-product-analysis-amazon-wholesale-and-product-sourcing',
				destination:
					'/blogs/blog/guide-product-analysis-the-secret-to-amazon-wholesale-and-product-sourcing',
				permanent: true
			},
			{
				source: '/post/5-useful-tools-that-every-amazon-fba-seller-should-use',
				destination:
					'/blogs/blog/5-useful-seller-tools-for-every-amazon-fba-seller',
				permanent: true
			},
			{
				source:
					'/post/ultimate-guide-to-amazon-packaging-prepping-amazon-products-for-shipment',
				destination:
					'/blogs/blog/guide-amazon-packaging-prepping-amazon-products-for-shipment',
				permanent: true
			},
			{
				source:
					'/post/4-best-amazon-reviewer-checkers-for-shoppers-and-amazon-businesses',
				destination: '/blogs/blog/4-best-amazon-reviewer-checkers',
				permanent: true
			},
			{
				source: '/post/2021-guide-reverse-sourcing',
				destination: '/blogs/blog/2021-guide-to-reverse-sourcing',
				permanent: true
			},

			// slug match
			{
				source: '/post/:slug',
				destination: '/blogs/blog/:slug',
				permanent: true
			}
		];
	}
});
