/* Interfaces */
import { PlanTypes } from '../../../interfaces/Pricing';

export const planTypes: PlanTypes[] = [
	{
		name: 'Free Tools',
		isNew: false
	},
	{
		name: 'Monthly and annual plans',
		isNew: false
	}
];

export const plansAndProductsDetails = [
	{
		planName: 'Monthly and annual pricing plans',
		summary: `Supply chain? Product research? Keyword research? Seller data? We've got your back.`,

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
				name: 'Starter',
				productsDatabase: 0,
				salesEstimateCount: 1000,
				monthlyPrice: 37,
				annualPrice: 324,
				desc: `Get access to our tools and Chrome Extension!`,
				featureSubName: 'Start with',
				featuresLists: [
					{
						title: 'Discover Best Selling',
						featuresIncluded: [
							'Full access to the Chrome Extension',
							'Basic access to AiStock',
							'Limited access to the rest of Sellgo all-in-one tool'
						]
					},
					{
						title: 'Avoiding Stockout',
						featuresIncluded: ['Basic access to AiStock']
					},
					{
						title: 'Optimize wholesale leads',
						featuresIncluded: [
							'Full access to Profit Finder',
							'Variation and multipack analysis'
						]
					}
				]
			},
			{
				id: 1,
				name: 'Professional',
				productsDatabase: 0,
				salesEstimateCount: 2000,
				monthlyPrice: 97,
				annualPrice: 924,
				featureSubName: 'Full Single-user Access, Plus',
				desc: `For most sellers looking to grow rapidly.`,
				isNew: true,
				featuresLists: [
					{
						title: 'Keyword research',
						featuresIncluded: [
							'Reveal competitor keywords with Keyword Finder',
							'Keyword tracking with Product Rank Tracker',
							'Rank drop/ raise index'
						]
					},
					{
						title: 'Seller research',
						featuresIncluded: [
							'Locate Amazon sellers with Seller Database/ Map',
							'Check sellers inventory',
							'Brand level category filter'
						]
					},
					{
						title: 'Product Research',
						featuresIncluded: [
							'Full access to Chrome Extension Sales Estimation',
							'Full access to Product Research',
							'Historical data up to 1-year'
						]
					}
				]
			},
			{
				id: 2,
				name: 'Team',
				productsDatabase: 0,
				salesEstimateCount: 3000,
				monthlyPrice: 177,
				annualPrice: 1764,
				featureSubName: 'Everything in Professional Plan, Plus',
				desc: `For top sellers who need the best tools.`,
				featuresLists: [
					{
						title: 'Keyword Research',
						featuresIncluded: [
							'Full Access to Keyword Finder/ Database',
							'True Rank Performance index',
							'PPC recampaign with Zapier integration*'
						]
					},
					{
						title: 'Seller Research',
						featuresIncluded: [
							'Full use of Seller Database/ Map',
							'Seller Map top view 20,000 sellers*'
						]
					},
					{
						title: 'Advanced access',
						featuresIncluded: ['Multi-user login', 'Priority onboarding']
					}
				]
			}
		]
	}
];
