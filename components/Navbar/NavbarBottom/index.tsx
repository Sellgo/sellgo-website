import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

/* COmponents */
import CTAButton from '../../CTAButton';
import ProductsNavbarExpansion from '../ProductsNavbarExpansion';
import ResourcesNavBarExpansion from '../ResourcesNavbarExpansion';
import Bottom from '../../Icons/Chervons/Bottom';

interface Props {}

const NavbarBottom: React.FC<Props> = () => {
	return (
		<div className={styles.navbarBottom}>
			<div className={styles.navbarBottom__left}>
				<Link href="/" passHref>
					<a>
						<Image
							src="/sellgoLogo.png"
							width={100}
							height={32}
							priority
							alt="Sellgo Inc. Company Logo"
						/>
					</a>
				</Link>

				<ul className={styles.navbarBottomLinksList}>
					<li className={styles.navbarBottomLink}>
						<a href="#" className={styles.navLink}>
							Products <Bottom width={10} height={8} fill="#fff" />
						</a>
						<ProductsNavbarExpansion
							className={styles.expandedProductsNavbar}
						/>
					</li>

					<li
						className={`${styles.navbarBottomLink} ${styles.navbarBottomLink__pricing}`}
					>
						<Link
							href="/pricing?type=monthly-and-annual-plans"
							passHref
							prefetch={false}
						>
							<a className={styles.navLink}>Pricing</a>
						</Link>
					</li>

					<li className={styles.navbarBottomLink}>
						<a href="#" className={styles.navLink}>
							Resources <Bottom width={10} height={8} fill="#fff" />
						</a>
						<ResourcesNavBarExpansion
							className={styles.expandedResourcesNavbar}
						/>
					</li>
				</ul>
			</div>

			<CTAButton
				type="primary"
				size="small"
				navigateTo="/pricing?type=wholesale"
				variant="white"
				className={styles.navbarCTA}
			>
				Sign Up
				<div className={styles.navbarCTA__arrow}>
					<Image
						src="/longArrowRightIcon.svg"
						width={20}
						height={10}
						alt="right-arrow"
					/>
				</div>
			</CTAButton>
		</div>
	);
};

export default NavbarBottom;
