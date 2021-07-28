import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

/* Config */
import AppConfig from '../config';

/* Utils */
import { isSSR } from '../utils';

const httpLink = createHttpLink({
	uri: AppConfig.WPGRAPHQL
});

const authLink = setContext((_, { headers }) => {
	const token = '';
	return {
		headers: {
			...headers,
			authorization: `Bearer ${token}`
		}
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
	ssrMode: isSSR,
	defaultOptions: {
		query: {
			fetchPolicy: 'no-cache'
		}
	}
});

/* Export main Client for querying */
export default client;
