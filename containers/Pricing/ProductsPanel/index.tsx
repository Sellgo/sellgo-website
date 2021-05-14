import React, { useState } from 'react';
import { Tabs, TabList, Tab, TabPanel, resetIdCounter } from 'react-tabs';
import { v4 as uuid } from 'uuid';

/* Styling */
import styles from './index.module.scss';

/* Conatiners */
import PricingPlansSection from '../PricingPlansSection';
import FreeTrialPanel from '../../FreeTrialPanel';

/* Data */
import { planTypes, plansAndProductsDetails } from './data';

/* Types */
import { FAQDetails } from '../../../interfaces/FAQ';

interface Props {
	faqDetails: FAQDetails[];
}

const ProductsPanel: React.FC<Props> = (props) => {
	// Only for server side isomorphic apps
	resetIdCounter();

	const { faqDetails } = props;

	const [selectedPlanType, setSelectedPlanType] = useState<number>(2);

	const handlePlanSelectChange = (index: number, lastIndex: number) => {
		// [0,1,2,3,4]=['Free Trial','Pay $1 a day', 'Pay $1 1st month']

		if (!index) {
			setSelectedPlanType(lastIndex);
		} else {
			setSelectedPlanType(index);
		}
	};

	return (
		<Tabs
			selectedTabClassName={styles.pricingPanelTab__Selected}
			onSelect={handlePlanSelectChange}
			defaultIndex={2}
		>
			<TabList className={styles.pricingPanelTabList}>
				{planTypes.map((planType: any) => {
					return (
						<Tab key={uuid()} className={styles.pricingPanelTab}>
							{planType.name}
							{planType.isNew && <span className={styles.newBadge}>New</span>}
						</Tab>
					);
				})}
			</TabList>

			{/* Seperation of concern for free trial tab */}
			<TabPanel>
				<FreeTrialPanel faqData={faqDetails[0]} />
			</TabPanel>
			{plansAndProductsDetails.map((plan: any) => {
				return (
					<TabPanel key={uuid()}>
						<PricingPlansSection
							{...plan}
							selectedPlanType={selectedPlanType}
							faqData={faqDetails[selectedPlanType]}
						/>
					</TabPanel>
				);
			})}
		</Tabs>
	);
};

export default ProductsPanel;
