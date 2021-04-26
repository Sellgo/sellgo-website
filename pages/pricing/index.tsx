import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Containers */
import HeroBox from '../../containers/Pricing/HeroBox';
import ExtraInfoSection from '../../containers/Pricing/ExtraInfoSection';
import FAQSection from '../../containers/Pricing/FAQSection';

interface Props {}

const PricingPage: React.FC<Props> = () => {
	return (
		<>
			<HeroBox />
			<ExtraInfoSection />
			<FAQSection />
			<div className={styles.banner}></div>
		</>
	);
};

export default PricingPage;
