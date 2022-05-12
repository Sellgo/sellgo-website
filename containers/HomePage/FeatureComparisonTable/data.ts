export const plans = {
	WHOLESALE: 'Wholesale / Arbitrage',
	PRIVATE_LABEL: 'Private Label'
};

export const competitors = {
	SELLGO: 'Sellgo',
	JUNGLE_SCOUT: 'Jungle Scout',
	HELIUM_10: 'Helium 10',
	KEEPA: 'Keepa'
};

export const features = [
	{
		name: 'Bulk calculation/ Profit Finder',
		featureAvailableInPlans: [plans.WHOLESALE],
		featureAvailableInCompetitors: [competitors.SELLGO]
	},
	{
		name: 'Product Variation and Multipack Analysis',
		featureAvailableInPlans: [plans.WHOLESALE],
		featureAvailableInCompetitors: [competitors.SELLGO],
		showOnDefault: true
	},
	{
		name: 'Inventory analysis',
		featureAvailableInPlans: [plans.WHOLESALE],
		featureAvailableInCompetitors: [competitors.SELLGO]
	},
	{
		name: 'Wholesale Leads Tracking',
		featureAvailableInPlans: [plans.WHOLESALE],
		featureAvailableInCompetitors: [competitors.SELLGO]
	},
	{
		name: 'Brand Level Category Filter',
		featureAvailableInPlans: [plans.WHOLESALE],
		featureAvailableInCompetitors: [competitors.SELLGO, competitors.KEEPA],
		showOnDefault: true
	},
	{
		name: 'Chrome Extension',
		featureAvailableInPlans: [plans.WHOLESALE, plans.PRIVATE_LABEL],
		featureAvailableInCompetitors: [
			competitors.SELLGO,
			competitors.JUNGLE_SCOUT,
			competitors.HELIUM_10,
			competitors.KEEPA
		],
		showOnDefault: true
	},
	{
		name: 'Sales Estimation',
		featureAvailableInPlans: [plans.WHOLESALE, plans.PRIVATE_LABEL],
		featureAvailableInCompetitors: [
			competitors.SELLGO,
			competitors.JUNGLE_SCOUT,
			competitors.HELIUM_10
		],
		showOnDefault: true
	},
	{
		name: 'Revenue Estimation',
		featureAvailableInPlans: [plans.WHOLESALE, plans.PRIVATE_LABEL],
		featureAvailableInCompetitors: [
			competitors.SELLGO,
			competitors.JUNGLE_SCOUT,
			competitors.HELIUM_10
		]
	},
	{
		name: 'Product Analysis',
		featureAvailableInPlans: [plans.WHOLESALE, plans.PRIVATE_LABEL],
		featureAvailableInCompetitors: [
			competitors.SELLGO,
			competitors.JUNGLE_SCOUT,
			competitors.HELIUM_10,
			competitors.KEEPA
		]
	},
	{
		name: 'Product Tracking',
		featureAvailableInPlans: [plans.WHOLESALE, plans.PRIVATE_LABEL],
		featureAvailableInCompetitors: [
			competitors.SELLGO,
			competitors.JUNGLE_SCOUT,
			competitors.HELIUM_10,
			competitors.KEEPA
		]
	},
	{
		name: 'Seller Analysis at Brand, Category and Product Level',
		featureAvailableInPlans: [plans.WHOLESALE, plans.PRIVATE_LABEL],
		featureAvailableInCompetitors: [competitors.SELLGO],
		showOnDefault: true,
		isNew: true
	},
	{
		name: 'Map of Global Amazon Sellers',
		featureAvailableInPlans: [plans.WHOLESALE, plans.PRIVATE_LABEL],
		featureAvailableInCompetitors: [competitors.SELLGO],
		showOnDefault: true,
		isNew: true
	},
	{
		name: 'Average Number of Sellers per Brand',
		featureAvailableInPlans: [plans.WHOLESALE, plans.PRIVATE_LABEL],
		featureAvailableInCompetitors: [competitors.SELLGO]
	},
	{
		name: 'Revenue Estimate for Sellers',
		featureAvailableInPlans: [plans.WHOLESALE, plans.PRIVATE_LABEL],
		featureAvailableInCompetitors: [competitors.SELLGO],
		isNew: true
	},
	{
		name: 'Collect Sellers Inventory',
		featureAvailableInPlans: [plans.WHOLESALE, plans.PRIVATE_LABEL],
		featureAvailableInCompetitors: [competitors.SELLGO],
		isNew: true
	},
	{
		name: 'Keyword Analysis',
		featureAvailableInPlans: [plans.WHOLESALE, plans.PRIVATE_LABEL],
		featureAvailableInCompetitors: [
			competitors.SELLGO,
			competitors.JUNGLE_SCOUT,
			competitors.HELIUM_10
		],
		showOnDefault: true,
		isNew: true
	},
	{
		name: 'Keyword Search Volume Analysis',
		featureAvailableInPlans: [plans.WHOLESALE, plans.PRIVATE_LABEL],
		featureAvailableInCompetitors: [
			competitors.SELLGO,
			competitors.JUNGLE_SCOUT,
			competitors.HELIUM_10
		]
	},
	{
		name: 'Reveal Competitors Keywords',
		featureAvailableInPlans: [plans.WHOLESALE, plans.PRIVATE_LABEL],
		featureAvailableInCompetitors: [
			competitors.SELLGO,
			competitors.JUNGLE_SCOUT,
			competitors.HELIUM_10
		],
		showOnDefault: true,
		isNew: true
	},
	{
		name: 'Product Rank Tracker',
		featureAvailableInPlans: [plans.WHOLESALE, plans.PRIVATE_LABEL],
		featureAvailableInCompetitors: [
			competitors.SELLGO,
			competitors.JUNGLE_SCOUT,
			competitors.HELIUM_10
		],
		showOnDefault: true,
		isNew: true
	},
	{
		name: 'Rank Parent + Variation Tracking',
		featureAvailableInPlans: [plans.WHOLESALE, plans.PRIVATE_LABEL],
		featureAvailableInCompetitors: [competitors.SELLGO, competitors.HELIUM_10]
	},
	{
		name: 'Rank Drop/ Raise Index',
		featureAvailableInPlans: [plans.WHOLESALE, plans.PRIVATE_LABEL],
		featureAvailableInCompetitors: [competitors.SELLGO],
		showOnDefault: true,
		isNew: true
	},
	{
		name: 'True Rank Performance Index',
		featureAvailableInPlans: [plans.WHOLESALE, plans.PRIVATE_LABEL],
		featureAvailableInCompetitors: [competitors.SELLGO],
		showOnDefault: true,
		isNew: true
	},
	{
		name: 'Zapier Integration for PPC Recampaign',
		featureAvailableInPlans: [plans.WHOLESALE, plans.PRIVATE_LABEL],
		featureAvailableInCompetitors: [competitors.SELLGO],
		showOnDefault: true,
		isNew: true
	}
];
