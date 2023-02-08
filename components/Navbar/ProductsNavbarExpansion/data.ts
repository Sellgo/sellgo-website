/* Types */
import {
	ProductsNavigationList,
	ProductsPanelData
} from '../../../interfaces/Navbar';

export const productsNavigationList: ProductsNavigationList[] = [
	{
		head: 'Seller research',
		desc: 'Discover ideal sellers',
		hoverId: 'serviceProvider'
	}
	/*
	,
	{
		head: 'Product research',
		desc: 'Reverse seller search',
		hoverId: 'privateLabel'
	} */
];

export const productsRightPanelData: ProductsPanelData[] = [
	/* {
		hoverId: 'privateLabel',
		header: '',
		groupedNavLinksData: [
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
	}, */
	{
		hoverId: 'serviceProvider',
		header: '',
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
			}
			// ,
			// {
			// 	head: 'Seller Finder',
			// 	desc: 'Take advantage of competition',
			// 	navigateTo: '/seller-finder',
			// 	iconName: 'sellerFinder'
			// }
		]
	}
];
