import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import FreeTrialCTABox from '../../components/FreeTrialCTABox';
import PricingInfoAlert from '../../components/PricingInfoAlert';
import ContactInfo from '../../components/ContactInfo';

/* Containers */
import FeaturesSection from './FeaturesSection';
import BenefitsSection from './BenefitsSection';
import FAQSection from './FAQSection';
import CTAButton from '../../components/CTAButton';

/* Types */
import { FAQDetails } from '../../interfaces/FAQ';

interface Props {
	faqData: FAQDetails;
}

const FreeTrialPanel: React.FC<Props> = (props) => {
	const { faqData: freeTrailFAQData } = props;

	return (
		<>
			<section className={`big-page-container ${styles.freeTrialSection}`}>
				<h2 className="secondary-heading">Free Trial</h2>
				<p>We offer a 7-day free trial with no credit card required.</p>
				<FreeTrialCTABox className={styles.freeTrialCTABox} isPrimary />
				<PricingInfoAlert
					className={styles.freeTrialInfoAlert}
					navigateTo="/"
					navigateLabel="Learn More"
				/>
			</section>

			<FeaturesSection />
			<BenefitsSection />

			<section className={`big-page-container ${styles.contactInfoSection}`}>
				<ContactInfo />
			</section>

			{freeTrailFAQData.data.length > 0 && (
				<FAQSection faqData={freeTrailFAQData.data} />
			)}

			<section className={`big-page-container ${styles.otherInfoSection}`}>
				<h2 className="secondary-heading">
					Maximize Your Profits with Sellgo&apos;s Free Tools!
				</h2>
				<CTAButton
					type="primary"
					size="medium"
					navigateTo="/"
					className={styles.otherInfoCTA}
				>
					Try Now 7-day Free Trial
				</CTAButton>
			</section>
		</>
	);
};

export default FreeTrialPanel;
