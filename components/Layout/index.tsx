import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

/* Components */
import Navbar from '../Navbar';
import MobileNavBar from '../MobileNavbar';
import Footer from '../Footer';
import CtaNavBar from '../CtaNavBar';

/* Constants */
import {
	hideNavigationOnRoutes,
	showCtaNavBarFixedRoutes
} from '../../constants';

/* Utils */
import { isSSR } from '../../utils';
import { generatePageURL } from '../../utils/SEO';

/* Analytics */
import analytics from '../../analytics';
import googleAnalytics from '../../googleAnalytics';

interface Props {
	children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	const router = useRouter();
	const { asPath } = router;
	const [showCtaNavBar, setShowCtaNavBar] = React.useState<boolean>(false);

	useEffect(() => {
		// track only on production and window based environment: fullstory and analytics
		if (process.env.NEXT_PUBLIC_NODE_ENV === 'production' && !isSSR) {
			analytics.page({
				url: generatePageURL(asPath),
				title: window.document.title,
				path: asPath
			});
		}
		googleAnalytics.send({ hitType: 'pageview', page: generatePageURL(asPath) });
	}, [asPath]);

	const trackScrolling = () => {
		const trigger = document.querySelector('#showCtaNavBar');
		if (trigger) {
			if (trigger.getBoundingClientRect().top <= 0) {
				setShowCtaNavBar(true);
			} else {
				setShowCtaNavBar(false);
			}
		} else {
			setShowCtaNavBar(false);
		}
	};

	useEffect(() => {
		document.addEventListener('scroll', trackScrolling);
	}, []);

	const showCtaNavBarFixed = showCtaNavBarFixedRoutes.includes(asPath);

	return (
		<>
			{!hideNavigationOnRoutes.includes(asPath) && <Navbar />}
			<MobileNavBar />
			{
				<CtaNavBar
					showCtaNavBar={showCtaNavBarFixed || showCtaNavBar}
					showMobile={!showCtaNavBarFixed}
				/>
			}
			{children}
			<Footer />
		</>
	);
};

export default Layout;
