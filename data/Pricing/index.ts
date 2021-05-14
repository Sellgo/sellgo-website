/* Interfaces */
import { KeyValuePair } from '../../interfaces';

import { pay1MonthAllFeatures, pay1DayAllFeatures } from './allFeaturesTable';

export const allPlansFeatureMapper: KeyValuePair = {
	'Monthly and Annual Pricing Plans': pay1MonthAllFeatures,
	'Pay $1 for a Day': pay1DayAllFeatures
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
