import React from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

/* Styles */
import styles from './index.module.scss';

interface Props {}

const CookieConsentBanner: React.FC<Props> = () => {
	const router = useRouter();

	const handleClick = () => {
		Cookies.set('consent', 'true', { expires: 365, path: '/' });
		router.reload();
	};

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
