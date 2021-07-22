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
							src="/footerLogo.png"
							alt="Sellgo Coompany Logo"
							width={75}
							height={30}
						/>
					</a>
				</Link>

				<a
					href="https://aws.amazon.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src="/amazonWebServices.png" alt="Amazon Web Services Logo" />
				</a>
			</div>

			<ul className={styles.footerNavigation}>
				<li className="footerNavigationLinks">Software</li>
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
					<Link href="/seller-database" passHref>
						<a>Seller Database</a>
					</Link>
				</li>
				<li className="footerNavigationLinks">
					<Link href="/seller-finder" passHref>
						<a>Seller Finder</a>
					</Link>
				</li>
				<li className="footerNavigationLinks">
					<Link href="/seller-map" passHref>
						<a>Seller Map</a>
					</Link>
				</li>
			</ul>

			<ul className={styles.footerNavigation}>
				<li className="footerNavigationLinks">Pricing</li>
				<li className="footerNavigationLinks">
					<Link href="/pricing?type=wholesale" passHref>
						<a>Pay $1 for a day </a>
					</Link>
				</li>
				<li className="footerNavigationLinks">
					<Link href="/pricing?type=private-label" passHref>
						<a>Private Label $1</a>
					</Link>
				</li>
				<li className="footerNavigationLinks">
					<Link href="/pricing" passHref>
						<a>Monthly and Annual Plans</a>
					</Link>
				</li>
				<li className="footerNavigationLinks">
					<Link href="/pricing?type=seller-scout-pro" passHref>
						<a>Seller Scout Pro</a>
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
			</ul>

			<ul className={styles.footerNavigation}>
				<li className="footerNavigationLinks">Support</li>
				<li className="footerNavigationLinks">
					<Link href="/contact" passHref>
						<a>Contact Us</a>
					</Link>
				</li>
				<li className="footerNavigationLinks">
					<Link href="/contact-sales" passHref>
						<a>Contact Sales</a>
					</Link>
				</li>
				<li className="footerNavigationLinks">
					<Link href="/demo" passHref>
						<a>Request Free Demo</a>
					</Link>
				</li>
				<li className="footerNavigationLinks">
					<Link href="/about-us" passHref>
						<a>About Us</a>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default TopFooter;
