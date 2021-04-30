import React from 'react';
import Link from 'next/link';

/* Styling */
import styles from './index.module.scss';
import CTAButton from '../../CTAButton';

interface Props {}

const NavbarBottom: React.FC<Props> = () => {
	return (
		<div className={styles.navbarBottom}>
			<ul className={styles.navbarBottomLinksList}>
				<li className={styles.navbarBottomLink}>
					<Link href="/" passHref>
						<a className={styles.navLink}>
							<span>Products</span>
						</a>
					</Link>
				</li>
				<li className={styles.navbarBottomLink}>
					<Link href="/pricing" passHref>
						<a className={styles.navLink}>
							<span>Pricing</span>
						</a>
					</Link>
				</li>
				<li className={styles.navbarBottomLink}>
					<Link href="/" passHref>
						<a className={styles.navLink}>
							<span>Resources</span>
						</a>
					</Link>
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
