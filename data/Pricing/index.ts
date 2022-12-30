/* Interfaces */
import { KeyValuePair } from '../../interfaces';

import { pay1DollarPlan, payMonthlyAndAnnualPlan } from './allFeaturesTable';

export const allPlansFeatureMapper: KeyValuePair = {
	'Pricing & Plans': payMonthlyAndAnnualPlan,
	'Pay $1 for a day': pay1DollarPlan,
	'Monthly and Annual Web App Plans': payMonthlyAndAnnualPlan
};

export const getAllFeaturesForPlans = (planName: string) => {
	const allFeatures = allPlansFeatureMapper[planName];
	if (!allFeatures) {
		return [
			{
				header: [],
				body: [[]]
			}
		];
	}
	return allFeatures;
};
