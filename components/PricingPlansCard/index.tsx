import React from 'react';
import { v4 as uuid } from 'uuid';

/* Styles */
import styles from './index.module.scss';

/* Components */
import PricingPlansCardHead from './PricingPlansCardHead';
import PricingPlansCardFeaturesList from './PricingPlansCardFeaturesList';

/* Constants */
import {
	plansWithHeaderGradient,
	pricingCardHeaderGradients
} from '../../constants';

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

	const isGradientHeader = plansWithHeaderGradient.includes(name);

	const cardWrapperClassName = `${styles.pricingPlansCardWrapper} ${
		isGradientHeader ? styles.pricingPlansCardWrapper__NoBorder : ''
	}`;

	return (
		<div className={cardWrapperClassName}>
			{/* Header gradients for plans */}

			{isGradientHeader && (
				<div
					className={styles.headerGradient}
					style={{ background: `${pricingCardHeaderGradients[name]}` }}
				/>
			)}

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
