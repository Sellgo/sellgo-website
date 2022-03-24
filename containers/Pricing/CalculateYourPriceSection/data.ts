export type ORDER_NUMBERS_TYPE = 
	'0' | 
	'100' | 
	'1,000' | 
	'2,000' | 
	'3,000' |
	'5,000' |
	'8,000' |
	'13,000' |
	'21,000' |
	'34,000' |
	'55,000' |
	'89,000' |
	'144,000' |
	'233,000'

export const ORDER_NUMBERS = {
	'-10': '0',
	0: '100',
	7: '1,000',
	14: '2,000',
	21: '3,000',
	28: '5,000',
	35: '8,000',
	42: '13,000',
	49: '21,000',
	56: '34,000',
	66: '55,000',
	76: '89,000',
	86: '144,000',
	100: '233,000'
};

export const PLAN_PRICE_PROFESSIONAL_MONTHLY = {
	'0': 0,
	'100': 59,
	'1,000': 79,
	'2,000': 95,
	'3,000': 114,
	'5,000': 137,
	'8,000': 165,
	'13,000': 198,
	'21,000': 238,
	'34,000': 286,
	'55,000': 344,
	'89,000': 413,
	'144,000': 496,
	'233,000': 596
};

export const PLAN_PRICE_PROFESSIONAL_ANNUAL = {
	'0': 0,
	'100': 67,
	'1,000': 67,
	'2,000': 81,
	'3,000': 97,
	'5,000': 116,
	'8,000': 139,
	'13,000': 167,
	'21,000': 201,
	'34,000': 241,
	'55,000': 289,
	'89,000': 347,
	'144,000': 416,
	'233,000': 499
};

export const getPlanPrice = (
	planType: 'professional',
	isMonthly: boolean,
	orderNumber: ORDER_NUMBERS_TYPE
) => {
	if (planType === 'professional') {
		if (isMonthly) {
			return PLAN_PRICE_PROFESSIONAL_MONTHLY[orderNumber];
		} else {
			return PLAN_PRICE_PROFESSIONAL_ANNUAL[orderNumber];
		}
	}
	return 0;
};
