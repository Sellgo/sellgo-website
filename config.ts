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

const DEV = {
	...DEV_URLS
};

const PROD = {
	...PROD_URLS
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
