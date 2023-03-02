/* Interfaces */
import { PlanTypes } from '../../../interfaces/Pricing';

export const planTypes: PlanTypes[] = [
	// {
	// 	name: 'Free Tools',
	// 	isNew: false
	// },
	// {
	// 	name: 'Instant Download Pricing',
	// 	content: 'Get your most wanted data in seconds, no hassle.',
	// 	img: 'instant-download.svg',
	// 	isNew: false
	// },
	{
		name: 'Usage-based Subscription',
		content: 'Pay less on software, invest more in your business.',
		img: 'instant-download.svg',
		isNew: false
	},
	{
		name: 'Account-based Solution',
		content: 'Get your most wanted data in seconds, no hassle.',
		img: 'chartnetworkIcon.svg',
		isNew: false
	}
];

export const plansAndProductsDetails = [
	{
		planName: '"Sellgo pays for itself 10x over"',
		summary: `Reach millions of Amazon seller decision makers and their teams`,

		infoAlertMessage: {
			monthly: {
				head: `Pay only $1.99 for the entire first month of starter membership`,
				desc: ``,
				navigateTo: '/pricing?type=free-trial',
				navigateLabel: 'Learn More'
			},
			yearly: {
				head: `Pay only $1.99 for the entire first month of starter membership`,
				desc: ``,
				navigateTo: '/pricing?type=free-trial',
				navigateLabel: 'Learn More'
			}
		},
		productsIncluded: [
			{
				id: 5, // subscriptionID if needed
				name: 'Free',
				productsDatabase: 0,
				salesEstimateCount: 1000,
				monthlyPrice: 0,
				annualPrice: 0,
				desc: `Test drive it`,
				featureSubName: 'Free includes:',
				isFree: true,
				isEnterprise: false,
				isUsage: false,
				featuresLists: [
					{
						title: '',
						featuresIncluded: [
							'Verified emails',
							'Verified mobile and direct phones',
							'Verified social media links'
						]
					}
				]
			},
			{
				id: 6, // subscriptionID if needed
				name: 'Pro',
				productsDatabase: 0,
				salesEstimateCount: 1000,
				monthlyPrice: 77,
				annualPrice: 467,
				desc: `Essential for finding your prospects`,
				featureSubName: 'Everything in Free, plus',
				isFree: false,
				isEnterprise: false,
				isUsage: true,
				featuresLists: [
					{
						title: '',
						featuresIncluded: [
							'Contact management',
							'Bulk export',
							'Basic CRM integration',
							'Seller map access'
						]
					}
				]
			},
			{
				id: 1,
				name: 'Premium',
				productsDatabase: 0,
				salesEstimateCount: 2000,
				monthlyPrice: 347,
				annualPrice: 2987,
				desc: `Perfect for small teams with simple workflows`,
				featureSubName: 'Everything in Pro, plus:',
				isNew: true,
				isFree: false,
				isEnterprise: false,
				isUsage: true,
				featuresLists: [
					{
						title: '',
						featuresIncluded: [
							'Advanced prospecting filter,',
							'Bulk prospecting,',
							'Advanced decision maker data,',
							'Advanced company data',
							'Bulk prospecting (25 contacts)'
						]
					}
				]
			},
			{
				id: 3,
				name: 'Scale',
				productsDatabase: 0,
				salesEstimateCount: 3000,
				monthlyPrice: 0,
				annualPrice: 0,
				desc: `Ideal for prospecting at large scales`,
				featureSubName: 'Everything in Premium, plus:',
				isFree: false,
				isEnterprise: true,
				isUsage: false,
				featuresLists: [
					{
						title: '',
						featuresIncluded: [
							'CSV enrichment',
							'Bulk prospecting (1,000 contacts)',
							'Advanced CRM integration',
							'Buying intent signals',
							'Buying intent alerts',
							'Salesforce data enrichment',
							'Sellgo API',
							'SSO',
							'Advanced team management',
							'Dedicated account manager'
						]
					}
				]
			}
		]
	}
];
