import { StepDetail } from '../../../interfaces/Stepper';

export const wholesaleFeatures: StepDetail[] = [
	{
		title: '',
		subTitle:
			'Discover how inventory planning is your secret weapon when it comes to scaling',
		icon: 'sellerDatabase',
		description:
			'Evaluate dozens of products and gain in-depth insight into any product including sales estimations, seller rankings, profit margins using data directly from Amazon.',
		linkLabel: [
			'Product Use Cases',
			'Sales and Seasonality',
			'Generate Future Orders',
			'Automation & Integration'
		],
		navigateTo: [
			'/seller-database',
			'/seller-database',
			'/seller-database',
			'/seller-database'
		],
		imageUrl: '/seller_download_1.png'
	},
	{
		title: 'SELLGO TARGETS',
		subTitle: 'Boost sales with the right keywords and PPC automation',
		icon: 'sellerDatabase',
		description: `Validate any product before sourcing and make confident business decisions using real-time, accurate data. View a product's sales history and price tracking history to ensure a product's long-term sustainability and profitability.`,
		linkLabel: [
			'Keyword Finder',
			'Rank Tracker Optimization',
			'Re-PPC Automation'
		],
		navigateTo: ['/seller-database', '/seller-database', '/seller-database'],
		imageUrl: '/seller_download_2.png'
	},
	{
		title: 'SELLGO CONNECTS',
		subTitle: 'Bring your cash flow into focus',
		icon: 'sellerDatabase',
		description:
			'Compare multiple products and categories to determine the best products that fit your business model and needs. Uncover the products with the best sales records and profitability to add to your Amazon catalogs.',
		linkLabel: ['Report & Analytics'],
		navigateTo: ['/seller-database'],
		imageUrl: '/seller_download_3.png'
	}
];
