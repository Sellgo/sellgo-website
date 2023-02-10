export const plans = {
	SELFSERVE: 'SELFSERVE',
	ENTERPRISE: 'ENTERPRISE'
};

export const competitors = {
	SELLGO: 'Sellgo',
	LIST: 'List',
	OTHER: 'Other'
};

export const features = [
	{
		name:
			'Verified global Amazon seller data (marketplaces, seller country, and more)',
		featureAvailableInPlans: [plans.SELFSERVE, plans.ENTERPRISE],
		featureAvailableInCompetitors: [competitors.SELLGO],
		showOnDefault: true,
		isNew: false
	},
	{
		name: 'Verified decision makers (title, location, keyword, and more)',
		featureAvailableInPlans: [plans.SELFSERVE, plans.ENTERPRISE],
		featureAvailableInCompetitors: [competitors.SELLGO, competitors.OTHER],
		showOnDefault: true,
		isNew: true
	},
	{
		name: 'Verified emails (company, professional, personal, and more)',
		featureAvailableInPlans: [plans.SELFSERVE, plans.ENTERPRISE],
		featureAvailableInCompetitors: [competitors.SELLGO, competitors.OTHER],
		showOnDefault: true,
		isNew: true
	},
	{
		name: 'Verified direct mobile numbers',
		featureAvailableInPlans: [plans.SELFSERVE, plans.ENTERPRISE],
		featureAvailableInCompetitors: [competitors.SELLGO, competitors.OTHER],
		showOnDefault: true,
		isNew: true
	},
	{
		name: 'Verified company contact (website, social media, and more)',
		featureAvailableInPlans: [plans.SELFSERVE, plans.ENTERPRISE],
		featureAvailableInCompetitors: [competitors.SELLGO, competitors.OTHER],
		showOnDefault: true,
		isNew: true
	},
	{
		name: 'Verified e-com store physical address, city, country',
		featureAvailableInPlans: [plans.SELFSERVE, plans.ENTERPRISE],
		featureAvailableInCompetitors: [competitors.SELLGO],
		showOnDefault: true,
		isNew: false
	},
	{
		name: 'Seller map and geo-location info (latitude, longitude)',
		featureAvailableInPlans: [plans.SELFSERVE, plans.ENTERPRISE],
		featureAvailableInCompetitors: [competitors.SELLGO],
		showOnDefault: true,
		isNew: false
	},
	{
		name: 'Verified storefront link',
		featureAvailableInPlans: [plans.SELFSERVE, plans.ENTERPRISE],
		featureAvailableInCompetitors: [competitors.SELLGO, competitors.LIST],
		showOnDefault: false,
		isNew: false
	},
	{
		name: 'Periodically updated data points (review, rating, and more)',
		featureAvailableInPlans: [plans.SELFSERVE, plans.ENTERPRISE],
		featureAvailableInCompetitors: [competitors.SELLGO],
		showOnDefault: false,
		isNew: false
	},
	// {
	// 	name: 'Business Model (1P, Authorized 3P, Exclusive 3P, Blended 1P/3P, Vendor Central)',
	// 	featureAvailableInPlans: [plans.SELFSERVE, plans.ENTERPRISE],
	// 	featureAvailableInCompetitors: [competitors.SELLGO],
	// showOnDefault: false,
	// isNew: false
	// },
	// {
	// 	name: 'Revenue, growth estimation and trends',
	// 	featureAvailableInPlans: [plans.SELFSERVE, plans.ENTERPRISE],
	// 	featureAvailableInCompetitors: [competitors.SELLGO],
	// showOnDefault: false,
	// isNew: false
	// },
	// {
	// 	name: 'Dormant seller account',
	// 	featureAvailableInPlans: [plans.SELFSERVE, plans.ENTERPRISE],
	// 	featureAvailableInCompetitors: [competitors.SELLGO],
	// showOnDefault: false,
	// isNew: false
	// },
	{
		name: 'Advanced filters',
		featureAvailableInPlans: [plans.SELFSERVE, plans.ENTERPRISE],
		featureAvailableInCompetitors: [competitors.SELLGO],
		showOnDefault: false,
		isNew: false
	},
	{
		name: 'Easy bulk export',
		featureAvailableInPlans: [plans.SELFSERVE, plans.ENTERPRISE],
		featureAvailableInCompetitors: [competitors.SELLGO, competitors.LIST],
		showOnDefault: false,
		isNew: false
	},
	{
		name:
			'Integration (postcard marketing mail, CRM, mail automation, and more)',
		featureAvailableInPlans: [plans.SELFSERVE, plans.ENTERPRISE],
		featureAvailableInCompetitors: [competitors.SELLGO, competitors.OTHER],
		showOnDefault: false,
		isNew: true
	},
	{
		name: 'Easy billing',
		featureAvailableInPlans: [plans.SELFSERVE, plans.ENTERPRISE],
		featureAvailableInCompetitors: [competitors.SELLGO],
		showOnDefault: false,
		isNew: false
	},
	{
		name: 'Data enrichment',
		featureAvailableInPlans: [plans.ENTERPRISE],
		featureAvailableInCompetitors: [competitors.SELLGO],
		showOnDefault: false,
		isNew: false
	},
	{
		name: 'Secured access and multi user permission',
		featureAvailableInPlans: [plans.ENTERPRISE],
		featureAvailableInCompetitors: [competitors.SELLGO, competitors.OTHER],
		showOnDefault: false,
		isNew: false
	},
	{
		name: 'Custom API access and integration',
		featureAvailableInPlans: [plans.ENTERPRISE],
		featureAvailableInCompetitors: [competitors.SELLGO, competitors.OTHER],
		showOnDefault: false,
		isNew: false
	},
	{
		name: 'Unlimited access',
		featureAvailableInPlans: [plans.ENTERPRISE],
		featureAvailableInCompetitors: [competitors.SELLGO],
		showOnDefault: false,
		isNew: false
	}
];
