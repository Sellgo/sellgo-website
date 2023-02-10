/* Interfaces */
import { PlanTypes } from '../../../interfaces/Pricing';

export const planTypes: PlanTypes[] = [
	// {
	// 	name: 'Free Tools',
	// 	isNew: false
	// },
	{
		name: 'Instant Download Pricing',
		content: 'Get your most wanted data in seconds, no hassle.',
		img: 'instant-download.svg',
		isNew: false
	},
	{
		name: 'Web App Subscription',
		content: 'Pay less on software, invest more in your business.',
		img: 'chartnetworkIcon.svg',
		isNew: false
	}
];

export const plansAndProductsDetails = [
	{
		planName: 'Monthly and Annual Web App Plans',
		summary: `Invest On A Lead Tool That's Dependable, Powerful And
    Can Scale Up Your Business With 7-Day Money Back Guarantee.`,

		infoAlertMessage: {
			monthly: {
				head: `Pay only $1.99 for the entire first month of starter membership`,
				desc: ``,
				navigateTo: '/pricing?type=free-trial',
				navigateLabel: 'Learn More'
			},
			yearly: {
				head: `Pay only $1.99 for the entire first month of starter membership`,
				desc: ``,
				navigateTo: '/pricing?type=free-trial',
				navigateLabel: 'Learn More'
			}
		},
		productsIncluded: [
			{
				id: 6, // subscriptionID if needed
				name: 'Starter',
				productsDatabase: 0,
				salesEstimateCount: 1000,
				monthlyPrice: 77,
				annualPrice: 467,
				desc: `Accelerate your seller research process.`,
				featureSubName: 'Start with',
				featuresLists: [
					{
						title: 'Own your market',
						featuresIncluded: [
							'Verified professional email(s)',
							'Basic seller insights',
							'Seller map access'
						]
					}
				]
			},
			{
				id: 1,
				name: 'Professional',
				productsDatabase: 0,
				salesEstimateCount: 2000,
				monthlyPrice: 147,
				annualPrice: 1187,
				featureSubName: 'Everything in starter plan, plus',
				desc: `Find the best seller, faster.`,
				isNew: true,
				featuresLists: [
					{
						title: 'Turn leads into pipeline',
						featuresIncluded: [
							'Verified personal and other email(s),',
							'Mobile and direct phone number(s),',
							'Send physical mail integration, and more,'
						]
					}
				]
			},
			{
				id: 2,
				name: 'Elite',
				productsDatabase: 0,
				salesEstimateCount: 3000,
				monthlyPrice: 297,
				annualPrice: 2987,
				featureSubName: 'Everything in professional plan, plus',
				desc: `Achieve more ROI.`,
				featuresLists: [
					{
						title: 'Hit your ambitious revenue goals',
						featuresIncluded: [
							'Social Media link/ username(s)*',
							'Zapier, Hubspot and Salesforce integrations',
							'Data/ CRM enrichments'
						]
					}
				]
			}
		]
	}
];
