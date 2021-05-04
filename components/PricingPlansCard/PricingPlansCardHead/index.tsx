import React from 'react';

/* Components */
import PayAsYouGoCardHead from '../PayAsYouGoCardHead';
import GenericPlanCardHead from '../GenericPlanCardHead';

interface Props {
	name: string;
	productsDatabase: number;
	perDayPrice: number;
	yearlyPrice: number;
	annualPrice: number;
	planName: string;
	salesEstimateCount: number;
}

const PricingPlansCardHead: React.FC<Props> = (props) => {
	const { planName, ...otherProps } = props;

	return (
		<>
			{['Pay As You Go'].includes(planName) ? (
				<PayAsYouGoCardHead {...otherProps} />
			) : (
				<GenericPlanCardHead {...otherProps} />
			)}
		</>
	);
};

export default PricingPlansCardHead;
