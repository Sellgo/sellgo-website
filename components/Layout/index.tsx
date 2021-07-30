import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

/* Analytics */
import analytics from '../../analytics';

/* Components */
import Navbar from '../Navbar';
import MobileNavBar from '../MobileNavbar';
import Footer from '../Footer';
import CookieConsentBanner from '../CookieConsentBanner';

/* Constants */
import { hideNavigationOnRoutes } from '../../constants';

/* Utils */
import { generatePageURL } from '../../utils/SEO';
import { isSSR, isCookieConsentAccepted } from '../../utils';

interface Props {
	children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	const { asPath } = useRouter();

	useEffect(() => {
		// track only on production and window based environment: fullstory and analytics
		if (
			process.env.NEXT_PUBLIC_ENV === 'production' &&
			!isSSR &&
			isCookieConsentAccepted
		) {
			analytics.page({
				url: generatePageURL(asPath),
				title: window.document.title,
				path: asPath
			});
		}
	}, [asPath, isCookieConsentAccepted]);

	return (
		<>
			{!hideNavigationOnRoutes.includes(asPath) && <Navbar />}
			<MobileNavBar />
			{children}
			<Footer />
			{!isCookieConsentAccepted && <CookieConsentBanner />}
		</>
	);
};

export default Layout;
