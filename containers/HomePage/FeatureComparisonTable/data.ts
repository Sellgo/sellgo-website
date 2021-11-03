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
		name: 'Product Variation Analysis',
		featureAvailableInPlans: [plans.WHOLESALE],
		featureAvailableInCompetitors: [competitors.SELLGO]
	},
	{
		name: 'Product Multipack Analysis',
		featureAvailableInPlans: [plans.WHOLESALE],
		featureAvailableInCompetitors: [competitors.SELLGO]
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
		featureAvailableInCompetitors: [competitors.SELLGO, competitors.KEEPA]
	},
	{
		name: 'Chrome Extension',
		featureAvailableInPlans: [plans.WHOLESALE, plans.PRIVATE_LABEL],
		featureAvailableInCompetitors: [
			competitors.SELLGO,
			competitors.JUNGLE_SCOUT,
			competitors.HELIUM_10,
			competitors.KEEPA
		]
	},
	{
		name: 'Sales Estimation',
		featureAvailableInPlans: [plans.WHOLESALE, plans.PRIVATE_LABEL],
		featureAvailableInCompetitors: [
			competitors.SELLGO,
			competitors.JUNGLE_SCOUT,
			competitors.HELIUM_10
		]
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
		featureAvailableInCompetitors: [competitors.SELLGO]
	},
	{
		name: 'Map of Global Amazon Sellers',
		featureAvailableInPlans: [plans.WHOLESALE, plans.PRIVATE_LABEL],
		featureAvailableInCompetitors: [competitors.SELLGO]
	},
	{
		name: 'Average Number of Sellers per Brand',
		featureAvailableInPlans: [plans.WHOLESALE, plans.PRIVATE_LABEL],
		featureAvailableInCompetitors: [competitors.SELLGO]
	},
	{
		name: 'Revenue Estimate for Sellers',
		featureAvailableInPlans: [plans.WHOLESALE, plans.PRIVATE_LABEL],
		featureAvailableInCompetitors: [
			competitors.SELLGO,
			competitors.JUNGLE_SCOUT,
			competitors.HELIUM_10,
			competitors.KEEPA
		]
	},
	{
		name: 'Collect Sellers Inventory',
		featureAvailableInPlans: [plans.WHOLESALE, plans.PRIVATE_LABEL],
		featureAvailableInCompetitors: [competitors.SELLGO]
	},
	{
		name: 'Keyword Analysis',
		featureAvailableInPlans: [plans.WHOLESALE, plans.PRIVATE_LABEL],
		featureAvailableInCompetitors: [
			competitors.SELLGO,
			competitors.JUNGLE_SCOUT,
			competitors.HELIUM_10
		]
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
		]
	},
	{
		name: 'Product Rank Tracker',
		featureAvailableInPlans: [plans.WHOLESALE, plans.PRIVATE_LABEL],
		featureAvailableInCompetitors: [
			competitors.SELLGO,
			competitors.JUNGLE_SCOUT,
			competitors.HELIUM_10
		]
	},
	{
		name: 'Rank Parent + Variation Tracking',
		featureAvailableInPlans: [plans.WHOLESALE, plans.PRIVATE_LABEL],
		featureAvailableInCompetitors: [
			competitors.SELLGO,
			competitors.JUNGLE_SCOUT,
			competitors.HELIUM_10,
			competitors.KEEPA
		]
	},
	{
		name: 'Rank Drop/ Raise Index',
		featureAvailableInPlans: [plans.WHOLESALE, plans.PRIVATE_LABEL],
		featureAvailableInCompetitors: [
			competitors.SELLGO,
			competitors.JUNGLE_SCOUT,
			competitors.HELIUM_10,
			competitors.KEEPA
		]
	},
	{
		name: 'True Rank Performance Index',
		featureAvailableInPlans: [plans.WHOLESALE, plans.PRIVATE_LABEL],
		featureAvailableInCompetitors: [
			competitors.SELLGO,
			competitors.JUNGLE_SCOUT,
			competitors.HELIUM_10,
			competitors.KEEPA
		]
	},
	{
		name: 'Zapier Integration for PPC Recampaign',
		featureAvailableInPlans: [plans.WHOLESALE, plans.PRIVATE_LABEL],
		featureAvailableInCompetitors: [competitors.SELLGO]
	},
	{
		name: 'Chrome Extension',
		featureAvailableInPlans: [plans.WHOLESALE, plans.PRIVATE_LABEL],
		featureAvailableInCompetitors: [
			competitors.SELLGO,
			competitors.JUNGLE_SCOUT,
			competitors.HELIUM_10,
			competitors.KEEPA
		]
	}
];