import React, { useState } from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';

/* Styling */
import styles from './index.module.scss';

/* Containers */
import HeroBox from '../../containers/Pricing/HeroBox';
import ProductsPanel from '../../containers/Pricing/ProductsPanel';
import BundlesPanel from '../../containers/Pricing/BundlesPanel';

/* Components */
import SEOHead from '../../components/SEOHead';

/* Data */
import { seoData } from '../../data/SEO/pricing';

/* Utils */
import { generatePageURL } from '../../utils/SEO';

/* App Config */
import AppConfig from '../../config';

interface Props {
	faqDetailsForPricing: any;
	subscriptionDetails: any;
}

const PricingPage: React.FC<Props> = (props) => {
	const { faqDetailsForPricing, subscriptionDetails } = props;

	const [
		isProductsPanelSelected,
		setIsProductsPanelSelected
	] = useState<boolean>(true);

	return (
		<>
			<SEOHead
				title={seoData.title}
				description={seoData.description}
				keywords={seoData.keywords.join(',')}
				imageUrl={seoData.imageUrl}
				pageUrl={generatePageURL(seoData.slug)}
			/>
			<HeroBox
				isProductsPlanSelected={isProductsPanelSelected}
				setProductsPanel={() => setIsProductsPanelSelected(true)}
				setBundlesPanel={() => setIsProductsPanelSelected(false)}
			/>

			{/* render either prcing panel or bundles panel */}
			{isProductsPanelSelected ? (
				<ProductsPanel
					faqDetails={faqDetailsForPricing.products}
					subscriptionDetails={subscriptionDetails}
				/>
			) : (
				<BundlesPanel />
			)}

			<div className={styles.banner}></div>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const pringFAQResponse = await axios.get(
		`${AppConfig.FAQ_BUCKET}/pricing.json`
	);

	const productPricingDetailsResponse = await axios.get(
		`${AppConfig.API_URL}/subscriptions`
	);

	const { data: faqDetailsForPricing } = pringFAQResponse;
	const { data: subscriptionDetails } = productPricingDetailsResponse;

	return {
		props: {
			faqDetailsForPricing,
			subscriptionDetails
		},
		revalidate: 1
	};
};
export default PricingPage;
