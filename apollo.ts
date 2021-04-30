import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

/* Config */
import AppConfig from './config';

const httpLink = createHttpLink({
	uri: `${AppConfig.CMS_BASE_URL}/content/v1/spaces/${AppConfig.SPACE_ID}`
});

const authLink = setContext((_, { headers }) => {
	return {
		headers: {
			...headers,
			authorization: `Bearer ${AppConfig.DELIVERY_API_KEYS}`
		}
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache()
});

/* Export main Client for querying */
export default client;
