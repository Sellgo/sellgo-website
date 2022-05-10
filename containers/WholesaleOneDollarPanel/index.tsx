import React from 'react';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

/* Components */
import FreePlanCtaBox from '../../components/FreePlanCtaBox';
import PricingInfoAlert from '../../components/PricingInfoAlert';

/* Containers */
import FeaturesSection from './FeaturesSection';
import BenefitsSection from './BenefitsSection';

interface Props {}

const WholesaleOneDollar: React.FC<Props> = () => {
	return (
		<>
			<section className={`big-page-container ${styles.dollarPlanSection}`}>
				<h2 className={styles.title}>
					Unlock your &nbsp;
					<Image src="/growth.png" width={95} height={47} alt="growth" />
					&nbsp; today with Sellgo&apos;s free tools.
				</h2>
				<p className={styles.info}>
					Get access to all of Sellgo&apos;s free Seller Database, Keyword Research,
					Product Research and Bulk Analysis tools.
				</p>
				<FreePlanCtaBox
					className={styles.dollarPlanCTABox}
					isPrimary
					planName="free"
				/>

				<PricingInfoAlert
					className={styles.infoAlert}
					navigateTo="/pricing?type=monthly-and-annual-plans"
					navigateLabel="Learn More"
					head={`Start selling on Amazon today with Sellgo's premium tools`}
					desc={`Want To Try Our Advanced Amazon Tools? Review Our FBA Tools 
					And Pricing Packages. Our Premium Tools Empower You To Track And 
					Research More Products To Optimize Your Amazon Business.`}
					background="#EBEEF0"
				/>
			</section>

			<FeaturesSection />
			<BenefitsSection />
		</>
	);
};

export default WholesaleOneDollar;
