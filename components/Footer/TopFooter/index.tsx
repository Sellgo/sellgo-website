import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const TopFooter: React.FC<Props> = () => {
	return (
		<div className={styles.topFooter}>
			<div className={styles.logoWrapper}>
				<Link href="/" passHref>
					<a>
						<Image
							src="/sellgoFooterLogo.svg"
							alt="Sellgo Coompany Logo"
							width={150}
							height={57}
						/>
					</a>
				</Link>

				<Link href="/" passHref>
					<a>
						<img src="/amazonWebServices.png" alt="Amazon Web Services Logo" />
					</a>
				</Link>
			</div>

			<ul className={styles.footerNavigation}>
				<li className="footerNavigationLinks">Products</li>
				<li className="footerNavigationLinks">
					<Link href="/" passHref>
						<a>Search Management</a>
					</Link>
				</li>
				<li className="footerNavigationLinks">
					<Link href="/" passHref>
						<a>Profit Finder</a>
					</Link>
				</li>
				<li className="footerNavigationLinks">
					<Link href="/" passHref>
						<a>Product Tracker</a>
					</Link>
				</li>
				<li className="footerNavigationLinks">
					<Link href="/" passHref>
						<a>Seller Database</a>
					</Link>
				</li>
				<li className="footerNavigationLinks">
					<Link href="/" passHref>
						<a>Seller Finder</a>
					</Link>
				</li>
			</ul>

			<ul className={styles.footerNavigation}>
				<li className="footerNavigationLinks">Resources</li>
				<li className="footerNavigationLinks">
					<Link href="/" passHref>
						<a>Blogs</a>
					</Link>
				</li>
				<li className="footerNavigationLinks">
					<Link href="/" passHref>
						<a>Affiliate Program</a>
					</Link>
				</li>
				<li className="footerNavigationLinks">
					<Link href="/" passHref>
						<a>Free Sales Estimation Tools</a>
					</Link>
				</li>
				<li className="footerNavigationLinks">
					<Link href="/" passHref>
						<a>Free Amazon FBA Fee Calculator</a>
					</Link>
				</li>
			</ul>

			<ul className={styles.footerNavigation}>
				<li className="footerNavigationLinks">Support</li>
				<li className="footerNavigationLinks">
					<Link href="/" passHref>
						<a>Contact Us</a>
					</Link>
				</li>
				<li className="footerNavigationLinks">
					<Link href="/" passHref>
						<a>Support Page</a>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default TopFooter;
