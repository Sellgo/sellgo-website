import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const MobileNavBar: React.FC<Props> = () => {
	return (
		<header className={`mobile-nav-container ${styles.header}`}>
			<nav className={styles.mobileNav}>
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
			</nav>
		</header>
	);
};

export default MobileNavBar;
