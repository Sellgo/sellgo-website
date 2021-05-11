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
	isMonthly: boolean;
	monthlyPrice: number;
	ctaLink: string;
}

const PricingPlansCardHead: React.FC<Props> = (props) => {
	const { planName, ...otherProps } = props;

	return (
		<>
			{['Pay $1 for a day'].includes(planName) ? (
				<PayAsYouGoCardHead {...otherProps} />
			) : (
				<GenericPlanCardHead {...otherProps} />
			)}
		</>
	);
};

export default PricingPlansCardHead;
