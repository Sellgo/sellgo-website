import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Modal from 'react-modal';

/* Styling */
import styles from './index.module.scss';

/* Components */
import DemoForm from '../../../containers/Demo/DemoForm';

interface Props {}

const TopFooter: React.FC<Props> = () => {
	const [isDemoFormOpen, setIsDemoFormOpen] = React.useState(false);
	return (
		<div className={styles.topFooter}>
			<div className={styles.logoWrapper}>
				<Link href="/" passHref>
					<a>
						<Image
							src="/sellgoLogo.png"
							alt="Sellgo Coompany Logo"
							width={100}
							height={28}
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
					<Link href="/keyword-finder" passHref>
						<a>Keyword Finder</a>
					</Link>
				</li>
				<li className="footerNavigationLinks">
					<Link href="/keyword-database" passHref>
						<a>Keyword Database</a>
					</Link>
				</li>
				<li className="footerNavigationLinks">
					<Link href="/product-rank-tracker" passHref>
						<a>Product Rank Tracker</a>
					</Link>
				</li>
				<li className="footerNavigationLinks">
					<Link href="/extension" passHref>
						<a>Extension</a>
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
			</ul>

			<ul className={styles.footerNavigation}>
				<li className="footerNavigationLinks">Pricing</li>
				<li className="footerNavigationLinks">
					<Link href="/pricing?type=wholesale" passHref>
						<a>Free tools </a>
					</Link>
				</li>
				<li className="footerNavigationLinks">
					<Link href="/pricing" passHref>
						<a>Monthly and annual plans</a>
					</Link>
				</li>
			</ul>

			<ul className={styles.footerNavigation}>
				<li className="footerNavigationLinks">Resources</li>
				<li className="footerNavigationLinks">
					<Link href="/sales-estimator" passHref>
						<a>Free sales estimator</a>
					</Link>
				</li>
				<li className="footerNavigationLinks">
					<Link href="/blogs" passHref>
						<a>Blogs</a>
					</Link>
				</li>
				<li className="footerNavigationLinks">
					<Link href="/partnership-program" passHref>
						<a>Partnership program</a>
					</Link>
				</li>
			</ul>

			<ul className={styles.footerNavigation}>
				<li className="footerNavigationLinks">Support</li>
				<li className="footerNavigationLinks">
					<Link href="/contact" passHref>
						<a>Contact us</a>
					</Link>
				</li>
				<li className="footerNavigationLinks">
					<Link href="/about-us" passHref>
						<a>About us</a>
					</Link>
				</li>

				<li className={styles.footerNavigation}>
					<button
						onClick={() => setIsDemoFormOpen(true)}
						className={styles.footerNavigation}
					>
						<a>Talk to sales</a>
					</button>
				</li>
			</ul>

			<Modal
				isOpen={isDemoFormOpen}
				onRequestClose={() => setIsDemoFormOpen(false)}
				className="modal"
				overlayClassName="modalOverlay"
			>
				<DemoForm onRequestClose={() => setIsDemoFormOpen(false)} />
			</Modal>
		</div>
	);
};

export default TopFooter;
