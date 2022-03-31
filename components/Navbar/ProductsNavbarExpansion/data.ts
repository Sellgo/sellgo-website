/* Types */
import {
	ProductsNavigationList,
	ProductsPanelData
} from '../../../interfaces/Navbar';

export const productsNavigationList: ProductsNavigationList[] = [
	{
		head: 'Private Label',
		desc: 'Brand, White Label',
		hoverId: 'privateLabel'
	},
	{
		head: 'Wholesale',
		desc: 'Reseller, Online Arbitrage',
		hoverId: 'wholesale'
	},
	
	{
		head: 'Service Provider',
		desc: 'Enabler, 3PL, Mastermind',
		hoverId: 'serviceProvider'
	}
	// {
	// 	head: 'Perfect Stock',
	// 	desc: 'Private Label, Wholesale',
	// 	hoverId: 'perfectStock'
	// }
];

export const productsRightPanelData: ProductsPanelData[] = [
	{
		hoverId: 'wholesale',
		header: 'Features',
		groupedNavLinksData: [
			{
				head: 'Extension',
				desc: 'Product validation on Amazon page',
				navigateTo: '/extension',
				iconName: 'extension'
			},
			{
				head: 'Search Management',
				desc: 'Streamline wholesale inventories',
				navigateTo: '/search-management',
				iconName: 'searchManagement'
			},
			{
				head: 'Profit Finder',
				desc: 'Wholesale bulk calculator',
				navigateTo: '/profit-finder',
				iconName: 'profitFinder'
			}
		]
	},
	{
		hoverId: 'privateLabel',
		header: 'Features',
		groupedNavLinksData: [
			{
				head: 'Sales Forecasting',
				desc: 'Accurately project high seasonal sales',
				navigateTo: '/sales-forecasting',
				iconName: 'salesProjection',
				isComingSoon: true
			},
			{
				head: 'Order Planning',
				desc: 'Easily create smart orders',
				navigateTo: '/order-planning',
				iconName: 'orderPlanning',
				isComingSoon: true
			},
			{
				head: '3PL Manager',
				desc: 'Pre-fulfillment solved',
				navigateTo: '/tpl-manager',
				iconName: 'Tpl',
				isComingSoon: true
			},
			{
				head: 'Cash Flow',
				desc: 'Instant cash flow projection',
				navigateTo: '/cash-flow',
				iconName: 'dashboard',
				isComingSoon: true
			},
			{
				head: 'Extension',
				desc: 'Product Validation on Amazon Page',
				navigateTo: '/extension',
				iconName: 'extension'
			},
			{
				head: 'Keyword Finder',
				desc: 'Reveal competitor keywords',
				navigateTo: '/keyword-finder',
				iconName: 'keywordFinder',
				isNew: true
			},
			{
				head: 'Keyword Database',
				desc: 'Check high-volume keywords',
				navigateTo: '/keyword-database',
				iconName: 'keywordDatabase',
				isNew: true
			},
			{
				head: 'Product Rank Tracker',
				desc: 'Get to #1 search results',
				navigateTo: '/product-rank-tracker',
				iconName: 'productRankTracker',
				isNew: true
			},
			{
				head: 'Product Database',
				desc: 'Amazon product catalogue',
				navigateTo: '/product-database',
				iconName: 'productDatabase'
			}
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
				desc: 'Take advantage of competition',
				navigateTo: '/seller-finder',
				iconName: 'sellerFinder'
			}
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
				isNew: true
			},
			{
				head: 'Order Planning',
				desc: 'Get Perfect Order',
				navigateTo: '/order-planning',
				iconName: 'orderPlanning',
				isNew: true
			}
		]
	}
];
