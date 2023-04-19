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
	users: number;
	lookups: number;
	setIsMonthly: (isMonthly: boolean) => void;

	// used for price summary card head inside table comparision
	withToggle?: boolean;
	className?: string;
	isNew?: boolean;
	isFree?: boolean;
	isEnterprise?: boolean;
	isUsage?: boolean;
	isSmall?: boolean;
	isFirstPlan?: boolean;
	isSecondPlan?: boolean;
	isThirdPlan?: boolean;
	// handleChange?: () => any;
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
		// handleChange,
		isSmall,
		users,
		lookups,
		className,
		isFirstPlan,
		isSecondPlan,
		isThirdPlan,
		isFree,
		isEnterprise,
		isUsage
	} = props;

	return (
		<>
			<GenericPlanCardHead
				isNew={isNew}
				isSmall={isSmall}
				name={name}
				desc={desc}
				users={users}
				lookups={lookups}
				monthlyPrice={monthlyPrice}
				setIsMonthly={setIsMonthly}
				annualPrice={annualPrice}
				isMonthly={isMonthly}
				// Optional props
				withToggle={withToggle}
				className={className}
				// handleChange={handleChange}
				isFree={isFree}
				isEnterprise={isEnterprise}
				isUsage={isUsage}
				isFirstPlan={isFirstPlan}
				isSecondPlan={isSecondPlan}
				isThirdPlan={isThirdPlan}
			/>
		</>
	);
};

PricingPlansCardHead.defaultProps = {
	withToggle: false,
	className: '',
	isNew: false,
	isFree: false,
	isEnterprise: false,
	isSmall: false,
	isUsage: false
	// handleChange: () => null
};

export default PricingPlansCardHead;
