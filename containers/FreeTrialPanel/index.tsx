import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import FreeTrialCTABox from '../../components/FreeTrialCTABox';
import PricingInfoAlert from '../../components/PricingInfoAlert';

/* Containers */
import FeaturesSection from './FeaturesSection';

interface Props {}

const FreeTrialPanel: React.FC<Props> = () => {
	return (
		<>
			<section className={`big-page-container ${styles.freeTrialSection}`}>
				<h2 className="secondary-heading">Free Trial</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				<FreeTrialCTABox className={styles.freeTrialCTABox} />
				<PricingInfoAlert className={styles.freeTrialInfoAlert} />
			</section>

			<FeaturesSection />
		</>
	);
};

export default FreeTrialPanel;
