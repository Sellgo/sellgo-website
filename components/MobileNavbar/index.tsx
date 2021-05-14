import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

/* Components */
import Sidebar from '../Sidebar';

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

				<ul className={styles.mobileNavLinks}>
					<li>
						<Link passHref href="/pricing">
							<a>Pricing</a>
						</Link>
					</li>

					<li>
						<Link passHref href="/about-us">
							<a>About Us</a>
						</Link>
					</li>

					<li>
						<Link passHref href="/contact-us">
							<a>Contact Us</a>
						</Link>
					</li>

					<li>
						<Link passHref href="/blogs">
							<a>Blogs</a>
						</Link>
					</li>
				</ul>

				<div
					className={styles.burger}
					role="button"
					aria-roledescription="button"
					onClick={() => {}}
					tabIndex={0}
					onKeyPress={() => {}}
				>
					<span className={styles.burger__line}></span>
					<span className={styles.burger__line}></span>
					<span className={styles.burger__line}></span>
				</div>
			</nav>

			<Sidebar />
		</header>
	);
};

export default MobileNavBar;
