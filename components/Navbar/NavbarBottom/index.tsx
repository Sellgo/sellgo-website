import React from 'react';
import Link from 'next/link';

/* Styling */
import styles from './index.module.scss';
import CTAButton from '../../CTAButton';
import ProductsNavbarExpansion from '../../ProductsNavbarExpansion';

interface Props {}

const NavbarBottom: React.FC<Props> = () => {
	return (
		<div className={styles.navbarBottom}>
			<ul className={styles.navbarBottomLinksList}>
				<li className={styles.navbarBottomLink}>
					<a href="#" className={styles.navLink}>
						Products
					</a>
					<ProductsNavbarExpansion className={styles.expandedProductsNavbar} />
				</li>

				<li className={styles.navbarBottomLink}>
					<Link href="/pricing" passHref>
						<a className={styles.navLink}>Pricing</a>
					</Link>
				</li>

				<li className={styles.navbarBottomLink}>
					<a href="#" className={styles.navLink}>
						Resources
					</a>
				</li>
			</ul>

			<CTAButton
				type="primary"
				size="small"
				navigateTo="https://app.sellgo.com/subscription/?type=basic&mode=yearly"
				className={styles.navbarCTA}
			>
				Pay Only $1 to Sell
			</CTAButton>
		</div>
	);
};

export default NavbarBottom;
