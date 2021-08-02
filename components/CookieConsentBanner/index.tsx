import React, { useState } from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';

/* Styles */
import styles from './index.module.scss';
import analytics from '../../analytics';

interface Props {}

const analyticsPlugins = ['google-analytics', 'fullstory'];

const CookieConsentBanner: React.FC<Props> = () => {
	const [hideCookieBanner, setHideCookieBanner] = useState(
		() => Cookies.get('consent') === 'true'
	);

	const handleClick = async () => {
		Cookies.set('consent', 'true', { expires: 365, path: '/' });
		setHideCookieBanner(true);

		// @ts-ignore
		await analytics.plugins.enable(analyticsPlugins);
	};

	if (hideCookieBanner) {
		return null;
	}

	return (
		<>
			<div className={styles.cookieBannerWrapper}>
				<div className={styles.cookieBannerContent}>
					<p>This website uses cookies to improve your experience.</p>
					<Link passHref href="/privacy-policy">
						<a target="_blank">Learn More</a>
					</Link>
					<button onClick={handleClick}>Accept</button>
				</div>
			</div>
		</>
	);
};

export default CookieConsentBanner;
