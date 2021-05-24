import { formatPlansStats, formatPlanPeriod } from '../../utils/Pricing';

export const generateHybridTable = (comparisonStats: any) => {
	const { starter, suite, professional } = comparisonStats;

	return [
		{
			header: ['Basic', 'Starter', 'Suite', 'Professional'],
			body: [
				['Money-back guarantee help', '✓', '✓', '✓'],
				['Cancel any time help', '✓', '✓', '✓'],
				['Included users', '1', '1', '7'],
				['Eligible for additional users', '-', '✓', '✓'],
				['Additional user cost', '-', '$29/mo', '$29/mo']
			]
		},
		{
			header: ['Seller Type', 'Starter', 'Suite', 'Professional'],
			body: [
				['Private Label', '✓', '✓', '✓'],
				['Wholesale', '-', '✓', '✓'],
				['Advanced Seller', '-', '-', '✓']
			]
		},
		{
			header: ['Product Research', 'Starter', 'Suite', 'Professional'],
			body: [
				['Chrome Extension', '✓', '✓', '✓'],
				[
					'Product Tracker',
					`${formatPlansStats(starter.productTracker)} products`,
					`${formatPlansStats(suite.productTracker)} products`,
					`${formatPlansStats(professional.productTracker)} products`
				],
				[
					'Amazon Best Sales Estimator',
					`${formatPlansStats(starter.salesEstimateLimit)} 
					${formatPlanPeriod(starter.salesEstimatePeriod, 'estimates')}`,

					`${formatPlansStats(suite.salesEstimateLimit)}
					${formatPlanPeriod(suite.salesEstimatePeriod, 'estimates')}`,

					`${formatPlansStats(
						professional.salesEstimateLimit
					)} 	${formatPlanPeriod(professional.salesEstimatePeriod, 'estimates')}`
				],
				['Inventory Insight', '-', '✓', '✓'],
				['Market share insight', '-', '✓', '✓']
			]
		},
		{
			header: ['Bulk Profit Research', 'Starter', 'Suite', 'Professional'],
			body: [
				[
					'Profit Finder',

					`${formatPlansStats(starter.profitFinder)} ${formatPlanPeriod(
						starter.profitFinderPeriod,
						'products'
					)}`,
					`${formatPlansStats(suite.profitFinder)} ${formatPlanPeriod(
						suite.profitFinderPeriod,
						'products'
					)}`,

					`${formatPlansStats(professional.profitFinder)} ${formatPlanPeriod(
						professional.profitFinderPeriod,
						'products'
					)}`
				],
				['Additional bulk processing', '-', '-', '-'],
				['Data input (UPC, EAN, ASIN, ISBN)', '✓', '✓', '✓'],
				['Data Buster', '-', '✓', '✓'],
				['Smart Filter', '-', '✓', '✓'],
				['Bulk + Filtered Data Export', '✓', '✓', '✓'],
				['Variation Analysis', '✓', '✓', '✓'],
				['Multipack Analysis', '✓', '✓', '✓'],
				[
					'Leads Tracker',
					`${formatPlansStats(starter.leadsTracker)} products`,
					`${formatPlansStats(suite.leadsTracker)} products`,
					`${formatPlansStats(professional.leadsTracker)} products`
				]
			]
		},
		{
			header: ['Seller Research', 'Starter', 'Suite', 'Professional'],
			body: [
				[
					'Seller Finder',
					`${formatPlansStats(starter.sellerFinderLimit)} ${formatPlanPeriod(
						starter.sellerFinderPeriod,
						'sellers'
					)}`,

					`${formatPlansStats(suite.sellerFinderLimit)} ${formatPlanPeriod(
						suite.sellerFinderPeriod,
						'sellers'
					)}`,

					`${formatPlansStats(
						professional.sellerFinderLimit
					)} ${formatPlanPeriod(professional.sellerFinderPeriod, 'sellers')}`
				],

				['Export Seller Data', '-', 'Annual plan', 'Annual plan'],
				['Check Seller Inventory', '-', '✓', '✓'],
				['Brand Finder', '-', '✓', '✓']
			]
		},
		{
			header: ['Data Analytics', 'Starter', 'Suite', 'Professional'],
			body: [
				['True Sales Estimates', '✓', '✓', '✓'],
				[
					'Historical Product Tracking Data',
					`${starter.trackHistory} month`,
					`${suite.trackHistory} month`,
					`${professional.trackHistory === 12 ? '1 year' : ''}`
				]
			]
		}
	];
};

export const pay1DayAllFeatures = [
	{
		header: ['Basic', 'Extension', 'Product Research', 'Seller Research'],
		body: [
			['Money-back guarantee help', '✓', '✓', '✓'],
			['Cancel any time help', '✓', '✓', '✓'],
			['Included users', '1', '1', '1'],
			['Eligible for additional users', '-', '-', '-'],
			['Additional user cost', '-', '-', '-'],
			['No need Amazon MWS', '✓', '✓', '✓']
		]
	},
	{
		header: ['Seller Type', 'Starter', 'Suite', 'Professional'],
		body: [
			['Private Label', '✓', '✓', '✓'],
			['Wholesale', '-', '✓', '✓'],
			['Advanced Seller', '-', '-', '✓']
		]
	},
	{
		header: ['Tools', 'Extension', 'Product Research', 'Seller Research'],
		body: [
			['Chrome Extension', '✓', '-', '-'],
			['Amazon Best Sales Estimator', '30 estimates/day', '-', '-'],
			['Search Management', '-', '✓', '-'],
			['Profit Finder', '-', '✓', '-'],
			['Bulk Processing Includes', '-', '500 products daily', '-'],
			['Data Input (UPC, EAN, ASIN, ISBN)', '-', '✓', '-'],
			['Upload Error Analysis', '-', '✓', '-'],
			['Product Tracker', '-', '50 products', '-'],
			['Data Visualization', '-', '✓', '-'],
			['True Sales Estimates', '-', '✓', '-'],
			['Variation Analysis', '-', '✓', '-'],
			['Multipack Analysis', '-', '✓', '-'],
			['Seller Finder', '-', '-', '10 sellers daily'],
			['Export Seller Data', '-', 'Annual plan', 'Annual plan'],
			['Check Seller Inventory', '-', '-', '50 inventories'],
			['Brand Finder', '-', '-', '5 brands']
		]
	},
	{
		header: ['Bulk Profit Research', 'Starter', 'Suite', 'Professional'],
		body: [
			[
				'Profit Finder',
				'3,000 products/day',
				'300,000 products/mo',
				'1,000,000 products/mo'
			],
			['Additional bulk processing', '-', '-', '-'],
			['Data input (UPC, EAN, ASIN, ISBN)', '✓', '✓', '✓'],
			['Data Buster', '-', '✓', '✓'],
			['Smart Filter', '-', '✓', '✓'],
			['Bulk + Filtered Data Export', '✓', '✓', '✓'],
			['Variation Analysis', '✓', '✓', '✓'],
			['Multipack Analysis', '✓', '✓', '✓'],
			['Leads Tracker', '3,000 products', '10,000 products', '30,000 products']
		]
	},
	{
		header: ['Seller Research', 'Starter', 'Suite', 'Professional'],
		body: [
			[
				'Seller Finder',
				'20 sellers/day',
				'1,000 sellers/mo',
				'5,000 sellers/mo'
			],
			['Export Seller Data', '-', 'Annual plan', 'Annual plan'],
			['Check Seller Inventory', '-', '✓', '✓'],
			['Brand Finder', '-', '✓', '✓']
		]
	},
	{
		header: ['Data Analytics', 'Starter', 'Suite', 'Professional'],
		body: [
			['True Sales Estimates', '✓', '✓', '✓'],
			['Historical Product Tracking Data', '1 month', '3 month', '1 year']
		]
	}
];
