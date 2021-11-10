export const productsDetails: {
	title: string;
	action: string;
	icon: string;
	features: { name: string; link: string }[];
}[] = [
	{
		title: 'FIND QUALITY PRODUCTS',
		action: 'when researching',
		icon: '/products-products.svg',
		features: [
			{
				name: 'Sales Estimation & Search Volume',
				link: '/'
			},
			{
				name: 'Product/ Brand Database',
				link: '/'
			},
			{
				name: 'Seller Database/ Map/ Finder',
				link: '/'
			}
		]
	},
	{
		title: 'DOMINATE COMPETITIONS',
		action: 'when launching',
		icon: '/products-competition.svg',
		features: [
			{
				name: 'Keyword Finder',
				link: '/'
			},
			{
				name: 'Keyword Database',
				link: '/'
			},
			{
				name: 'Product Rank Tracker',
				link: '/'
			}
		]
	},
	{
		title: 'AUTOMATE PROCESSES',
		action: 'when selling',
		icon: '/products-automate.svg',
		features: [
			{
				name: 'Product Rank Tracker',
				link: '/'
			},
			{
				name: 'Zapier Integration For PPC Re-Campaign',
				link: '/'
			},
			{
				name: 'Perfect Stock',
				link: '/'
			}
		]
	}
];
