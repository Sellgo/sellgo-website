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
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				<FreeTrialCTABox className={styles.freeTrialCTABox} />
				<PricingInfoAlert className={styles.freeTrialInfoAlert} />
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
				<h2 className="secondary-heading">You May Also Like...</h2>
				<CTAButton
					type="primary"
					size="medium"
					navigateTo="/"
					className={styles.otherInfoCTA}
				>
					Get Started Free
				</CTAButton>
			</section>
		</>
	);
};

export default FreeTrialPanel;
