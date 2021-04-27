import React from 'react';
import { v4 as uuid } from 'uuid';

/* Styles */
import styles from './index.module.scss';

/* Components */
import PricingPlansCardHead from './PricingPlansCardHead';
import PricingPlansCardFeaturesList from './PricingPlansCardFeaturesList';

import CTAButton from '../CTAButton';

interface Props {
	name: string;
	productsDatabase: number;
	perDayPrice: number;
	yearlyPrice: number;
	annualPrice: number;
	featuresLists: any;
}

const PricingPlansCard: React.FC<Props> = (props) => {
	const {
		name,
		productsDatabase,
		perDayPrice,
		yearlyPrice,
		annualPrice,
		featuresLists
	} = props;

	return (
		<div className={styles.pricingPlansCardWrapper}>
			<div className={styles.pricingPlansCard}>
				<PricingPlansCardHead
					name={name}
					productsDatabase={productsDatabase}
					perDayPrice={perDayPrice}
					yearlyPrice={yearlyPrice}
					annualPrice={annualPrice}
				/>

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
					{featuresLists.map((featureList: any) => {
						return (
							<PricingPlansCardFeaturesList key={uuid()} {...featureList} />
						);
					})}
				</div>
			</div>
			<button className={styles.seeAllFeatures}>See all features</button>
		</div>
	);
};

export default PricingPlansCard;
