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
					<Link href="/extension" passHref>
						<a>Extension</a>
					</Link>
				</li>
				<li className="footerNavigationLinks">
					<Link href="/search-management" passHref>
						<a>Search Management</a>
					</Link>
				</li>
				<li className="footerNavigationLinks">
					<Link href="/profit-finder" passHref>
						<a>Profit Finder</a>
					</Link>
				</li>
				<li className="footerNavigationLinks">
					<Link href="/product-tracker" passHref>
						<a>Product Tracker</a>
					</Link>
				</li>
				<li className="footerNavigationLinks">
					<Link href="/seller-finder" passHref>
						<a>Seller Finder</a>
					</Link>
				</li>
			</ul>

			<ul className={styles.footerNavigation}>
				<li className="footerNavigationLinks">Resources</li>
				<li className="footerNavigationLinks">
					<Link href="/blogs" passHref>
						<a>Blogs</a>
					</Link>
				</li>
				<li className="footerNavigationLinks">
					<Link href="/affiliate-program" passHref>
						<a>Affiliate Program</a>
					</Link>
				</li>
				<li className="footerNavigationLinks">
					<Link href="/free-sales-estimation" passHref>
						<a>Free Sales Estimation Tools</a>
					</Link>
				</li>
				<li className="footerNavigationLinks">
					<Link href="/free-fba-calculator" passHref>
						<a>Free Amazon FBA Fee Calculator</a>
					</Link>
				</li>
			</ul>

			<ul className={styles.footerNavigation}>
				<li className="footerNavigationLinks">Support</li>
				<li className="footerNavigationLinks">
					<Link href="/contact" passHref>
						<a>Contact Us</a>
					</Link>
				</li>
				<li className="footerNavigationLinks">
					<Link href="/support" passHref>
						<a>Support Page</a>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default TopFooter;
