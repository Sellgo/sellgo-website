export const planTypes = [
	{
		name: 'Free Trial',
		isNew: false
	},
	{
		name: 'Pay $1 a Day',
		isNew: false
	},
	{
		name: 'Monthly and Annual Plans',
		isNew: false
	}
];

export const plansAndProductsDetails = [
	{
		planName: 'Pay $1 for a Day',
		productsIncluded: [
			{
				name: 'Browser Extension',
				productsDatabase: 0,
				salesEstimateCount: 30,
				yearlyPrice: 500,
				annualPrice: 600,
				featureSubName: 'Free Account Plus',
				ctaLink: '/',
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
				ctaLink: '/',
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
				ctaLink: '/',
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
		planName: 'Monthly and Annual Pricing Plans',
		productsIncluded: [
			{
				name: 'Starter',
				productsDatabase: 0,
				salesEstimateCount: 1000,
				monthlyPrice: 49,
				annualPrice: 348,
				ctaLink: 'https://app.sellgo.com/subscription/?type=basic&mode=yearly',
				desc: `The toolbox for beginner sellers. \n Get access to our tools and chrome extension!`,
				featureSubName: 'Start with',
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
				annualPrice: 588,
				ctaLink: '/',
				featureSubName: 'Starter Plan Plus',
				desc: `For experienced sellers looking to grow \n their businesses and maximize their earnings.`,
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
				ctaLink: '/',
				featureSubName: 'Suite Plan Plus',
				desc: `For professional sellers and businesses who need the best \n tools. Track more products, obtain more data, and optimize your entire Amazon business.`,
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
