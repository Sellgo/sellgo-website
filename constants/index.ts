import { countryList } from '../data/Contact/countryList';

export const plansWithHeaderGradient = [
	'Starter',
	'Suite',
	'Professional',
	'Browser Extension',
	'Product Research',
	'Seller Research'
];

export const pricingCardHeaderGradients: { [key: string]: string } = {
	Starter: `linear-gradient(90deg,#FDDBBD,#7F6E5F)`,
	Suite: `linear-gradient(90deg,#FAB57A,#7D5B3D)`,
	Professional: `linear-gradient(90deg,#EA8731,#754419)`,
	'Browser Extension': `linear-gradient(90deg,#FDDBBD,#7F6E5F)`,
	'Product Research': `linear-gradient(90deg,#FAB57A,#7D5B3D)`,
	'Seller Research': `linear-gradient(90deg,#EA8731,#754419)`
};

export const hideNavigationOnRoutes = ['/some-route'];

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

export const shimmerPlaceholder = (backgroundColor:string, logoColor: string, animationColor: string) => `
	<svg 
		width="1000" 
		height="1000" 
		version="1.1" 
		xmlns="http://www.w3.org/2000/svg" 
		xmlns:xlink="http://www.w3.org/1999/xlink"
	>
	<defs>
		<linearGradient id="g">
		<stop stop-color="${animationColor}" offset="20%" />
		<stop stop-color="#fff" offset="50%" />
		<stop stop-color="${animationColor}" offset="70%" />
		</linearGradient>
	</defs>
	<rect width="1000" height="1000" fill="${backgroundColor}"/>
	<g transform="scale(1.5,1.5)" fill="${logoColor}">
		<path 
		id="Union_11" 
		data-name="Union 11" 
		className="sellgoLogo" 
		width="1000"
		height="1000"
		d="M99.13,251.1l118-31.63-9.3-34.71,68.43-18.34,9.31,
		34.72a70.85,70.85,0,0,1-50.1,86.77h0l-118,31.63ZM74.41,
		158.86a70.84,70.84,0,0,1,50.1-86.77h0l118-31.63,18.34,
		68.44-118,31.62,10.9,40.67L85.31,199.53Z" 
		transform="translate(130,0)"
		/>
	</g>
	<rect id="r" width="1000" height="1000" fill="url(#g)"/>
	<animate xlink:href="#r" attributeName="x" from="-1000" to="1000" dur="1s" repeatCount="indefinite"  />
	</svg>`