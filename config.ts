export const DEV_URLS = {
	WEB_URL: 'https://www.sellgo-dev.com',
	APP_URL: 'https://app.sellgo-dev.com',
	API_URL: 'https://api.sellgo-dev.com/api',
	WPGRAPHQL: 'https://wordpress.sellgo-dev.com/graphql',
	FAQ_BUCKET: 'https://sellgo-website-dev.s3.amazonaws.com/faqDetails'
};

export const PROD_URLS = {
	WEB_URL: 'https://www.sellgo.com',
	APP_URL: 'https://app.sellgo.com',
	API_URL: 'https://api.sellgo.com/api',
	WPGRAPHQL: 'https://wordpress.sellgo-dev.com/graphql',
	FAQ_BUCKET: 'https://sellgo-website-dev.s3.amazonaws.com/faqDetails'
};

export const DEV_PAYMENT: any = {
	'united-states': 'https://buy.stripe.com/test_00g5mZ5OP8dDeru000',
	canada: 'https://buy.stripe.com/test_5kAbLnellgK96Z2dQR',
	mexico: 'https://buy.stripe.com/test_fZe4iVfppdxXabe9AC',
	'united-kingdom': 'https://buy.stripe.com/test_4gw7v7cddalL5UYdQT',
	germany: 'https://buy.stripe.com/test_14kg1Da55eC1cjm9AE',
	italy: 'https://buy.stripe.com/test_7sI02Fgtt9hH8366ot',
	france: 'https://buy.stripe.com/test_3cs3eRfpp65v0AEeV0',
	spain: 'https://buy.stripe.com/test_4gw9Dfcdd2Tj4QU7sz',
	india: 'https://buy.stripe.com/test_bIY8zbfppalL3MQfZ6',
	china: 'https://buy.stripe.com/test_eVa02F4KLdxXeru6ox'
};

export const PROD_PAYMENT: any = {
	US: 'https://buy.stripe.com/8wMdUlbKg4kA6Fq28d',
	Canada: 'https://buy.stripe.com/5kA6rT9C88AQe7S8wC',
	Mexico: 'https://buy.stripe.com/3cs7vX8y43gw6FqdR3',
	UK: 'https://buy.stripe.com/aEU17zbKg7wMfbW28f',
	Germany: 'https://buy.stripe.com/8wM3fHeWs6sI2paeV2',
	Italy: 'https://buy.stripe.com/14kbMd29Gg3ifbW3cl',
	France: 'https://buy.stripe.com/cN27vXaGc5oE2pa3cm',
	Spain: 'https://buy.stripe.com/28obMd01y18o1l6fZ9',
	India: 'https://buy.stripe.com/8wM4jLeWsbN25Bm28m',
	china: 'https://buy.stripe.com/3cseYpbKg7wMaVGcMY'
};

const DEV = {
	...DEV_URLS,
	...DEV_PAYMENT
};

const PROD = {
	...PROD_URLS,
	...PROD_PAYMENT
};

const LOCAL = {
	...DEV
};

const getAppConfig = () => {
	// staging server
	if (process.env.NEXT_PUBLIC_NODE_ENV === 'development') {
		return DEV;
	}
	// production server
	else if (process.env.NEXT_PUBLIC_NODE_ENV === 'production') {
		return PROD;
	}

	// local
	return LOCAL;
};

const AppConfig = getAppConfig();
export default AppConfig;
