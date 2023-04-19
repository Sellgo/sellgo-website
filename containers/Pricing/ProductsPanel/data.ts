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
	// {
	// 	name: 'Usage-based Subscription',
	// 	content: 'Pay less on software, invest more in your business.',
	// 	img: 'instant-download.svg',
	// 	isNew: false
	// },
	// {
	// 	name: 'Account-based Solution',
	// 	content: 'Get your most wanted data in seconds, no hassle.',
	// 	img: 'chartnetworkIcon.svg',
	// 	isNew: false
	// }
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
				id: 6, // subscriptionID if needed
				name: 'Professional',
				productsDatabase: 0,
				salesEstimateCount: 1000,
				monthlyPrice: 499,
				annualPrice: 4790,
				users: 1,
				lookups: 12000,
				desc: `Essential for finding your prospects`,
				featureSubName: 'Free',
				isFirstPlan: true,
				isSecondPlan: false,
				isThirdPlan: false,
				isNew: true,
				isFree: false,
				isEnterprise: false,
				isUsage: true,
				featuresLists: [
					{
						title: '',
						featuresIncluded: [
							'Unlimited search',
							'Bulk list export',
							'CRM integration'
						]
					}
				]
			},
			{
				id: 1,
				name: 'Team',
				productsDatabase: 0,
				salesEstimateCount: 2000,
				monthlyPrice: 749,
				annualPrice: 7190,
				users: 3,
				lookups: 24000,
				desc: `Perfect for small teams`,
				featureSubName: 'Professional',
				isFirstPlan: false,
				isSecondPlan: true,
				isThirdPlan: false,
				isNew: false,
				isFree: false,
				isEnterprise: false,
				isUsage: true,
				featuresLists: [
					{
						title: '',
						featuresIncluded: ['Roles & permissions', 'Assign team members']
					}
				]
			},
			{
				id: 1,
				name: 'Business',
				productsDatabase: 0,
				salesEstimateCount: 2000,
				monthlyPrice: 999,
				annualPrice: 9590,
				users: 5,
				lookups: 60000,
				desc: `Perfect for small teams`,
				featureSubName: 'Team',
				isFirstPlan: false,
				isSecondPlan: false,
				isThirdPlan: true,
				isNew: false,
				isFree: false,
				isEnterprise: false,
				isUsage: true,
				featuresLists: [
					{
						title: '',
						featuresIncluded: [
							'Buying intent signals',
							'Decision maker enrichment',
							'Advanced engagement',
							'Sellgo customer support'
						]
					}
				]
			},
			{
				id: 3,
				name: 'Enterprise',
				productsDatabase: 0,
				salesEstimateCount: 3000,
				monthlyPrice: 0,
				annualPrice: 0,
				users: 5,
				lookups: 100000,
				desc: `Ideal for prospecting at large scales`,
				featureSubName: 'Business',
				isFirstPlan: false,
				isSecondPlan: false,
				isThirdPlan: false,
				isFree: false,
				isEnterprise: true,
				isUsage: false,
				featuresLists: [
					{
						title: '',
						featuresIncluded: [
							'Social ads analytics',
							'Advanced CRM integration',
							'Buying intent tracker',
							'Dedicated account manager'
						]
					}
				]
			}
		]
	}
];
