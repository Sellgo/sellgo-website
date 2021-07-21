import React from 'react';

/* Components */
import GenericPlanCardHead from '../GenericPlanCardHead';

interface Props {
	// product details
	id: number;
	name: string;
	productsDatabase: number;
	salesEstimateCount: number;
	monthlyPrice: number;
	annualPrice: number;
	desc: string;

	// plan details
	isMonthly: boolean;
	planName: string;

	// used for price summary card head inside table comparision
	withToggle?: boolean;
	className?: string;
	handleChange?: () => any;
}

const PricingPlansCardHead: React.FC<Props> = (props) => {
	const {
		name,
		monthlyPrice,
		annualPrice,
		desc,
		isMonthly,
		withToggle,
		handleChange,
		className
	} = props;

	return (
		<>
			<GenericPlanCardHead
				name={name}
				desc={desc}
				monthlyPrice={monthlyPrice}
				annualPrice={annualPrice}
				isMonthly={isMonthly}
				// Optional props
				withToggle={withToggle}
				className={className}
				handleChange={handleChange}
			/>
		</>
	);
};

export default PricingPlansCardHead;
