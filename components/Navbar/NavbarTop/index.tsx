import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const NavbarTop: React.FC<Props> = () => {
	return (
		<div className={styles.navbarTop}>
			<a href="/contact-sales" className={styles.navbarLink__sales}>
				<Image
					src="/userIcon.svg"
					width={12}
					height={14}
					alt="User Icon"
					priority
				/>
				<span>Contact Sales</span>
			</a>

			<ul className={styles.navbarTopLinksList}>
				<li className={styles.navbarTopLink}>
					<a
						href="https://app.sellgo.com/"
						className={styles.navbarLink}
						target="_blank"
						rel="noopener noreferrer"
					>
						Go to my account
					</a>
				</li>
				<li className={styles.navbarTopLink}>
					<a href="/support" className={styles.navbarLink}>
						Customer Support
					</a>
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
