import React from 'react';
import { v4 as uuid } from 'uuid';

/* Styles */
import styles from './index.module.scss';

/* Components */
import PricingPlansCardHead from './PricingPlansCardHead';
import PricingPlansCardFeaturesList from './PricingPlansCardFeaturesList';

interface Props {
	name: string;
	productsDatabase: number;
	salesEstimateCount: number;
	perDayPrice: number;
	yearlyPrice: number;
	annualPrice: number;
	featuresLists: any;
	featureSubName: string;
	planName: string;
}

const PricingPlansCard: React.FC<Props> = (props) => {
	const {
		name,
		productsDatabase,
		perDayPrice,
		yearlyPrice,
		annualPrice,
		featuresLists,
		featureSubName,
		planName,
		salesEstimateCount
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
					planName={planName}
					salesEstimateCount={salesEstimateCount}
				/>

				<p className={styles.planType}>{featureSubName}</p>

				<div className={styles.pricingPlansCardBody}>
					{featuresLists.map((featureList: any) => {
						return (
							<PricingPlansCardFeaturesList key={uuid()} {...featureList} />
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default PricingPlansCard;
