export const planTypes = [
	{
		name: 'Free Trial',
		isNew: false
	},
	{
		name: 'Pay As You Go',
		isNew: false
	},
	{
		name: 'Wholesale',
		isNew: false
	}
];

export const plansAndProductsDetails = [
	{
		planName: 'Pay As You Go',
		productsIncluded: [
			{
				name: 'Profit Finder',
				productsDatabase: 1000,
				salesEstimateCount: 0,
				yearlyPrice: 500,
				annualPrice: 600,
				featureSubName: 'Starter Plus',
				featuresLists: [
					{
						title: 'Feature 1',
						featuresIncluded: ['Starter Plus', 'Starter Plus']
					},
					{
						title: 'Feature 2',
						featuresIncluded: ['Starter Plus', 'Starter Plus', 'Starter Plus']
					},
					{
						title: 'Feature 3',
						featuresIncluded: [
							'Starter Plus',
							'Starter Plus',
							'Starter Plus',
							'Starter Plus'
						]
					}
				]
			},
			{
				name: 'Browser Extension',
				productsDatabase: 2000,
				salesEstimateCount: 0,
				yearlyPrice: 600,
				annualPrice: 700,
				featureSubName: 'Starter Plus',
				featuresLists: [
					{
						title: 'Feature 1',
						featuresIncluded: [
							'Starter Plus',
							'Starter Plus',
							'Starter Plus',
							'Starter Plus'
						]
					},
					{
						title: 'Feature 2',
						featuresIncluded: [
							'Starter Plus',
							'Starter Plus',
							'Starter Plus',
							'Starter Plus'
						]
					},
					{
						title: 'Feature 3',
						featuresIncluded: [
							'Starter Plus',
							'Starter Plus',
							'Starter Plus',
							'Starter Plus'
						]
					}
				]
			},
			{
				name: 'Seller Finder',
				productsDatabase: 3000,
				salesEstimateCount: 0,
				yearlyPrice: 700,
				annualPrice: 800,
				featureSubName: 'Starter Plus',
				featuresLists: [
					{
						title: 'Feature 1',
						featuresIncluded: [
							'Starter Plus',
							'Starter Plus',
							'Starter Plus',
							'Starter Plus'
						]
					},
					{
						title: 'Feature 2',
						featuresIncluded: [
							'Starter Plus',
							'Starter Plus',
							'Starter Plus',
							'Starter Plus'
						]
					},
					{
						title: 'Feature 3',
						featuresIncluded: [
							'Starter Plus',
							'Starter Plus',
							'Starter Plus',
							'Starter Plus'
						]
					}
				]
			}
		]
	},
	{
		planName: 'Wholesale Go',
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
				salesEstimateCount: 2000,
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
				salesEstimateCount: 3000,
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
