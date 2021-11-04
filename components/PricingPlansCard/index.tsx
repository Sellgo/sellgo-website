import React from 'react';
import Image from 'next/image';
import { v4 as uuid } from 'uuid';

/* Styles */
import styles from './index.module.scss';

/* Components */
import PricingPlansCardHead from './PricingPlansCardHead';
import PricingPlansCardFeaturesList from './PricingPlansCardFeaturesList';
import PricePlanToggleButton from '../PricePlanToggleButton';

interface Props {
	// product details
	name: string;
	setIsMonthly: (isMonthly: boolean) => void;
	monthlyPrice: number;
	annualPrice: number;
	desc: string;
	featureSubName: string;
	featuresLists: any;
	isNew?: boolean;

	// plan details
	isMonthly: boolean;
}

const PricingPlansCard: React.FC<Props> = (props) => {
	const {
		name,
		isNew,
		setIsMonthly,
		monthlyPrice,
		annualPrice,
		desc,
		featureSubName,
		featuresLists,
		isMonthly
	} = props;

	return (
		<div
			className={`${styles.pricingPlansCardWrapper} ${
				isNew ? styles.pricingPlansCardWrapper__new : ''
			}`}
		>
			{isNew && (
				<div className={styles.newFeatureBanner}>
					<Image src="/star.svg" width={25} height={25} />
					Most Popular
				</div>
			)}
			<div className={`${styles.pricingPlansCard}`}>
				<PricingPlansCardHead
					name={name}
					desc={desc}
					isNew={isNew}
					monthlyPrice={monthlyPrice}
					annualPrice={annualPrice}
					// plan details
					isMonthly={isMonthly}
				/>

				<p className={styles.planType}>{featureSubName}</p>

				<div className={styles.pricingPlansCardBody}>
					{featuresLists.map((featureList: any) => {
						return (
							<PricingPlansCardFeaturesList key={uuid()} {...featureList} />
						);
					})}
				</div>

				<PricePlanToggleButton
					isMonthly={isMonthly}
					handleChange={() => setIsMonthly(!isMonthly)}
					className={styles.paymentModeToggle}
				/>
			</div>
		</div>
	);
};

PricingPlansCard.defaultProps = {
	isNew: false
};

export default PricingPlansCard;
