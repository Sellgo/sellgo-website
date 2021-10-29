/* Types */
import {
	ProductsNavigationList,
	ProductsPanelData
} from '../../../interfaces/Navbar';

export const productsNavigationList: ProductsNavigationList[] = [
	{
		head: 'Wholesale',
		desc: 'Reseller, Online Arbitrage',
		hoverId: 'wholesale'
	}, 
	{
		head: 'Private Label',
		desc: 'Brand, White Label',
		hoverId: 'privateLabel'
	}, 
	{
		head: 'Service Provider',
		desc: 'Enabler, 3PL, Mastermind',
		hoverId: 'serviceProvider'
	}, 
	{
		head: 'Perfect Stock',
		desc: 'Private Label, Wholesale',
		hoverId: 'perfectStock'
	}, 
];

export const productsRightPanelData: ProductsPanelData[] = [
	{
		hoverId: 'wholesale',
		header: 'Features',
		groupedNavLinksData: [
			{
				head: 'Extension',
				desc: 'Product Validation on Amazon Page',
				navigateTo: '/extension',
				iconName: 'extension'
			},
			{
				head: 'Search Management',
				desc: 'Streamline Wholesale Inventories',
				navigateTo: '/search-management',
				iconName: 'searchManagement'
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
				head: 'Seller Finder',
				desc: 'Take Advantage of Competition',
				navigateTo: '/seller-finder',
				iconName: 'sellerFinder'
			},
			{
				head: 'Seller Database',
				desc: 'Scout a network of great Amazon sellers',
				navigateTo: '/seller-database',
				iconName: 'sellerDatabase'
			},
			{
				head: 'Seller Map',
				desc: 'Locate dozens of sellers instantly',
				navigateTo: '/seller-map',
				iconName: 'sellerMap'
			}
		]
	},
	{
		hoverId: 'privateLabel',
		header: 'Features',
		groupedNavLinksData: [
			{
				head: 'Extension',
				desc: 'Product Validation on Amazon Page',
				navigateTo: '/extension',
				iconName: 'extension'
			},
			{
				head: 'Keyword Finder',
				desc: 'Reveal Competitor Keywords',
				navigateTo: '/keyword-finder',
				iconName: 'keywordFinder',
				isNew: true,
			},
			{
				head: 'Keyword Database',
				desc: 'Check High-Volume Keywords',
				navigateTo: '/keyword-database',
				iconName: 'keywordDatabase',
				isNew: true,
			},
			{
				head: 'Product Rank Tracker',
				desc: 'Get to #1 Search Results',
				navigateTo: '/product-rank-tracker',
				iconName: 'productRankTracker',
				isNew: true,
			},
			{
				head: 'Product Database',
				desc: 'Amazon Product Catalogue',
				navigateTo: '/product-database',
				iconName: 'productDatabase',
				isComingSoon: true,
			},
		]
	},
	{
		hoverId: 'serviceProvider',
		header: 'Features',
		groupedNavLinksData: [
			{
				head: 'Seller Database',
				desc: 'Scout a network of great Amazon sellers',
				navigateTo: '/seller-database',
				iconName: 'sellerDatabase'
			},
			{
				head: 'Seller Map',
				desc: 'Locate dozens of sellers instantly',
				navigateTo: '/seller-map',
				iconName: 'sellerMap'
			},
			{
				head: 'Seller Finder',
				desc: 'Take Advantage of Competition',
				navigateTo: '/seller-finder',
				iconName: 'sellerFinder'
			},
			{
				head: 'Product Rank Tracker',
				desc: 'Get to #1 Search Results',
				navigateTo: '/product-rank-tracker',
				iconName: 'productRankTracker',
				isNew: true,
			},
			{
				head: 'Keyword Finder',
				desc: 'Reveal Competitor Keywords',
				navigateTo: '/keyword-finder',
				iconName: 'keywordFinder',
				isNew: true,
			},
			{
				head: 'Keyword Database',
				desc: 'Check High-Volume Keywords',
				navigateTo: '/keyword-database',
				iconName: 'keywordDatabase',
				isNew: true,
			},
			{
				head: 'Product Database',
				desc: 'Amazon Product Catalogue',
				navigateTo: '/product-database',
				iconName: 'productDatabase',
				isComingSoon: true,
			},
			
		]
	},
	{
		hoverId: 'perfectStock',
		header: 'Features',
		groupedNavLinksData: [
			{
				head: 'Dashboard',
				desc: 'Inventory Management',
				navigateTo: '/dashboard',
				iconName: 'dashboard'
			},
			{
				head: 'Sales Projection',
				desc: 'Demand Forecasting',
				navigateTo: '/sales-projection',
				iconName: 'salesProjection'
			},
			{
				head: 'Seasonality Adjustor',
				desc: 'Seasonality Forecasting',
				navigateTo: '/seasonality-adjustor',
				iconName: 'seasonalityAdjustor'
			},
			{
				head: 'Catalog Planning',
				desc: 'Catalog Planning and Inventory',
				navigateTo: '/catalog-planning',
				iconName: 'catalogPlanning',
				isNew: true,
			},
			{
				head: 'Order Planning',
				desc: 'Get Perfect Order',
				navigateTo: '/order-planning',
				iconName: 'orderPlanning',
				isNew: true,
			},
		]
	},
];
