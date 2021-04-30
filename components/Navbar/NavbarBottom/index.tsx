import React, { useState } from 'react';
import Link from 'next/link';

/* Styling */
import styles from './index.module.scss';
import CTAButton from '../../CTAButton';
import ProductsNavbarExpansion from '../../ProductsNavbarExpansion';

interface Props {}

const NavbarBottom: React.FC<Props> = () => {
	const [
		isProductsNavbarExpanded,
		setIsProductNavbarExpanded
	] = useState<boolean>(false);

	return (
		<div className={styles.navbarBottom}>
			<ul className={styles.navbarBottomLinksList}>
				<li
					className={styles.navbarBottomLink}
					onClick={() => setIsProductNavbarExpanded(!isProductsNavbarExpanded)}
					role="presentation"
				>
					<Link href="/product-tracker" passHref>
						<a className={styles.navLink}>
							<span>Products</span>
						</a>
					</Link>
					<ProductsNavbarExpansion />
				</li>

				<li className={styles.navbarBottomLink}>
					<Link href="/pricing" passHref>
						<a className={styles.navLink}>
							<span>Pricing</span>
						</a>
					</Link>
				</li>

				<li className={styles.navbarBottomLink}>
					<p className={styles.navLink}>
						<span>Resources</span>
					</p>
				</li>
			</ul>

			<CTAButton
				type="primary"
				size="small"
				navigateTo="/"
				className={styles.navbarCTA}
			>
				Get Sellgo Free
			</CTAButton>
		</div>
	);
};

export default NavbarBottom;
