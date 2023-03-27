/* Types */
import {
	ProductsNavigationList,
	ProductsPanelData
} from '../../../interfaces/Navbar';

export const productsNavigationList: ProductsNavigationList[] = [
	{
		head: 'Intelligence',
		desc: 'xxx',
		hoverId: 'intelligencePlatform'
	},
	{
		head: 'Engagement',
		desc: 'xxx',
		hoverId: 'engagementPlatform'
	},
	{
		head: 'Orchestration',
		desc: 'xxx',
		hoverId: 'orchestrationPlatform'
	}
];

export const productsRightPanelData: ProductsPanelData[] = [
	{
		hoverId: 'intelligencePlatform',
		header: '',
		groupedNavLinksData: [
			{
				head: 'Company and contact search',
				desc: 'Identify markets and find potential customers',
				navigateTo: '/',
				iconName: 'sellerDatabase'
			},
			{
				head: 'Buyer intent',
				desc: 'Connect with prospects who are ready to make a purchase',
				navigateTo: '/',
				iconName: 'sellerDatabase'
			},
			{
				head: 'Website Visitor Tracking',
				desc: 'Convert website traffic into sales leads',
				navigateTo: '/',
				iconName: 'sellerDatabase'
			}
		]
	},
	{
		hoverId: 'engagementPlatform',
		header: '',
		groupedNavLinksData: [
			{
				head: 'Seller Database',
				desc: 'Scout a network of great Amazon sellers',
				navigateTo: '/seller-database',
				iconName: 'sellerDatabase'
			}
		]
	},
	{
		hoverId: 'orchestrationPlatform',
		header: '',
		groupedNavLinksData: [
			{
				head: 'Seller Database',
				desc: 'Scout a network of great Amazon sellers',
				navigateTo: '/seller-database',
				iconName: 'sellerDatabase'
			}
		]
	}
];
