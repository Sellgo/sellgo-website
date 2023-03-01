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
