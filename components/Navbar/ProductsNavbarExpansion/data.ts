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
	},
	{
		head: 'Go Wholesale',
		desc: 'Tools for Wholesale Businesses and Sellers.',
		hoverId: 'gowholesale'
	},
	{
		head: 'Go Private Label',
		desc: 'Tools for Private Label Businesses and Sellers',
		hoverId: 'goprivatelabel'
	},
	{
		head: 'Go Agency',
		desc: 'Tools for Agencies and Enterprises',
		hoverId: 'goagency'
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
				head: 'Product Tracker ',
				desc: 'Daily Tracking and Scouting',
				navigateTo: '/product-tracker',
				iconName: 'productTracker'
			},
			{
				head: 'Leads Tracker',
				desc: 'Monitor Wholesale Product Daily',
				navigateTo: '/leads-tracker',
				iconName: 'leadsTracker'
			},
			{
				head: 'Search Management',
				desc: 'Streamline Wholesale Inventories',
				navigateTo: '/search-management',
				iconName: 'searchManagement'
			},
			{
				head: 'Seller Finder',
				desc: 'Take Advantage of Competition',
				navigateTo: '/seller-finder',
				iconName: 'sellerFinder'
			}
		]
	},
	{
		hoverId: 'gowholesale',
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
				head: 'Product Tracker ',
				desc: 'Daily Tracking and Scouting',
				navigateTo: '/product-tracker',
				iconName: 'productTracker'
			},
			{
				head: 'Leads Tracker',
				desc: 'Monitor Wholesale Product Daily',
				navigateTo: '/leads-tracker',
				iconName: 'leadsTracker'
			},
			{
				head: 'Search Management',
				desc: 'Streamline Wholesale Inventories',
				navigateTo: '/search-management',
				iconName: 'searchManagement'
			},
			{
				head: 'Seller Finder',
				desc: 'Take Advantage of Competition',
				navigateTo: '/seller-finder',
				iconName: 'sellerFinder'
			}
		]
	},
	{
		hoverId: 'goprivatelabel',
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
				head: 'Product Tracker ',
				desc: 'Daily Tracking and Scouting',
				navigateTo: '/product-tracker',
				iconName: 'productTracker'
			}
		]
	},
	{
		hoverId: 'goagency',
		header: 'Features',
		groupedNavLinksData: [
			{
				head: 'Seller Finder',
				desc: 'Take Advantage of Competition',
				navigateTo: '/seller-finder',
				iconName: 'sellerFinder'
			}
		]
	}
];
