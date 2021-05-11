/* Interfaces */
import { KeyValuePair } from '../../interfaces';

import { pay1MonthAllFeatures, pay1DayAllFeatures } from './allFeaturesTable';

export const allPlansFeatureMapper: KeyValuePair = {
	'Pay $1 for the entire first month of membership': pay1MonthAllFeatures,
	'Pay $1 for a day': pay1DayAllFeatures
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
