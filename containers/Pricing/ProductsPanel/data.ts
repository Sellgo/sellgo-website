/* Interfaces */
import { PlanTypes } from '../../../interfaces/Pricing';

export const planTypes: PlanTypes[] = [
	{
		name: 'Pay $1 for a day',
		isNew: true
	},
	{
		name: 'Monthly and Annual Plans',
		isNew: false
	}
];

export const plansAndProductsDetails = [
	{
		planName: 'Monthly and Annual Pricing Plans',
		summary: 'Try Our Premium Tools and Access Real-Data for $1!',
		infoAlertMessage: {
			monthly: {
				head: `Pay only $1 for the entire first month of starter membership`,
				desc: ``,
				navigateTo: '/pricing?type=free-trial',
				navigateLabel: 'Learn More'
			},
			yearly: {
				head: `Pay only $1 for the entire first month of starter membership`,
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
				salesEstimateCount: 500,
				monthlyPrice: 37,
				annualPrice: 323,
				desc: `The toolbox for beginner sellers. \n Get access to our tools and chrome extension!`,
				featureSubName: 'Start with',
				featuresLists: [
					{
						title: 'Discover Best Selling',
						featuresIncluded: [
							'Full access to the Chrome extension',
							'Profit Finder FBA bulk calculation',
							'Data input as UPC, EAN, ASIN, ISBN',
							'Instant analytics with Data Buster',
							'Historical Data',
							'Product Tracker'
						]
					},
					{
						title: 'Understand Wholesale Leads',
						featuresIncluded: [
							'Basic Wholesale Supplier analytics',
							'Bulk product error analysis',
							'Bulk variation analysis',
							'Basic Private Label Product Analysis'
						]
					}
				]
			},
			{
				id: 1,
				name: 'Professional',
				productsDatabase: 0,
				salesEstimateCount: 5000,
				monthlyPrice: 97,
				annualPrice: 971,
				featureSubName: 'Starter Plan Plus',
				desc: `For experienced sellers looking to grow \n their businesses and maximize their earnings.`,
				isNew: true,
				featuresLists: [
					{
						title: 'Optimize Wholesale leads',
						featuresIncluded: [
							'Full access to Profit Finder',
							'Instant analytics with Data Buster',
							'Smart filter preset',
							'Inventory insight',
							'Market share insight',
							'Bulk filtered data export',
							'Leads Tracker',
							'Historical Data up to 1-year'
						]
					},
					{
						title: 'Seller Research',
						featuresIncluded: [
							'Seller Database',
							'Seller Map',
							'Check sellers inventory',
							'Brand finder'
						]
					}
				]
			},
			{
				id: 2,
				name: 'Team',
				productsDatabase: 0,
				salesEstimateCount: 10000,
				monthlyPrice: 177,
				annualPrice: 1763,
				featureSubName: 'Professional Plan Plus',
				desc: `For 7-figure sellers who need the best tools. 
				Track more products, obtain more data \nand optimize your entire Amazon business.`,
				featuresLists: [
					{
						title: 'Wholesale or Private Label Team',
						featuresIncluded: [
							'Full access to Leads Tracker',
							'Bulk multipack analysis',
							'Process up to 1,000,000 ASINs monthly',
							'Track up to 3,000 ASINs daily',
							'Extension sales estimator up to 300,000 monthly',
							'Historical Data up to 1-year',
							'Product Database'
						]
					},
					{
						title: 'Seller Research',
						featuresIncluded: [
							'Advanced Seller Database',
							'Seller Map Top View 20,000 Sellers',
							'Brand finder'
						]
					},

					{
						title: 'Advanced access',
						featuresIncluded: [
							'3 users included',
							'Additional users',
							'Priority onboarding'
						]
					},
					{
						title: 'Product Research - Incoming soon',
						featuresIncluded: []
					},
					{
						title: 'Keyword Research - Incoming soon',
						featuresIncluded: []
					}
				]
			}
		]
	}
];

export const sellerScoutGoPlanDetails = {
	monthlyPrice: 117,
	annualPrice: 1163,
	salesEstimate: 0,
	productsDatabase: 0,
	title: 'Seller Scout Pro Plan',
	description:
		'Browse 1M+ Amazon Sellers, 450K+ U.S. Sellers, 700K+ Wholesale Sellers,  100K+ Private Label Sellers',
	productsList: ['Seller Database', 'Seller Map', 'Seller Finder']
};
