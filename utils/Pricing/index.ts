/* Types */
import { KeyValuePair } from '../../interfaces';

/* Default active tab */
export const DEFAULT_TAB_VALUE = 1;

/* Map plan names with tabs */
export const plansTabMapper: KeyValuePair = {
	wholesale: 0,
	/* HIDING-PRIVATE-LABEL */
	// 'private-label': 1,
	'monthly-and-annual-plans': 1,
	'seller-scout-pro': 2
};

/* Map tab number with plans */
const reversePlansTabMapper: KeyValuePair = {
	0: 'wholesale',
	/* HIDING-PRIVATE-LABEL */
	// 1: 'private-label',
	1: 'monthly-and-annual-plans',
	2: 'seller-scout-pro'
};

/* Utils to generate tab number from query */
export const generateTabIndexFromQuery = (query: any): number => {
	if (!query) {
		return DEFAULT_TAB_VALUE;
	}
	const returnIndex = plansTabMapper[query];

	if (returnIndex === undefined) {
		return DEFAULT_TAB_VALUE;
	}

	return returnIndex;
};

/* Utils to generate query name from tab number */
export const generateQueryFromTabIndex = (tabIndex: number): string => {
	if (tabIndex === undefined || tabIndex === null) {
		// select plan type 1
		return reversePlansTabMapper[DEFAULT_TAB_VALUE];
	}
	const queryTypeString = reversePlansTabMapper[tabIndex];
	return queryTypeString;
};
