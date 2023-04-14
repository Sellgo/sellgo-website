import React from 'react';
import Image from 'next/image';
import Modal from 'react-modal';

/* Styling */
import Link from 'next/link';
import styles from './index.module.scss';
// import RainbowText from '../../../components/RainbowText';

import DemoForm from '../../Demo/DemoForm';

interface Props {}

const PersonasSection: React.FC<Props> = () => {
	const [isDemoFormOpen, setIsDemoFormOpen] = React.useState(false);

	return (
		<section className={`page-container ${styles.otherInfoSection}`}>
			<h2 className={styles.sectionHeading}>
				We help B2B businesses at all stages of growth
			</h2>
			<p className={styles.sectionDesc}>
				No matter how big you get, AiStock puts smart supply chain automation at
				your fingertips, so you can focus on increasing your sales.
			</p>

			<div className={styles.cardsSectionWrapper}>
				<div className={styles.cardsWrapper}>
					<div className={styles.cardsWrapper__Card}>
						<div className={styles.heroImagewWrapper}>
							<Image
								src="/adsServiceCompaniesHome.png"
								width={260}
								height={400}
								alt="alt"
								className={styles.heroImage}
							/>
						</div>
					</div>
					<h4 className={styles.cardsWrapper__Text}>
						Ads service companies
						<p>Annual less than USD $1M</p>
					</h4>
					<Link href="/ads-service-companies" passHref>
						<a className={styles.cardsWrapper__Link}>
							Learn more about Ads Service &nbsp;
							<Image src="/blueLongArrowRight.svg" width={20} height={8} />
						</a>
					</Link>
				</div>

				<div className={styles.cardsWrapper}>
					<div className={styles.cardsWrapper__Card}>
						<div className={styles.heroImagewWrapper}>
							<Image
								src="/marketingServiceCompaniesHome.png"
								width={260}
								height={400}
								alt="alt"
								className={styles.heroImage}
							/>
						</div>
					</div>
					<h4 className={styles.cardsWrapper__Text}>
						Marketing service companies
						<p>Annual USD $1-2M</p>
					</h4>
					<Link href="/marketing-service-companies" passHref>
						<a className={styles.cardsWrapper__Link}>
							Learn more about Marketing Service &nbsp;
							<Image src="/blueLongArrowRight.svg" width={20} height={8} />
						</a>
					</Link>
				</div>

				<div className={styles.cardsWrapper}>
					<div className={styles.cardsWrapper__Card}>
						<div className={styles.heroImagewWrapper}>
							<Image
								src="/saasCompaniesHome.png"
								width={260}
								height={400}
								alt="alt"
								className={styles.heroImage}
							/>
						</div>
					</div>
					<h4 className={styles.cardsWrapper__Text}>
						SAAS companies
						<p>Annual USD $2-5M</p>
					</h4>
					<Link href="/saas-companies" passHref>
						<a className={styles.cardsWrapper__Link}>
							Learn more about SAAS &nbsp;
							<Image src="/blueLongArrowRight.svg" width={20} height={8} />
						</a>
					</Link>
				</div>

				<div className={styles.cardsWrapper}>
					<div className={styles.cardsWrapper__Card}>
						<div className={styles.heroImagewWrapper}>
							<Image
								src="/ecomVendorCompaniesHome.png"
								width={260}
								height={400}
								alt="alt"
								className={styles.heroImage}
							/>
						</div>
					</div>
					<h4 className={styles.cardsWrapper__Text}>
						Ecom vendor companies
						<p>Annual USD $5-20M</p>
					</h4>
					<Link href="/ecom-vendor-companies" passHref>
						<a className={styles.cardsWrapper__Link}>
							Learn more about Ecom Vendor &nbsp;
							<Image src="/blueLongArrowRight.svg" width={20} height={8} />
						</a>
					</Link>
				</div>
			</div>

			{/* <h2 className="secondary-heading">Enterprises or Agencies?</h2>
			<p className={styles.partnershipDesc}>
				Do you manage multiple brands that have different account owners? or
				<br />
				Are you handling Amazon account with average annual revenue greater than $20M?
			</p>
			<button 			
				className={styles.otherInfoSectionCTA}
				onClick={() => setIsDemoFormOpen(true)}	
				>
				<RainbowText 
				type="orange_purple_gradient">We'd be happy to talk!
				&nbsp;
							<Image
								src="/blueLongArrowRight.svg"
								width={20}
								height={8}
							/>
				</RainbowText>
			</button> */}

			<Modal
				isOpen={isDemoFormOpen}
				onRequestClose={() => setIsDemoFormOpen(false)}
				className="modal"
				overlayClassName="modalOverlay"
			>
				<DemoForm onRequestClose={() => setIsDemoFormOpen(false)} />
			</Modal>
		</section>
	);
};

export default PersonasSection;
