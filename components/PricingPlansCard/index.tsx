import React from 'react';

/* Styles */
import styles from './index.module.scss';

/* Components */
import PricingPlansCardHead from './PricingPlansCardHead';
import PricingPlansCardFeaturesList from './PricingPlansCardFeaturesList';

import CTAButton from '../CTAButton';

interface Props {}

const PricingPlansCard: React.FC<Props> = () => {
	return (
		<div className={styles.pricingPlansCardWrapper}>
			<div className={styles.pricingPlansCard}>
				<PricingPlansCardHead />

				<CTAButton
					type="primary"
					size="medium"
					navigateTo="/"
					className={styles.buyNowCTA}
				>
					Buy Now
				</CTAButton>

				<p className={styles.planType}>Starter Plus</p>

				<div className={styles.pricingPlansCardBody}>
					<PricingPlansCardFeaturesList />
					<PricingPlansCardFeaturesList />
					<PricingPlansCardFeaturesList />
				</div>
			</div>
			<button className={styles.seeAllFeatures}>See all features</button>
		</div>
	);
};

export default PricingPlansCard;
