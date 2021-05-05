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
						Software
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
				navigateTo="/"
				className={styles.navbarCTA}
			>
				Try Sellgo for $1
			</CTAButton>
		</div>
	);
};

export default NavbarBottom;
