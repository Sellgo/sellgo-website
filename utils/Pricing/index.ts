import { KeyValuePair } from '../../interfaces';

export const plansTabMapper: KeyValuePair = {
	'free-trial': 0,
	'pay-one-dollar-a-day': 1,
	'pay-one-dollar-first-month': 2
};

export const generateTabIndexFromQuery = (query: any): number => {
	if (!query) {
		return 0;
	}

	return plansTabMapper[query] || 0;
};
