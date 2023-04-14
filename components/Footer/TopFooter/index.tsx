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

				{/* <a
					href="https://aws.amazon.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src="/amazonWebServices.png" alt="Amazon Web Services Logo" />
				</a> */}
			</div>

			<ul className={styles.footerNavigation}>
				<li className="footerNavigationLinks">Popular Features</li>
				<li className="footerNavigationLinks">
					<Link href="/" passHref>
						<a>Sales solutions</a>
					</Link>
				</li>
				<li className="footerNavigationLinks">
					<Link href="/" passHref>
						<a>Marketing solutions</a>
					</Link>
				</li>
				<li className="footerNavigationLinks">
					<Link href="/" passHref>
						<a>Amazon seller contact search</a>
					</Link>
				</li>
				<li className="footerNavigationLinks">
					<Link href="/" passHref>
						<a>Amazon seller buying intent</a>
					</Link>
				</li>
				<li className="footerNavigationLinks">
					<Link href="/" passHref>
						<a>CRM lead enrichment</a>
					</Link>
				</li>
			</ul>

			<ul className={styles.footerNavigation}>
				<li className="footerNavigationLinks">Use Cases</li>
				<li className="footerNavigationLinks">
					<Link href="/" passHref>
						<a>For ads agencies</a>
					</Link>
				</li>
				<li className="footerNavigationLinks">
					<Link href="/" passHref>
						<a>For marketing agencies</a>
					</Link>
				</li>
				<li className="footerNavigationLinks">
					<Link href="/" passHref>
						<a>For SAAS companies</a>
					</Link>
				</li>
				<li className="footerNavigationLinks">
					<Link href="/" passHref>
						<a>For ecom vendor</a>
					</Link>
				</li>
			</ul>

			<ul className={styles.footerNavigation}>
				<li className="footerNavigationLinks">B2B Database</li>
				<li className="footerNavigationLinks">
					<Link href="/" passHref>
						<a>Browse companies</a>
					</Link>
				</li>
				<li className="footerNavigationLinks">
					<Link href="/" passHref>
						<a>Brand search</a>
					</Link>
				</li>
				<li className="footerNavigationLinks">
					<Link href="/" passHref>
						<a>Intent search</a>
					</Link>
				</li>
			</ul>

			<ul className={styles.footerNavigation}>
				<li className="footerNavigationLinks">Resources</li>
				<li className="footerNavigationLinks">
					<Link href="/pricing?type=usage-based-plans" passHref>
						<a>Pricing</a>
					</Link>
				</li>
				<li className="footerNavigationLinks">
					<Link href="/" passHref>
						<a>Tutorials</a>
					</Link>
				</li>
				<li className="footerNavigationLinks">
					<Link href="/" passHref>
						<a>Help center</a>
					</Link>
				</li>
				<li className="footerNavigationLinks">
					<Link href="/" passHref>
						<a>API</a>
					</Link>
				</li>
				<li className="footerNavigationLinks">
					<Link href="/blogs" passHref>
						<a>Blogs</a>
					</Link>
				</li>
				<li className="footerNavigationLinks">
					<Link href="/sales-estimator" passHref>
						<a>Free sales estimator</a>
					</Link>
				</li>
				<li className={styles.footerNavigation}>
					<button
						onClick={() => setIsDemoFormOpen(true)}
						className={styles.footerNavigation}
					>
						<a>Book a demo</a>
					</button>
				</li>
				{/* <li className="footerNavigationLinks">
					<Link href="/partnership-program" passHref>
						<a>Partnership program</a>
					</Link>
				</li> */}
			</ul>

			<ul className={styles.footerNavigation}>
				<li className="footerNavigationLinks">Our Company</li>
				<li className="footerNavigationLinks">
					<Link href="/" passHref>
						<a>About Sellgo</a>
					</Link>
				</li>
				<li className="footerNavigationLinks">
					<Link href="/" passHref>
						<a>FAQs</a>
					</Link>
				</li>
				<li className="footerNavigationLinks">
					<Link href="/career" passHref>
						<a>Career</a>
					</Link>
				</li>
				<li className="footerNavigationLinks">
					<Link href="/contact" passHref>
						<a>Contact us</a>
					</Link>
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
