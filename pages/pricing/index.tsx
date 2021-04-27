import React, { useState } from 'react';

/* Styling */
import styles from './index.module.scss';

/* Containers */
import HeroBox from '../../containers/Pricing/HeroBox';
import ProductsPanel from '../../containers/Pricing/ProductsPanel';
import BundlesPanel from '../../containers/Pricing/BundlesPanel';

import MarketplaceSection from '../../containers/Pricing/MarketplaceSection';
import RecommendedBundlesSection from '../../containers/Pricing/RecommendedBundlesSection';
import ExtraInfoSection from '../../containers/Pricing/ExtraInfoSection';
import FAQSection from '../../containers/Pricing/FAQSection';

/* Components */
import FreeTrialCTABox from '../../components/FreeTrialCTABox';
import ContactInfo from '../../components/ContactInfo';

interface Props {}

const PricingPage: React.FC<Props> = () => {
	const [
		isProductsPanelSelected,
		setIsProductsPanelSelected
	] = useState<boolean>(true);

	return (
		<>
			<HeroBox
				isProductsPlanSelected={isProductsPanelSelected}
				setProductsPanel={() => setIsProductsPanelSelected(true)}
				setBundlesPanel={() => setIsProductsPanelSelected(false)}
			/>

			{/* render either prcing panel or bundles panel */}
			{isProductsPanelSelected ? <ProductsPanel /> : <BundlesPanel />}

			<FreeTrialCTABox />
			<MarketplaceSection />
			<RecommendedBundlesSection />

			<section className={`big-page-container ${styles.contactInfoSection}`}>
				<ContactInfo />
			</section>

			<ExtraInfoSection />
			<FAQSection />

			<div className={styles.banner}></div>
		</>
	);
};

export default PricingPage;
