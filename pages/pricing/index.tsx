import React, { useState } from 'react';

/* Styling */
import styles from './index.module.scss';

/* Containers */
import HeroBox from '../../containers/Pricing/HeroBox';
import ProductsPanel from '../../containers/Pricing/ProductsPanel';
import BundlesPanel from '../../containers/Pricing/BundlesPanel';

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

			<div className={styles.banner}></div>
		</>
	);
};

export default PricingPage;
