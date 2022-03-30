/* Interfaces */
import { KeyValuePair } from '../../interfaces';

import { pay1DollarPlan, payMonthlyAndAnnualPlan } from './allFeaturesTable';

export const allPlansFeatureMapper: KeyValuePair = {
	'Monthly and annual pricing plans': payMonthlyAndAnnualPlan,
	'Pay $1 for a day': pay1DollarPlan
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
