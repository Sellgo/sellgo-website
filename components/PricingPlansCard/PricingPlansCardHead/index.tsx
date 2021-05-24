import React from 'react';

/* Components */
import GenericPlanCardHead from '../GenericPlanCardHead';

interface Props {
	id: number;
	name: string;
	desc: string;
	isMonthly: boolean;
	planName?: string;
	subscriptionDetails: any;

	// used for price summary card head inside table comparision
	withToggle?: boolean;
	className?: string;
	handleChange?: (state: boolean) => any;
}

const PricingPlansCardHead: React.FC<Props> = (props) => {
	const {
		name,
		id,
		isMonthly,
		desc,
		subscriptionDetails,
		...otherProps
	} = props;

	const getSubscriptionPrices = subscriptionDetails.filter(
		(subscription: any) => {
			return subscription.id === id;
		}
	)[0];

	return (
		<>
			<GenericPlanCardHead
				name={name}
				desc={desc}
				monthlyPrice={Number(getSubscriptionPrices.monthly_price)}
				annualPrice={Number(getSubscriptionPrices.yearly_price)}
				isMonthly={isMonthly}
				{...otherProps}
			/>
		</>
	);
};

export default PricingPlansCardHead;
