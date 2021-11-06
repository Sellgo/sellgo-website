/* Interfaces */
import { PlanTypes } from '../../../interfaces/Pricing';

export const planTypes: PlanTypes[] = [
	{
		name: 'Pay $1.99 for a day',
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
		summary: `Invest on a research tool that's dependable, powerful and can scale up your 
			business with 7-day money back guarantee.`,
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
							'Historical Data'
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
					},
					{
						title: 'Limited Access',
						featuresIncluded: ['Seller Research', 'Keyword Research']
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
							'Variation and Multipack analysis',
							'Leads Tracker'
						]
					},
					{
						title: 'Seller Research',
						featuresIncluded: [
							'Browse Amazon sellers with Seller Database',
							'Locate Amazon Sellers with Seller Map',
							'Check sellers inventory',
							'Brand level category filter'
						]
					},
					{
						title: 'Keyword Research',
						featuresIncluded: [
							'Reveal competitor keywords with Keyword Finder',
							'Keyword research with Keyword Database',
							'Keyword tracking with Product Rank Tracker',
							'Rank drop/ raise index',
							'True Rank Performance index',
							'PPC Recampaign with Zapier integration'
						]
					},
					{
						title: 'Product Research - Incoming soon',
						featuresIncluded: []
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
				desc: `For 7-figure sellers who need the best tools. 
				Track more products, obtain more data \nand optimize your entire Amazon business.`,
				featuresLists: [
					{
						title: 'Wholesale or Private Label Team',
						featuresIncluded: [
							'Full access to Chrome Extension Sales Estimation',
							'Full access to Leads Tracker',
							'Process up to 1,000,000 ASINs monthly',
							'Track up to 3,000 ASINs daily',
							'Extension sales estimator up to 300,000 monthly',
							'Historical Data up to 1-year'
						]
					},
					{
						title: 'Seller Research',
						featuresIncluded: [
							'Full use of Seller Database',
							'Seller Map Top View 20,000 Sellers*'
						]
					},
					{
						title: 'Keyword Research',
						featuresIncluded: [
							'Full Access to Keyword Finder',
							'Advance research with Keyword Database',
							'Advance tracking with Product Rank Tracker',
							'Rank drop/ raise index',
							'True Rank Performance index',
							'PPC Recampaign with Zapier integration*'
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
