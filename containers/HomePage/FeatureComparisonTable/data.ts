export const plans = {
	LAUNCHING: 'Launching',
	SUPPLY_CHAIN: 'Supply Chain'
};

export const competitors = {
	AISTOCK: 'AiStock',
	SPREADSHEET: 'Spreadsheet',
	AMAZON_SELLER_CENTRAL: 'Amazon Seller Central',
	OTHER_SOFTWARE: 'Other Software'
};

export const features = [
	{
		name: 'Inventory Migration',
		featureAvailableInPlans: [plans.SUPPLY_CHAIN],
		featureAvailableInCompetitors: [competitors.AISTOCK]
	},
	{
		name: 'Sales Forecasting',
		featureAvailableInPlans: [plans.SUPPLY_CHAIN],
		featureAvailableInCompetitors: [competitors.AISTOCK],
		showOnDefault: true,
		isNew: true
	},
	{
		name: 'Seasonality Forecast',
		featureAvailableInPlans: [plans.LAUNCHING, plans.SUPPLY_CHAIN],
		featureAvailableInCompetitors: [competitors.AISTOCK],
		showOnDefault: true,
		isNew: true
	},
	{
		name: 'Days Until Stockout/ Days of Inventory',
		featureAvailableInPlans: [plans.SUPPLY_CHAIN],
		featureAvailableInCompetitors: [competitors.AISTOCK],
		showOnDefault: true,
		isNew: true
	},

	{
		name: 'Generate Smart Orders',
		featureAvailableInPlans: [plans.LAUNCHING, plans.SUPPLY_CHAIN],
		featureAvailableInCompetitors: [competitors.AISTOCK],
		showOnDefault: true,
		isNew: true
	},
	{
		name: 'Order Estimate to Avoid Stockout/ Overstock',
		featureAvailableInPlans: [plans.LAUNCHING, plans.SUPPLY_CHAIN],
		featureAvailableInCompetitors: [
			competitors.AISTOCK,
			competitors.SPREADSHEET
		],
		isNew: true
	},
	{
		name: 'Next Order Date to Avoid Stockout/ Overstock',
		featureAvailableInPlans: [plans.LAUNCHING, plans.SUPPLY_CHAIN],
		featureAvailableInCompetitors: [
			competitors.AISTOCK,
			competitors.SPREADSHEET
		],
		isNew: true
	},
	{
		name: 'Interactive Gantt Chart',
		featureAvailableInPlans: [plans.LAUNCHING, plans.SUPPLY_CHAIN],
		featureAvailableInCompetitors: [competitors.AISTOCK],
		isNew: true
	},
	{
		name: 'Generate PO/ Purchase Orders',
		featureAvailableInPlans: [plans.LAUNCHING, plans.SUPPLY_CHAIN],
		featureAvailableInCompetitors: [competitors.AISTOCK],
		isNew: true
	},
	{
		name: 'MOQ Smart Order Optimization',
		featureAvailableInPlans: [plans.LAUNCHING, plans.SUPPLY_CHAIN],
		featureAvailableInCompetitors: [
			competitors.AISTOCK,
			competitors.SPREADSHEET
		],
		isNew: true
	},
	{
		name: 'Inventory-level Smart Order Optimization',
		featureAvailableInPlans: [plans.SUPPLY_CHAIN],
		featureAvailableInCompetitors: [competitors.AISTOCK],
		isNew: true
	},
	{
		name: 'Time-bound Smart Order Optimization',
		featureAvailableInPlans: [plans.SUPPLY_CHAIN],
		featureAvailableInCompetitors: [
			competitors.AISTOCK,
			competitors.SPREADSHEET
		],
		isNew: true
	},
	{
		name: 'Real-time Inventory Level',
		featureAvailableInPlans: [plans.LAUNCHING, plans.SUPPLY_CHAIN],
		featureAvailableInCompetitors: [
			competitors.AISTOCK,
			competitors.AMAZON_SELLER_CENTRAL,
			competitors.OTHER_SOFTWARE
		],
		isNew: true
	},
	{
		name: '3PL Manager',
		featureAvailableInPlans: [plans.LAUNCHING, plans.SUPPLY_CHAIN],
		featureAvailableInCompetitors: [
			competitors.AISTOCK,
			competitors.OTHER_SOFTWARE
		],
		showOnDefault: true,
		isNew: true
	},
	{
		name: 'Annual Projection',
		featureAvailableInPlans: [plans.LAUNCHING, plans.SUPPLY_CHAIN],
		featureAvailableInCompetitors: [
			competitors.AISTOCK,
			competitors.SPREADSHEET
		],
		isNew: true
	},
	{
		name: 'Cash Flow Analysis',
		featureAvailableInPlans: [plans.LAUNCHING, plans.SUPPLY_CHAIN],
		featureAvailableInCompetitors: [competitors.AISTOCK],
		showOnDefault: true,
		isNew: true
	},
	{
		name: 'Bulk calculation/ Profit Finder',
		featureAvailableInPlans: [plans.LAUNCHING],
		featureAvailableInCompetitors: [competitors.AISTOCK]
	},
	{
		name: 'Product Variation and Multipack Analysis',
		featureAvailableInPlans: [plans.LAUNCHING],
		featureAvailableInCompetitors: [competitors.AISTOCK],
		showOnDefault: true
	},
	{
		name: 'Inventory analysis',
		featureAvailableInPlans: [plans.LAUNCHING],
		featureAvailableInCompetitors: [competitors.AISTOCK]
	},
	{
		name: 'Wholesale Leads Tracking',
		featureAvailableInPlans: [plans.LAUNCHING],
		featureAvailableInCompetitors: [competitors.AISTOCK]
	},
	{
		name: 'Brand Level Category Filter',
		featureAvailableInPlans: [plans.LAUNCHING],
		featureAvailableInCompetitors: [
			competitors.AISTOCK,
			competitors.OTHER_SOFTWARE
		],
		showOnDefault: true
	},
	{
		name: 'Chrome Extension',
		featureAvailableInPlans: [plans.LAUNCHING],
		featureAvailableInCompetitors: [
			competitors.AISTOCK,
			competitors.OTHER_SOFTWARE
		],
		showOnDefault: true
	},
	{
		name: 'Sales Estimation on Extension',
		featureAvailableInPlans: [plans.LAUNCHING],
		featureAvailableInCompetitors: [
			competitors.AISTOCK,
			competitors.OTHER_SOFTWARE
		]
	},
	{
		name: 'Revenue Estimation',
		featureAvailableInPlans: [plans.LAUNCHING],
		featureAvailableInCompetitors: [
			competitors.AISTOCK,
			competitors.OTHER_SOFTWARE
		]
	},
	{
		name: 'Product Analysis',
		featureAvailableInPlans: [plans.LAUNCHING],
		featureAvailableInCompetitors: [
			competitors.AISTOCK,
			competitors.OTHER_SOFTWARE
		]
	},
	{
		name: 'Product Tracking',
		featureAvailableInPlans: [plans.LAUNCHING],
		featureAvailableInCompetitors: [
			competitors.AISTOCK,
			competitors.OTHER_SOFTWARE
		]
	},
	{
		name: 'Seller Analysis at Brand, Category and Product Level',
		featureAvailableInPlans: [plans.LAUNCHING],
		featureAvailableInCompetitors: [competitors.AISTOCK],
		showOnDefault: true,
		isNew: true
	},
	{
		name: 'Map of Global Amazon Sellers',
		featureAvailableInPlans: [plans.LAUNCHING],
		featureAvailableInCompetitors: [competitors.AISTOCK],
		showOnDefault: true,
		isNew: true
	},
	{
		name: 'Average Number of Sellers per Brand',
		featureAvailableInPlans: [plans.LAUNCHING],
		featureAvailableInCompetitors: [competitors.AISTOCK]
	},
	{
		name: 'Revenue Estimate for Sellers',
		featureAvailableInPlans: [plans.LAUNCHING],
		featureAvailableInCompetitors: [competitors.AISTOCK],
		isNew: true
	},
	{
		name: 'Collect Sellers Inventory',
		featureAvailableInPlans: [plans.LAUNCHING],
		featureAvailableInCompetitors: [competitors.AISTOCK],
		isNew: true
	},
	{
		name: 'Keyword Analysis',
		featureAvailableInPlans: [plans.LAUNCHING],
		featureAvailableInCompetitors: [
			competitors.AISTOCK,
			competitors.OTHER_SOFTWARE
		],
		showOnDefault: true,
		isNew: true
	},
	{
		name: 'Keyword Search Volume Analysis',
		featureAvailableInPlans: [plans.LAUNCHING],
		featureAvailableInCompetitors: [
			competitors.AISTOCK,
			competitors.OTHER_SOFTWARE
		]
	},
	{
		name: 'Reveal Competitors Keywords',
		featureAvailableInPlans: [plans.LAUNCHING],
		featureAvailableInCompetitors: [
			competitors.AISTOCK,
			competitors.OTHER_SOFTWARE
		],
		showOnDefault: true,
		isNew: true
	},
	{
		name: 'Product Rank Tracker',
		featureAvailableInPlans: [plans.LAUNCHING, plans.SUPPLY_CHAIN],
		featureAvailableInCompetitors: [
			competitors.AISTOCK,
			competitors.OTHER_SOFTWARE
		],
		showOnDefault: true,
		isNew: true
	},
	{
		name: 'Rank Parent + Variation Tracking',
		featureAvailableInPlans: [plans.LAUNCHING, plans.SUPPLY_CHAIN],
		featureAvailableInCompetitors: [
			competitors.AISTOCK,
			competitors.OTHER_SOFTWARE
		]
	},
	{
		name: 'Rank Drop/ Raise Index',
		featureAvailableInPlans: [plans.LAUNCHING, plans.SUPPLY_CHAIN],
		featureAvailableInCompetitors: [competitors.AISTOCK],
		showOnDefault: true,
		isNew: true
	},
	{
		name: 'True Rank Performance Index',
		featureAvailableInPlans: [plans.LAUNCHING, plans.SUPPLY_CHAIN],
		featureAvailableInCompetitors: [competitors.AISTOCK],
		showOnDefault: true,
		isNew: true
	},
	{
		name: 'Zapier Integration for PPC Recampaign',
		featureAvailableInPlans: [plans.LAUNCHING, plans.SUPPLY_CHAIN],
		featureAvailableInCompetitors: [competitors.AISTOCK],
		showOnDefault: true,
		isNew: true
	}
];
