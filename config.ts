export const DEV_URLS = {
	WEB_URL: 'https://www.sellgo-dev.com',
	WPGRAPHQL: 'http://54.242.244.57/graphql'
};

export const PROD_URLS = {
	WEB_URL: 'https://www.sellgo.com',
	WPGRAPHQL: 'http://54.242.244.57/graphql'
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
