import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

/* Config */
import AppConfig from '../../../config';

interface Props {}

const NavbarTop: React.FC<Props> = () => {
	return (
		<div className={styles.navbarTop}>
			<Link href="/sales-estimator" passHref>
				<a className={styles.navbarLink__sales}>
					<span>Free Sales Estimator</span>
				</a>
			</Link>

			<ul className={styles.navbarTopLinksList}>
				<li className={styles.navbarTopLink}>
					<a
						href={AppConfig.APP_URL}
						className={styles.navbarLink}
						target="_blank"
						rel="noopener noreferrer"
					>
						Go to my account
					</a>
				</li>
				<li className={styles.navbarTopLink}>
					<Link href="/contact" passHref>
						<a className={styles.navbarLink}>Contact Us</a>
					</Link>
				</li>
				<li className={styles.navbarTopLink}>
					<Link href="/about-us" passHref>
						<a className={styles.navbarLink}>About</a>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default NavbarTop;
