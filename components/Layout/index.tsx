import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Cookies from 'js-cookie';

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

/* Utils */
import { isSSR } from '../../utils';

interface Props {
	children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	const { asPath } = useRouter();

	useEffect(() => {
		// track only on production and window based environment: fullstory and analytics
		if (!isSSR && Cookies.get('consent') === 'true') {
			analytics.page({
				url: generatePageURL(asPath),
				title: window.document.title,
				path: asPath
			});
		}
	}, [asPath]);

	return (
		<>
			<Head>
				{/* Facebook Pixel Code */}
				{Cookies.get('consent') === 'true' && (
					<script
						defer
						// eslint-disable-next-line react/no-danger
						dangerouslySetInnerHTML={{
							__html: `!function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', ${String(process.env.NEXT_PUBLIC_FB_PIXEL_ID)});
                fbq('track', 'PageView');`
						}}
					/>
				)}
			</Head>

			{!hideNavigationOnRoutes.includes(asPath) && <Navbar />}
			<MobileNavBar />
			{children}
			<Footer />
			{<CookieConsentBanner />}
		</>
	);
};

export default Layout;
