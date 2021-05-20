export const DEV_URLS = {
	WEB_URL: 'https://www.sellgo-dev.com',
	APP_URL: 'http://54.166.52.145:5000',
	WPGRAPHQL: 'https://wordpress.sellgo-dev.com/graphql',
	FAQ_BUCKET: 'https://sellgo-website-dev.s3.amazonaws.com/faqDetails',
	API_URL: 'http://34.236.237.125/api'
};

export const PROD_URLS = {
	WEB_URL: 'https://www.sellgo.com',
	APP_URL: 'http://54.166.52.145:5000',
	WPGRAPHQL: 'https://wordpress.sellgo-dev.com/graphql',
	FAQ_BUCKET: 'https://sellgo-website-dev.s3.amazonaws.com/faqDetails',
	API_URL: 'http://34.236.237.125/api'
};

const DEV = {
	...DEV_URLS
};

const PROD = {
	...PROD_URLS
};
const getAppConfig = () => {
	if (process.env.NODE_ENV === 'production') {
		return PROD;
	}

	return DEV;
};
const AppConfig = getAppConfig();
export default AppConfig;
