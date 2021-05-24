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
	id: number;
	name: string;
	desc: string;
	featureSubName: string;
	featuresLists: any;
	planName: string;
	isMonthly: boolean;
	subscriptionDetails: any;
	withToggle?: boolean;
	className?: string;
}

const PricingPlansCard: React.FC<Props> = (props) => {
	const {
		id,
		name,
		desc,
		featureSubName,
		featuresLists,
		isMonthly,
		planName,
		subscriptionDetails
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
					planName={planName}
					name={name}
					desc={desc}
					id={id}
					subscriptionDetails={subscriptionDetails}
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
			</div>
		</div>
	);
};

export default PricingPlansCard;
