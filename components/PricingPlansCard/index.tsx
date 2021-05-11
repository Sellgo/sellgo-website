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
	isMonthly: boolean;
	monthlyPrice: number;
	ctaLink: string;
	desc: string;
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
		salesEstimateCount,
		isMonthly,
		monthlyPrice,
		ctaLink,
		desc
	} = props;

	const isGradientHeader = plansWithHeaderGradient.includes(name);

	return (
		<div className={styles.pricingPlansCardWrapper}>
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
					isMonthly={isMonthly}
					monthlyPrice={monthlyPrice}
					ctaLink={ctaLink}
					desc={desc}
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
