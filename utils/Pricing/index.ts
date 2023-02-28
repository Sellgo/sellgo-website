/* Types */
import { KeyValuePair } from '../../interfaces';

/* Default active tab */
export const DEFAULT_TAB_VALUE = 1;

/* Map plan names with tabs */
export const plansTabMapper: KeyValuePair = {
	'usage-based-plans': 0,
	'account-based-plans': 1
};

/* Map tab number with plans */
const reversePlansTabMapper: KeyValuePair = {
	0: 'usage-based-plans',
	1: 'account-based-plans'
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
