import { generateHybridTable } from './allFeaturesTable';

export const getAllFeaturesForPlans = (
	planName: string,
	getComparisonStats: any
) => {
	const allFeatures = generateHybridTable(getComparisonStats);
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
