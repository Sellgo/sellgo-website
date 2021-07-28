/* Types */
import {
	ProductsNavigationList,
	ProductsPanelData
} from '../../../interfaces/Navbar';

export const productsNavigationList: ProductsNavigationList[] = [
	{
		head: 'Sellgo',
		desc: 'Our Entire Amazon Toolbox.',
		hoverId: 'products'
	}
];

export const productsRightPanelData: ProductsPanelData[] = [
	{
		hoverId: 'products',
		header: 'Features',
		groupedNavLinksData: [
			{
				head: 'Extension',
				desc: 'Product Validation on Amazon Page',
				navigateTo: '/extension',
				iconName: 'extension'
			},
			{
				head: 'Profit Finder',
				desc: 'Wholesale Bulk Calculator',
				navigateTo: '/profit-finder',
				iconName: 'profitFinder'
			},
			{
				head: 'Leads Tracker',
				desc: 'Intelligent Leads Calculator',
				navigateTo: '/leads-tracker',
				iconName: 'leadsTracker'
			},
			{
				head: 'Product Tracker ',
				desc: 'Daily Tracking and Scouting',
				navigateTo: '/product-tracker',
				iconName: 'productTracker'
			},
			{
				head: 'Search Management',
				desc: 'Streamline Wholesale Inventories',
				navigateTo: '/search-management',
				iconName: 'searchManagement'
			},
			{
				head: 'Seller Database',
				desc: 'Scout a network of great Amazon sellers',
				navigateTo: '/seller-database',
				iconName: 'sellerDatabase'
			},
			{
				head: 'Seller Finder',
				desc: 'Take Advantage of Competition',
				navigateTo: '/seller-finder',
				iconName: 'sellerFinder'
			},
			{
				head: 'Seller Map',
				desc: 'Locate dozens of sellers instantly',
				navigateTo: '/seller-map',
				iconName: 'sellerMap'
			}
		]
	}
];
