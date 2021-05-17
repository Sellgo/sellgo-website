import { KeyValuePair } from '../../interfaces';

export const plansTabMapper: KeyValuePair = {
	'free-trial': 0,
	'pay-one-dollar-a-day': 1,
	'monthly-and-annual-plans': 2
};

const reversePlansTabMapper: KeyValuePair = {
	0: 'free-trial',
	1: 'pay-one-dollar-a-day',
	2: 'monthly-and-annual-plans'
};

export const generateTabIndexFromQuery = (query: any): number => {
	if (!query) {
		return 2;
	}
	const returnIndex = plansTabMapper[query];
	return returnIndex;
};

export const generateQueryFromTabIndex = (tabIndex: number): string => {
	if (tabIndex === undefined || tabIndex === null) {
		return reversePlansTabMapper[2];
	}
	const queryTypeString = reversePlansTabMapper[tabIndex];
	return queryTypeString;
};
