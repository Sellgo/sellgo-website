import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Containers */
import HeroBox from '../../containers/Pricing/HeroBox';
import ExtraInfoSection from '../../containers/Pricing/ExtraInfoSection';
import FAQSection from '../../containers/Pricing/FAQSection';

/* Components */
import FreeTrialCTABox from '../../components/FreeTrialCTABox';

interface Props {}

const PricingPage: React.FC<Props> = () => {
	return (
		<>
			<HeroBox />
			<FreeTrialCTABox />
			<ExtraInfoSection />
			<FAQSection />
			<div className={styles.banner}></div>
		</>
	);
};

export default PricingPage;
