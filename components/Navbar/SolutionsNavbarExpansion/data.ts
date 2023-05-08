/* Types */
import {
	ProductsNavigationList,
	ProductsPanelData
} from '../../../interfaces/Navbar';

export const productsNavigationList: ProductsNavigationList[] = [
	{
		head: 'Sales GO',
		desc: 'xxxxxxxx',
		hoverId: 'salesSolution'
	},
	{
		head: 'Marketing GO',
		desc: 'xxxxxxxx',
		hoverId: 'marketingSolution'
	},
	{
		head: 'Data GO',
		desc: 'xxxxxxxx',
		hoverId: 'dataSolution'
	},
	{
		head: 'Partnership GO',
		desc: 'xxxxxxxx',
		hoverId: 'partnershipSolution'
	}
];

export const productsRightPanelData: ProductsPanelData[] = [
	{
		hoverId: 'salesSolution',
		header: '',
		groupedNavLinksData: [
			{
				head: 'Intent Search & Qualifying',
				desc: 'Identify potential buying intents',
				navigateTo: '/',
				iconName: 'sellerDatabase'
			},
			{
				head: 'Search Automation',
				desc: 'Automate search processes',
				navigateTo: '/',
				iconName: 'sellerMap'
			},
			{
				head: 'Conversation Intelligence',
				desc: 'Analyze customer interactions in the global market',
				navigateTo: '/',
				iconName: 'sellerMap'
			},
			{
				head: 'Workflows',
				desc: 'Qualify go-to-market activities',
				navigateTo: '/',
				iconName: 'sellerMap'
			}
		]
	},
	{
		hoverId: 'marketingSolution',
		header: '',
		groupedNavLinksData: [
			{
				head: 'Cross-Channel Advertising',
				desc: 'Reach customers through multiple channels',
				navigateTo: '/',
				iconName: 'sellerDatabase'
			},
			{
				head: 'Buyer Intent Insights',
				desc: 'Understand potential customer buying behavior',
				navigateTo: '/',
				iconName: 'sellerMap'
			},
			{
				head: 'Website Chat',
				desc: 'Engage and assist website visitors',
				navigateTo: '/',
				iconName: 'sellerMap'
			},
			{
				head: 'Web Form Enrichment',
				desc: 'Enhance web form data',
				navigateTo: '/',
				iconName: 'sellerMap'
			}
		]
	},
	{
		hoverId: 'dataSolution',
		header: '',
		groupedNavLinksData: [
			{
				head: 'Data-as-a-Service',
				desc: 'Provide data as a service',
				navigateTo: '/',
				iconName: 'sellerDatabase'
			},
			{
				head: 'Data Management',
				desc: 'Organize and maintain data',
				navigateTo: '/',
				iconName: 'sellerMap'
			},
			{
				head: 'Data Enrichment',
				desc: 'Enhance data quality',
				navigateTo: '/',
				iconName: 'sellerMap'
			},
			{
				head: 'API & Webhooks',
				desc: 'Connect to other systems and services',
				navigateTo: '/',
				iconName: 'sellerMap'
			}
		]
	},
	{
		hoverId: 'partnershipSolution',
		header: '',
		groupedNavLinksData: [
			{
				head: 'Partnership Search',
				desc: 'Find potential partners',
				navigateTo: '/',
				iconName: 'sellerDatabase'
			},
			{
				head: 'Partner Outreach',
				desc: 'Reach out to potential partners',
				navigateTo: '/',
				iconName: 'sellerMap'
			},
			{
				head: 'Partner Branding',
				desc: 'Build company brand to attract collabs',
				navigateTo: '/',
				iconName: 'sellerMap'
			},
			{
				head: 'ATS Integrations',
				desc: 'Integrate with Applicant Tracking Systems',
				navigateTo: '/',
				iconName: 'sellerMap'
			}
		]
	}
];
