import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

/* COmponents */
import CTAButton from '../../CTAButton';
import ProductsNavbarExpansion from '../../ProductsNavbarExpansion';
import Bottom from '../../Icons/Chervons/Bottom';

/* Config */
import AppConfig from '../../../config';

interface Props {}

const NavbarBottom: React.FC<Props> = () => {
	return (
		<div className={styles.navbarBottom}>
			<Link href="/" passHref>
				<a>
					<Image
						src="/sellgoLogo.png"
						width={73}
						height={29}
						priority
						alt="Sellgo Inc. Company Logo"
					/>
				</a>
			</Link>

			<ul className={styles.navbarBottomLinksList}>
				<li className={styles.navbarBottomLink}>
					<a href="#" className={styles.navLink}>
						Products <Bottom width={10} height={8} fill="#2e3b4a" />
					</a>
					<ProductsNavbarExpansion className={styles.expandedProductsNavbar} />
				</li>

				<li className={styles.navbarBottomLink}>
					<Link href="/pricing" passHref>
						<a className={styles.navLink}>Pricing</a>
					</Link>
				</li>

				<li className={styles.navbarBottomLink}>
					<a href="/blogs" className={styles.navLink}>
						Resources
					</a>
				</li>
			</ul>

			<CTAButton
				type="primary"
				size="small"
				navigateTo={`${AppConfig.APP_URL}/subscription?type=starter&mode=yearly`}
				className={styles.navbarCTA}
				newTarget
				asExternal
			>
				Pay Only $1 to Sell
			</CTAButton>
		</div>
	);
};

export default NavbarBottom;
