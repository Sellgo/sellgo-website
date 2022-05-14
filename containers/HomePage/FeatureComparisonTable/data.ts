export const plans = {
	AGENCY: 'Agency',
	INFLUENCER: 'Influencer'
};

export const competitors = {
	SELLGO: 'Sellgo',
	MANUAL: 'Manual',
	AMAZON: 'Manual',
	GOOGLE: 'GOOGLE'
};

export const features = [
	{
		name: 'Seller Analysis at Brand, Category and Product Level',
		featureAvailableInPlans: [plans.AGENCY, plans.INFLUENCER],
		featureAvailableInCompetitors: [competitors.SELLGO],
		showOnDefault: true
	},
	{
		name: 'Map of Global Amazon Sellers',
		featureAvailableInPlans: [plans.AGENCY, plans.INFLUENCER],
		featureAvailableInCompetitors: [competitors.SELLGO],
		showOnDefault: true
	},
	{
		name: 'Average Number of Sellers per Brand',
		featureAvailableInPlans: [plans.AGENCY],
		featureAvailableInCompetitors: [competitors.SELLGO],
		showOnDefault: true
	},
	{
		name: 'Revenue Estimate for Sellers',
		featureAvailableInPlans: [plans.AGENCY],
		featureAvailableInCompetitors: [competitors.SELLGO],
		showOnDefault: true
	},
	{
		name: 'Sellers Inventory',
		featureAvailableInPlans: [plans.AGENCY, plans.INFLUENCER],
		featureAvailableInCompetitors: [competitors.SELLGO, competitors.AMAZON],
		showOnDefault: true
	},
	{
		name: 'Inventory analysis',
		featureAvailableInPlans: [plans.AGENCY],
		featureAvailableInCompetitors: [competitors.SELLGO, competitors.MANUAL],
		showOnDefault: true
	},
	{
		name: 'Brand Level Category Filter',
		featureAvailableInPlans: [plans.AGENCY, plans.INFLUENCER],
		featureAvailableInCompetitors: [competitors.SELLGO, competitors.MANUAL]
	},
	{
		name: 'Chrome Extension',
		featureAvailableInPlans: [plans.AGENCY, plans.INFLUENCER],
		featureAvailableInCompetitors: [
			competitors.SELLGO
		],
		showOnDefault: true
	},
	{
		name: 'Sales Estimation',
		featureAvailableInPlans: [plans.AGENCY, plans.INFLUENCER],
		featureAvailableInCompetitors: [
			competitors.SELLGO
		],
		showOnDefault: true
	},
	{
		name: 'Revenue Estimation',
		featureAvailableInPlans: [plans.AGENCY, plans.INFLUENCER],
		featureAvailableInCompetitors: [
			competitors.SELLGO
		],
		showOnDefault: true
	},
	{
		name: 'Product Analysis',
		featureAvailableInPlans: [plans.AGENCY, plans.INFLUENCER],
		featureAvailableInCompetitors: [
			competitors.SELLGO,
			competitors.MANUAL
		]
	}
];
