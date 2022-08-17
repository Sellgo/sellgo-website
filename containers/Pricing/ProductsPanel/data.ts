/* Interfaces */
import { PlanTypes } from '../../../interfaces/Pricing';

export const planTypes: PlanTypes[] = [
	/* {
		name: 'Free Tools',
		isNew: false
	},
	{
		name: 'Monthly and annual plans',
		isNew: false
	} */
];

export const plansAndProductsDetails = [
	{
		planName: 'Pricing & Plans',
		summary: `Sellgo offers flexible packages across our portfolio of data-driven solutions and premium applications.`,

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
				desc: `Accelerate your seller research process.`,
				featureSubName: 'Start with',
				featuresLists: [
					{
						title: 'Own your market',
						featuresIncluded: [
							'Accurate contacts and locations',
							'Basic seller revenue insights',
							'Basic seller map access'
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
				featureSubName: 'For single-user access, plus',
				desc: `Find the best seller, faster.`,
				isNew: true,
				featuresLists: [
					{
						title: 'Turn leads into pipeline',
						featuresIncluded: [
							'Essential contact data and advanced company insights',
							'Export data for annual plan',
							'Advanced quota'
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
				featureSubName: 'Everything in professional plan, plus',
				desc: `Achieve more ROI.`,
				featuresLists: [
					{
						title: 'Hit revenue goals',
						featuresIncluded: [
							'Advanced seller search with accurate contact data',
							'Full use of Seller Database/ Map',
							'Seller Map top view 20,000 sellers*',
						]
					}
				]
			}
		]
	}
];
