import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import DollarPlanCTABox from '../../components/DollarPlanCTABox';
import PricingInfoAlert from '../../components/PricingInfoAlert';
import ContactInfo from '../../components/ContactInfo';
import CTAButton from '../../components/CTAButton';

/* Containers */
import FeaturesSection from './FeaturesSection';
import BenefitsSection from './BenefitsSection';

/* Utils */
import { createCheckoutLink } from '../../utils/Referral';

interface Props {}

const WholesaleOneDollar: React.FC<Props> = () => {
	const dollarPlanLink = createCheckoutLink('daily', 'wholesalearbitrage$2');
	return (
		<>
			<section className={`big-page-container ${styles.dollarPlanSection}`}>
				<h2 className={styles.title}>
					Unsure for monthly commitment? How about $1.99/ day
				</h2>
				<p className={styles.info}>
					Access Sellgo&apos;s $1.99 Amazon tools for a day and integrate them
					into your Amazon business.
				</p>
				<DollarPlanCTABox
					className={styles.dollarPlanCTABox}
					isPrimary
					planName="wholesalearbitrage$2"
				/>

				<PricingInfoAlert
					className={styles.infoAlert}
					navigateTo="/pricing?type=monthly-and-annual-plans"
					navigateLabel="Premium Tools"
					head={`Start selling on Amazon today with Sellgo's premium tools`}
					desc={`	Want to try our advanced Amazon tools? Our premium tools empower you to extract huge profits, unlock growth and healthy cash flow.`}
					background="#EBEEF0"
				/>
			</section>

			<FeaturesSection />
			<BenefitsSection />

			<section className={`big-page-container ${styles.contactInfoSection}`}>
				<ContactInfo message="" />
			</section>

			<section className={`big-page-container ${styles.otherInfoSection}`}>
				<h2>Start your daily plan today, upgrade as you grow</h2>

				<div className={styles.otherInfoCTAWrapper}>
					<CTAButton
						type="primary"
						size="medium"
						variant="purplePinkRainbow"
						navigateTo={dollarPlanLink}
						className={styles.otherInfoCTA}
						asExternal
						newTarget
					>
						Buy now
					</CTAButton>
					<p>Pay less on software, invest more in your business.</p>
				</div>
			</section>
		</>
	);
};

export default WholesaleOneDollar;
