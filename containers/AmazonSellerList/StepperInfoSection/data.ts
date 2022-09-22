import { StepDetail } from '../../../interfaces/Stepper';

export const wholesaleFeatures: StepDetail[] = [
	{
		title: 'Benefits',
		subTitle: 'All-in-one Seller Database',
		icon: 'sellerDatabase',
		description: `Seller name, seller address, email, phone, store link,
		revenue estimate, inventory, brands, seller reviews, ratings, etc.`,
		linkLabel: ['Open sample in Google Sheets'],
		navigateTo: [
			'/seller-database',
			'/seller-database',
			'/seller-database',
			'/seller-database'
		],
		imageUrl: '/seller_download_1.png'
	},
	{
		title: 'Benefits',
		subTitle: 'Boost sales with the right keywords and PPC automation',
		icon: 'sellerDatabase',
		description: `Save money on software and developers. Customized exactly to your needs. 
		No long-term contracts. Instant results.`,
		linkLabel: ['Open sample in Google Sheets'],
		navigateTo: ['/seller-database', '/seller-database', '/seller-database'],
		imageUrl: '/seller_download_2.png'
	},
	{
		title: 'SELLGO CONNECTS',
		subTitle: 'Bring your cash flow into focus',
		icon: 'sellerDatabase',
		description: `Compare multiple products and categories to determine the best products that fit
    your business model and needs. Uncover the products with the best sales records
    and profitability to add to your Amazon catalogs.`,
		linkLabel: ['Report & Analytics'],
		navigateTo: ['/seller-database'],
		imageUrl: '/seller_download_3.png'
	}
];
