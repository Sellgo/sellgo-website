import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

/* Components */
import Navbar from '../Navbar';
import MobileNavBar from '../MobileNavbar';
import Footer from '../Footer';

/* Constants */
import { hideNavigationOnRoutes } from '../../constants';

/* Utils */
import { isSSR } from '../../utils';
import { generatePageURL } from '../../utils/SEO';

/* Analytics */
import analytics from '../../analytics';

interface Props {
	children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	const router = useRouter();
	const { asPath } = router;

	useEffect(() => {
		// track only on production and window based environment: fullstory and analytics
		if (process.env.NEXT_PUBLIC_NODE_ENV === 'production' && !isSSR) {
			analytics.page({
				url: generatePageURL(asPath),
				title: window.document.title,
				path: asPath
			});
		}
	}, [asPath]);

	return (
		<>
			{!hideNavigationOnRoutes.includes(asPath) && <Navbar />}
			<MobileNavBar />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
