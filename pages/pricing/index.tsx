import React, { useState } from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';

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

/* Constants */
import { limitDateForCustomerCount } from '../../constants';

interface Props {
	pricingFaqDetails: { products: any; bundles: any };
}

const PricingPage: React.FC<Props> = (props) => {
	const { pricingFaqDetails } = props;

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
				<ProductsPanel productsPanelFaqList={pricingFaqDetails.products} />
			) : (
				<BundlesPanel />
			)}
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const response = await axios.get(`${AppConfig.FAQ_BUCKET}/pricing.json`);
	const pricingFaqDetails = response.data;

	const limitDate = new Date(limitDateForCustomerCount).getTime();
	let customerCount;
	try {
		const customerCountResponse = await axios.get(
			`${AppConfig.API_URL}/customer-count?limit_date=${limitDate}`
		);
		customerCount = Math.max(customerCountResponse.data.count, 23);
	} catch (error) {
		customerCount = 23; // Random number for now
	}

	return {
		props: {
			pricingFaqDetails,
			customerCount
		}
	};
};

export default PricingPage;
