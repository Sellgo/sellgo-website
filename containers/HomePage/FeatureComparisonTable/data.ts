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
		name: 'Bulk calculation/ zProfit Finder',
		featureAvailableInPlans: [plans.WHOLESALE],
		featureAvailableInCompetitors: [competitors.SELLGO]
	},
	{
		name: 'Variation Analysis',
		featureAvailableInPlans: [plans.WHOLESALE],
		featureAvailableInCompetitors: [competitors.SELLGO]
	},
	{
		name: 'Multipack Analysis',
		featureAvailableInPlans: [plans.WHOLESALE],
		featureAvailableInCompetitors: [competitors.SELLGO]
	},
	{
		name: 'Inventory analysis',
		featureAvailableInPlans: [plans.WHOLESALE],
		featureAvailableInCompetitors: [competitors.SELLGO]
	},
	{
		name: 'Leads Tracking',
		featureAvailableInPlans: [plans.WHOLESALE],
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
