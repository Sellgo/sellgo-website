import React from 'react';
import type { AppProps /* AppContext */ } from 'next/app';
import { ApolloProvider } from '@apollo/client/react';
import { useRouter } from 'next/router';
import Modal from 'react-modal';

/* Styling */
import '../styles/globals.scss';

/* Apollo Client */
import client from '../apollo';

/* Components */
import Layout from '../components/Layout';
import BlogSubscriptionModal from '../components/BlogSubscriptionModal';

function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const [
		isBlogSubscriptionModalOpen,
		setIsBlogSubscriptionModalOpen
	] = React.useState(false);
	/* Show subscription popup on the third link change */
	React.useEffect(() => {
		const showPopupIfThirdPageChange = () => {
			const numberOfPageChanges = localStorage.getItem('numberOfPageChanges');
			const showedBlogPopup = localStorage.getItem('showedBlogPopup');
			if (
				numberOfPageChanges &&
				!showedBlogPopup &&
				parseInt(numberOfPageChanges, 10) > 2 &&
				!window.location.pathname.includes('pricing')
			) {
				setTimeout(() => {
					setIsBlogSubscriptionModalOpen(true);
				}, 2000);
				localStorage.setItem('showedBlogPopup', 'true');
			}
		};

		const handleRouteChange = () => {
			const numberOfPageChanges = localStorage.getItem('numberOfPageChanges');
			if (numberOfPageChanges) {
				localStorage.setItem(
					'numberOfPageChanges',
					(parseInt(numberOfPageChanges, 10) + 1).toString()
				);
			} else {
				localStorage.setItem('numberOfPageChanges', '0');
			}
			showPopupIfThirdPageChange();
		};

		router.events.on('routeChangeComplete', handleRouteChange);
		handleRouteChange();

		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, []);

	return (
		<ApolloProvider client={client}>
			<Layout>
				<Component {...pageProps} />

				<Modal
					isOpen={isBlogSubscriptionModalOpen}
					onRequestClose={() => setIsBlogSubscriptionModalOpen(false)}
					className="modal"
					overlayClassName="modalOverlay"
				>
					<BlogSubscriptionModal
						closeModal={() => setIsBlogSubscriptionModalOpen(false)}
					/>
				</Modal>
			</Layout>
		</ApolloProvider>
	);
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default App;
