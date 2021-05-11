export const planTypes = [
	{
		name: 'Free Trial',
		isNew: false
	},
	{
		name: 'Pay $1 for a Day',
		isNew: false
	},
	{
		name: 'Pay $1 for the 1st Month',
		isNew: false
	}
];

export const plansAndProductsDetails = [
	{
		planName: 'Pay $1 for a day',
		productsIncluded: [
			{
				name: 'Browser Extension',
				productsDatabase: 0,
				salesEstimateCount: 30,
				yearlyPrice: 500,
				annualPrice: 600,
				featureSubName: 'Free Account Plus',
				featuresLists: [
					{
						title: 'Amazon Sales Estimator',
						featuresIncluded: [
							'30 estimates daily',
							'True Sales Estimate',
							'Leaf Sourcing'
						]
					}
				]
			},
			{
				name: 'Product Research',
				productsDatabase: 0,
				salesEstimateCount: 0,
				yearlyPrice: 600,
				annualPrice: 700,
				featureSubName: 'Free Account Plus',
				featuresLists: [
					{
						title: 'Wholesale Features',
						featuresIncluded: [
							'Search Management',
							'Profit Finder 500 products daily',
							'Variation Analysis',
							'Multipack Analysis'
						]
					},
					{
						title: 'Private Label Features',
						featuresIncluded: ['Product Tracker 50 products daily']
					}
				]
			},
			{
				name: 'Seller Research',
				productsDatabase: 0,
				salesEstimateCount: 0,
				yearlyPrice: 700,
				annualPrice: 800,
				featureSubName: 'Free Account Plus',
				featuresLists: [
					{
						title: 'Wholesale Features',
						featuresIncluded: [
							'Super Targeting',
							'Seller Database',
							'Seller Finder',
							'Brand Finder',
							'Check Seller Inventory'
						]
					}
				]
			}
		]
	},
	{
		planName: 'Pay $1 for the entire first month of membership',
		productsIncluded: [
			{
				name: 'Starter',
				productsDatabase: 0,
				salesEstimateCount: 1000,
				monthlyPrice: 49,
				annualPrice: 348,
				featureSubName: 'Free tools plus',
				featuresLists: [
					{
						title: 'Discover Best Selling',
						featuresIncluded: [
							'Full access to the Chrome extension',
							'Profit Finder FBA bulk calculation',
							'Data input as UPC, EAN, ASIN, ISBN'
						]
					},
					{
						title: 'Understand Your Leads',
						featuresIncluded: [
							'Supplier analytics',
							'Product Tracker',
							'Historical Data'
						]
					}
				]
			},
			{
				name: 'Suite',
				productsDatabase: 0,
				salesEstimateCount: 1500,
				monthlyPrice: 69,
				annualPrice: 504,
				featureSubName: 'Starter Plus',
				featuresLists: [
					{
						title: 'Advanced profit scout',
						featuresIncluded: [
							'Full access to Profit Finder Web App',
							'Instant analytics with Data Buster',
							'Advanced filter preset',
							'Bulk product error analysis',
							'Bulk filtered data export'
						]
					},
					{
						title: 'Optimize your leads',
						featuresIncluded: [
							'Product analysis',
							'Bulk variation analysis',
							'Competitive seller analysis',
							'Inventory insight',
							'Market share insight'
						]
					}
				]
			},
			{
				name: 'Professional',
				productsDatabase: 0,
				salesEstimateCount: 2500,
				monthlyPrice: 129,
				annualPrice: 996,
				featureSubName: 'Professional Plus',
				featuresLists: [
					{
						title: 'Advance your leads',
						featuresIncluded: [
							'Full access to Leads Tracker',
							'Bulk multipack analysis',
							'Process up to 1,000,000 ASINs monthly',
							'Track up to 1,000 ASINs daily'
						]
					},
					{
						title: 'Seller Reverse Research',
						featuresIncluded: [
							'Seller Finder',
							'Check sellers inventory',
							'Brand finder'
						]
					},
					{
						title: 'Advanced access',
						featuresIncluded: ['7 users included', 'Priority onboarding']
					}
				]
			}
		]
	}
];
