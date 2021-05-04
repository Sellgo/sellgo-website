/* Interfaces */
import { KeyValuePair } from '../../interfaces';

import {
	wholeSalePlanAllFeatures,
	payAsYouGoAllFeatures
} from './allFeaturesTable';

export const allPlansFeatureMapper: KeyValuePair = {
	'Wholesale Go': wholeSalePlanAllFeatures,
	'Pay As You Go': payAsYouGoAllFeatures
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
