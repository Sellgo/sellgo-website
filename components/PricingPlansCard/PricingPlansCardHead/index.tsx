import React from 'react';

/* Components */
import GenericPlanCardHead from '../GenericPlanCardHead';

interface Props {
	// product details
	name: string;
	monthlyPrice: number;
	annualPrice: number;
	desc: string;

	// plan details
	isMonthly: boolean;
	setIsMonthly: (isMonthly: boolean) => void;
	
	// used for price summary card head inside table comparision
	withToggle?: boolean;
	className?: string;
	isNew?: boolean;
	isSmall?: boolean;
	handleChange?: () => any;
}

const PricingPlansCardHead: React.FC<Props> = (props) => {
	const {
		name,
		monthlyPrice,
		annualPrice,
		desc,
		isNew,
		isMonthly,
		setIsMonthly,
		withToggle,
		handleChange,
		isSmall,
		className
	} = props;

	return (
		<>
			<GenericPlanCardHead
				isNew={isNew}
				isSmall={isSmall}
				name={name}
				desc={desc}
				monthlyPrice={monthlyPrice}
				setIsMonthly={setIsMonthly}
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

PricingPlansCardHead.defaultProps = {
	withToggle: false,
	className: '',
	isNew: false,
	isSmall: false,
	handleChange: () => null
};

export default PricingPlansCardHead;
