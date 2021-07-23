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

const dollarPlanLink = createCheckoutLink('daily', 'privatelabel$1');

const PrivateLabelOneDollar: React.FC<Props> = () => {
	return (
		<>
			<section className={`big-page-container ${styles.freeTrialSection}`}>
				<h2 className="secondary-heading">Pay $1 to Sell as Private Label</h2>
				<p className={styles.info}>
					Access Sellgo&apos;s $1 Amazon tools for a day and integrate them into
					your Amazon business.
				</p>
				<DollarPlanCTABox 
					className={styles.freeTrialCTABox} 
					isPrimary
					planName='privatelabel$1'
				/>

				<PricingInfoAlert
					className={styles.freeTrialInfoAlert}
					navigateTo="/pricing?type=monthly-and-annual-plans"
					navigateLabel="Premium Tools"
					head={`Start selling on Amazon today with Sellgo's premium tools`}
					desc={`	Want to try our advanced Amazon tools? Review our FBA tools and pricing
									packages.Our premium tools empower you to track and research more products to
										optimize your Amazon business.`}
					background="#F2EFE4"
				/>
			</section>

			<FeaturesSection />
			<BenefitsSection />

			<section className={`big-page-container ${styles.contactInfoSection}`}>
				<ContactInfo message="" />
			</section>

			<section className={`big-page-container ${styles.otherInfoSection}`}>
				<h2 className="secondary-heading">
					Maximize Your Profits with Sellgo&apos;s Amazon Tools!
				</h2>

				<div className={styles.otherInfoCTAWrapper}>
					<CTAButton
						type="primary"
						size="medium"
						navigateTo={dollarPlanLink}
						className={styles.otherInfoCTA}
						asExternal
						newTarget
					>
						Try Now for $1
					</CTAButton>
					<p>Pay less on software, invest more in your business.</p>
				</div>
			</section>
		</>
	);
};

export default PrivateLabelOneDollar;
