import React from 'react';
import Image from 'next/image';
import { v4 as uuid } from 'uuid';

/* Styles */
import styles from './index.module.scss';

/* Components */
import PricingPlansCardHead from './PricingPlansCardHead';
import PricingPlansCardFeaturesList from './PricingPlansCardFeaturesList';

interface Props {
	// product details
	name: string;
	setIsMonthly: (isMonthly: boolean) => void;
	users: number;
	lookups: number;
	monthlyPrice: number;
	annualPrice: number;
	desc: string;
	featureSubName: string;
	featuresLists: any;
	isNew?: boolean;
	isFree?: boolean;
	isEnterprise?: boolean;
	isUsage?: boolean;

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
		users,
		lookups,
		featureSubName,
		featuresLists,
		isMonthly,
		isFree,
		isEnterprise,
		isUsage
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
					Most popular
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
					setIsMonthly={setIsMonthly}
					isFree={isFree}
					isEnterprise={isEnterprise}
					isUsage={isUsage}
					users={users}
					lookups={lookups}
				/>

				<p className={styles.planType}>
					Everything in <strong>{featureSubName}</strong>, plus:
				</p>

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

PricingPlansCard.defaultProps = {
	isNew: false,
	isFree: false,
	isEnterprise: false,
	isUsage: false
};

export default PricingPlansCard;
