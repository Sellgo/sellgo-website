import React from 'react';

/* Containers */
import PricingPlansSection from '../../Pricing/PricingPlansSection';

/* Data */
import { plansAndProductsDetails } from '../../Pricing/ProductsPanel/data';

const StandardPlansPricingSection = () => {
	return (
		<section>
			{/* Generic pricing plans section	 */}
			{plansAndProductsDetails.map((plan: any) => {
				return (
					<PricingPlansSection
						key={plan}
						planName={"Research market and competitor's product in seconds."}
						summary={`Sellgo will help you find the right markets and the right products to sell, 
							with access to daily sales data you need to make informed decisions.`}
						productsIncluded={plan.productsIncluded}
						showOnlyGeneralPlanDetails
					/>
				);
			})}
		</section>
	);
};

export default StandardPlansPricingSection;
