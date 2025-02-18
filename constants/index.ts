import { countryList } from '../data/Contact/countryList';

export const plansWithHeaderGradient = [
	'Starter',
	'Team',
	'Professional',
	'Browser Extension',
	'Product Research',
	'Seller Research'
];

export const pricingCardHeaderGradients: { [key: string]: string } = {
	Starter: `linear-gradient(90deg,#FDDBBD,#7F6E5F)`,
	Professional: `linear-gradient(90deg,#FAB57A,#7D5B3D)`,
	Team: `linear-gradient(90deg,#EA8731,#754419)`,
	'Browser Extension': `linear-gradient(90deg,#FDDBBD,#7F6E5F)`,
	'Product Research': `linear-gradient(90deg,#FAB57A,#7D5B3D)`,
	'Seller Research': `linear-gradient(90deg,#EA8731,#754419)`
};

export const hideNavigationOnRoutes = [
	'/partnerships-signup',
	'/contact-sales',
	'/contact'
];
export const showCtaNavBarFixedRoutes = ['/contact', '/contact-sales'];
export const showCtaNavBarOnScrollRoutes = ['/home'];

/* Employess size list on contact forms */
export const employSizeList = [
	{
		label: '1 to 5',
		value: '1-5'
	},
	{
		label: '5 to 25',
		value: '5-25'
	},
	{
		label: '25 to 50',
		value: '25-50'
	},
	{
		label: '100 to 500',
		value: '100-500'
	},
	{
		label: '500 to 1000',
		value: '500-1000'
	},
	{
		label: '1000 or more',
		value: '1000+'
	}
];

/* Phone Code List for contact */
export const countryPhoneCodeList = countryList.map((list: any) => {
	return {
		...list,
		label: `${list.name} (${list.dial_code})`,
		value: list.dial_code
	};
});

export const defaultPhoneCode = {
	label: 'United States (+1)',
	value: '+1',
	type: 'countryCode'
};

/* Employess size list on contact forms */
export const monthlyCacList = [
	{
		label: 'Not currently spending',
		value: '0'
	},
	{
		label: 'Less than $50k',
		value: '50-'
	},
	{
		label: '$50k to $100k',
		value: '50-100'
	},
	{
		label: '$100k to $200k',
		value: '100-200'
	},
	{
		label: 'More than $200k',
		value: '200+'
	}
];

export const defaultMonthlyCac = {
	label: '',
	value: ''
};

export const limitDateForCustomerCount = '2021-11-10';
