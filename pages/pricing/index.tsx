import React, { useState } from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';

/* Styling */
import styles from './index.module.scss';

/* Containers */
import HeroBox from '../../containers/Pricing/HeroBox';
import ProductsPanel from '../../containers/Pricing/ProductsPanel';
import BundlesPanel from '../../containers/Pricing/BundlesPanel';
import AppConfig from '../../config';

/* App Config */

interface Props {
	faqDetailsForPricing: any;
}

const PricingPage: React.FC<Props> = (props) => {
	const { faqDetailsForPricing } = props;

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
			{isProductsPanelSelected ? (
				<ProductsPanel faqDetails={faqDetailsForPricing.products} />
			) : (
				<BundlesPanel />
			)}

			<div className={styles.banner}></div>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const response = await axios.get(`${AppConfig.FAQ_BUCKET}/pricing.json`);

	const { data } = response;

	return {
		props: {
			faqDetailsForPricing: data
		},
		revalidate: 1
	};
};
export default PricingPage;
