import { KeyValuePair } from '../../interfaces';

export const plansTabMapper: KeyValuePair = {
	'free-trial': 0,
	'pay-one-dollar-a-day': 1,
	'monthly-and-annual-plans': 2
};

export const generateTabIndexFromQuery = (query: any): number => {
	if (!query) {
		return 2;
	}
	const returnIndex = plansTabMapper[query];
	return returnIndex;
};
